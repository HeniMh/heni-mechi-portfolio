import fs from 'node:fs/promises';
import path from 'node:path';
import nodemailer from 'nodemailer';
import { env, isEmailConfigured, isGmailScriptConfigured, isSmtpConfigured } from '../utils/env.js';
const SMTP_TIMEOUTS = {
    family: 4,
    connectionTimeout: 25_000,
    greetingTimeout: 25_000,
    socketTimeout: 30_000
};
function mailContent(message) {
    const text = `Name: ${message.name}\nEmail: ${message.email}\n\nMessage:\n${message.message}`;
    const html = `
    <p><strong>Name:</strong> ${escapeHtml(message.name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(message.email)}">${escapeHtml(message.email)}</a></p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message.message).replace(/\n/g, '<br>')}</p>
  `;
    return {
        subject: `Portfolio contact — ${message.name}`,
        text,
        html
    };
}
async function saveMessage(message) {
    const file = path.resolve(process.cwd(), 'data/messages.json');
    await fs.mkdir(path.dirname(file), { recursive: true });
    let messages = [];
    try {
        messages = JSON.parse(await fs.readFile(file, 'utf8'));
    }
    catch {
        messages = [];
    }
    messages.unshift({ ...message, createdAt: new Date().toISOString() });
    await fs.writeFile(file, JSON.stringify(messages, null, 2));
}
function normalizeScriptUrl(url) {
    let u = url.trim().replace(/\/+$/, '');
    if (u.endsWith('/dev'))
        u = u.slice(0, -3) + 'exec';
    return u;
}
async function sendViaGmailScript(message) {
    const url = normalizeScriptUrl(env.gmailScript.url);
    const params = new URLSearchParams();
    params.set('name', message.name);
    params.set('email', message.email);
    params.set('message', message.message);
    if (env.gmailScript.secret)
        params.set('secret', env.gmailScript.secret);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
        },
        body: params.toString(),
        redirect: 'follow',
        signal: AbortSignal.timeout(30_000)
    });
    const text = await response.text();
    let data;
    try {
        data = JSON.parse(text);
    }
    catch {
        if (/accounts\.google\.com|Sign in/i.test(text)) {
            throw new Error('Script is not public. Redeploy as "Anyone" can access.');
        }
        throw new Error(`Bad script response: ${text.slice(0, 150)}`);
    }
    if (!data.success) {
        throw new Error(data.message || 'Gmail script returned success:false');
    }
}
function gmailTransporters() {
    const auth = { user: env.smtp.user, pass: env.smtp.pass };
    return [
        nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth,
            ...SMTP_TIMEOUTS
        }),
        nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth,
            ...SMTP_TIMEOUTS
        })
    ];
}
function customTransporter() {
    return nodemailer.createTransport({
        host: env.smtp.host,
        port: env.smtp.port,
        secure: env.smtp.secure,
        auth: { user: env.smtp.user, pass: env.smtp.pass },
        ...SMTP_TIMEOUTS
    });
}
function smtpAttempts() {
    if (env.smtp.isGmail) {
        const [t465, t587] = gmailTransporters();
        return [
            { label: '465', transporter: t465 },
            { label: '587', transporter: t587 }
        ];
    }
    return [{ label: String(env.smtp.port), transporter: customTransporter() }];
}
function smtpErrorCode(error) {
    if (error && typeof error === 'object' && 'code' in error) {
        return String(error.code);
    }
    return undefined;
}
function classifySmtpError(error) {
    const code = smtpErrorCode(error);
    if (code === 'EAUTH' || code === 'EENVELOPE')
        return 'auth';
    return 'smtp';
}
async function sendViaSmtp(message) {
    const { subject, text, html } = mailContent(message);
    const mail = {
        from: env.smtp.user,
        to: env.contactTo,
        replyTo: message.email,
        subject,
        text,
        html
    };
    let lastError;
    for (const { label, transporter } of smtpAttempts()) {
        try {
            await transporter.sendMail(mail);
            return;
        }
        catch (error) {
            lastError = error;
            console.error(`[contact] SMTP failed (port ${label}):`, error);
        }
    }
    throw lastError;
}
function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
export async function verifySmtpConnection() {
    if (isGmailScriptConfigured())
        return { ok: true };
    if (!isSmtpConfigured())
        return { ok: false, error: 'not_configured' };
    for (const { label, transporter } of smtpAttempts()) {
        try {
            await transporter.verify();
            console.log(`[contact] SMTP verified (port ${label})`);
            return { ok: true };
        }
        catch (error) {
            console.error(`[contact] SMTP verify failed (port ${label}):`, error);
        }
    }
    return { ok: false, error: 'smtp' };
}
export function messageForDeliveryError(error) {
    switch (error) {
        case 'script':
            return ('Gmail script failed. Open GMAIL_SCRIPT_URL in your browser (must show JSON ok:true). ' +
                'Update the script from server/google-apps-script/ContactForm.gs, run testSend, deploy NEW version as Anyone.');
        case 'auth':
            return (`Gmail rejected SMTP_PASS for ${env.smtp.user}. Create a new App Password at ` +
                'https://myaccount.google.com/apppasswords — or set GMAIL_SCRIPT_URL (recommended on Render).');
        case 'not_configured':
            return 'Email not configured. Set GMAIL_SCRIPT_URL on Render (recommended) or SMTP_USER + SMTP_PASS.';
        default:
            return ('Gmail SMTP is blocked from Render. Set GMAIL_SCRIPT_URL on Render (5 min setup, still uses your Gmail). ' +
                'See server/google-apps-script/ContactForm.gs in the GitHub repo.');
    }
}
export async function handleContactMessage(message) {
    await saveMessage(message);
    if (!isEmailConfigured()) {
        return { sent: false, saved: true, error: 'not_configured' };
    }
    if (isGmailScriptConfigured()) {
        try {
            await sendViaGmailScript(message);
            return { sent: true, saved: true };
        }
        catch (error) {
            console.error('[contact] Gmail script failed:', error);
            return { sent: false, saved: true, error: 'script' };
        }
    }
    try {
        await sendViaSmtp(message);
        return { sent: true, saved: true };
    }
    catch (error) {
        console.error('[contact] All SMTP attempts failed:', error);
        return { sent: false, saved: true, error: classifySmtpError(error) };
    }
}

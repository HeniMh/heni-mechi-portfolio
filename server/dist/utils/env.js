import dotenv from 'dotenv';
dotenv.config();
function clean(value) {
    let v = value.trim();
    if ((v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1).trim();
    }
    return v;
}
const smtpUser = clean(process.env.SMTP_USER || '');
const smtpPass = clean(process.env.SMTP_PASS || '').replace(/\s+/g, '');
const isGmail = smtpUser.toLowerCase().endsWith('@gmail.com');
export const env = {
    port: Number(process.env.PORT || 5001),
    clientUrl: clean(process.env.CLIENT_URL || 'http://localhost:5173').replace(/\/+$/, ''),
    contactTo: clean(process.env.CONTACT_TO || smtpUser || 'henimechi2026@gmail.com'),
    gmailScript: {
        url: clean(process.env.GMAIL_SCRIPT_URL || ''),
        secret: clean(process.env.GMAIL_SCRIPT_SECRET || '')
    },
    smtp: {
        host: clean(process.env.SMTP_HOST || (isGmail ? 'smtp.gmail.com' : '')),
        port: Number(process.env.SMTP_PORT || 465),
        secure: process.env.SMTP_SECURE !== 'false' && process.env.SMTP_SECURE !== '0',
        user: smtpUser,
        pass: smtpPass,
        from: clean(process.env.SMTP_FROM || '') ||
            (smtpUser ? `Heni Portfolio <${smtpUser}>` : 'Heni Portfolio <no-reply@portfolio.local>'),
        isGmail
    }
};
export function isGmailScriptConfigured() {
    return Boolean(env.gmailScript.url);
}
export function isSmtpConfigured() {
    return Boolean(env.smtp.user && env.smtp.pass);
}
export function isEmailConfigured() {
    return isGmailScriptConfigured() || isSmtpConfigured();
}
export function emailProvider() {
    if (isGmailScriptConfigured())
        return 'gmail-script';
    if (isSmtpConfigured())
        return 'smtp';
    return 'none';
}

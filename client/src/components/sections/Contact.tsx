import { FormEvent, useEffect, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { sendContactMessage } from '@/utils/api';
import { validateContactForm, hasFieldErrors, type ContactField, type FieldErrors } from '@/utils/contactValidation';

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; message: string };

const inputClass = (invalid: boolean) =>
  `w-full rounded-xl border bg-night/60 px-4 py-3.5 text-[15px] normal-case tracking-normal text-ink outline-none transition placeholder:text-ink/25 focus:ring-4 focus:ring-accent/10 ${
    invalid ? 'border-accent' : 'border-ink/10 focus:border-accent/60'
  }`;

const labelClass = 'grid gap-2 font-mono text-[11px] uppercase tracking-[.14em] text-muted';
const errorClass = 'font-mono text-[11px] normal-case tracking-normal text-accent';

const channels = [
  { href: `mailto:${portfolio.email}`, label: 'Email', value: portfolio.email, icon: 'mail' as const, external: false },
  { href: `tel:${portfolio.phone}`, label: 'Phone', value: portfolio.phone, icon: 'phone' as const, external: false },
  { href: `https://wa.me/${portfolio.whatsapp.replace(/\D/g, '')}`, label: 'WhatsApp', value: portfolio.whatsapp, icon: 'phone' as const, external: true },
  { href: portfolio.linkedinUrl, label: 'LinkedIn', value: portfolio.linkedin, icon: 'linkedin' as const, external: true }
];

const externalProps = { target: '_blank', rel: 'noopener noreferrer' };

export function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', closeOnEscape);

    const openTimer = window.setTimeout(() => setOpen(true), 10_000);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      window.clearTimeout(openTimer);
    };
  }, []);

  function validateField(name: ContactField, form: HTMLFormElement) {
    const formData = new FormData(form);
    const errors = validateContactForm({
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || '')
    });
    setFieldErrors((prev) => ({ ...prev, [name]: errors[name] }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      message: String(formData.get('message') || '').trim()
    };

    const errors = validateContactForm(payload);
    setFieldErrors(errors);
    setTouched({ name: true, email: true, message: true });
    if (hasFieldErrors(errors)) {
      setStatus({ type: 'error', message: '' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });
    try {
      const result = await sendContactMessage(payload);
      setStatus({
        type: result.mode === 'email' ? 'success' : 'error',
        message: result.message || (result.mode === 'email' ? 'Message sent successfully.' : 'Message saved. Configure email credentials in server/.env to receive it by email.')
      });
      if (result.mode === 'email') {
        form.reset();
        setFieldErrors({});
        setTouched({});
      }
    } catch (error) {
      const err = error as Error & { fieldErrors?: FieldErrors };
      if (err.fieldErrors) {
        setFieldErrors(err.fieldErrors);
        setTouched({ name: true, email: true, message: true });
      }
      setStatus({ type: 'error', message: err.message || 'Could not send your message. Try again or use the direct email link.' });
    }
  }

  function showError(field: ContactField) {
    return touched[field] && fieldErrors[field];
  }

  return (
    <>
      <section id="contact" className="shell grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">05 — Contact</p>
          <h2 className="title mt-5">Tell me what <span className="title-dim">you are building.</span></h2>
          <p className="mt-8 max-w-[44ch] leading-8 text-muted">Available for full-stack freelance missions and senior roles — remote, or on-site in France.</p>
          <dl className="mt-12 border-t border-ink/[.08]">
            {channels.map(channel => (
              <div key={channel.label} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-2 border-b border-ink/[.08] py-4">
                <dt className="font-mono text-[10px] uppercase tracking-[.16em] text-muted">{channel.label}</dt>
                <dd className="min-w-0">
                  <a href={channel.href} {...(channel.external ? externalProps : {})} className="break-words text-[17px] font-medium tracking-[-.02em] transition hover:text-accent">{channel.value}</a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form data-reveal onSubmit={onSubmit} noValidate className="grid content-start gap-8 spot card p-6 md:p-9" data-spot="" aria-label="Contact form">
          <p className="font-mono text-[10px] uppercase tracking-[.16em] text-accent">Send a message</p>

          <label className={labelClass}>
            Name
            <input name="name" minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" aria-invalid={Boolean(showError('name'))} aria-describedby={showError('name') ? 'name-error' : undefined} onBlur={(e) => { setTouched((t) => ({ ...t, name: true })); validateField('name', e.currentTarget.form!); }} className={inputClass(Boolean(showError('name')))} />
            {showError('name') && <span id="name-error" className={errorClass}>{fieldErrors.name}</span>}
          </label>

          <label className={labelClass}>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="your@email.com" aria-invalid={Boolean(showError('email'))} aria-describedby={showError('email') ? 'email-error' : undefined} onBlur={(e) => { setTouched((t) => ({ ...t, email: true })); validateField('email', e.currentTarget.form!); }} className={inputClass(Boolean(showError('email')))} />
            {showError('email') && <span id="email-error" className={errorClass}>{fieldErrors.email}</span>}
          </label>

          <label className={labelClass}>
            Message
            <textarea name="message" rows={4} minLength={10} maxLength={3000} placeholder="Project, mission, stack, timeline..." aria-invalid={Boolean(showError('message'))} aria-describedby={showError('message') ? 'message-error' : undefined} onBlur={(e) => { setTouched((t) => ({ ...t, message: true })); validateField('message', e.currentTarget.form!); }} className={`resize-y ${inputClass(Boolean(showError('message')))}`} />
            {showError('message') && <span id="message-error" className={errorClass}>{fieldErrors.message}</span>}
          </label>

          <button type="submit" disabled={status.type === 'loading'} className="btn-primary justify-center disabled:opacity-50">
            {status.type === 'loading' ? 'Sending...' : 'Send message'} <Icon name="arrow" className="h-4 w-4" />
          </button>
          <p role="status" aria-live="polite" className={`font-mono text-xs ${status.type === 'success' ? 'text-accent' : status.type === 'error' ? 'text-accent' : 'text-muted'}`}>{status.message}</p>
        </form>
      </section>

      <aside className="fixed bottom-5 right-5 z-[90] w-[min(400px,calc(100%-40px))] md:bottom-6 md:right-6" aria-label="Contact information">
        {!open && (
          <button type="button" onClick={() => setOpen(true)} className="group ml-auto flex items-center gap-3 rounded-full border border-ink/10 bg-raised/90 px-5 py-3 text-sm font-semibold text-ink shadow-[0_20px_50px_rgb(0_0_0/.5)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/50" aria-expanded="false" aria-controls="contact-panel">
            <Icon name="mail" className="h-4 w-4" />
            Contact me
            <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        )}

        {open && (
          <div id="contact-panel" className="animate-[panelIn_.3s_ease-out_both] rounded-3xl border border-ink/10 bg-raised/95 text-ink shadow-[0_30px_80px_rgb(0_0_0/.6)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-ink/[.08] px-5 py-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-accent">05 / Contact</span>
                <p className="mt-1 text-lg font-semibold tracking-[-.03em]">Let’s build something useful.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-muted transition hover:bg-ink/5 hover:text-ink" aria-label="Close contact panel" aria-expanded="true" aria-controls="contact-panel"><Icon name="x" className="h-4 w-4" /></button>
            </div>
            <div className="max-h-[min(70vh,560px)] overflow-y-auto px-5 py-4">
              <p className="font-mono text-[10px] uppercase leading-5 tracking-[.14em] text-muted">Available for full-stack freelance missions and senior roles.</p>
              <ul className="mt-2">
                {channels.map(channel => (
                  <li key={channel.label} className="border-b border-ink/10 last:border-0">
                    <a href={channel.href} {...(channel.external ? externalProps : {})} className="flex items-center gap-3 py-3 text-sm transition hover:text-accent">
                      <Icon name={channel.icon} className="h-4 w-4 shrink-0 text-accent" />
                      <span className="font-mono text-[10px] uppercase tracking-[.14em] text-muted">{channel.label}</span>
                      <span className="ml-auto truncate">{channel.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

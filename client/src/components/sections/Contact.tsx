import { FormEvent, useEffect, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { sendContactMessage } from '@/utils/api';
import { validateContactForm, hasFieldErrors, type ContactField, type FieldErrors } from '@/utils/contactValidation';

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; message: string };

const inputClass = (invalid: boolean) =>
  `rounded-2xl border bg-white/55 px-4 py-4 text-sm font-semibold text-[#111318] outline-none transition placeholder:text-black/30 focus:bg-white dark:bg-white/[.04] dark:text-white dark:placeholder:text-white/25 ${
    invalid
      ? 'border-red-400 focus:border-red-400'
      : 'border-black/10 focus:border-black/30 dark:border-white/10 dark:focus:border-[#d9ff63]/60'
  }`;

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
    return () => document.removeEventListener('keydown', closeOnEscape);
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
      <section id="contact" className="mx-auto w-[min(760px,calc(100%-32px))] py-28">
        <div data-reveal className="overflow-hidden rounded-[2.4rem] border border-black/10 bg-white/40 dark:border-white/10 dark:bg-white/[.03]">
        <form onSubmit={onSubmit} noValidate className="grid gap-4 p-6 md:p-10" aria-label="Contact form">
          <div className="mb-2">
            <span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-black/35 dark:text-white/35">Send a message</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-.03em] text-[#111318] dark:text-white">Tell me what you are building.</h2>
            <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45">Share the project, opportunity or automation challenge.</p>
          </div>

          <label className="grid gap-2 text-xs font-extrabold uppercase tracking-[.08em] text-black/55 dark:text-white/55">
            Name
            <input name="name" minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" aria-invalid={Boolean(showError('name'))} aria-describedby={showError('name') ? 'name-error' : undefined} onBlur={(e) => { setTouched((t) => ({ ...t, name: true })); validateField('name', e.currentTarget.form!); }} className={inputClass(Boolean(showError('name')))} />
            {showError('name') && <span id="name-error" className="text-xs font-bold normal-case tracking-normal text-red-600 dark:text-red-400">{fieldErrors.name}</span>}
          </label>

          <label className="grid gap-2 text-xs font-extrabold uppercase tracking-[.08em] text-black/55 dark:text-white/55">
            Email
            <input name="email" type="email" autoComplete="email" placeholder="your@email.com" aria-invalid={Boolean(showError('email'))} aria-describedby={showError('email') ? 'email-error' : undefined} onBlur={(e) => { setTouched((t) => ({ ...t, email: true })); validateField('email', e.currentTarget.form!); }} className={inputClass(Boolean(showError('email')))} />
            {showError('email') && <span id="email-error" className="text-xs font-bold normal-case tracking-normal text-red-600 dark:text-red-400">{fieldErrors.email}</span>}
          </label>

          <label className="grid gap-2 text-xs font-extrabold uppercase tracking-[.08em] text-black/55 dark:text-white/55">
            Message
            <textarea name="message" rows={5} minLength={10} maxLength={3000} placeholder="Project, opportunity, automation, timeline..." aria-invalid={Boolean(showError('message'))} aria-describedby={showError('message') ? 'message-error' : undefined} onBlur={(e) => { setTouched((t) => ({ ...t, message: true })); validateField('message', e.currentTarget.form!); }} className={`resize-y ${inputClass(Boolean(showError('message')))}`} />
            {showError('message') && <span id="message-error" className="text-xs font-bold normal-case tracking-normal text-red-600 dark:text-red-400">{fieldErrors.message}</span>}
          </label>

          <button type="submit" disabled={status.type === 'loading'} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#111318] px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#d9ff63] dark:text-black">
            {status.type === 'loading' ? 'Sending...' : 'Send message'} <Icon name="arrow" className="h-4 w-4" />
          </button>
          <p role="status" aria-live="polite" className={`text-sm font-bold ${status.type === 'success' ? 'text-emerald-600' : status.type === 'error' ? 'text-orange-600' : 'text-black/35 dark:text-white/35'}`}>{status.message}</p>
        </form>
        </div>
      </section>

      <aside className="fixed bottom-5 right-5 z-[90] w-[min(430px,calc(100%-32px))] md:bottom-6 md:right-6" aria-label="Contact information">
      {!open && (
        <button type="button" onClick={() => setOpen(true)} className="contact-pulse group ml-auto flex items-center gap-3 rounded-full border border-black/10 bg-[#d9ff63] px-5 py-3.5 text-sm font-extrabold text-black shadow-[0_18px_45px_rgba(0,0,0,.2)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,.28)] dark:border-white/10" aria-expanded="false" aria-controls="contact-panel">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-[#d9ff63]"><Icon name="mail" className="h-3.5 w-3.5" /></span>
          Contact me
          <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      )}

      {open && <div id="contact-panel" className="animate-[contactPanelIn_.25s_ease-out_both] overflow-hidden rounded-[2rem] border border-white/15 bg-[#111318]/95 text-white shadow-[0_24px_80px_rgba(0,0,0,.4)] backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#d9ff63]">05 / Contact</span>
            <p className="mt-1 text-sm font-extrabold">Let’s build something useful.</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white" aria-label="Close contact panel" aria-expanded="true" aria-controls="contact-panel"><Icon name="x" className="h-4 w-4" /></button>
        </div>

        <div className="max-h-[min(76vh,680px)] overflow-y-auto">
        <div className="relative bg-[#111318] px-5 pb-5 pt-6 text-white">
          <div className="absolute right-0 top-0 h-52 w-52 bg-[#d9ff63]/10 blur-3xl" />
          <h2 className="relative max-w-md font-display text-2xl font-extrabold leading-[1.02] tracking-[-.03em]">Let’s connect.</h2>
          <p className="relative mt-3 max-w-md text-xs font-medium leading-6 text-white/50">Available for front-end, full-stack and automation opportunities.</p>

          <div className="relative mt-5 grid gap-2">
            <a href={`mailto:${portfolio.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-3 text-xs font-bold text-white/75 transition hover:bg-white/[.08] hover:text-white"><Icon name="mail" className="h-4 w-4 text-[#d9ff63]" />{portfolio.email}</a>
            <a href={`tel:${portfolio.phone}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-3 text-xs font-bold text-white/75 transition hover:bg-white/[.08] hover:text-white"><Icon name="phone" className="h-4 w-4 text-[#d9ff63]" />{portfolio.phone}</a>
            <a href={`https://wa.me/${portfolio.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-3 text-xs font-bold text-white/75 transition hover:bg-white/[.08] hover:text-white"><Icon name="phone" className="h-4 w-4 text-[#d9ff63]" /><span>WhatsApp · {portfolio.whatsapp}</span></a>
            <a href={portfolio.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-3 text-xs font-bold text-white/75 transition hover:bg-white/[.08] hover:text-white"><Icon name="linkedin" className="h-4 w-4 text-[#d9ff63]" />LinkedIn · {portfolio.linkedin}</a>
          </div>
        </div>

        </div>
      </div>}
      </aside>
    </>
  );
}

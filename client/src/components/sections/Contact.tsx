import { FormEvent, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { sendContactMessage } from '@/utils/api';
import {
  validateContactForm,
  hasFieldErrors,
  type ContactField,
  type FieldErrors
} from '@/utils/contactValidation';

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; message: string };

const inputClass = (invalid: boolean) =>
  `rounded-2xl border bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900 outline-none transition focus:bg-white focus:ring-4 dark:bg-slate-900 dark:text-white ${
    invalid
      ? 'border-red-400 focus:border-red-400 focus:ring-red-100 dark:border-red-400/60 dark:focus:ring-red-500/20'
      : 'border-slate-200 focus:border-blue-300 focus:ring-blue-100 dark:border-white/10 dark:focus:ring-blue-500/15'
  }`;

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});

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
        message:
          result.message ||
          (result.mode === 'email'
            ? 'Message sent successfully.'
            : 'Message saved. Add your Gmail App Password in server/.env to receive emails.')
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
      setStatus({
        type: 'error',
        message: err.message || 'Could not send your message. Try again or use the email link on the left.'
      });
    }
  }

  function showError(field: ContactField) {
    return touched[field] && fieldErrors[field];
  }

  return (
    <section id="contact" className="mx-auto w-[min(1120px,calc(100%-32px))] py-24">
      <div data-reveal className="grid overflow-hidden rounded-[2.6rem] border border-slate-200 bg-white shadow-soft dark:border-white/10 dark:bg-white/[.04] lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative bg-slate-950 p-8 text-white md:p-10">
          <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl" />
          <span className="text-xs font-black uppercase tracking-[.22em] text-blue-200">Contact</span>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-black tracking-[-0.04em]">
            Let’s discuss your freelance project or company opportunity
          </h2>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-300">
            Available for Upwork projects, direct freelance missions, remote contracts and front-end roles in companies.
          </p>
          <div className="mt-8 grid gap-3">
            <a
              href={`mailto:${portfolio.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold transition hover:bg-white/10"
            >
              <Icon name="mail" className="h-5 w-5 text-blue-300" />
              {portfolio.email}
            </a>
            <a
              href={`tel:${portfolio.phone}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold transition hover:bg-white/10"
            >
              <Icon name="phone" className="h-5 w-5 text-blue-300" />
              {portfolio.phone}
            </a>
            <a
              href={portfolio.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold transition hover:bg-white/10"
            >
              <Icon name="linkedin" className="h-5 w-5 text-blue-300" />
              {portfolio.linkedin}
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="grid gap-4 p-6 md:p-8">
          <label className="grid gap-2 text-sm font-black text-slate-800 dark:text-white">
            Name
            <input
              name="name"
              minLength={2}
              maxLength={80}
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={Boolean(showError('name'))}
              aria-describedby={showError('name') ? 'name-error' : undefined}
              onBlur={(e) => {
                setTouched((t) => ({ ...t, name: true }));
                validateField('name', e.currentTarget.form!);
              }}
              className={inputClass(Boolean(showError('name')))}
            />
            {showError('name') && (
              <span id="name-error" className="text-xs font-bold text-red-600 dark:text-red-400">
                {fieldErrors.name}
              </span>
            )}
          </label>

          <label className="grid gap-2 text-sm font-black text-slate-800 dark:text-white">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              aria-invalid={Boolean(showError('email'))}
              aria-describedby={showError('email') ? 'email-error' : undefined}
              onBlur={(e) => {
                setTouched((t) => ({ ...t, email: true }));
                validateField('email', e.currentTarget.form!);
              }}
              className={inputClass(Boolean(showError('email')))}
            />
            {showError('email') && (
              <span id="email-error" className="text-xs font-bold text-red-600 dark:text-red-400">
                {fieldErrors.email}
              </span>
            )}
          </label>

          <label className="grid gap-2 text-sm font-black text-slate-800 dark:text-white">
            Message
            <textarea
              name="message"
              rows={5}
              minLength={10}
              maxLength={3000}
              placeholder="Tell me about your project or opportunity..."
              aria-invalid={Boolean(showError('message'))}
              aria-describedby={showError('message') ? 'message-error' : undefined}
              onBlur={(e) => {
                setTouched((t) => ({ ...t, message: true }));
                validateField('message', e.currentTarget.form!);
              }}
              className={`resize-y ${inputClass(Boolean(showError('message')))}`}
            />
            {showError('message') && (
              <span id="message-error" className="text-xs font-bold text-red-600 dark:text-red-400">
                {fieldErrors.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status.type === 'loading' ? 'Sending...' : 'Send message'}{' '}
            <Icon name="arrow" className="h-4 w-4" />
          </button>

          <p
            className={`text-sm font-bold ${
              status.type === 'success'
                ? 'text-emerald-600'
                : status.type === 'error'
                  ? 'text-orange-600'
                  : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}

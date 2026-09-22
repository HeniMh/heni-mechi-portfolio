export const API_URL = 'https://heni-mechi-portfolio.onrender.com';

export const API_BASE_URL = import.meta.env.DEV
  ? ''
  : (import.meta.env.VITE_API_URL || API_URL);

export type ContactPayload = { name: string; email: string; message: string };

export type ContactApiError = Error & {
  fieldErrors?: Partial<Record<keyof ContactPayload, string>>;
};

export async function sendContactMessage(payload: ContactPayload) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = (await response.json().catch(() => ({}))) as {
    message?: string;
    errors?: Partial<Record<keyof ContactPayload, string>>;
  };

  if (!response.ok) {
    const error = new Error(data.message || 'Message could not be sent.') as ContactApiError;
    if (data.errors) error.fieldErrors = data.errors;
    throw error;
  }

  return data as { success: boolean; message: string; mode?: string };
}

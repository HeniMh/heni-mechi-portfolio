export type ContactFields = { name: string; email: string; message: string };
export type ContactField = keyof ContactFields;
export type FieldErrors = Partial<Record<ContactField, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(fields: ContactFields): FieldErrors {
  const errors: FieldErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (name.length < 2) errors.name = 'Name must be at least 2 characters.';
  else if (name.length > 80) errors.name = 'Name must be 80 characters or less.';

  if (!email) errors.email = 'Email is required.';
  else if (!emailPattern.test(email)) errors.email = 'Enter a valid email address.';

  if (message.length < 10) errors.message = 'Message must be at least 10 characters.';
  else if (message.length > 3000) errors.message = 'Message must be 3000 characters or less.';

  return errors;
}

export function hasFieldErrors(errors: FieldErrors) {
  return Object.keys(errors).length > 0;
}

import type { Request, Response } from 'express';
import { z } from 'zod';
import {
  handleContactMessage,
  messageForDeliveryError
} from '../services/contactService.js';

const schema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(80, 'Name must be 80 characters or less.'),
  email: z.string().trim().email('Enter a valid email address.'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters.')
    .max(3000, 'Message must be 3000 characters or less.')
});

function fieldErrors(error: z.ZodError) {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === 'string' && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}

export async function contactController(req: Request, res: Response) {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    const errors = fieldErrors(parsed.error);
    const firstMessage = Object.values(errors)[0] || 'Invalid form data';
    return res.status(400).json({ success: false, message: firstMessage, errors });
  }

  try {
    const result = await handleContactMessage(parsed.data);

    if (result.sent) {
      return res.status(200).json({
        success: true,
        mode: 'email',
        message: 'Message sent successfully.i\'ll get back to you as soon as possible.'
      });
    }

    if (result.error) {
      return res.status(502).json({
        success: false,
        mode: 'saved',
        saved: result.saved,
        message: messageForDeliveryError(result.error)
      });
    }

    return res.status(200).json({
      success: true,
      mode: 'saved',
      message: 'Message saved locally.'
    });
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Server error while sending message.';
    return res.status(500).json({ success: false, message });
  }
}

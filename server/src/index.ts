import express from 'express';
import cors, { type CorsOptions } from 'cors';
import helmet from 'helmet';
import { emailProvider, env, isEmailConfigured, isGmailScriptConfigured } from './utils/env.js';
import { isAllowedOrigin } from './utils/cors.js';
import { contactRoutes } from './routes/contactRoutes.js';
import { messageForDeliveryError, verifySmtpConnection } from './services/contactService.js';

const app = express();

app.use(helmet());
const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) callback(null, true);
    else {
      console.warn(`[cors] Blocked origin: ${origin}`);
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) =>
  res.json({
    status: 'ok',
    service: 'Heni Mechi Portfolio API',
    emailConfigured: isEmailConfigured(),
    emailProvider: emailProvider(),
    gmailScript: isGmailScriptConfigured()
  })
);
app.use('/api/contact', contactRoutes);

const server = app.listen(env.port, '0.0.0.0', async () => {
  console.log(`Portfolio API running on port ${env.port}`);

  if (!isEmailConfigured()) {
    console.warn('Email not configured: set GMAIL_SCRIPT_URL or SMTP on Render.');
    return;
  }

  console.log(`Contact → ${env.contactTo} via ${emailProvider()}`);

  if (!isGmailScriptConfigured()) {
    const check = await verifySmtpConnection();
    if (check.ok) console.log('Gmail SMTP ready.');
    else if (check.error) console.error(`⚠ ${messageForDeliveryError(check.error)}`);
  } else {
    console.log('Gmail Apps Script relay configured.');
  }
});

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${env.port} is in use.`);
  } else {
    console.error(error);
  }
  process.exit(1);
});

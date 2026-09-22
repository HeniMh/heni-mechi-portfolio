# Heni Mechi — Fullstack Tailwind Portfolio

React + TypeScript + Vite frontend, Tailwind CSS styling, SCSS globals, and Node.js/Express contact API.

## Run Frontend

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173

## Run Backend

Open a second terminal:

```bash
cd server
npm install
copy .env.example .env
npm run dev
```

API: http://localhost:5001/api/health

## Receive contact form messages in Gmail

The contact form needs SMTP credentials. Gmail blocks normal passwords, so create a Gmail **App Password**.

In `server/.env`:

```env
PORT=5001
CLIENT_URL=http://localhost:5173
CONTACT_TO=henimechi2026@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM="Heni Portfolio <your-gmail@gmail.com>"
```

Restart the server after editing `.env`.

Without SMTP, the backend still saves messages in `server/data/messages.json`, but it cannot deliver them to your email inbox.

## Build Frontend

```bash
cd client
npm run build
```

/**
 * SETUP (do in order):
 * 1. Paste this file in https://script.google.com
 * 2. In the toolbar dropdown, select "testSend" (NOT parsePayload) → Run → Allow Gmail
 * 3. Deploy → New deployment → Web app → Execute as: Me → Anyone → copy /exec URL
 * 4. Put that URL in Render as GMAIL_SCRIPT_URL
 */
const INBOX = 'henimechi2026@gmail.com';
const SCRIPT_SECRET = '';

function parsePayload(e) {
  if (!e) return {};
  if (e.parameter && e.parameter.name) return e.parameter;
  if (e.postData && e.postData.contents) {
    var type = (e.postData.type || '').toLowerCase();
    if (type.indexOf('application/json') !== -1) {
      return JSON.parse(e.postData.contents);
    }
    var out = {};
    var pairs = e.postData.contents.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var part = pairs[i].split('=');
      out[decodeURIComponent(part[0])] = decodeURIComponent(part[1] || '');
    }
    return out;
  }
  return e.parameter || {};
}

function readFields(data) {
  if (SCRIPT_SECRET && String(data.secret || '') !== SCRIPT_SECRET) {
    throw new Error('Unauthorized');
  }
  return {
    name: String(data.name || '').trim(),
    email: String(data.email || '').trim(),
    message: String(data.message || '').trim()
  };
}

function sendContact(fields) {
  if (!fields.name || !fields.email || !fields.message) {
    throw new Error('Missing name, email, or message');
  }

  GmailApp.sendEmail(INBOX, 'Portfolio contact — ' + fields.name, buildBody(fields), {
    replyTo: fields.email
  });
}

function buildBody(fields) {
  return 'Name: ' + fields.name + '\nEmail: ' + fields.email + '\n\nMessage:\n' + fields.message;
}

function doGet() {
  return json({ success: true, ok: true, message: 'Contact script is running' });
}

function doPost(e) {
  try {
    var fields = readFields(parsePayload(e));
    sendContact(fields);
    return json({ success: true, message: 'Sent' });
  } catch (err) {
    return json({ success: false, message: String(err) });
  }
}

/** Run THIS from the editor (dropdown → testSend → Run). */
function testSend() {
  sendContact({
    name: 'Test',
    email: 'test@example.com',
    message: 'Script test from Apps Script editor'
  });
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}

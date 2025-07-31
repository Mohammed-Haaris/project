# EmailJS Setup Guide

## How to Set Up EmailJS for Your Contact Form

### 1. Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_jo02ixd`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{name}}

Hello,

You have received a new message from your portfolio website:

**Name:** {{name}}
**Email:** {{email}}
**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID** (e.g., `template_6dxahds`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `5lThGkM92596aN9Tv`)

### 5. Update Your Code
The Contact.jsx file is already configured with these IDs:
- Service ID: `service_jo02ixd`
- Template ID: `template_6dxahds`
- Public Key: `5lThGkM92596aN9Tv`

If you need to change them, update these values in `src/components/Contact.jsx`:

```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// In handleSubmit function
const result = await emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  e.target,
  "YOUR_PUBLIC_KEY"
);
```

### 6. Test Your Form
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the message
5. Check the browser console for any errors

### 7. Troubleshooting
- **Form not sending**: Check that all IDs are correct
- **Email not received**: Check your spam folder
- **Console errors**: Verify your EmailJS account is active
- **CORS issues**: Make sure you're using the correct public key

### 8. Production Deployment
- EmailJS works the same in production
- No additional configuration needed
- Free tier allows 200 emails per month

### 9. Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely
- No sensitive credentials are stored in your code

## Current Configuration
Your contact form is configured with:
- ✅ EmailJS initialization
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Character counter for message
- ✅ Form reset functionality
- ✅ Responsive design

The form is ready to use! Just make sure your EmailJS account is properly set up with the correct service and template IDs. 
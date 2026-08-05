# Amit Communications — Next.js website

A modern, mobile-first Next.js rebuild of the Amit Communications website.

## Included

- A fresh warm editorial design that is intentionally distinct from the True Master Fiber project
- Local copies of the existing Amit Communications logo and website imagery
- Responsive Home, Plans, Get Connection, FAQ, Contact, Complaint and Helpful Notes routes
- Current listed plans, business email, phone numbers and WhatsApp link
- Mobile quick actions for plans, connection requests and WhatsApp
- Functional forms:
  - Connection and contact forms prepare a WhatsApp message for the existing business number
  - Complaint form prepares a support email in the visitor's email application
- Article routes matching the existing blog slugs

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel as a new project.
3. Vercel detects Next.js automatically. Keep the default build settings.
4. Deploy.

No environment variables are currently needed.

## Updating business data

Update phones, email, WhatsApp link, plans and FAQ content in [`lib/site.js`](./lib/site.js).

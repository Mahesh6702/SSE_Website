# Sri Sai Enterprises Website

Official company website for Sri Sai Enterprises, built with React + TypeScript.

The website showcases services, company profile, client trust signals, and a contact workflow for enquiries.

## Highlights

- Multi-page business site with route-based navigation.
- Services showcase for logistics, manpower, picker/packer, security, community maintenance, and housekeeping.
- About page with company profile, values, and leadership details.
- Contact page with enquiry form integration and process flow.
- Responsive UI for desktop and mobile.

## Tech Stack

- React 19
- TypeScript
- Vite 6
- React Router DOM 7
- Tailwind CSS 4
- Lucide React icons

## Pages

- Home: Hero section, core services preview, trust points, client logos.
- Services: Detailed offering grid and hiring/management workflow.
- About: Company story, profile data, values, and team.
- Contact: Enquiry form, contact details, and engagement process.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open the local URL shown in terminal (usually http://localhost:5173)

## Scripts

- npm run dev: Start Vite development server.
- npm run build: Type-check and create production build.
- npm run preview: Preview production build locally.

## Build

```bash
npm run build
```

Production files are generated in the dist folder.

## Project Structure

```text
src/
  components/        Reusable UI components (Navbar, Footer)
  pages/             Route pages (Home, Services, About, Contact)
  assets/            Static images and asset index files
  App.tsx            Route composition
  main.tsx           React bootstrap
```

## Contact Form Integration

The enquiry form posts submissions through FormSubmit to the configured business email.

- Endpoint pattern: https://formsubmit.co/ajax/<email>
- Current configured email is maintained in the Contact page source.

## Screenshots

Add project screenshots in an images folder and reference them here, for example:

```md
![Home Page](./images/home.png)
![Services Page](./images/services.png)
![Contact Page](./images/contact.png)
```

## Deployment

Deploy the dist output to any static host (Netlify, Vercel, GitHub Pages, Firebase Hosting, etc.).

For Netlify, this repo includes `netlify.toml` with SPA fallback routing so deep links like `/jobs?from=qr` work correctly.

### QR Code URL Configuration

The Careers page generates the QR target automatically.

- If `VITE_PUBLIC_BASE_URL` is set, QR uses that base URL.
- If not set, QR uses the current site origin (`window.location.origin`).

For internet deployment, set:

```bash
VITE_PUBLIC_BASE_URL=https://your-domain.com
```

Then rebuild and deploy.

Typical steps:

1. npm run build
2. Deploy the dist directory

## Repository

https://github.com/Mahesh6702/SSE_Website.git

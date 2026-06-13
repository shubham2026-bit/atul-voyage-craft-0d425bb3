# Shree Radhe Travels

🌐 **Live Website:** [https://atul-voyage-craft.lovable.app](https://atul-voyage-craft.lovable.app)
🌐 **Vercel deployment:** [https://atul-tour-and-travel.vercel.app](https://atul-tour-and-travel.vercel.app)

A travel services website for Shree Radhe Travels offering car rentals, hotel bookings, and tour packages.

## Production Readiness

The following production hardening is in place:

- SEO meta tags (title, description, OG, Twitter) per route via TanStack `head()`
- `public/sitemap.xml` and `public/robots.txt`
- JSON-LD `LocalBusiness` structured data on the homepage
- `public/manifest.json` (PWA-ready) + theme-color
- Security headers in `vercel.json` (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS)
- Custom 404 page (`__root.tsx` notFoundComponent) and error boundary
- Privacy Policy (`/privacy-policy`) and Terms of Service (`/terms-of-service`) pages, linked from the footer
- Enquiry form: client + server validation, honeypot spam protection, friendly fallback message on failure
- Accessibility: ARIA labels on icon-only buttons, semantic landmarks, focus styles via shadcn defaults
- `.env.example` documenting required environment variables
- Vercel deployment config preserved (`nitro: vercel`, output `.vercel/output`)

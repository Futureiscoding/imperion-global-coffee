# Imperion Global Holdings website

## Update content

- Edit verified copy and configuration in `content/rebuild-kit.js`.
- Keep missing facts in bracketed placeholders such as `[MANAGING DIRECTOR EMAIL]`.
- Production builds run `scripts/check-placeholders.js` and stop when unresolved placeholders remain.
- The development placeholder banner lists areas that need verification.

## Photos

The photo and video assets used by the homepage gallery are in `public/images/gallery/` and `public/videos/`. The required real-photo list is in `public/images/manifest.json`. Do not use stock or implied certificates.

## Geo-mapping

Update `content/rebuild-kit.js`'s `geoMapping` object. The default status must remain `Planned` until work is verified.

## Environment variables

- `ZOHO_SMTP_HOST`
- `ZOHO_SMTP_PORT`
- `ZOHO_SMTP_USER`
- `ZOHO_SMTP_PASS`
- `CONTACT_TO_EMAIL`
- `SALES_TO_EMAIL`
- `MACADAMIA_TO_EMAIL`
- `DOCUMENTS_TO_EMAIL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (optional)
- `TURNSTILE_SECRET_KEY` (optional)

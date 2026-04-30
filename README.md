# Veronica — Therapy Website

A one-page Astro static site

## Stack
- **Astro** — static site generator
- **Plain CSS**
- **Google Fonts** — Cormorant Garamond (headings), DM Sans (body), Caveat (signature)
- **Netlify** — recommended hosting (free tier)

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to /dist
npm run preview   # preview the built site
```

---

## Project Structure

```
src/
  components/
    Nav.astro        ← sticky navigation bar
    Hero.astro       ← full hero with photo + CTA
    Offerings.astro  ← 2×2 service cards grid
    About.astro      ← split layout with photo + bio
    Contact.astro    ← dark teal CTA block + footer
  layouts/
    Base.astro       ← HTML shell, font imports, meta
  pages/
    index.astro      ← assembles all components
  styles/
    global.css       ← design tokens + reset
public/
  styles/global.css  ← static copy served to browser
  images/            ← put photos here
```

---

## Customising Content

### Replace placeholder photos
In `Hero.astro` and `About.astro`, find the `.hero__image-placeholder` and `.about__image-placeholder` divs.
Replace the inner div with:
```html
<img src="/images/your-photo.jpg" alt="Dr. [Name]" />
```
Drop photos in `/public/images/`.

### Update name & contact
- Name in nav → `Nav.astro`, line 4
- Email link → `Contact.astro`
- Instagram handle → `Contact.astro`
- Location → `Contact.astro` footer

### Update service descriptions
All four service cards are in `Offerings.astro` — edit the `services` array at the top.

### Update the About bio
Edit the paragraphs in `About.astro`.

### Change colours
All colour tokens live in `src/styles/global.css` under `:root { ... }`.
Key ones:
- `--teal` — headings, CTA button, footer background
- `--linen` — page background
- `--blush` — art therapy / women's circles card background
- `--sage-card` — 1-on-1 / dream work card background

---

## Deploying to Netlify

1. Push repo to GitHub
2. In Netlify: **New site → Import from Git**
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done — auto-deploys on every push

---

## Adding a Custom Domain
In Netlify → **Domain settings → Add custom domain**.
Point your DNS A record to Netlify's load balancer IP.

---

## Notes for the Psychologist

- **No CMS needed** — content lives in `.astro` files, editable in any text editor
- **Optional**: Add [Decap CMS](https://decapcms.org) later for browser-based editing without touching code
- **GDPR**: No forms, no cookies, no tracking by default — add a privacy policy page if you add contact forms
- **Accessibility**: High colour contrast maintained throughout; semantic HTML used throughout

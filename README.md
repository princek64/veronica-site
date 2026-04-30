# Veronica — Therapy Website

A one-page Astro static site

## Stack
- **Astro** — static site generator
- **Plain CSS**
- **Google Fonts** — Cormorant Garamond (headings), DM Sans (body), Caveat (signature)
- **Netlify**

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


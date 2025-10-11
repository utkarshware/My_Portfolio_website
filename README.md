# My Portfolio Website — Utkarsh Singh

[![Repo size](https://img.shields.io/github/repo-size/utkarshware/My_Portfolio_website?style=flat-square)](https://github.com/utkarshware/My_Portfolio_website)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](#license)

A clean, responsive, and accessible single‑page portfolio. Content is fully data‑driven (from `data.js`) and rendered dynamically with `script.js`. Ships as static files, with an optional Node.js dev server.

---

## Features

- Data-driven content from `data.js` (hero, about, skills, projects, socials, JSON‑LD)
- Responsive layout and theme toggle (light/dark preference stored)
- Social icons and project visuals (SVGs in `assets/`)
- Project image hover overlay and a scroll progress indicator
- Accessible navigation (skip link, focusable controls)
- Optional Node.js dev server (Express + compression) for reliable local testing

---

## Project structure

```
My_Portfolio_website/
├─ assets/
│  ├─ icons/           # svg icons (github, linkedin, twitter, favicon)
│  └─ images/          # project visuals (svg/png/webp)
├─ data.js             # all site content (PORTFOLIO_DATA)
├─ index.html          # base HTML (mount points only)
├─ script.js           # DOM rendering, theme, scroll progress, nav
├─ styles.css          # styles and responsive layout
├─ server.js           # optional Node dev server (Express)
├─ package.json        # npm scripts and dependencies
└─ README.md           # this file
```

---

## Getting started

### Option A — Just open the file (fastest)

- Double‑click `index.html` to open it in your browser.
- Paths are relative (e.g., `assets/images/...`), so images and icons load without a server.

### Option B — Run with Node.js (recommended for dev)

From the project folder:

```cmd
npm install
npm run start
```

- Open: http://localhost:5173
- Dev mode with auto‑reload:

```cmd
npm run dev
```

Prefer Python? This also works:

```cmd
python -m http.server 8000
start "" "http://localhost:8000"
```

---

## Customize content (data.js)

All visible content lives in `data.js` under `window.PORTFOLIO_DATA`. Edit it to update the site.

Shape overview:

```js
window.PORTFOLIO_DATA = {
  meta: {
    title: "Utkarsh Singh — Robotics & Automation | Portfolio",
    description: "Short SEO description...",
    resumeHref: "assets/Utkarsh_Singh_Resume.pdf", // or a full URL
  },
  profile: {
    name: "Utkarsh Singh",
    heroLead: "One‑liner for the hero section",
    about: "Longer bio paragraph for the About section",
    photo: "assets/images/myimage.jpg", // optional portrait shown in the hero
    photoAlt: "Accessible alt text for the portrait",
  },
  contact: {
    email: "you@example.com",
    phone: "+91 ...",
    location: "City, Country",
  },
  skills: [
    "Python · C · C++ · Embedded C",
    // ...more
  ],
  projects: [
    {
      title: "Project title",
      date: "Apr 2025",
      oneLine: "Short one‑liner",
      description: "A few sentences explaining your contribution and impact",
      tech: ["Tag1", "Tag2"],
      img: "assets/images/project-hero.svg",
      alt: "Accessible alt text",
      live: "#", // optional
      code: "#", // optional
    },
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/utkarshware",
      aria: "GitHub — Utkarsh Singh",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/utkarshware/",
      aria: "LinkedIn — Utkarsh Singh",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/utkarshware",
      aria: "Twitter — Utkarsh Singh",
    },
  ],
  schema: {
    /* JSON‑LD Person schema used for SEO */
  },
};
```

Assets:

- Place project images in `assets/images/` and reference them with relative paths (e.g., `assets/images/your-image.webp`).
- Portraits for the hero can live in the same folder (e.g., `assets/images/myimage.jpg`) and be referenced via `profile.photo`.
- Place icons in `assets/icons/`. The script expects file names matching social names (github.svg, linkedin.svg, twitter.svg).

---

## UI / behavior overview

- Theme toggle: persists the last chosen theme in localStorage.
- Scroll progress bar: a thin accent bar at the top that fills as you scroll.
- Project cards: image with a subtle overlay on hover and tags in the content.
- Social icons: simple SVGs rendered as images next to the hero content.
- Hero portrait: loads from `profile.photo`; if omitted, a decorative orbit animation displays instead.

---

## Troubleshooting

- Images or icons not visible
  - Ensure your paths are relative: `assets/images/...` or `assets/icons/...` (no leading slash).
  - If you previously used absolute `/assets/...` paths, they won’t load with file:// — use the relative paths provided.
  - Confirm files exist and names match exactly (Git hosts are case sensitive).
  - Open DevTools → Network and check for 404s.
- Theme toggle stuck on one mode
  - Press <kbd>F12</kbd> → Console and run `localStorage.removeItem('theme')`, then refresh.
  - Ensure your custom CSS still targets both `.light` and `[data-theme="light"]` selectors on the `<html>` element.
- Social icon colors
  - SVGs loaded as `<img>` won’t inherit link color; use lighter icons for dark themes, or inline SVG if you need `currentColor` styling.
- Mobile nav doesn’t open/close
  - If you customize the nav, keep the JS and CSS class names aligned (toggle script and CSS must use the same open state).
- Node server won’t start
  - Ensure Node 18+ is installed. Reinstall deps with `npm install`.
  - If the port is busy: set `PORT=5174` (PowerShell: `$env:PORT=5174; npm run start`).

---

## Deploy

- Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages.
- Upload the repo contents as‑is. Asset paths are relative, so subpaths work.

---

## License

MIT — feel free to use and adapt. Attribution appreciated.

---

## Credits

- Design and implementation by Utkarsh Singh.
- Icons and images are simple SVG placeholders — replace with your own assets.

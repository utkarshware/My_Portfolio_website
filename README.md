# Utkarsh Singh – Robotics & AI Portfolio

Showcase site for Utkarsh Singh’s robotics, automation, and embedded systems work. The project ships as static HTML/CSS with a lightweight Express helper for local previews.

---

## Live Site

- **GitHub Pages:** https://utkarshware.github.io/My_Portfolio_website/

---

## Features

- Hero section highlighting current studies, focus areas, and key metrics.
- Detailed timeline covering education, leadership, and project experience.
- Project gallery with concise case studies across AR, agritech, and robotics prototypes.
- Skills matrix, collaboration call-to-action, and direct contact/resumé links.
- Responsive layout tuned for desktop and mobile without external UI frameworks.

---

## Tech Stack

- HTML5 and CSS for structure and styling.
- Vanilla JavaScript (optional) for dynamic content loading via `data.js`/`script.js`.
- Node.js + Express (`server.js`) for local static serving with gzip compression.

---

## Project Structure

```
My_Portfolio_website/
├─ assets/             # images and downloadable assets (e.g., résumé PDF)
├─ data.js             # optional content configuration object
├─ index.html          # main static page
├─ script.js           # optional dynamic renderer consuming data.js
├─ styles.css          # global styles and responsive rules
├─ server.js           # Express server for local previews
└─ package.json        # npm scripts and dependencies
```

> Icons are no longer required; any imagery should live under `assets/images/` or a relevant subfolder.

---

## Getting Started

### Static preview

1. Clone or download the repository.
2. Open `index.html` directly in your browser.

### Local server (Node.js)

```cmd
npm install
npm start
```

- Serves the site at `http://localhost:5173` by default (override with `PORT`).
- Development mode with automatic restarts:

```cmd
npm run dev
```

### Alternative lightweight server

```cmd
python -m http.server 8000
start "" "http://localhost:8000"
```

---

## Updating Content

- **Static approach:** edit the HTML directly in `index.html` and styles in `styles.css`.
- **Config-driven approach:** populate `window.PORTFOLIO_DATA` in `data.js` and wire up `script.js` if you prefer rendering sections programmatically. (This route is optional and currently unused on the live site.)
- Update images and downloadable assets under `assets/` and reference them with relative paths.

Remember to keep biography, project descriptions, and contact details in sync with the live deployment.

---

## Deployment

The site is static, so any static host works. Current production deployment uses GitHub Pages via the `main` branch at https://utkarshware.github.io/My_Portfolio_website/. To redeploy, push to `main` and Pages will refresh automatically.

For other hosts (Netlify, Vercel, Cloudflare Pages, etc.), point the host to the repository root—no build step is required.

---

## License

MIT License.

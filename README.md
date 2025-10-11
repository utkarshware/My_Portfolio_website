# Utkarsh Singh – Portfolio

Single-page portfolio focused on robotics, automation, and embedded systems. Ships as static assets and includes an Express server for local previews.

---

## Highlights

- Data in `data.js` drives every section, including SEO metadata.
- Responsive layout with light/dark theming and animated glassmorphism details.
- Project grid with optional imagery, tech badges, and external links.
- Scroll-aware navigation, progress indicator, and custom cursor for desktop.

---

## Stack

- HTML5, CSS, vanilla JavaScript
- Assets stored locally under `assets/icons` and `assets/images`
- Optional Node.js tooling (`express`, `compression`, `serve-static`)

---

## Structure

```
My_Portfolio_website/
├─ assets/             # imagery and icons
├─ data.js             # content configuration (window.PORTFOLIO_DATA)
├─ index.html          # markup shell
├─ script.js           # rendering logic and interactions
├─ styles.css          # styling and responsive rules
├─ server.js           # optional Express static server
└─ package.json        # npm scripts and dependencies
```

---

## Quick start

### Static preview

1. Clone or download the repository.
2. Open `index.html` in a modern browser.

### Node.js preview

```cmd
npm install
npm run start
```

- Serves the site on http://localhost:5173 (set `PORT` to override).
- Development mode with Nodemon:

```cmd
npm run dev
```

### Lightweight alternative

```cmd
python -m http.server 8000
start "" "http://localhost:8000"
```

---

## Customising content

Edit `data.js` to update copy, links, and imagery:

- `meta`: title, description, résumé link.
- `profile`: hero headline, biography, portrait.
- `contact`: email, availability messaging, location, response time.
- `skills`: technology list rendered as badges.
- `projects`: case studies with optional media, tech stack, and links.
- `socials`: social profiles with optional icon overrides.
- `schema`: JSON-LD Person metadata.

Store images in `assets/images/` and reference them with relative paths. Icons belong in `assets/icons/`.

---

## Development notes

- `script.js` hydrates the DOM, manages the nav highlight, theme toggle, and scroll progress bar.
- `styles.css` defines the aurora-inspired visuals and responsive breakpoints (900px and 720px).
- Hero portrait gracefully falls back to a decorative orbit when no image is provided.

---

## Deployment

The site is static. Deploy the repository contents to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). No build step is required.

---

## License

MIT License.

# My Portfolio Website — Utkarsh Singh

[![Repo size](https://img.shields.io/github/repo-size/utkarshware/My_Portfolio_website?style=flat-square)](https://github.com/utkarshware/My_Portfolio_website)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](#license)

> Clean, responsive, and accessible single-page portfolio built with vanilla HTML, CSS and JavaScript — no build step required.

This repository contains the source for my personal portfolio website. The site is intentionally lightweight and fully dynamic: all content (hero, about, skills, projects, socials, JSON-LD) is driven from a single `data.js` file and rendered by `script.js`. See the live files in the repository: `index.html`, `data.js`, `script.js`, `styles.css` and `assets/images`. :contentReference[oaicite:1]{index=1}

---

## 🔍 Project highlights

- **No build step** — just static files (HTML / CSS / JS).
- **Single source of truth**: update `data.js` to change all content.
- **Accessible**: keyboard-friendly nav + skip link included.
- **Theme support**: light/dark mode persisted in `localStorage`.
- **Easy to deploy**: GitHub Pages, Netlify, Vercel — all supported.
- Friendly for beginners and recruiters — quick to customize.

---

## 📁 Repository structure

My_Portfolio_website/
├─ assets/
│ └─ images/ # placeholder and project images
├─ index.html # main HTML (mount points only)
├─ data.js # all content (profile, projects, skills, socials)
├─ script.js # DOM rendering, theme and nav logic
├─ styles.css # styling / responsive layout
└─ README.md # you are here

---

## 🚀 Quick start

### Option A — Open locally (fast)

1. Clone the repo:
   ```bash
   git clone https://github.com/utkarshware/My_Portfolio_website.git
   cd My_Portfolio_website
   ```

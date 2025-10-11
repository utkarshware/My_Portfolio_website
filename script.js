// script.js
(function () {
  const D = window.PORTFOLIO_DATA || {};
  if (!D || !Object.keys(D).length) return;

  // META: update title & meta description if present
  if (D.meta?.title) document.title = D.meta.title;
  if (D.meta?.description) {
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", D.meta.description);
  }

  // Basic profile
  const heroName = document.getElementById("hero-name");
  const heroLead = document.getElementById("hero-lead");
  const logoText = document.getElementById("logo-text");
  const resumeLink = document.getElementById("resume-link");
  const socialLinks = document.getElementById("social-links");
  const aboutParagraph = document.getElementById("about-paragraph");
  const skillList = document.getElementById("skill-list");
  const projectGrid = document.getElementById("project-grid");
  const contactEmail = document.getElementById("contact-email");
  const footerName = document.getElementById("footer-name");
  const yearEl = document.getElementById("year");

  // fill hero/profile text
  if (heroName && D.profile?.name) heroName.textContent = D.profile.name;
  if (heroLead && D.profile?.heroLead)
    heroLead.textContent = D.profile.heroLead;
  if (logoText && D.profile?.name) logoText.textContent = D.profile.name;
  if (resumeLink && D.meta?.resumeHref)
    resumeLink.setAttribute("href", D.meta.resumeHref);
  if (contactEmail && D.contact?.email) {
    contactEmail.setAttribute("href", `mailto:${D.contact.email}`);
    contactEmail.textContent = "Email me";
  }
  if (footerName && D.profile?.name) footerName.textContent = D.profile.name;

  // About
  if (aboutParagraph && D.profile?.about)
    aboutParagraph.textContent = D.profile.about;

  // Social links
  if (socialLinks && Array.isArray(D.socials)) {
    socialLinks.innerHTML = "";
    D.socials.forEach((s) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = s.url || "#";
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", s.aria || s.name);
      a.textContent = s.name;
      li.appendChild(a);
      socialLinks.appendChild(li);
    });
  }

  // Skills
  if (skillList && Array.isArray(D.skills)) {
    skillList.innerHTML = "";
    D.skills.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      skillList.appendChild(li);
    });
  }

  // Projects
  function createProjectCard(p) {
    const article = document.createElement("article");
    article.className = "project-card reveal";

    // image (if exists)
    if (p.img) {
      const img = document.createElement("img");
      img.src = p.img;
      img.alt = p.alt || p.title;
      img.loading = "lazy";
      article.appendChild(img);
    }

    const content = document.createElement("div");
    content.className = "project-content";

    const h3 = document.createElement("h3");
    h3.textContent = p.title;
    content.appendChild(h3);

    const meta = document.createElement("div");
    meta.className = "project-meta";
    meta.textContent = p.oneLine || "";
    content.appendChild(meta);

    if (p.description) {
      const pdesc = document.createElement("p");
      pdesc.textContent = p.description;
      content.appendChild(pdesc);
    }

    if (Array.isArray(p.tech) && p.tech.length) {
      const tags = document.createElement("div");
      tags.className = "tags";
      p.tech.forEach((t) => {
        const span = document.createElement("span");
        span.textContent = t;
        tags.appendChild(span);
      });
      content.appendChild(tags);
    }

    const links = document.createElement("div");
    links.className = "links";
    const live = document.createElement("a");
    live.className = "btn small";
    live.textContent = "Live";
    live.href = p.live || "#";
    live.target = "_blank";
    live.rel = "noopener";
    const code = document.createElement("a");
    code.className = "btn small ghost";
    code.textContent = "Code";
    code.href = p.code || "#";
    code.target = "_blank";
    code.rel = "noopener";
    links.appendChild(live);
    links.appendChild(code);
    content.appendChild(links);

    article.appendChild(content);
    return article;
  }

  if (projectGrid && Array.isArray(D.projects)) {
    projectGrid.innerHTML = "";
    D.projects.forEach((p) => {
      projectGrid.appendChild(createProjectCard(p));
    });
  }

  // Year auto-fill
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // JSON-LD (populate dynamic person schema)
  const ldEl = document.getElementById("person-ld");
  if (ldEl && D.schema) {
    try {
      ldEl.textContent = JSON.stringify(D.schema, null, 2);
    } catch (e) {
      // fallback silent
    }
  }

  // NAV: mobile toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("open");
    });
  }

  // THEME toggle (light/dark) — stores preference in localStorage
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const THEME_KEY = "portfolio-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // initial theme (respect stored, then system)
  (function initTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      applyTheme(stored);
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  })();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
  // --- Dynamic render from data.js (`PORTFOLIO_DATA` is used in this project) ---
  try {
    const DATA =
      typeof PORTFOLIO_DATA !== "undefined"
        ? PORTFOLIO_DATA
        : typeof SITE_DATA !== "undefined"
        ? SITE_DATA
        : null;
    if (DATA) {
      // Hero name/lead
      const heroName = document.getElementById("hero-name");
      const heroLead = document.getElementById("hero-lead");
      const footerName = document.getElementById("footer-name");
      const aboutPara = document.getElementById("about-paragraph");

      heroName &&
        (heroName.textContent = DATA.profile?.name || DATA.name || "");
      heroLead &&
        (heroLead.textContent = DATA.profile?.heroLead || DATA.title || "");
      footerName &&
        (footerName.textContent = DATA.profile?.name || DATA.name || "");
      aboutPara &&
        (aboutPara.textContent = DATA.profile?.about || DATA.about || "");

      // Skills (allow array of strings)
      const skillList = document.getElementById("skill-list");
      if (skillList && Array.isArray(DATA.skills)) {
        skillList.innerHTML = DATA.skills
          .map((s) => `<li>${s}</li>`)
          .join("\n");
      }

      // Projects
      const projectGrid = document.getElementById("project-grid");
      if (projectGrid && Array.isArray(DATA.projects)) {
        projectGrid.innerHTML = DATA.projects
          .map((p) => {
            const tags = (p.tech || p.tags || [])
              .map((t) => `<span>${t}</span>`)
              .join("");
            // overlay for hover effect
            return `
                <article class="project-card reveal">
                  <div class="project-thumb">
                    <img src="${
                      p.img || "assets/images/placeholder-1.svg"
                    }" alt="${p.alt || p.title}" loading="lazy" />
                    <div class="thumb-overlay">
                      <div class="overlay-text">
                        <h4>${p.title}</h4>
                        <p>${p.oneLine || p.description || ""}</p>
                      </div>
                    </div>
                  </div>
                  <div class="project-content">
                    <h3>${p.title}</h3>
                    <p>${p.description || p.oneLine || ""}</p>
                    <div class="tags">${tags}</div>
                  </div>
                </article>
              `;
          })
          .join("\n");
      }

      // Social links (render icons)
      const socialList = document.getElementById("social-links");
      if (socialList && Array.isArray(DATA.socials)) {
        socialList.innerHTML = DATA.socials
          .map((s) => {
            const key = s.name.toLowerCase();
            const iconPath = `/assets/icons/${key}.svg`;
            return `<li><a href="${
              s.url
            }" target="_blank" rel="noopener" aria-label="${
              s.aria || s.name
            }"><img class="social-icon" src="${iconPath}" alt="${
              s.name
            }"/></a></li>`;
          })
          .join("\n");
      }
    }
  } catch (err) {
    console.error("Error rendering data.js:", err);
  }
})();

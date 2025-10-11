// script.js
(function () {
  const D = window.PORTFOLIO_DATA || {};
  const HAS_DATA = D && Object.keys(D).length > 0;

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
  const heroPhotoWrapper = document.getElementById("hero-photo-wrapper");
  const heroPhotoImg = document.getElementById("hero-photo-img");
  const heroOrbit = document.getElementById("hero-orbit");

  // fill hero/profile text
  if (HAS_DATA) {
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
  }

  // Hero portrait (fallback to decorative orbit if no photo provided)
  if (heroPhotoWrapper && heroPhotoImg) {
    if (HAS_DATA && D.profile?.photo) {
      heroPhotoImg.src = D.profile.photo;
      heroPhotoImg.alt =
        D.profile.photoAlt ||
        `Portrait of ${D.profile?.name || "portfolio owner"}`;
      heroPhotoWrapper.removeAttribute("hidden");
      heroPhotoWrapper.setAttribute("aria-hidden", "false");
      if (heroOrbit) {
        heroOrbit.setAttribute("hidden", "");
        heroOrbit.setAttribute("aria-hidden", "true");
      }
    } else {
      heroPhotoWrapper.setAttribute("hidden", "");
      heroPhotoWrapper.setAttribute("aria-hidden", "true");
      if (heroOrbit) {
        heroOrbit.removeAttribute("hidden");
        heroOrbit.setAttribute("aria-hidden", "true");
      }
    }
  }

  // About
  if (HAS_DATA && aboutParagraph && D.profile?.about)
    aboutParagraph.textContent = D.profile.about;

  // Social links
  if (HAS_DATA && socialLinks && Array.isArray(D.socials)) {
    socialLinks.innerHTML = "";
    D.socials.forEach((s) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = s.url || "#";
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", s.aria || s.name);
      const img = document.createElement("img");
      img.className = "social-icon";
      img.alt = s.name;
      img.src = `assets/icons/${(s.name || "").toLowerCase()}.svg`;
      a.appendChild(img);
      li.appendChild(a);
      socialLinks.appendChild(li);
    });
  }

  // Skills
  if (HAS_DATA && skillList && Array.isArray(D.skills)) {
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

    const hasImage = Boolean(p.img);

    // image (if exists)
    if (hasImage) {
      const img = document.createElement("img");
      img.src = p.img;
      img.alt = p.alt || p.title;
      img.loading = "lazy";
      article.appendChild(img);
    } else {
      article.classList.add("without-image");
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

    if (p.live) {
      const live = document.createElement("a");
      live.className = "btn small";
      live.textContent = p.liveLabel || "Live";
      live.href = p.live;
      live.target = "_blank";
      live.rel = "noopener";
      links.appendChild(live);
    }

    if (p.code) {
      const code = document.createElement("a");
      code.className = "btn small ghost";
      code.textContent = p.codeLabel || "GitHub";
      code.href = p.code;
      code.target = "_blank";
      code.rel = "noopener";
      links.appendChild(code);
    }

    if (links.children.length) {
      content.appendChild(links);
    }

    article.appendChild(content);
    return article;
  }

  if (projectGrid) {
    if (HAS_DATA && Array.isArray(D.projects) && D.projects.length) {
      projectGrid.innerHTML = "";
      D.projects.forEach((p) => {
        projectGrid.appendChild(createProjectCard(p));
      });
    } else {
      projectGrid.innerHTML =
        '<p class="projects-empty">Project details will appear here once added to <code>data.js</code>.</p>';
    }
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

  // NAV: mobile toggle (toggle header class for CSS)
  const navToggle = document.getElementById("nav-toggle");
  const header = document.querySelector(".site-header");
  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      header.classList.toggle("nav-open");
    });
  }

  // THEME toggle (uses `.light` class and data-theme on root for CSS)
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const THEME_KEY = "theme";

  (function initTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light") {
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
    } else if (!stored) {
      const prefersLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;
      if (prefersLight) {
        root.classList.add("light");
        root.setAttribute("data-theme", "light");
        localStorage.setItem(THEME_KEY, "light");
      } else {
        root.removeAttribute("data-theme");
        localStorage.setItem(THEME_KEY, "dark");
      }
    } else {
      // stored is 'dark'
      root.classList.remove("light");
      root.removeAttribute("data-theme");
    }
    // reflect toggle button state for a11y
    if (themeToggle) {
      const isLight = root.classList.contains("light");
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
      );
      themeToggle.title = isLight
        ? "Switch to dark mode"
        : "Switch to light mode";
    }
  })();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isLight = root.classList.toggle("light");
      if (isLight) {
        root.setAttribute("data-theme", "light");
      } else {
        root.removeAttribute("data-theme");
      }
      localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
      // update button state
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
      );
      themeToggle.title = isLight
        ? "Switch to dark mode"
        : "Switch to light mode";
    });
  }

  // Scroll progress bar
  const progressBar = document.getElementById("scroll-progress");
  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();

  // Reveal animations
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("visible"));
    }
  }
})();

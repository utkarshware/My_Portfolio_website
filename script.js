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
  const contactEmailLink = document.getElementById("contact-email-link");
  const contactIntro = document.getElementById("contact-intro");
  const contactLocation = document.getElementById("contact-location");
  const contactAvailability = document.getElementById("contact-availability");
  const contactResponse = document.getElementById("contact-response");
  const contactLinkedIn = document.getElementById("contact-linkedin");
  const footerName = document.getElementById("footer-name");
  const yearEl = document.getElementById("year");
  const heroPhotoWrapper = document.getElementById("hero-photo-wrapper");
  const heroPhotoImg = document.getElementById("hero-photo-img");
  const heroOrbit = document.getElementById("hero-orbit");
  const cursorElm = document.getElementById("cursor");
  const cursorRingElm = document.getElementById("cursor-ring");

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
    if (contactEmailLink && D.contact?.email) {
      contactEmailLink.setAttribute("href", `mailto:${D.contact.email}`);
      contactEmailLink.textContent = D.contact.email;
    }
    if (contactIntro && D.contact?.note)
      contactIntro.textContent = D.contact.note;
    if (contactLocation && D.contact?.location)
      contactLocation.textContent = D.contact.location;
    if (contactAvailability && D.contact?.availability)
      contactAvailability.textContent = D.contact.availability;
    if (contactResponse && D.contact?.responseTime)
      contactResponse.textContent = D.contact.responseTime;
    if (contactLinkedIn) {
      let linkedinHref = D.contact?.linkedin;
      if (!linkedinHref && Array.isArray(D.socials)) {
        const linkedinSocial = D.socials.find(
          (s) => (s.name || "").toLowerCase() === "linkedin"
        );
        if (linkedinSocial?.url) linkedinHref = linkedinSocial.url;
      }
      if (linkedinHref) contactLinkedIn.setAttribute("href", linkedinHref);
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
      const iconPath =
        s.icon || `assets/icons/${(s.name || "").toLowerCase()}.svg`;
      if (iconPath) {
        const img = document.createElement("img");
        img.className = "social-icon";
        img.alt = s.name || "Social link";
        img.src = iconPath;
        img.decoding = "async";
        a.appendChild(img);
      } else {
        a.textContent = s.name || "Link";
      }
      li.appendChild(a);
      socialLinks.appendChild(li);
    });
  }

  // Skills
  if (HAS_DATA && skillList && Array.isArray(D.skills)) {
    skillList.innerHTML = "";
    D.skills.forEach((s) => {
      const li = document.createElement("li");
      li.className = "skill-item";
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

    if (p.note) {
      const note = document.createElement("p");
      note.className = "project-note";
      note.textContent = p.note;
      content.appendChild(note);
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

  // NAV indicator + active state handling
  const navMenuSurface = document.querySelector("[data-nav-surface]");
  const navHighlight = document.getElementById("nav-highlight");
  const navLinks = Array.from(
    document.querySelectorAll("#nav-menu a[data-nav-link]")
  );
  let activeNavLink = null;

  const updateHighlight = (link) => {
    if (!navHighlight || !navMenuSurface || !link) return;
    requestAnimationFrame(() => {
      const panelRect = navMenuSurface.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      const width = linkRect.width + 28;
      const center = linkRect.left - panelRect.left + linkRect.width / 2;
      navHighlight.style.setProperty("--highlight-width", `${width}px`);
      navHighlight.style.setProperty("--highlight-x", `${center}px`);
      navHighlight.classList.add("is-visible");
    });
  };

  const setActiveLink = (link) => {
    if (activeNavLink === link) return;
    if (activeNavLink) activeNavLink.classList.remove("is-active");
    activeNavLink = link || null;
    if (activeNavLink) {
      activeNavLink.classList.add("is-active");
      updateHighlight(activeNavLink);
    } else if (navHighlight) {
      navHighlight.classList.remove("is-visible");
    }
  };

  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => updateHighlight(link));
      link.addEventListener("focus", () => updateHighlight(link));
      link.addEventListener("click", () => {
        setActiveLink(link);
        if (header && header.classList.contains("nav-open")) {
          header.classList.remove("nav-open");
          if (navToggle) navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    if (navMenuSurface) {
      navMenuSurface.addEventListener("mouseleave", () => {
        if (activeNavLink) updateHighlight(activeNavLink);
      });
    }

    window.addEventListener("resize", () => {
      if (activeNavLink) updateHighlight(activeNavLink);
    });

    const sectionMap = new Map();
    navLinks.forEach((link) => {
      const id = link.getAttribute("href");
      if (!id || !id.startsWith("#")) return;
      const section = document.getElementById(id.slice(1));
      if (section) sectionMap.set(section, link);
    });

    const sections = Array.from(sectionMap.keys());
    if (sections.length && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const link = sectionMap.get(entry.target);
              if (link) setActiveLink(link);
            }
          });
        },
        {
          threshold: 0.55,
        }
      );

      sections.forEach((section) => observer.observe(section));
    } else if (sections.length) {
      setActiveLink(sectionMap.get(sections[0]));
    }

    if (navLinks[0]) {
      setActiveLink(navLinks[0]);
    }
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

  // Custom cursor (desktop only)
  (function initCustomCursor() {
    if (!cursorElm || !cursorRingElm) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const isCoarsePointer = window.matchMedia("(pointer: coarse)");
    const noHover = window.matchMedia("(hover: none)");

    const shouldDisable = () =>
      prefersReducedMotion.matches ||
      isCoarsePointer.matches ||
      noHover.matches;

    if (shouldDisable()) {
      cursorElm.remove();
      cursorRingElm.remove();
      return;
    }

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRingElm.style.top = `${ringY}px`;
      cursorRingElm.style.left = `${ringX}px`;
      rafId = requestAnimationFrame(render);
    };

    const setCursorPosition = (x, y) => {
      cursorElm.style.top = `${y}px`;
      cursorElm.style.left = `${x}px`;
    };

    const handleMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setCursorPosition(mouseX, mouseY);
      cursorElm.classList.remove("cursor-hidden");
      cursorRingElm.classList.remove("cursor-hidden");
    };

    render();
    setCursorPosition(mouseX, mouseY);

    const interactiveSelectors =
      "a, button, .btn, .nav-toggle, .theme-toggle, input, textarea, select";

    let interactiveActive = false;
    const toggleInteractive = (state) => {
      if (state === interactiveActive) return;
      interactiveActive = state;
      cursorElm.classList.toggle("cursor-interactive", state);
      cursorRingElm.classList.toggle("cursor-interactive", state);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    const handleMouseEnter = (event) => {
      if (!event.clientX && !event.clientY) return;
      handleMove(event);
    };

    const handleMouseOut = (event) => {
      if (event.relatedTarget === null) {
        cursorElm.classList.add("cursor-hidden");
        cursorRingElm.classList.add("cursor-hidden");
        toggleInteractive(false);
      }
    };

    const handleWindowBlur = () => {
      cursorElm.classList.add("cursor-hidden");
      cursorRingElm.classList.add("cursor-hidden");
      toggleInteractive(false);
    };

    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", handleWindowBlur);

    const pointerMoveHandler = (event) => {
      toggleInteractive(
        Boolean(event.target && event.target.closest(interactiveSelectors))
      );
    };

    document.addEventListener("pointermove", pointerMoveHandler, {
      passive: true,
    });

    const cleanup = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("pointermove", pointerMoveHandler);
      cancelAnimationFrame(rafId);
      cursorElm.remove();
      cursorRingElm.remove();
      document.body.classList.remove("has-custom-cursor");
    };

    const handleChange = () => {
      if (!shouldDisable()) return;
      cleanup();
      prefersReducedMotion.removeEventListener("change", handleChange);
      isCoarsePointer.removeEventListener("change", handleChange);
      noHover.removeEventListener("change", handleChange);
    };

    prefersReducedMotion.addEventListener("change", handleChange);
    isCoarsePointer.addEventListener("change", handleChange);
    noHover.addEventListener("change", handleChange);
  })();

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

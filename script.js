(function () {
  const data = window.PORTFOLIO_DATA || {};
  const $ = (selector) => document.querySelector(selector);
  const byId = (id) => document.getElementById(id);

  const updateMeta = () => {
    if (data.meta?.title) document.title = data.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.meta?.description) {
      metaDesc.setAttribute("content", data.meta.description);
    }
  };

  const populateHero = () => {
    const badge = .hero__badge;
    const headline = .hero h1;
    const lead = byId("hero-lead");
    const stats = byId("hero-stats");
    const heroResume = byId("hero-resume");
    const navResume = byId("nav-resume");

    if (badge && data.hero?.badge) badge.textContent = data.hero.badge;
    if (headline && data.hero?.headline) headline.textContent = data.hero.headline;
    if (lead && data.hero?.lead) lead.textContent = data.hero.lead;

    const resumeHref = data.meta?.resumeHref;
    if (heroResume) {
      if (resumeHref) {
        heroResume.href = resumeHref;
      } else {
        heroResume.setAttribute("hidden", "");
      }
    }
    if (navResume) {
      if (resumeHref) {
        navResume.href = resumeHref;
      } else {
        navResume.setAttribute("hidden", "");
      }
    }

    if (stats) {
      stats.innerHTML = "";
      (data.hero?.stats || []).forEach((stat) => {
        if (!stat?.label || !stat?.value) return;
        const dt = document.createElement("dt");
        dt.textContent = stat.label;
        const dd = document.createElement("dd");
        dd.textContent = stat.value;
        stats.appendChild(dt);
        stats.appendChild(dd);
      });
    }
  };

  const populateExpertise = () => {
    const grid = byId("expertise-grid");
    if (!grid) return;
    grid.innerHTML = "";
    (data.expertise || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "expertise-card";

      if (item.title) {
        const h3 = document.createElement("h3");
        h3.textContent = item.title;
        card.appendChild(h3);
      }

      if (item.summary) {
        const p = document.createElement("p");
        p.textContent = item.summary;
        card.appendChild(p);
      }

      if (Array.isArray(item.focus) && item.focus.length) {
        const list = document.createElement("ul");
        item.focus.forEach((focusItem) => {
          const li = document.createElement("li");
          li.textContent = focusItem;
          list.appendChild(li);
        });
        card.appendChild(list);
      }

      grid.appendChild(card);
    });
  };

  const populateProjects = () => {
    const container = byId("project-grid");
    if (!container) return;
    container.innerHTML = "";
    (data.projects || []).forEach((project) => {
      const article = document.createElement("article");
      article.className = "project-card";

      if (project.category || project.period) {
        const meta = document.createElement("div");
        meta.className = "project-card__meta";
        if (project.category) {
          const span = document.createElement("span");
          span.textContent = project.category;
          meta.appendChild(span);
        }
        if (project.period) {
          const span = document.createElement("span");
          span.textContent = project.period;
          meta.appendChild(span);
        }
        article.appendChild(meta);
      }

      if (project.title) {
        const h3 = document.createElement("h3");
        h3.className = "project-card__title";
        h3.textContent = project.title;
        article.appendChild(h3);
      }

      if (project.summary) {
        const summary = document.createElement("p");
        summary.className = "project-card__summary";
        summary.textContent = project.summary;
        article.appendChild(summary);
      }

      if (Array.isArray(project.outcomes) && project.outcomes.length) {
        const ul = document.createElement("ul");
        ul.className = "project-card__outcomes";
        project.outcomes.forEach((outcome) => {
          const li = document.createElement("li");
          li.textContent = outcome;
          ul.appendChild(li);
        });
        article.appendChild(ul);
      }

      if (Array.isArray(project.tags) && project.tags.length) {
        const tags = document.createElement("div");
        tags.className = "project-card__tags";
        project.tags.forEach((tag) => {
          const span = document.createElement("span");
          span.textContent = tag;
          tags.appendChild(span);
        });
        article.appendChild(tags);
      }

      if (Array.isArray(project.links) && project.links.length) {
        const linkGroup = document.createElement("div");
        linkGroup.className = "project-card__links";
        project.links.forEach((link) => {
          if (!link?.url) return;
          const anchor = document.createElement("a");
          anchor.href = link.url;
          anchor.target = "_blank";
          anchor.rel = "noopener";
          anchor.textContent = link.label || "View";
          linkGroup.appendChild(anchor);
        });
        article.appendChild(linkGroup);
      }

      container.appendChild(article);
    });
  };

  const populateAbout = () => {
    const summary = byId("about-summary");
    const highlights = byId("about-highlights");
    const education = byId("meta-education");
    const focus = byId("meta-focus");

    if (summary && data.about?.summary) summary.textContent = data.about.summary;

    if (highlights) {
      highlights.innerHTML = "";
      (data.about?.highlights || []).forEach((point) => {
        const li = document.createElement("li");
        li.textContent = point;
        highlights.appendChild(li);
      });
    }

    const createMetaCard = (cardEl, cardData) => {
      if (!cardEl) return;
      cardEl.innerHTML = "";
      if (cardData?.title) {
        const title = document.createElement("h3");
        title.textContent = cardData.title;
        cardEl.appendChild(title);
      }
      if (cardData?.description) {
        const desc = document.createElement("p");
        desc.textContent = cardData.description;
        cardEl.appendChild(desc);
      }
      if (Array.isArray(cardData?.items) && cardData.items.length) {
        const list = document.createElement("ul");
        cardData.items.forEach((entry) => {
          const li = document.createElement("li");
          li.textContent = entry;
          list.appendChild(li);
        });
        cardEl.appendChild(list);
      }
    };

    createMetaCard(education, data.about?.education);
    createMetaCard(focus, data.about?.focus);
  };

  const populateContact = () => {
    const emailBtn = byId("contact-email");
    const linkedinBtn = byId("contact-linkedin");
    const details = byId("contact-details");
    const socials = byId("contact-social");

    if (emailBtn && data.contact?.email) {
      emailBtn.href = mailto:;
      emailBtn.textContent = data.contact.emailLabel || "Email";
    }

    if (linkedinBtn && data.contact?.linkedin) {
      linkedinBtn.href = data.contact.linkedin;
    } else if (linkedinBtn) {
      linkedinBtn.setAttribute("hidden", "");
    }

    if (details) {
      details.innerHTML = "";
      (data.contact?.details || []).forEach((detail) => {
        if (!detail?.label || !detail?.value) return;
        const dt = document.createElement("dt");
        dt.textContent = detail.label;
        const dd = document.createElement("dd");
        dd.textContent = detail.value;
        details.appendChild(dt);
        details.appendChild(dd);
      });
    }

    if (socials) {
      socials.innerHTML = "";
      (data.contact?.socials || []).forEach((social) => {
        if (!social?.url) return;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = social.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = social.label || social.name || "Social";
        li.appendChild(a);
        socials.appendChild(li);
      });
    }
  };

  const bindNav = () => {
    const toggle = .nav__toggle;
    const menu = .nav__menu;
    const links = document.querySelectorAll("[data-nav-link]");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    }

    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (menu?.classList.contains("open")) {
          menu.classList.remove("open");
          toggle?.setAttribute("aria-expanded", "false");
        }
      });
    });

    if (links.length) {
      const sections = Array.from(links)
        .map((link) => {
          const targetId = link.getAttribute("href");
          if (!targetId || !targetId.startsWith("#")) return null;
          return document.querySelector(targetId);
        })
        .filter(Boolean);

      if (sections.length && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = #;
              const link = Array.from(links).find(
                (anchor) => anchor.getAttribute("href") === id
              );
              if (link) {
                if (entry.isIntersecting) {
                  link.setAttribute("aria-current", "true");
                } else {
                  link.removeAttribute("aria-current");
                }
              }
            });
          },
          { threshold: 0.45 }
        );
        sections.forEach((section) => observer.observe(section));
      }
    }
  };

  const populateFooter = () => {
    const year = byId("footer-year");
    if (year) year.textContent = String(new Date().getFullYear());
  };

  updateMeta();
  populateHero();
  populateExpertise();
  populateProjects();
  populateAbout();
  populateContact();
  bindNav();
  populateFooter();
})();

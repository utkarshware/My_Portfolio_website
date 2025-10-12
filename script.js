(function () {
  const data = window.PORTFOLIO_DATA || {};
  const select = (selector) => document.querySelector(selector);
  const byId = (id) => document.getElementById(id);
  const setText = (el, value) => {
    if (!el || value == null) return;
    el.textContent = value;
  };

  const updateMeta = () => {
    if (data.meta?.title) document.title = data.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.meta?.description) {
      metaDesc.setAttribute("content", data.meta.description);
    }
  };

  const populateHero = () => {
    setText(select(".hero__badge"), data.hero?.badge);
    setText(select(".hero h1"), data.hero?.headline);
    setText(byId("hero-lead"), data.hero?.lead);

    const stats = byId("hero-stats");
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

    const mission = byId("hero-mission");
    if (mission) {
      mission.innerHTML = "";
      (data.hero?.mission || []).forEach((item) => {
        if (!item?.label || !item?.value) return;
        const card = document.createElement("article");
        card.className = "mission-card";

        const label = document.createElement("p");
        label.className = "mission-card__label";
        label.textContent = item.label;
        card.appendChild(label);

        const value = document.createElement("p");
        value.className = "mission-card__value";
        value.textContent = item.value;
        card.appendChild(value);

        mission.appendChild(card);
      });
    }

    const resumeHref = data.meta?.resumeHref;
    const heroResume = byId("hero-resume");
    const navResume = byId("nav-resume");

    [heroResume, navResume].forEach((link) => {
      if (!link) return;
      if (resumeHref) {
        link.href = resumeHref;
        link.removeAttribute("hidden");
      } else {
        link.setAttribute("hidden", "");
      }
    });
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
        item.focus.forEach((focusPoint) => {
          const li = document.createElement("li");
          li.textContent = focusPoint;
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

      if (Array.isArray(project.visual) && project.visual.length) {
        const media = document.createElement("div");
        media.className = "project-card__media";
        project.visual.forEach((visualItem) => {
          if (!visualItem) return;
          const span = document.createElement("span");
          span.className = "project-card__media-item";
          span.textContent = visualItem;
          media.appendChild(span);
        });
        article.appendChild(media);
      }

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
        const list = document.createElement("ul");
        list.className = "project-card__outcomes";
        project.outcomes.forEach((outcome) => {
          const li = document.createElement("li");
          li.textContent = outcome;
          list.appendChild(li);
        });
        article.appendChild(list);
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
    setText(byId("about-summary"), data.about?.summary);

    const highlights = byId("about-highlights");
    if (highlights) {
      highlights.innerHTML = "";
      (data.about?.highlights || []).forEach((highlight) => {
        const li = document.createElement("li");
        li.textContent = highlight;
        highlights.appendChild(li);
      });
    }

    const renderMetaCard = (el, cardData) => {
      if (!el) return;
      el.innerHTML = "";
      if (cardData?.title) {
        const title = document.createElement("h3");
        title.textContent = cardData.title;
        el.appendChild(title);
      }
      if (cardData?.description) {
        const desc = document.createElement("p");
        desc.textContent = cardData.description;
        el.appendChild(desc);
      }
      if (Array.isArray(cardData?.items) && cardData.items.length) {
        const list = document.createElement("ul");
        cardData.items.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });
        el.appendChild(list);
      }
    };

    renderMetaCard(byId("meta-education"), data.about?.education);
    renderMetaCard(byId("meta-focus"), data.about?.focus);
  };

  const populateContact = () => {
    const emailBtn = byId("contact-email");
    if (emailBtn && data.contact?.email) {
      emailBtn.href = `mailto:${data.contact.email}`;
      emailBtn.textContent = data.contact.emailLabel || "Email";
    }

    const linkedinBtn = byId("contact-linkedin");
    if (linkedinBtn) {
      if (data.contact?.linkedin) {
        linkedinBtn.href = data.contact.linkedin;
        linkedinBtn.removeAttribute("hidden");
      } else {
        linkedinBtn.setAttribute("hidden", "");
      }
    }

    const details = byId("contact-details");
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

    const socials = byId("contact-social");
    if (socials) {
      socials.innerHTML = "";
      (data.contact?.socials || []).forEach((social) => {
        if (!social?.url) return;
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = social.url;
        anchor.target = "_blank";
        anchor.rel = "noopener";
        anchor.textContent = social.label || social.name || "Social";
        li.appendChild(anchor);
        socials.appendChild(li);
      });
    }
  };

  const bindNav = () => {
    const toggle = select(".nav__toggle");
    const menu = select(".nav__menu");
    const links = document.querySelectorAll("[data-nav-link]");
    const brand = select(".nav__brand");

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

    if (brand) {
      brand.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (menu?.classList.contains("open")) {
          menu.classList.remove("open");
          toggle?.setAttribute("aria-expanded", "false");
        }
      });
    }

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
              const id = entry.target.id;
              if (!id) return;
              const link = Array.from(links).find(
                (anchor) => anchor.getAttribute("href") === `#${id}`
              );
              if (!link) return;
              if (entry.isIntersecting) {
                link.setAttribute("aria-current", "true");
              } else {
                link.removeAttribute("aria-current");
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
    setText(byId("footer-year"), String(new Date().getFullYear()));
  };

  const populateProcess = () => {
    const timeline = byId("process-timeline");
    if (!timeline) return;
    timeline.innerHTML = "";

    (data.process || []).forEach((phase) => {
      if (!phase) return;
      const li = document.createElement("li");
      li.className = "process__step";
      if (phase.step) {
        li.setAttribute("data-step", phase.step);
      }

      if (phase.title) {
        const title = document.createElement("h3");
        title.className = "process__title";
        title.textContent = phase.title;
        li.appendChild(title);
      }

      if (phase.summary) {
        const summary = document.createElement("p");
        summary.className = "process__summary";
        summary.textContent = phase.summary;
        li.appendChild(summary);
      }

      if (Array.isArray(phase.details) && phase.details.length) {
        const details = document.createElement("ul");
        details.className = "process__details";
        phase.details.forEach((detail) => {
          if (!detail) return;
          const detailItem = document.createElement("li");
          detailItem.textContent = detail;
          details.appendChild(detailItem);
        });
        li.appendChild(details);
      }

      timeline.appendChild(li);
    });
  };

  updateMeta();
  populateHero();
  populateExpertise();
  populateProjects();
  populateAbout();
  populateContact();
  bindNav();
  populateFooter();
  populateProcess();
})();

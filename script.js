// Theme preference
(function initTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  if (stored === "light" || (!stored && prefersLight))
    root.classList.add("light");
})();

// Toggle mobile nav
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  header?.classList.toggle("nav-open");
});

// Close nav on link click (mobile)
document.querySelectorAll("#nav-menu a").forEach((a) =>
  a.addEventListener("click", () => {
    header?.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  })
);

// Theme toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn?.addEventListener("click", () => {
  const root = document.documentElement;
  const isLight = root.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Active section link highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = Array.from(document.querySelectorAll("#nav-menu a"));
const headsUp = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = navLinks.find((a) => a.getAttribute("href") === `#${id}`);
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove("active"));
        link?.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
);

sections.forEach((s) => headsUp.observe(s));

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

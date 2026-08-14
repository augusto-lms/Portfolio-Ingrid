document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(
  ".reveal-group, .reveal-photo, .reveal-background"
);

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealTargets = new Map();
  revealItems.forEach((item) => {
    const target = item.classList.contains("reveal-photo") ? item.parentElement : item;
    const items = revealTargets.get(target) || [];
    items.push(item);
    revealTargets.set(target, items);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealTargets.get(entry.target).forEach((item) => item.classList.add("is-visible"));
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8%" }
  );
  revealTargets.forEach((items, target) => revealObserver.observe(target));
}

const navLinks = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { threshold: [0.2, 0.45], rootMargin: "-18% 0px -52%" }
  );
  observedSections.forEach((section) => sectionObserver.observe(section));
}

if (!reduceMotion) {
  const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
  let ticking = false;

  const updateParallax = () => {
    const viewportCenter = window.innerHeight / 2;
    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const speed = Number(item.dataset.parallax || 0);
      const offset = (rect.top + rect.height / 2 - viewportCenter) * speed;
      item.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    });
    ticking = false;
  };

  const requestParallax = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateParallax);
  };

  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax);
  requestParallax();
}

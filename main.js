import "./styles.css";

const socialLinks = {
  instagram: "",
  tiktok: "",
  facebook: "",
};

for (const link of document.querySelectorAll("[data-social]")) {
  const network = link.dataset.social;
  const url = socialLinks[network];

  if (!url) {
    link.setAttribute("aria-disabled", "true");
    link.title = `Thêm đường dẫn ${network} trong main.js`;
    continue;
  }

  const profileUrl = new URL(url);
  if (profileUrl.protocol !== "https:" && profileUrl.protocol !== "http:") {
    throw new Error(`Đường dẫn ${network} cần bắt đầu bằng https:// hoặc http://`);
  }

  link.href = profileUrl.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("has-reveal");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 },
  );

  for (const element of document.querySelectorAll(".reveal")) {
    observer.observe(element);
  }
}

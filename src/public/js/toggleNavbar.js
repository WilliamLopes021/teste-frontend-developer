export default function () {
  const mobileNav = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector(".mobile-nav-links");
  mobileNav.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !mobileNav.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

}

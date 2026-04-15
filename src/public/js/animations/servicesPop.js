export function servicesPop() {
  const services = document.querySelectorAll(".services-card");
  document.addEventListener("scroll", () => {
    if (window.scrollY >= 600) {
      services.forEach((service) => {
        service.classList.add("visible");
      });
    }
  });
}

export default function mouseAnimation() {
  const mouseAura = document.querySelector(".aura");

  const mouseState = {
    x: 0,
    y: 0,
  };

  window.addEventListener("mousemove", (e) => {
    mouseState.x = e.clientX;
    mouseState.y = e.clientY;

    mouseAura.style.transform = `translate3d(${mouseState.x}px, ${mouseState.y}px, 0)`;
  });
}

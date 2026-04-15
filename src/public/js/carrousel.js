export default function () {
  const track = document.querySelector(".track");
  let axisX = 0;

  setInterval(() => {
    axisX -= 105;
    track.style.transform = `translateX(${axisX}%)`;
    if (axisX <= -315) {
      axisX = 0;
      track.style.transform = `translateX(${axisX}%)`;
    }
  }, 7000);
}

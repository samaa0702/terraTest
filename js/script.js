const animationFon = document.querySelector(".first-screen");
const gradientSix = document.querySelector(".gradient-six");
const rect = animationFon.getBoundingClientRect();

animationFon.addEventListener("mousemove", event => {
  const xCenter = Math.round(rect.width / 2);
  const yCenter = Math.round(rect.height / 2);

  let deltaX = event.clientX - rect.left - xCenter;
  let deltaY = event.clientY - rect.top - yCenter;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const maxSpeed = 10;
  const minSpeed = 2;
  const maxDistance = Math.sqrt(xCenter * xCenter + yCenter * yCenter);

  const speed = Math.max(minSpeed, maxSpeed * (1 - distance / maxDistance));
  const newX = deltaX / speed;
  const newY = deltaY / speed;

  gradientSix.style.transform = `translate(${newX + xCenter}px, ${
    newY + yCenter
  }px)`;
});

function updateSize() {
  const width = window.innerWidth;

  let newSize;
  if (width < 600) {
    newSize = "80%";
  } else if (width < 900) {
    newSize = "70%";
  } else {
    newSize = "60%";
  }

  document.documentElement.style.setProperty("--size", newSize);
}

updateSize();
window.addEventListener("resize", updateSize);

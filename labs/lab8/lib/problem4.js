const catEl = document.querySelector("#cat");

const catImage =
  "https://www.kasandbox.org/programming-images/animals/cat.png";

const speed = 200;

const startWalk = () => {
  const catWidth = catEl.offsetWidth;
  const stopDistance = window.innerWidth - catWidth;
  let startTime = null;

  const walkTheCat = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const seconds = (timestamp - startTime) / 1000;

    let distance = speed * seconds;

    if (distance >= stopDistance) {
      distance = stopDistance;
      catEl.style.transform = `translateX(${distance}px)`;
      catEl.src = catImage;
      catEl.style.width = `${catWidth}px`;
      return;
    }

    catEl.style.transform = `translateX(${distance}px)`;
    requestAnimationFrame(walkTheCat);
  };

  requestAnimationFrame(walkTheCat);
};

window.addEventListener("load", startWalk);

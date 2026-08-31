document.body.style.display = "flex";
document.body.style.flexDirection = "column";
// document.body.style.minHeight = "100vh";
// document.body.style.margin = "0";
document.body.style.gap = "1rem";

const planet = document.createElement("div");
planet.classList.add("planet");
planet.style.backgroundColor = "gray";
planet.style.width = "25vmin";
planet.style.height = "25vmin";
document.body.appendChild(planet);

const moon = document.createElement("div");
moon.classList.add("moon");
moon.style.backgroundColor = "yellow";
planet.appendChild(moon);

const description = document.createElement("div");
description.textContent = "The planet and the moon";
description.style.color = "white";
description.style.fontSize = "4vmin";
document.body.appendChild(description);

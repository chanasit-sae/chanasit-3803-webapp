const img = document.querySelector("img");
img.src = "../img/engineering.jpg";

 img.addEventListener("click", function () {
    window.location.href = "https://www.en.kku.ac.th/";
  });
img.style.cursor = "pointer";

const newParagraph = document.createElement('p');
const p = document.querySelector("p");
const section = document.querySelector('body section');
section.appendChild(newParagraph);

p.textContent = "";
newParagraph.textContent = "We hope you enjoy learning";

section.style.textAlign = "center";

newParagraph.style.color = "white";
newParagraph.style.backgroundColor = "black";
newParagraph.style.fontSize = "2rem";
newParagraph.style.fontWeight = "bold";
newParagraph.style.padding = "1rem 2rem";
newParagraph.style.textAlign = "center";
newParagraph.style.display = "inline-block";

document.title = "KKU Engineering";

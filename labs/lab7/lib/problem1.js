const menu = document.querySelector("#menu");
const selection = document.querySelector("#selection");
const count = document.querySelector("#count");
 
let picks = 0; // module-level counter
 
function handleMenuClick(e) {
  if (!e.target.matches("li")) return;

  const drink = e.target.textContent;
  selection.textContent = `You picked: ${drink}`;
  e.target.style.backgroundColor = "yellow";

  picks++;
  count.textContent = `Total picks: ${picks}`;
}

 
menu.addEventListener("click", handleMenuClick);


const catPic = document.querySelector("#cat-pic");
const mustachePic = document.querySelector("#mustache-pic");

catPic.addEventListener("click", function (event) {
  const halfWidth = mustachePic.offsetWidth / 2;
  const halfHeight = mustachePic.offsetHeight / 2;
  mustachePic.style.left = `${event.pageX - halfWidth}px`;
  mustachePic.style.top = `${event.pageY - halfHeight}px`;
});

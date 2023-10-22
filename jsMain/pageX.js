let pageBox = document.querySelector(".pageBox");
let page_caption = document.querySelector(".page_caption");

pageBox.addEventListener("mousemove", (e) => {
  page_caption.style.left = e.pageX + "px";
  page_caption.style.top = e.pageY + "px";
});

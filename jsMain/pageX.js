let pageBox = document.querySelectorAll(".pageBox");
let pageCaption = document.querySelectorAll(".page_caption");

pageBox.forEach((box, bxIndex) => {
  box.addEventListener("mousemove", function (e) {
    let pageCaptionToParent = pageCaption[bxIndex].parentElement;
    let pageCaptionArr = Array.from(
      pageCaptionToParent.querySelectorAll(".page_caption")
    );
    pageCaptionArr.map((item) => {
      item.style.display = "block";
      item.style.left = e.pageX + "px";
      item.style.top = e.pageY + "px";
    });
  });
});

// Assignment: paragraph limit validation
const textarea = document.querySelector("#textarea");
const countChar = document.querySelector(".countChar");
const countWord = document.querySelector(".countWord");
const twitter = document.querySelector(".twitter");
const linkedIn = document.querySelector(".linkedIn");

const inputHandler = () => {
  textarea.style.textTransform = "capitalize";
  countChar.innerHTML = textarea.value.length;
  if (textarea.value.length === 0) {
    countWord.innerHTML = 0;
  }
  countWord.innerHTML = textarea.value.split(" ").length;
  //twitter reserved charecter
  let reservedChar = 100 - countChar.innerHTML;
  twitter.innerHTML = reservedChar;
  if (twitter.innerHTML < -1) {
    textarea.classList.add("danger");
    textarea.style.color = "black";
    textarea.setAttribute("readonly", "readonly");
  } else if (twitter.innerHTML <= 0) {
    alert("Please Do not Over Write.");
    textarea.classList.add("palse");
    textarea.style.color = "white";
  } else {
    function op() {
      textarea.addEventListener("click", function () {
        textarea.removeAttribute("readonly", "readonly");
        textarea.style.color = "";
      });
    }
    op();
    textarea.classList.remove("danger");
    textarea.style.backgroundColor = "transperant";
  }
};
textarea.addEventListener("input", inputHandler);

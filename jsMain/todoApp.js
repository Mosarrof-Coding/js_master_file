let AddTask = document.querySelector(".AddTask");
let addInput = document.querySelector(".addInput");
let baseLi = document.querySelector(".baseUl li");
let baseUl = document.querySelector(".baseUl");

// complitBtn
let compliteBtnDiv = document.querySelector(".toLast");
let nextTo = AddTask.addEventListener("click", function () {
  let newLi = document.createElement("li");
  let newLiAdd = baseUl.appendChild(newLi);
  newLiAdd.innerHTML = addInput.value;

  let newComplitBtn = document.createElement("button");
  let newComplitBtnAdd = compliteBtnDiv.appendChild(newComplitBtn);
  newComplitBtnAdd.innerText = "Complit";
});

// inCompliteTask
let finishdTaskBtn = document.querySelector(".finishdTask");
let finishedUl = document.querySelector(".finishedUl");
let finishedLI = document.querySelector(".finishedUl li");
console.log(finishedLI);
finishdTaskBtn.addEventListener("click", function () {});

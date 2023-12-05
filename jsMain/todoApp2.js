let formm = document.querySelector(".form");
let addInput = document.querySelector(".addInput");

let leftContent = document.querySelector(".leftContent");
let leftInput = document.querySelector(".leftInput");

// complitBtn
formm.addEventListener("submit", function (e) {
  // prevented default from loading
  e.preventDefault();

  // null value void
  if (!addInput.value) {
    alert("Please enter value");
    return;
  }

  // creat left input
  let leftInputDiv = document.createElement("div");
  leftInputDiv.classList.add("leftInput");
  leftContent.appendChild(leftInputDiv);

  // EditInputTask input field
  let leftChildInput = document.createElement("input");
  leftChildInput.type = "text";
  leftChildInput.setAttribute("readonly", "readonly");
  leftChildInput.classList.add("EditInputTask");
  leftInputDiv.appendChild(leftChildInput);
  leftChildInput.value = addInput.value;

  // edit2 btn creat
  let lftedit2 = document.createElement("button");
  lftedit2.classList.add("edit2");
  lftedit2.innerText = "Save";
  leftInputDiv.appendChild(lftedit2);

  // editBtn clicked
  lftedit2.addEventListener("click", function () {
    let rightContent = document.querySelector(".rightContent");

    // rightInput div
    let resultDiv = document.createElement("div");
    resultDiv.classList.add("rightInput");
    rightContent.appendChild(resultDiv);

    // lastInputTask div
    let lastInputTaskDiv = document.createElement("div");
    lastInputTaskDiv.classList.add("lastInputTask");
    resultDiv.appendChild(lastInputTaskDiv);
    lastInputTaskDiv.innerText = leftChildInput.value;

    // delete btn creat
    let deleteBtn2 = document.createElement("button");
    deleteBtn2.classList.add("delete2");
    deleteBtn2.innerText = "Delete";
    resultDiv.appendChild(deleteBtn2);
    leftContent.removeChild(leftInputDiv);

    // last work delete
    deleteBtn2.addEventListener("click", function () {
      rightContent.removeChild(resultDiv);
    });
  });

  // refresh adding task every time
  addInput.value = "";
});

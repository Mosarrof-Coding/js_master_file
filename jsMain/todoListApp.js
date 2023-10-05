const form = document.getElementById("form");
// add taskInput
let AddTaskBtn = document.querySelector(".AddTaskBtn");
let addTask = document.querySelector(".AddTaskInput");
let todoTask = document.querySelector(".todoTask");
form.addEventListener("submit", (event) => {
  // prevented from loading
  event.preventDefault();

  if (!addTask.value) {
    alert("please insert value");
    return;
  }

  // div creat
  let contentDiv = document.createElement("div");
  todoTask.appendChild(contentDiv);
  contentDiv.classList.add("contentDiv");

  // output field creat
  let contentTask = document.createElement("input");
  contentTask.type = "text";
  contentTask.setAttribute("readonly", "readonly");
  contentTask.classList.add("contentTask");
  contentDiv.appendChild(contentTask);
  contentTask.value = addTask.value;

  // btn div
  let contentBtn = document.createElement("div");
  contentBtn.classList.add("contentBtn");
  contentDiv.appendChild(contentBtn);

  // edit btn creat
  let editBtn = document.createElement("button");
  editBtn.classList.add("editBtnn");
  contentBtn.appendChild(editBtn);
  editBtn.innerHTML = "Edit";

  // delete btn creat
  let deletebtn = document.createElement("button");
  deletebtn.classList.add("deleteBtn");
  contentBtn.appendChild(deletebtn);
  deletebtn.innerHTML = "Delete";

  // edit task
  editBtn.addEventListener("click", function (e) {
    if (editBtn.innerText.toLowerCase() === "edit") {
      //   console.log("edit button is clicked!");
      contentTask.removeAttribute("readonly");
      editBtn.innerText = "Save";
      contentTask.focus();
    } else {
      editBtn.innerText = "Edit";
      contentTask.setAttribute("readonly", "readonly");
    }
  });

  //   delete each child
  deletebtn.addEventListener("click", function () {
    todoTask.removeChild(contentDiv);
  });
});

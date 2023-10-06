// add taskInput
const form = document.getElementById("form");
const AddTaskBtn = document.querySelector(".AddTaskBtn");
const addTask = document.querySelector(".AddTaskInput");
const todoTask = document.querySelector(".todoTask");
form.addEventListener("submit", (event) => {
  // prevented from loading
  event.preventDefault();

  // null input value is void -> alert
  if (!addTask.value) {
    alert("please insert value");
    return;
  }

  // div creat
  const contentDiv = document.createElement("div");
  todoTask.appendChild(contentDiv);
  contentDiv.classList.add("contentDiv");

  // output field creat
  const contentTask = document.createElement("input");
  contentTask.type = "text";
  contentTask.setAttribute("readonly", "readonly");
  contentTask.classList.add("contentTask");
  contentDiv.appendChild(contentTask);
  contentTask.value = addTask.value;

  // btn div
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("contentBtn");
  contentDiv.appendChild(btnContainer);

  // edit btn creat
  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtnn");
  btnContainer.appendChild(editBtn);
  editBtn.innerHTML = "Edit";

  // delete btn creat
  const deletebtn = document.createElement("button");
  deletebtn.classList.add("deleteBtn");
  btnContainer.appendChild(deletebtn);
  deletebtn.innerHTML = "Delete";

  // edit task
  editBtn.addEventListener("click", function (e) {
    if (editBtn.innerText.toLowerCase() === "edit") {
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

  // refresh every time input value
  addTask.value = "";
});

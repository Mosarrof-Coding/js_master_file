// Selectors
let formControll = document.querySelector("#form_controll");
let insertInput = document.querySelector(".insertInput");
let itemListTable = document.querySelector(".itemlistTable");
let tableItem = document.getElementById("tableItem");
let mainTable = document.querySelector(".mainTable");
let dltAll = document.querySelector(".dltAll");
let filter = document.getElementById("filter");

// display items from local storage
function displayFromLocalStorage() {
  let itemFromLocalStorage = localToBroweser();
  if (itemFromLocalStorage.length) {
    itemFromLocalStorage.forEach((item) => {
      creatitemDom(item);
    });
  }
}
displayFromLocalStorage();

// === addItems
// let count = 1;
function addItems(e) {
  // prevented from load
  e.preventDefault();
  let itemValue = insertInput.value;
  if (itemValue === "") {
    alert("please Insert an Item");
    return;
  }
  creatitemDom(itemValue);
  tolocalStorage(itemValue);
  insertInput.value = "";
  // count++;
}

// === creat each item DOM
function creatitemDom(itemValue) {
  tableItem.innerHTML += `
  <tr class="storItems text-white">
    <td class="pl-5">number</td>
    <td class="pl-5 capitalize itemText">${itemValue}</td>
    <td class="pl-5">
    <button class="deleteBtn bg-red-600 py-1 px-4" id="deleteBtn">Delete</button>
    </td>
  </tr>`;
}

// === local storage
function tolocalStorage(Item) {
  let Items = localToBroweser();
  Items.push(Item);
  localStorage.setItem("Items", JSON.stringify(Items));
}

// === local to broweser
function localToBroweser() {
  let Items = [];
  if (localStorage.getItem("Items") === null) {
    Items = [];
  } else {
    Items = JSON.parse(localStorage.getItem("Items"));
  }
  return Items;
}

// === delete each item
function removeItem(e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.parentElement.remove();
  }
}

// === clearAll
function clearAll() {
  mainTable.style.display = "none";
}

// === filter from item list
function filterItem(e) {
  let searching = e.target.value.toLowerCase();
  let storItems = document.querySelectorAll(".storItems");
  storItems.forEach((storItem) => {
    if (storItem.children[1].textContent.indexOf(searching) !== -1) {
      storItem.style.display = "";
    } else {
      storItem.style.display = "none";
    }
  });
}

// === event listener list
formControll.addEventListener("submit", addItems);
tableItem.addEventListener("click", removeItem);
filter.addEventListener("input", filterItem);
dltAll.addEventListener("click", clearAll);

// local storage
// localStorage.setItem("name", "moss");
// localStorage.setItem("name", "hadi");
// localStorage.setItem("num", "01643492556");
// // console.log(localStorage.getItem("num"));
// // console.log(localStorage.key(1));
// localStorage.clear();

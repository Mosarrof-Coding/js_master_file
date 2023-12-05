// api posts
const apiCont = document.querySelector(".apiCont");
const apiDiv = document.querySelector(".apiDiv");
function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => displayPost(posts.slice(0, 18)));
  function displayPost(posts) {
    posts.forEach((post) => {
      apiCont.innerHTML += `
        <div class="apiDiv">
            <h2 class="text-[20px]">${post.id}</h2>
            <h3 class="font-bold mb-4">${post.title}</h3>
            <p>${post.body}</p>
        </div>
  `;
    });
  }
}
getData();

{
  // api comments
  const apiCont1 = document.querySelector(".apiCont1");
  function getComment() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((posts) => displayPost(posts.slice(0, 18)));
    function displayPost(posts) {
      posts.forEach((post) => {
        apiCont1.innerHTML += `
        <div class="apiDiv">
            <h2 class="text-[20px]">${post.id}</h2>
            <h3 class="font-bold mb-4">${post.name}</h3>
            <p>${post.email}</p>
        </div>
  `;
      });
    }
  }
  getComment();
}
{
  // Random Api
  const apiCont2 = document.querySelector(".apiCont2");
  function getKanye() {
    fetch("https://api.kanye.rest/")
      .then((quote) => quote.json())
      .then((quote) => displayPost(quote));
    function displayPost(quote) {
      apiCont2.innerHTML = `
        <div class="apiDiv">
            <h2 class="text-[20px]">${quote.quote}</h2>
        </div>
  `;
    }
  }
  getKanye();
}
let btn = document.querySelector(".btn");
btn.onclick = function () {
  getKanye();
};

// https://randomuser.me/api/?results=10
{
  // Random Api
  const apiCont3 = document.querySelector(".apiCont3");
  function randomUser() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => display(users.results));
    function display(users) {
      console.log(users);
      users.forEach((user) => {
        apiCont3.innerHTML += `
        <div class="apiDiv">
            <h2 class="text-[20px] font-bold">${user.name.first} ${user.name.last}</h2>
            <p>${user.registered.age}</p>  
            <h2 class="text-[20px]">${user.phone}</h2>
            <h2 class="text-[20px]">${user.email}</h2>
            <h3 class="font-semibold mb-4">${user.gender}</h3>
            <h3 class="font-semibold mb-4">${user.location.city}</h3>
            <h3 class="font-semibold mb-4">${user.location.country}</h3>
        </div>
  `;
      });
    }
  }
  randomUser();
}

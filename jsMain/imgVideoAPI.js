const auth = "E0lypkqJeNhZ3JMskEU6Q5ubRvxU3Wv4sI6z8m1LjKu7Kj7DypEKWb3Z";
const gallery = document.querySelector(".imgallery");
const searchinput = document.querySelector(".searchinput");
const form = document.querySelector(".search-form");
let searchValue;
let link;
let currentSearch;
let page = 1;

function curatedPhotos() {
  fetch("https://api.pexels.com/v1/curated?per_page=14", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  })
    .then((res) => res.json())
    .then((data) => display(data));
}
curatedPhotos();

function display(photos) {
  let allphotos = photos.photos;
  allphotos.forEach((photo) => {
    // console.log(photo);
    const galImg = document.createElement("div");
    galImg.classList.add("imgallery");
    galImg.innerHTML = `
    <div class="inline-block p-2 bg-slate-100">
      <img class="w-40 h-40 object-cover" src="${photo.src.large}" alt=""/>
      <a href ="${photo.src.original}">Download</a>
      <p>"${photo.photographer}"</p>
    </div>
      `;
    gallery.appendChild(galImg);
  });
}

// search photos
function searchphoto(query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=5`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  })
    .then((res) => res.json())
    .then((data) => displaySearch(data));
}
// searchphoto();

function displaySearch(query) {
  let allPhotots = query.photos;
  // console.log(allPhotots);
  allPhotots.forEach((photo) => {
    // console.log(photo);
    const galImg = document.createElement("div");
    galImg.classList.add("imgallery");
    galImg.innerHTML = `
      <img class="w-40 h-40 object-cover" src="${photo.src.large}" alt=""/>
      <a href ="${photo.src.original}">Download</a>
      <p>${photo.photographer}</p>
      `;
    gallery.appendChild(galImg);
  });
}

searchinput.addEventListener("input", updateSearch);

function updateSearch(e) {
  searchValue = e.target.value;
}
form.addEventListener("submit", (e) => {
  gallery.innerHTML = "";
  searchinput.value = "";
  e.preventDefault();
  currentSearch = searchValue;
  searchphoto(searchValue);
});

{
  // not working !!
  const loadMorefoto = document.querySelector(".loadMore");
  loadMorefoto.addEventListener("click", loadMore);
  async function loadMore() {
    page++;
    if (currentSearch) {
      link = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=${page}`;
    } else {
      link = `https://api.pexels.com/v1/curated?per_page=${page}`;
    }
    const data = await fetch(link);
    display(data);
  }
}

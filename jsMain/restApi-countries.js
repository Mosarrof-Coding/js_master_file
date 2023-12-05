const countrySearch = document.querySelector(".countrySearch");
const submitBtn = document.querySelector(".submitBtn");
const regionAll = document.querySelector("#region");
const listCountry = document.querySelector(".countries");
let regions = [];

let loader = document.querySelector(".apiLoader");
function addLoader() {
  loader.style.display = "block";
}
function removeLoader() {
  loader.style.display = "none";
}

// 1. receive api data
// function fetchCountry() {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => displayCountries(data));
// }
async function fetchCountry() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  displayCountries(data);
}
// 1. receive api data
function displayCountries(countries) {
  // console.log(countries);
  countries.forEach((country) => {
    listCountry.innerHTML += `
      <li>${country.name.official}</li>
    `;
    // remove duplicate regions
    if (regions.indexOf(country.region) == -1) {
      regions.push(country.region);
    }
  });
  allRegion();
}
// 2. all regions list
function allRegion() {
  regions.forEach((reigion) => {
    regionAll.innerHTML += `
      <option value="${reigion}">${reigion}</option>
      `;
  });
}
// 3. regions filter
function regionFilter() {
  regionAll.addEventListener("change", function (e) {
    if (e.target.value !== "all") {
      // listCountry.innerHTML = "";
      apiSearch(e.target.value);
    }
  });
}
// 4. regional country
async function apiSearch(keyword) {
  if (keyword) {
    addLoader();
    const respons = await fetch(
      `https://restcountries.com/v3.1/region/${keyword}`
    );
    const data = await respons.json();
    removeLoader();
    displayDataSearch(data);
  } else {
    listCountry.innerHTML = "";
    fetchCountry();
  }
}
// 5. input search to regional country find out
function inputValue() {
  countrySearch.addEventListener("keyup", function (e) {
    e.preventDefault;
    apiSearch(countrySearch.value);
  });
}
// 6. input search to regional country displaying
function displayDataSearch(data) {
  listCountry.innerHTML = "";
  data.forEach((country) => {
    listCountry.innerHTML += `
    <li>${country.name.common}</li>
    `;
  });
}
fetchCountry();
inputValue();
regionFilter();

"use strict";

///////////////////////////////////
//////////// Selectors ////////////
///////////////////////////////////

const header = document.querySelector(".header");

const navHam = document.querySelector(".nav--ham");
const navMenu = document.querySelector(".nav--menu");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

///////////////////////////////////
/////////// Functions /////////////
///////////////////////////////////

const openNav = function () {
  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

// const openNav = function () {
//   const navMenuHTML = `<div class="nav--menu">
//     <div class="nav--links">
//         <div class="nav--link">
//         <img src="./img/iconmonstr-home-thin.svg" alt="" /><a href="#"
//             >Home</a
//         >
//         </div>
//         <hr />
//         <div class="nav--link">
//         <img src="./img/iconmonstr-product-4.svg" alt="" /><a
//             href="./howitworks.html"
//             class="nav--link"
//             >How It Works</a
//         >
//         </div>
//         <hr />

//         <div class="nav--link">
//         <img src="./img/iconmonstr-eat-6-thin.svg" alt="" /><a
//             href="./onthemenu.html"
//             class="nav--link"
//             >On the Menu</a
//         >
//         </div>

//         <button class="btn btn--login">Log In</button>
//     </div>
// </div>
// <div class="overlay"></div>`;

//   nav.insertAdjacentHTML("beforeend", navMenuHTML);
// };

///////////////////////////////////
///////// Event Handlers //////////
///////////////////////////////////

// Open Navigation Menu
navHam.addEventListener("click", openNav);

// Sticky Header
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: "10px",
};

const headerObserver = new IntersectionObserver(stickyNav, options);
headerObserver.observe(header);

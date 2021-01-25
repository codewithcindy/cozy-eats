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
//   nav.insertAdjacentHTML("beforeend", '<div class="nav--menu"></div>');
// };

///////////////////////////////////
///////// Event Handlers //////////
///////////////////////////////////

// Open Navigation Menu
navHam.addEventListener("click", openNav);

// Sticky Header

const stickyNav = function (entries) {
  console.log(entries);
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

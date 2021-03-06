"use strict";

///////////////////////////////////
//////////// Selectors ////////////
///////////////////////////////////

const header = document.querySelector(".header");
const navHam = document.querySelector(".nav--ham");
const navMenu = document.querySelector(".nav--menu");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

const filterBtnsContainer = document.querySelector(".btn--filter--container");
const menuContainer = document.querySelector(".menu--items");

///////////////////////////////////
//////////// Menu Data ////////////
///////////////////////////////////
const menuItems = [
  {
    id: 1,
    title: "White Sauce Pasta",
    desc: "with creamy alredo sauce and bacon bits",
    category: "under 30",
    img: "./img/menu/30meal-1.jpg",
  },
  {
    id: 2,
    title: "Shrimp Pasta",
    desc: "with cherry tomatoes",
    category: "under 30",
    img: "./img/menu/30meal-2.jpg",
  },
  {
    id: 3,
    title: "Bacon Rolls",
    desc: "covering mozzarella sticks",
    category: "under 30",
    img: "./img/menu/30meal-3.jpg",
  },
  {
    id: 4,
    title: "Veggie Stir Fry",
    desc: "with shrimp and bell peppers",
    category: "under 30",
    img: "./img/menu/30meal-4.jpg",
  },
  {
    id: 5,
    title: "Soba Stir Fry",
    desc: "with carrots and mushrooms",
    category: "low-carb",
    img: "./img/menu/carb-1.jpg",
  },
  {
    id: 6,
    title: "Cauliflower Veggie Bowl",
    desc: "with cauliflower rice, green beans, and cherry tomatos",
    category: "low-carb",
    img: "./img/menu/carb-2.jpg",
  },
  {
    id: 7,
    title: "Heart Veggie Soup",
    desc: "with tomatoes and spinach",
    category: "low-carb",
    img: "./img/menu/carb-3.jpg",
  },
  {
    id: 8,
    title: "Green Pita Sandwich",
    desc: "with avocado and pea sprouts",
    category: "vegetarian",
    img: "./img/menu/vegetarian-1.jpg",
  },
  {
    id: 9,
    title: "Garlic Sesame Stir Fry",
    desc: "with broccoli and daikon",
    category: "vegetarian",
    img: "./img/menu/vegetarian-2.jpg",
  },
  {
    id: 10,
    title: "Tofu Curry",
    desc: "with coconut milk and curry spice",
    category: "vegetarian",
    img: "./img/menu/vegetarian-3.jpg",
  },
];

///////////////////////////////////
/////////// Functions /////////////
///////////////////////////////////

/* Nav Menu */
const openNav = function () {
  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

/* Sticky Header */
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

/* Menu */

/* Display all menu items */
const displayMenuItems = function (menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu--item">
    <img src="${item.img}" class="item--image" alt=${item.title} />
    <div class="item--info">
      <div class="item--header">
        <h4 class="item--name">${item.title}</h4>
        <p class="item--description">${item.desc}</p>
      </div>
      <p class="item--category">${item.category}</p>
    </div>
  </div>`;
  });
  displayMenu = displayMenu.join(""); // join each menu--item into one big string
  menuContainer.innerHTML = displayMenu;
};

/* Display all menu category btns */
const displayMenuBtns = function () {
  // Compile all unique categories
  const categories = menuItems.reduce(
    function (acc, curItem) {
      if (!acc.includes(curItem.category)) acc.push(curItem.category);
      return acc;
    },
    ["all"]
  );

  // Create btn for each unique category
  const categoryBtns = categories
    .map(function (category) {
      return ` <button class="btn--filter" data-id="${category}">
      ${category}
    </button>`;
    })
    .join("");

  // Add btns to btn container
  filterBtnsContainer.innerHTML = categoryBtns;

  // Filter menu items
  const filterBtns = filterBtnsContainer.querySelectorAll(".btn--filter");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const btnCategory = e.currentTarget.dataset.id;

      const itemCategory = menuItems.filter(function (item) {
        if (item.category === btnCategory) {
          return item;
        }
      });

      if (btnCategory === "all") {
        displayMenuItems(menuItems); // display all items if btn is all
      } else {
        displayMenuItems(itemCategory); // pass in new filtered array with selected category
      }
    });
  });
};

///////////////////////////////////
///////// Event Handlers //////////
///////////////////////////////////

// Open Navigation Menu
navHam.addEventListener("click", openNav);

// Sticky Header
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "10px",
});
headerObserver.observe(header);

// Display Menu
window.addEventListener("DOMContentLoaded", function () {
  // Load all items
  displayMenuItems(menuItems);

  // Load all buttons
  displayMenuBtns();
});

let button = document.querySelector(".button");
let burgerComplete = document.getElementById("burger");

button.addEventListener("click", () => {
  burger.classList.toggle("enable");
  if (button.textContent === "Ver más") {
    button.textContent = "Ver menos";
  } else {
    button.textContent = "Ver más";
  }
});

let btnDog = document.querySelector(".btn_dog");
let hotDog = document.getElementById("hot_dog");

btnDog.addEventListener("click", () => {
  hotDog.classList.toggle("enable_dog");
  if (btnDog.textContent === "Ver más") {
    btnDog.textContent = "Ver menos";
  } else {
    btnDog.textContent = "Ver más";
  }
});

let btnBurger = document.querySelector(".btn_vegan");
let veganBurger = document.getElementById("vegan_burger");

btnBurger.addEventListener("click", () => {
  veganBurger.classList.toggle("enable_vegan");
  if (btnBurger.textContent === "Ver más") {
    btnBurger.textContent = "Ver menos";
  } else {
    btnBurger.textContent = "Ver más";
  }
});

let btnItali = document.querySelector(".btn_itali");
let italiBurger = document.getElementById("itali_burger");

btnItali.addEventListener("click", () => {
  italiBurger.classList.toggle("enable_itali");
  if (btnItali.textContent === "Ver más") {
    btnItali.textContent = "Ver menos";
  } else {
    btnItali.textContent = "Ver más";
  }
});

let btnSandwich = document.querySelector(".btn_sandwich");
let sandwich = document.getElementById("sandwich");

btnSandwich.addEventListener("click", () => {
  sandwich.classList.toggle("enable_sandwich");
  if (btnSandwich.textContent === "Ver más") {
    btnSandwich.textContent = "Ver menos";
  } else {
    btnSandwich.textContent = "Ver más";
  }
});

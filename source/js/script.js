let buttonMenu = document.querySelector(".header__toggle");
let dropMenu = document.querySelector(".navigation");
let map = document.querySelector(".contacts__map-item");
let mapImg  = document.querySelector(".contacts__image");

mapImg.classList.add("visually-hidden");
map.classList.remove("visually-hidden");
buttonMenu.classList.remove("header__toggle--closed");
dropMenu.classList.remove("navigation--open");

buttonMenu.onclick = () => {
  buttonMenu.classList.toggle("header__toggle--closed");
  dropMenu.classList.toggle("navigation--open");
};

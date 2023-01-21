let buttonMenu = document.querySelector(".header__toggle");
let dropMenu = document.querySelector(".navigation");
let map = document.querySelector(".contacts__map-item");
let mapImg  = document.querySelector("#contacts__image");
let header = document.querySelector(".header");
let navigation = document.querySelector(".navigation");

navigation.classList.remove("navigation--no-js");
header.classList.remove("header--no-js")
buttonMenu.classList.remove("header__toggle--closed");
dropMenu.classList.remove("navigation--open");

if(mapImg){
  mapImg.classList.add("visually-hidden");
  map.classList.remove("visually-hidden");
}


buttonMenu.onclick = () => {
  buttonMenu.classList.toggle("header__toggle--closed");
  dropMenu.classList.toggle("navigation--open");
};

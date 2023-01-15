let buttonMenu = document.querySelector(".navigation-button");
let dropMenu = document.querySelector(".navigation");

buttonMenu.classList.remove('navigation-button--close');
dropMenu.classList.remove('navigation--open');

buttonMenu.onclick = () => {
  buttonMenu.classList.toggle("navigation-button--close");
  dropMenu.classList.toggle("navigation--open");
};

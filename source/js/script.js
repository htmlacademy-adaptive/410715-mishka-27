let buttonMenu = document.querySelector(".navigation__toggle");
let dropMenu = document.querySelector(".navigation");

buttonMenu.classList.remove('navigation__toggle--closed');
dropMenu.classList.remove('navigation--open');

buttonMenu.onclick = () => {
  buttonMenu.classList.toggle("navigation__toggle--closed");
  dropMenu.classList.toggle("navigation--open");
};

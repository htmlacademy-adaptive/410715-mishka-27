let buttonMenu = document.querySelector(".navigation--toggle");
let dropMenu = document.querySelector(".navigation");

buttonMenu.classList.remove('navigation--toggle-closed');
dropMenu.classList.remove('navigation--open');

buttonMenu.onclick = () => {
  buttonMenu.classList.toggle("navigation--toggle-closed");
  dropMenu.classList.toggle("navigation--open");
};

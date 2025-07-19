
const burgerBtn = document.querySelector('.actions__burger.burger');
const mobileWindow = document.querySelector('.header__menu-mobile');
const closeBtn = document.querySelector('.mobile-menu__button-close');

burgerBtn.addEventListener('click', () => {
  mobileWindow.classList.add('is-active');
});

closeBtn.addEventListener('click', () => {
  mobileWindow.classList.remove('is-active');
});


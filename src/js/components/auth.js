const authBtn = document.querySelector('.header__actions-auth');
const authOverlay = document.querySelector('.header__auth');
const authClose = document.querySelector('.header__auth-close');

const btnReg = document.querySelector('.header__auth-link-reg');
const btnAuth = document.querySelector('.header__auth-link-auth');

const login = document.querySelector('.header__auth-login');
const reg = document.querySelector('.header__auth-register');

authBtn.addEventListener('click', () => {
  authOverlay.classList.add('is-active');
});

authClose.addEventListener('click', () => {
  authOverlay.classList.remove('is-active');
});

btnReg.addEventListener('click', () => {
  login.classList.remove('is-active');
  reg.classList.add('is-active');
});

btnAuth.addEventListener('click', () => {
  reg.classList.remove('is-active');
  login.classList.add('is-active');
});
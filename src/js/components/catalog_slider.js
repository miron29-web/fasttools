let currentCard = null;
let currentSlider = null;

const cardthumbs = document.querySelectorAll('.catalog__thumbnail');

cardthumbs.forEach(th => {
  th.addEventListener('click', () => {
    currentCard = th.closest('.catalog__card');
    currentSlider = currentCard.querySelector('.catalog__slider');
    currentSlider.classList.add('is-active');
  })
});

const btnsClose = document.querySelectorAll('.catalog__slider-btn-close');
btnsClose.forEach(btn => {
  btn.addEventListener('click', () => {
    currentSlider.classList.remove('is-active');
  });
});

const sliderThumbs = document.querySelectorAll('.catalog__slider-thumb');

sliderThumbs.forEach(th => {
  th.addEventListener('click', () => {
    let mainImg = currentSlider.querySelector('.catalog__slider-img');
    let url = th.src;
    mainImg.src = url;
  });
});
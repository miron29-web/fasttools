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
    const allThumbs = currentSlider.querySelectorAll('.catalog__slider-thumb');
    allThumbs.forEach(thumb => thumb.classList.remove('is-active'));

    th.classList.add('is-active');


    const mainImg = currentSlider.querySelector('.catalog__slider-img');
    mainImg.classList.add('fade-out');

    setTimeout(() => {
      mainImg.src = th.src;
      mainImg.classList.remove('fade-out');
      mainImg.classList.add('fade-in');

      setTimeout(() => {
        mainImg.classList.remove('fade-in');
      }, 300);
    }, 300);
  });
});
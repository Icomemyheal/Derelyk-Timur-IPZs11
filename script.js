const burgerBtn = document.querySelector('.header__btn--menu');
const headerMenu = document.querySelector('.header__menu');
const body = document.getElementsByTagName('body');

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    headerMenu.classList.toggle('open');
    body[0].classList.toggle('fixing');
});

const burgerBtn = document.querySelector('.header__btn--menu');
const headerMenu = document.querySelector('.header__menu');
const body = document.getElementsByTagName('body');

// Modal
const btnOrderOpenModal = document.querySelector('.js-order-btn');
const modal = document.querySelector('.js-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const modalOverlay = document.querySelector('.js-modal-overlay');

//Filters
const filtersBtns = document.querySelectorAll('.filters__btn');
const projectItems = document.querySelectorAll('.js-projects-items');

const filteredBtn = filtersBtns.forEach((btn) => {
    btn.addEventListener(('click'), () => {
        filtersBtns.forEach(item => item.classList.remove('active'));
        btn.classList.add('active');
        if(btn.classList.contains('active')){
            projectItems.forEach((item) => {
                if(btn.dataset.type == item.dataset.proj){
                    item.classList.remove('filtered');
                } else if(btn.dataset.type == 'allIn'){
                    item.classList.remove('filtered');
                } else{
                    item.classList.add('filtered');
                }
            });
        }
    });
});

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    headerMenu.classList.toggle('open');
    body[0].classList.toggle('fixing');
});
btnOrderOpenModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    modalOverlay.classList.add('overlay');
    if(modal.classList.contains('active')){
        burgerBtn.setAttribute("disabled", "");
    }
});
btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    modalOverlay.classList.remove('overlay');
    burgerBtn.removeAttribute("disabled", "");
});
modalOverlay.addEventListener('click', (e) => {
    if(e.target == modalOverlay){
        modal.classList.remove('active');
        modalOverlay.classList.remove('overlay');
        burgerBtn.removeAttribute("disabled", "");
    } else {
        return false;
    }
});

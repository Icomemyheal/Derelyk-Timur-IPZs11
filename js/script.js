//Utils
const body = document.getElementsByTagName('body');
//BurgerMenu
const burgerBtn = document.querySelector('.js-header__btn--menu');
const headerMenu = document.querySelector('.js-header__menu');
console.log(burgerBtn);
// Modals
const btnOrderOpenModal = document.querySelector('.js-order-btn');
const modal = document.querySelector('.js-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const modalOverlay = document.querySelector('.js-modal-overlay');
//Filters
const filtersBtns = document.querySelectorAll('.filters__btn');
const projectItems = document.querySelectorAll('.js-projects-items');
//Changing Modal Svg
const modalFormInputs = document.querySelectorAll('.js-modal-input');
const modalFormSvgs = document.querySelectorAll('.js-icon')
modalFormInputs.forEach((input, index) => {
    input.addEventListener('focus', () => {
        modalFormSvgs[index].setAttribute('fill', '#188CE8');
    });

    input.addEventListener('blur', () => {
        modalFormSvgs[index].setAttribute('fill', 'black');
    });
});
//Checkbox State Change
document.addEventListener('DOMContentLoaded', () => {
    const spanCheckbox = document.querySelector('.js-span-checkbox');
    const modalFormCheckbox = document.querySelector('.js-modal-checkbox');

spanCheckbox.addEventListener('click', () => {
    modalFormCheckbox.checked = !modalFormCheckbox.checked;
});
});
//Active page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname;
    console.log(currentPage);
    const navLinks = document.querySelectorAll('.header__nav--link');

const navLink = navLinks.forEach((item) => {
    let linkPage = '/Derelyk-Timur-IPZs11/' + item.getAttribute('href');
    console.log(linkPage);
    item.classList.remove('active');
    if(currentPage == linkPage){
        item.parentElement.classList.add('active');
    } else if(currentPage == '/Derelyk-Timur-IPZs11/' || currentPage == './'){
        navLinks[0].parentElement.classList.add('active');
    } else {
        item.parentElement.classList.remove('active');
    }
});
});
const filteredBtn = filtersBtns.forEach((btn) => {
    btn.addEventListener(('click'), () => {
        filtersBtns.forEach(item => item.classList.remove('active'));
        btn.classList.add('active');
        console.log(btn);
        if(btn.classList.contains('active')){
            projectItems.forEach((item) => {
                console.log(item);
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
console.log(projectItems);
// Events
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

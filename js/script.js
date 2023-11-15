//Utils
const body = document.getElementsByTagName('body');
let min768px = window.matchMedia('(min-width: 768px)').matches;
let min1200px = window.matchMedia('(min-width: 1200px)').matches;
//BurgerMenu
const burgerBtn = document.querySelector('.js-header__btn--menu');
const headerMenu = document.querySelector('.js-header__menu');
// Modals
const btnOrderOpenModal = document.querySelector('.js-order-btn');
const modal = document.querySelector('.js-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const modalOverlay = document.querySelector('.js-modal-overlay');
//Filters
const filtersBtns = document.querySelectorAll('.filters__btn');
const projectItems = document.querySelectorAll('.js-projects-items');
const itemFix = document.getElementById('fix');
//Changing Modal Svg
const modalFormInputs = document.querySelectorAll('.js-modal-input');
const modalFormSvgs = document.querySelectorAll('.js-icon');
//Marging Items
document.addEventListener('DOMContentLoaded', () => {

    const teamItems = document.querySelectorAll('.team__cards--item');
    const featuresItems = document.querySelectorAll('.features__li--item');
    const specializationItems = document.querySelectorAll('.specialization__li--item');
    const clientsItems = document.querySelectorAll('.clients__li--item');
    const projectsItems = document.querySelectorAll('.projects__li--item');

    for(let i = 0; i < teamItems.length; i++){
        if(i % 4 === 0 && min1200px){
            teamItems[i].classList.add('no-left-margin');
        }
    }
    for(let i = 0; i < featuresItems.length; i++){
        if(i % 4 === 0 && min1200px){
            featuresItems[i].classList.add('no-left-margin');
        }
    }
    for(let i = 0; i < specializationItems.length; i++){
        if(i % 3 === 0 && min1200px){
            specializationItems[i].classList.add('no-left-margin');
        }
    }
    for(let i = 0; i < clientsItems.length; i++){
        if(i % 3 === 0 && min768px && !min1200px){
            clientsItems[i].classList.add('no-left-margin');
        }
        if(i % 6 === 0 && min1200px){
            clientsItems[i].classList.add('no-left-margin');
        }
    }
    for(let i = 0; i < projectsItems.length; i++){
        if(i % 3 === 0 && min1200px){
            projectsItems[i].classList.add('no-left-margin');
        }
    }
});

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
    const navLinks = document.querySelectorAll('.header__nav--link');

const navLink = navLinks.forEach((item) => {
    let linkPage = '/Derelyk-Timur-IPZs11/' + item.getAttribute('href');
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
        if(btn.classList.contains('active') && btn.dataset.type == 'design' && min1200px){
            itemFix.style.setProperty('margin-left', '30px', 'important');
        } else {
            itemFix.style.setProperty('margin-left', '0px', 'important');
        }
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

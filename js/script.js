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
const itemFixDesign = document.getElementById('fix-design');
const itemFixApps = document.getElementById('fix-apps');
//Changing Modal Svg
const modalFormInputs = document.querySelectorAll('.js-modal-input');
const modalFormSvgs = document.querySelectorAll('.js-icon');

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

spanCheckbox?.addEventListener('click', () => {
    modalFormCheckbox.checked = !modalFormCheckbox.checked;
});
});

const filteredBtn = filtersBtns.forEach((btn) => {
    
    btn.addEventListener(('click'), () => {
        filtersBtns.forEach(e => {e.classList.remove('active');});
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
// Events
burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerBtn.classList.toggle('active');
    headerMenu.classList.toggle('open');
    body[0].classList.toggle('fixing');
});
btnOrderOpenModal?.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    modalOverlay.classList.add('overlay');
    if(modal.classList.contains('active')){
        burgerBtn.setAttribute("disabled", "");
    }
});
btnCloseModal?.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    modalOverlay.classList.remove('overlay');
    burgerBtn.removeAttribute("disabled", "");
});
modalOverlay?.addEventListener('click', (e) => {
    if(e.target == modalOverlay){
        modal.classList.remove('active');
        modalOverlay.classList.remove('overlay');
        burgerBtn.removeAttribute("disabled", "");
    } else {
        return false;
    }
});

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
};

const popupBtn = document.querySelector('.about-calc--btn');
const thankyouPopup = document.getElementById('thankyou-popup');
const card = document.querySelector('.calc__price');
popupBtn.addEventListener("click", function (event) {
    event.preventDefault();
    card.style.display = 'none';
    thankyouPopup.style.display = 'block';
});
window.addEventListener('click', function(event) {
    if (event.target == thankyouPopup) {
        thankyouPopup.style.display = 'none';
        window.location.href = 'index.html';
    }
});

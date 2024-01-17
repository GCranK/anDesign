const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
};

let priceCalcButton = document.querySelector("#btn-card--three");
priceCalcButton.addEventListener("click", function(e) {
    window.location.href = "./calculation-page.html";
});

const nextCard = document.querySelector('#calc-btn--three');
const activeButtonOne = document.querySelector('#btn-card');
const activeButtonTwo = document.querySelector('#btn-card--two');
const activeButtonThree = document.querySelector('#btn-card--three');
const cardOne = document.querySelector('.calculation__card--one');
const cardTwo = document.querySelector('.calculation__card--two');
const cardThree = document.querySelector('.calculation__card--three');
const survey = document.querySelector('.survey');
const discount = document.querySelector('.discount');


activeButtonOne.addEventListener("click", function (e) {
    activeButtonOne.classList.add('active-btn--one');
    survey.classList.add('none');
    discount.classList.add('none');
    cardOne.classList.add('hidden');
    cardTwo.classList.add('visible');
});

activeButtonTwo.addEventListener("click", function (e) {
    activeButtonTwo.classList.add('activeBtn-btn--two');
    cardTwo.classList.add('hidden');
    cardTwo.classList.remove('visible');
    cardThree.classList.add('visible');
    nextCard.id = 'btn-hidden';
    
});

activeButtonThree.addEventListener("click", function (e) {
    activeButtonThree.classList.add('activeBtn-btn-three');
});
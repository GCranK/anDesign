const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
};

const popupBtn = document.getElementById('popup-btn');
const popup = document.getElementById('popup');
const thankyouPopup = document.getElementById('thankyou-popup');
const popupForm = document.querySelector('.popup-form');
popupBtn.addEventListener('click', function() {
    popup.style.display = 'block';
});
window.addEventListener('click', function(event) {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
});
popupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    popup.style.display = 'none';
    thankyouPopup.style.display = 'block';
});
window.addEventListener('click', function(event) {
    if (event.target == thankyouPopup) {
        thankyouPopup.style.display = 'none';
    }
});

let promotionButton = document.querySelector("#promotion-btn");
promotionButton.addEventListener("click", function(e) {
    window.location.href = "./marketing.html";
});

let designButton = document.querySelector("#development-btn");
designButton.addEventListener("click", function(e) {
    window.location.href = "./design.html";
});

let priceButton = document.querySelector("#price-btn");
priceButton.addEventListener("click", function(e) {
    window.location.href = "./price-calculation.html";
});

let advantageButton = document.querySelector("#advanage-btn");
advantageButton.addEventListener("click", function(e) {
    window.location.href = "./price-calculation.html";
});
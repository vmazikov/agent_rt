const page = document.querySelector('.page');
const addButtonPopup499 = page.querySelector('.menu__item__popup-499');
const addButtonPopup559 = page.querySelector('.menu__item__popup-559');

const popup499 = page.querySelector('.popup_499');
const popup559 = page.querySelector('.popup_559');

const closeButtonPopup499 = popup499.querySelector('.popup__close-button');
const overlayPopup499 = popup499.querySelector('.popup__overlay');
const closeButtonPopup559 = popup559.querySelector('.popup__close-button');
const overlayPopup559 = popup559.querySelector('.popup__overlay');


const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

addButtonPopup499.addEventListener('click', (evt) => {
  evt.preventDefault();
  openPopup(popup499);
});

addButtonPopup559.addEventListener('click', (evt) => {
  evt.preventDefault();
  openPopup(popup559);
});

closeButtonPopup499.addEventListener('click', () => {
  closePopup(popup499);
});

overlayPopup499.addEventListener('click', () => {
  closePopup(popup499);
});

closeButtonPopup559.addEventListener('click', () => {
  closePopup(popup559);
});

overlayPopup559.addEventListener('click', () => {
  closePopup(popup559);
});

import Card from './card.js';
import FormValidator from './formValidator.js';
import { initialCards, config, elements } from './constants.js';


function createCard(data, elementTemplate, handleOpenPopup) {
  const card = new Card(data, elementTemplate, handleOpenPopup);
  return card;
}

function renderCard(data, elementTemplate, handleOpenPopup) {
  return createCard(data, elementTemplate, handleOpenPopup).generateCard();
}

const cardFormValidator = new FormValidator(config, elements.cardForm);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(config, elements.profileForm);
profileFormValidator.enableValidation();

//6 карточек по умолчанию
initialCards.forEach((item) => {
  elements.elementsContainer.append(renderCard(item, elements.elementTemplate, openPicture));
});

//добавление карточки
function addFormCard(evt) {
  evt.preventDefault();
  const item = {
    name: elements.titleEditCard.value,
    link: elements.linkEditCard.value,
  }
  elements.elementsContainer.prepend(renderCard(item, elements.elementTemplate, openPicture));
  closePopup(elements.popupAddCard);
}

//открытие попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escape);
}

//Закрытие popup
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escape);
}

//открытие popup профиля
function editPopupProfile() {
  openPopup(elements.popupEdit);
  elements.nameInput.value = elements.titleProfile.textContent;
  elements.whoisInput.value = elements.description.textContent;
}

//закрытие попап профиля
function closePopupProfile() {
  closePopup(elements.popupEdit);
}

//открытие popup для добавления карточки
function addCard() {
  cardFormValidator.hideErrors();
  cardFormValidator.toogleButtonState();
  clearInputsCard();
  openPopup(elements.popupAddCard);
}

//закрытие попап редактирования карточки
function closePopupAddCard() {
  closePopup(elements.popupAddCard);
}

//закрытие картинки
function closePopupImage() {
  closePopup(elements.popupImage);
}

//сохранение данных в профиль
function submitFormHandler(evt) {
  evt.preventDefault();
  elements.titleProfile.textContent = elements.nameInput.value;
  elements.description.textContent = elements.whoisInput.value;
  closePopup(elements.popupEdit);
}

function  openPicture(name, link) { //принимает данные
  openPopup(elements.popupImage);
  elements.popupTitle.textContent = name;
  elements.popupImageCard.src = link;
  elements.popupImageCard.alt = name;
} 

//очистка инпутов в попап добавления карты
function clearInputsCard()  {
  elements.cardForm.reset();
}

//обработчик закрытия
function escape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//закрытие по оверлею
elements.popupList.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') ||
    evt.target.classList.contains('popup__exit')) {
      closePopup(evt.target)
    };
  });
});

elements.addButton.addEventListener('click', addCard);
elements.editButton.addEventListener('click', editPopupProfile);
elements.exitPopupProfile.addEventListener('click', closePopupProfile);
elements.exitPopupAddCard.addEventListener('click', closePopupAddCard);
elements.exitPopupImage.addEventListener('click', closePopupImage);
elements.profileForm.addEventListener('submit', submitFormHandler);
elements.cardForm.addEventListener('submit', addFormCard);
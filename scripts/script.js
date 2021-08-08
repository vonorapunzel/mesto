import Card from './card.js';
import FormValidator from './formValidator.js';


function createCard(name, link, elementTemplate) {
  const card = new Card(name, link, elementTemplate);
  return card;
}

function renderCard(name, link, elementTemplate) {
  return createCard(name, link, elementTemplate).generateCard();
}

const cardFormValidator = new FormValidator(config, cardForm);
cardFormValidator.enableValidation();

//6 карточек по умолчанию
initialCards.forEach((item) => {
  elementsContainer.append(renderCard(item.name, item.link, elementTemplate));
});

//добавление карточки
function addFormCard(evt) {
  evt.preventDefault();
  const newCard = renderCard(titleEditCard.value, linkEditCard.value, elementTemplate);
  clearInputsCard();
  elementsContainer.prepend(newCard);
  closePopup(popupAddCard);
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
  openPopup(popupEdit);
  nameInput.value = titleProfile.textContent;
  whoisInput.value = description.textContent;
}

//закрытие попап профиля
function closePopupProfile() {
  closePopup(popupEdit);
}

//открытие popup для добавления карточки
function addCard() {
  cardFormValidator.hideErrors();
  cardFormValidator.toogleButtonState();
  clearInputsCard();
  openPopup(popupAddCard);
}

//закрытие попап редактирования карточки
function closePopupAddCard() {
  closePopup(popupAddCard);
}

//закрытие картинки
function closePopupImage() {
  closePopup(popupImage);
}

//сохранение данных в профиль
function submitFormHandler(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  description.textContent = whoisInput.value;
  closePopup(popupEdit);
}

function  openPicture(name, link) { //принимает данные
  openPopup(popupImage);
  popupTitle.textContent = name;
  popupImageCard.src = link;
  popupImageCard.alt = name;
} 

//очистка инпутов в попап добавления карты
function clearInputsCard()  {
  titleEditCard.value = '';
  linkEditCard.value = '';
}

//обработчик закрытия
function escape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//закрытие по оверлею
popupList.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') ||
    evt.target.classList.contains('popup__exit')) {
      closePopup(evt.target)
    };
  });
});

addButton.addEventListener('click', addCard);
editButton.addEventListener('click', editPopupProfile);
exitPopupProfile.addEventListener('click', closePopupProfile);
exitPopupAddCard.addEventListener('click', closePopupAddCard);
exitPopupImage.addEventListener('click', closePopupImage);
profileForm.addEventListener('submit', submitFormHandler);
cardForm.addEventListener('submit', addFormCard);
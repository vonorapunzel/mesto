import Card from './card.js';
import FormValidator from './formValidator.js';


function createCard(name, link, elementTemplate) {
  const card = new Card(name, link, elementTemplate)
  return card;
}

function render(name, link, elementTemplate) {
  return createCard(name, link, elementTemplate).generateCard();
}

function validation(config, formElement) {
  const validation = new FormValidator(config, formElement);
  return validation.enableValidation();
}

function checkValid() {
  formList.forEach((formElement) => {
    validation(config, formElement);
  });
}

//6 карточек по умолчанию
initialCards.forEach((item) => {
  elementsContainer.append(render(item.name, item.link, elementTemplate));
});

//добавление карточки
function addFormCard(evt) {
  evt.preventDefault();
  const newCard = render(titleEditCard.value, linkEditCard.value, elementTemplate);
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
  const buttonElement = cardForm.querySelector('.popup__button');
  buttonElement.disabled = true;
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

//очистка инпутов в попап добавления карты
function clearInputsCard()  {
  titleEditCard.value = '';
  linkEditCard.value = '';
}

//обработчик закрытия
function escape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
    clearInputsCard();
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

checkValid();

addButton.addEventListener('click', addCard);
editButton.addEventListener('click', editPopupProfile);
exitPopupProfile.addEventListener('click', closePopupProfile);
exitPopupAddCard.addEventListener('click', closePopupAddCard);
exitPopupImage.addEventListener('click', closePopupImage);
profileForm.addEventListener('submit', submitFormHandler);
cardForm.addEventListener('submit', addFormCard);
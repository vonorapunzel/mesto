//возвращает Tamplate карточки
function createCard(link, name) {
  const newItem = elementTemplate.content.querySelector('.element').cloneNode(true);
  const titleContent = newItem.querySelector('.element__title');
  const imgData = newItem.querySelector('.element__image');
  imgData.src = link;
  imgData.alt = name;
  titleContent.textContent = name;
  newItem.querySelector('.element__like').addEventListener('click', liked);
  newItem.querySelector('.element__trash').addEventListener('click', deletCard);
  imgData.addEventListener('click', () => openImage(link, name));
  return newItem;
}

//выводит первые 6 карточек
initialCards.forEach((itemData) => {
  const staticCard = createCard(itemData.link, itemData.name);
  elementsContainer.append(staticCard);
});

//открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escape);
}

//Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escape);
}

//сброс ошибок инпутов
function openCardPopup(popup) {
  openPopup(popup);
  const form = popup.querySelector(config.formSelector);
  const inputList = form.querySelectorAll(config.inputSelector);
  inputList.forEach((input) => {
    hideError(form, input, config);
  })
}

//открытие popup профиля
function editPopupProfile() {
  openCardPopup(popupEdit);
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
  openCardPopup(popupAddCard);
}

//закрытие попап редактирования карточки
function closePopupAddCard() {
  closePopup(popupAddCard);
}

//просмотр картинки карточки
function openImage(link, name) {
  openPopup(popupImage);
  popupTitle.textContent = name;
  popupImageCard.src = link;
  popupImageCard.alt = name;  
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

//добавление карточки
function addFormCard(evt) {
  evt.preventDefault();
  const newCard = createCard(linkEditCard.value, titleEditCard.value);
  clearInputsCard();
  elementsContainer.prepend(newCard);
  closePopup(popupAddCard);
}

//Удаление карточки
function deletCard(evt) {
  evt.target.closest('.element').remove();
}

//like карточки
function liked(evt) {
  evt.target.classList.toggle('element__like_active');
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

enableValidation(config);

addButton.addEventListener('click', addCard);
editButton.addEventListener('click', editPopupProfile);
exitPopupProfile.addEventListener('click', closePopupProfile);
exitPopupAddCard.addEventListener('click', closePopupAddCard);
exitPopupImage.addEventListener('click', closePopupImage);
profileForm.addEventListener('submit', submitFormHandler);
cardForm.addEventListener('submit', addFormCard);
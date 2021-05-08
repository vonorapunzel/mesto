const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const elementTemplate = document.querySelector('#template-element');
const elementsContainer = document.querySelector('.elements');
const popupList = document.querySelectorAll('.popup');
const nameInput = document.querySelector('.popup__text_name_input');
const whois = document.querySelector('.popup__text_whois_input');
const titleProfile = document.querySelector('.profile__title');
const descriprion = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupImage = document.querySelector('.popup_image-open');
const editButton = document.querySelector('.profile__editbutton');
const addButton = document.querySelector('.profile__addbutton');
const exitPopupProfile = document.querySelector('.popup__exit_exit-profile');
const exitPopupAddCard = document.querySelector('.popup__exit_exit-add-card');
const exitPopupImage = document.querySelector('.popup__exit_exit-image');
const profileForm = document.querySelector('.popup__form_profile');
const cardForm = document.querySelector('.popup__form_card');
const popupTitle = document.querySelector('.popup__title-image_title-card');
const popupImageCard = document.querySelector('.popup__image_image-card');
const titleEditCard = document.querySelector('.popup__text_title_input');
const linkEditCard = document.querySelector('.popup__text_link_input');

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
}

//Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открытие popup профиля
function editPopupProfile() {
  openPopup(popupEdit);
  nameInput.value = titleProfile.textContent;
  whois.value = descriprion.textContent;
}

//закрытие попап профиля
function closePopupProfile() {
  closePopup(popupEdit);
}

//открытие popup для добавления карточки
function addCard() {
  nameInput.value = titleProfile.textContent;
  whois.value = descriprion.textContent;
  openPopup(popupAddCard);
}

//закрытие попап редактирования карточки
function closePopupAddCard() {
  closePopup(popupAddCard);
  clearInputsCard()
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

function closePopupProfile() {
  closePopup(popupEdit);
}

//сохранение данных в профиль
function submitFormHandler(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  descriprion.textContent = whois.value;
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

addButton.addEventListener('click', addCard);
editButton.addEventListener('click', editPopupProfile);
exitPopupProfile.addEventListener('click', closePopupProfile);
exitPopupAddCard.addEventListener('click', closePopupAddCard);
exitPopupImage.addEventListener('click', closePopupImage);
profileForm.addEventListener('submit', submitFormHandler);
cardForm.addEventListener('submit', addFormCard);


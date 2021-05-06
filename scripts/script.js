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
const popup = document.querySelectorAll('.popup');
const name = document.querySelector('.popup__text_name_input');
const whois = document.querySelector('.popup__text_whois_input');
const title = document.querySelector('.profile__title');
const descriprion = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-card');
const popupImage = document.querySelector('.popup_image-open');
const editButton = document.querySelector('.profile__editbutton');
const addButton = document.querySelector('.profile__addbutton');
const exit = document.querySelectorAll('.popup__exit');
const profileForm = document.querySelector('.popup__form_profile');
const cardForm = document.querySelector('.popup__form_card');

//возвращает Tamplate карточки
function createCard(link, name) {
  const newItem = elementTemplate.content.querySelector('.element').cloneNode(true);
  const titleContent = newItem.querySelector('.element__title');
  let imgAlt = newItem.querySelector('.element__image');
  let imgSrc =  newItem.querySelector('.element__image');
  imgSrc.src = link;
  imgAlt.alt = name;
  titleContent.textContent = name;
  newItem.querySelector('.element__like').addEventListener('click', liked);
  newItem.querySelector('.element__trash').addEventListener('click', deletCard);
  newItem.querySelector('.element__image').addEventListener('click', openImage);
  return newItem;
}

//выводит первые 6 карточек
initialCards.forEach((itemData) => {
  const staticCard = createCard(itemData.link, itemData.name);
  elementsContainer.append(staticCard);
  
});

//открытие popup
function edit() {
  popupEdit.classList.add('popup_opened');
  name.value = title.textContent;
  whois.value = descriprion.textContent;
}

//открытие popup
function add() {
  popupAdd.classList.add('popup_opened');
}

//просмотр картинки карточки
function openImage(evt) {
  popupImage.classList.add('popup_opened');
  const titleImage = evt.target.parentElement.querySelector('.element__title');
  const linkImage = evt.target.parentElement.querySelector('.element__image');
  let popupTitle = document.querySelector('.popup__title-image_title-card');
  let popupImageCard = document.querySelector('.popup__image_image-card');
  popupTitle.textContent = titleImage.textContent;
  popupImageCard.src = linkImage.src;
  popupImageCard.alt = titleImage.textContent;
  
}

//закртыие popup
function close(evt) {
  popup.forEach((item) => {
    item.classList.remove('popup_opened');
  });
  let title = document.querySelector('.popup__text_title_input');
  let link = document.querySelector('.popup__text_link_input');
  title.value = '';
  link.value = '';
}

//сохранение данных в профиль
function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = name.value;
  descriprion.textContent = whois.value;
  close();
}

//добавление карточки
function formAddCard(evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__text_title_input').value;
  const link = document.querySelector('.popup__text_link_input').value;
  const newCard = createCard(link, title);
  elementsContainer.prepend(newCard);
  close();
}

//Удаление карточки
function deletCard(evt) {
  evt.target.closest('.element').remove();
}

//like карточки
function liked(evt) {
  evt.target.classList.toggle('element__like_active');
}

addButton.addEventListener('click', add);
editButton.addEventListener('click', edit);
exit.forEach((item) => {
  item.addEventListener('click', close);
});
profileForm.addEventListener('submit', formSubmitHandler);
cardForm.addEventListener('submit', formAddCard);


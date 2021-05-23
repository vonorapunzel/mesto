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
  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__span_text-error'
  };
  const elementTemplate = document.querySelector('#template-element');
  const elementsContainer = document.querySelector('.elements');
  const popupList = document.querySelectorAll('.popup');
  const nameInput = document.querySelector('.popup__text_name_input');
  const whoisInput = document.querySelector('.popup__text_whois_input');
  const titleProfile = document.querySelector('.profile__title');
  const description = document.querySelector('.profile__description');
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
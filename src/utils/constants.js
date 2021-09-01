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

  const elements = {
    elementTemplate: document.querySelector('#template-element'),
    elementsContainer: document.querySelector('.elements'),
    elementContainer: document.querySelector('.element'),
    popupList: document.querySelectorAll('.popup'),
    inputList: document.querySelectorAll('.popup__text'),
    nameInput: document.querySelector('.popup__text_name_input'),
    whoisInput: document.querySelector('.popup__text_whois_input'),
    titleProfile: document.querySelector('.profile__title'),
    description: document.querySelector('.profile__description'),
    popupEdit: document.querySelector('.popup_edit-profile'),
    popupAddCard: document.querySelector('.popup_add-card'),
    popupImage: document.querySelector('.popup_image-open'),
    editButton: document.querySelector('.profile__editbutton'),
    addButton: document.querySelector('.profile__addbutton'),
    exitPopupProfile: document.querySelector('.popup__exit_exit-profile'),
    exitPopupAddCard: document.querySelector('.popup__exit_exit-add-card'),
    exitPopupImage: document.querySelector('.popup__exit_exit-image'),
    profileForm: document.querySelector('.popup__form_profile'),
    savingImageProfile: document.querySelector('.popup__button-image'),
    savingNewCard: document.querySelector('.popup__button-create'),
    savingDataProfile: document.querySelector('.popup__button_save'),
    cardForm: document.querySelector('.popup__form_card'),
    popupTitle: document.querySelector('.popup__title-image_title-card'),
    popupImageCard: document.querySelector('.popup__image_image-card'),
    titleEditCard: document.querySelector('.popup__text_title_input'),
    linkEditCard: document.querySelector('.popup__text_link_input'),
    formList: Array.from(document.querySelectorAll(config.formSelector)),
    likeCounter: document.querySelector('.element__counter'),
    avatarButton: document.querySelector('.profile__container-avatar'),
    imageProfile: document.querySelector('.popup_profile-image'),
    profileAvatar: document.querySelector('.profile__avatar'),
    delCard: document.querySelector('.popup_delete-card'),
    id: 'b728b0821c88f6c27db30f15'
  }

  export { initialCards, config, elements };
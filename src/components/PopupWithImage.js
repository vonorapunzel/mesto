import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup)
  }

  open(name, link) {
    //вставляет в попап картинку с src изображения и подписью
    super.open();
    const popupTitleImage = this._selectorPopup.querySelector('.popup__title-image_title-card');
    const popupImageCard = this._selectorPopup.querySelector('.popup__image_image-card');
    popupTitleImage.textContent = name;
    popupImageCard.src = link;
    popupImageCard.alt = name;
  }
}
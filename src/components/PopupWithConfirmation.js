import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._submitButton = document.querySelector(".popup__button-delete");
  }

  setEventListeners() {
    super.setEventListeners();
  }

  open(callback){
    super.open();
    this._callback = callback;
    this._submitButton.onclick = this._callback;
  }
}
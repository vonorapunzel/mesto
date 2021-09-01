export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
  }

  open() {
    //открытие попапа
    this._selectorPopup.classList.add('popup_opened');
    this._selectorPopup.addEventListener('click', this._handleOverClose);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    //закрытие попапа
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._selectorPopup.removeEventListener('click', this._handleOverClose);
  }

  _handleEscClose = (evt) => {
    //логика закрытия попапа еск.
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    //слушатель клика иконки закрытия. 
    this._selectorPopup.querySelector('.popup__exit').addEventListener('click', () => {this.close()})
  }
}
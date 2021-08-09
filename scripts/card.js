export default class Card {

  constructor(data, elementTemplate, handleOpenPopup){
    this._name = data.name;
    this._link = data.link;
    this._elementTemplate = elementTemplate;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = this._elementTemplate.content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector('.element__title');
    this._titleElement.textContent = this._name;
    this._imageElement = this._element.querySelector('.element__image');
    this._imageElement.src = this._link;
    this._likeElement = this._element.querySelector('.element__like');
    this._titleElement.alt = this._name;
    this._trashElement = this._element.querySelector('.element__trash');
    this._setEventListeners();
    return this._element;
  }
  
  _setEventListeners() {
    this._likeElement.addEventListener('click', () => {this._like()});
    this._trashElement.addEventListener('click', () => {this._deleteCard()});
    this._imageElement.addEventListener('click', () => {this._handleOpenPopup(this._name, this._link)});
  } 

  _like() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }
}
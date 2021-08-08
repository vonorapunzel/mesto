import { openPopup } from "./script.js";

export default class Card {
  _name;
  _link;
  _elementTemplate;

  constructor(name, link, elementTemplate){
    this._name = name;
    this._link = link;
    this._elementTemplate = elementTemplate;
  }

  _getTemplate() {
    const cardElement = this._elementTemplate.content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').alt = this._name;
    return this._element;
  }
  
  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {this._openImage()});
    this._element.querySelector('.element__like').addEventListener('click', () => {this._like()});
    this._element.querySelector('.element__trash').addEventListener('click', () => {this._deleteCard()})
  } 

  _openImage() {
    openPopup(popupImage);
    popupTitle.textContent = this._name;
    popupImageCard.src = this._link;
    popupImageCard.alt = this._name;
  }

  _like() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.closest('.element').remove();
  }
}
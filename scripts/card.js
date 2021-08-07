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
    this.element = this._getTemplate();
    this._openImageCardClick();
    this._likeCardClick();
    this._deletedCardClick();
    this.element.querySelector('.element__title').textContent = this._name;
    this.element.querySelector('.element__image').src = this._link;
    return this.element;
  }

  _openImage() {
    openPopup(popupImage);
    popupTitle.textContent = this._name;
    popupImageCard.src = this._link;
    popupImageCard.alt = this._name;
  }

  _openImageCardClick() {
    this.element.querySelector('.element__image').addEventListener('click', () => {this._openImage()});
  }

  liked() {
    this.element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _likeCardClick() {
    this.element.querySelector('.element__like').addEventListener('click', () => {this.liked()});
  }

  _deletedCard() {
    this.element.closest('.element').remove();
  }

  _deletedCardClick() {
    this.element.querySelector('.element__trash').addEventListener('click', () => {this._deletedCard()})
  }
}
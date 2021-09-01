export default class Card {

  constructor(data, elementTemplate, handleOpenPopup, {handleRemoveClick}, handleLikeClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._elementTemplate = elementTemplate;
    this._handleOpenPopup = handleOpenPopup;
    this._like = data.likes.length;
    this._handleRemoveClick = handleRemoveClick;
    this._handleLikeClick = handleLikeClick;
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
    this._likeCounter = this._element.querySelector('.element__counter');
    this._likeCounter.textContent = this._like
    this._trashElement = this._element.querySelector('.element__trash');
    this._checkHeart();
    this._setEventListeners();
    return this._element;
  }
  
  _setEventListeners() {
    this._likeElement.addEventListener('click', () => {this._likeCard()});
    this._trashElement.addEventListener('click', this._handleRemoveClick);
    this._imageElement.addEventListener('click', () => {this._handleOpenPopup(this._name, this._link)});
  } 

  _likeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
    if(this._element.querySelector('.element__like').classList.contains('element__like_active')){
      this._likeCounter.textContent = parseInt(this._likeCounter.textContent, 10) + 1;
      this._handleLikeClick(this._id, true) 
    } else {
      this._likeCounter.textContent = parseInt(this._likeCounter.textContent, 10) - 1;
      this._handleLikeClick(this._id, false)
    }
  }
  
  getAnotherId(id){
    this._anotherId = id;
  }

  _checkHeart() {
    this._data.likes.forEach(item => {
      if (item._id === this.getAnotherId) {
        document.querySelector('.element__like').classList.toggle('element__like_active')
      }
    })
  }

  deleteCard() {
    this._element.remove();
  }
}
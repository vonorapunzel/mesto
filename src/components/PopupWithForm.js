import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, {handleFormSubmit}) {
    super(selectorPopup);
    this._callbackSubmitForm = handleFormSubmit;
    this._inputList = this._selectorPopup.querySelectorAll('.popup__text'); 
  }

  _getInputValues() {
    //собирает данные всех полей формы.
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    //помимо обработки закртыия обрабатывает сабмит.
    super.setEventListeners();
    this._selectorPopup.addEventListener('submit', this._submit);
  }

  _submit = (evt) => {
    evt.preventDefault();
    this._callbackSubmitForm(this._getInputValues());
  }

  close() {
    super.close();
    this._selectorPopup.querySelector('.popup__form').reset();
  }
}
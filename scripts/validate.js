/*//функция добавления ошибки
const showError = (formElement, inputElement, errorMessage, config) => {
  const {inputErrorClass, errorClass} = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};

//функция которая убирает ошибку
const hideError = (formElement, inputElement, config) => {
  const {inputErrorClass, errorClass} = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const hideAllError = (form, inputElement, config) => {
  const errorElement = form.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(config.errorClass);
  inputElement.classList.remove(config.inputErrorClass);
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
};

//работа кнопки от валидности
const toogleButtonState = (buttonElement, inputList) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
} 

const setEventListeners = (formElement, config) => {
  const {inputSelector, submitButtonSelector, ...restConfig} = config;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, restConfig);
      toogleButtonState(buttonElement, inputList);
    });
  });
  toogleButtonState(buttonElement, inputList);
};

const enableValidation = (config) => {
  const {formSelector, ...restConfig} = config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig);
  });
};

//проверка валидности поля
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideError(formElement, inputElement, config);
  }
}*/

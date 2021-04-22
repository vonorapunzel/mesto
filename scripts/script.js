let name = document.querySelector('.popup__text_name_input');
let whois = document.querySelector('.popup__text_whois_input');
let title = document.querySelector('.profile__title');
let descriprion = document.querySelector('.profile__description');
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__editbutton');
let exit = document.querySelector('.popup__exit')
let form = document.querySelector('.popup__form');

//открытие popup
function edit() {
  popup.classList.add('popup_opened');
  name.value = title.textContent;
  whois.value = descriprion.textContent;
}

//закртыие popup
function close() {
  popup.classList.remove('popup_opened');
}


//сохранение данных в профиль
function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = name.value;
  descriprion.textContent = whois.value;
  close();
}

editButton.addEventListener('click', edit);
exit.addEventListener('click', close);
form.addEventListener('submit', formSubmitHandler);
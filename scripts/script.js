let name = document.querySelector('.popup__text_name');
let whois = document.querySelector('.popup__text_whois');
let title = document.querySelector('.profile__title');
let descriprion = document.querySelector('.profile__description');
let like = document.querySelector('.elements__like');
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__editbutton');
let exit = document.querySelector('.popup__exit')
let form = document.querySelector('.popup__form');

function liked() {
  like.classList.toggle('elements__like_active');
}

function edit() {
  popup.classList.toggle('popup_opened');
  name.value = title.textContent;
  whois.value = descriprion.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = name.value;
  descriprion.textContent = whois.value;
  popup.classList.toggle('popup_opened')
}

editButton.addEventListener('click', edit);
exit.addEventListener('click', edit);
like.addEventListener('click', liked);
form.addEventListener('submit', formSubmitHandler);
import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { config, elements } from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithDelete from '../components/PopupWithConfirmation.js';

const profileForm = new PopupWithForm(elements.popupEdit, {
  handleFormSubmit: (cardItem) => {
    api.editUserProfile(cardItem, elements.savingDataProfile);
    userInfo.setUserInfo(cardItem.name, cardItem.about);
  }}
);
profileForm.setEventListeners();

const editImageProfile = new PopupWithForm(elements.imageProfile, {
  handleFormSubmit: (cardItem) => {
    elements.profileAvatar.src = cardItem.link;
    api.changeAvatar(cardItem, elements.savingImageProfile);
    
  }
});
editImageProfile.setEventListeners();

const openImg = new PopupWithImage(elements.popupImage);
openImg.setEventListeners();

const userInfo = new UserInfo(elements.titleProfile, elements.description, elements.profileAvatar);

const api = new Api();

const deleteCard = new PopupWithDelete(elements.delCard);
deleteCard.setEventListeners();

api.getUserProfile()
  .then((res) => {
    userInfo.setUserAvatar(res)
  })

api.getInitialCards()
  .then((res) => {
    const cardList = new Section({
      items: res.reverse(),
      renderer: (cardElement) => {
        const newCard = createCard(cardElement, handleLikeClick);
        cardList.addItem(newCard);
        if(cardElement.owner._id != elements.id) {
          const trash = newCard.querySelector('.element__trash')
          trash.remove()
        }
        
        cardElement.likes.forEach(item => {
          if (item._id === elements.id) {
            document.querySelector('.element__like').classList.toggle('element__like_active')
          }
        })
      }}, 
      elements.elementsContainer
    );
    cardList.renderingElements();

    const addForm = new PopupWithForm(elements.popupAddCard, {
      handleFormSubmit: (cardItem) => {
        api.addNewCard(cardItem, elements.savingNewCard)
          .then((res) => {
            const newCard = createCard(res, handleLikeClick) 
            cardList.addItem(newCard);
          })
      },
    });
    addForm.setEventListeners();

    elements.addButton.addEventListener('click', () => {
      validatorCardForm.hideErrors();
      validatorCardForm.toggleButtonState();
      addForm.open();
    });
  })

api.getUserProfile()
  .then((res) => {
    userInfo.setUserInfo(res.name, res.about)
  })

function createCard(data) {
  const card = new Card(data, 
    elements.elementTemplate, 
    (name, link) => openImg.open(name, link), 
     {
      handleRemoveClick: () => {
        deleteCard.open(() => {
          api.deleteCard(data._id)
            .then(() => {
              card.deleteCard();
              deleteCard.close();
            }
          )
        });
      }
    }, 
      handleLikeClick,
  );
  card.getAnotherId(data._id);
  const newCard = card.generateCard();
  return newCard;
}

function handleLikeClick(id, action) {
  if (action == true) {
    api.likeCard(id, true);
  } else {
    api.likeCard(id, false);
  }
}

elements.avatarButton.addEventListener('click', () => {
  editImageProfile.open();
  validatorAvatarForm.hideErrors();
})

elements.editButton.addEventListener('click', () => {
  validatorProfileForm.hideErrors();
  profileForm.open();
  elements.nameInput.value = userInfo.getUserInfo().name;
  elements.whoisInput.value = userInfo.getUserInfo().about;
  userInfo.getUserInfo();
})

const validatorProfileForm = new FormValidator(config, elements.profileForm);
validatorProfileForm.enableValidation();
const validatorCardForm = new FormValidator(config, elements.cardForm);
validatorCardForm.enableValidation();
const validatorAvatarForm = new FormValidator(config, elements.imageProfile);
validatorAvatarForm.enableValidation();

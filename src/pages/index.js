import '../pages/index.css';
import { config, elements } from '../utils/constants.js';
import { renderLoading } from '../utils/renderLoading.js';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithDelete from '../components/PopupWithConfirmation.js';

const profileForm = new PopupWithForm(elements.popupEdit, {
  handleFormSubmit: (cardItem) => {
    renderLoading(elements.savingDataProfile, true);
    api.editUserProfile(cardItem, elements.savingDataProfile)
      .then(() => {
        userInfo.setUserInfo(cardItem.name, cardItem.about);
        profileForm.close()
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {
        renderLoading(elements.savingDataProfile, false);
      })
  }}
);
profileForm.setEventListeners();

const editImageProfile = new PopupWithForm(elements.imageProfile, {
  handleFormSubmit: (cardItem) => {
    renderLoading(elements.savingImageProfile, true);
    api.changeAvatar(cardItem, elements.savingImageProfile)
      .then(() => {
        elements.profileAvatar.src = cardItem.avatar;
        editImageProfile.close();
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {
        renderLoading(elements.savingImageProfile, false);
      })
  }
});
editImageProfile.setEventListeners();

const openImg = new PopupWithImage(elements.popupImage);
openImg.setEventListeners();

const userInfo = new UserInfo(elements.titleProfile, elements.description, elements.profileAvatar);

const api = new Api();

const deleteCard = new PopupWithDelete(elements.delCard);
deleteCard.setEventListeners();

const addForm = new PopupWithForm(elements.popupAddCard, {
  handleFormSubmit: (cardItem) => {
    renderLoading(elements.savingNewCard, true);
    api.addNewCard(cardItem)
      .then((result) => {
        api.getUserProfile()
          .then((res) => {
            const newCard = createCard(result, res._id)
            cardList.addItem(newCard);
          addForm.close()
          })
          .catch(err => console.log(`Ошибка.....: ${err}`))
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {
        renderLoading(elements.savingNewCard, false);
      })
  }
});
addForm.setEventListeners();

const cardList = new Section({
  renderer: (cardElement) => {
    api.getUserProfile()
    .then((res) => {
      const newCard = createCard(cardElement, res._id);
      cardList.addItem(newCard); 
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  }}, 
  elements.elementsContainer
);

Promise.all([
  api.getUserProfile(),
  api.getInitialCards()
])
  .then((values) => {
    const personalData = values[0];
    const usersData = values[1];
    userInfo.setUserAvatar(personalData);
    userInfo.setUserInfo(personalData.name, personalData.about);
    cardList.renderingElements(usersData.reverse());
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))

function createCard(data, personalId) {
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
            })
            .catch(err => console.log(`Ошибка.....: ${err}`))
        });
      }
    }, {
      handleLikeClick: (_id, action) => {
        if(action){
          api.likeCard(_id, true)
          .then(() => {
            card.likeCard();
          })
          .catch(err => console.log(`Ошибка.....: ${err}`))
      } else {
        api.likeCard(_id, false)
          .then(() => {
            card.deleteLike();
          })
          .catch(err => console.log(`Ошибка.....: ${err}`))
        }
      }
    },
      personalId
  );
  
  const newCard = card.generateCard();
  return newCard;
}


const validatorProfileForm = new FormValidator(config, elements.profileForm);
validatorProfileForm.enableValidation();
const validatorCardForm = new FormValidator(config, elements.cardForm);
validatorCardForm.enableValidation();
const validatorAvatarForm = new FormValidator(config, elements.imageProfile);
validatorAvatarForm.enableValidation();

elements.avatarButton.addEventListener('click', () => {
  editImageProfile.open();
  validatorAvatarForm.hideErrors();
})

elements.editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  validatorProfileForm.hideErrors();
  profileForm.open();
  elements.nameInput.value = userData.name;
  elements.whoisInput.value = userData.about;
  userInfo.getUserInfo();
})

elements.addButton.addEventListener('click', () => {
  validatorCardForm.hideErrors();
  validatorCardForm.toggleButtonState();
  addForm.open();
});

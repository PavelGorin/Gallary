const imagePopup = document.querySelector('.popup__image');
const imagePicture = imagePopup.querySelector('.popup__picture');
const imageName = imagePopup.querySelector('.popup__picture-name');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button_image');
const cardsList = document.querySelector('.elements');
const card = document.querySelector('.card');
const comment = document.querySelector('.popup__input-comment');
const buttonComment = document.querySelector('.popup__button-comment');

function openPopup(block) {
  block.classList.add('popup_opened');
}

function closePopup(block) {
  block.classList.remove('popup_opened');
}

// Code for add new card below

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  } 
];

const createCard = data => {  // Create new card function
  const newCard = card.content.cloneNode(true);
  const popupImage = newCard.querySelector('.element__picture');
  const elementName = newCard.querySelector('.element__name');
  const elementImage = newCard.querySelector('.element__image');
  elementName.textContent = data.name;
  elementImage.src = data.link;
  elementImage.alt = data.name;

  popupImage.addEventListener('click', openPopupImage);
 
  return newCard;
};

const renderInitialCards = () => { // create start page function
  const items = initialCards.map(el => createCard(el));
  cardsList.append(... items );
};

function openPopupImage(card) {  // Open popup image
  openPopup(imagePopup);
  imagePopup.querySelector('.popup__like-pic').classList.remove('element__like_active');
  imagePopup.querySelector('.element__like').addEventListener('click', function (evt) { // like dislike function
    evt.target.classList.toggle('element__like_active');
   });
  imagePicture.src = card.target.src;
  imageName.textContent = '';
}

function closePopupImage() {  // close popup image
  closePopup(imagePopup);
  comment.value = '';
}

imagePopupCloseButton.addEventListener('click', closePopupImage);

renderInitialCards();

// comment image popup

function addComment() {
  imageName.textContent = comment.value;
  return comment.value = '';
} 

buttonComment.addEventListener('click', addComment);
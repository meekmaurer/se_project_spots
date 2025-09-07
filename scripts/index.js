const initialCards = [
  {
    name: "Gloden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const profileNewPostbtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const addCardformElement = document.querySelector("#new-post-form");
const linkInput = document.querySelector("#image-link-input");
const nameInput = document.querySelector("#caption-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageElement = previewModal.querySelector(".modal__image");
const previewcaptionElement = previewModal.querySelector(".modal__caption");
const cardSubmitButton = document.querySelector("#save-btn");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.alt = data.name;
  cardImageEl.src = data.link;
  cardTitleEl.textContent = data.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-button_active");
  });
  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImageEl.addEventListener("click", () => {
    openModal(previewModal);
    previewImageElement.src = data.link;
    previewcaptionElement.textContent = data.name;
    previewImageElement.alt = data.name;
  });

  return cardElement;
}

function handleOverlay(event) {
  if (event.target.classList.contains("modal-is-open")) {
    closeModal(event.target);
  }
}

function handleEscape(event) {
  if (event.key === "Escape") {
    const modal = document.querySelector(".modal-is-open");

    closeModal(modal);
  }
}

function openModal(modal) {
  modal.classList.add("modal-is-open");
  modal.addEventListener("click", handleOverlay);
  document.addEventListener("keydown", handleEscape);
}
function closeModal(modal) {
  modal.classList.remove("modal-is-open");
  modal.removeEventListener("click", handleOverlay);
  document.removeEventListener("keydown", handleEscape);
}

profileEditBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;

  resetValidation({
    formElement: editProfileForm,
    inputList: [editProfileNameInput, editProfileDescriptionInput],
    config: settings,
  });

  openModal(editProfileModal);
});

profileNewPostbtn.addEventListener("click", function () {
  openModal(newPostModal);
});
const closeButtons = document.querySelectorAll(`.modal__close-btn`);

closeButtons.forEach((button) => {
  const popup = button.closest(`.modal`);
  button.addEventListener(`click`, () => closeModal(popup));
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

addCardformElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const inputValues = {
    name: nameInput.value,
    link: linkInput.value,
  };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(newPostModal);
  disableButton(cardSubmitButton, settings);
  evt.target.reset();
});
initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});

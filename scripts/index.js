const profileEditbtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");

profileEditbtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal-is-open");
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
});

modalCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal-is-open");
});

const profileNewPostbtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const modalCloseBtn2 = newPostModal.querySelector(".modal__close-btn");
const addCardformElement = document.querySelector("#new-post-form");
const linkInput = document.querySelector("#image-link-input");
const nameInput = document.querySelector("#caption-input");

profileNewPostbtn.addEventListener("click", function () {
  newPostModal.classList.add("modal-is-open");
});

modalCloseBtn2.addEventListener("click", function () {
  newPostModal.classList.remove("modal-is-open");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal-is-open");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  newPostModal.classList.remove("modal-is-open");
  console.log(nameInput.value);
  console.log(linkInput.value);
}

addCardformElement.addEventListener("submit", handleAddCardSubmit);

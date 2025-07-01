const profileEditbtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseBtn = editProfileModal.querySelector(".modal__close-btn");

profileEditbtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal-is-open");
});

modalCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal-is-open");
});

const profileNewPostbtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const modalCloseBtn2 = newPostModal.querySelector(".modal__close-btn");

profileNewPostbtn.addEventListener("click", function () {
  newPostModal.classList.add("modal-is-open");
});

modalCloseBtn2.addEventListener("click", function () {
  newPostModal.classList.remove("modal-is-open");
});

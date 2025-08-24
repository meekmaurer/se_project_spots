const showInputError = (formElement, inputElement, errorMessage) => {
  console.log(errorMessage);
  const errorMsgID = inputElement.id + "-error";
  const errorMsgElement = document.querySelector("#" + errorMsgID);
  errorMsgElement.textContent = errorMessage;
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
};

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  //  const buttonElement = formElement.querySelector(".modal__button");

  // toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidaton = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formElement) => {
    setEventListener(formElement);
  });
};

enableValidaton();

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageID = inputElement.id + "error";
  const errorMessageElement = document.querySelector("#" + errorMessageID);
  errorMessageElement.textContent = errorMessage;
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
};

const setEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll("modal__input");
  const buttonElement = formElement.querySelector("modal__button");

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (event) => {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll("modal__form");
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();

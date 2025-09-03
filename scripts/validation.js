const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgElement = formElement.querySelector("#" + errorMsgID);
  errorMsgElement.textContent = errorMessage;
  errorMsgElement.classList.add("modal__error_visible");
  inputElement.classList.add("modal__input_type_error");
};

const hideInputError = (formElement, inputElement, errorMessage) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgElement = formElement.querySelector("#" + errorMsgID);
  errorMsgElement.textContent = errorMessage;
  errorMsgElement.classList.remove("modal__error_visible");
  inputElement.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement, inputElement.validationMessage);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("modal__button_disabled");
    disableButton(buttonElement);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__button_disabled");
  }
};

const disableButton = (buttonElement) => {
  buttonElement.disabled = true;
};

const resetValidation = (formElement, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input);
  });
};

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidaton = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListener(formElement);
  });
};

enableValidaton(settings);

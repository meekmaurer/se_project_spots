const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = ({
  formElement,
  inputElement,
  errorMessage,
  config,
}) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgElement = formElement.querySelector("#" + errorMsgID);
  errorMsgElement.textContent = errorMessage;
  errorMsgElement.classList.add(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
};

const hideInputError = ({
  formElement,
  inputElement,
  errorMessage,
  config,
}) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgElement = formElement.querySelector("#" + errorMsgID);
  errorMsgElement.textContent = errorMessage;
  errorMsgElement.classList.remove(config.errorClass);
  inputElement.classList.remove(config.inputErrorClass);
};

const checkInputValidity = ({ formElement, inputElement, config }) => {
  if (!inputElement.validity.valid) {
    showInputError({
      formElement: formElement,
      inputElement: inputElement,
      errorMessage: inputElement.validationMessage,
      config: config,
    });
  } else {
    hideInputError({
      formElement: formElement,
      inputElement: inputElement,
      errorMessage: inputElement.validationMessage,
      config: config,
    });
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = ({ inputList, buttonElement, config }) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
};

const resetValidation = ({ formElement, inputList, config }) => {
  inputList.forEach((inputElement) => {
    hideInputError({
      formElement: formElement,
      inputElement: inputElement,
      errorMessage: inputElement.validationMessage,
      config: config,
    });
  });
};

const setEventListener = ({ formElement, config }) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState({ inputList, buttonElement, config });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity({ formElement, inputElement, config });
      toggleButtonState({ inputList, buttonElement, config });
    });
  });
};

const enableValidaton = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListener({ formElement, config });
  });
};

enableValidaton(settings);

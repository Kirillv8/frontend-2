import { INPUT_AUTORIZATION } from "./constants/authorizationElementsConstants";
import { divContainerError } from "./constants/containers";
import { AUTHORIZATION_POPUP__CONTENT_CONTAINER } from "./constants/authorizationElementsConstants";

export const createdEventBlur = () => {
  if (!INPUT_AUTORIZATION.value.includes("@")) {
    INPUT_AUTORIZATION.classList.add("invalid");
    divContainerError.classList.add("top");
    divContainerError.classList.add("error");
    divContainerError.textContent = "Пожалуйста, введите правильный email.";
  }
};

export const createdEventFocus = () => {
  if (INPUT_AUTORIZATION.classList.contains("invalid")) {
    INPUT_AUTORIZATION.classList.remove("invalid");
    divContainerError.textContent = "";
  }
};

AUTHORIZATION_POPUP__CONTENT_CONTAINER.append(divContainerError);

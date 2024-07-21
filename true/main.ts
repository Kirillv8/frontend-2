import {
  deleteDisplayBlockChat,
  deleteDisplayNoneChat,
  addDisplayBlockChat,
  addDisplayNoneChat,
  deleteDisplayBlockSetting,
  deleteDisplayNoneSetting,
  addDisplayBlockSetting,
  addDisplayNoneSetting,
  deleteDisplayBlockAuthorization,
  deleteDisplayNoneAuthorization,
  addDisplayBlockAuthorization,
  addDisplayNoneAuthorization,
  deleteDisplayBlockMailConfirmation,
  deleteDisplayNoneMailConfirmation,
  addDisplayBlockMailConfirmation,
  addDisplayNoneMailConfirmation,
} from "./popup-logic/popupLogic";

import {
  CONTAINER_WRAPPER_CHAT,
  CONTAINER_SETTING_POPUP,
  CONTAINER_AUTHORIZATION_POPUP,
  CONTAINER_MAIL_CONFIRMATION,
  CONTAINER_CHAT,
} from "./constants/containers";

import {
  INPUT_AUTORIZATION,
  AUTHORIZATION_BUTTON_GET_CODE,
  AUTHORIZATION_BUTTON_ENTER_CODE,
} from "./constants/authorizationElementsConstants";

import {
  INPUT_MAIL_CONFIRMATION,
  BUTTON_LOGIN_MAIL_CONFIRMATION,
  BUTTON_CLOSE_MAIL_CONFIRMATION,
} from "./constants/mailConfirmationConstants";

import { addUserEmailToServer } from "./authorization/addUserEmailToServer";

import { addTokenInCookie } from "./tokenCookie/addTokenInCookie";

import Cookies from "js-cookie";

import { changeNameOnServer } from "./authorization/changeNameOnServer";

import {
  BUTTON_EXIT_CHAT,
  BUTTON_OPEN_SETTING_CHAT,
} from "./constants/chatConstants";

import {
  INPUT_CHANGE__NAME_SETTING,
  BUTTON_CHANGE_NAME_SETTING,
  BUTTON_CLOSE_SETTING,
} from "./constants/settingConstants";

import { getNameUserInServer } from "./messages/getNameUserInServer";

import {
  INPUT_MESSAGE_FIELD,
  BUTTON_SEND_MESSAGE,
} from "./constants/chatConstants";

import { createMessage } from "./messages/addMessageAndUserDataToTemplate";

import { downloadHistoryMessage } from "./messages/downloadHistoryMessage";

import { Message, myArrayMessage, GetMyData } from "./interface/interface";

import { websocket } from "./messages/webSocket";

export let tokenValue = Cookies.get("token");

import {
  createdEventBlur,
  createdEventFocus,
} from "./createdEventsBlurAndFocus";

// const body = document.body;
// body.appendChild(divContainerError);
// const audio = new Audio();
// audio.src = "./button-click.mp3";
// import { addSoundButton } from "./audio/addSoundOnClick";
// import { audio } from "./audio/addSoundOnClick";

window.addEventListener("DOMContentLoaded", (event) => {
  if (event.target) {
    addDisplayNoneMailConfirmation(CONTAINER_MAIL_CONFIRMATION);
    addDisplayNoneSetting(CONTAINER_SETTING_POPUP);
    addDisplayNoneChat(CONTAINER_WRAPPER_CHAT);
  }
});

INPUT_AUTORIZATION.addEventListener("blur", createdEventBlur);

INPUT_AUTORIZATION.addEventListener("focus", createdEventFocus);

AUTHORIZATION_BUTTON_GET_CODE.addEventListener("click", (event) => {
  const mailUsers = INPUT_AUTORIZATION.value;

  addUserEmailToServer(mailUsers);
});

AUTHORIZATION_BUTTON_ENTER_CODE.addEventListener("click", (event) => {
  const audio = new Audio();
  audio.preload = "none";
  audio.src = "./button-click.mp3";
  audio.play();
  addDisplayNoneAuthorization(CONTAINER_AUTHORIZATION_POPUP);
  if (event.target) {
    deleteDisplayNoneMailConfirmation(CONTAINER_MAIL_CONFIRMATION);
    addDisplayBlockMailConfirmation(CONTAINER_MAIL_CONFIRMATION);
  }
});

BUTTON_LOGIN_MAIL_CONFIRMATION.addEventListener("click", async (event) => {
  const tokenValue = INPUT_MAIL_CONFIRMATION.value;

  const token = addTokenInCookie(tokenValue);
  const userDataOnTheServer: GetMyData = await getNameUserInServer(tokenValue);

  if (userDataOnTheServer.token === token) {
    alert("Здравстуй пользователь!");
    deleteDisplayBlockMailConfirmation(CONTAINER_MAIL_CONFIRMATION);
    addDisplayNoneMailConfirmation(CONTAINER_MAIL_CONFIRMATION);
    deleteDisplayNoneChat(CONTAINER_WRAPPER_CHAT);
    addDisplayBlockChat(CONTAINER_WRAPPER_CHAT);

    const message: Message[] | null = await downloadHistoryMessage(tokenValue);
    console.log(message);

    if (message !== null) {
      myArrayMessage.push(...message);
    }
    createMessage(myArrayMessage);
  } else if (userDataOnTheServer.token !== token) {
    alert("Не верный токен пользователя!");
  } else {
    alert("Введите новый токен пользователя!");
  }
});

BUTTON_CLOSE_MAIL_CONFIRMATION.addEventListener("click", () => {
  deleteDisplayBlockMailConfirmation(CONTAINER_MAIL_CONFIRMATION);
  addDisplayNoneMailConfirmation(CONTAINER_MAIL_CONFIRMATION);
  deleteDisplayNoneAuthorization(CONTAINER_AUTHORIZATION_POPUP);
  addDisplayBlockAuthorization(CONTAINER_AUTHORIZATION_POPUP);
});

BUTTON_OPEN_SETTING_CHAT.addEventListener("click", (event) => {
  deleteDisplayBlockChat(CONTAINER_WRAPPER_CHAT);
  addDisplayNoneChat(CONTAINER_WRAPPER_CHAT);
  addDisplayBlockSetting(CONTAINER_SETTING_POPUP);
});

BUTTON_CHANGE_NAME_SETTING.addEventListener("click", () => {
  const userName = INPUT_CHANGE__NAME_SETTING.value;
  changeNameOnServer(tokenValue, userName);
});

BUTTON_CLOSE_SETTING.addEventListener("click", () => {
  deleteDisplayBlockSetting(CONTAINER_SETTING_POPUP);
  addDisplayNoneSetting(CONTAINER_SETTING_POPUP);
  deleteDisplayNoneChat(CONTAINER_WRAPPER_CHAT);
  addDisplayBlockChat(CONTAINER_WRAPPER_CHAT);
});

BUTTON_EXIT_CHAT.addEventListener("click", () => {
  deleteDisplayBlockChat(CONTAINER_WRAPPER_CHAT);
  deleteDisplayNoneAuthorization(CONTAINER_AUTHORIZATION_POPUP);
  addDisplayBlockAuthorization(CONTAINER_AUTHORIZATION_POPUP);
});

BUTTON_SEND_MESSAGE.addEventListener("click", async () => {
  try {
    const messages = INPUT_MESSAGE_FIELD.value;

    const userDataOnTheServer = await getNameUserInServer(tokenValue);
    console.log(userDataOnTheServer);

    websocket(tokenValue, messages);
  } catch (error) {
    console.error("Ошибка", error);
  }
});

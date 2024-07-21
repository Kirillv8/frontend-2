import { CONTAINER_CHAT } from "../constants/containers";

import { DataObject } from "../interface/interface";

const getTime = (date: Date) => {
  const time = new Date(date).toLocaleTimeString();
  return time.substring(0, time.length - 3);
};

export const createTemplateForDataWebSocket = (data: DataObject) => {
  const email = "urmancheev.it@gmail.com";

  const template = document.querySelector("#msg") as HTMLTemplateElement;
  let messageTemplate = template.content.cloneNode(true) as HTMLElement;

  const messageName = messageTemplate.querySelector("#message-name")!;
  const messageText = messageTemplate.querySelector("#message-text")!;
  const messageTime = messageTemplate.querySelector("#message-time")!;

  const messageBlock = messageTemplate.querySelector(".message-block")!;
  const messageContainer = messageTemplate.querySelector(".other-message")!;

  if (data.user.email === email) {
    messageContainer.className = "my-message";
    messageBlock.classList.add("sent-message");
    messageName.textContent = `:${data.user.name || ""}`;
    messageText.textContent = `:${data.text}`;
    if (messageTime) messageTime.textContent = getTime(data.createdAt);
    CONTAINER_CHAT.prepend(messageTemplate);
  } else {
    messageContainer.className = "other-message";
    messageBlock.classList.add("received-message");
    messageName.textContent = data.user.name || "";
    messageText.textContent = data.text;
    if (messageTime) messageTime.textContent = getTime(data.createdAt);
    CONTAINER_CHAT.prepend(messageTemplate);
  }
};

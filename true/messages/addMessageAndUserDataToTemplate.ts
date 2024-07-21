import { CONTAINER_CHAT } from "../constants/containers";

import { Message } from "../interface/interface";

export const addMessageAndUserDataToTemplate = (
  messages: Message[]
): HTMLElement => {
  const email = "urmancheev.it@gmail.com";

  const template = document.querySelector("#msg") as HTMLTemplateElement;
  let messageTemplate = template.content.cloneNode(true) as HTMLElement;

  messages.forEach((message) => {
    const messageName = messageTemplate.querySelector("#message-name")!;
    const messageText = messageTemplate.querySelector("#message-text")!;
    const messageBlock = messageTemplate.querySelector(".message-block")!;
    const messageContainer = messageTemplate.querySelector(".other-message")!;

    if (message.user.email === email) {
      messageContainer.className = "my-message";
      messageBlock.classList.add("sent-message");
      messageName.textContent = message.user.name || "";
      messageText.textContent = message.text;
    } else {
      messageContainer.className = "other-message";
      messageBlock.classList.add("received-message");
      messageName.textContent = message.user.name || "";
      messageText.textContent = message.text;
    }
  });

  return messageTemplate;
};

export const createMessage = (messages: Message[]): void => {
  messages.forEach((message) => {
    const messageTemplate = addMessageAndUserDataToTemplate([message]);
    CONTAINER_CHAT.append(messageTemplate);
  });
};

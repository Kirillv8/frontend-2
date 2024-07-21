import { Message } from "../interface/interface";
export const addArrayUserData = (
  arrayMessages: Message[],
  messageId: string,
  messageText: string,
  userName: string,
  userEmail: string,
  createdAt: string
): Message[] => {
 
  arrayMessages.push({
    _id: messageId,
    text: messageText,
    user: {
      name: userName,
      email: userEmail,
    },
    createdAt: createdAt,
  });
  return arrayMessages;
};

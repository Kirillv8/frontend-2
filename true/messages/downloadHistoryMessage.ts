import { Message } from "../interface/interface";
let result: Message;
export const downloadHistoryMessage = async (
  token?: string
): Promise<Message[] | null> => {
  try {
    const URL = "https://edu.strada.one/api/messages/";
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result.messages;
    }

    if (!response.ok) throw new Error("Ошибка HTTP статуса:");

    return null;
  } catch (error) {
    if (error === Error) {
      alert("Ошибка Запроса");
    }
    throw error;
  }
};

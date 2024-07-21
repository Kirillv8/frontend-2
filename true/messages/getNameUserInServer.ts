import { GetMyData } from "../interface/interface";
let result: GetMyData;
export const getNameUserInServer = async (
  token: string | undefined
): Promise<GetMyData> => {
  try {
    const URL = "https://edu.strada.one/api/user/me";
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Ошибка HTTP:" + response.status);
    }

    result = await response.json();
  } catch (error) {
    if (error === Error) {
      alert("Ошибка получения данных:" + error);
      alert("Ошибка HTTP запроса");
    } else {
      throw error;
    }
  }
  return result;
};

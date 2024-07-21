const URL = "https://edu.strada.one/api/user";
export const changeNameOnServer = async (
  token: string | undefined,
  userName: string
): Promise<number | void> => {
  try {
    const user = {
      name: "Kirillv8",
    };

    const response = fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Cache-Control": "no-cache",
        "User-Agent": "Your User Agent String",
      },
      body: JSON.stringify(user),
    });

    if ((await response).ok) {
      alert("Вы успешно произвели изменение имени пользователя!");
    } else {
      throw new Error("Ошибка изменения имени");
    }
  } catch (error) {
    if (error === Error) {
      alert(Error);
    }
    throw error;
  }
};

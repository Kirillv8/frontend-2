const URL: string = "https://edu.strada.one/api/user";

export const addUserEmailToServer = async (email: string): Promise<void> => {
  try {
    const user = {
      email: email,
    };
    const response = fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    if ((await response).ok) {
      const result = (await response).json();
      alert("Вы успешно зарегистрировались");
    } else {
      alert((await response).status);
      throw new Error("Ошибка регистрации укажите свою почту верно!");
    }
  } catch (error) {
    if (error === Error) {
      alert("Ошибка регистрации укажите свою почту верно!");
    }
    throw error;
  }
  return;
};

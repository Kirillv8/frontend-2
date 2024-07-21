import Cookies from "js-cookie";

export const addTokenInCookie = (tokenValue: string) => {
  Cookies.set("token", tokenValue, { expires: 2 });
  return tokenValue;
};

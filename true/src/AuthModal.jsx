import { useState } from "react";
import FormRegistration from "./FormRegistration";
import FormAuthorization from "./FormAuthorization";

const AuthModal = () => {
  const [isRegistrationVisible, showModalRegistration] = useState(false);
  const [isAuthorizationVisible, showModalAuthorization] = useState(false);

  const toggleRegistrationVisibility = () => {
    showModalRegistration(!isRegistrationVisible);
  };

  const toggleAuthorizationVisibility = () => {
    showModalAuthorization(!isAuthorizationVisible);
  };


  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setCredentials({
      ...credentials,
      email: e.target.value,
      password: e.target.value,
    });
    console.log(
      `Пользователь успешно зарегистрирован Логин: ${credentials.email}`
    );
  };

  const handlePasswordChange = (e) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
    console.log(
      `Пользователь успешно зарегистрирован Пароль: ${credentials.password}`
    );
  };

  return (
    <>
      {isRegistrationVisible && (
        <FormRegistration
          isRegistrationVisible={isRegistrationVisible}
          handleClickShowRegistration={toggleRegistrationVisibility}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
      )}
      {isAuthorizationVisible && (
        <FormAuthorization
          isAuthorizationVisible
          handleClickShowAuthorization={toggleAuthorizationVisibility}
        />
      )}
    </>
  );
};

export default AuthModal;

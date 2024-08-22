import React from "react";
import "./index.css";

const FormRegistration = ({
  isRegistrationVisible,
  handleClickShowRegistration,
  handleEmailChange,
  handlePasswordChange,
}) => {
  const handleForSubmit = (e) => {
    e.preventDefault();
    handleClickShowRegistration();
  };

  return (
    isRegistrationVisible && (
      <div className="container">
        <div className="block">
          {" "}
          <div className="form-container">
            <form className="form" onSubmit={handleForSubmit}>
              <label>Login Form</label>
              <br></br>
              <input
                type="email"
                placeholder="Useremail"
                onChange={handleEmailChange}
              />
              <br></br>
              <input type="text" placeholder="User-login" />
              <br></br>
              <input
                type="password"
                placeholder="Userpass"
                onChange={handlePasswordChange}
              />
              <br></br>
              <button>Registration</button>
            </form>
          </div>
        </div>
        ;
      </div>
    )
  );
};

export default FormRegistration;

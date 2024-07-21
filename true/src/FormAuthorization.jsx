import React from "react";
import "./index.css";
const FormAuthorization = ({
  isAuthorizationVisible,
  handleClickShowAuthorization,
}) => {
  const handleForSubmit = (e) => {
    e.preventDefault();
    handleClickShowAuthorization();
  };
  return (
    isAuthorizationVisible && (
      <div className="container">
        <div className="block">
          {" "}
          <div className="form-container">
            <form className="form">
              <label>Login Form</label>
              <br></br>
              <input type="text" placeholder="User login" />
              <br />
              <input type="email" placeholder="Useremail" />
              <br></br>
              <input type="pssword" placeholder="Userpassword" />
              <br></br>
              <button>Authorization</button>
            </form>
          </div>
        </div>
        ;
      </div>
    )
  );
};

export default FormAuthorization;

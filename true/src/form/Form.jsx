import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Bt from "./Bt";

const Form = () => {
  const [input, setInput] = useState("");
  const [gender, setGender] = useState("Loading...");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  
  const serverUrl = "https://api.genderize.io";
  const url = `${serverUrl}?name=${input}`;

  useEffect(() => {
    if (input && input !== "") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setGender(data.gender || "Unknown gender");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setGender("Failed to load gender information.");
        });
    }
    console.log(input);
  }, [input]);

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ color: "white", fontSize: "20px" }}>
        Please enter your name<br></br>
        <Input onChange={handleInputChange} value={input} />
      </label>
      <br></br>
      <Bt type="submit">Submit</Bt>
      <p>Your name is {input}</p>
      <p>Gender: {gender}</p>
    </form>
  );
};

export default Form;

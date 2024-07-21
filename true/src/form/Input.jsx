import "./input.css";
const Input = ({ onChange, value }) => {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      className="input-under-button"
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;

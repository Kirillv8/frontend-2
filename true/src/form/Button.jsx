import "./button.css";
const Button = () => {
  const animatedButton = "animated-button";
  return (
    <button type="submit" className={animatedButton}>
      Send
    </button>
  );
};

export default Button;
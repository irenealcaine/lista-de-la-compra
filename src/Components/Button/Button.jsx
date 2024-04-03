import "./Button.scss";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const Button = ({ value, onClick, className, color, disabled }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={onClick}
      className={`button ${!disabled ? color : "disabled"} ${className} ${
        darkMode ? "dark" : ""
      }`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;

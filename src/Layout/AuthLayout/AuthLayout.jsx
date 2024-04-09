import { useContext } from "react";
import "./AuthLayout.scss";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useOutlet } from 'react-router-dom';

const AuthLayout = () => {
  const { darkMode } = useContext(DarkModeContext);
  const outlet = useOutlet();


  return (
    <div className={`auth ${darkMode ? "dark" : ""}`}>
      <div className="content">{outlet}</div>
    </div>
  );
};

export default AuthLayout;

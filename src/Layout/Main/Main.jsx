import { useContext } from "react";
import Header from "../../Components/Header/Header";
import "./Main.scss";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useOutlet } from 'react-router-dom';

const Main = () => {
  const { darkMode } = useContext(DarkModeContext);
  const outlet = useOutlet();


  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      <Header />
      <div className="content">{outlet}</div>
    </div>
  );
};

export default Main;

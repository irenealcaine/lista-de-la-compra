import { useContext } from "react";
import Header from "../../Components/Header/Header";
import "./Main.scss";
import { DarkModeContext } from "../../Context/darkModeContext";

const Main = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Main;

import { useContext } from "react";
import "./Header.scss";
import logo from "../../Assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { navbarItems } from "../../Utils/Constants";
import { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { DarkModeContext } from "../../Context/darkModeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  const location = useLocation();
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const menuActiveClass = isMenuClosed ? "closed" : "";
  const { darkMode, dispatch } = useContext(DarkModeContext);

  const toggleMenu = () => {
    setIsMenuClosed(!isMenuClosed);
  };

  return (
    <header className={`${darkMode ? "dark" : ""} ${menuActiveClass}`}>
      <nav>
        <Link
          to={"/"}
          onClick={() => setIsMenuClosed(true)}
          className="logo-link"
        >
          <img
            src={logo}
            alt={"Logo"}
            className={`logo ${darkMode ? "dark" : ""}`}
          />
        </Link>

        <div
          className={`menu-toggle ${menuActiveClass} ${darkMode ? "dark" : ""}`}
          onClick={toggleMenu}
        >
          <BiSolidRightArrow />
        </div>

        <ul
          className={`navigation ${menuActiveClass} ${darkMode ? "dark" : ""}`}
        >
          {navbarItems.map((navbarItem) => (
            <li key={navbarItem.slug} onClick={() => setIsMenuClosed(true)}>
              <Link
                to={`/${navbarItem.slug}`}
                className={`navigation-item  ${darkMode ? "dark" : ""} ${location.pathname === `/${navbarItem.slug}` && "active"
                  }`}
              >
                <span className={`navigation-item-name ${menuActiveClass}`}>
                  {navbarItem.name}
                </span>
                <span className={`navigation-item-icon`}>
                  {navbarItem.icon}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`color-options ${menuActiveClass}`}>
        {/* <div
          className="color-option"
          onClick={() => dispatch({ type: "LIGHT" })}
        >
          ⚪
        </div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "DARK" })}
        >
          ⚫
        </div> */}
        <div
          className="color-option"
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          {darkMode ? <MdOutlineWbSunny /> : <FiMoon />}
        </div>
      </div>
    </header>
  );
};

export default Header;

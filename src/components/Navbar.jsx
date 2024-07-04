import React, { useContext } from "react";
import logo from "../assets/Adon-venture-white.jpg";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({
  showAlert,
  alertMessage,
  alertStyle,
  onCloseAlert,
  onToggleSidebar,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 h-[80px] md:h-[100px] w-full flex items-center shadow-md fixed top-0 left-0 px-4 md:px-8">
      <button
        className="text-gray-700 dark:text-gray-300 md:hidden p-2 rounded-full ring-2 ring-lime-600 focus:outline-none"
        onClick={onToggleSidebar}
      >
        &#9776;
      </button>
      <div className="flex items-center ml-4">
        <img
          src={logo}
          alt="OCSEO Logo"
          className="h-16 md:h-20 w-auto rounded-full "
        />
      </div>
      <div className="flex-grow"></div>

      {showAlert && (
        <div
          className={`px-2 py-1 md:px-4 md:py-2 rounded-lg flex items-center ${alertStyle}`}
        >
          <div className="flex flex-col text-center">
            <span className="font-bold text-blue-600 dark:text-blue-300 text-sm md:text-base">
              {alertMessage.title}
            </span>
            <span className="text-pink-500 dark:text-pink-300 text-xs md:text-sm">
              {alertMessage.message}
            </span>
          </div>
          <button
            className="ml-2 md:ml-4 text-pink-600 dark:text-pink-400"
            onClick={onCloseAlert}
          >
            ✖
          </button>
        </div>
      )}

      <button
        onClick={toggleTheme}
        className="text-gray-700 dark:text-gray-300 p-2  ring-2 ring-lime-600 focus:outline-none ml-2"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;

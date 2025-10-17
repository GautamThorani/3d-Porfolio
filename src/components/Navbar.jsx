import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        isDarkMode 
          ? "bg-primary"  // Keep original dark background
          : "bg-white shadow-md"  // White background for light mode
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className={`${
            isDarkMode ? "text-white" : "text-gray-900"  // White in dark, dark gray in light
          } text-[18px] font-bold cursor-pointer flex transition-colors duration-300`}>
            Gautam &nbsp;
            <span className='sm:block hidden'> Thorani</span>
          </p>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-6">
          {/* Theme Toggle Button - Desktop */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? "bg-gray-800 hover:bg-gray-700" 
                : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              // Sun icon for light mode
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title 
                    ? (isDarkMode ? "text-white" : "text-gray-900")  // White in dark, dark gray in light
                    : (isDarkMode ? "text-secondary" : "text-gray-600")  // Secondary in dark, medium gray in light
                } hover:${
                  isDarkMode ? "text-white" : "text-gray-900"  // White in dark, dark gray in light
                } text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation - Hidden on desktop */}
        <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
          {/* Theme Toggle Button - Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? "bg-gray-800" 
                : "bg-gray-100 border border-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className={`w-[28px] h-[28px] object-contain ${
              isDarkMode ? '' : 'invert'  // Invert in light mode for better visibility
            }`}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 ${
              isDarkMode 
                ? "black-gradient"  // Keep original dark gradient
                : "bg-white shadow-xl"  // White background for light mode
            } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title 
                      ? (isDarkMode ? "text-white" : "text-gray-900")  // White in dark, dark gray in light
                      : (isDarkMode ? "text-secondary" : "text-gray-600")  // Secondary in dark, medium gray in light
                  } transition-colors duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
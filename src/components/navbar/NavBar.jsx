import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import "./navbar.scss";

const navItems = [
  {
    id: 0,
    name: "Products",
  },
  {
    id: 1,
    name: "Pricing",
  },
  {
    id: 2,
    name: "FAQ",
  },
  {
    id: 3,
    name: "Blog",
  },
];

const logItems = [
  {
    id: 0,
    name: "Log in",
  },
  {
    id: 1,
    name: "Log out",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = name => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  // Перший ефект для встановлення scrollPosition
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Другий ефект для встановлення isOpen для мобільної версії
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // for mobile view, start with a closed menu
    }
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-[#172755]   shadow-md` : "bg-[#172755]"
      } `}>
      <nav className=" container m-auto flex items-center justify-between">
        <div className="flex">
          {/*ліва частина навбару */}
          <div data-aos="fade-down" className="logo">
            <Link onClick={() => window.scrollTo(0, 0)} to="/" className="">
              <img src="/assets/logo.svg" alt="" />
            </Link>
          </div>
          <div className="nav-items flex items-center ">
            {/* hamburger */}
            <ul
              className={`flex items-center ml-[25px] gap-[15px] ${
                !isOpen ? "md:flex" : "md:right-[0%]"
              } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-[#172755] `}>
              {/* Use a button tag for better accessibility */}
              <button
                onClick={toggleNav}
                className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}>
                <RxCross2 size={25} color="white" />
              </button>
              {navItems.map(item => (
                <li
                  key={item.id}
                  className="navbar-link md:m-6 md:flex md:gap-6 md:items-center md:justify-center">
                  <a
                    onClick={() => item.name}
                    href={`#${item.name}`}
                    className={`navbar-link uppercase cursor-pointer  ${
                      item.name === activeIndex ? "text-yellow-600" : ""
                    }`}>
                    {item.name}
                  </a>
                </li>
              ))}
              {/* Включте "Sign In" і "Sign Up" в меню бургера на мобільних пристроях */}
              {isOpen && (
                <li className="navbar-link md:m-6 md:flex md:gap-6 md:items-center md:justify-center">
                  <a
                    href="/signin"
                    className="navbar-link hover:underline text-[14px] lg:text-[12px]">
                    Sign In
                  </a>
                </li>
              )}
              {isOpen && (
                <li className="navbar-link md:m-6 md:flex md:gap-6 md:items-center md:justify-center">
                  <a
                    href="/signup"
                    className="navbar-link hover:underline text-[14px] lg:text-[12px]">
                    Sign Up
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div
          className={`login flex items-center ${
            window.innerWidth < 768 ? "hidden" : ""
          }`}>
          {/*права частина навбару на великих екранах */}
          <a href="/signin" className="navbar-link mr-5 text-[14px]">
            Sign In
          </a>
          <a
            href="/signup"
            className="navbar-link text-[14px] border rounded-full px-[13px] lg:px-[25px] py-[8px] ">
            Sign Up
          </a>
        </div>

        <button
          onClick={toggleNav}
          className="cursor-pointer text-2xl hidden md:block">
          <HiMenu size={25} color="white" />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;

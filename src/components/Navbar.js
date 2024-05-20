import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";
import backGroundImage from "../images/background.jpg";
import { CaretDown, CaretUp, CloseBtn, Hamburger } from "../icons/icons";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [showdrop, setShowdrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (path) => {
    navigate(path);
    setIsHidden(true);
    setShowdrop(false);
  };

  return (
    <div className="footer-box fixed z-50 w-full">
      <nav
        className={`${
          scrollY > 0
            ? "bg-white text-black shadow-2xl"
            : "bg-transparent text-white"
        } fixed z-50 w-full hidden md:block`}
      >
        <div
          className="flex items-center justify-between bg-no-repeat bg-cover rounded-full"
          style={{
            background: `url(${backGroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/30aef6_b482c098bfa543898242124184eea151%7Emv2.png/v1/fit/w_2500,h_1330,al_c/30aef6_b482c098bfa543898242124184eea151%7Emv2.png"
              alt="Logo"
              className="h-20 w-20 mr-2"
              crossOrigin="anonymous"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4 pr-10">
            <NavLink
              to="/"
              className={`p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg ${
                location.pathname === "/" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={`p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg ${
                location.pathname === "/aboutUs" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => handleLinkClick("/aboutUs")}
            >
              About Us
            </NavLink>
            <div className="relative">
              <button
                className="flex items-center p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg"
                onClick={() => setShowdrop(!showdrop)}
              >
                Products {showdrop ? <CaretUp /> : <CaretDown />}
              </button>
              {showdrop && (
                <div className="absolute bg-white shadow-2xl rounded-md mt-2 py-2 w-40">
                  <NavLink
                    to="/Products/AIVoice"
                    className={`block px-4 py-2 ${
                      location.pathname === "/Products/AIVoice" ? "text-blue-500 font-bold" : ""
                    }`}
                    onClick={() => handleLinkClick("/Products/AIVoice")}
                  >
                    AI Voice
                  </NavLink>
                  <NavLink
                    to="/Products/AIChat"
                    className={`block px-4 py-2 ${
                      location.pathname === "/Products/AIChat" ? "text-blue-500 font-bold" : ""
                    }`}
                    onClick={() => handleLinkClick("/Products/AIChat")}
                  >
                    AI Chat
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/industry"
              className={`p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg ${
                location.pathname === "/industry" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => handleLinkClick("/industry")}
            >
              Industry
            </NavLink>
            <NavLink
              to="/contactus"
              className={`p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg ${
                location.pathname === "/contactus" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => handleLinkClick("/contactus")}
            >
              Contact Us
            </NavLink>
            <button
              className="bg-green-500 px-3 xl:px-5 py-1 xl:py-1 rounded-md text-white hidden lg:block hover:bg-green-600 xl:text-base"
              onClick={() => handleLinkClick("/getStarted")}
            >
              Login
            </button>
            <button
              className="bg-blue-500 px-3 py-1 xl:px-5 xl:py-1 rounded-md text-white hidden lg:block hover:bg-blue-600 xl:text-base"
              onClick={() => handleLinkClick("/freetrial")}
            >
              Start for free
            </button>
            <button
              className="bg-blue-500 px-3 py-2 xl:px-5 xl:py-1 rounded-md text-white hidden lg:block hover:bg-blue-600 xl:text-base"
              onClick={() => handleLinkClick("/scheduleDemo")}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </nav>
      <div
        className="fixed px-3 z-50 md:hidden flex justify-between w-full items-center"
        style={{
          background: `url(${backGroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src="https://static.wixstatic.com/media/30aef6_b482c098bfa543898242124184eea151%7Emv2.png/v1/fit/w_2500,h_1330,al_c/30aef6_b482c098bfa543898242124184eea151%7Emv2.png"
          alt="Logo"
          className="h-20 w-20 mr-2"
          crossOrigin="anonymous"
        />

        {isHidden ? (
          <div onClick={() => setIsHidden(!isHidden)}>
            <Hamburger />
          </div>
        ) : (
          <div onClick={() => setIsHidden(!isHidden)}>
            <CloseBtn />
          </div>
        )}
      </div>
      <div
        id="hiddenLinks"
        className={`md:hidden bg-white fixed w-full h-fit pb-1 text-black rounded-md top-16 flex flex-col right-0 gap-3 pt-6 custom-transition ${
          isHidden ? "hidden" : "block"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => handleLinkClick("/")}
          className={`hover:text-blue-500 font-sans text-xl px-8 py-1 text-start border-b-2 ${
            location.pathname === "/" ? "text-blue-900" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          onClick={() => handleLinkClick("/aboutUs")}
          className={`hover:text-blue-500 font-sans text-xl px-8 py-1 text-start border-b-2 ${
            location.pathname === "/aboutUs" ? "text-blue-900" : ""
          }`}
        >
          About Us
        </NavLink>

        <div
          className={`flex gap-1 justify-between text-xl text-start px-8 py-1 border-b-2 hover:text-blue-500 cursor-pointer items-center transition-all`}
          onClick={() => setShowdrop(!showdrop)}
        >
          Products {showdrop ? <CaretUp /> : <CaretDown />}
        </div>
        {showdrop && (
          <div className="flex flex-col gap-3 px-8">
            <NavLink
              to="/Products/AIVoice"
              onClick={() => handleLinkClick("/Products/AIVoice")}
              className={`text-xl py-1 ${
                location.pathname === "/Products/AIVoice" ? "text-blue-900" : ""
              }`}
            >
              AI Voice
            </NavLink>
            <NavLink
              to="/Products/AIChat"
              onClick={() => handleLinkClick("/Products/AIChat")}
              className={`text-xl py-1 ${
                location.pathname === "/Products/AIChat" ? "text-blue-900" : ""
              }`}
            >
              AI Chat
            </NavLink>
          </div>
        )}
        <NavLink
          to="/industry"
          onClick={() => handleLinkClick("/industry")}
          className={`hover:text-blue-500 px-8 py-1 text-start border-b-2 font-sans text-xl ${
            location.pathname === "/industry" ? "text-blue-900" : ""
          }`}
        >
          Industry
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={() => handleLinkClick("/contactus")}
          className={`hover:text-blue-500 px-8 py-1 text-start border-b-2 font-sans text-xl ${
            location.pathname === "/contactus" ? "text-blue-900" : ""
          }`}
        >
          Contact Us
        </NavLink>
        <button
          className="bg-green-500 text-white px-8 py-2 mt-2 rounded-md"
          onClick={() => handleLinkClick("/getStarted")}
        >
          Login
        </button>
        <button
          className="bg-blue-500 text-white px-8 py-2 mt-2 rounded-md"
          onClick={() => handleLinkClick("/freetrial")}
        >
          Start for free
        </button>
        <button
          className="bg-blue-500 text-white px-8 py-2 mt-2 rounded-md"
          onClick={() => handleLinkClick("/scheduleDemo")}
        >
          Schedule a Demo
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

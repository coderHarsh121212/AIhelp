import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={`w-full footer-box fixed z-50 ${
        scrollY > 0 ? "bg-black" : ""
      }`}
    >
      <nav
        className={`p-4 shadow-2xl fixed z-50 w-full ${
          scrollY > 0 ? "bg-black" : "bg-white md:bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/30aef6_b482c098bfa543898242124184eea151%7Emv2.png/v1/fit/w_2500,h_1330,al_c/30aef6_b482c098bfa543898242124184eea151%7Emv2.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
              crossOrigin="anonymous"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/")}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/aboutUs")}
            >
              About US
            </a>
            <a
              href="#"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/Products")}
            >
              Products
            </a>
            <a
              href="#"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/industry")}
            >
              Industry
            </a>
            <a
              href="#"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/contactus")}
            >
              Contact Us
            </a>
            {/* Add similar classes to other links */}
          </div>
          <div className="md:hidden">
            <button id="menuBtn" onClick={toggleHidden}>
              {!isHidden ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${scrollY > 0 ? "white" : "black"}`}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${scrollY > 0 ? "white" : "black"}`}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        id="hiddenLinks"
        className={`md:hidden ${
          isHidden ? "hidden" : ""
        } fixed top-[4rem] right-0 ${
          !scrollY > 0 ? "bg-white text-black" : "bg-black text-white"
        } p-4 w-64 flex flex-col transition-transform duration-300 ease-in-out transform h-screen gap-12 ${
          isHidden ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <a href="#" onClick={() => navigate("/")}>
          Home
        </a>
        <a href="#" onClick={() => navigate("/aboutUs")}>
          About US
        </a>
        <a href="#" onClick={() => navigate("/Products")}>
          Products
        </a>
        <a href="#" onClick={() => navigate("/industry")}>
          Industry
        </a>
        <a href="#" onClick={() => navigate("/contactus")}>
          Contact Us
        </a>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

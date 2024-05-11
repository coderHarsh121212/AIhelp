import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";
import homeImage from "../images/image.png";
import AboutImage from "../images/bg1.png";
import ProductImage from "../images/bg3.png";
import IndustryImage from "../images/bg2.png";
import { CloseBtn, Hamburger } from "../icons/icons";
const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={`w-full footer-box fixed z-50 bg-transparent`}>
      <nav className={`  fixed z-50 w-full `}>
        <div
          className="flex items-center justify-between text-white"
          style={{
            background:
              location.pathname === "/" || location.pathname === "/home"
                ? ` url(${homeImage})`
                : location.pathname === "/aboutUs"
                ? `url(${AboutImage})`
                : location.pathname === "/Products"
                ? `url(${ProductImage})`
                : location.pathname === "/industry"
                ? `url(${IndustryImage})`
                : location.pathname === "/contactus"
                ? `url(${AboutImage})`
                : ""
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
          <div className="hidden md:flex items-center space-x-8 pr-10">
            <NavLink
              to="/"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/")}
              isactive={() =>
                location.pathname === "/" || location.pathname === "/home"
              }
              style={{
                color:
                  location.pathname === "/" || location.pathname === "/home"
                    ? "#240ada "
                    : "inherit"
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/aboutUs")}
              isactive={() => location.pathname === "/aboutUs"}
              style={{
                color: location.pathname === "/aboutUs" ? "#240ada" : "inherit"
              }}
            >
              About US
            </NavLink>
            <NavLink
              to="/Products"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/Products")}
              isactive={() => location.pathname === "/Products"}
              style={{
                color: location.pathname === "/Products" ? "#240ada" : "inherit"
              }}
            >
              Products
            </NavLink>
            <NavLink
              to="/industry"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/industry")}
              isactive={() => location.pathname === "/industry"}
              style={{
                color: location.pathname === "/industry" ? "#240ada" : "inherit"
              }}
            >
              Industry
            </NavLink>
            <NavLink
              to="/contactus"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/contactus")}
              isactive={() => location.pathname === "/contactus"}
              style={{
                color:
                  location.pathname === "/contactus" ? "#240ada" : "inherit"
              }}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="fixed top-7 right-3 z-50 md:hidden">
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
        style={{
          background:
            location.pathname === "/" || location.pathname === "/home"
              ? ` url(${homeImage})`
              : location.pathname === "/aboutUs"
              ? `url(${AboutImage})`
              : location.pathname === "/Products"
              ? `url(${ProductImage})`
              : location.pathname === "/industry"
              ? `url(${IndustryImage})`
              : location.pathname === "/contactus"
              ? `url(${AboutImage})`
              : ""
        }}
        className={`md:hidden fixed w-1/2 h-screen bg-cover bg-center text-white top-20 flex flex-col right-0 gap-8 py-9 custom-transition ${
          isHidden ? "hidden" : "block"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => navigate("/")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/" ? "text-blue-900" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          onClick={() => navigate("/aboutUs")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/aboutUs" ? "text-blue-900" : ""
          }`}
        >
          About US
        </NavLink>
        <NavLink
          to="/Products"
          onClick={() => navigate("/Products")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/Products" ? "text-blue-900" : ""
          }`}
        >
          Products
        </NavLink>
        <NavLink
          to="/industry"
          onClick={() => navigate("/industry")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/industry" ? "text-blue-900" : ""
          }`}
        >
          Industry
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={() => navigate("/contactus")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/contactus" ? "text-blue-900" : ""
          }`}
        >
          Contact Us
        </NavLink>

        {/* Add Log in button or any other links */}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

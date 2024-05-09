import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";

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

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={`w-full footer-box fixed z-50 ${
        scrollY > 0 ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <nav
        className={` shadow-2xl fixed z-50 w-full ${
          scrollY > 0 ? "bg-black" : "bg-white md:bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/30aef6_b482c098bfa543898242124184eea151%7Emv2.png/v1/fit/w_2500,h_1330,al_c/30aef6_b482c098bfa543898242124184eea151%7Emv2.png"
              alt="Logo"
              className="h-20 w-20 mr-2"
              crossOrigin="anonymous"
            />
          </div>
          <div
            className="hidden md:flex items-center space-x-8 pr-10"
            style={{
              color: location.pathname === "/contactus" ? "#240ada" : "inherit"
            }}
          >
            <NavLink
              to="/"
              className={`text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => navigate("/")}
              isActive={() =>
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
              isActive={() => location.pathname === "/aboutUs"}
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
              isActive={() => location.pathname === "/Products"}
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
              isActive={() => location.pathname === "/industry"}
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
              isActive={() => location.pathname === "/contactus"}
              style={{
                color:
                  location.pathname === "/contactus" ? "#240ada" : "inherit"
              }}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile menu button */}
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
        <NavLink
          to="/"
          onClick={() => navigate("/")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/" ? "text-blue-500" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          onClick={() => navigate("/aboutUs")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/aboutUs" ? "text-blue-500" : ""
          }`}
        >
          About US
        </NavLink>
        <NavLink
          to="/Products"
          onClick={() => navigate("/Products")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/Products" ? "text-blue-500" : ""
          }`}
        >
          Products
        </NavLink>
        <NavLink
          to="/industry"
          onClick={() => navigate("/industry")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/industry" ? "text-blue-500" : ""
          }`}
        >
          Industry
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={() => navigate("/contactus")}
          className={`hover:text-blue-500 font-sans text-xl ${
            location.pathname === "/contactus" ? "text-blue-500" : ""
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

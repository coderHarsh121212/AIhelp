import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";
import backGroundImage from '../images/background.jpg'
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

  return (
    <div
      className={` footer-box fixed z-50 bg-transparent w-[100%] rounded-full  mx-auto`}
    >
      <nav
        className={`${
          scrollY > 0
            ? "white hover:text-blue-500 w-[83%]  text-xs rounded-full  left-24 lg:left-32  mt-6 shadow-2xl"
            : "black"
        }  fixed z-50 w-[100%]  hidden md:block`}
      >
        <div
          className="flex items-center justify-between text-black bg-no-repeat bg-cover rounded-full"
          style={{
            background:
              `url(${backGroundImage})`,
            backgroundSize: "cover"
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
          <div
            className={`hidden md:flex items-center space-x-4 pr-10 xl:space-x-8 justify-center${
              scrollY > 0 ? "space-x-3" : "space-x-5"
            }`}
          >
            <NavLink
              to="/"
              className={`p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg border-b-2 text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => {
                navigate("/");
                setShowdrop(false);
              }}
              isactive={() =>
                location.pathname === "/" || location.pathname === "/home"
              }
              style={{
                color: location.pathname === "/" ? "#240ada" : "inherit",
                background: location.pathname === "/" ? "#ffff" : "inherit",
                fontWeight: location.pathname === "/" ? "700" : "inherit"
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={` p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => {
                navigate("/aboutUs");
                setShowdrop(false);
              }}
              isactive={() => location.pathname === "/aboutUs"}
              style={{
                color: location.pathname === "/aboutUs" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/aboutUs" ? "#ffff" : "inherit",
                fontWeight: location.pathname === "/aboutUs" ? "700" : "inherit"
              }}
            >
              About Us
            </NavLink>
            <a
              className={`flex gap-1 relative text-xs md:text-base lg:text-sm xl:text-lg hover:hover-nav cursor-pointer transition-all`}
              style={{
                color:
                  location.pathname === "/Products" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/Products" ? "#ffff" : "inherit",
                fontWeight:
                  location.pathname === "/Products" ? "700" : "inherit"
              }}
              onClick={() => setShowdrop(!showdrop)}
            >
              Products{showdrop ? <CaretUp /> : <CaretDown />}
              {showdrop && (
                <div className="bg-white absolute top-8  px-5  flex flex-col gap-5 py-3 rounded transition-all shadow-2xl">
                  <div className="bg-transparent text-black  flex flex-col gap-2 w-52 text-lg">
                    <NavLink
                      to="/Products/AIVoice"
                      className={` relative text-${
                        scrollY > 0 ? "white hover:text-blue-500" : "black"
                      } hover:hover-nav`}
                      isactive={() => location.pathname === "/Products/AIVoice"}
                      style={{
                        color:
                          location.pathname === "/Products/AIVoice"
                            ? "#240ada"
                            : "inherit"
                      }}
                    >
                      AI Voice
                    </NavLink>
                    <NavLink
                      to="/Products/AIChat"
                      className={` relative text-xs md:text-base lg:text-sm xl:text-lg text-${
                        scrollY > 0 ? "white hover:text-blue-500" : "black"
                      } hover:hover-nav`}
                      isactive={() => location.pathname === "/Products/AIChat"}
                      style={{
                        color:
                          location.pathname === "/Products/AIChat"
                            ? "#240ada"
                            : "inherit"
                      }}
                    >
                      AI Chat
                    </NavLink>
                  </div>
                </div>
              )}
            </a>
            <NavLink
              to="/industry"
              className={`p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => {
                navigate("/industry");
                setShowdrop(false);
              }}
              isactive={() => location.pathname === "/industry"}
              style={{
                color:
                  location.pathname === "/industry" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/industry" ? "#ffff" : "inherit",
                fontWeight:
                  location.pathname === "/industry" ? "700" : "inherit"
              }}
            >
              Industry
            </NavLink>
            <NavLink
              to="/contactus"
              className={`p-2 rounded-md text-xs md:text-base lg:text-sm xl:text-lg text-${
                scrollY > 0 ? "white hover:text-blue-500" : "black"
              } hover:hover-nav`}
              onClick={() => {
                navigate("/industry");
                setShowdrop(false);
              }}
              isactive={() => location.pathname === "/contactus"}
              style={{
                color:
                  location.pathname === "/contactus" ? "#240ada" : "inherit",
                background:
                  location.pathname === "/contactus" ? "#ffff" : "inherit",
                fontWeight:
                  location.pathname === "/contactus" ? "700" : "inherit"
              }}
            >
              Contact Us
            </NavLink>

            <button
              className="bg-green-500 px-3 xl:px-5 py-1 xl:py-1 rounded-md text-white hidden lg:block hover:bg-green-600 xl:text-base"
              onClick={() => navigate("/getStarted")}
            >
              Login
            </button>
            <button
              className="bg-blue-500 px-3 py-1 xl:px-5 xl:py-1 rounded-md text-white hidden lg:block hover:bg-blue-600 xl:text-base"
              onClick={() => navigate("/freetrial")}
            >
              Start for free
            </button>
            <button
              className="bg-blue-500 px-3 py-2 xl:px-5 xl:py-1 rounded-md text-white hidden lg:block hover:bg-blue-600 xl:text-base"
              onClick={() => navigate("/scheduleDemo")}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </nav>
      <div
        className="fixed  px-3 z-50 md:hidden flex justify-between w-full items-center"
        style={{
          background: `url(${backGroundImage})`, backgroundSize: "cover"
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
        className={`md:hidden  bg-white fixed w-full  h-fit bg-cover bg-center pb-1 text-black rounded-md top-16 flex flex-col right-0 gap-3 pt-6  custom-transition ${
          isHidden ? "hidden" : "block"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => navigate("/")}
          className={`hover:text-blue-500 font-sans text-xl px-8 py-1 text-start border-b-2${
            location.pathname === "/" ? "text-blue-900" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          onClick={() => navigate("/aboutUs")}
          className={`hover:text-blue-500 font-sans text-xl px-8 py-1 text-start border-b-2${
            location.pathname === "/aboutUs" ? "text-blue-900" : ""
          }`}
        >
          About US
        </NavLink>

        <a
          className={`flex gap-1 justify-between  text-xl text-start px-8 py-1 border-b-2 hover:hover-nav cursor-pointer items-center transition-all`}
          style={{
            color: location.pathname === "/Products" ? "#240ada" : "inherit"
          }}
          onClick={() => setShowdrop(!showdrop)}
        >
          Products{showdrop ? <CaretUp /> : <CaretDown />}
        </a>
        {showdrop && (
          <div className=" flex flex-col gap-5 py-1 rounded transition-all">
            <div className=" text-black  flex flex-col gap-3  text-lg ">
              <NavLink
                to="/Products/AIVoice"
                className={`text-xl  relative px-8  text-start  text-${
                  scrollY > 0 ? "white hover:text-blue-500" : "black"
                } hover:hover-nav`}
                isactive={() => location.pathname === "/Products/AIVoice"}
                style={{
                  color:
                    location.pathname === "/Products/AIVoice"
                      ? "#240ada"
                      : "inherit"
                }}
              >
                AI Voice
              </NavLink>
              <NavLink
                to="/Products/AIChat"
                className={`text-xl  relative px-8  text-start  text-${
                  scrollY > 0 ? "white hover:text-blue-500" : "black"
                } hover:hover-nav`}
                isactive={() => location.pathname === "/Products/AIChat"}
                style={{
                  color:
                    location.pathname === "/Products/AIChat"
                      ? "#240ada"
                      : "inherit"
                }}
              >
                AI Chat
              </NavLink>
            </div>
          </div>
        )}
        <NavLink
          to="/industry"
          onClick={() => navigate("/industry")}
          className={`hover:text-blue-500 px-8 py-1 text-start border-b-2 font-sans text-xl ${
            location.pathname === "/contactus" ? "text-blue-900" : ""
          }`}
        >
          Industry
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={() => navigate("/contactus")}
          className={`hover:text-blue-500 px-8 py-1 text-start border-b-2 font-sans text-xl ${
            location.pathname === "/contactus" ? "text-blue-900" : ""
          }`}
        >
          Contact Us
        </NavLink>
      
        <button
              className="bg-green-500 px-3 xl:px-5 py-2 xl:py-1  text-white   hover:bg-green-600"
              onClick={() => navigate("/getStarted")}
            >
              Login
            </button>
            <button
              className="bg-blue-500 px-3 py-2 xl:px-5  xl:py-1  text-white   hover:bg-blue-600"
              onClick={() => navigate("/freetrial")}
            >
              Start for free
            </button>
            <button
              className="bg-blue-500 px-3 py-2 xl:px-5 xl:py-1  text-white   hover:bg-blue-600"
              onClick={() => navigate("/scheduleDemo")}
            >
              Schedule a Demo
            </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

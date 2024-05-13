import React from "react";
import {
  FacebookIcon,
  InstagramLogo,
  LinkedInLogo,
  YoutubeLogo
} from "../icons/icons";
import homeImage from "../images/image.png";
import AboutImage from "../images/bg1.png";
import ProductImage from "../images/bg3.png";
import IndustryImage from "../images/bg2.png";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className=" text-white py-8 "
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
            : "black"
      }}
    >
      <div className="w-full  lg:px-32 flex  flex-wrap items-center justify-center lg:justify-between">
        <div className="flex flex-col gap-1 ">
          <div className="flex gap- items-center justify-center">
            <img src="https://static.wixstatic.com/media/30aef6_b482c098bfa543898242124184eea151%7Emv2.png/v1/fit/w_2500,h_1330,al_c/30aef6_b482c098bfa543898242124184eea151%7Emv2.png" alt="logo" className="w-14 h-14"></img>
            <p>Comapny Name</p>
          </div>
          <p>Radical Aftermarket Services Pvt. Ltd</p>

          <div className="flex flex-col gap-1">
            <p>Adresss</p>
            <p>Phone</p>
            <p>email</p>
          </div>
        </div>
<div className="flex justify-between lg:w-[60%] w-full mx-5 flex-wrap">
        <div className="flex flex-col gap-1">
          <h1>Quick Links</h1>
          <a>Home</a>
          <a>About Us</a>
          <a>Products</a>
          <a>Blogs</a>
          <a>Industries</a>
          <a>Contact</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1>Quick Links</h1>
          <a>Home</a>
          <a>About Us</a>
          <a>Products</a>
          <a>Blogs</a>
          <a>Industries</a>
          <a>Contact</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1>Quick Links</h1>
          <a>Home</a>
          <a>About Us</a>
          <a>Products</a>
          <a>Blogs</a>
          <a>Industries</a>
          <a>Contact</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1>Social Links</h1>
          <div className="flex justify-between">
         <LinkedInLogo/>
         <YoutubeLogo/>
         </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

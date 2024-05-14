import React from "react";
import { LinkedInLogo, YoutubeLogo } from "../icons/icons";
import homeImage from "../images/image.png";
import AboutImage from "../images/bg1.png";
import ProductImage from "../images/bg3.png";
import IndustryImage from "../images/bg2.png";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer
      className=" text-black py-8 bg-no-repeat bg-contain"
      style={{
        background: 'url("https://cdn.prod.website-files.com/624b06e1de671ba9e564fc19/658333067f03be832b45cb09_epcKmzT7raQUR63mScyvqkkdVyiIMinl1CJmwKQ76f0zTOESA-out-0.png")'
      }}
    >
      <div className="w-full  px-5 flex  flex-wrap items-center justify-center lg:justify-between flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-1 ">
          <div className="flex  items-center justify-center">
            <img
              src="https://static.wixstatic.com/media/30aef6_b482c098bfa543898242124184eea151%7Emv2.png/v1/fit/w_2500,h_1330,al_c/30aef6_b482c098bfa543898242124184eea151%7Emv2.png"
              alt="logo"
              className="w-20 h-20"
            ></img>
            <p className="text-3xl font-bold">Spark Wave</p>
          </div>

          <div className="flex flex-col gap-1">
            <p>Adresss</p>
            <p>Phone</p>
            <p>email</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold lg:mb-3">Quick Links</h1>
          <div className="flex  gap-10 flex-wrap">
            <a
              className="underline cursor-pointer hover:text-blue-950 transition-all"
              onClick={() => navigate("/")}
            >
              Home
            </a>
            <a
              className="underline cursor-pointer hover:text-blue-950 transition-all"
              onClick={() => navigate("/aboutUs")}
            >
              About Us
            </a>
            <a
              className="underline cursor-pointer hover:text-blue-950 transition-all"
              onClick={() => navigate("/Products/AIChat")}
            >
              Chat AI
            </a>
            <a
              className="underline cursor-pointer hover:text-blue-950 transition-all"
              onClick={() => navigate("/Products/AIVoice")}
            >
              Voice AI
            </a>

            <a
              className="underline cursor-pointer hover:text-blue-950 transition-all"
              onClick={() => navigate("/industry")}
            >
              Industries
            </a>
            <a
              className="underline cursor-pointer hover:text-blue-950 transition-all"
              onClick={() => navigate("/contactus")}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1>Social Links</h1>
          <div className="flex justify-between">
            <LinkedInLogo />
            <YoutubeLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

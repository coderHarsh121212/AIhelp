import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InstallNow, Phone, Qualification, Realtime } from "../icons/icons";
import backGroundImage from "../images/background.jpg";
// Import YouTube component from 'react-youtube' if you're using it

const IndustriesSection = () => {
  const [popupVisible, setPopupVisible] = useState(false); // State to manage popup visibility

  const industries = [
    {
      name: "Online Commerce and Traditional Retail",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Medical Services and Biological Research",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Banking and Financial Institutions",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Telecommunication Services",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Tourism and Hotel Management",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Broadcasting and Show Business",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Educational management.",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Selling and buying old cars management",
      recordingUrl: "#",
      testCodeUrl: "#"
    },
    {
      name: "Leadership program management.",
      recordingUrl: "#",
      testCodeUrl: "#"
    }
    // Add additional applicable sectors as needed
  ];

  // Toggle popup visibility
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div>
      <section
        className="py-24 px-4 bg-gray-100"
        style={{
          background:
          `url(${backGroundImage})`,  backgroundSize: "cover"
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl font-semibold  text-black my-20 mb-40 ">
            Industries
          </h2>
        </div>
      </section>
      <div className="px-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 container mx-auto my-10">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              industry={industry}
              togglePopup={togglePopup}
            />
          ))}
        </div>
      </div>
      {/* Popup */}
      {popupVisible && <Popup onClose={togglePopup} />}
    </div>
  );
};

const IndustryCard = ({ industry, togglePopup }) => {
  return (
    <div className="bg-white  rounded-lg shadow-lg cursor-pointer hover:shadow-2xl flex flex-col justify-between min-h-40 h-fit items-start">
      <div className="flex flex-col gap-2 items-start px-6 mb-3">
        <p className="text-xl font-bold">{industry.name}</p>
      </div>
      <div className="flex gap-2 items-start flex-col px-6">
        <p className="text-gray-500 font-semibold">Perfect for</p>
        <p className="font-semibold flex gap-2 my-3">
          <Realtime /> Real-Time Booking
        </p>
        <p className="font-semibold flex gap-2">
          <Qualification />
          Lead Qualification
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-5 items-center justify-center sm:gap-1">
        <button
          onClick={togglePopup}
          className=" font-semibold flex sm:gap-4 border-t-2  rounded border-r-2 py-3 px-5 text-sm text-white bg-blue-500 hover:bg-blue-600 hover:shadow-xl"
        >
          <Phone /> Sales Pre Qualification
        </button>
        <button
          onClick={togglePopup}
          className=" font-semibold flex sm:gap-4 border-t-2  rounded border-r-2 py-3 px-5 text-sm text-white bg-blue-500 hover:bg-blue-600 hover:shadow-xl"
        >
          <InstallNow />
          Services
        </button>
      </div>
    </div>
  );
};

const Popup = ({ onClose }) => {
  const navigate = useNavigate();
  // YouTube video URL
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace VIDEO_ID with your YouTube video ID

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Embedded YouTube video */}
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          
        ></iframe>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
        <button
          onClick={() => navigate("/bookaConsultation")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-5"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default IndustriesSection;

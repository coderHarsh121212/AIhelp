import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutimg from "../images/bg2.png";
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
            'url("https://cdn.prod.website-files.com/624b06e1de671ba9e564fc19/658333067f03be832b45cb09_epcKmzT7raQUR63mScyvqkkdVyiIMinl1CJmwKQ76f0zTOESA-out-0.png")',
            backgroundSize: 'cover'
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
    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl flex flex-col justify-between h-40">
      <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
      <div className="grid grid-cols-2 items-center mb-4 w-full gap-5">
        <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
          Sales Pre Conditions
        </button>
        <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
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

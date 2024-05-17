import React from "react";
import { useNavigate } from "react-router-dom";
import backGroundImage from "../images/background.jpg";
const AboutUsSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section
        className="px-4 bg-cover bg-no-repeat text-black"
        style={{
          background:
          `url(${backGroundImage})`,  backgroundSize: "cover"
        }}
      >
        <div className={`w-full md:max-w-7xl mx-auto py-40`}>
          <h2 className="text-5xl md:text-8xl font-semibold mb-8">About Us</h2>
          <div className="flex flex-col gap-3">
            <div className=" flex flex-col justify-between">
              <div className="">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
                <p className=" mb-8 text-gray-700">
                  Empowering businesses and enhancing customer experiences
                  through cutting-edge AI innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" w-[90%] px-5 py-6 mx-auto">
        <h3 className="text-2xl  lg:text-5xl font-semibold mb-8 text-center  ">
          Core Values
        </h3>
        <ul className="list-disc list-inside text-start justify-center gap-3 grid grid-cols-1   items-center mx-auto">
          <div className=" w-full min-h-36 border-2 flex flex-col rounded-md sm:flex-row">
            <div className="sm:w-52 bg-blue-400 sm:text-7xl flex items-center justify-center text-white rounded-md py-4 text-3xl">
              01
            </div>
            <div className="flex flex-col justify-center sm:px-10 py-1 px-3">
              <span class="font-extrabold ">Innovation:</span> Continuously
              pushing AI boundaries to pioneer transformative solutions.
            </div>
          </div>
          <div className=" w-full min-h-36 border-2 flex  flex-col rounded-md sm:flex-row">
          <div className="sm:w-52 bg-blue-400 sm:text-7xl flex items-center justify-center text-white rounded-md py-4 text-3xl">
              02
            </div>
            <div className="flex flex-col justify-center sm:px-10 py-1 px-3">
              <span class="font-extrabold ">Integrity:</span> Upholding the
              utmost ethical standards, ensuring transparency, privacy, and
              security.
            </div>
          </div>
          <div className=" w-full min-h-36 border-2  flex  flex-col rounded-md sm:flex-row">
            <div className="sm:w-52 bg-blue-400 sm:text-7xl flex items-center justify-center text-white rounded-md py-4 text-3xl">
              03
            </div>
            <div className="flex flex-col justify-center sm:px-10 py-1 px-3">
              <span class="font-extrabold ">Collaboration:</span> Cultivating a
              collaborative environment, fostering teamwork, partnerships, and
              knowledge exchange.
            </div>
          </div>
          <div className=" w-full min-h-36 border-2 flex flex-col rounded-md sm:flex-row">
            <div className="sm:w-52 bg-blue-400 sm:text-7xl flex items-center justify-center text-white rounded-md py-4 text-3xl">
              04
            </div>
            <div className="flex flex-col justify-center sm:px-10 py-1 px-3">
              <span class="font-extrabold ">Customer-Focus:</span> Placing
              customers at the core, tailoring solutions to their distinct
              requirements.
            </div>
          </div>
          <div className=" w-full min-h-36 border-2 flex flex-col rounded-md sm:flex-row">
            <div className="sm:w-52 bg-blue-400 sm:text-7xl flex items-center justify-center text-white rounded-md py-4 text-3xl">
              05
            </div>
            <div className="flex flex-col justify-center sm:px-10 py-1 px-3">
              <span class="font-extrabold ">Excellence:</span> Pursuing
              unparalleled quality and performance across all endeavors.
            </div>
          </div>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5 w-[90%] mx-auto">
        <div
          className="border-2 py-6 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300"
          onClick={() => navigate("/pressMedia")}
        >
          <h3 className="text-xl font-semibold mb-4">Press and Media</h3>
          <ul className="list-disc list-inside">
            <li>Latest press releases and media coverage.</li>
            <li>Access to logos and branding assets.</li>
          </ul>
        </div>
        <div
          className="border-2 py-6 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300"
          onClick={() => navigate("/Carriar")}
        >
          <h3 className="text-xl font-semibold mb-4">Careers</h3>
          <ul className="list-disc list-inside">
            <li>Explore job opportunities and our hiring process.</li>
            <li>Discover employee benefits and our vibrant company culture.</li>
          </ul>
        </div>
        <div
          className="border-2 py-4 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300"
          onClick={() => navigate("/contactus")}
        >
          <h3 className="text-xl font-semibold mb-4 mt-8">Contact Us</h3>
          <ul className="list-disc list-inside">
            <li>Find office locations and contact details.</li>
            <li>Inquiries about partnerships and collaborations.</li>
          </ul>
        </div>
        <div
          className="border-2 py-4 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300"
          onClick={() => navigate("/legal")}
        >
          <h3 className="text-xl font-semibold mb-4 mt-8">Legal</h3>
          <ul className="list-disc list-inside">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Data Security and Compliance</a>
            </li>
            <li>
              <a href="#">Service Level Agreement (SLA)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

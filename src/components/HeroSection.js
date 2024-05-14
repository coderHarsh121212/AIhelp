import React from "react";
import { useNavigate } from "react-router-dom";
import aboutimg from "../images/image.png";
const AISection = () => {
  const navigate= useNavigate()
  return (
    <>
        <section
          className="py-20 bg-contain bg-no-repeat bg-center"
          style={{
            background: 'url("https://cdn.prod.website-files.com/624b06e1de671ba9e564fc19/658333067f03be832b45cb09_epcKmzT7raQUR63mScyvqkkdVyiIMinl1CJmwKQ76f0zTOESA-out-0.png")',
            backgroundSize: 'cover'
          }}
        >
        <div className="container mx-auto px-4 mt-20 lg:mt-40 text-black">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-3/4 lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your <span className="">Business</span> with
                Intelligent <span className="">AI</span> Agents
              </h2>
              <h3 className="text-lg md:text-xl text-gray-700 mb-6">
                Harness the potential of conversational AI to elevate customer
                satisfaction by 30%, slash support expenditures by 40%, and
                propel revenue expansion.
              </h3>
              <div className="flex flex-col md:flex-row  md:space-x-4 w-3/4 justify-center gap-5 mx-auto md:w-full">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out" onClick={()=>navigate("/scheduleDemo")}>
                  Schedule a Demo
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out" onClick={()=>navigate("/freetrial")}>
                  Get Started with a Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-1 border-2 rounded border-blue-500 w-[80%] h-[30%] mx-auto">
        {/* Video */}
        <iframe
          className="w-full h-64 md:h-96 rounded shadow-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="AI Agents in Action"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default AISection;

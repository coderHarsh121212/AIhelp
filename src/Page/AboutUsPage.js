import React from "react";
import aboutimg from "../images/image.png";
const AboutUsSection = () => {
  return (
    <div>
      <section
        className="px-4 bg-cover bg-no-repeat text-white"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        <div className={`w-full md:max-w-7xl mx-auto py-40`}>
          <h2 className="text-5xl md:text-8xl font-semibold mb-8">About Us</h2>
          <div className="flex flex-col gap-3">
            <div className=" flex flex-col justify-between">
              <div className="">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className=" mb-8">
                  Empowering businesses and enhancing customer experiences
                  through cutting-edge AI innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" w-[90%] px-5 py-6 mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-500">
          Core Values
        </h3>
        <ul className="list-disc list-inside text-start justify-center gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  items-center mx-auto">
          <div class="border-2 p-4 font-serif rounded-md list-none clippathoctagon h-40 w-full md:w-72 text-center px-10 flex justify-center items-center flex-col">
            <span class="font-semibold">Innovation:</span> Continuously pushing
            AI boundaries to pioneer transformative solutions.
          </div>

          <li className="border-2 p-4 font-serif rounded-md  list-none clippathoctagon h-40 w-full md:w-72 text-center px-10 flex justify-center items-center flex-col">
            <span className="font-semibold">Excellence:</span> Pursuing
            unparalleled quality and performance across all endeavors.
          </li>
          <li className="border-2 p-4 font-serif rounded-md  list-none clippathoctagon h-40 w-full md:w-72 text-center px-10 flex justify-center items-center flex-col">
            <span className="font-semibold">Customer-Focus:</span> Placing
            customers at the core, tailoring solutions to their distinct
            requirements.
          </li>
          <li className="border-2 p-4 font-serif rounded-md  list-none clippathoctagon h-40 w-full md:w-72 text-center px-10 flex justify-center items-center flex-col">
            <span className="font-semibold">Collaboration:</span> Cultivating a
            collaborative environment, fostering teamwork, partnerships, and
            knowledge exchange.
          </li>
          <li className="border-2 p-4 font-serif rounded-md  list-none clippathoctagon h-40 w-full md:w-72 text-center px-10 flex justify-center items-center flex-col">
            <span className="font-semibold">Integrity:</span> Upholding the
            utmost ethical standards, ensuring transparency, privacy, and
            security.
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5 w-[90%] mx-auto">
        <div className="border-2 py-6 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300">
          <h3 className="text-xl font-semibold mb-4">Press and Media</h3>
          <ul className="list-disc list-inside">
            <li>Latest press releases and media coverage.</li>
            <li>Access to logos and branding assets.</li>
          </ul>
        </div>
        <div className="border-2 py-6 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300">
          <h3 className="text-xl font-semibold mb-4">Careers</h3>
          <ul className="list-disc list-inside">
            <li>Explore job opportunities and our hiring process.</li>
            <li>Discover employee benefits and our vibrant company culture.</li>
          </ul>
        </div>
        <div className="border-2 py-4 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300">
          <h3 className="text-xl font-semibold mb-4 mt-8">Contact Us</h3>
          <ul className="list-disc list-inside">
            <li>Find office locations and contact details.</li>
            <li>Inquiries about partnerships and collaborations.</li>
          </ul>
        </div>
        <div className="border-2 py-4 rounded-md shadow-lg cursor-pointer hover:-translate-y-1 transition-all hover:bg-blue-300">
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

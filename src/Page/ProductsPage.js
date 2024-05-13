import React, { useState } from "react";
import aboutimg from "../images/bg3.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import aboutimg1 from "../images/achievements.png";
import PricingCard from "../components/Pricing";
import FeatureSection from "../components/Feature";
const ProductsPage = () => {
  const [showChat, setShowChat] = useState(true);
  return (
    <div className="min-h-screen">
      <header
        className="py-48 px-4 text-center bg-white bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        <div className="w-full sm:w-4/5 mx-auto">
          <h1 className=" text-3xl md:text-5xl font-bold mb-4 text-white">
            Harness the Potential of Artificial Intelligence
          </h1>
          <p className="text-lg md:text-lg text-white mb-8">
            Revolutionize your business using our state-of-the-art AI Voicebots,
            Chatbots, and Tailored AI Assistants. Encounter unmatched
            productivity, heightened interaction with customers, and expedited
            business expansion.
          </p>
        </div>
      </header>
      <div className="flex w-full items-center justify-center my-5 gap-5">
        <button
          className={`px-3 py-1 border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 transition-all rounded-md ${
            showChat && "bg-blue-500 text-white"
          }`}
          onClick={() => setShowChat(!showChat)}
        >
          VOICEBOTS
        </button>
        <button
          className={`px-3 py-1 border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 transition-all rounded-md ${
            !showChat && "bg-blue-500 text-white"
          }`}
          onClick={() => setShowChat(!showChat)}
        >
          CHATBOTS
        </button>
      </div>
      {showChat ? (
        <section className="py-12 px-4 bg-white w-full sm:w-3/4 mx-auto">
          <div className="grid grid-cols-1 justify-center items-center  ">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold mb-5 text-blue-500">
                AI Voicebots
              </h2>
              <p className="mb-5 text-blue-300">
                Transform customer engagements with smart, lifelike dialogues.
              </p>
              <ul className="mb-5 text-blue-400">
                <li>Cutting-edge NLP ensuring precise intent comprehension</li>
                <li>
                  Support for multiple languages and analysis of sentiment
                </li>
                <li>Effortless integration with CRM and support platforms</li>
              </ul>
              <p className="mb-5 text-blue-500">
                Applications across various industries:
              </p>

              <p className="font-semibold text-4xl text-blue-700 ">Features:</p>
              <div className="flex gap-6 flex-col  mt-4">
                <section className=" py-12">
                  <div className="container mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 px-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="pic"
                      ></img>
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                          Enhancing Customer Support
                        </h2>
                        <p>
                          Unlocking Seamless Assistance: Innovations to Elevate
                          Customer Support Experience."
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className=" py-12">
                  <div className="container mx-auto flex flex-wrap flex-row-reverse items-center justify-center">
                    <div className="w-full md:w-1/2 px-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="pic"
                      ></img>
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                          Streamlining Appointment Scheduling
                        </h2>
                        <p>
                          Effortlessly coordinate your calendar with our
                          streamlined appointment scheduling solution. Say
                          goodbye to confusion and missed meetings, and hello to
                          efficiency."
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className=" py-12">
                  <div className="container mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 px-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="pic"
                      ></img>
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                          Facilitating Lead Qualification
                        </h2>
                        <p>
                          Streamlining Lead Qualification: Effective Strategies
                          for Efficient Sales Pipelines."
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <p className="font-semibold text-4xl text-blue-700  w-3/4 mx-auto">
                Pricing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                <PricingCard />
                <PricingCard />
                <PricingCard />
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8 ">
            Discover More
          </button>
        </section>
      ) : (
        <section className="py-12 px-4 bg-white w-full sm:w-3/4 mx-auto">
          <div className="grid grid-cols-1  justify-center items-center">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold mb-5 text-blue-500">
                AI Chatbots
              </h2>
              <p className="mb-5 text-blue-300">
                Interact with clients through personalized, context-sensitive
                chatbots across various platforms.
              </p>
              <p className="font-semibold text-4xl text-blue-700 ">Features:</p>
              <div className="flex gap-6 flex-col  mt-4">
                <section className=" py-12">
                  <div className="container mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 px-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="pic"
                      ></img>
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                          Deployment across all channels
                        </h2>
                        <p>
                          Maximize your reach and engagement with seamless
                          deployment across all channels - from social media
                          platforms to email newsletters and beyond. Amplify
                          your message effortlessly and connect with your
                          audience wherever they are
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className=" py-12">
                  <div className="container mx-auto flex flex-wrap flex-row-reverse items-center justify-center">
                    <div className="w-full md:w-1/2 px-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="pic"
                      ></img>
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                          Support for diverse media formats and customization
                        </h2>
                        <p>
                          Unlock creativity with our robust support for diverse
                          media formats and customizable options, empowering you
                          to craft content that resonates across platforms and
                          engages your audience like never before
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className=" py-12">
                  <div className="container mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 px-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="pic"
                      ></img>
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                          Smooth transition to human agents
                        </h2>
                        <p>
                          Seamlessly switch to human support for personalized
                          assistance, ensuring a smooth transition from
                          automated services to live agents
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            

              <p className="font-semibold text-4xl text-blue-700 ">Pricing:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                <PricingCard />
                <PricingCard />
                <PricingCard />
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
            Discover More
          </button>
        </section>
      )}

      <section className="py-12 px-4 bg-white">
        <div className="">
          <div className="flex flex-col w-full pl-0 sm:pl-10  justify-center items-center">
            <h2 className="text-3xl font-semibold mb-8 text-blue-700">
              Custom AI Agents
            </h2>
            <p className="mb-8 text-blue-600">
              Customized solutions designed to meet the specific demands of your
              business, ensuring unparalleled outcomes.
            </p>
            <p className="mb-8 text-blue-500">
              Personalized consultation and development procedures
            </p>
            <p className="mb-8 text-blue-400">
              Effortless incorporation with current infrastructures
            </p>
            <p className="mb-8 text-blue-300">
              Demonstrated triumphs spanning various sectors
            </p>
          </div>
        </div>
        <AliceCarousel
          mouseTracking
          // autoPlay
          autoPlayInterval={3000}
          buttonsDisabled={true}
          disableDotsControls={false}
        >
          <div
            key={1}
            className=" rounded-xl py-5 mb-5"
            style={{ backgroundImage: `url(${aboutimg1})` }}
          >
            <h1 className="uppercase text-3xl text-violet-600 font-semibold">
              Our Success Stories
            </h1>
            <div className="flex justify-center w-full h-fit py-10 px-5 gap-10 ">
              <div className="flex flex-col gap-16 ">
                <h1 className=" text-xl lg:text-3xl text-white">
                  "Property 24X7 has made us more efficient,allowing us to grow
                  without increasing staffing."
                </h1>
                <div className="flex flex-col gap-3 text-blue-600">
                  <h1 className="text-xl font-semibold">Nikhil Kumar</h1>
                  <div className="flex flex-col gap-1">
                    NealKanth Real State
                    <p>48,000+ units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            key={2}
            className=" rounded-xl py-5 mb-5"
            style={{ backgroundImage: `url(${aboutimg1})` }}
          >
            <h1 className="uppercase text-3xl text-violet-600 font-semibold">
              Our Success Stories
            </h1>
            <div className="flex justify-center w-full h-fit py-10 px-5 ">
              <div className="flex flex-col gap-16 ">
                <h1 className="text-3xl text-white">
                  "Property 24X7 has made us more efficient,allowing us to grow
                  without increasing staffing."
                </h1>
                <div className="flex flex-col gap-3 text-blue-600">
                  <h1 className="text-xl font-semibold">Nikhil Kumar</h1>
                  <div className="flex flex-col gap-1">
                    NealKanth Real State
                    <p>48,000+ units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            key={3}
            className=" rounded-xl py-5 mb-5"
            style={{ backgroundImage: `url(${aboutimg1})` }}
          >
            <h1 className="uppercase text-3xl text-violet-600 font-semibold">
              Our Success Stories
            </h1>
            <div className="flex justify-center w-full h-fit py-10 px-5 ">
              <div className="flex flex-col gap-16 ">
                <h1 className="text-3xl text-white">
                  "Property 24X7 has made us more efficient,allowing us to grow
                  without increasing staffing."
                </h1>
                <div className="flex flex-col gap-3 text-blue-600">
                  <h1 className="text-xl font-semibold">Nikhil Kumar</h1>
                  <div className="flex flex-col gap-1">
                    NealKanth Real State
                    <p>48,000+ units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AliceCarousel>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Initiate Consultation
        </button>
      </section>
    </div>
  );
};

export default ProductsPage;

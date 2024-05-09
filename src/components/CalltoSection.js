import React from 'react';
import image4 from '../images/image4.jpeg'
const CallToActionSection = () => {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4"><span className='text-blue-500'>Elevate Your Business </span>with AI Agents</h2>
        <p className="text-lg text-gray-700 mb-8">
          Join numerous enterprises that have reaped tangible benefits from our AI Agent SaaS. Take the first step today.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mb-4 md:mb-0 md:mr-4">
            Request a Demo
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
            Start Free Trial
          </button>
        </div>
        <img src={image4} alt="AI Agent" className="mx-auto mb-8" />
        <div className="mb-8">
          <Testimonial
            text="Our AI Voicebot has completely transformed our customer support, cutting response times by 60%."
            author="John Doe, Company XYZ"
          />
          <Testimonial
            text="The AI Chatbot has tripled our lead conversion rate and significantly boosted customer satisfaction."
            author="Jane Smith, Company ABC"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mx-auto block">
          Get Started
        </button>
      </div>
    </section>
  );
};

const Testimonial = ({ text, author }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <p className="text-gray-700">{`"${text}"`}</p>
      <p className="text-gray-600">{`- ${author}`}</p>
    </div>
  );
};

export default CallToActionSection;

import React from 'react';
import aboutimg from '../images/bg2.png'
const IndustriesSection = () => {
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
    },
    // Add additional applicable sectors as needed
  ];

  return (
    <div>
    <section className="py-24 px-4 bg-gray-100" style={{backgroundImage: `url(${aboutimg})`}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-semibold  text-white my-20 mb-40 ">Industries</h2> 
      </div>
    </section>
    <div className='px-10'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto my-10">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
    </div>
    </div>
  );
};

const IndustryCard = ({ industry }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl flex flex-col justify-between h-40">
      <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
      <div className="flex justify-between items-center mb-4">
        <a href={industry.recordingUrl} className="text-blue-500 hover:underline">View Recording</a>
        <a href={industry.testCodeUrl} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Test Code</a>
      </div>
    </div>
  );
};

export default IndustriesSection;

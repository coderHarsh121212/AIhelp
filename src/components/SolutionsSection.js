import React from 'react';
import { useNavigate } from 'react-router-dom';

const SolutionsSection = () => {
  
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Tailored Solutions Across <span className='text-blue-500'>Industries</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SolutionCard
            title="Boost Inbound Sales"
            description="Multiply conversions by up to 8 times by promptly engaging with leads upon form submission."
          />
          <SolutionCard
            title="Continuous Customer Support"
            description="Deliver round-the-clock assistance, addressing inquiries and gathering contact information for further communication."
          />
          <SolutionCard
            title="Enhanced B2B Data Collection"
            description="Collect valuable data from pharmacies, apartment complexes, and businesses to construct extensive datasets."
          />
          <SolutionCard
            title="Streamlined Appointment Booking"
            description="Automate appointment booking and reminders, reducing no-shows and optimizing staff productivity."
          />
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ title, description }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between flex-col">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded element" onClick={()=>navigate("/bookaConsultation")}>
        BOOK A CONSULTATION
      </button>
    </div>
  );
};

export default SolutionsSection;

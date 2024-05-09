import React from 'react';

const PlatformSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <FeatureCard
            title="Design and Administration of AI Agent"
            description="User-friendly interface facilitating AI agent creation and administration. Convenient drag-and-drop tool for crafting conversation flows. Access to pre-designed templates and integrations."
          />
          <FeatureCard
            title="Training and Enhancement"
            description="Tools for data preparation and labeling. Options for selecting and configuring models. Monitoring performance and analyzing data."
          />
          <FeatureCard
            title="Implementation and Inclusion"
            description="Effortless deployment across various channels (voice, chat, web, mobile). Comprehensive documentation for APIs and SDKs. Compatibility with widely-used business tools and platforms."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default PlatformSection;

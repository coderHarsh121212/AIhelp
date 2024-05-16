import React from "react";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image5 from "../images/image5.jpeg";

const FeaturesSection = () => {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          What Makes Our <span className="text-blue-500">AI Agent </span>
          Stand Out?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Effortless Creation and Deployment"
            description="Simplify the process of creating and deploying AI agents across various channels such as voice, chat, web, and mobile within minutes."
            visual={
              <img
                src={image1}
                alt="Effortless Creation and Deployment"
                className="w-full h-auto"
              />
            }
          />
          <FeatureCard
            title="Advanced Training and Optimization"
            description="Elevate your AI agents with state-of-the-art NLP models, data labeling tools, and performance tracking, enabling them to achieve an impressive accuracy rate of up to 95% in comprehending user intents and contexts."
            visual={
              <img
                src={image2}
                alt="Advanced Training and Optimization"
                className="w-full h-auto"
              />
            }
          />
          <FeatureCard
            title="Seamless Integration and Customization"
            description="Seamlessly integrate AI agents with an extensive array of over 100 business tools and platforms via our API and SDK, and tailor them to reflect your brand's voice and tone."
            visual={
              <img
                src={image3}
                alt="Seamless Integration and Customization"
                className="w-full h-auto"
              />
            }
          />
          <FeatureCard
            title="Enterprise-Grade Scalability and Security"
            description="Our robust infrastructure guarantees 99.9% uptime, accommodates millions of interactions daily, and adheres to top-tier security standards like SOC 2 and GDPR."
            visual={
              <img
                src={image5}
                alt="Enterprise-Grade Scalability and Security"
                className="w-full h-auto"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};
const FeatureCard = ({ title, description, visual }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg element">
      <div className="mb-4">{visual}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeaturesSection;

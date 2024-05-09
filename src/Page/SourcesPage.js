import React from 'react';

const ResourcesSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard
            title="Blog"
            description="Explore insights and trends in the industry. Discover effective tips for optimizing AI agents. Stay updated on the latest releases and updates."
            linkText="Read Blog"
            linkUrl="#"
          />
          <ResourceCard
            title="Case Studies"
            description="Learn from real-life examples of successful AI agent implementations. See how AI agents deliver ROI and business value."
            linkText="View Case Studies"
            linkUrl="#"
          />
          <ResourceCard
            title="Whitepapers and eBooks"
            description="In-depth guides and reports on AI agent strategies. Explore technical papers and research findings related to AI agents."
            linkText="Download Whitepapers"
            linkUrl="#"
          />
          <ResourceCard
            title="Webinars and Events"
            description="Join live or on-demand webinars covering AI agent topics and upcoming industry events."
            linkText="Explore Webinars"
            linkUrl="#"
          />
          <ResourceCard
            title="API Documentation"
            description="Access API documentation for implementation guidance."
            linkText="Access API Documentation"
            linkUrl="#"
          />
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={linkUrl} className="text-blue-500 hover:underline">{linkText}</a>
    </div>
  );
};

export default ResourcesSection;

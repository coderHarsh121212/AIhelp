import React from "react";

const DocumentationAPISection = () => {
  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold mb-8">
            Documentations and APIs
          </h2>
       <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="w-full border-2 px-20 py-8 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-gray-700 mb-8">
                Explore our comprehensive documentation to learn more about our
                products, services, and features.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Documentation
              </a>
            </div>
       
          <div className="w-full border-2 px-20 py-8 rounded-md">
            <h3 className="text-xl font-semibold mb-4">APIs</h3>
            <p className="text-gray-700 mb-8">
              Access our APIs to integrate our services into your applications
              and unlock additional functionalities.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              View APIs
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationAPISection;

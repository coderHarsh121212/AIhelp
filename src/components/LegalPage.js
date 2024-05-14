import React from 'react';

const LegalPracticesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative pt-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Legal Practices</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Legal Practice Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://th.bing.com/th?id=OIP.mjkEx2GlByvZCIi0j1fyQgAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Legal Practice" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Area 1</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://th.bing.com/th?id=OIP.usiqo4rjXoRHRQX0DmI4hAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Legal Practice" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Area 2</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://th.bing.com/th?id=OIP.TsHZFFHR3MqeH7GCBZq0UQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Legal Practice" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Area 3</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPracticesPage;

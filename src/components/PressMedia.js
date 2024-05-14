import React from 'react';

const PressAndMediaPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative pt-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Press & Media</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Press Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://th.bing.com/th?id=OIP.sysdog1n5Qwz5YRCTp0_CAHaDd&w=349&h=163&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Press Release" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Release 1</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://th.bing.com/th/id/OIP.ErzXBMum_H_e-8hDPBF__gHaD8?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Press Release" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Release 2</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://th.bing.com/th/id/OIP.0GyanKr9A0b9jGuXwcqbGwHaD3?w=1000&h=523&rs=1&pid=ImgDetMain" alt="Press Release" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Release 3</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressAndMediaPage;

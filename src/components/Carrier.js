import React from "react";

const CarriersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative pt-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Carriers
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Carrier Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://th.bing.com/th?id=OIP.2yfqZ7mJMBXe-B26lKlcpAHaGB&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Carrier"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Carrier 1
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://th.bing.com/th?id=OIP.yZSq4ckXt28HKMitDGtYPgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Carrier"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Carrier 2
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://th.bing.com/th/id/OIP.6yvrEunWA-ba1gwxELhWfwHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Carrier"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Carrier 3
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarriersPage;

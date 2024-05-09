import React from "react";

const ClientLogosSection = () => {
  // Sample array of client logos, replace with your actual logos
  const clientLogos = [
    "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
    "https://th.bing.com/th/id/OIP.vaI5mdOwfF8e50rGYjsdKgHaE6?rs=1&pid=ImgDetMain",
    "https://logospng.org/download/amazon/logo-amazon-2048.png",
    "https://th.bing.com/th/id/OIP.cV5pF2087HRQSzrgDyZ2xgHaB_?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.MPHAVL52hadir7pe0HszoAAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.bvOcW76SKhQ5anT-2y7mAQHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
  ];

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          <span className="text-blue-500">Empowering Leading Brands</span> with
          AI Agents
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Client Logo ${index}`}
                className="h-16 md:h-20 lg:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;

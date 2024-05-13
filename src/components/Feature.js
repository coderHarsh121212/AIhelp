import React from "react";

function FeatureSection({title,ingsrc}) {
 
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 px-4">
        <img src={ingsrc} alt="pic"></img>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300">
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
            {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

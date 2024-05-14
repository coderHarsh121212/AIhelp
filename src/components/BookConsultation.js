import React from 'react';

const ConsultationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${"https://www.bing.com/th?id=OIP.SDKj_sVAdMs-ek212EOoPQHaE8&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-transparent shadow-2xl p-8 rounded-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3 backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Book a Consultation</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">Book Now</button>
          </div>
        </form>
        <p className="text-sm text-green-400 mt-4 text-center ">Feel free to contact us for any inquiries.</p>
      </div>
    </div>
  );
}

export default ConsultationPage;

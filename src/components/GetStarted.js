import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStartedAIDemo = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${"https://th.bing.com/th/id/OIP.C0POIWUyxTxZ_AeAG2lW3AHaDt?rs=1&pid=ImgDetMain"})` }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">Get Started with AI</h2>
          <p className="mt-2 text-lg text-white">Unlock the power of artificial intelligence today!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Why Choose AI?</h2>
              <p className="text-gray-600 mb-4">
                Artificial intelligence offers countless possibilities across various industries, from automating
                repetitive tasks to powering advanced analytics and decision-making processes.
              </p>
              <p className="text-gray-600">
                Whether you're a small business looking to streamline operations or a large enterprise aiming to
                revolutionize your products and services, AI can help you achieve your goals faster and more
                efficiently.
              </p>
            </div>
            <div className="p-6 bg-white border-b border-gray-200">
              <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Get Started Today!</h2>
              <p className="text-gray-600 mb-4">
                Ready to harness the power of AI for your business? Sign up for a free demo today and experience the
                benefits firsthand!
              </p>
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             onClick={()=>navigate("/auth")}
             >
                Sign Up for Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedAIDemo;

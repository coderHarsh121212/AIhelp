import React from 'react';


const FreeTrialPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${"https://th.bing.com/th/id/OIP.mzA7LgqXUTJMBrXXclxf5wHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"})` }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">Get Started with a Free Trial</h2>
          <p className="mt-2 text-lg text-white">Start your AI journey today with a free trial!</p>
        </div>
      </div>

      <div className="py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="py-2 px-3 mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Start Free Trial
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialPage;

import React from 'react';

function FeatureSection() {
    <ul className="mb-5 flex items-center justify-between my-3 flex-col gap-2 sm:flex-row sm:gap-0">
    <div className="octagonShape w-40 h-40 flex justify-center items-center bg-blue-400 text-white p-3 animate-pulse">
      <li className="font-semibold  ">
        Deployment across all channels
      </li>
    </div>
    <div className="octagonShape w-40 h-40 flex justify-center items-center bg-blue-400 text-white p-3 animate-pulse">
      <li className="font-semibold  ">
        Support for diverse media formats and customization
      </li>
    </div>
    <div className="octagonShape w-40 h-40 flex justify-center items-center bg-blue-400 text-white p-3 animate-pulse">
      <li className="font-semibold  ">
        Smooth transition to human agents
      </li>
    </div>
  </ul>
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 px-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
          
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Deployment across all channels</h2>
            <p className="text-gray-600 mb-4">Bring your suite of tools into Slack, and let Workflow Builder take care of the rest. Plug-and-play connectors keep work flowing across all your automations, all in one place. Less context switching. Greater focus.</p>
            <a href="https://slack.com/apps/collection/workflow-automation" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">Learn more about connectors</a>
            <div className="mt-8 text-center md:text-left">
              <div className="mb-4">
                <p className="text-lg font-bold text-gray-800">28%</p>
                <p className="text-gray-600"><strong>increase in time saved due to automation<sup>1</sup></strong></p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold text-gray-800">80%</p>
                <p className="text-gray-600"><strong>of those who build Slack workflows are non-technical<sup>2</sup></strong></p>
              </div>
              <div className="text-sm text-gray-500">
                <p><sup>1</sup>Source: FY23 Customer Success Metrics, Salesforce, survey of 115–755 Slack and Salesforce dual users, July 2022</p>
                <p><sup>2</sup>Source: Slack internal data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

import React from 'react';
import aboutimg from '../images/image.png'
const ProductsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-48 px-4 text-center bg-white bg-cover bg-no-repeat" style={{backgroundImage: `url(${aboutimg})`}}>
        <div className='w-full sm:w-4/5 mx-auto'>
        <h1 className=" text-3xl md:text-5xl font-bold mb-4 text-white">Harness the Potential of Artificial Intelligence</h1>
        <p className="text-lg md:text-lg text-white mb-8">Revolutionize your business using our state-of-the-art AI Voicebots, Chatbots, and Tailored AI Assistants. Encounter unmatched productivity, heightened interaction with customers, and expedited business expansion.</p>
        </div>
      </header>

      <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2">
          <div className='flex flex-col'>
          <h2 className="text-3xl font-semibold mb-5">AI Voicebots</h2>
          <p className="mb-5">Transform customer engagements with smart, lifelike dialogues.</p>
          <ul className="mb-5">
            <li>Cutting-edge NLP ensuring precise intent comprehension</li>
            <li>Support for multiple languages and analysis of sentiment</li>
            <li>Effortless integration with CRM and support platforms</li>
          </ul>
          <p className="mb-5">Applications across various industries:</p>
          <ul className="mb-5">
            <li>Enhancing Customer Support</li>
            <li>Streamlining Appointment Scheduling</li>
            <li>Facilitating Lead Qualification</li>
          </ul>

          <p className="font-semibold">Pricing:</p>
          <ul className="mb-5">
            <li>Starter Plan: $499 per month</li>
            <li>Growth Plan: $1,499 per month</li>
            <li>Enterprise Plan: Tailored pricing</li>
          </ul>
          </div>
          <div>
          <img src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="AI Chatbots" className="mx-auto w-64 mt-12" />
        
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 md:mt-0">Discover More</button>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className='flex flex-col'>
          <h2 className="text-3xl font-semibold mb-5">AI Chatbots</h2>
          <p className="mb-5">Interact with clients through personalized, context-sensitive chatbots across various platforms.</p>
          <p className="font-semibold">Features:</p>
          <ul className="mb-5">
            <li>Deployment across all channels</li>
            <li>Support for diverse media formats and customization</li>
            <li>Smooth transition to human agents</li>
          </ul>
          <p className="font-semibold">Applicable Industries:</p>
          <ul className="mb-5">
            <li>E-commerce</li>
            <li>Banking and Finance</li>
            <li>Healthcare</li>
          </ul>
          <p className="font-semibold">Pricing:</p>
          <ul className="mb-8">
            <li>Basic: $299/month</li>
            <li>Pro: $999/month</li>
            <li>Enterprise: Tailored pricing</li>
          </ul>
          </div>
          <div>
         
          <img src="https://th.bing.com/th/id/OIP.lkFFzps54G3mXGp_BrKsswHaFd?w=247&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Tailored AI Agents" className="mx-auto w-64 mt-12" />
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-5 md:mt-0">Discover More</button>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='flex flex-col w-3/4 pl-10'>
          <h2 className="text-3xl font-semibold mb-8">Custom AI Agents</h2>
          <p className="mb-8">Customized solutions designed to meet the specific demands of your business, ensuring unparalleled outcomes.</p>
          <p className="mb-8">Personalized consultation and development procedures</p>
          <p className="mb-8">Effortless incorporation with current infrastructures</p>
          <p className="mb-8">Demonstrated triumphs spanning various sectors</p>
          </div>
          <div>
          <p className="mb-8 text-2xl font-semibold">Success Stories:</p>
          <ul className="mb-8">
            <li>[Success Story 1: Sector, Achievements]</li>
            <li>[Success Story 2: Sector, Achievements]</li>
            <li>[Success Story 3: Sector, Achievements]</li>
          </ul>
          <p className="mb-8">Rates:</p>
          <ul className="mb-8">
            <li>Bespoke pricing tailored to individual needs</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Initiate Consultation</button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

import React from "react";
import aboutimg from "../images/bg1.png";
const ContactUspage = () => {
  return (
    <div>
    <div
      className="relative w-full h-[70vh] flex  px-4 bg-contain  text-white bg-gray-100 items-center justify-center"
      style={{ backgroundImage: `url(${aboutimg})` }}
    >
     <h1 className="text-3xl sm:text-5xl lg:text-7xl">Contact US</h1>
     </div>
     <div className=" mx-auto py-20">
        <section className="py-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
            <div className="w-full  px-4 mb-8 ">
              <div className=" rounded-lg shadow-2xl p-6 h-64">
                <img
                  src="https://westoryboard.com/wp-content/uploads/2023/03/Mask-group-46.png"
                  alt="Phone Icon"
                  className="w-24 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">Phone Us</h4>
                <p className="text-gray-700">+91 1234567878</p>
              </div>
            </div>
            <div className="w-full  px-4 mb-8">
              <div className="rounded-lg shadow-2xl p-6 h-64">
                <img
                  src="https://westoryboard.com/wp-content/uploads/2023/03/Mask-group-47.png"
                  alt="Email Icon"
                  className="w-24 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                <p className="text-gray-700">
                  abc@westoryboard.com
                  <br />
                  abc@westoryboard.com
                </p>
              </div>
            </div>
            <div className="w-full  px-4 mb-8">
              <div className=" rounded-lg shadow-2xl p-6 h-64">
                <img
                  src="https://westoryboard.com/wp-content/uploads/2023/03/Mask-group-48.png"
                  alt="Location Icon"
                  className="w-24 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">Our Address</h4>
                <p className="text-gray-700">
                  Piller
                  <br />
                  Address
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 ">
          <div className="w-full md:w-2/3 mx-auto  pb-5">
            <h2 className="text-3xl font-semibold text-center mb-6">
              We're Here To Help
            </h2>
            <p className="text-lg text-center text-blue-700 mb-8">
              Do you have a question or are you interested in working with us?
            </p>
            <form className="mx-auto max-w-md ">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 text-black"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 text-black"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 text-black"
                  placeholder="Your Phone"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 text-black"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 text-black"
                  placeholder="Write Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="py-12 bg-gray-100">
          <div className="w-full  h-60">
            <div className="">
              <iframe
                src="https://maps.google.com/maps?q=Metro%20Pillar%20Number%20564%2C%20THEUNIT.IDEASHACKS%2C%2014%2F3%2C%20Mathura%20Rd%2C%20Sector%2031%2C%20Faridabad%2C%20Haryana%20121003&t=m&z=10&output=embed&iwloc=near"
                className="w-full   h-60"
                frameborder="0"
                // style="border:0;"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
   
  );
};

export default ContactUspage;

"use client"
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 px-8 bg-gray-50">

      <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl font-bold mb-8">Contact us</h2>
        <p className="text-gray-600">
          Need to get in touch with us? Either fill out the form with your inquiry or find the{" "}
          <a
            href="mailto:department@example.com"
            className="text-orange-500 underline"
          >
            abc email
          </a>{" "}
          youd like to contact below.
        </p>
      </div>

      <form
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        onSubmit={(e) => e.preventDefault()} 
      >
        <div className="flex flex-col gap-4">
          
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block font-medium text-gray-700">
                First name <span className="text-red-600 text-sm">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              What can we help you with?
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

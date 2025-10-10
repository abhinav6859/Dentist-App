import React from "react";
import heroImage from "../assets/front.png"; 
import emojiImage from "../assets/realtooth.png";
import { motion as Motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
      {/* Left content */}
      <div className="max-w-xl">
        <h1 className="text-green-600 text-3xl font-semibold mb-2">
          Lucknow’s #No.1 Dental Clinic
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
          Dental Clinic In Lucknow Near You
        </h2>
        <p className="text-green-600 text-xl font-medium mb-6">
          Regain Your Smile
        </p>
        <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-700 transition">
          BOOK APPOINTMENT
        </button>

       <img
        src={emojiImage}
        alt="Realtooth Logo"
        className="absolute top-6 left-6 w-24 md:w-32 z-20"
      />

      {/* Hero image centered */}
      <img
        src={heroImage}
        alt="Hero Dentist"
        className="rounded-4xl shadow-lg w-80 md:w-[400px] z-10 left-50 md:left-60 mt-10 md:mt-0 relative"
      />
      </div>

      {/* Right booking form */}
      <div className="bg-green-200 p-8 rounded-2xl mt-8 md:mt-0 w-full max-w-md shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Book Appointment Now!
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name *</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone *</label>
            <input
              type="tel"
              placeholder="Phone No."
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              placeholder="Any Message"
              className="w-full p-3 rounded-md border border-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
          >
            BOOK NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;


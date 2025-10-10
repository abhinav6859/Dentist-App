import React from "react";
import { motion as Motion } from "framer-motion";

export default function BookAppointment() {
  return (
    <section className="bg-[#8CC63F] text-white py-16 px-6 md:px-16 rounded-2xl relative overflow-hidden">
      {/* Animated Title */}
  <Motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Book Appointment Now!
  </Motion.h2>

      {/* Form */}
  <Motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block text-white font-semibold mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            style={{ backgroundColor: "white" }}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-white font-semibold mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
             style={{ backgroundColor: "white" }}
            placeholder="Phone No."
            className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-white font-semibold mb-1">
            Message
          </label>
          <textarea
            rows="3"
             style={{ backgroundColor: "white" }}
            placeholder="Any Message"
            className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        {/* Button */}
  <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
        >
          BOOK NOW
        </Motion.button>
      </Motion.form>

      {/* Address Section */}
  <Motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-green-700 text-center text-white mt-12 py-8 rounded-b-2xl"
      >
        <p className="mb-2">
          <strong>Mahanagar Address:</strong> C-117 H Sector A, Mandir Marg
          Mahanagar, Lucknow – 226006, Uttar Pradesh{" "}
          <span className="text-[#d4f4be] font-semibold">
            +91-8081151128
          </span>
        </p>
        <p className="mb-2">
          <strong>Hazratganj Address:</strong> Greenwood Apartment, Gokhale Marg,
          Near Redhill School, Lucknow – 226001, Uttar Pradesh{" "}
          <span className="text-[#d4f4be] font-semibold">
            +91-8081151138
          </span>
        </p>
        <p className="mb-2">
          <strong>Gomti Nagar Address:</strong> Omaxe Heights, VijaiPur Colony,
          Vibhuti Khand, Lucknow – 226016{" "}
          <span className="text-[#d4f4be] font-semibold">
            +91-8081151139
          </span>
        </p>
        <p>
          <strong>Aliganj Address:</strong> Star Tower Building, Opp Kendriya
          Bhawan, Sector H, Aliganj, Lucknow – 226016{" "}
          <span className="text-[#d4f4be] font-semibold">
            +91-8081151129
          </span>
        </p>

        <p className="mt-4 font-bold text-lg">
          CALL ON:{" "}
          <span className="text-yellow-300">+91-8881900300</span>
        </p>
  </Motion.div>
    </section>
  );
}

import React from "react";
import { motion as Motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ClinicLocation = () => {
  return (
    <section
      id="location"
      className="bg-gradient-to-r from-green-50 via-white to-green-100 py-16 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Title */}
      <Motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-10"
      >
        Visit Our Clinic
      </Motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left: Map */}
        <Motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-green-400"
        >
          <iframe
            title="Realtooth Clinic Location"
            src="https://www.google.com/maps?q=Nishith%20Plaza,%20Engineering%20College%20Chauraha,%20Lucknow,%20India&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Motion.div>

        {/* Right: Info Card */}
        <Motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg w-full md:w-1/2"
        >
          <h3 className="text-3xl font-bold text-green-700 mb-4">
           The Smile Center
          </h3>
          <p className="text-gray-700 mb-4 text-lg flex items-start">
            <FaMapMarkerAlt className="text-orange-500 mt-1 mr-2" />
            Nishith Plaza, Engineering College Chauraha,
            Lucknow, Uttar Pradesh, India
          </p>

          <p className="text-gray-600 mb-6">
            Located in the heart of Lucknow, our clinic offers easy access and a
            welcoming environment for patients of all ages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Nishith%20Plaza,%20Engineering%20College%20Chauraha,%20Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition text-center w-full sm:w-auto"
            >
              Open in Google Maps
            </a>

            <a
              href="tel:+918881900300"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition w-full sm:w-auto"
            >
              <FaPhoneAlt /> Call Clinic
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ClinicLocation;

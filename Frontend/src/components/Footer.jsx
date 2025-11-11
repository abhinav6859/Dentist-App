
import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="bubble-background py-10 bg-gray-900 text-center relative  text-gray-300 ">
     
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Smile centre </h2>
          <p className="text-sm">
            Bringing smiles to life with advanced dental care and compassionate service.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-shadow-md">Dr S.Bhardwaj</p>
          <p className="text-sm">📍 Nishith plaza, engineering college chauraha  Lucknow, India</p>
          <p className="text-sm">📞 +91 79859 54359</p>
          <p className="text-sm">✉️ fu7408123@gmail.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://wa.me/917985954359"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Smile centre . All rights reserved.
      </div>
     
    </footer>
  );
};

export default Footer;








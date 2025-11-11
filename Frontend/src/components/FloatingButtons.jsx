import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaUser } from "react-icons/fa";

const FloatingButtons = () => {
  const phoneNumber = "+917985954359"; 
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Top Right Login Icon */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          <FaUser size={24} />
        </button>
      </div>

      {/* Floating Buttons (Bottom Left) */}
      <div className="fixed bottom-4 left-4 flex flex-row items-center gap-3 z-40">
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={30} />
        </a>

        {/* Phone */}
        <a
          href={`tel:${phoneNumber}`}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaPhoneAlt size={28} />
        </a>
      </div>

      {/* Login/Signup Popup */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Login / Signup
            </h2>

            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
              <p className="text-sm text-center text-gray-600">
                Don’t have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;

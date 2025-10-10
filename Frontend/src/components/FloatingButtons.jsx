import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  const phoneNumber = "+919999999999"; // replace with your actual number
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <div className="fixed top-4 right-4 flex flex-col items-center gap-3 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={22} />
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;

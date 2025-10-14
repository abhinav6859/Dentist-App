import React, { useState } from "react";
import heroImage from "../assets/front.png";
import emojiImage from "../assets/realtooth.png";
import { motion as Motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";


const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;

    // Validation
    if (!name || !phone || phone.length < 10) {
      toast.error("⚠️ Please fill all required fields (Name & Valid Phone Number)!");
      return;
    }

    // WhatsApp message (formatted)
    const text = `*🦷 New Appointment Request*%0A%0A*👤 Name:* ${name}%0A*📞 Phone:* ${phone}%0A*💬 Message:* ${message || "N/A"}%0A%0A*📍 Sent from Realtooth Dental Clinic Website*`;

    // Replace with your clinic’s WhatsApp number (with country code, no +)
    const phoneNumber = "916206008078";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    // Success toast
    toast.success("✅ Opening WhatsApp...");

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 relative">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Left content */}
      <div className="max-w-xl relative">
        <h1 className="text-green-600 text-3xl font-semibold mb-2">
          Lucknow’s #No.1 Dental Clinic
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
          Dental Clinic In Lucknow Near You
        </h2>
        <p className="text-green-600 text-xl font-medium mb-6">
          Regain Your Smile
        </p>
        <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-700 transition"
        onClick={() => document.getElementById("booking-form").scrollIntoView({ behavior: "smooth" })}
        >
          BOOK APPOINTMENT
        </button>



<img
  src={emojiImage}
  alt="Realtooth Logo"
  className="absolute top-0 right-8 w-24 md:w-32 z-20 animate-float hidden md:block"
/>


<style jsx>{`
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`}</style>


        <img
          src={heroImage}
          alt="Hero Dentist"
          className="rounded-4xl shadow-lg w-80 md:w-[400px] z-10 mt-10 md:mt-0 relative"
        />
      </div>

      {/* Right booking form */}
      <div className="bg-green-200 p-8 rounded-2xl mt-8 md:mt-0 w-full max-w-md shadow-md">
        <button
          className="text-2xl font-semibold text-center mb-6"
        >
          Book Appointment Now!
        </button>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1">Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Any Message"
              value={formData.message}
              onChange={handleChange}
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

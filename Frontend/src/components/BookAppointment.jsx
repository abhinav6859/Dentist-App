
import React, { useState } from "react";
import ClinicLocation from "./Location.jsx";
import { motion as Motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Phone, MapPin, Send } from "lucide-react";

export default function BookAppointment() {
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

    if (!name || !phone || phone.length < 10) {
      toast.error("⚠️ Please fill all required fields (Name & Valid Phone Number)!");
      return;
    }

    const text = `*🦷 New Appointment Request*%0A%0A*👤 Name:* ${name}%0A*📞 Phone:* ${phone}%0A*💬 Message:* ${message || "N/A"}%0A%0A*📍 Sent from Smile Centre Website*`;

    const phoneNumber = "9179859 54359";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    toast.success("✅ Opening WhatsApp...");
    window.open(whatsappURL, "_blank");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="booking-form"
      className="relative overflow-hidden py-16 px-6 md:px-16 bg-gradient-to-br from-green-600 to-lime-500 text-white rounded-3xl shadow-xl"
    >
      {/* Decorative background shape */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-10"></div>

      {/* Animated Title */}
      <Motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-4xl md:text-5xl font-bold text-center mb-8 drop-shadow-md"
      >
        Book Your Appointment Now 🦷
      </Motion.h2>

      {/* Subtext */}
      <Motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-white/90 mb-10 text-lg max-w-2xl mx-auto"
      >
        Fill in your details and our team will reach out soon to confirm your appointment.
      </Motion.p>

      {/* Form */}
      <Motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="relative bg-white text-gray-800 rounded-2xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any message or specific concern?"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Button */}
        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
        >
          <Send size={20} /> Book Appointment
        </Motion.button>
      </Motion.form>

      <Toaster position="top-center" reverseOrder={false} />

      {/* Address Section */}
      <Motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-14 bg-white/10 backdrop-blur-md rounded-2xl py-8 px-6 text-center shadow-inner"
      >
        {/* <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
          <MapPin className="text-yellow-300" /> Our Lucknow Branches
        </h3>

        <div className="space-y-3 text-white/90">
          <p><strong>Mahanagar:</strong> C-117 H Sector A, Mandir Marg — <span className="text-yellow-200 font-semibold">+91-8081151128</span></p>
          <p><strong>Hazratganj:</strong> Greenwood Apartment, Gokhale Marg — <span className="text-yellow-200 font-semibold">+91-8081151138</span></p>
          <p><strong>Gomti Nagar:</strong> Omaxe Heights, Vibhuti Khand — <span className="text-yellow-200 font-semibold">+91-8081151139</span></p>
          <p><strong>Aliganj:</strong> Star Tower Building, Sector H — <span className="text-yellow-200 font-semibold">+91-8081151129</span></p>
        </div>

        <p className="mt-5 text-lg font-bold flex items-center justify-center gap-2">
          <Phone className="text-yellow-300" /> CALL NOW:
          <span className="text-yellow-300">+91-79859 54359</span>
        </p> */}
        <ClinicLocation />
      </Motion.div>
    </section>
  );
}

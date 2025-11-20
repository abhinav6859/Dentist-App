
import React, { useState } from "react";
import heroImage from "../assets/front.png";
import emojiImage from "../assets/smile1.jpg";
import { motion as Motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import "./HeroSection.css";

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

    if (!name || !phone || phone.length < 10) {
      toast.error("⚠️ Please fill all required fields (Name & Valid Phone Number)!");
      return;
    }

    const text = `*🦷 New Appointment Request*%0A%0A*👤 Name:* ${name}%0A*📞 Phone:* ${phone}%0A*💬 Message:* ${
      message || "N/A"
    }%0A%0A*📍 Sent from Realtooth Dental Clinic Website*`;

    const phoneNumber = "917985954359";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    toast.success("✅ Opening WhatsApp...");
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-teal-50 via-white to-green-100 py-16 px-8 md:px-20">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 opacity-30 rounded-full blur-3xl animate-bounce-slow"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE: FORM CARD */}
        
        <Motion.div
         
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md border-t-8 border-green-500"
        >
          
          <h3 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Book Your Appointment
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Any Message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition resize-none"
              ></textarea>
            </div>

            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-md transition"
            >
              BOOK NOW
            </Motion.button>
          </form>
        </Motion.div>
        {/* RIGHT SIDE: HERO CONTENT */}
        <Motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center md:text-left max-w-xl"
        >
          <Motion.img
            src={emojiImage}
            alt="Smiling Emoji"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-20 mb-6"
          />
  <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("location").scrollIntoView({ behavior: "smooth" })}
           className="rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 active:scale-95 transition-all duration-300
            text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
           Check Location 
          </Motion.button>
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 leading-tight mb-4">
            Bright Smiles for the Whole Family
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            From kids to grandparents — we care for everyone’s smile with gentle,
            expert dental care in a friendly, stress-free environment.
          </p>
          <p className="text-blue-700 text-lg mb-8">Doctor: Dr. S. Bhardwaj, PhD (Research Scholar), MDS (Prosthodontics & Implantology), BDS
          </p>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("booking-form").scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition"
          >
            Get Appointment
          </Motion.button>
          

          <Motion.img
            src={heroImage}
            alt="Dentist Hero"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="rounded-3xl shadow-2xl mt-10 w-80 md:w-[400px]"
          />
        </Motion.div>
      </div>

      {/* Custom animation for slower bounce */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

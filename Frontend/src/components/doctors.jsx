import React from "react";
import { motion as Motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import pic1 from "../assets/mam.png";
import pic2 from "../assets/s_bhardwaj.png";

const Doctors = () => {
  // Replace with your clinic's WhatsApp number (no "+")
  const whatsappNumber = "917985954359";

  const handleWhatsApp = (doctorName) => {
    const message = `*🦷 Appointment Request*%0A%0A*Doctor:* ${doctorName}%0A*📍 Sent from Realtooth Dental Clinic Website*`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const doctors = [
    {
      name: "Dr. Ritu Sharma",
      degree: "BDS, MDS (Orthodontics)",
      desc: "Dr. Ritu is a passionate orthodontist with over 10 years of experience in smile correction and braces treatments. She believes in gentle care and patient comfort.",
      image: pic1,
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
    {
      name: "Dr. Ankit Verma",
      degree: "BDS, MDS (Endodontics)",
      desc: "Dr. Ankit specializes in painless root canal treatments and cosmetic dental restorations. His focus is precision, comfort, and long-lasting results.",
        image: pic2,
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  ];

  return (
    <section className="bg-gradient-to-b  from-blue-50 to-white py-16 px-6 md:px-12">
      {/* Heading */}
      <Motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-bold text-blue-800 mb-4"
      >
        👨‍⚕️ Meet Our Doctors
      </Motion.h2>

      <p className="text-center text-green-700 mb-12 text-lg max-w-3xl mx-auto">
        Our dental experts bring years of experience and compassion to ensure you and your family receive the best care possible.
      </p>

      {/* Doctor Cards */}
      <div className="space-y-16">
        {doctors.map((doc, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Doctor Image */}
            <div className="w-full md:w-1/2">
              <img
                src={doc.image}
                alt={doc.name}
                // className="rounded-3xl shadow-2xl w-full object-cover"
                className="rounded-2xl shadow-lg w-full h-56 md:h-72 object-cover object-center"

              />
            </div>

            {/* Doctor Info */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">{doc.name}</h3>
              <p className="text-green-600 font-semibold mb-3">{doc.degree}</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{doc.desc}</p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => handleWhatsApp(doc.name)}
                  className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  📅 Book Appointment
                </button>

                <div className="flex gap-4 mt-2">
                  <a href={doc.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className="text-blue-700 hover:scale-110 transition-transform" />
                  </a>
                  <a href={doc.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} className="text-pink-500 hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>

    
    </section>
  );
};

export default Doctors;

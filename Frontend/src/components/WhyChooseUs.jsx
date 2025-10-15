import React from "react";
import { FaTooth, FaSmile, FaUserMd, FaClock, FaHeartbeat, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={30} />,
    title: "Experienced Doctors",
    desc: "Our dentists are highly skilled and compassionate professionals.",
  },
  {
    icon: <FaSmile size={30} />,
    title: "Patient Comfort",
    desc: "We ensure every visit is relaxing and stress-free for you.",
  },
  {
    icon: <FaTooth size={30} />,
    title: "Advanced Equipment",
    desc: "State-of-the-art tools for precise and safe treatments.",
  },
  {
    icon: <FaClock size={30} />,
    title: "Flexible Timing",
    desc: "We offer convenient appointment schedules that suit your day.",
  },
  {
    icon: <FaHeartbeat size={30} />,
    title: "Comprehensive Care",
    desc: "All your dental needs covered in one place.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Trusted Service",
    desc: "Hundreds of patients trust us with their smiles.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white text-center ">
  <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
  <h1 className="text-4xl font-bold text-green-800 mb-10">Why To Choose Smile centre </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {features.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-6 bg-blue-100 rounded-2xl shadow-lg
                   transform transition-all duration-300 ease-out 
                   hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-300 
                   active:scale-95 active:shadow-lg "
      >
        <div className="text-blue-600 mb-4 text-4xl">{item.icon}</div>
        <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
        <p className="text-gray-600  text-1xl">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default WhyChooseUs;

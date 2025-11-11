import React from "react";
import { FaTooth, FaSmile, FaUserMd, FaClock, FaHeartbeat, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={30} />,
    title: "Friendly & Skilled Dentists",
    desc: "Our expert dentists treat you like family — with care, patience, and a big smile!",
  },
  {
    icon: <FaSmile size={30} />,
    title: "Relaxed & Happy Visits",
    desc: "We make sure every visit feels calm, comfortable, and worry-free for kids and adults alike.",
  },
  {
    icon: <FaTooth size={30} />,
    title: "Modern Dental Technology",
    desc: "From digital X-rays to painless treatments — we use the latest tools for the best results.",
  },
  {
    icon: <FaClock size={30} />,
    title: "Easy & Flexible Appointments",
    desc: "Morning or evening — book a time that fits your family’s busy schedule.",
  },
  {
    icon: <FaHeartbeat size={30} />,
    title: "Complete Family Care",
    desc: "From your child’s first tooth to senior dental care — we’ve got every smile covered.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Trusted by Happy Smiles",
    desc: "Thousands of smiling patients across Lucknow trust us with their family’s dental care.",
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
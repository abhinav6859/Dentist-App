import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It’s best to visit your dentist every 6 months for a check-up and cleaning to maintain optimal oral health.",
  },
  {
    question: "Do dental treatments hurt?",
    answer:
      "Most treatments are pain-free thanks to modern anesthesia and gentle techniques.",
  },
  {
    question: "Do you offer teeth whitening?",
    answer:
      "Yes, we offer professional whitening treatments that are safe and long-lasting.",
  },
  {
    question: "What should I do in case of a dental emergency?",
    answer:
      "Call us immediately! We provide quick appointments for urgent dental issues.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto text-left space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-5  cursor-pointer  rounded-2xl shadow-lg
                   transform transition-all duration-300 ease-out 
                   hover:scale-110 hover:-translate-y-2 hover:shadow-2xl 
                   active:scale-95 active:shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <FaChevronDown
                className={`text-gray-600 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

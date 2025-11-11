import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "Visiting every 6 months helps keep your teeth clean and healthy. Regular check-ups also prevent small issues from turning into big ones!",
  },
  {
    question: "Do dental treatments hurt?",
    answer:
      "Don’t worry — most treatments are completely painless! We use gentle techniques and make sure you’re comfortable every step of the way.",
  },
  {
    question: "Do you offer teeth whitening?",
    answer:
      "Yes! Our safe and professional whitening treatments can make your smile brighter in no time — perfect for special occasions or everyday confidence.",
  },
  {
    question: "What should I do if I have a toothache or emergency?",
    answer:
      "If you have sudden pain, a broken tooth, or bleeding gums, call us right away. We’ll do our best to get you in as soon as possible.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Of course! We love caring for kids and make every visit fun and fear-free. Our friendly team helps children build good dental habits early on.",
  },
  {
    question: "Can you help with missing or damaged teeth?",
    answer:
      "Yes! We offer options like dental implants, crowns, and bridges to restore your smile and make eating comfortable again.",
  },
  {
    question: "Do you offer braces or aligners?",
    answer:
      "Yes, we provide both traditional braces and clear aligners to help straighten teeth comfortably and effectively for kids, teens, and adults.",
  },
  {
    question: "How can I keep my teeth healthy at home?",
    answer:
      "Brush twice a day, floss daily, and avoid too many sugary snacks. And don’t forget to visit us every 6 months for a quick check-up!",
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
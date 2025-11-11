import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion as Motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Neha Sharma 😊",
    review:
      "My daughter was scared of dentists before coming here — now she loves her visits! The staff is so kind and caring.",
  },
  {
    name: "Ravi Verma ⭐",
    review:
      "Clean clinic, friendly doctors, and painless treatment. I actually enjoy visiting now!",
  },
  {
    name: "Simran Kaur 😄",
    review:
      "Amazing experience! The dentist explained everything so well and made me feel completely comfortable.",
  },
  {
    name: "Ankit Tiwari 😁",
    review:
      "Best dental care I’ve ever received. Highly recommend for families and kids!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <Motion.h2
          className="text-4xl font-bold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💬 What Our Patients Say
        </Motion.h2>
        <p className="text-green-600 mb-10 text-lg">
          Real smiles, real stories — straight from our happy patients!
        </p>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          loop={true}
          className="w-full md:w-3/4 mx-auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <Motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
              >
                <p className="text-gray-700 italic text-lg mb-4">
                  “{t.review}”
                </p>
                <h4 className="text-blue-700 font-semibold text-xl">{t.name}</h4>
                <div className="mt-3 flex justify-center gap-1 text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </Motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

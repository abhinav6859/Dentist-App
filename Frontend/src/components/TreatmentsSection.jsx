import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion as Motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import crowns from "../assets/crown.png";
import implants from "../assets/implant.jpg";
import braces from "../assets/braces.jpg";
import cosmetic from "../assets/dentistry2.jpg";
import implant2 from "../assets/implants.jpg";
import veneers from "../assets/veeners.jpg";
import denture from "../assets/dentures.jpg";
import smile from "../assets/smile.jpg";
import extraction from "../assets/extraction.jpg";
import teeth from "../assets/teeth.png";
import canal from "../assets/canal.png";
import cosmetic2 from "../assets/dentistry.jpg";
import implant from "../assets/implant.jpg";

const TreatmentsSection = () => {
  const treatments = [
    { name: "Crowns and Bridges", image: crowns },
    { name: "Dental Implants", image: implants },
    { name: "Braces and Aligners", image: braces },
    { name: "Cosmetic Dentistry", image: cosmetic },
    { name: "Immediate Implant", image: implant2 },
    { name: "Veneers", image: veneers },
    { name: "Digital Denture", image: teeth },
    { name: "Smile Makeup", image: smile },
    { name: "Extraction", image: extraction },
    { name: "Dentures", image: denture },
    { name: "Root Canal Treatment", image: canal },
    { name: "Cosmetic Dentistry", image: cosmetic2 },
    { name: "Immediate Implant", image: implant },
    { name: "Tooth Extraction", image: extraction },
  ];

  const VIEWPORT_SIZE = 8;
  const total = treatments.length;
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  // Check for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mod = useCallback((n) => ((n % total) + total) % total, [total]);
  const next = useCallback(() => setStartIndex((s) => mod(s + 1)), [mod]);
  const prev = useCallback(() => setStartIndex((s) => mod(s - 1)), [mod]);

  // Autoplay (desktop only)
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isMobile) {
      intervalRef.current = setInterval(() => {
        if (!isPaused) next();
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next, isMobile]);

  const viewport = Array.from({ length: Math.min(VIEWPORT_SIZE, total) }).map((_, i) => {
    const idx = mod(startIndex + i);
    return { ...treatments[idx], _idx: idx };
  });

  // Swipe handlers (mobile only)
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackMouse: false,
  });

  return (
    <section className="bg-gray-50 py-16 text-center">
      <div className="max-w-6xl mx-auto px-6 mb-6 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 md:mb-0">
          Our Specialised Treatments
        </h2>

        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="px-5 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       text-gray-700 font-semibold transform transition-all duration-300 ease-out 
                       hover:scale-110 hover:bg-blue-50 hover:shadow-lg hover:border-blue-400 
                       active:scale-95 active:shadow-sm focus:ring-2 focus:ring-blue-300"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-5 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
                       text-gray-700 font-semibold transform transition-all duration-300 ease-out 
                       hover:scale-110 hover:bg-blue-50 hover:shadow-lg hover:border-blue-400 
                       active:scale-95 active:shadow-sm focus:ring-2 focus:ring-blue-300"
          >
            Next
          </button>
        </div>
      </div>

      <div
        {...(isMobile ? swipeHandlers : {})}
        className="max-w-6xl mx-auto px-6 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`grid gap-6 ${
            isMobile ? "grid-cols-2" : "grid-cols-4"
          }`}
        >
          {viewport.map((item) => (
            <Motion.div
              key={item._idx}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 object-cover rounded-lg mb-3"
              />
              <h3 className="text-md md:text-lg font-semibold text-blue-800">{item.name}</h3>
            </Motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition">
          GET A PERSONALIZED TREATMENT PLAN
        </button>
      </div>
    </section>
  );
};

export default TreatmentsSection;
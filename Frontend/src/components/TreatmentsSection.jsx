import React, { useState, useEffect, useRef, useCallback } from "react";
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
    { name: "Digital Denture", image: teeth},
    { name: "Smile Makeup", image: smile },
     { name: "Extraction", image: extraction },
      { name: "Dentures", image: denture },
    { name: "Root Canal Treatment", image: canal },
    { name: "Cosmetic Dentistry", image: cosmetic2 },
    { name: "Immediate Implant", image: implant },
     { name: "Tooth Extraction", image: extraction },
  ];

  // Carousel config
  const VIEWPORT_SIZE = 8; // 2 rows x 4 columns
  const total = treatments.length;
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const mod = useCallback((n) => ((n % total) + total) % total, [total]);
  const next = () => setStartIndex((s) => mod(s + 1));
  const prev = () => setStartIndex((s) => mod(s - 1));

  useEffect(() => {
    // clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) setStartIndex((s) => mod(s + 1));
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, total, mod]);

  // Build viewport items
  const viewport = Array.from({ length: Math.min(VIEWPORT_SIZE, total) }).map((_, i) => {
    const idx = mod(startIndex + i);
    return { ...treatments[idx], _idx: idx };
  });

  return (
    <section className="bg-gray-50 py-16 text-center">
      <div className="max-w-6xl mx-auto px-6 mb-6 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-green-600">Our Specialised Treatments</h2>
    
         <div className="flex justify-center gap-4 mt-8">
  <button
    onClick={prev}
    className="px-5 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
               text-gray-700 font-semibold
               transform transition-all duration-300 ease-out 
               hover:scale-110 hover:bg-blue-50 hover:shadow-lg hover:border-blue-400 
               active:scale-95 active:shadow-sm focus:ring-2 focus:ring-blue-300"
  >
    Prev
  </button>

  <button
    onClick={next}
    className="px-5 py-2 bg-white border border-gray-300 rounded-lg shadow-sm 
               text-gray-700 font-semibold
               transform transition-all duration-300 ease-out 
               hover:scale-110 hover:bg-blue-50 hover:shadow-lg hover:border-blue-400 
               active:scale-95 active:shadow-sm focus:ring-2 focus:ring-blue-300"
  >
    Next
  </button>
</div>   
      </div>

      <div
        className="max-w-6xl mx-auto px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-4 gap-6">
          {viewport.map((item) => (
            <div key={item._idx} className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition">
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-lg mb-3" />
              <h3 className="text-lg font-semibold text-blue-800">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition">GET A PERSONALIZED TREATMENT PLAN</button>
      </div>
    </section>
  );
};

export default TreatmentsSection;

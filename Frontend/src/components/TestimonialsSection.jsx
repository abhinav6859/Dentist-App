


import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-10">
        Video Testimonial
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
        {[1, 2, 3, 4].map((i) => (
          <iframe
            key={i}
            width="100%"
            height="240"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title={`Testimonial ${i}`}
            className="rounded-xl shadow"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
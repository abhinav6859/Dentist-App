import React, { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    // Load Instagram embed script (needed for rendering)
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const reels = [
    "https://www.instagram.com/reel/DQ_KXhykp3u/",
    "https://www.instagram.com/reel/DQ_KXhykp3u/",
    "https://www.instagram.com/reel/DQ_KXhykp3u/",
    "https://www.instagram.com/reel/DQ_KXhykp3u/",
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-10">
        Video Testimonial
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
        {reels.map((url, i) => (
          <blockquote
            key={i}
            className="instagram-media rounded-xl shadow"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
          ></blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('classes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Hero Section with video background
    <section id="hero" className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
          <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* dark overlay for contrast (decorative) */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-12 max-md:px-6"
        >
          <h1 className="text-6xl max-md:text-4xl font-extrabold text-white leading-tight">
            Srab Karate Art Academy
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-2xl max-md:text-lg text-white"
          >
            Train hard. Achieve greatness.
          </motion.p>

          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.03 }}
            className="inline-block mt-8 px-8 py-3 bg-red-600 text-black font-semibold rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Join a Free Class
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useReveal } from "./RevealProvider";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const reveal = useReveal();

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const start = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    try {
      // trigger reveal and scroll to classes
      reveal.revealTo("classes", start);
    } catch (err) {
      const el = document.getElementById("classes");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Hero Section with video background (mobile falls back to poster image)
    <section id="hero" className="relative h-screen max-md:h-[70vh] overflow-hidden">
      {!isMobile ? (
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
      ) : (
        // Mobile fallback: use background image for better performance and reliability
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url('/video-poster.jpg')` }}
          role="img"
          aria-label="Karate training"
        />
      )}

      {/* dark overlay for contrast (decorative) */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-12 max-md:px-4"
        >
          <h1 className="text-6xl max-md:text-3xl font-extrabold text-white leading-tight">
            SRAB Karate Arts Academy
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-2xl max-md:text-base text-white"
          >
            Train hard. Achieve greatness.
          </motion.p>

          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.03 }}
            className="inline-block mt-8 px-6 py-3 bg-sky-600 text-black font-semibold rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Join a Free Class
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

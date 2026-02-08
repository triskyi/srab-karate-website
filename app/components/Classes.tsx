"use client";

import { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";

export default function Classes() {
  const classes = [
    { name: "Beginner Karate", age: "5-10", description: "Learn the basics of karate in a fun and engaging environment." },
    { name: "Intermediate Karate", age: "11-15", description: "Build on your skills and learn advanced techniques." },
    { name: "Advanced Karate", age: "16+", description: "Master the art of karate with our expert instructors." },
  ];

  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      if (e?.detail?.target === "classes") {
        setRevealed(true);
        // optional: remove reveal state after some time so it can re-run later
        setTimeout(() => setRevealed(false), 2000);
      }
    };
    window.addEventListener("reveal:done", handler as EventListener);
    return () => window.removeEventListener("reveal:done", handler as EventListener);
  }, []);

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    // Classes Section
    <motion.section
      id="classes"
      className="px-12 py-24 bg-gray-100 max-md:px-6 max-md:py-12"
      initial="hidden"
      animate={revealed ? "visible" : "hidden"}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-4xl font-bold text-center text-black max-md:text-3xl" variants={item}>
          Our Classes
        </motion.h2>
        <motion.div className="grid gap-8 mt-8 grid-cols-3 max-md:grid-cols-1" variants={container}>
          {classes.map((cls, index) => (
            <motion.article
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              variants={item}
            >
              <h3 className="text-xl font-semibold text-red-500">{cls.name}</h3>
              <p className="mt-2 text-sm text-gray-600">Age Group: {cls.age}</p>
              <p className="mt-4 text-gray-700">{cls.description}</p>
              <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
                Book Now
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

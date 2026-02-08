"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Instructors() {
  const instructors = [
    { name: 'John Doe', bio: 'Expert in advanced karate techniques.', image: '/instructor1.jpg' },
    { name: 'Jane Smith', bio: 'Specialist in beginner and intermediate training.', image: '/instructor2.jpg' },
    { name: 'Mike Johnson', bio: 'Focuses on discipline and self-defense.', image: '/instructor3.jpg' },
  ];

  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const containerY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.instr-card').forEach((el: any, i: number) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    // Instructors Section with subtle scroll-linked motion
    <section id="instructors" ref={ref} className="px-12 py-24 bg-white max-md:px-6 max-md:py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black max-md:text-3xl">Meet Our Instructors</h2>
        <motion.div style={{ y: containerY }} className="flex gap-6 mt-8 overflow-x-auto py-4">
          {instructors.map((inst, index) => (
            <motion.article
              key={index}
              className="instr-card flex-shrink-0 w-64 p-6 bg-gray-100 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <img src={inst.image} alt={inst.name} className="w-full h-40 rounded-lg object-cover" />
              <h3 className="mt-4 text-xl font-semibold text-red-500">{inst.name}</h3>
              <p className="mt-2 text-gray-700">{inst.bio}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

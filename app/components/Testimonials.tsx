"use client";

import { useEffect, useState } from 'react';

const TESTIMONIALS = [
  { name: 'Alice', quote: 'This academy changed my life!', image: '/student1.jpg' },
  { name: 'Bob', quote: 'The instructors are amazing!', image: '/student2.jpg' },
  { name: 'Charlie', quote: 'I love the classes here!', image: '/student3.jpg' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    // Testimonials Section
    <section id="testimonials" className="px-12 py-24 bg-gray-100 max-md:px-6 max-md:py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black max-md:text-3xl">What Our Students Say</h2>
        <div className="relative mt-8 overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-full p-6 md:px-8">
                <div className="p-6 bg-white rounded-lg shadow-md text-center">
                  <img src={t.image} alt={t.name} className="w-16 h-16 mx-auto rounded-full" />
                  <p className="mt-4 text-lg text-gray-700">"{t.quote}"</p>
                  <h3 className="mt-2 text-xl font-semibold text-red-500">{t.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

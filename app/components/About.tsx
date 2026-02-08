"use client";

import Image from "next/image";

export default function About() {
  return (
    // About Section
    <section id="about" className="px-12 py-24 max-md:px-6 max-md:py-12 bg-white">
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-2 max-md:grid-cols-1 items-center">
        <div>
          <h2 className="text-4xl max-md:text-3xl font-bold text-black">
            About Srab Karate Art Academy
          </h2>
          <p className="mt-4 text-gray-700">
            At Srab Karate Art Academy we empower students through disciplined
            training, strong community and experienced instructors. Our classes
            focus on technique, fitness and personal growth — for children and
            adults alike.
          </p>
        </div>
        <div className="w-full h-96 max-md:h-64 relative rounded overflow-hidden">
          <Image src="/instructors.jpg" alt="Instructors" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}

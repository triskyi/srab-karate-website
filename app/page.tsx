"use client";

import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex w-full max-w-5xl flex-col items-center justify-between py-20 px-12 bg-white dark:bg-black max-md:py-12 max-md:px-6">
          <About />
          <Classes />
          <Instructors />
          <Testimonials />
          <Footer />
        </main>
      </div>
    </>
  );
}

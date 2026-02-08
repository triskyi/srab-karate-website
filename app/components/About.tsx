"use client";

import Image from "next/image";
import { useRef, useState, Fragment, useEffect } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Dialog, Transition } from '@headlessui/react';
import { CheckCircle, ShieldCheck, UserCheck } from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax values
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textX = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  const [open, setOpen] = useState(false);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: cubicBezier(0.34, 1.56, 0.64, 1),
      },
    }),
    hover: {
      rotate: 360,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={ref} className="px-12 py-24 bg-gray-10 max-md:px-6 max-md:py-12">
      <motion.div
        className="w-full grid grid-cols-2 gap-10 items-center max-md:grid-cols-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div style={{ x: textX }}>
          <motion.h2
            className="text-4xl font-extrabold text-black max-md:text-2xl"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            About Srab Karate Art Academy
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-100 leading-relaxed max-w-prose"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Srab Karate Art Academy blends traditional karate discipline with modern training
            methods to build strength, confidence, and character. Our welcoming community and
            experienced instructors help students of all ages progress at their own pace.
          </motion.p>

          <motion.ul
            className="mt-6 space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={listItemVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span
                  className="mt-1 inline-flex items-center justify-center w-10 h-10 bg-red-50 text-red-600 rounded-full border border-red-100"
                  variants={iconVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  {index === 0 && <CheckCircle size={18} />}
                  {index === 1 && <ShieldCheck size={18} />}
                  {index === 2 && <UserCheck size={18} />}
                </motion.span>
                <motion.span
                  className="text-gray-500"
                  variants={itemVariants}
                >
                  {index === 0 && "Experienced instructors with progressive curricula"}
                  {index === 1 && "Safe, inclusive classes for kids and adults"}
                  {index === 2 && "Focus on fitness, technique, and personal growth"}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 flex items-center gap-4 max-md:flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.a
              href="#classes"
              className="inline-block px-6 py-3 bg-red-600 text-black font-semibold rounded shadow hover:bg-red-700"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Classes
            </motion.a>
            <motion.button
              onClick={() => setOpen(true)}
              className="inline-block px-6 py-3 border border-gray-200 text-gray-700 rounded hover:bg-gray-50"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Schedule Visit
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg max-md:h-64"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/about.jpg"
            alt="Instructors or class"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', marginTop: '50px' }}
            sizes="(max-width:640px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* Headless UI Dialog for scheduling */}
        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Schedule a Visit
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Fill out the form and our team will contact you to confirm a time.</p>
                    </div>

                    <div className="mt-4">
                      <form className="space-y-3">
                        <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
                        <input className="w-full border rounded px-3 py-2" placeholder="Phone or email" />
                        <textarea className="w-full border rounded px-3 py-2" placeholder="Preferred time (optional)" />
                        <div className="flex justify-end">
                          <button type="button" className="px-4 py-2 mr-2 rounded bg-gray-100" onClick={() => setOpen(false)}>Cancel</button>
                          <button type="submit" className="px-4 py-2 rounded bg-red-600 text-black">Request Visit</button>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Classes", href: "#classes" },
    { label: "Contact", href: "#contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-black/10 border-b border-white/10"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="px-12 py-4 max-md:px-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-extrabold text-sky-600"
            variants={linkVariants}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            SRAB
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-white font-medium hover:text-sky-600 transition-colors duration-300"
                variants={linkVariants}
                custom={i + 1}
                initial="hidden"
                animate="visible"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-sky-600 text-black font-semibold rounded hover:bg-sky-700 transition-colors duration-300"
              variants={linkVariants}
              custom={navItems.length + 1}
              initial="hidden"
              animate="visible"
            >
              Join Now
            </motion.a>
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div className="md:hidden mt-4 pb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white font-medium hover:text-sky-600 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 bg-sky-600 text-black font-semibold rounded hover:bg-sky-700 transition-colors duration-300 text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

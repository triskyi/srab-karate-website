"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RevealContextType = {
  revealTo: (targetId?: string, start?: { x: number; y: number }) => void;
};

const RevealContext = createContext<RevealContextType | null>(null);

export const useReveal = () => {
  const ctx = useContext(RevealContext);
  if (!ctx) throw new Error("useReveal must be used within RevealProvider");
  return ctx;
};

export function RevealProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    active: boolean;
    x: number;
    y: number;
    target?: string;
  } | null>(null);

  const revealTo = (targetId?: string, start?: { x: number; y: number }) => {
    const s = start ?? { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    setState({ active: true, x: s.x, y: s.y, target: targetId });
  };

  return (
    <RevealContext.Provider value={{ revealTo }}>
      {children}

      <AnimatePresence>
        {state?.active && (
          <motion.div
            key="reveal-overlay"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 80, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              position: "fixed",
              left: state.x,
              top: state.y,
              width: 48,
              height: 48,
              borderRadius: 9999,
              background: "#38bdf8",
              transformOrigin: "center",
              pointerEvents: "none",
              zIndex: 60,
              translate: "-50% -50%",
            }}
            onAnimationComplete={() => {
              // when expanded, scroll to the target then hide after a short delay
              if (state?.target) {
                const el = document.getElementById(state.target);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                // notify listeners that reveal finished for this target
                try {
                  window.dispatchEvent(new CustomEvent("reveal:done", { detail: { target: state.target } }));
                } catch (e) {
                  // ignore
                }
              }
              // allow scroll to start, then dismiss the overlay
              setTimeout(() => setState(null), 450);
            }}
          />
        )}
      </AnimatePresence>
    </RevealContext.Provider>
  );
}

export default RevealProvider;

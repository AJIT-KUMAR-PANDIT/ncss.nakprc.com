"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0 
}) {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: "easeOut" 
      }}
      className="w-full"
    >
      {children || (
        <div className="w-full min-h-[300px] flex items-center justify-center bg-[#111115] border border-white/10 rounded-2xl p-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-white">Scroll Reveal</h3>
            <p className="text-gray-400 max-w-sm">
              This component will automatically animate into view when it enters the viewport. Perfect for landing pages and long-form content.
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

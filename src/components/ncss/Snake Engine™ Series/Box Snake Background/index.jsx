"use client";

import { motion } from "framer-motion";

export default function BoxSnakeBackground({ 
  children, 
  color = "#6366f1", // Indigo 500
  backgroundColor = "#000000" 
}) {
  return (
    <div 
      className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ backgroundColor }}
    >
      {/* The glowing box border */}
      <div className="absolute inset-4 rounded-xl border border-white/5 overflow-hidden">
        
        {/* Snake Top */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] w-[30%]"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`
          }}
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Snake Right */}
        <motion.div
          className="absolute top-0 right-0 w-[2px] h-[30%]"
          style={{
            background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`
          }}
          animate={{ y: ["-100%", "400%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        
        {/* Snake Bottom */}
        <motion.div
          className="absolute bottom-0 right-0 h-[2px] w-[30%]"
          style={{
            background: `linear-gradient(270deg, transparent, ${color}, transparent)`,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`
          }}
          animate={{ x: ["400%", "-100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        
        {/* Snake Left */}
        <motion.div
          className="absolute bottom-0 left-0 w-[2px] h-[30%]"
          style={{
            background: `linear-gradient(360deg, transparent, ${color}, transparent)`,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`
          }}
          animate={{ y: ["400%", "-100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 3 }}
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center">
        {children || (
          <h2 className="text-3xl font-bold text-white tracking-widest uppercase" style={{ textShadow: `0 0 20px ${color}` }}>
            Box Snake
          </h2>
        )}
      </div>
    </div>
  );
}

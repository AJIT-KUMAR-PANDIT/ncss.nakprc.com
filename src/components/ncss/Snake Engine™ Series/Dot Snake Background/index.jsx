"use client";

import { motion } from "framer-motion";

export default function DotSnakeBackground({ 
  children, 
  color = "#ec4899", // Pink 500
  backgroundColor = "#000000" 
}) {
  return (
    <div 
      className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ backgroundColor }}
    >
      <div className="absolute inset-4 rounded-xl border border-white/5 overflow-hidden">
        
        {/* Animated Dot running along the border */}
        <motion.div
          className="absolute top-0 left-0 w-2 h-2 rounded-full blur-[1px]"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`
          }}
          animate={{ 
            x: ["0%", "calc(100cqw - 8px)", "calc(100cqw - 8px)", "0%", "0%"],
            y: ["0%", "0%", "calc(100cqh - 8px)", "calc(100cqh - 8px)", "0%"]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        />

        {/* Trail Effect */}
        <motion.div
          className="absolute top-0 left-0 w-2 h-2 rounded-full opacity-50 blur-[2px]"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`
          }}
          animate={{ 
            x: ["0%", "calc(100cqw - 8px)", "calc(100cqw - 8px)", "0%", "0%"],
            y: ["0%", "0%", "calc(100cqh - 8px)", "calc(100cqh - 8px)", "0%"]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1],
            delay: 0.1
          }}
        />

      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center" style={{ containerType: "size" }}>
        {children || (
          <h2 className="text-3xl font-bold text-white tracking-widest uppercase" style={{ textShadow: `0 0 20px ${color}` }}>
            Dot Snake
          </h2>
        )}
      </div>
    </div>
  );
}

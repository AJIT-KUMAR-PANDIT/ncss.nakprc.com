"use client";

import { motion } from "framer-motion";

export default function CircleSnakeBackground({ 
  children, 
  color = "#10b981", // Emerald 500
  backgroundColor = "#000000" 
}) {
  return (
    <div 
      className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ backgroundColor }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Circle Track */}
        <div className="relative w-64 h-64 rounded-full border border-white/5 flex items-center justify-center">
          
          {/* Rotating Snake */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, transparent 60%, ${color} 100%)`,
              maskImage: 'radial-gradient(transparent 65%, black 65%)',
              WebkitMaskImage: 'radial-gradient(transparent 65%, black 65%)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center p-4 text-center z-10 shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
            {children || (
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase" style={{ textShadow: `0 0 10px ${color}` }}>
                Circle Snake
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

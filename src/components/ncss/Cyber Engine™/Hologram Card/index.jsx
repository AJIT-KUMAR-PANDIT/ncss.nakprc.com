"use client";

import { motion } from "framer-motion";

export default function HologramCard({ children }) {
  return (
    <div className="relative group w-full max-w-sm mx-auto h-[450px] perspective-1000">
      <motion.div 
        className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-12"
      >
        {/* Hologram Box */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-900/20 border border-cyan-500/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
          
          {/* Scanline Effect */}
          <motion.div
            className="absolute inset-x-0 h-[2px] bg-cyan-300 opacity-50 blur-[1px]"
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Holographic Glitch lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 2px, rgba(0, 255, 255, 0.2) 3px, rgba(0, 255, 255, 0.2) 3px)'
          }} />

          {/* Inner Content */}
          <div className="relative z-10 text-center p-8 text-cyan-100">
            {children || (
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full border border-cyan-400/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/20 animate-pulse" />
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-2xl font-mono font-bold tracking-widest text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  USER_01
                </h3>
                <p className="text-sm font-mono opacity-70">
                  STATUS: SECURE_LINK
                  <br />
                  NODE: NX-892
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

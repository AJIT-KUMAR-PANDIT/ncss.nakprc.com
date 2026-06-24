"use client";

import { motion } from "framer-motion";

export default function AuroraBackground({ children }) {
  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl bg-black">
      {/* Aurora glow 1 */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-60 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,0) 100%)",
        }}
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "10%", "-20%", "0%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Aurora glow 2 */}
      <motion.div
        className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-50 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 50%, rgba(2,0,36,0) 100%)",
        }}
        animate={{
          x: ["0%", "-20%", "10%", "0%"],
          y: ["0%", "-10%", "20%", "0%"],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Aurora glow 3 */}
      <motion.div
        className="absolute -bottom-[20%] left-[20%] w-[70%] h-[50%] rounded-full opacity-40 blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(29,253,153,1) 0%, rgba(26,112,50,1) 50%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          x: ["0%", "15%", "-15%", "0%"],
          y: ["0%", "-20%", "10%", "0%"],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Content wrapper with glassmorphism to let the aurora shine through but readable text */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 backdrop-blur-[2px]">
        {children || (
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
              Aurora
            </h2>
            <p className="text-white/60 font-medium tracking-wide">Dynamic multi-layered gradient field.</p>
          </div>
        )}
      </div>
    </div>
  );
}

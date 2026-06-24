"use client";

import { motion } from "framer-motion";

export default function MeshGradient({ children }) {
  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl bg-[#000000]">
      {/* Base mesh gradient background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)
          `
        }}
      />
      
      {/* Animated blob 1 */}
      <motion.div
        className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full opacity-60 mix-blend-screen blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(131,58,180,0.8) 0%, rgba(253,29,29,0) 70%)",
        }}
        animate={{
          x: ["0%", "30%", "-20%", "0%"],
          y: ["0%", "20%", "30%", "0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated blob 2 */}
      <motion.div
        className="absolute w-[60%] h-[60%] top-[20%] right-[10%] rounded-full opacity-50 mix-blend-screen blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(252,176,69,0.8) 0%, rgba(253,29,29,0) 70%)",
        }}
        animate={{
          x: ["0%", "-40%", "10%", "0%"],
          y: ["0%", "30%", "-20%", "0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 backdrop-blur-[10px]">
        {children || (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-2">
              Mesh Gradient
            </h2>
            <p className="text-white/60">Fluid and immersive color mixing.</p>
          </div>
        )}
      </div>
    </div>
  );
}

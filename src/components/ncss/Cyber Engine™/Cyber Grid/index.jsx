"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CyberGrid({ className }) {
  return (
    <div className={cn("relative w-full h-[400px] overflow-hidden bg-[#050510] rounded-2xl border border-[#2a2a40]", className)}>
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00f0ff 1px, transparent 1px),
            linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          transformOrigin: 'top center'
        }}
      />
      
      {/* Animated Scanline */}
      <motion.div
        className="absolute inset-x-0 h-1 bg-[#00f0ff] opacity-50 blur-[2px]"
        animate={{
          top: ["0%", "100%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          boxShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff'
        }}
      />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050510_100%)] pointer-events-none" />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <h2 className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2" style={{ textShadow: '0 0 10px rgba(0,240,255,0.5)' }}>
          SYSTEM_ONLINE
        </h2>
        <div className="flex gap-2 text-xs font-mono text-cyan-500/70">
          <span className="animate-pulse">_</span>
          <span>INIT_SEQUENCE</span>
          <span>[OK]</span>
        </div>
      </div>
    </div>
  );
}

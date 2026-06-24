"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow({ children }) {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px glow
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[400px] bg-[#050505] rounded-2xl overflow-hidden flex flex-col items-center justify-center cursor-none border border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Target area for cursor */}
      <div className="relative z-10 p-12 text-center pointer-events-none">
        <h2 className="text-3xl font-bold text-white tracking-wider mb-2">Cursor Glow</h2>
        <p className="text-gray-400">Move your mouse around this area.</p>
      </div>

      {/* The Glow Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.5)'
        }}
      />
    </div>
  );
}

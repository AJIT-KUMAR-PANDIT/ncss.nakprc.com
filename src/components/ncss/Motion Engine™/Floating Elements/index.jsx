"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FloatingShape = ({ children, className, delay = 0, duration = 4 }) => (
  <motion.div
    className={cn("absolute", className)}
    animate={{
      y: ["0%", "-20%", "0%"],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export default function FloatingElements() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl bg-[#080808] flex items-center justify-center border border-white/10">
      
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

      <FloatingShape className="top-[20%] left-[20%]" delay={0} duration={6}>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] backdrop-blur-md opacity-80" />
      </FloatingShape>

      <FloatingShape className="top-[30%] right-[25%]" delay={1.5} duration={7}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 shadow-[0_0_30px_rgba(236,72,153,0.4)] backdrop-blur-md opacity-70" />
      </FloatingShape>

      <FloatingShape className="bottom-[20%] left-[30%]" delay={2.5} duration={5}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tl from-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-md opacity-90" style={{ transform: 'rotate(15deg)' }} />
      </FloatingShape>

      <FloatingShape className="bottom-[25%] right-[20%]" delay={0.5} duration={6.5}>
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-emerald-400 to-teal-500 shadow-[0_0_30px_rgba(52,211,153,0.4)] backdrop-blur-md opacity-60" style={{ transform: 'rotate(-10deg)' }} />
      </FloatingShape>

      <div className="relative z-10 glass px-8 py-4 rounded-full border border-white/20 shadow-2xl">
        <h2 className="text-xl font-semibold text-white tracking-wide">Floating Elements</h2>
      </div>
      
    </div>
  );
}

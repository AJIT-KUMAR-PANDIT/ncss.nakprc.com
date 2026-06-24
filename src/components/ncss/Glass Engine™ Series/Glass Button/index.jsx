"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassButton({ 
  children = "Click Me", 
  className,
  onClick
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl px-8 py-4 font-semibold text-white",
        "bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        "transition-all duration-300 hover:bg-white/20 hover:shadow-[0_4px_30px_rgba(255,255,255,0.1)]",
        className
      )}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      
      <span className="relative z-10">{children}</span>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </motion.button>
  );
}

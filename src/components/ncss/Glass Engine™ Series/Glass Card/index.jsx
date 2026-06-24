"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({ 
  children, 
  className,
  title = "Glass Card",
  subtitle = "Premium frosted glass effect"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-8 max-w-sm w-full mx-auto",
        "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {/* Glossy reflection on top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Inner ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="space-y-1 text-left">
          <h3 className="text-xl font-semibold text-white tracking-tight">{title}</h3>
          <p className="text-sm text-white/50">{subtitle}</p>
        </div>
        
        <div className="w-full h-[1px] bg-white/10 my-2" />
        
        <div className="text-white/80 font-light leading-relaxed">
          {children || (
            <p>
              This card utilizes advanced backdrop filters and multi-layered gradients to achieve 
              a premium, state-of-the-art glassmorphism aesthetic. It instantly elevates the interface.
            </p>
          )}
        </div>
        
        <button className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/5 text-white text-sm font-medium transition-all active:scale-95">
          Action Button
        </button>
      </div>
    </motion.div>
  );
}

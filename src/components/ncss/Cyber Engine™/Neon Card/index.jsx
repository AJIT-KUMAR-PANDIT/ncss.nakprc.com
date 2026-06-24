"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function NeonCard({ 
  children,
  className,
  color = "#ff00ff" // Magenta
}) {
  return (
    <div className={cn("relative group p-[2px] rounded-2xl overflow-hidden", className)}>
      
      {/* Animated Neon Border */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, ${color} 50%, transparent 60%, transparent 100%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 z-0 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, ${color} 50%, transparent 60%, transparent 100%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-full h-full bg-[#0a0a0a] rounded-2xl p-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />
        
        {children || (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Neon Edge</h3>
            <p className="text-gray-400 leading-relaxed">
              Hover over this card to activate the intense neon bloom effect. Perfect for highlighting premium tier features.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

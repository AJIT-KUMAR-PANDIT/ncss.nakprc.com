"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SnakeEngineController() {
  const [speed, setSpeed] = useState(4);
  const [color, setColor] = useState("#3b82f6"); // Blue

  const colors = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#a855f7" },
    { name: "Emerald", value: "#10b981" },
    { name: "Rose", value: "#f43f5e" },
    { name: "Amber", value: "#f59e0b" },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center rounded-2xl bg-[#0a0a0c] border border-white/5 overflow-hidden">
      
      {/* Background Snake using states */}
      <div className="absolute inset-2 rounded-xl overflow-hidden pointer-events-none">
        {/* Snake Top */}
        <motion.div
          className="absolute top-0 left-0 h-[3px] w-[40%]"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, boxShadow: `0 0 20px ${color}` }}
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        />
        {/* Snake Right */}
        <motion.div
          className="absolute top-0 right-0 w-[3px] h-[40%]"
          style={{ background: `linear-gradient(180deg, transparent, ${color}, transparent)`, boxShadow: `0 0 20px ${color}` }}
          animate={{ y: ["-100%", "300%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: speed * 0.25 }}
        />
        {/* Snake Bottom */}
        <motion.div
          className="absolute bottom-0 right-0 h-[3px] w-[40%]"
          style={{ background: `linear-gradient(270deg, transparent, ${color}, transparent)`, boxShadow: `0 0 20px ${color}` }}
          animate={{ x: ["300%", "-100%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: speed * 0.5 }}
        />
        {/* Snake Left */}
        <motion.div
          className="absolute bottom-0 left-0 w-[3px] h-[40%]"
          style={{ background: `linear-gradient(360deg, transparent, ${color}, transparent)`, boxShadow: `0 0 20px ${color}` }}
          animate={{ y: ["300%", "-100%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: speed * 0.75 }}
        />
      </div>

      {/* Control Panel */}
      <div className="relative z-10 glass-panel p-8 rounded-2xl w-[90%] max-w-sm space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-1">Snake Engine</h3>
          <p className="text-sm text-gray-400">Interactive Controller</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed Factor</span>
              <span>{speed}s</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="0.5"
              value={speed} 
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full accent-white bg-white/10 h-2 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Fast</span>
              <span>Slow</span>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            <span className="text-sm text-gray-300 block">Core Energy Color</span>
            <div className="flex gap-2">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.value)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                    color === c.value ? "border-white" : "border-transparent"
                  )}
                  style={{ backgroundColor: c.value, boxShadow: color === c.value ? `0 0 15px ${c.value}` : 'none' }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

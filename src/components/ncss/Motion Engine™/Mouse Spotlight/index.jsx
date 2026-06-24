"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MouseSpotlight({ children, className }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#09090b] border border-white/10",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* The Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 40%
            )
          `,
        }}
      />
      
      {/* Grid background for texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

      <div className="relative z-10 glass-panel px-8 py-10 rounded-2xl text-center max-w-md">
        <h3 className="text-2xl font-bold text-white mb-2">Hover over me</h3>
        <p className="text-gray-400">
          The spotlight follows your mouse cursor, revealing the texture and illuminating the edges of the card.
        </p>
      </div>
    </div>
  );
}

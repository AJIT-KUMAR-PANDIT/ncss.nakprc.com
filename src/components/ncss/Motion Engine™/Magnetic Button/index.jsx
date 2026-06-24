"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function MagneticButton({ 
  children = "Hover Me", 
  className 
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for the magnetic effect
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Magnetic pull strength (higher is stronger)
    const pull = 0.3;
    x.set((e.clientX - centerX) * pull);
    y.set((e.clientY - centerY) * pull);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="p-8 inline-block" // Safe area to catch hover before hitting button bounds
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        ref={ref}
        style={{
          x: springX,
          y: springY,
        }}
        className={cn(
          "relative px-8 py-4 rounded-full font-semibold text-white transition-colors duration-300",
          "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)]",
          isHovered && "from-blue-500 to-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.5)]",
          className
        )}
      >
        {children}
      </motion.button>
    </div>
  );
}

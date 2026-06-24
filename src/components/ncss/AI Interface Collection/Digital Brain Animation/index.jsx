"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Node = ({ x, y, delay }) => (
  <motion.circle
    cx={x}
    cy={y}
    r="4"
    fill="#8b5cf6"
    initial={{ opacity: 0.2, scale: 0.8 }}
    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
    transition={{ duration: 2, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const Connection = ({ x1, y1, x2, y2, delay }) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="#8b5cf6"
    strokeWidth="1.5"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: [0, 1, 1], opacity: [0, 0.5, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function DigitalBrainAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Manually plotted nodes to vaguely resemble a brain hemisphere
  const nodes = [
    { x: 150, y: 50 }, { x: 200, y: 40 }, { x: 250, y: 60 },
    { x: 120, y: 100 }, { x: 180, y: 90 }, { x: 230, y: 110 }, { x: 280, y: 100 },
    { x: 100, y: 160 }, { x: 160, y: 150 }, { x: 210, y: 160 }, { x: 270, y: 150 }, { x: 310, y: 140 },
    { x: 130, y: 220 }, { x: 190, y: 210 }, { x: 250, y: 220 }, { x: 290, y: 190 },
    { x: 170, y: 270 }, { x: 220, y: 260 }, { x: 260, y: 240 }
  ];

  // Random connections
  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (dist < 80) {
        connections.push({ n1: nodes[i], n2: nodes[j], delay: Math.random() * 2 });
      }
    }
  }

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-[#030303] rounded-2xl border border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <svg width="400" height="320" className="relative z-10" viewBox="0 0 400 320">
        {/* Draw connections */}
        {connections.map((conn, idx) => (
          <Connection 
            key={`conn-${idx}`} 
            x1={conn.n1.x} 
            y1={conn.n1.y} 
            x2={conn.n2.x} 
            y2={conn.n2.y} 
            delay={conn.delay} 
          />
        ))}

        {/* Draw nodes */}
        {nodes.map((n, idx) => (
          <Node key={`node-${idx}`} x={n.x} y={n.y} delay={Math.random() * 2} />
        ))}
      </svg>
      
      <div className="absolute bottom-6 left-6 z-20">
        <h3 className="text-xl font-bold text-white tracking-wide">Neural Engine</h3>
        <p className="text-sm text-violet-400">Processing nodes active...</p>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIHeroSection() {
  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#030305] border border-white/5">
      
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-500/20 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-indigo-500/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl space-y-8 mt-12">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-300"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>NCSS AI Intelligence Engine 2.0</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          Design at the speed of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Artificial Thought.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          Harness the power of the next-generation component library. 
          Build AI-native interfaces that feel alive, responsive, and truly intelligent.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            Start Building
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all border border-white/10 backdrop-blur-md">
            View Documentation
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Mesh */}
      <div className="absolute bottom-0 inset-x-0 h-[200px] bg-[url('/grid.svg')] bg-bottom bg-no-repeat opacity-30 mask-image:linear-gradient(to_top,black,transparent)" style={{ WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
    </div>
  );
}

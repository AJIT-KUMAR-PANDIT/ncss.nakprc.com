"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchBar({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Flatten components for search
  const allComponents = navigation.flatMap(cat => 
    cat.components.map(comp => ({ ...comp, category: cat.category }))
  );

  const filtered = query === "" ? [] : allComponents.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) || 
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (slug) => {
    setIsOpen(false);
    setQuery("");
    router.push(`/docs/${slug}`);
  };

  return (
    <div className="relative z-50 w-full max-w-sm" ref={containerRef}>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
      >
        <span className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          Search components...
        </span>
        <kbd className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] bg-black/30 px-1.5 py-0.5 rounded border border-white/10">
          <Command className="w-3 h-3" />K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-12 left-0 right-0 bg-[#0a0a0c] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500"
              />
              <button onClick={() => setIsOpen(false)} className="text-xs text-gray-500 hover:text-white">ESC</button>
            </div>
            
            <div className="max-h-64 overflow-y-auto p-2">
              {query === "" ? (
                <div className="p-4 text-center text-sm text-gray-500">
                  Type to search for components...
                </div>
              ) : filtered.length === 0 ? (
                <div className="p-4 text-center text-sm text-gray-500">
                  No results found for "{query}".
                </div>
              ) : (
                filtered.map((comp) => (
                  <button
                    key={comp.slug}
                    onClick={() => handleSelect(comp.slug)}
                    className="w-full text-left px-4 py-3 hover:bg-white/5 rounded-lg flex flex-col group transition-colors"
                  >
                    <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {comp.title}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {comp.category}
                    </span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

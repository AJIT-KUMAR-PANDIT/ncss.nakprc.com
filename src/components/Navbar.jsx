"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { useSidebar } from "@/lib/SidebarContext";

export default function Navbar({ navigation = [] }) {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 inset-x-0 h-16 z-50 glass border-b border-[var(--glass-border)]">
      <div className="flex items-center justify-between h-full px-6 max-w-[1600px] mx-auto">

        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-500 flex items-center justify-center font-bold text-black group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">
              NCSS <span className="text-gray-500 font-normal text-sm ml-1">by nakprc™</span>
            </span>
          </Link>
        </div>

        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <SearchBar navigation={navigation} />
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/AJIT-KUMAR-PANDIT/ncss.nakprc.com" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <div className="h-6 w-px bg-white/10 mx-2 hidden sm:block" />
          <Link href="/docs/snake-engine-series/box-snake-background" className="text-sm font-medium hover:text-cyan-400 transition-colors hidden sm:block">
            Documentation
          </Link>
        </div>

      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3 absolute top-full left-0 right-0 glass border-b border-[var(--glass-border)]">
        <SearchBar navigation={navigation} />
      </div>
    </nav>
  );
}

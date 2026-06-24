"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/lib/SidebarContext";
import { useEffect } from "react";

export default function Sidebar({ navigation }) {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebar();

  // Prevent scrolling when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 w-64 glass z-50 md:z-40 border-r border-[var(--glass-border)] pt-20 overflow-y-auto transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              NCSS
            </h2>
            <p className="text-xs font-mono text-gray-500 mt-1">by nakprc™</p>
          </div>
          
          <nav className="space-y-6">
            {navigation.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-3 text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                  {section.category}
                </h3>
                <ul className="space-y-1">
                  {section.components.map((component, compIdx) => {
                    const href = `/docs/${component.slug}`;
                    const isActive = pathname === href;

                    return (
                      <li key={compIdx}>
                        <Link
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-md transition-colors",
                            isActive 
                              ? "bg-white/10 text-white font-medium shadow-[inset_2px_0_0_0_#fff]" 
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          )}
                        >
                          {component.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

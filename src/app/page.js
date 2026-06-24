import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSidebarNavigation } from "@/lib/ncss-engine";
import { getDynamicComponent } from "@/lib/registry";

export default function Home() {
  const navigation = getSidebarNavigation();

  return (
    <div className="relative min-h-screen flex flex-col bg-[#050505]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-black pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(100,50,255,0.15)_0%,transparent_50%)] pointer-events-none" />
      
      {/* Hero Section */}
      <main className="relative z-10 flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto space-y-8 min-h-screen pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          NCSS v1 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
            Rich Aesthetics.
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Dynamic Design.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          The ultimate premium component library for React and Tailwind CSS.
          Built for developers who want to wow their users.
        </p>

        <div className="flex items-center justify-center gap-4 pt-8">
          <Link
            href="/docs/snake-engine™-series/box-snake-background"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            Explore Components
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>

      {/* Component Grid Showcase */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Collection</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Browse the full library of premium, ready-to-use components. Click on any tile to view its source code and documentation.</p>
        </div>

        <div className="space-y-24">
          {navigation.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.components.map((comp) => {
                  const ComponentPreview = getDynamicComponent(comp.rawCategory, comp.rawTitle);

                  return (
                    <Link href={`/docs/${comp.slug}`} key={comp.slug} className="group flex flex-col gap-3">
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0d0d12] border border-white/5 group-hover:border-purple-500/50 transition-all duration-300">
                        {/* Scaled down preview wrapper */}
                        <div className="absolute inset-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                          <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}>
                            {ComponentPreview ? <ComponentPreview /> : <div className="p-8 text-gray-500">Preview not found</div>}
                          </div>
                        </div>
                        {/* Overlay to catch clicks and prevent interaction with preview */}
                        <div className="absolute inset-0 z-10 hover:bg-white/[0.02] transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-200 group-hover:text-purple-400 transition-colors">{comp.title}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

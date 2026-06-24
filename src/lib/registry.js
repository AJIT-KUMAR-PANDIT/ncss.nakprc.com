import dynamic from "next/dynamic";

const Loader = () => <div className="h-64 flex items-center justify-center text-gray-500 animate-pulse glass rounded-xl">Loading preview...</div>;

export const registry = {
  "snake-engine™-series/box-snake-background": dynamic(() => import("@/components/ncss/Snake Engine™ Series/Box Snake Background/index.jsx"), { loading: Loader }),
  "snake-engine™-series/dot-snake-background": dynamic(() => import("@/components/ncss/Snake Engine™ Series/Dot Snake Background/index.jsx"), { loading: Loader }),
  "snake-engine™-series/circle-snake-background": dynamic(() => import("@/components/ncss/Snake Engine™ Series/Circle Snake Background/index.jsx"), { loading: Loader }),
  "snake-engine™-series/snake-engine-controller": dynamic(() => import("@/components/ncss/Snake Engine™ Series/Snake Engine Controller/index.jsx"), { loading: Loader }),
  "aurora-&-gradient-engine/aurora-background": dynamic(() => import("@/components/ncss/Aurora & Gradient Engine/Aurora Background/index.jsx"), { loading: Loader }),
  "aurora-&-gradient-engine/mesh-gradient": dynamic(() => import("@/components/ncss/Aurora & Gradient Engine/Mesh Gradient/index.jsx"), { loading: Loader }),
  "glass-engine™-series/glass-card": dynamic(() => import("@/components/ncss/Glass Engine™ Series/Glass Card/index.jsx"), { loading: Loader }),
  "glass-engine™-series/glass-button": dynamic(() => import("@/components/ncss/Glass Engine™ Series/Glass Button/index.jsx"), { loading: Loader }),
  "motion-engine™/magnetic-button": dynamic(() => import("@/components/ncss/Motion Engine™/Magnetic Button/index.jsx"), { loading: Loader }),
  "motion-engine™/cursor-glow": dynamic(() => import("@/components/ncss/Motion Engine™/Cursor Glow/index.jsx"), { loading: Loader }),
  "motion-engine™/floating-elements": dynamic(() => import("@/components/ncss/Motion Engine™/Floating Elements/index.jsx"), { loading: Loader }),
  "motion-engine™/mouse-spotlight": dynamic(() => import("@/components/ncss/Motion Engine™/Mouse Spotlight/index.jsx"), { loading: Loader }),
  "motion-engine™/scroll-reveal": dynamic(() => import("@/components/ncss/Motion Engine™/Scroll Reveal/index.jsx"), { loading: Loader }),
  "particle-engine™/particle-background": dynamic(() => import("@/components/ncss/Particle Engine™/Particle Background/index.jsx"), { loading: Loader }),
  "cyber-engine™/cyber-grid": dynamic(() => import("@/components/ncss/Cyber Engine™/Cyber Grid/index.jsx"), { loading: Loader }),
  "cyber-engine™/neon-card": dynamic(() => import("@/components/ncss/Cyber Engine™/Neon Card/index.jsx"), { loading: Loader }),
  "cyber-engine™/hologram-card": dynamic(() => import("@/components/ncss/Cyber Engine™/Hologram Card/index.jsx"), { loading: Loader }),
  "ai-interface-collection/ai-hero-section": dynamic(() => import("@/components/ncss/AI Interface Collection/AI Hero Section/index.jsx"), { loading: Loader }),
  "ai-interface-collection/digital-brain-animation": dynamic(() => import("@/components/ncss/AI Interface Collection/Digital Brain Animation/index.jsx"), { loading: Loader }),
  "hero-section-collection/interactive-3d-hero": dynamic(() => import("@/components/ncss/Hero Section Collection/Interactive 3D Hero/index.jsx"), { loading: Loader }),
};

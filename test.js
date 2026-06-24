const fs = require('fs');
const path = require('path');

const COMPONENT_DIR = path.join(process.cwd(), "src/components/ncss");

function getSidebarNavigation() {
  if (!fs.existsSync(COMPONENT_DIR)) {
    return [];
  }

  const categories = fs.readdirSync(COMPONENT_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const navigation = categories.map((category) => {
    const categoryPath = path.join(COMPONENT_DIR, category);
    const components = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => {
        const title = dirent.name;
        // slug format: category-slug/component-slug
        const categorySlug = encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"));
        const componentSlug = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
        
        return {
          title,
          slug: `${categorySlug}/${componentSlug}`,
          rawCategory: category,
          rawTitle: title,
        };
      });

    return {
      category,
      components,
    };
  });

  return navigation;
}

const nav = getSidebarNavigation();

const registryKeys = [
  "snake-engine™-series/box-snake-background",
  "snake-engine™-series/dot-snake-background",
  "snake-engine™-series/circle-snake-background",
  "snake-engine™-series/snake-engine-controller",
  "aurora-&-gradient-engine/aurora-background",
  "aurora-&-gradient-engine/mesh-gradient",
  "glass-engine™-series/glass-card",
  "glass-engine™-series/glass-button",
  "motion-engine™/magnetic-button",
  "motion-engine™/cursor-glow",
  "motion-engine™/mouse-spotlight",
  "motion-engine™/scroll-reveal",
  "particle-engine™/particle-background",
  "cyber-engine™/cyber-grid",
  "cyber-engine™/neon-card",
  "cyber-engine™/hologram-card",
  "ai-interface-collection/ai-hero-section",
  "ai-interface-collection/digital-brain-animation",
  "hero-section-collection/interactive-3d-hero",
];

nav.forEach(cat => {
  cat.components.forEach(comp => {
    const parts = comp.slug.split('/');
    const categorySlug = parts[0];
    const componentSlug = parts[1];
    
    const decodedCategorySlug = decodeURIComponent(categorySlug);
    const decodedComponentSlug = decodeURIComponent(componentSlug);
    const registryKey = `${decodedCategorySlug}/${decodedComponentSlug}`;
    
    const exists = registryKeys.includes(registryKey);
    console.log(`- ${comp.slug} -> decoded to ${registryKey} -> exists? ${exists}`);
    
    if (!exists) {
      console.log(`   [!] Missing. Looking for: "${registryKey}"`);
    }
  });
});

import fs from "fs";
import path from "path";

const COMPONENT_DIR = path.join(process.cwd(), "src/components/ncss");

/**
 * Gets the sidebar structure by reading the component directory.
 * @returns {Array<{ category: string, components: Array<{ title: string, slug: string }> }>}
 */
export function getSidebarNavigation() {
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

/**
 * Finds a component's real file paths based on its URL slug.
 */
export function getComponentDetails(categorySlug, componentSlug) {
  const nav = getSidebarNavigation();
  
  let targetCategory = null;
  let targetComponent = null;

  for (const cat of nav) {
    for (const comp of cat.components) {
      if (comp.slug === `${categorySlug}/${componentSlug}`) {
        targetCategory = cat.category;
        targetComponent = comp.rawTitle;
        break;
      }
    }
  }

  if (!targetCategory || !targetComponent) {
    return null;
  }

  const componentFolder = path.join(COMPONENT_DIR, targetCategory, targetComponent);
  
  // Try to find index.jsx or index.js
  let sourceFilePath = path.join(componentFolder, "index.jsx");
  if (!fs.existsSync(sourceFilePath)) {
    sourceFilePath = path.join(componentFolder, "index.js");
  }

  let sourceCode = "";
  if (fs.existsSync(sourceFilePath)) {
    sourceCode = fs.readFileSync(sourceFilePath, "utf8");
  } else {
    sourceCode = "// Component source not found";
  }

  return {
    category: targetCategory,
    title: targetComponent,
    sourceCode,
    componentFolder
  };
}

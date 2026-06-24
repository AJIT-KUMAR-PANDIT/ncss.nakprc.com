import navigationData from "./navigation.json";

/**
 * Gets the sidebar structure from the pre-generated navigation.json.
 * @returns {Array<{ category: string, components: Array<{ title: string, slug: string }> }>}
 */
export function getSidebarNavigation() {
  return navigationData || [];
}

/**
 * Finds a component's real details based on its URL slug.
 */
export function getComponentDetails(categorySlug, componentSlug) {
  const nav = getSidebarNavigation();
  
  let targetCategory = null;
  let targetComponent = null;
  let targetSourceCode = null;

  for (const cat of nav) {
    for (const comp of cat.components) {
      if (comp.slug === `${categorySlug}/${componentSlug}`) {
        targetCategory = cat.category;
        targetComponent = comp.rawTitle;
        targetSourceCode = comp.sourceCode;
        break;
      }
    }
  }

  if (!targetCategory || !targetComponent) {
    return null;
  }

  return {
    category: targetCategory,
    title: targetComponent,
    sourceCode: targetSourceCode || "// Component source not found",
  };
}

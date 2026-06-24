import dynamic from "next/dynamic";

const Loader = () => <div className="h-64 flex items-center justify-center text-gray-500 animate-pulse glass rounded-xl">Loading preview...</div>;

/**
 * Automatically imports any component dynamically from the NCSS directory.
 * Webpack will create a context module for the entire ncss directory, allowing
 * any new component to be rendered automatically without manual registry updates.
 */
export function getDynamicComponent(rawCategory, rawTitle) {
  return dynamic(() => import(`@/components/ncss/${rawCategory}/${rawTitle}/index.jsx`), { 
    loading: Loader 
  });
}

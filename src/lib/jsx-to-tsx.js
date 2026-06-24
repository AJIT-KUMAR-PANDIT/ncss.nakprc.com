/**
 * A basic utility to auto-generate TSX from JSX for presentation purposes.
 * It uses simple regex to inject basic React types into component definitions.
 */
export function generateTsxFromJsx(jsxCode) {
  if (!jsxCode) return "";

  let tsxCode = jsxCode;

  // 1. Add ReactNode import if not present
  if (!tsxCode.includes("import { ReactNode }") && !tsxCode.includes("import React")) {
    tsxCode = `import type { ReactNode } from "react";\n${tsxCode}`;
  }

  // 2. Find component function signatures and inject basic types
  // This matches: export default function ComponentName({ children, ...props }) {
  const componentRegex = /export\s+default\s+function\s+([A-Za-z0-9_]+)\s*\(\s*\{([^}]+)\}\s*\)/g;
  
  tsxCode = tsxCode.replace(componentRegex, (match, componentName, propsString) => {
    // Basic heuristics to determine prop types
    const props = propsString.split(',').map(p => p.split('=')[0].trim()).filter(Boolean);
    
    const typeDefinitions = props.map(prop => {
      if (prop === 'children') return 'children?: ReactNode';
      if (prop === 'className') return 'className?: string';
      if (prop === 'onClick') return 'onClick?: () => void';
      if (prop.toLowerCase().includes('color')) return `${prop}?: string`;
      if (prop.toLowerCase().includes('speed') || prop.toLowerCase().includes('duration') || prop.toLowerCase().includes('delay')) return `${prop}?: number`;
      return `${prop}?: any`;
    });

    const typeString = typeDefinitions.join('; ');
    
    return `export default function ${componentName}({ ${propsString} }: { ${typeString} })`;
  });

  return tsxCode;
}

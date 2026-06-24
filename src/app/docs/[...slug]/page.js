import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { getComponentDetails, getSidebarNavigation } from "@/lib/ncss-engine";
import CodeBlock from "@/components/CodeBlock";
import { registry } from "@/lib/registry";

// Generate static params for all components
export function generateStaticParams() {
  const nav = getSidebarNavigation();
  const params = [];
  
  nav.forEach((category) => {
    category.components.forEach((component) => {
      params.push({ slug: component.slug.split("/") });
    });
  });
  
  return params;
}

export default async function ComponentPage({ params }) {
  // In Next.js 15, params must be awaited
  const { slug } = await params;
  
  if (!slug || slug.length !== 2) {
    notFound();
  }

  const [categorySlug, componentSlug] = slug;
  const details = getComponentDetails(categorySlug, componentSlug);

  if (!details) {
    notFound();
  }

  const decodedCategorySlug = decodeURIComponent(categorySlug);
  const decodedComponentSlug = decodeURIComponent(componentSlug);
  const registryKey = `${decodedCategorySlug}/${decodedComponentSlug}`;
  
  console.log("Looking for key:", registryKey);
  console.log("Available keys:", Object.keys(registry));

  const ComponentPreview = registry[registryKey] || (() => <div className="text-red-500">Component preview not found in registry.</div>);

  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
          <span>NCSS</span>
          <span>/</span>
          <span>{details.category}</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {details.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          A premium, high-performance UI component built with Tailwind CSS and React.
        </p>
      </header>

      {/* Component Preview Area */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          Preview
        </h2>
        <div className="relative min-h-[400px] rounded-2xl border border-[var(--glass-border)] glass-panel overflow-hidden flex items-center justify-center p-8 bg-[url('/grid.svg')] bg-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <ComponentPreview />
          </div>
        </div>
      </section>

      {/* Installation Command */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <p className="text-sm text-gray-400 mb-2">
          Add the required dependencies if you haven't already:
        </p>
        <CodeBlock code={`npm install framer-motion clsx tailwind-merge`} />
        
        <p className="text-sm text-gray-400 mt-4 mb-2">
          Copy and paste the following code into your project:
        </p>
        <CodeBlock code={details.sourceCode} />
      </section>
    </div>
  );
}

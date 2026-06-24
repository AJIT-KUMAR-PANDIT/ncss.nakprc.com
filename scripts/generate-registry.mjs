import fs from "fs";
import path from "path";

const COMPONENT_DIR = path.join(process.cwd(), "src/components/ncss");
const OUTPUT_FILE = path.join(process.cwd(), "src/lib/navigation.json");

function generateRegistry() {
  console.log("Generating NCSS Component Registry...");
  
  if (!fs.existsSync(COMPONENT_DIR)) {
    console.warn("Component directory not found:", COMPONENT_DIR);
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([]));
    return;
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
        const categorySlug = encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"));
        const componentSlug = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
        
        const componentFolder = path.join(categoryPath, title);
        let sourceCode = "// Component source not found";
        
        let sourceFilePath = path.join(componentFolder, "index.jsx");
        if (!fs.existsSync(sourceFilePath)) {
          sourceFilePath = path.join(componentFolder, "index.js");
        }

        if (fs.existsSync(sourceFilePath)) {
          sourceCode = fs.readFileSync(sourceFilePath, "utf8");
        }
        
        return {
          title,
          slug: `${categorySlug}/${componentSlug}`,
          rawCategory: category,
          rawTitle: title,
          sourceCode
        };
      });

    return {
      category,
      components,
    };
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(navigation, null, 2));
  console.log("Registry successfully generated to src/lib/navigation.json");
}

generateRegistry();

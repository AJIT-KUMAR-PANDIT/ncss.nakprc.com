import Sidebar from "@/components/Sidebar";
import { getSidebarNavigation } from "@/lib/ncss-engine";

export default function DocsLayout({ children }) {
  const navigation = getSidebarNavigation();

  return (
    <div className="min-h-screen">
      <Sidebar navigation={navigation} />
      <div className="md:pl-64 pt-16">
        <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

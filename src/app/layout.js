import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { getSidebarNavigation } from "@/lib/ncss-engine";
import { SidebarProvider } from "@/lib/SidebarContext";

export const metadata = {
  title: "NCSS by nakprc™ | Premium Components",
  description: "A premium React and CSS component library by nakprc™",
};

export default function RootLayout({ children }) {
  const navigation = getSidebarNavigation();

  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-white selection:bg-purple-500/30 flex flex-col min-h-screen">
        <SidebarProvider>
          <Navbar navigation={navigation} />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}

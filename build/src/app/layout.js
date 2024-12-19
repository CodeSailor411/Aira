"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import "./globals.css"; // Import Tailwind and global styles

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Check if the current route is /dashboard or its subroutes
  const isDashboard = pathname.startsWith("/pages/dashboard"); // Adjusted path

  return (
    <html lang="en">
      <body>
        {/* Conditionally render Navbar: Only hide it on /dashboard */}
        {!isDashboard && <Navbar />}
        <main>{children}</main>
        {/* Conditionally render Footer: Only hide it on /dashboard */}
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}

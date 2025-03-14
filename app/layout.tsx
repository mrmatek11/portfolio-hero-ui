import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            {/* Tło z głęboką czernią */}
            <div className="fixed inset-0 bg-black z-0"></div>
            
            {/* Rozmyte poświaty w stylu Apple */}
            <div className="fixed top-1/4 -left-20 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
            <div className="fixed top-2/3 left-1/3 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
            <div className="fixed top-1/6 right-1/6 w-72 h-72 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
            <div className="fixed bottom-1/4 right-10 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-6000"></div>
            
            {/* Efekt szumu (noise) dla tekstury */}
            <div className="fixed inset-0 bg-noise opacity-5 z-1"></div>
            
            {/* Subtelny gradient na górze */}
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-1"></div>
            
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow relative z-10 backdrop-blur-sm bg-black/5">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 relative z-10 backdrop-blur-sm bg-black/5">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-gray-400">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
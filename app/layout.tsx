import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wanderlux.example"),
  title: { template: "%s | WanderLux Travel", default: "WanderLux Travel — Find your somewhere" },
  description: "Thoughtful, tailor-made holiday packages to the world's most memorable places. Find your somewhere with WanderLux Travel.",
  keywords: ["holiday packages", "tailor-made travel", "luxury travel", "travel destinations", "WanderLux"],
  openGraph: { type: "website", siteName: "WanderLux Travel", title: "WanderLux Travel — Find your somewhere", description: "Thoughtful journeys, shaped around you.", images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "WanderLux Travel" }] },
  twitter: { card: "summary_large_image", title: "WanderLux Travel", description: "Thoughtful journeys, shaped around you.", images: ["/og-image.svg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${playfair.variable} ${inter.variable}`}><body className="font-body antialiased"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3">Skip to content</a><Navbar/><main id="main-content">{children}</main><Footer/></body></html>;
}

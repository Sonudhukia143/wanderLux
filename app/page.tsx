import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Thoughtful Holidays & Tailor-Made Trips",
  description: "Discover personal, thoughtfully designed holiday packages from the Amalfi Coast to Kyoto. Your next chapter starts with WanderLux.",
};

export default function Home() {
  return <><HeroSection/><AboutSection/><FeaturesSection/><PackagesSection/><ContactSection/></>;
}

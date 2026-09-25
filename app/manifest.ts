import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WanderLux Travel",
    short_name: "WanderLux",
    description: "Thoughtful journeys, shaped around you.",
    start_url: "/",
    display: "browser",
    background_color: "#F8FAFC",
    theme_color: "#0D3B4E",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

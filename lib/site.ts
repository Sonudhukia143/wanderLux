const fallbackSiteUrl = "https://wanderlux.vercel.app";

function normalizeSiteUrl(value: string) {
  return value.replace(/\/$/, "");
}

export const siteConfig = {
  name: "WanderLux Travel",
  description:
    "Thoughtful, tailor-made holiday packages to the world's most memorable places.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl),
  locale: "en_US",
  email: "hello@wanderlux.travel",
  phone: "+1-800-555-0198",
};

import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://lifa.vercel.app"),
  viewport: "width=device-width, initial-scale=1",
  title: {
    default: "Lifa",
    template: "%s | Lifa",
  },
  manifest: "https://lifa.vercel.app/site.webmanifest",
  applicationName: "Lifa",
  creator: "Lifa",
  authors: [
    {
      name: "Lifa",
      url: "https://lifa.vercel.app",
    },
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  description: "Web developer",

  openGraph: {
    title: "Lifa",
    description: "Web developer",
    url: new URL("https://lifa.vercel.app"),
    siteName: "Lifa",
    images: [`https://lifa.vercel.app/open-graph-image.jpg`],
    locale: "en-US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    title: "Lifa",
    creator: "@LifaSeddik",
    card: "summary_large_image",
    images: ["https://lifa.vercel.app/open-graph-image.jpg"],
  },

  keywords: [
    "web development",
    "Front end",
    "Nextjs",
    "Reactjs",
    "Developer",
    "Tailwindcss",
    "Shadcn ui",
  ],
};

export const links = {
  github: "https://github.com/Mohamed-lifa7",
  twitter: "https://twitter.com/LifaSeddik",
};

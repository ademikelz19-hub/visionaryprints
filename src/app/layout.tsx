import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visionary Prints | Creator Digital Products & Amazon KDP Studio",
  description:
    "Visionary Prints builds high-converting digital products, custom web storefronts, bestselling Amazon KDP books, and viral media funnels for creators and authors.",
  keywords: [
    "Visionary Prints",
    "Digital Products for Creators",
    "Amazon KDP Publishing",
    "Creator Storefronts",
    "Short-Form Video Editing",
    "Content Creation",
    "Roro and Dodo Tales",
    "EYE BIBLE",
    "Next.js Digital Agency",
  ],
  authors: [{ name: "Visionary Prints Team" }],
  openGraph: {
    title: "Visionary Prints | Creator Digital Products & Amazon KDP Studio",
    description:
      "Transforming creator IP and audiences into profitable digital storefronts, Amazon KDP books, and viral media engines.",
    url: "https://visionaryprints.vercel.app",
    siteName: "Visionary Prints",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionary Prints | Creator Digital Products & Amazon KDP Studio",
    description:
      "Transforming creator audiences into profitable digital storefronts, Amazon KDP publications, and viral video funnels.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-indigo-600 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

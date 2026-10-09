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
  title: "Visionary Prints | Premier Digital Agency & Publishing House",
  description:
    "Visionary Prints is a premier digital agency specializing in high-performance web development, Amazon KDP digital publishing, viral short-form video editing, and impactful content creation.",
  keywords: [
    "Visionary Prints",
    "Digital Agency",
    "Web Development",
    "Amazon KDP Publishing",
    "Short-Form Video Editing",
    "Content Creation",
    "Roro and Dodo Tales",
    "EYE BIBLE",
    "Next.js Agency",
  ],
  authors: [{ name: "Visionary Prints Team" }],
  openGraph: {
    title: "Visionary Prints | Premier Digital Agency & Publishing House",
    description:
      "Transforming ambitious concepts into world-class web applications, Amazon KDP publications, and viral video media.",
    url: "https://visionaryprints.vercel.app",
    siteName: "Visionary Prints",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionary Prints | Premier Digital Agency & Publishing House",
    description:
      "Specializing in Web Development, Amazon KDP Digital Publishing, Short-Form Video Editing, and Content Creation.",
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

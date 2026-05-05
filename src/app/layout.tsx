import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HighBeam Capital | Venture Capital",
  description: "HighBeam Capital is a venture capital firm focused on transformative technology companies.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HighBeam Capital | Venture Capital",
    description: "HighBeam Capital is a venture capital firm focused on transformative technology companies.",
    url: "https://highbeamcapital.github.io",
    siteName: "HighBeam Capital",
    images: [
      {
        url: "https://highbeamcapital.github.io/favicon.svg",
        width: 32,
        height: 32,
        alt: "HighBeam Capital favicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@highbeamcapital",
    creator: "@highbeamcapital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
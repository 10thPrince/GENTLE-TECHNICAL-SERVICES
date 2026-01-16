import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav2 from "@/components/Nav2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
    default: "Gentle Technical Services | Professional HVAC, Electrical & Maintenance",
    template: "%s | Gentle Technical Services",
  },
  description:
    "Gentle Technical Services provides professional HVAC, electrical, plumbing, and building maintenance solutions. Reliable technical services for homes and businesses.",
  keywords: [
    "Gentle Technical Services",
    "HVAC services",
    "electrical installation",
    "building maintenance",
    "technical services company",
    "plumbing services",
    "facility management",
    "Rwanda technical services",
  ],

  authors: [{ name: "Gentle Technical Services" }],
  creator: "Gentle Technical Services",
  publisher: "Gentle Technical Services",

  metadataBase: new URL("https://gentle-technical-services.vercel.app/"), // change to your real domain

  openGraph: {
    title: "Gentle Technical Services",
    description:
      "Professional HVAC, electrical and building maintenance services for residential and commercial clients.",
    url: "https://gentle-technical-services.vercel.app/",
    siteName: "Gentle Technical Services",
    images: [
      {
        url: "/public/assets/gentle-main-2.png",
        width: 1200,
        height: 630,
        alt: "Gentle Technical Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gentle Technical Services",
    description:
      "Reliable HVAC, electrical and maintenance services for homes and businesses.",
    images: ["/public/assets/gentle-main-2.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon3.ico",
  },

  alternates: {
    canonical: "https://gentle-technical-services.vercel.app/",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

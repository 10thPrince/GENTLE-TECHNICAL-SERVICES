import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Gentle Technical Services | HVAC Experts in Kigali Rwanda",
  description:
    "Learn about Gentle Technical Services, a trusted HVAC, air conditioning, ventilation and electrical solutions company in Kigali, Rwanda. Discover our mission, vision, values and customer success stories.",

  keywords: [
    "about Gentle Technical Services",
    "HVAC company Rwanda",
    "air conditioning experts Kigali",
    "technical services company Rwanda",
    "HVAC professionals Kigali",
    "ventilation and electrical services Rwanda",
  ],

  alternates: {
    canonical: "https://www.gentletechnicalservices.com/about",
  },

  openGraph: {
    title: "About Us | Gentle Technical Services Rwanda",
    description:
      "Meet Gentle Technical Services — providing professional HVAC, AC installation, ventilation and electrical engineering solutions across Kigali and Rwanda.",
    url: "https://www.gentletechnicalservices.com/about",
    siteName: "Gentle Technical Services",
    images: [
      {
        url: "/public/assets/gentle-main-2.png",
        width: 1200,
        height: 630,
        alt: "Gentle Technical Services HVAC team in Rwanda",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Gentle Technical Services Kigali Rwanda",
    description:
      "Discover the team, mission and expertise behind Gentle Technical Services, Rwanda’s HVAC and engineering specialists.",
    images: ["/public/assets/gentle-main-2.png"],
  },
};

export default function page() {
  return <AboutClient />;
}

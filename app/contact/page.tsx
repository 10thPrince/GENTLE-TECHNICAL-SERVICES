import type { Metadata } from "next";
import ContactDetails from "./ContactDetails";

export const metadata: Metadata = {
  title: "Contact Gentle Technical Services | HVAC & AC Experts in Kigali Rwanda",
  description:
    "Contact Gentle Technical Services for professional HVAC, air conditioning installation, maintenance, and electrical services in Kigali and across Rwanda. Call, WhatsApp, or request a quote today.",

  keywords: [
    "contact HVAC company Rwanda",
    "air conditioning Kigali contact",
    "Gentle Technical Services contact",
    "AC installation Kigali phone",
    "HVAC support Rwanda",
    "technical services Kigali",
  ],

  alternates: {
    canonical: "https://www.gentletechnicalservices.com/contact",
  },

  openGraph: {
    title: "Contact Us | Gentle Technical Services Rwanda",
    description:
      "Get in touch with Gentle Technical Services for HVAC, AC repair, ventilation and electrical services across Kigali and Rwanda.",
    url: "https://www.gentletechnicalservices.com/contact",
    siteName: "Gentle Technical Services",
    images: [
      {
        url: "/public/assets/gentle-main-2.png",
        width: 1200,
        height: 630,
        alt: "Contact Gentle Technical Services in Kigali Rwanda",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Gentle Technical Services Kigali Rwanda",
    description:
      "Request a quote or emergency HVAC service from Gentle Technical Services in Kigali and across Rwanda.",
    images: ["//public/assets/gentle-main-2.png"],
  },
};

export default function ContactPage() {
  return <ContactDetails />;
}

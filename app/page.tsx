import ContactInvite from "@/components/ContactInvite";
import Hero from "@/components/Hero";
import Nav2 from "@/components/Nav2";
import Navbar from "@/components/Navbar";
import Qualities from "@/components/Qualities";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-w-fit flex flex-col bg-secondary dark:bg-background-dark  mx-auto">
      <Hero /> 
      <Qualities />
      <Services />
      <Testimonials />
      <ContactInvite />
    </div>
  );
}

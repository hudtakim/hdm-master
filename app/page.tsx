import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <CTA />
    </main>
  );
}
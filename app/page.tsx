import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Workflow from "@/components/sections/Workflow";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Workflow />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

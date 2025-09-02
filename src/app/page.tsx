import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Walkthrough from "@/components/sections/Walkthrough";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Walkthrough />
      <Footer />
    </div>
  );
}

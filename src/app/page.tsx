import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Blog from "@/components/Blog";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Header />
      <Hero />
      <About />
      <Works />
      <Blog />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

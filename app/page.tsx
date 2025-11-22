import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Latest from "@/components/Latest";
import Gallery from "@/components/Gallery";
import Others from "./../components/Others";

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Latest />
      <Gallery />
      <Others />
    </>
  );
}

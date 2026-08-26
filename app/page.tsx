import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Intelligence from "@/components/Intelligence";
import Integrations from "@/components/Integrations";
import AISolutions from "@/components/AISolutions";
import WhyOctolabs from "@/components/WhyOctolabs";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Process />
        <Intelligence />
        <Integrations />
        <AISolutions />
        <WhyOctolabs />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

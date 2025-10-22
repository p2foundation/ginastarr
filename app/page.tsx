import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <ProjectsCarousel />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

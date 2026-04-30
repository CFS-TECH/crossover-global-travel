import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import DestinationGrid from "@/components/DestinationGrid/DestinationGrid";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import LeadSection from "@/components/LeadSection/LeadSection";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <DestinationGrid />
      <WhyChooseUs />
      <Testimonials />
      <LeadSection />
    </main>
  );
}

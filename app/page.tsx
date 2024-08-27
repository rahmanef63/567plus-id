import HeroSection from "@/components/section/HeroSection";
import LocationSection from "@/components/section/LocationSection";
import { ServiceOverview } from "@/components/section/ServicesSection";
import { TestimonialsSection } from "@/components/section/Testimonials";


export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-full justify-center mx-auto  ">
        <HeroSection />
        <ServiceOverview />
        <LocationSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}

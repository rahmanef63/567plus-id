import HeroSection from "@/components/home/HeroSection";
import { ServiecOverview } from "@/components/home/ServicesOverview";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-full justify-center mx-auto  ">
        <HeroSection />
        <ServiecOverview />
      </div>
    </main>
  );
}

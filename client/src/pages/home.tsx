import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import StatsSection from "@/components/sections/stats";
import LeadMagnetSection from "@/components/sections/lead-magnet";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="pt-8">
        <FeaturesSection />
        <StatsSection />
        <LeadMagnetSection />
      </div>
    </div>
  );
}

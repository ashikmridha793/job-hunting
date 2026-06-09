import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import JobsSection from "@/components/JobsSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <StatsSection />
      <JobsSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}

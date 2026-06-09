import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import WhoIAmSection from "@/components/WhoIAmSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ToolsSection from "@/components/ToolsSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import HowIWorkSection from "@/components/HowIWorkSection";
import ContactCTA from "@/components/ContactCTA";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0B1220]">
      <FloatingNav />

      <main>
        <HeroSection />

        <WhoIAmSection />
        <CapabilitiesSection />
        <ToolsSection />
        <SelectedWorkSection />
        <ProfessionalJourney />
        <HowIWorkSection />
        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  );
}

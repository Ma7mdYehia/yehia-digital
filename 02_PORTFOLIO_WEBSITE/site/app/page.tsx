import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import ProofStrip from "@/components/ProofStrip";
import AboutSnapshot from "@/components/AboutSnapshot";
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

        <div className="px-6 lg:pl-24 lg:pr-16">
          <div className="max-w-6xl mx-auto h-px bg-white/[0.06]" />
        </div>

        <ProofStrip />
        <AboutSnapshot />
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

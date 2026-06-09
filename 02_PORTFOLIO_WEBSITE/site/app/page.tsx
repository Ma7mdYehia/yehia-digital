import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import ProofStrip from "@/components/ProofStrip";
import AboutSnapshot from "@/components/AboutSnapshot";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ToolsSection from "@/components/ToolsSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import HowIWorkSection from "@/components/HowIWorkSection";
import SectionPlaceholder from "@/components/SectionPlaceholder";
import { placeholderSections } from "@/content/homepage";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0B1220]">
      <FloatingNav />

      <main>
        <HeroSection />

        {/* Divider */}
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

        {placeholderSections.map((s) => (
          <SectionPlaceholder key={s.id} id={s.id} label={s.label} />
        ))}
      </main>

      <footer className="px-6 lg:pl-24 lg:pr-16 py-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-[#94A3B8]/40 text-center">
            © Mohamed Yehia · Growth Marketing, E-commerce &amp; AI Transformation · UAE · KSA · Egypt
          </p>
        </div>
      </footer>
    </div>
  );
}

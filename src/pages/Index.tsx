import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickServices from "@/components/QuickServices";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import HowItWorks from "@/components/HowItWorks";
import EmergencyBanner from "@/components/EmergencyBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import TreatmentPackages from "@/components/Treatmentpackages";
import SurgicalProcedures from "@/components/Surgicalprocedure";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <QuickServices />
    <AboutSection />
    <ServicesGrid />
    <SpecialtiesSection />
    <TreatmentPackages/>
    <SurgicalProcedures/>
    {/* <PricingSection /> */}
    <TeamSection />
    <HowItWorks />
    <EmergencyBanner />
    <ContactSection />
    <Footer />
    <WhatsAppFAB />
  </div>
);

export default Index;

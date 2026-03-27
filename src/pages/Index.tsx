import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickServices from "@/components/QuickServices";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import EmergencyBanner from "@/components/EmergencyBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <QuickServices />
    <AboutSection />
    <ServicesGrid />
    <HowItWorks />
    <EmergencyBanner />
    <ContactSection />
    <Footer />
    <WhatsAppFAB />
  </div>
);

export default Index;

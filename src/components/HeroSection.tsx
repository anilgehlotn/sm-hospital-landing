import { Phone, MessageCircle } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.png";

const WHATSAPP_NUMBER = "918431193373";
const WHATSAPP_MSG = encodeURIComponent("Hello, I want to book an appointment at SM Hospital.");

const HeroSection = () => (
  <section id="home" className="relative bg-primary overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary" />
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-hero-foreground" />
    </div>

    <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
            Expert & Trusted Healthcare, Right at Your Doorstep
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
            Accessible, Affordable & Quality Care for Everyone
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-7 py-3.5 text-base font-bold text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <MessageCircle size={20} /> Book Appointment on WhatsApp
            </a>
            <a
              href="tel:+918431193373"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/40 px-7 py-3.5 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>

        <div className="relative z-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl scale-90" />
            <img
              src={heroDoctor}
              alt="SM Hospital Doctor"
              width={800}
              height={960}
              className="relative w-full max-w-md md:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 100L1440 100L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 100Z" fill="hsl(var(--background))" />
      </svg>
    </div>
  </section>
);

export default HeroSection;

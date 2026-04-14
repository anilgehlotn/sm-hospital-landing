import { Siren, Phone } from "lucide-react";

const EmergencyBanner = () => (
  <section className="bg-secondary py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-secondary-foreground/20 flex items-center justify-center animate-pulse flex-shrink-0">
          <Siren size={24} className="text-secondary-foreground" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-secondary-foreground leading-tight">
            24/7 Emergency Service Available
          </h3>
          <p className="text-secondary-foreground/80 text-xs sm:text-sm mt-0.5 sm:mt-1">
            Immediate medical attention when you need it most
          </p>
        </div>
      </div>
      <a
        href="tel:+918431193373"
        className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-secondary-foreground px-5 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-secondary hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
      >
        <Phone size={18} className="sm:w-5 sm:h-5" /> Call Emergency
      </a>
    </div>
  </section>
);

export default EmergencyBanner;

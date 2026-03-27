import { Siren, Phone } from "lucide-react";

const EmergencyBanner = () => (
  <section className="bg-secondary py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-secondary-foreground/20 flex items-center justify-center animate-pulse">
          <Siren size={28} className="text-secondary-foreground" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground">
            24/7 Emergency Service Available
          </h3>
          <p className="text-secondary-foreground/80 text-sm mt-1">
            Immediate medical attention when you need it most
          </p>
        </div>
      </div>
      <a
        href="tel:+918431193373"
        className="inline-flex items-center gap-2 rounded-xl bg-secondary-foreground px-7 py-3.5 text-base font-bold text-secondary hover:opacity-90 transition-opacity"
      >
        <Phone size={20} /> Call Emergency
      </a>
    </div>
  </section>
);

export default EmergencyBanner;

import { HeartPulse, ShieldCheck, Siren, UserCheck } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "General Medicine",
    desc: "Comprehensive primary healthcare for all age groups.",
    bg: "bg-blue-light",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    desc: "Regular health check-ups and wellness programs.",
    bg: "bg-green-light",
  },
  {
    icon: Siren,
    title: "Emergency Support",
    desc: "24/7 emergency medical assistance when you need it most.",
    bg: "bg-blue-light",
  },
  {
    icon: UserCheck,
    title: "Specialist Visits",
    desc: "Access to experienced specialists across departments.",
    bg: "bg-green-light",
  },
];

const ServicesGrid = () => (
  <section id="services" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
          Quality Healthcare Services
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          We provide a wide range of medical services to ensure your complete well-being.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className={`${s.bg} rounded-xl p-8 hover:shadow-lg transition-shadow group cursor-pointer`}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;

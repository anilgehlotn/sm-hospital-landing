import { Stethoscope, Pill, FlaskConical } from "lucide-react";

const cards = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    desc: "Expert doctors available for all your health concerns",
    bg: "bg-blue-light",
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    desc: "In-house pharmacy with affordable medicines",
    bg: "bg-green-light",
  },
  {
    icon: FlaskConical,
    title: "Lab Services",
    desc: "Accurate diagnostics with modern lab equipment",
    bg: "bg-blue-light",
  },
];

const QuickServices = () => (
  <section className="relative z-10 -mt-8 md:-mt-12 pb-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`${c.bg} rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group cursor-pointer`}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <c.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickServices;

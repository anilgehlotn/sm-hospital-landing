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
  <section className="relative z-10 -mt-8 md:-mt-12 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`${c.bg} rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow group cursor-pointer`}
          >
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <c.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickServices;

import { MessageCircle, Hospital, Stethoscope, CalendarCheck } from "lucide-react";
import consultationImg from "@/assets/doctor-consultation.jpg";

const steps = [
  { icon: MessageCircle, num: "01", title: "Book Appointment", desc: "Send a message via WhatsApp to schedule" },
  { icon: Hospital, num: "02", title: "Visit Hospital", desc: "Come in for your consultation" },
  { icon: Stethoscope, num: "03", title: "Get Treatment", desc: "Receive expert medical care" },
  { icon: CalendarCheck, num: "04", title: "Follow-Up Care", desc: "Ongoing support for your recovery" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-widest">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
          Your Journey to Better Health
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={consultationImg}
            alt="Doctor consultation"
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-5 items-start group">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={24} className="text-accent-foreground group-hover:text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs font-bold text-secondary">STEP {s.num}</span>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;

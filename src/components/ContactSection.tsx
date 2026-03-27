import { useState } from "react";
import { Send } from "lucide-react";
import contactDoctor from "@/assets/contact-doctor.jpg";

const WHATSAPP_NUMBER = "918431193373";

const serviceOptions = [
  "General Consultation",
  "Pharmacy Services",
  "Lab Services",
  "General Medicine",
  "Preventive Care",
  "Emergency Support",
  "Specialist Visit",
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello SM Hospital,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\n\nI would like to book an appointment.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Book Your Appointment
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Select Service</label>
              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Choose a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-3.5 text-base font-bold text-secondary-foreground hover:opacity-90 transition-opacity"
            >
              <Send size={18} /> Submit via WhatsApp
            </button>
          </form>
          <div className="rounded-xl overflow-hidden shadow-lg hidden md:block">
            <img
              src={contactDoctor}
              alt="SM Hospital doctors"
              loading="lazy"
              width={640}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

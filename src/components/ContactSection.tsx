// import { useState } from "react";
// import { Send } from "lucide-react";
// import contactDoctor from "@/assets/contact-doctor.jpg";

// const WHATSAPP_NUMBER = "918431193373";

// const serviceOptions = [
//   "General Consultation",
//   "Pharmacy Services",
//   "Lab Services",
//   "General Medicine",
//   "Preventive Care",
//   "Emergency Support",
//   "Specialist Visit",
// ];

// const ContactSection = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [service, setService] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const msg = encodeURIComponent(
//       `Hello SM Hospital,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\n\nI would like to book an appointment.`
//     );
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
//   };

//   return (
//     <section id="contact" className="py-20 bg-muted">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Contact Us</span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
//             Book Your Appointment
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-8 space-y-5">
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
//               <input
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
//               <input
//                 type="tel"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="+91 XXXXX XXXXX"
//                 className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">Select Service</label>
//               <select
//                 required
//                 value={service}
//                 onChange={(e) => setService(e.target.value)}
//                 className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//               >
//                 <option value="">Choose a service</option>
//                 {serviceOptions.map((s) => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-3.5 text-base font-bold text-secondary-foreground hover:opacity-90 transition-opacity"
//             >
//               <Send size={18} /> Submit via WhatsApp
//             </button>
//           </form>
//           <div className="rounded-xl overflow-hidden shadow-lg hidden md:block">
//             <img
//               src={contactDoctor}
//               alt="SM Hospital doctors"
//               loading="lazy"
//               width={640}
//               height={800}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
import { useState } from "react";
import contactDoctor from "@/assets/contact-doctor.jpg";

const WHATSAPP_NUMBER = "918431193373";

const serviceOptions = [
  "General Consultation",
  "Pharmacy Services",
  "Lab Services",
  "General Medicine",
  "Emergency Support",
  "Specialist Visit",
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello SM Hospital,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\n\nI would like to book an appointment.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "#eef2f6",
        padding: "40px 20px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .contact-form-input {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid rgba(8,112,163,0.15);
          border-radius: 100px;
          padding: 13px 22px;
          font-family: inherit;
          font-size: 14px;
          color: #0d2d3a;
          outline: none;
          margin-bottom: 14px;
          appearance: none;
          transition: border-color 0.18s;
        }
        .contact-form-input::placeholder { color: #8aacba; }
        .contact-form-input:focus { border-color: #0870a3; }
        .contact-submit-btn {
          background: #0870a3;
          color: #ffffff;
          border: none;
          border-radius: 100px;
          padding: 13px 28px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
          transition: background 0.18s ease, transform 0.15s ease;
        }
        .contact-submit-btn:hover { background: #065e8a; transform: translateY(-1px); }
        @media (min-width: 768px) {
          #contact-card {
            grid-template-columns: 1fr 1fr !important;
            min-height: 420px !important;
          }
          #contact-image {
            display: flex !important;
          }
        }
        @media (max-width: 767px) {
          #contact-card {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          #contact-image {
            display: none !important;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <p style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "2.5px",
          color: "#0870a3",
          textTransform: "uppercase",
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}>
          <span style={{ display: "inline-block", width: 22, height: 3, borderRadius: 2, background: "linear-gradient(to right,#3bcc7a,#0870a3)" }} />
          Get In Touch
          <span style={{ display: "inline-block", width: 22, height: 3, borderRadius: 2, background: "linear-gradient(to right,#0870a3,#3bcc7a)" }} />
        </p>
        <h2 style={{
          fontSize: "clamp(24px, 5vw, 38px)",
          fontWeight: 800,
          color: "#0d2d3a",
          lineHeight: 1.2,
        }}>
          Book Your Appointment
        </h2>
      </div>

      {/* Card */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        background: "#c5dbe8",
        borderRadius: 28,
        display: "grid",
        gridTemplateColumns: "1fr",
        overflow: "hidden",
      }} id="contact-card">

        {/* Left — Form */}
        <div style={{ padding: "clamp(24px, 5vw, 48px) clamp(20px, 4vw, 44px)", background: "#c5dbe8" }}>
          <h3 style={{
            fontSize: "clamp(18px, 4vw, 30px)",
            fontWeight: 800,
            color: "#0d2d3a",
            lineHeight: 1.25,
            marginBottom: 28,
          }}>
            Get In Touch With<br />Us Today!
          </h3>

          <form onSubmit={handleSubmit}>
            <input
              className="contact-form-input"
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="contact-form-input"
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <select
              className="contact-form-input"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ cursor: "pointer" }}
            >
              <option value="">Select Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <button type="submit" className="contact-submit-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Submit via WhatsApp
            </button>
          </form>
        </div>

        {/* Right — Doctor image */}
        <div style={{
          position: "relative",
          background: "#d6eaf3",
          display: "none",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
        }} id="contact-image">
          {/* Green blob */}
          <div style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 260,
            height: 260,
            background: "#b8e8d0",
            borderRadius: "50%",
            zIndex: 0,
          }} />
          <img
            src={contactDoctor}
            alt="SM Hospital doctor"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
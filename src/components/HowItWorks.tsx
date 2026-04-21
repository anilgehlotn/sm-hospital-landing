// import { MessageCircle, Hospital, Stethoscope, CalendarCheck } from "lucide-react";
// import consultationImg from "@/assets/doctor-consultation.jpg";

// const steps = [
//   { icon: MessageCircle, num: "01", title: "Book Appointment", desc: "Send a message via WhatsApp to schedule" },
//   { icon: Hospital, num: "02", title: "Visit Hospital", desc: "Come in for your consultation" },
//   { icon: Stethoscope, num: "03", title: "Get Treatment", desc: "Receive expert medical care" },
//   { icon: CalendarCheck, num: "04", title: "Follow-Up Care", desc: "Ongoing support for your recovery" },
// ];

// const HowItWorks = () => (
//   <section id="how-it-works" className="py-20 bg-background">
//     <div className="container mx-auto px-4">
//       <div className="text-center mb-14">
//         <span className="text-sm font-semibold text-secondary uppercase tracking-widest">How It Works</span>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
//           Your Journey to Better Health
//         </h2>
//       </div>
//       <div className="grid md:grid-cols-2 gap-16 items-center">
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <img
//             src={consultationImg}
//             alt="Doctor consultation"
//             loading="lazy"
//             width={800}
//             height={800}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="space-y-6">
//           {steps.map((s) => (
//             <div key={s.num} className="flex gap-5 items-start group">
//               <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                 <s.icon size={24} className="text-accent-foreground group-hover:text-primary-foreground" />
//               </div>
//               <div>
//                 <span className="text-xs font-bold text-secondary">STEP {s.num}</span>
//                 <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
//                 <p className="text-sm text-muted-foreground">{s.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default HowItWorks;
// import { MessageCircle, Building2, Stethoscope, CalendarCheck } from "lucide-react";
// import consultationImg from "@/assets/doctor-consultation.jpg";

// const steps = [
//   {
//     icon: MessageCircle,
//     num: "01",
//     title: "Book Appointment",
//     desc: "Send a message via WhatsApp to schedule your visit at your convenience.",
//   },
//   {
//     icon: Building2,
//     num: "02",
//     title: "Visit Hospital",
//     desc: "Come in for your consultation at our state-of-the-art facility.",
//   },
//   {
//     icon: Stethoscope,
//     num: "03",
//     title: "Get Treatment",
//     desc: "Receive expert medical care tailored to your unique health needs.",
//   },
//   {
//     icon: CalendarCheck,
//     num: "04",
//     title: "Follow-Up Care",
//     desc: "Ongoing support and monitoring throughout your recovery journey.",
//   },
// ];

// const HowItWorks = () => (
//   <section
//     id="how-it-works"
//     style={{
//       backgroundColor: "#ffffff",
//       padding: "90px 24px",
//       fontFamily: "'Georgia', serif",
//     }}
//   >
//     <div
//       style={{
//         maxWidth: 1100,
//         margin: "0 auto",
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         gap: 80,
//         alignItems: "center",
//       }}
//     >
//       {/* ── LEFT: Arched image + decorations ── */}
//       <div style={{ position: "relative", padding: "24px 24px 48px 24px" }}>

//         {/* Floating small circle — top left (doctor icon like Image 1) */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: 88,
//             height: 88,
//             borderRadius: "50%",
//             overflow: "hidden",
//             border: "4px solid #ffffff",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
//             zIndex: 2,
//             backgroundColor: "#e8f4f0",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Stethoscope size={36} strokeWidth={1.3} color="#2a8a7a" />
//         </div>

//         {/* Main image with arch top (rounded top, straight bottom) */}
//         <div
//           style={{
//             borderRadius: "50% 50% 24px 24px / 18% 18% 24px 24px",
//             overflow: "hidden",
//             width: "100%",
//             height: 500,
//           }}
//         >
//           <img
//             src={consultationImg}
//             alt="Doctor consultation"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "top center",
//               display: "block",
//             }}
//           />
//         </div>

//         {/* Teal oval — bottom right, like Image 1 */}
//         <svg
//           viewBox="0 0 300 110"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: -20,
//             width: 240,
//             pointerEvents: "none",
//             zIndex: 3,
//           }}
//         >
//           <ellipse
//             cx="150"
//             cy="55"
//             rx="145"
//             ry="48"
//             fill="none"
//             stroke="#1dbf9a"
//             strokeWidth="2.5"
//           />
//         </svg>

//         {/* Second smaller teal oval — bottom left, like Image 1 */}
//         <svg
//           viewBox="0 0 300 110"
//           style={{
//             position: "absolute",
//             bottom: -10,
//             left: 20,
//             width: 190,
//             pointerEvents: "none",
//             zIndex: 3,
//             opacity: 0.65,
//           }}
//         >
//           <ellipse
//             cx="150"
//             cy="55"
//             rx="145"
//             ry="48"
//             fill="none"
//             stroke="#1dbf9a"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>

//       {/* ── RIGHT: Label + heading + steps ── */}
//       <div>
//         {/* "· How It Works" label */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 8,
//             marginBottom: 18,
//             color: "#778888",
//             fontSize: "0.88rem",
//             fontFamily: "sans-serif",
//             letterSpacing: "0.02em",
//           }}
//         >
//           <span style={{ color: "#1dbf9a", fontSize: "1.2rem", lineHeight: 1 }}>·</span>
//           How It Works
//         </div>

//         {/* Bold heading */}
//         <h2
//           style={{
//             fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
//             fontWeight: 800,
//             color: "#1a2a2a",
//             lineHeight: 1.2,
//             marginBottom: 40,
//             letterSpacing: "-0.4px",
//           }}
//         >
//           Your Journey to Better Health.
//         </h2>

//         {/* Steps */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
//           {steps.map((s) => {
//             const Icon = s.icon;
//             return (
//               <div
//                 key={s.num}
//                 style={{
//                   display: "flex",
//                   gap: 18,
//                   alignItems: "flex-start",
//                 }}
//               >
//                 {/* Icon box */}
//                 <div
//                   style={{
//                     flexShrink: 0,
//                     width: 52,
//                     height: 52,
//                     borderRadius: 14,
//                     backgroundColor: "#e8f4f0",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Icon size={24} strokeWidth={1.5} color="#1a8a7a" />
//                 </div>

//                 {/* Text */}
//                 <div>
//                   <span
//                     style={{
//                       fontSize: "0.72rem",
//                       fontWeight: 700,
//                       color: "#1dbf9a",
//                       letterSpacing: "0.1em",
//                       textTransform: "uppercase",
//                       fontFamily: "sans-serif",
//                       display: "block",
//                       marginBottom: 4,
//                     }}
//                   >
//                     STEP {s.num}
//                   </span>
//                   <h3
//                     style={{
//                       fontSize: "1.05rem",
//                       fontWeight: 700,
//                       color: "#1a2a2a",
//                       marginBottom: 6,
//                       fontFamily: "sans-serif",
//                     }}
//                   >
//                     {s.title}
//                   </h3>
//                   <p
//                     style={{
//                       fontSize: "0.9rem",
//                       color: "#5a6a6a",
//                       lineHeight: 1.6,
//                       fontFamily: "sans-serif",
//                       margin: 0,
//                     }}
//                   >
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Read more pill button — like Image 1 */}
//         <button
//           style={{
//             marginTop: 40,
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 12,
//             backgroundColor: "#1a2a2a",
//             color: "#ffffff",
//             border: "none",
//             borderRadius: 999,
//             padding: "14px 14px 14px 28px",
//             fontSize: "0.95rem",
//             fontWeight: 600,
//             cursor: "pointer",
//             fontFamily: "sans-serif",
//             letterSpacing: "0.01em",
//           }}
//         >
//           Learn more
//           <span
//             style={{
//               width: 36,
//               height: 36,
//               borderRadius: "50%",
//               backgroundColor: "#ffffff",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#1a2a2a",
//               fontSize: "1rem",
//             }}
//           >
//             →
//           </span>
//         </button>
//       </div>
//     </div>
//   </section>
// );

// export default HowItWorks;

import { 
  Building2, 
  FlaskConical, 
  HeartPulse, 
  Baby, 
  Bed, 
  Pill, 
  Scissors, 
  Bone 
} from "lucide-react";
import consultationImg from "@/assets/doctor-consultation.jpg";

const facilities = [
  {
    icon: Building2,
    num: "01",
    title: "Modular Operation Theatre",
    desc: "Well-equipped, modern OT designed for safe and precise surgical procedures.",
  },
  {
    icon: HeartPulse,
    num: "02",
    title: "24/7 Nursing Care",
    desc: "Round-the-clock dedicated nursing support for every patient's comfort and recovery.",
  },
  {
    icon: Pill,
    num: "03",
    title: "In-house Pharmacy",
    desc: "Convenient on-site pharmacy stocked with all essential medicines and supplies.",
  },
  {
    icon: Bed,
    num: "04",
    title: "Deluxe & Private Rooms",
    desc: "Comfortable, well-furnished private and deluxe rooms for a restful stay.",
  },
  {
    icon: Baby,
    num: "05",
    title: "Maternity & Child Care",
    desc: "Specialized care for mothers and newborns throughout pregnancy and beyond.",
  },
  {
    icon: Scissors,
    num: "06",
    title: "Major & Minor Procedures",
    desc: "Full range of surgical and clinical procedures performed with expert precision.",
  },
  {
    icon: Bone,
    num: "07",
    title: "Orthopedic Surgeries",
    desc: "All types of orthopedic surgeries handled by experienced specialists.",
  },
  {
    icon: FlaskConical,
    num: "08",
    title: "Diagnostic Laboratory",
    desc: "In-house lab offering accurate, fast diagnostics to support timely treatment.",
  },
];

const Facilities = () => (
  <section
    id="facilities"
    style={{
      backgroundColor: "#ffffff",
      padding: "60px 20px",
      fontFamily: "'Georgia', serif",
    }}
  >
    <style>{`
      @media (min-width: 768px) {
        #facilities > div {
          grid-template-columns: 1fr 1fr !important;
          gap: 80px !important;
          padding: 0 60px !important;
        }
      }
      @media (max-width: 767px) {
        #facilities > div {
          gap: 40px !important;
          padding: 0 24px !important;
        }
      }
    `}</style>
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "40px",
        alignItems: "center",
      }}
    >
      {/* ── LEFT: Arched image + decorations ── */}
      <div style={{ position: "relative", padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px) clamp(24px, 6vw, 48px) clamp(16px, 4vw, 24px)" }}>

        {/* Floating icon circle — top left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "clamp(60px, 15vw, 88px)",
            height: "clamp(60px, 15vw, 88px)",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #ffffff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            zIndex: 2,
            backgroundColor: "#e8f4f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Building2 size="clamp(24, 6vw, 36)" strokeWidth={1.3} color="#2a8a7a" />
        </div>

        {/* Main image with arch top */}
        <div
          style={{
            borderRadius: "50% 50% 24px 24px / 18% 18% 24px 24px",
            overflow: "hidden",
            width: "100%",
            height: "clamp(300px, 60vw, 500px)",
          }}
        >
          <img
            src={consultationImg}
            alt="SM Hospital Facilities"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
        </div>


      </div>

      {/* ── RIGHT: Label + heading + facilities ── */}
      <div>
        {/* "· Facilities" label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
            color: "#778888",
            fontSize: "0.88rem",
            fontFamily: "sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ color: "#1dbf9a", fontSize: "1.2rem", lineHeight: 1 }}>·</span>
          Facilities
        </div>

        {/* Bold heading */}
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "#1a2a2a",
            lineHeight: 1.2,
            marginBottom: 40,
            letterSpacing: "-0.4px",
          }}
        >
          Modern Infrastructure for Better Care.
        </h2>

        {/* Facility items — 2 column grid for 8 items */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px 24px",
          }}
        >
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.num}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "#e8f4f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} color="#1a8a7a" />
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(0.75rem, 2vw, 0.88rem)",
                      fontWeight: 700,
                      color: "#1a2a2a",
                      marginBottom: 3,
                      fontFamily: "sans-serif",
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.7rem, 1.8vw, 0.78rem)",
                      color: "#5a6a6a",
                      lineHeight: 1.5,
                      fontFamily: "sans-serif",
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA pill button */}
        <a
          href="#contact"
          style={{
            marginTop: 40,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "#1a2a2a",
            color: "#ffffff",
            border: "none",
            borderRadius: 999,
            padding: "14px 14px 14px 28px",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "sans-serif",
            letterSpacing: "0.01em",
            textDecoration: "none",
          }}
        >
          Book a Visit
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1a2a2a",
              fontSize: "1rem",
            }}
          >
            →
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Facilities;
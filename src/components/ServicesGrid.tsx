// import { HeartPulse, ShieldCheck, Siren, UserCheck } from "lucide-react";

// const services = [
//   {
//     icon: HeartPulse,
//     title: "General Medicine",
//     desc: "Comprehensive primary healthcare for all age groups.",
//     bg: "bg-blue-light",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Preventive Care",
//     desc: "Regular health check-ups and wellness programs.",
//     bg: "bg-green-light",
//   },
//   {
//     icon: Siren,
//     title: "Emergency Support",
//     desc: "24/7 emergency medical assistance when you need it most.",
//     bg: "bg-blue-light",
//   },
//   {
//     icon: UserCheck,
//     title: "Specialist Visits",
//     desc: "Access to experienced specialists across departments.",
//     bg: "bg-green-light",
//   },
// ];

// const ServicesGrid = () => (
//   <section id="services" className="py-20 bg-muted">
//     <div className="container mx-auto px-4">
//       <div className="text-center mb-14">
//         <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Services</span>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
//           Quality Healthcare Services
//         </h2>
//         <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
//           We provide a wide range of medical services to ensure your complete well-being.
//         </p>
//       </div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((s) => (
//           <div
//             key={s.title}
//             className={`${s.bg} rounded-xl p-8 hover:shadow-lg transition-shadow group cursor-pointer`}
//           >
//             <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
//               <s.icon className="text-primary" size={28} />
//             </div>
//             <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
//             <p className="text-sm text-muted-foreground">{s.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ServicesGrid;
// import { HeartPulse, ShieldCheck, Siren, UserCheck } from "lucide-react";

// const services = [
//   {
//     icon: HeartPulse,
//     title: "General Medicine",
//     desc: "Comprehensive primary healthcare for all age groups.",
//     bg: "#e8f0e8",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Preventive Care",
//     desc: "Regular health check-ups and wellness programs.",
//     bg: "#f5dde0",
//   },
//   {
//     icon: Siren,
//     title: "Emergency Support",
//     desc: "24/7 emergency medical assistance when you need it most.",
//     bg: "#d6e8f0",
//   },
//   {
//     icon: UserCheck,
//     title: "Specialist Visits",
//     desc: "Access to experienced specialists across departments.",
//     bg: "#d6ede8",
//   },
// ];

// const ServicesGrid = () => (
//   <section
//     id="services"
//     style={{
//       backgroundColor: "#f8f9fa",
//       padding: "60px 20px sm:80px 24px",
//       fontFamily: "'Georgia', serif",
//     }}
//   >
//     <div
//       style={{
//         maxWidth: 1200,
//         margin: "0 auto",
//       }}
//     >
//       {/* Header */}
//       <div style={{ textAlign: "center", marginBottom: "40px sm:56px" }}>
//         <span
//           style={{
//             fontSize: "clamp(11px, 2vw, 13px)",
//             fontWeight: 700,
//             color: "#4a9a7a",
//             textTransform: "uppercase",
//             letterSpacing: "0.15em",
//           }}
//         >
//           Our Services
//         </span>
//         <h2
//           style={{
//             fontSize: "clamp(24px, 4vw, 44px)",
//             fontWeight: 800,
//             color: "#1a3a3a",
//             marginTop: 12,
//             marginBottom: 0,
//             letterSpacing: "-0.4px",
//             lineHeight: 1.2,
//           }}
//         >
//           Quality Healthcare Services
//         </h2>
//         <p
//           style={{
//             color: "#5a6a6a",
//             marginTop: 14,
//             fontSize: "clamp(14px, 2.5vw, 16px)",
//             maxWidth: 480,
//             margin: "14px auto 0",
//             lineHeight: 1.6,
//           }}
//         >
//           We provide a wide range of medical services to ensure your complete well-being.
//         </p>
//       </div>

//       {/* Cards */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "16px sm:20px",
//         }}
//       >
//         {services.map((s) => {
//           const Icon = s.icon;
//           return (
//             <div
//               key={s.title}
//               style={{
//                 backgroundColor: s.bg,
//                 borderRadius: 20,
//                 padding: "32px 28px",
//                 display: "flex",
//                 flexDirection: "column",
//                 minHeight: 220,
//                 cursor: "pointer",
//                 transition: "box-shadow 0.2s ease, transform 0.2s ease",
//               }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLDivElement).style.boxShadow =
//                   "0 12px 32px rgba(0,0,0,0.1)";
//                 (e.currentTarget as HTMLDivElement).style.transform =
//                   "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
//                 (e.currentTarget as HTMLDivElement).style.transform =
//                   "translateY(0)";
//               }}
//             >
//               {/* Icon */}            <div
//               style={{
//                 width: "48px sm:52px",
//                 height: "48px sm:52px",
//                 borderRadius: 14,
//                 backgroundColor: "rgba(0,0,0,0.08)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginBottom: "16px sm:24px",
//               }}
//             >
//               <Icon size={22} strokeWidth={1.4} color="#2a3a3a" />
//             </div>

//             {/* Title */}
//             <h3
//               style={{
//                 fontSize: "clamp(14px, 2.5vw, 18px)",
//                 fontWeight: 700,
//                 color: "#1a3a3a",
//                 marginBottom: 10,
//                 lineHeight: 1.25,
//               }}
//             >
//               {s.title}
//             </h3>

//             {/* Description */}
//             <p
//               style={{
//                 fontSize: "clamp(13px, 2vw, 15px)",
//                 color: "#3a4a4a",
//                 lineHeight: 1.6,
//                 margin: 0,
//               }}
//             >
//               {s.desc}
//             </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </section>
// );

// export default ServicesGrid;
import { HeartPulse, ShieldCheck, Siren, UserCheck } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "General Medicine",
    desc: "Comprehensive primary healthcare for all age groups.",
    bg: "#e8f0e8",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    desc: "Regular health check-ups and wellness programs.",
    bg: "#f5dde0",
  },
  {
    icon: Siren,
    title: "Emergency Support",
    desc: "24/7 emergency medical assistance when you need it most.",
    bg: "#d6e8f0",
  },
  {
    icon: UserCheck,
    title: "Specialist Visits",
    desc: "Access to experienced specialists across departments.",
    bg: "#d6ede8",
  },
];

const ServicesGrid = () => (
  <>
    <style>{`
      .services-section {
        background-color: #f8f9fa;
        padding: 48px 16px;
        font-family: 'Georgia', serif;
      }

      .services-inner {
        max-width: 1200px;
        margin: 0 auto;
      }

      .services-header {
        text-align: center;
        margin-bottom: 36px;
      }

      .services-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .service-card {
        border-radius: 20px;
        padding: 28px 22px;
        display: flex;
        flex-direction: column;
        min-height: 200px;
        cursor: pointer;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
      }

      .service-card:hover {
        box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        transform: translateY(-2px);
      }

      .service-icon {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        background-color: rgba(0,0,0,0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        flex-shrink: 0;
      }

      @media (min-width: 480px) {
        .services-section {
          padding: 60px 24px;
        }
        .services-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .services-header {
          margin-bottom: 48px;
        }
      }

      @media (min-width: 900px) {
        .services-section {
          padding: 80px 32px;
        }
        .services-grid {
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .service-card {
          padding: 32px 28px;
          min-height: 220px;
        }
        .service-icon {
          width: 52px;
          height: 52px;
          margin-bottom: 24px;
        }
        .services-header {
          margin-bottom: 56px;
        }
      }
    `}</style>

    <section id="services" className="services-section">
      <div className="services-inner">
        {/* Header */}
        <div className="services-header">
          <span
            style={{
              fontSize: "clamp(11px, 2vw, 13px)",
              fontWeight: 700,
              color: "#4a9a7a",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Our Services
          </span>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 44px)",
              fontWeight: 800,
              color: "#1a3a3a",
              marginTop: 12,
              marginBottom: 0,
              letterSpacing: "-0.4px",
              lineHeight: 1.2,
            }}
          >
            Quality Healthcare Services
          </h2>
          <p
            style={{
              color: "#5a6a6a",
              marginTop: 14,
              fontSize: "clamp(14px, 2.5vw, 16px)",
              maxWidth: 480,
              margin: "14px auto 0",
              lineHeight: 1.6,
            }}
          >
            We provide a wide range of medical services to ensure your complete well-being.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="service-card"
                style={{ backgroundColor: s.bg }}
              >
                {/* Icon */}
                <div className="service-icon">
                  <Icon size={22} strokeWidth={1.4} color="#2a3a3a" />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 18px)",
                    fontWeight: 700,
                    color: "#1a3a3a",
                    marginBottom: 10,
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "clamp(13px, 2vw, 15px)",
                    color: "#3a4a4a",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default ServicesGrid;
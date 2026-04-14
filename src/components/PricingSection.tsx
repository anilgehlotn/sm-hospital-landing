// import { useState } from "react";
// import { Heart, Stethoscope, Scissors, Droplet, Brain, Pill } from "lucide-react";

// interface Package {
//   id: number;
//   category: "Maternity" | "Surgery" | "Urology" | "Cardiology" | "Neurology";
//   name: string;
//   description: string;
//   price?: string;
//   features: string[];
//   icon: React.ReactNode;
// }

// const PricingSection = () => {
//   const [activeFilter, setActiveFilter] = useState<string>("All");

//   const packages: Package[] = [
//     {
//       id: 1,
//       category: "Maternity",
//       name: "Normal Delivery",
//       description: "Safe and comfortable natural childbirth experience",
//       price: "₹35,000",
//       features: [
//         "Pre-natal consults",
//         "Delivery room & nursing",
//         "Post-natal care 2 days",
//         "Newborn screening",
//       ],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 2,
//       category: "Maternity",
//       name: "LSCS / C-Section",
//       description: "Surgical cesarean delivery with comprehensive support",
//       price: "₹60,000",
//       features: [
//         "Modular OT",
//         "Anaesthesia",
//         "Recovery 3–4 days",
//         "Paediatric support",
//       ],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 3,
//       category: "Surgery",
//       name: "Hernia Surgery",
//       description: "Advanced surgical repair with minimal invasiveness",
//       features: [
//         "Surgical consult",
//         "Laparoscopic option",
//         "2-day stay",
//         "Post-op follow-up",
//       ],
//       icon: <Scissors className="w-6 h-6" />,
//     },
//     {
//       id: 4,
//       category: "Urology",
//       name: "Kidney Stone — URSL",
//       description: "Laser-based kidney stone removal procedure",
//       features: [
//         "Urology consult",
//         "Laser lithotripsy",
//         "Stenting if needed",
//         "Post-procedure care",
//       ],
//       icon: <Droplet className="w-6 h-6" />,
//     },
//     {
//       id: 5,
//       category: "Cardiology",
//       name: "Hypertension Package",
//       description: "Complete cardiac evaluation and management",
//       features: [
//         "ECG + 2D Echo",
//         "Lipid profile & RFT",
//         "Cardiologist review",
//         "3-month follow-up",
//       ],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 6,
//       category: "Neurology",
//       name: "Neuro Evaluation",
//       description: "Comprehensive neurological assessment and care",
//       features: [
//         "Neurologist consult",
//         "EEG/MRI referral",
//         "Medication review",
//         "Follow-up included",
//       ],
//       icon: <Brain className="w-6 h-6" />,
//     },
//   ];

//   const filters = ["All", "Maternity", "Surgery", "Urology", "Cardiology", "Neurology"];

//   const filteredPackages =
//     activeFilter === "All"
//       ? packages
//       : packages.filter((pkg) => pkg.category === activeFilter);

//   const getAccentColor = (category: string) => {
//     return category === "Maternity" ? "#2caa60" : "#0870a3";
//   };

//   return (
//     <section
//       className="w-full py-20 px-4 md:px-8"
//       style={{
//         background: "linear-gradient(to bottom right, #f0f7f4, #eaf3f0)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <p
//             className="text-xs tracking-widest font-semibold mb-3"
//             style={{ color: "#2caa60" }}
//           >
//             TRANSPARENT PRICING
//           </p>
//           <h2
//             className="text-3xl md:text-4xl font-semibold mb-4"
//             style={{ color: "#1a2e2a" }}
//           >
//             Treatment Packages for Every Family
//           </h2>
//           <p
//             className="text-sm mb-6"
//             style={{ color: "#4a5e58" }}
//           >
//             Comprehensive packages designed with your family's wellbeing in mind
//           </p>
//           {/* Underline Accent */}
//           <div className="flex justify-center">
//             <div
//               className="h-1 rounded-full"
//               style={{ width: "60px", backgroundColor: "#2caa60" }}
//             ></div>
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
//                 activeFilter === filter
//                   ? "text-white"
//                   : "text-[#4a5e58] border border-gray-200"
//               }`}
//               style={
//                 activeFilter === filter
//                   ? { backgroundColor: "#2caa60" }
//                   : { backgroundColor: "rgba(255, 255, 255, 0.6)" }
//               }
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Packages Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {filteredPackages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="rounded-2xl border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
//               style={{
//                 backgroundColor: "rgba(255, 255, 255, 0.6)",
//                 borderColor: "rgba(255, 255, 255, 0.8)",
//                 backdropFilter: "blur(4px)",
//               }}
//             >
//               {/* Top Accent Strip */}
//               <div
//                 className="h-1"
//                 style={{ backgroundColor: getAccentColor(pkg.category) }}
//               ></div>

//               {/* Card Content */}
//               <div className="p-6">
//                 {/* Icon and Category */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <div
//                     className="p-3 rounded-full"
//                     style={{ backgroundColor: "#dde8e4" }}
//                   >
//                     <div style={{ color: "#0870a3" }}>{pkg.icon}</div>
//                   </div>
//                   <span
//                     className="text-xs font-medium px-3 py-0.5 rounded-full"
//                     style={{
//                       backgroundColor: "#dde8e4",
//                       color: "#0870a3",
//                     }}
//                   >
//                     {pkg.category}
//                   </span>
//                 </div>

//                 {/* Package Name and Description */}
//                 <h3
//                   className="text-lg font-semibold mb-2"
//                   style={{ color: "#1a2e2a" }}
//                 >
//                   {pkg.name}
//                 </h3>
//                 <p
//                   className="text-sm mb-4"
//                   style={{ color: "#4a5e58" }}
//                 >
//                   {pkg.description}
//                 </p>

//                 {/* Price */}
//                 <div className="mb-4">
//                   {pkg.price ? (
//                     <div>
//                       <p
//                         className="text-2xl font-bold"
//                         style={{ color: "#2caa60" }}
//                       >
//                         {pkg.price}
//                       </p>
//                       <p
//                         className="text-xs"
//                         style={{ color: "#4a5e58" }}
//                       >
//                         onwards
//                       </p>
//                     </div>
//                   ) : (
//                     <p
//                       className="text-sm font-medium"
//                       style={{ color: "#0870a3" }}
//                     >
//                       Contact for pricing
//                     </p>
//                   )}
//                 </div>

//                 {/* Divider */}
//                 <div
//                   className="border-t my-4"
//                   style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
//                 ></div>

//                 {/* Features */}
//                 <div className="mb-6 space-y-2">
//                   {pkg.features.map((feature, idx) => (
//                     <div
//                       key={idx}
//                       className="text-sm py-0.5 pl-3 border-l-2"
//                       style={{
//                         color: "#4a5e58",
//                         borderColor: "rgba(44, 170, 96, 0.3)",
//                       }}
//                     >
//                       {feature}
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <button
//                   className="w-full py-2 rounded-xl font-medium text-sm transition-all duration-200 border"
//                   style={{
//                     borderColor: "#2caa60",
//                     color: "#2caa60",
//                   }}
//                   onMouseEnter={(e) => {
//                     (e.target as HTMLButtonElement).style.backgroundColor =
//                       "#2caa60";
//                     (e.target as HTMLButtonElement).style.color = "white";
//                   }}
//                   onMouseLeave={(e) => {
//                     (e.target as HTMLButtonElement).style.backgroundColor =
//                       "transparent";
//                     (e.target as HTMLButtonElement).style.color = "#2caa60";
//                   }}
//                 >
//                   Enquire Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Note */}
//         <p
//           className="text-xs text-center mt-8"
//           style={{ color: "#4a5e58" }}
//         >
//           All packages include GST. Final pricing confirmed during consultation.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
import { useState } from "react";
import { Heart, Scissors, Droplet, Brain, Baby, Activity } from "lucide-react";

const packages = [
  {
    id: 1,
    category: "Maternity",
    name: "Normal Delivery",
    label: "FOR NEW MOTHERS",
    description: "Safe and comfortable natural childbirth with complete delivery package.",
    price: "₹35,000",
    cta: "Book Your Delivery",
    features: [
      "Pre-natal consults",
      "Delivery room & nursing",
      "Post-natal care 2 days",
      "Medicines & supplies included",
    ],
    icon: Baby,
  },
  {
    id: 2,
    category: "Maternity",
    name: "LSCS / C-Section",
    label: "FOR PLANNED BIRTHS",
    description: "Surgical cesarean delivery with full anaesthesia and recovery support.",
    price: "₹65,000",
    cta: "Book Your Delivery",
    features: [
      "Modular OT setup",
      "Anaesthesia included",
      "Recovery 3–4 days",
      "Medicines & supplies included",
    ],
    icon: Heart,
  },
  {
    id: 3,
    category: "Surgery",
    name: "Hernia Surgery",
    label: "FOR GENERAL SURGERY",
    description: "Advanced laparoscopic hernia repair with minimal downtime.",
    price: null,
    cta: "Enquire Now",
    features: [
      "Surgical consult",
      "Laparoscopic option",
      "2-day hospital stay",
      "Post-op follow-up",
    ],
    icon: Scissors,
  },
  {
    id: 4,
    category: "Urology",
    name: "Kidney Stone — URSL",
    label: "FOR UROLOGICAL CARE",
    description: "Precision laser-based kidney stone removal with stenting if needed.",
    price: null,
    cta: "Enquire Now",
    features: [
      "Urology consult",
      "Laser lithotripsy",
      "Stenting if needed",
      "Post-procedure care",
    ],
    icon: Droplet,
  },
  {
    id: 5,
    category: "Cardiology",
    name: "Hypertension Package",
    label: "FOR CARDIAC HEALTH",
    description: "Complete cardiac evaluation with 3-month follow-up plan.",
    price: null,
    cta: "Enquire Now",
    features: [
      "ECG + 2D Echo",
      "Lipid profile & RFT",
      "Cardiologist review",
      "3-month follow-up",
    ],
    icon: Activity,
  },
  {
    id: 6,
    category: "Neurology",
    name: "Neuro Evaluation",
    label: "FOR NEUROLOGICAL CARE",
    description: "Comprehensive neurological assessment with EEG/MRI referral.",
    price: null,
    cta: "Enquire Now",
    features: [
      "Neurologist consult",
      "EEG / MRI referral",
      "Medication review",
      "Follow-up included",
    ],
    icon: Brain,
  },
];

const filters = ["All", "Maternity", "Surgery", "Urology", "Cardiology", "Neurology"];

export default function PricingSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? packages
      : packages.filter((p) => p.category === activeFilter);

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #f0f9f6 0%, #e6f4f1 50%, #eaf6fb 100%)",
        padding: "60px 20px sm:80px 24px md:80px",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .pkg-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(7, 112, 163, 0.08);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          display: flex;
          flex-direction: column;
        }
        .pkg-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(7, 112, 163, 0.15);
        }
        .cta-btn {
          width: 100%;
          padding: 13px 0;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.3px;
          cursor: pointer;
          background: #3bcc7a;
          color: #fff;
          border: none;
          transition: background 0.18s ease, transform 0.15s ease;
          margin-top: auto;
        }
        .cta-btn:hover {
          background: #2caa60;
          transform: scale(1.02);
        }
        .filter-btn {
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: 1.5px solid transparent;
          transition: all 0.18s ease;
        }
        .filter-btn.active {
          background: #0870a3;
          color: white;
          border-color: #0870a3;
        }
        .filter-btn.inactive {
          background: white;
          color: #4a7080;
          border-color: #c8dde6;
        }
        .filter-btn.inactive:hover {
          border-color: #0870a3;
          color: #0870a3;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #4a6070;
          padding: 4px 0;
        }
        .check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid #3bcc7a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px md:48px" }}>
          <p style={{
            fontSize: "clamp(10px, 2vw, 11px)",
            fontWeight: 700,
            letterSpacing: "3px",
            color: "#0870a3",
            textTransform: "uppercase",
            marginBottom: 12,
          }}>
            TRANSPARENT PRICING
          </p>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 40px)",
            fontWeight: 700,
            color: "#0d2d3a",
            lineHeight: 1.2,
            marginBottom: 12,
          }}>
            Treatment Packages for Every Family
          </h2>
          <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: "#5a7a8a", marginBottom: 20 }}>
            Comprehensive packages designed with your family's wellbeing in mind
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 56, height: 4, borderRadius: 4, background: "#3bcc7a" }} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px sm:10px",
          marginBottom: "36px md:44px",
          overflowX: "auto",
          paddingBottom: "8px",
        }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-btn ${activeFilter === f ? "active" : "inactive"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "18px sm:20px md:24px",
          marginBottom: 32,
        }}>
          {filtered.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div key={pkg.id} className="pkg-card">
                {/* Top accent bar — teal for maternity, blue for rest */}
                <div style={{
                  height: 4,
                  background: pkg.category === "Maternity"
                    ? "linear-gradient(to right, #3bcc7a, #2caa60)"
                    : "linear-gradient(to right, #0870a3, #1aa3c8)",
                }} />

                <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Label row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <div style={{
                      background: pkg.category === "Maternity" ? "#e6f9ef" : "#e6f2fa",
                      borderRadius: "50%",
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={20} color={pkg.category === "Maternity" ? "#2caa60" : "#0870a3"} />
                    </div>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      color: "#7a9aaa",
                      textTransform: "uppercase",
                    }}>
                      {pkg.label}
                    </span>
                  </div>

                  {/* Name + price inline (like reference image) */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 8,
                  }}>
                    <h3 style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#0d2d3a",
                      lineHeight: 1.2,
                      flex: 1,
                      paddingRight: 8,
                    }}>
                      {pkg.name}
                    </h3>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      {pkg.price ? (
                        <>
                          <p style={{
                            fontSize: 22,
                            fontWeight: 800,
                            color: "#0d2d3a",
                            lineHeight: 1,
                          }}>{pkg.price}</p>
                          <p style={{ fontSize: 11, color: "#7a9aaa", marginTop: 2 }}>onwards</p>
                        </>
                      ) : (
                        <span style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#0870a3",
                          background: "#e6f2fa",
                          padding: "4px 10px",
                          borderRadius: 6,
                        }}>
                          On Request
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: 13,
                    color: "#6a8a9a",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}>
                    {pkg.description}
                  </p>

                  {/* Divider */}
                  <div style={{
                    borderTop: "1px solid #eef3f6",
                    marginBottom: 16,
                  }} />

                  {/* Features */}
                  <div style={{ marginBottom: 24, flex: 1 }}>
                    {pkg.features.map((f, i) => (
                      <div key={i} className="feature-item">
                        <div className="check-icon">
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <path d="M1 3.5L3.2 6L8 1" stroke="#3bcc7a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.8px" }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="cta-btn">{pkg.cta}</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: "center",
          fontSize: 12,
          color: "#8aacba",
          marginTop: 8,
        }}>
          All packages include GST. Final pricing confirmed during consultation.
        </p>
      </div>
    </section>
  );
}
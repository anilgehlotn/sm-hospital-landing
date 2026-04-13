// import {
//   Heart,
//   Brain,
//   Bone,
//   Baby,
//   Stethoscope,
//   Scissors,
//   Utensils,
//   Droplets,
//   Sparkles,
//   Droplet,
//   Eye,
//   Ear,
// } from "lucide-react";

// interface Specialty {
//   id: number;
//   name: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const SpecialtiesSection = () => {
//   const specialties: Specialty[] = [
//     {
//       id: 1,
//       name: "Cardiology",
//       description: "Heart health, ECG & cardiac care",
//       icon: <Heart className="w-8 h-8" />,
//     },
//     {
//       id: 2,
//       name: "Neurology",
//       description: "Brain, spine & nervous system",
//       icon: <Brain className="w-8 h-8" />,
//     },
//     {
//       id: 3,
//       name: "Orthopedics",
//       description: "Joints, fractures & sports injuries",
//       icon: <Bone className="w-8 h-8" />,
//     },
//     {
//       id: 4,
//       name: "Pediatrics",
//       description: "Child health & vaccinations",
//       icon: <Baby className="w-8 h-8" />,
//     },
//     {
//       id: 5,
//       name: "OBG & Maternity",
//       description: "Obstetrics, delivery & gynecology",
//       icon: <Stethoscope className="w-8 h-8" />,
//     },
//     {
//       id: 6,
//       name: "General Medicine",
//       description: "Primary care, fever & diabetes",
//       icon: <Heart className="w-8 h-8" />,
//     },
//     {
//       id: 7,
//       name: "General Surgery",
//       description: "Hernia, appendix & gallbladder",
//       icon: <Scissors className="w-8 h-8" />,
//     },
//     {
//       id: 8,
//       name: "Gastroenterology",
//       description: "Digestive & liver disorders",
//       icon: <Utensils className="w-8 h-8" />,
//     },
//     {
//       id: 9,
//       name: "Dermatology",
//       description: "Skin, hair & nail treatments",
//       icon: <Sparkles className="w-8 h-8" />,
//     },
//     {
//       id: 10,
//       name: "Urology",
//       description: "Kidney stones & urinary tract",
//       icon: <Droplet className="w-8 h-8" />,
//     },
//     {
//       id: 11,
//       name: "Ophthalmology",
//       description: "Eye care & cataract",
//       icon: <Eye className="w-8 h-8" />,
//     },
//     {
//       id: 12,
//       name: "ENT",
//       description: "Ear, nose & throat disorders",
//       icon: <Ear className="w-8 h-8" />,
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             12 Medical Specialties
//             <br />
//             <span className="relative inline-block">
//               Under One Roof
//               <span
//                 className="absolute bottom-0 left-0 right-0 h-1"
//                 style={{ backgroundColor: "#2caa60" }}
//               ></span>
//             </span>
//           </h2>
//           <p className="text-gray-500 text-lg mt-6">
//             Comprehensive care across all major medical departments
//           </p>
//         </div>

//         {/* Specialties Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {specialties.map((specialty) => (
//             <div
//               key={specialty.id}
//               className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:border-[#2caa60] hover:shadow-lg group cursor-pointer"
//             >
//               {/* Icon Container */}
//               <div
//                 className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4 transition-all duration-300 group-hover:bg-blue-50"
//                 style={{
//                   backgroundColor: "rgb(240, 253, 244)",
//                 }}
//               >
//                 <div
//                   className="text-green-600 transition-all duration-300 group-hover:text-[#0870a3]"
//                   style={{
//                     color: "#2caa60",
//                   }}
//                 >
//                   {specialty.icon}
//                 </div>
//               </div>

//               {/* Card Content */}
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 {specialty.name}
//               </h3>
//               <p className="text-gray-600 text-sm">{specialty.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialtiesSection;
import {
  Heart, Brain, Bone, Baby, Stethoscope, Scissors,
  Utensils, Droplet, Sparkles, Eye, Ear, Activity, ArrowRight,
} from "lucide-react";
import { useState } from "react";

const specialties = [
  { id: 2, name: "Neurology", description: "Brain, spine & nervous system", icon: Brain, color: "#7c6fcd", bg: "#f3f1ff", stat: "98%", statLabel: "Success rate", special: false },
  { id: 3, name: "Orthopedics", description: "Joints, fractures & sports injuries", icon: Bone, color: "#0870a3", bg: "#e6f2fa", stat: "1,800+", statLabel: "Surgeries done", special: false },
  { id: 4, name: "Pediatrics", description: "Child health & vaccinations", icon: Baby, color: "#d4711e", bg: "#fff5ee", stat: "3,200+", statLabel: "Children cared", special: false },
  { id: 5, name: "OBG & Maternity", description: "Obstetrics, delivery & gynecology", icon: Stethoscope, color: "#2caa60", bg: "#e9faf1", stat: "1,500+", statLabel: "Safe deliveries", special: false },
  { id: 6, name: "General Medicine", description: "Primary care, fever & diabetes", icon: Activity, color: "#1190b0", bg: "#e0f6fb", stat: "Daily", statLabel: "OPD available", special: false },
  { id: 7, name: "General Surgery", description: "Hernia, appendix & gallbladder", icon: Scissors, color: "#0870a3", bg: "#e6f2fa", stat: "500+", statLabel: "Procedures/yr", special: false },
  { id: 8, name: "Gastroenterology", description: "Digestive & liver disorders", icon: Utensils, color: "#d4711e", bg: "#fff5ee", stat: "800+", statLabel: "Cases resolved", special: false },
  { id: 9, name: "Dermatology", description: "Skin, hair & nail treatments", icon: Sparkles, color: "#e05a5a", bg: "#fff1f1", stat: "4.9★", statLabel: "Patient rating", special: false },
  { id: 10, name: "Urology", description: "Kidney stones & urinary tract", icon: Droplet, color: "#1190b0", bg: "#e0f6fb", stat: "700+", statLabel: "Procedures/yr", special: false },
  { id: 11, name: "Ophthalmology", description: "Eye care & cataract surgery", icon: Eye, color: "#7c6fcd", bg: "#f3f1ff", stat: "1,200+", statLabel: "Eyes treated", special: true },
  { id: 12, name: "ENT", description: "Ear, nose & throat disorders", icon: Ear, color: "#2caa60", bg: "#e9faf1", stat: "600+", statLabel: "Procedures/yr", special: true },
];

export default function SpecialtiesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#eef2f6",
      padding: "72px 20px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .spec-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media (max-width: 1100px) { .spec-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 720px)  { .spec-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 460px)  { .spec-grid { grid-template-columns: 1fr; } }

        .spec-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 20px 18px 16px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
          overflow: hidden;
          border: 1.5px solid #e8eef3;
        }
        .spec-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(8, 112, 163, 0.11);
        }

        .icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          transition: transform 0.2s ease;
        }
        .spec-card:hover .icon-wrap { transform: scale(1.08); }

        .stat-pill {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 100px;
          letter-spacing: 0.3px;
        }

        .enquire-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-weight: 700;
          margin-top: 10px;
          padding: 5px 10px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: gap 0.15s ease;
          margin-left: -4px;
        }
        .enquire-btn:hover { gap: 7px; }

        .top-strip {
          border-radius: 20px;
          background: linear-gradient(120deg, #0a3a54 0%, #0870a3 45%, #1aa3c8 75%, #2caa60 100%);
          padding: 28px 32px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .stat-block {
          background: rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 12px 20px;
          text-align: center;
          flex: 1;
          min-width: 100px;
        }

        .book-btn {
          background: #ffffff;
          color: #0870a3;
          border: none;
          border-radius: 12px;
          padding: 13px 26px;
          font-family: inherit;
          font-weight: 800;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          transition: transform 0.15s ease;
        }
        .book-btn:hover { transform: scale(1.04); }

        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #0870a3;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .eyebrow-bar {
          width: 22px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(to right, #2caa60, #0870a3);
        }
      `}</style>

      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Top hero strip */}
        <div className="top-strip">
          <div style={{ flex: 2, minWidth: 200 }}>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>
              All under one roof
            </p>
            <h2 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 800, lineHeight: 1.2, margin: 0 }}>
              12 Medical Specialties.<br />One Trusted Hospital.
            </h2>
          </div>
          <div className="stat-block">
            <p style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: 0 }}>15K+</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, margin: "3px 0 0" }}>Patients / year</p>
          </div>
          <div className="stat-block">
            <p style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: 0 }}>98%</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, margin: "3px 0 0" }}>Success rate</p>
          </div>
          <div className="stat-block">
            <p style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: 0 }}>24/7</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, margin: "3px 0 0" }}>Emergency care</p>
          </div>
          <button className="book-btn">Book Appointment →</button>
        </div>

        {/* Eyebrow */}
        <div style={{ marginBottom: 16 }}>
          <div className="section-eyebrow">
            <span className="eyebrow-bar" />
            Medical specialties
          </div>
          <p style={{ fontSize: 13, color: "#8aacba", margin: 0 }}>
            Hover any card to enquire or book a consultation
          </p>
        </div>

        {/* Specialty cards */}
        <div className="spec-grid">
          {specialties.map((s) => {
            const Icon = s.icon;
            const isHov = hovered === s.id;
            return (
              <div
                key={s.id}
                className="spec-card"
                style={{ borderColor: isHov ? s.color : "#e8eef3" }}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="stat-pill" style={{ background: s.bg, color: s.color }}>
                  {s.stat}
                </span>

                {s.special && (
                  <span style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    fontSize: "9px",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "#fff3cd",
                    color: "#a68800",
                    letterSpacing: "0.3px",
                    textTransform: "uppercase"
                  }}>
                    Special Appointment
                  </span>
                )}

                <div className="icon-wrap" style={{ background: s.bg }}>
                  <Icon size={21} color={s.color} strokeWidth={2} />
                </div>

                <p style={{ fontSize: 13.5, fontWeight: 700, color: "#0d2d3a", margin: "0 0 4px", lineHeight: 1.3 }}>
                  {s.name}
                </p>
                <p style={{ fontSize: 11.5, color: "#7a9aaa", margin: 0, lineHeight: 1.5 }}>
                  {s.description}
                </p>
                <p style={{ fontSize: 10, fontWeight: 700, color: s.color, margin: "8px 0 0", letterSpacing: "0.4px" }}>
                  {s.statLabel}
                </p>

                {isHov && (
                  <button
                    className="enquire-btn"
                    style={{ color: s.color, background: s.bg }}
                  >
                    Enquire <ArrowRight size={11} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", fontSize: 11.5, color: "#a0b8c4", marginTop: 24 }}>
          All departments open 7 days a week · Emergency care available 24/7
        </p>
      </div>
    </section>
  );
}
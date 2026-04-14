// import doctorsTeam from "@/assets/doctors-team.jpg";

// const AboutSection = () => (
//   <section id="about" className="py-20 bg-background">
//     <div className="container mx-auto px-4">
//       <div className="grid md:grid-cols-2 gap-16 items-center">
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <img
//             src={doctorsTeam}
//             alt="SM Hospital Doctors Team"
//             loading="lazy"
//             width={960}
//             height={640}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="space-y-6">
//           <span className="text-sm font-semibold text-secondary uppercase tracking-widest">About Us</span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
//             We are more than just a hospital, we are your healthcare partner
//           </h2>
//           <p className="text-muted-foreground leading-relaxed">
//             At SM Hospital, we believe in providing compassionate, patient-centered care. Our team of experienced doctors and
//             healthcare professionals are committed to delivering the highest standard of medical services to the community of
//             Nayandahalli, Bengaluru and beyond.
//           </p>
//           <p className="text-muted-foreground leading-relaxed">
//             With modern facilities, affordable pricing, and a focus on preventive care, we ensure every patient feels cared for
//             from the moment they walk through our doors.
//           </p>
//           <a
//             href="#services"
//             className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
//           >
//             Explore More
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default AboutSection;
import doctorsTeam from "@/assets/doctors-team.jpg";

const stats = [
  { value: "15,000", suffix: "+", label: "Patients Treated" },
  { value: "12", suffix: "+", label: "Specialties" },
  { value: "98", suffix: "%", label: "Satisfaction Rate" },
  { value: "10", suffix: "+", label: "Years of Care" },
];

const AboutSection = () => (
  <section
    id="about"
    style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#ffffff",
      padding: "80px 24px 0",
      overflow: "hidden",
    }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
        max-width: 1160px;
        margin: 0 auto;
      }
      @media (max-width: 860px) {
        .about-grid { grid-template-columns: 1fr; gap: 32px; }
        .photo-stack { display: none; }
      }
      @media (max-width: 640px) {
        .about-grid { gap: 24px; }
      }

      .photo-stack {
        position: relative;
        height: 480px;
      }

      .photo-card-back {
        position: absolute;
        top: 40px;
        right: -20px;
        width: 72%;
        height: 320px;
        border-radius: 20px;
        overflow: hidden;
        transform: rotate(6deg);
        box-shadow: 0 20px 48px rgba(8,112,163,0.18);
        z-index: 1;
      }

      .photo-card-front {
        position: absolute;
        top: 60px;
        left: 0;
        width: 78%;
        height: 340px;
        border-radius: 20px;
        overflow: hidden;
        transform: rotate(-2deg);
        box-shadow: 0 24px 56px rgba(8,112,163,0.22);
        z-index: 2;
      }

      .photo-card-back img,
      .photo-card-front img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .dashed-arc {
        position: absolute;
        bottom: -10px;
        left: -60px;
        width: 420px;
        height: 200px;
        z-index: 0;
        pointer-events: none;
      }

      .badge-floating {
        position: absolute;
        bottom: 60px;
        right: 0px;
        background: #ffffff;
        border-radius: 16px;
        padding: 14px 18px;
        box-shadow: 0 8px 28px rgba(8,112,163,0.14);
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 12px;
        border: 1.5px solid #e6f2fa;
      }

      .explore-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg, #0870a3, #1aa3c8);
        color: #ffffff;
        border: none;
        border-radius: 100px;
        padding: 14px 28px;
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
        transition: transform 0.18s ease, box-shadow 0.18s ease;
        box-shadow: 0 4px 18px rgba(8,112,163,0.25);
      }
      .explore-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(8,112,163,0.35);
      }

      .stats-row {
        border-top: 1px solid #eef3f7;
        margin-top: 56px;
        padding: 40px 24px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        max-width: 1160px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        gap: 20px;
      }
      @media (max-width: 768px) {
        .stats-row { margin-top: 40px; padding: 32px 24px; }
      }
      @media (max-width: 600px) {
        .stats-row { grid-template-columns: repeat(2, 1fr); padding: 24px 16px; }
      }

      .stat-divider {
        border-left: 1px solid #e0eef4;
      }
      @media (max-width: 600px) {
        .stat-divider:nth-child(2n+1) { border-left: none; }
      }
    `}</style>

    {/* Main two-col */}
    <div className="about-grid">

      {/* Left: Photo stack */}
      <div className="photo-stack" aria-hidden="true">

        {/* Dashed arc SVG (like Flygo path) */}
        <svg className="dashed-arc" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 20 180 Q 80 20 200 80 Q 320 140 400 30"
            stroke="#c8dde6"
            strokeWidth="2"
            strokeDasharray="8 7"
            fill="none"
          />
          {/* Arrow head */}
          <polygon points="394,18 406,36 384,36" fill="#c8dde6" />
        </svg>

        {/* Front photo — slightly tilted left */}
        <div className="photo-card-front">
          <img src={doctorsTeam} alt="SM Hospital medical team" />
        </div>

        {/* Floating badge */}
        <div className="badge-floating">
          <div style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #e6f9ef, #e6f2fa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0870a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 800, color: "#0d2d3a", margin: 0 }}>NABH Certified</p>
            <p style={{ fontSize: 11, color: "#7a9aaa", margin: "2px 0 0" }}>Trusted quality care</p>
          </div>
        </div>

      </div>

      {/* Right: Text */}
      <div>
        <p style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "2.5px",
          color: "#0870a3",
          textTransform: "uppercase",
          marginBottom: 14,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          <span style={{
            display: "inline-block",
            width: 22,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(to right, #3bcc7a, #0870a3)",
          }} />
          About Us
        </p>

        <h2 style={{
          fontSize: "clamp(26px, 3.5vw, 40px)",
          fontWeight: 800,
          color: "#0d2d3a",
          lineHeight: 1.2,
          marginBottom: 20,
        }}>
          More than a hospital —<br />
          <span style={{ color: "#0870a3" }}>your healthcare partner.</span>
        </h2>

        <p style={{ fontSize: 15, color: "#5a7a8a", lineHeight: 1.75, marginBottom: 16 }}>
          At SM Hospital, we believe in providing compassionate, patient-centred care. Our experienced doctors
          and healthcare professionals deliver the highest standard of medical services to Nayandahalli,
          Bengaluru and beyond.
        </p>

        <p style={{ fontSize: 15, color: "#5a7a8a", lineHeight: 1.75, marginBottom: 32 }}>
          With modern facilities, affordable pricing, and a strong focus on preventive care — every patient
          feels genuinely cared for from the moment they walk through our doors.
        </p>

        <a href="#services" className="explore-btn">
          Explore More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* Stats row — full bleed bottom */}
    <div className="stats-row">
      {stats.map((s, i) => (
        <div key={i} className={i > 0 ? "stat-divider" : ""}>
          <p style={{ margin: "0 0 6px", lineHeight: 1 }}>
            <span style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: "#0d2d3a" }}>
              {s.value}
            </span>
            <span style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#0870a3" }}>
              {s.suffix}
            </span>
          </p>
          <p style={{ fontSize: 13, color: "#7a9aaa", fontWeight: 500, margin: 0 }}>{s.label}</p>
        </div>
      ))}
    </div>

  </section>
);

export default AboutSection;
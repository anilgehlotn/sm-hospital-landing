import { useState } from "react";

const categories = [
  {
    id: "basic",
    label: "Basic & Minor Procedures",
    shortLabel: "Basic / Minor",
    color: "teal",
    count: 7,
    procedures: [
      { name: "Incision & Drainage", sub: "Abscess" },
      { name: "Suturing of Wounds" },
      { name: "Excision of Small Cysts / Lipomas" },
      { name: "Nail Excision" },
      { name: "Wound Debridement" },
      { name: "Circumcision" },
      { name: "Biopsy", sub: "Skin / soft tissue" },
    ],
  },
  {
    id: "gi",
    label: "Gastrointestinal Surgeries",
    shortLabel: "Gastrointestinal",
    color: "blue",
    count: 8,
    procedures: [
      { name: "Appendectomy", sub: "Appendix removal" },
      { name: "Cholecystectomy", sub: "Gallbladder removal" },
      { name: "Hernia Repair", sub: "Inguinal, umbilical, incisional" },
      { name: "Hemorrhoidectomy", sub: "Piles surgery" },
      { name: "Fistula Surgery", sub: "Fistulectomy / seton placement" },
      { name: "Fissure Surgery", sub: "Lateral sphincterotomy" },
      { name: "Bowel Resection & Anastomosis" },
      { name: "Colostomy / Ileostomy" },
    ],
  },
  {
    id: "lap",
    label: "Laparoscopic Surgeries",
    shortLabel: "Laparoscopic",
    color: "indigo",
    count: 4,
    procedures: [
      { name: "Lap Appendectomy" },
      { name: "Lap Cholecystectomy" },
      { name: "Lap Hernia Repair" },
      { name: "Diagnostic Laparoscopy" },
    ],
  },
  {
    id: "breast",
    label: "Breast Surgeries",
    shortLabel: "Breast",
    color: "rose",
    count: 4,
    procedures: [
      { name: "Lumpectomy" },
      { name: "Mastectomy" },
      { name: "Breast Abscess Drainage" },
      { name: "Breast Biopsy" },
    ],
  },
  {
    id: "thyroid",
    label: "Thyroid & Neck Surgery",
    shortLabel: "Thyroid & Neck",
    color: "teal",
    count: 3,
    procedures: [
      { name: "Thyroidectomy" },
      { name: "Lymph Node Excision" },
      { name: "Neck Mass Removal" },
    ],
  },
  {
    id: "urology",
    label: "Urological Procedures",
    shortLabel: "Urology",
    color: "blue",
    count: 5,
    procedures: [
      { name: "Hydrocele Repair" },
      { name: "Varicocele Surgery" },
      { name: "Suprapubic Catheterization" },
      { name: "Urology consult" },
      { name: "Laser lithotripsy" },
      { name: "Stenting if needed" },
      { name: "Post-procedure care" },
      { name: "Flush therapy" },
    ],
  },
  {
    id: "other",
    label: "Other Common Surgeries",
    shortLabel: "Other",
    color: "indigo",
    count: 2,
    procedures: [
      { name: "Amputation" },
      { name: "Skin Grafting" },
    ],
  },
];

const filters = ["All", ...categories.map((c) => c.shortLabel)];

const colorMap = {
  teal:   { bar: "#00b37e", iconBg: "#e6f9f2", badge: "#e6f9f2", badgeText: "#007a54" },
  blue:   { bar: "#0284c7", iconBg: "#e0f2fe", badge: "#e0f2fe", badgeText: "#0369a1" },
  indigo: { bar: "#6366f1", iconBg: "#eef2ff", badge: "#eef2ff", badgeText: "#4338ca" },
  rose:   { bar: "#e11d73", iconBg: "#fce7f3", badge: "#fce7f3", badgeText: "#9d174d" },
};

const WHATSAPP_NUMBER = "918431193373";

function Check() {
  return (
    <span style={{
      width: 16, height: 16, borderRadius: "50%",
      border: "1.5px solid #00b37e",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, marginTop: 2,
    }}>
      <svg width="8" height="6" viewBox="0 0 9 7" fill="none">
        <path d="M1 3.5L3.2 6L8 1" stroke="#00b37e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function SurgeryCard({ category, onEnquire }) {
  const c = colorMap[category.color];
  return (
    <div className="sp-card">
      <div style={{ height: 4, background: c.bar }} />
      <div className="sp-card-body">

        <div className="sp-card-top">
          <div className="sp-icon-wrap" style={{ background: c.iconBg }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={c.bar} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <span className="sp-card-label">{category.shortLabel}</span>
          </div>
          <span className="sp-badge" style={{ background: c.badge, color: c.badgeText }}>
            {category.count} procedure{category.count > 1 ? "s" : ""}
          </span>
        </div>

        <h3 className="sp-card-title">{category.label}</h3>
        <div className="sp-divider" />

        <ul className="sp-list">
          {category.procedures.map((proc, i) => (
            <li key={i} className="sp-li" style={{ borderBottom: i < category.procedures.length - 1 ? "1px solid #f3f7f9" : "none" }}>
              <Check />
              <span>
                <span className="sp-proc-name">{proc.name}</span>
                {proc.sub && <span className="sp-proc-sub">{proc.sub}</span>}
              </span>
            </li>
          ))}
        </ul>

        <button className="sp-btn" onClick={() => onEnquire(category.label)}>Enquire Now</button>
      </div>
    </div>
  );
}

export default function SurgicalProcedures() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? categories
    : categories.filter((c) => c.shortLabel === activeFilter);

  const handleEnquireClick = (categoryName) => {
    const msg = encodeURIComponent(
      `Hello SM Hospital,\n\nI am interested in the ${categoryName} surgical procedures and would like more information.\n\nPlease contact me soon.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section style={{ background: "#fff", padding: "56px 16px 72px", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }

        .sp-inner { max-width: 1120px; margin: 0 auto; }

        .sp-header { text-align: center; margin-bottom: 40px; }
        .sp-eyebrow {
          display: block; font-size: 10px; font-weight: 700;
          letter-spacing: 3px; color: #0284c7;
          text-transform: uppercase; margin-bottom: 12px;
        }
        .sp-h2 {
          font-size: clamp(24px, 4vw, 38px); font-weight: 800;
          color: #0c1f2e; line-height: 1.2; margin: 0 0 12px;
        }
        .sp-sub {
          font-size: 15px; color: #5a7a8a;
          margin: 0 auto 20px; max-width: 440px; line-height: 1.65;
        }
        .sp-bar {
          width: 44px; height: 3px; border-radius: 3px;
          background: #00b37e; margin: 0 auto;
        }

        /* Stats strip */
        .sp-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          max-width: 560px;
          margin: 0 auto 40px;
        }
        @media (min-width: 480px) { .sp-stats { grid-template-columns: repeat(4, 1fr); } }
        .sp-stat {
          background: #f4f8fb; border-radius: 12px;
          padding: 14px 12px; text-align: center;
        }
        .sp-stat-num { font-size: 22px; font-weight: 800; color: #0c1f2e; }
        .sp-stat-lbl { font-size: 10px; color: #7a9aaa; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px; }

        /* Filters */
        .sp-filters {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 8px; margin-bottom: 36px;
        }
        .sp-fb {
          padding: 8px 16px; border-radius: 100px; font-size: 12px;
          font-weight: 600; cursor: pointer; border: 1.5px solid #d1e5ef;
          background: #fff; color: #4a7080; font-family: inherit;
          white-space: nowrap; transition: all 0.17s ease; letter-spacing: 0.2px;
        }
        .sp-fb.active { background: #0284c7; color: #fff; border-color: #0284c7; }
        .sp-fb:not(.active):hover { border-color: #0284c7; color: #0284c7; }

        /* Grid */
        .sp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (min-width: 540px) { .sp-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; } }
        @media (min-width: 860px) { .sp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }

        /* Card */
        .sp-card {
          background: #fff; border-radius: 16px; overflow: hidden;
          border: 1px solid #e8f0f5; display: flex; flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(2,132,199,0.13);
        }
        .sp-card-body {
          padding: 20px 20px 22px;
          display: flex; flex-direction: column; flex: 1;
        }

        .sp-card-top {
          display: flex; align-items: center;
          gap: 10px; margin-bottom: 12px;
        }
        .sp-icon-wrap {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .sp-card-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.4px; color: #7a9aaa; text-transform: uppercase;
        }
        .sp-badge {
          font-size: 10px; font-weight: 700; border-radius: 20px;
          padding: 3px 9px; white-space: nowrap; flex-shrink: 0;
        }

        .sp-card-title {
          font-size: 15px; font-weight: 700; color: #0c1f2e; margin: 0 0 12px;
          line-height: 1.3;
        }
        .sp-divider { border: none; border-top: 1px solid #eef3f6; margin: 0 0 10px; }

        .sp-list { list-style: none; margin: 0; padding: 0; flex: 1; }
        .sp-li {
          display: flex; align-items: flex-start; gap: 8px;
          padding: 5px 0;
        }
        .sp-proc-name { font-size: 13px; color: #2d4a5a; font-weight: 500; display: block; }
        .sp-proc-sub { font-size: 11px; color: #7a9aaa; margin-top: 1px; display: block; }

        .sp-btn {
          margin-top: 16px; width: 100%; padding: 12px 0; border-radius: 8px;
          font-size: 13px; font-weight: 700; background: #00b37e; color: #fff;
          border: none; cursor: pointer; font-family: inherit; letter-spacing: 0.2px;
          transition: background 0.17s, transform 0.14s;
        }
        .sp-btn:hover { background: #009168; transform: scale(1.02); }

        .sp-note {
          text-align: center; font-size: 11px; color: #8aacba; margin-top: 6px;
        }
      `}</style>

      <div className="sp-inner">

        {/* Header */}
        <div className="sp-header">
          <span className="sp-eyebrow">General Surgery</span>
          <h2 className="sp-h2">Surgical Procedures We Offer</h2>
          <p className="sp-sub">Expert surgical care across all specialties, performed by experienced surgeons. </p>
          <p className="sp-sub">Experienced and Trusted Surgeons</p>
          <div className="sp-bar" />
        </div>

        {/* Stats */}
        <div className="sp-stats">
          {[
            { num: "7", lbl: "Categories" },
            { num: "30+", lbl: "Procedures" },
            { num: "Lap", lbl: "Laparoscopic" },
            { num: "24/7", lbl: "Emergency" },
          ].map((s) => (
            <div key={s.lbl} className="sp-stat">
              <div className="sp-stat-num">{s.num}</div>
              <div className="sp-stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="sp-filters">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`sp-fb${activeFilter === f ? " active" : ""}`}
            >{f}</button>
          ))}
        </div>

        {/* Cards */}
        <div className="sp-grid">
          {filtered.map((cat) => (
            <SurgeryCard key={cat.id} category={cat} onEnquire={handleEnquireClick} />
          ))}
        </div>

        <p className="sp-note">All procedures performed by qualified surgeons. Pricing confirmed during consultation.</p>
      </div>
    </section>
  );
}
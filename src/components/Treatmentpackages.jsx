import { useState } from "react";
import { Heart, Scissors, Droplet, Brain, Baby, Activity } from "lucide-react";

const packages = [
  {
    id: 1,
    category: "Maternity",
    name: "Normal Delivery",
    label: "New Mothers",
    description: "Safe and comfortable natural childbirth with complete delivery package.",
    price: "₹35,000",
    cta: "Book Your Delivery",
    features: ["Pre-natal consults", "Delivery room & nursing", "Post-natal care 2 days", "Medicines & supplies included"],
    icon: Baby,
    maternity: true,
  },
  {
    id: 2,
    category: "Maternity",
    name: "LSCS / C-Section",
    label: "Planned Births",
    description: "Surgical cesarean delivery with full anaesthesia and recovery support.",
    price: "₹65,000",
    cta: "Book Your Delivery",
    features: ["Modular OT setup", "Anaesthesia included", "Recovery 3–4 days", "Medicines & supplies included"],
    icon: Heart,
    maternity: true,
  }
  ,
  {
    id: 5,
    category: "Cardiology",
    name: "Hypertension Package",
    label: "Cardiac Health",
    description: "Complete cardiac evaluation with 3-month follow-up plan.",
    price: null,
    cta: "Enquire Now",
    features: ["ECG + 2D Echo", "Lipid profile & RFT", "Cardiologist review", "3-month follow-up"],
    icon: Activity,
    maternity: false,
  },
  {
    id: 6,
    category: "Neurology",
    name: "Neuro Evaluation",
    label: "Neurological Care",
    description: "Comprehensive neurological assessment with EEG/MRI referral.",
    price: null,
    cta: "Enquire Now",
    features: ["Neurologist consult", "EEG / MRI referral", "Medication review", "Follow-up included"],
    icon: Brain,
    maternity: false,
  },
];

const filters = ["All", "Maternity", "Surgery", "Urology", "Cardiology", "Neurology"];

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

export default function TreatmentPackages() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? packages
    : packages.filter((p) => p.category === activeFilter);

  const handleEnquireClick = (packageName) => {
    const msg = encodeURIComponent(
      `Hello SM Hospital,\n\nI am interested in the ${packageName} package and would like more information.\n\nPlease contact me soon.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section style={{ background: "#f4f8fb", padding: "56px 16px 72px", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }

        .tp-inner { max-width: 1120px; margin: 0 auto; }

        .tp-header { text-align: center; margin-bottom: 40px; }
        .tp-eyebrow {
          display: block; font-size: 10px; font-weight: 700;
          letter-spacing: 3px; color: #0284c7;
          text-transform: uppercase; margin-bottom: 12px;
        }
        .tp-h2 {
          font-size: clamp(24px, 4vw, 38px); font-weight: 800;
          color: #0c1f2e; line-height: 1.2; margin: 0 0 12px;
        }
        .tp-sub {
          font-size: 15px; color: #5a7a8a;
          margin: 0 auto 20px; max-width: 420px; line-height: 1.65;
        }
        .tp-bar {
          width: 44px; height: 3px; border-radius: 3px;
          background: #00b37e; margin: 0 auto;
        }

        .tp-filters {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 8px; margin-bottom: 36px;
        }
        .tp-fb {
          padding: 8px 18px; border-radius: 100px; font-size: 12px;
          font-weight: 600; cursor: pointer; border: 1.5px solid #d1e5ef;
          background: #fff; color: #4a7080; font-family: inherit;
          white-space: nowrap; transition: all 0.17s ease; letter-spacing: 0.2px;
        }
        .tp-fb.active { background: #0284c7; color: #fff; border-color: #0284c7; }
        .tp-fb:not(.active):hover { border-color: #0284c7; color: #0284c7; }

        .tp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (min-width: 540px) { .tp-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; } }
        @media (min-width: 860px) { .tp-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }

        .tp-card {
          background: #fff; border-radius: 16px; overflow: hidden;
          border: 1px solid #e8f0f5; display: flex; flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .tp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(2,132,199,0.13);
        }

        .tp-card-accent { height: 4px; }
        .tp-card-body {
          padding: 20px 20px 22px;
          display: flex; flex-direction: column; flex: 1;
        }

        .tp-card-top {
          display: flex; align-items: center;
          gap: 10px; margin-bottom: 14px;
        }
        .tp-icon-wrap {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .tp-card-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.4px; color: #7a9aaa; text-transform: uppercase;
        }

        .tp-name-row {
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 8px; margin-bottom: 8px;
        }
        .tp-name {
          font-size: 16px; font-weight: 700;
          color: #0c1f2e; line-height: 1.25; flex: 1;
        }
        .tp-price {
          font-size: 18px; font-weight: 800; color: #0c1f2e; line-height: 1; white-space: nowrap;
        }
        .tp-price-sub { font-size: 10px; color: #7a9aaa; margin-top: 3px; text-align: right; }
        .tp-on-req {
          font-size: 11px; font-weight: 600; color: #0284c7;
          background: #e0f2fe; padding: 4px 10px; border-radius: 6px; white-space: nowrap;
        }

        .tp-desc {
          font-size: 13px; color: #6a8a9a; line-height: 1.6; margin-bottom: 14px;
        }
        .tp-divider { border: none; border-top: 1px solid #eef3f6; margin: 0 0 12px; }

        .tp-features { display: flex; flex-direction: column; gap: 8px; flex: 1; margin-bottom: 18px; }
        .tp-fi {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12px; font-weight: 500; color: #3a5060;
        }

        .tp-btn {
          width: 100%; padding: 12px 0; border-radius: 8px; font-weight: 700;
          font-size: 13px; cursor: pointer; background: #00b37e; color: #fff;
          border: none; font-family: inherit; letter-spacing: 0.2px;
          transition: background 0.17s, transform 0.14s;
        }
        .tp-btn:hover { background: #009168; transform: scale(1.02); }

        .tp-note {
          text-align: center; font-size: 11px; color: #8aacba; margin-top: 6px;
        }
      `}</style>

      <div className="tp-inner">

        {/* Header */}
        <div className="tp-header">
          <span className="tp-eyebrow">Transparent Pricing</span>
          <h2 className="tp-h2">Treatment Packages for Every Family</h2>
          <p className="tp-sub">Comprehensive packages designed with your family's wellbeing in mind</p>
          <div className="tp-bar" />
        </div>

        {/* Filters */}
        <div className="tp-filters">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`tp-fb${activeFilter === f ? " active" : ""}`}
            >{f}</button>
          ))}
        </div>

        {/* Cards */}
        <div className="tp-grid">
          {filtered.map((pkg) => {
            const Icon = pkg.icon;
            const accent = pkg.maternity
              ? "linear-gradient(to right, #00b37e, #009168)"
              : "linear-gradient(to right, #0284c7, #0ea5e9)";
            const iconColor = pkg.maternity ? "#009168" : "#0284c7";
            const iconBg = pkg.maternity ? "#e6f9f2" : "#e0f2fe";

            return (
              <div key={pkg.id} className="tp-card">
                <div className="tp-card-accent" style={{ background: accent }} />
                <div className="tp-card-body">

                  <div className="tp-card-top">
                    <div className="tp-icon-wrap" style={{ background: iconBg }}>
                      <Icon size={17} strokeWidth={1.8} color={iconColor} />
                    </div>
                    <span className="tp-card-label">{pkg.label}</span>
                  </div>

                  <div className="tp-name-row">
                    <span className="tp-name">{pkg.name}</span>
                    {pkg.price ? (
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div className="tp-price">{pkg.price}</div>
                        <div className="tp-price-sub">onwards</div>
                      </div>
                    ) : (
                      <span className="tp-on-req">On Request</span>
                    )}
                  </div>

                  <p className="tp-desc">{pkg.description}</p>
                  <hr className="tp-divider" />

                  <div className="tp-features">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="tp-fi">
                        <Check />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="tp-btn"
                    onClick={() => handleEnquireClick(pkg.name)}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="tp-note">All packages include GST. Final pricing confirmed during consultation.</p>
      </div>
    </section>
  );
}
import { useState } from "react";
import { ArrowUpRight, Star, Phone, MessageCircle } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  role: string;
  qualification: string;
  department: string;
  rating: number;
  reviews: number;
  experience: string;
  phone?: string;
  available: boolean;
  gradient: string;
  initials: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Mamatha T S",
    role: "Lead Specialist",
    qualification: "MBBS, MS (OBG)",
    department: "OBG & Maternity",
    rating: 4.9,
    reviews: 312,
    experience: "14 yrs",
    phone: "+91 97311 07743",
    available: true,
    gradient: "linear-gradient(135deg, #1a6b3f 0%, #2caa60 100%)",
    initials: "MT",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    role: "General Physician",
    qualification: "MBBS, MD",
    department: "General Medicine",
    rating: 4.8,
    reviews: 278,
    experience: "11 yrs",
    available: true,
    gradient: "linear-gradient(135deg, #0a4f7a 0%, #0870a3 100%)",
    initials: "RK",
  },
  {
    id: 3,
    name: "Dr. Arjun Reddy",
    role: "Surgical Specialist",
    qualification: "MBBS, MS (Surgery)",
    department: "General Surgery",
    rating: 4.7,
    reviews: 194,
    experience: "9 yrs",
    available: false,
    gradient: "linear-gradient(135deg, #6b3a1a 0%, #c06a2a 100%)",
    initials: "AR",
  },
  {
    id: 4,
    name: "Dr. Priya Sharma",
    role: "Paediatric Consultant",
    qualification: "MBBS, DCH, MD",
    department: "Pediatrics",
    rating: 4.9,
    reviews: 401,
    experience: "12 yrs",
    available: true,
    gradient: "linear-gradient(135deg, #5a1a6b 0%, #9b3ec0 100%)",
    initials: "PS",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
    <Star
      size={13}
      fill="#f59e0b"
      stroke="none"
    />
    <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a2e2a", fontFamily: "'DM Sans', sans-serif" }}>
      {rating}
    </span>
  </div>
);

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.13), 0 4px 16px rgba(44,170,96,0.10)"
          : "0 4px 24px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        border: "1px solid rgba(0,0,0,0.06)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Photo area */}
      <div
        style={{
          position: "relative",
          height: "220px",
          background: "#f2f6f4",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* Subtle gradient bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, #eaf7f0 0%, #ddeef9 100%)",
          }}
        />

        {/* Avatar placeholder with initials */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "140px",
            height: "175px",
            borderRadius: "70px 70px 0 0",
            background: doctor.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "42px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.92)",
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "-1px",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.12)",
          }}
        >
          {doctor.initials}
        </div>

        {/* Availability badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: doctor.available ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.80)",
            borderRadius: "30px",
            padding: "4px 10px 4px 7px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: doctor.available ? "#2caa60" : "#f87171",
              boxShadow: doctor.available ? "0 0 0 2px rgba(44,170,96,0.2)" : "0 0 0 2px rgba(248,113,113,0.2)",
            }}
          />
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#1a2e2a", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.3px" }}>
            {doctor.available ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* Experience chip */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            background: "rgba(255,255,255,0.92)",
            borderRadius: "30px",
            padding: "4px 10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <span style={{ fontSize: "10px", fontWeight: 700, color: "#0870a3", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.3px" }}>
            {doctor.experience} exp
          </span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "18px 20px 0 20px", flex: 1 }}>
        {/* Department pill */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(44,170,96,0.08)",
            border: "1px solid rgba(44,170,96,0.18)",
            borderRadius: "30px",
            padding: "3px 10px",
            marginBottom: "8px",
          }}
        >
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#1a8c4e", letterSpacing: "0.5px", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}>
            {doctor.department}
          </span>
        </div>

        {/* Name */}
        <h3
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: "#0d1f1b",
            margin: "0 0 2px 0",
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "-0.3px",
          }}
        >
          {doctor.name}
        </h3>

        {/* Role + Qualification */}
        <p style={{ fontSize: "12px", color: "#6b8280", margin: "0 0 10px 0", fontFamily: "'DM Sans', sans-serif" }}>
          {doctor.role} · {doctor.qualification}
        </p>

        {/* Rating + reviews */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <StarRating rating={doctor.rating} />
          <span style={{ fontSize: "11px", color: "#8eaaa6", fontFamily: "'DM Sans', sans-serif" }}>
            ({doctor.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(0,0,0,0.06)", margin: "0 20px" }} />

      {/* Footer */}
      <div
        style={{
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {doctor.phone ? (
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Phone size={12} color="#6b8280" />
            <span style={{ fontSize: "11px", color: "#6b8280", fontFamily: "'DM Sans', sans-serif" }}>
              {doctor.phone}
            </span>
          </div>
        ) : (
          <span style={{ fontSize: "11px", color: "#6b8280", fontFamily: "'DM Sans', sans-serif" }}>
            Available for Consultation
          </span>
        )}

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: hovered ? "#2caa60" : "transparent",
            border: `1.5px solid ${hovered ? "#2caa60" : "#2caa60"}`,
            borderRadius: "30px",
            padding: "5px 12px",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
        >
          <MessageCircle size={11} color={hovered ? "#fff" : "#2caa60"} />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: hovered ? "#fff" : "#2caa60",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.25s ease",
            }}
          >
            Book
          </span>
        </button>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        style={{
          width: "100%",
          padding: "60px 20px sm:80px 24px md:80px",
          background: "linear-gradient(160deg, #f5faf7 0%, #eef5f8 50%, #f5f0fa 100%)",
          fontFamily: "'DM Sans', sans-serif",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "40px md:56px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(44,170,96,0.1)",
                border: "1px solid rgba(44,170,96,0.2)",
                borderRadius: "30px",
                padding: "5px 14px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2caa60" }} />
              <span style={{ fontSize: "clamp(10px, 2vw, 11px)", fontWeight: 600, color: "#1a8c4e", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                Our Team
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 42px)",
                fontWeight: 700,
                color: "#0d1f1b",
                margin: "0 0 12px 0",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
              }}
            >
              Meet Our Specialist Doctors
            </h2>

            <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: "#5a7870", maxWidth: "420px", margin: "0 auto", lineHeight: 1.6 }}>
              Experienced doctors committed to your care and recovery, available across specialties
            </p>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px sm:20px md:24px",
              marginBottom: "36px md:48px",
            }}
          >
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "clamp(13px, 2.5vw, 14px)", color: "#6b8280", marginBottom: "10px" }}>
              Want to consult a specific doctor?
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "clamp(13px, 2.5vw, 14px)",
                fontWeight: 600,
                color: "#2caa60",
                textDecoration: "none",
                borderBottom: "1.5px solid rgba(44,170,96,0.35)",
                paddingBottom: "2px",
                transition: "border-color 0.2s",
              }}
            >
              View Full Team
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default TeamSection;

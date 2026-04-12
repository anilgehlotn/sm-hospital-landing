import { ArrowRight, Phone } from "lucide-react";

interface Doctor {
  id: number;
  initials: string;
  role: string;
  name: string;
  qualification: string;
  department: string;
  phone?: string;
}

const TeamSection = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      initials: "MT",
      role: "Lead Specialist",
      name: "Dr. Mamatha T S",
      qualification: "MBBS, MS (OBG)",
      department: "OBG & Maternity",
      phone: "+91 97311 07743",
    },
    {
      id: 2,
      initials: "GP",
      role: "General Physician",
      name: "Dr. (Name TBA)",
      qualification: "MBBS, MD",
      department: "General Medicine",
    },
    {
      id: 3,
      initials: "SS",
      role: "Surgical Specialist",
      name: "Dr. (Name TBA)",
      qualification: "MBBS, MS (Surgery)",
      department: "General Surgery",
    },
    {
      id: 4,
      initials: "PC",
      role: "Paediatric Consultant",
      name: "Dr. (Name TBA)",
      qualification: "MBBS, DCH, MD",
      department: "Pediatrics",
    },
  ];

  return (
    <section
      className="w-full py-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(to bottom right, #f8fffe, #f0f7f4)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Left Aligned */}
        <div className="mb-12">
          {/* Pill Label */}
          <div
            className="inline-block text-xs tracking-widest font-medium rounded-full px-4 py-1 mb-4"
            style={{
              backgroundColor: "rgba(44, 170, 96, 0.1)",
              color: "#2caa60",
            }}
          >
            OUR TEAM
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-semibold mb-2"
            style={{ color: "#1a2e2a" }}
          >
            Meet Our Specialist Doctors
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm"
            style={{ color: "#4a5e58" }}
          >
            Experienced doctors committed to your care and recovery
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#2caa60]/30 overflow-hidden"
            >
              {/* Top Gradient Strip */}
              <div
                className="h-24 relative rounded-t-2xl"
                style={{
                  background: "linear-gradient(to right, rgba(44, 170, 96, 0.1), rgba(8, 112, 163, 0.1))",
                }}
              >
                {/* Avatar */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-semibold ring-4 ring-white transition-all duration-300 hover:ring-[#2caa60]/20"
                  style={{
                    background: "linear-gradient(135deg, #2caa60, #0870a3)",
                  }}
                >
                  {doctor.initials}
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-10 px-5 pb-5 text-center">
                {/* Role Label */}
                <p
                  className="text-[10px] uppercase tracking-widest font-medium"
                  style={{ color: "#0870a3" }}
                >
                  {doctor.role}
                </p>

                {/* Doctor Name */}
                <h3
                  className="text-base font-semibold mt-0.5"
                  style={{ color: "#1a2e2a" }}
                >
                  {doctor.name}
                </h3>

                {/* Qualification */}
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "#4a5e58" }}
                >
                  {doctor.qualification}
                </p>

                {/* Department Pill */}
                <div
                  className="mt-3 inline-block text-xs font-medium rounded-full px-3 py-0.5 border"
                  style={{
                    backgroundColor: "rgba(44, 170, 96, 0.08)",
                    color: "#2caa60",
                    borderColor: "rgba(44, 170, 96, 0.2)",
                  }}
                >
                  {doctor.department}
                </div>

                {/* Divider */}
                <div
                  className="border-t mt-4 mx-4"
                  style={{ borderColor: "rgb(243, 244, 246)" }}
                ></div>

                {/* Bottom Section */}
                <div className="py-3 px-5 flex items-center justify-between">
                  {/* Phone or Consultation Text */}
                  <div className="flex items-center gap-1">
                    {doctor.phone ? (
                      <>
                        <Phone size={12} style={{ color: "#4a5e58" }} />
                        <span
                          className="text-xs"
                          style={{ color: "#4a5e58" }}
                        >
                          {doctor.phone}
                        </span>
                      </>
                    ) : (
                      <span
                        className="text-xs"
                        style={{ color: "#4a5e58" }}
                      >
                        Available for Consultation
                      </span>
                    )}
                  </div>

                  {/* Book Button */}
                  <button
                    className="text-xs font-medium flex items-center gap-1 transition-colors duration-200 hover:text-[#2caa60]"
                    style={{ color: "#0870a3" }}
                  >
                    <span>Book</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p
            className="text-sm mb-2"
            style={{ color: "#4a5e58" }}
          >
            Want to consult a specific doctor?
          </p>
          <a
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline transition-all duration-200"
            style={{ color: "#2caa60" }}
          >
            View Full Team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

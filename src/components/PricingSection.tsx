import { useState } from "react";
import { Heart, Stethoscope, Scissors, Droplet, Brain, Pill } from "lucide-react";

interface Package {
  id: number;
  category: "Maternity" | "Surgery" | "Urology" | "Cardiology" | "Neurology";
  name: string;
  description: string;
  price?: string;
  features: string[];
  icon: React.ReactNode;
}

const PricingSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const packages: Package[] = [
    {
      id: 1,
      category: "Maternity",
      name: "Normal Delivery",
      description: "Safe and comfortable natural childbirth experience",
      price: "₹35,000",
      features: [
        "Pre-natal consults",
        "Delivery room & nursing",
        "Post-natal care 2 days",
        "Newborn screening",
      ],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 2,
      category: "Maternity",
      name: "LSCS / C-Section",
      description: "Surgical cesarean delivery with comprehensive support",
      price: "₹60,000",
      features: [
        "Modular OT",
        "Anaesthesia",
        "Recovery 3–4 days",
        "Paediatric support",
      ],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 3,
      category: "Surgery",
      name: "Hernia Surgery",
      description: "Advanced surgical repair with minimal invasiveness",
      features: [
        "Surgical consult",
        "Laparoscopic option",
        "2-day stay",
        "Post-op follow-up",
      ],
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      id: 4,
      category: "Urology",
      name: "Kidney Stone — URSL",
      description: "Laser-based kidney stone removal procedure",
      features: [
        "Urology consult",
        "Laser lithotripsy",
        "Stenting if needed",
        "Post-procedure care",
      ],
      icon: <Droplet className="w-6 h-6" />,
    },
    {
      id: 5,
      category: "Cardiology",
      name: "Hypertension Package",
      description: "Complete cardiac evaluation and management",
      features: [
        "ECG + 2D Echo",
        "Lipid profile & RFT",
        "Cardiologist review",
        "3-month follow-up",
      ],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 6,
      category: "Neurology",
      name: "Neuro Evaluation",
      description: "Comprehensive neurological assessment and care",
      features: [
        "Neurologist consult",
        "EEG/MRI referral",
        "Medication review",
        "Follow-up included",
      ],
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  const filters = ["All", "Maternity", "Surgery", "Urology", "Cardiology", "Neurology"];

  const filteredPackages =
    activeFilter === "All"
      ? packages
      : packages.filter((pkg) => pkg.category === activeFilter);

  const getAccentColor = (category: string) => {
    return category === "Maternity" ? "#2caa60" : "#0870a3";
  };

  return (
    <section
      className="w-full py-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(to bottom right, #f0f7f4, #eaf3f0)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-widest font-semibold mb-3"
            style={{ color: "#2caa60" }}
          >
            TRANSPARENT PRICING
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "#1a2e2a" }}
          >
            Treatment Packages for Every Family
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "#4a5e58" }}
          >
            Comprehensive packages designed with your family's wellbeing in mind
          </p>
          {/* Underline Accent */}
          <div className="flex justify-center">
            <div
              className="h-1 rounded-full"
              style={{ width: "60px", backgroundColor: "#2caa60" }}
            ></div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "text-white"
                  : "text-[#4a5e58] border border-gray-200"
              }`}
              style={
                activeFilter === filter
                  ? { backgroundColor: "#2caa60" }
                  : { backgroundColor: "rgba(255, 255, 255, 0.6)" }
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Top Accent Strip */}
              <div
                className="h-1"
                style={{ backgroundColor: getAccentColor(pkg.category) }}
              ></div>

              {/* Card Content */}
              <div className="p-6">
                {/* Icon and Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#dde8e4" }}
                  >
                    <div style={{ color: "#0870a3" }}>{pkg.icon}</div>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "#dde8e4",
                      color: "#0870a3",
                    }}
                  >
                    {pkg.category}
                  </span>
                </div>

                {/* Package Name and Description */}
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1a2e2a" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "#4a5e58" }}
                >
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  {pkg.price ? (
                    <div>
                      <p
                        className="text-2xl font-bold"
                        style={{ color: "#2caa60" }}
                      >
                        {pkg.price}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "#4a5e58" }}
                      >
                        onwards
                      </p>
                    </div>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#0870a3" }}
                    >
                      Contact for pricing
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div
                  className="border-t my-4"
                  style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
                ></div>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-sm py-0.5 pl-3 border-l-2"
                      style={{
                        color: "#4a5e58",
                        borderColor: "rgba(44, 170, 96, 0.3)",
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className="w-full py-2 rounded-xl font-medium text-sm transition-all duration-200 border"
                  style={{
                    borderColor: "#2caa60",
                    color: "#2caa60",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      "#2caa60";
                    (e.target as HTMLButtonElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      "transparent";
                    (e.target as HTMLButtonElement).style.color = "#2caa60";
                  }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p
          className="text-xs text-center mt-8"
          style={{ color: "#4a5e58" }}
        >
          All packages include GST. Final pricing confirmed during consultation.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

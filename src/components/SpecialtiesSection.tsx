import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Scissors,
  Utensils,
  Droplets,
  Sparkles,
  Droplet,
  Eye,
  Ear,
} from "lucide-react";

interface Specialty {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const SpecialtiesSection = () => {
  const specialties: Specialty[] = [
    {
      id: 1,
      name: "Cardiology",
      description: "Heart health, ECG & cardiac care",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      id: 2,
      name: "Neurology",
      description: "Brain, spine & nervous system",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      id: 3,
      name: "Orthopedics",
      description: "Joints, fractures & sports injuries",
      icon: <Bone className="w-8 h-8" />,
    },
    {
      id: 4,
      name: "Pediatrics",
      description: "Child health & vaccinations",
      icon: <Baby className="w-8 h-8" />,
    },
    {
      id: 5,
      name: "OBG & Maternity",
      description: "Obstetrics, delivery & gynecology",
      icon: <Stethoscope className="w-8 h-8" />,
    },
    {
      id: 6,
      name: "General Medicine",
      description: "Primary care, fever & diabetes",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      id: 7,
      name: "General Surgery",
      description: "Hernia, appendix & gallbladder",
      icon: <Scissors className="w-8 h-8" />,
    },
    {
      id: 8,
      name: "Gastroenterology",
      description: "Digestive & liver disorders",
      icon: <Utensils className="w-8 h-8" />,
    },
    {
      id: 9,
      name: "Dermatology",
      description: "Skin, hair & nail treatments",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      id: 10,
      name: "Urology",
      description: "Kidney stones & urinary tract",
      icon: <Droplet className="w-8 h-8" />,
    },
    {
      id: 11,
      name: "Ophthalmology",
      description: "Eye care & cataract",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      id: 12,
      name: "ENT",
      description: "Ear, nose & throat disorders",
      icon: <Ear className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            12 Medical Specialties
            <br />
            <span className="relative inline-block">
              Under One Roof
              <span
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: "#2caa60" }}
              ></span>
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-6">
            Comprehensive care across all major medical departments
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:border-[#2caa60] hover:shadow-lg group cursor-pointer"
            >
              {/* Icon Container */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4 transition-all duration-300 group-hover:bg-blue-50"
                style={{
                  backgroundColor: "rgb(240, 253, 244)",
                }}
              >
                <div
                  className="text-green-600 transition-all duration-300 group-hover:text-[#0870a3]"
                  style={{
                    color: "#2caa60",
                  }}
                >
                  {specialty.icon}
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {specialty.name}
              </h3>
              <p className="text-gray-600 text-sm">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

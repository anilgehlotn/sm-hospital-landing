// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from "lucide-react";

// const WHATSAPP_NUMBER = "918431193373";
// const WHATSAPP_MSG = encodeURIComponent("Hello, I want to book an appointment at SM Hospital.");

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between py-4 px-4">
//         <a href="#home" className="flex items-center gap-2">
//           <img 
//             src="https://res.cloudinary.com/dqp0pkern/image/upload/v1776076608/Screenshot_2026-04-13_at_4.06.42_PM_be52kc.png"
//             alt="SM Hospital Logo"
//             className="h-10 w-auto"
//           />
//         </a>

//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className={`text-sm font-medium transition-colors hover:text-secondary ${
//                 scrolled ? "text-foreground" : "text-hero-foreground"
//               }`}
//             >
//               {l.label}
//             </a>
//           ))}
//           <a
//             href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
//           >
//             <Phone size={16} /> Book Now
//           </a>
//         </div>

//         <button
//           className={`md:hidden ${scrolled ? "text-foreground" : "text-hero-foreground"}`}
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="md:hidden bg-card shadow-lg rounded-b-xl px-6 pb-6 animate-fade-in-up">
//           {navLinks.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               onClick={() => setMobileOpen(false)}
//               className="block py-3 text-foreground font-medium border-b border-border last:border-0"
//             >
//               {l.label}
//             </a>
//           ))}
//           <a
//             href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground"
//           >
//             <Phone size={16} /> Book Now
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "918431193373";
const WHATSAPP_MSG = encodeURIComponent("Hello, I want to book an appointment at SM Hospital.");

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 h-[66px]">

        {/* BRAND — logo + two-tone name */}
        <a
          href="#home"
          className="inline-flex items-center gap-3 rounded-[14px] px-3 py-1.5 transition-all duration-500"
          style={!scrolled ? {
            border: "1px solid rgba(64,173,76,0.35)",
            background: "radial-gradient(ellipse at center, rgba(64,173,76,0.13) 0%, rgba(0,114,173,0.08) 60%, transparent 100%)",
            boxShadow: "0 0 18px 4px rgba(64,173,76,0.25), 0 0 36px 8px rgba(0,114,173,0.15)",
          } : {
            border: "1px solid transparent",
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <img
            src="https://res.cloudinary.com/dqp0pkern/image/upload/v1776078138/cropped_circle_image_yqpjq4.png"
            alt="SM Hospital"
            className="h-10 w-10 object-cover transition-all duration-500"
            style={!scrolled ? { filter: "brightness(1.12) drop-shadow(0 1px 6px rgba(0,0,0,0.2))" } : {}}
          />
          <div className="flex flex-col gap-0.5">
            <div className="text-[16px] font-extrabold leading-none tracking-tight">
              <span style={{ color: "#40ad4c" }}>SM </span>
              <span style={{ color: "#0072ad" }}>Hospital</span>
            </div>
            <div
              className="text-[9px] font-semibold uppercase tracking-[2px] transition-colors duration-500"
              style={{ color: scrolled ? "#94a3b8" : "rgba(255,255,255,0.5)" }}
            >
              Healthcare &amp; Research
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#40ad4c] ${
                scrolled ? "text-slate-700" : "text-white/85"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[9px] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #40ad4c, #2e9440)",
              boxShadow: "0 2px 14px rgba(64,173,76,0.4)",
            }}
          >
            <Phone size={13} /> Book Now
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-2xl px-6 pb-6">
          {/* Mobile brand header */}
          <div className="flex items-center gap-3 py-4 border-b border-slate-100 mb-2">
            <img
              src="https://res.cloudinary.com/dqp0pkern/image/upload/v1776078138/cropped_circle_image_yqpjq4.png"
              alt="SM Hospital"
              className="h-9 w-9 object-cover rounded-full"
            />
            <div className="flex flex-col gap-0.5">
              <div className="text-[15px] font-extrabold leading-none tracking-tight">
                <span style={{ color: "#40ad4c" }}>SM </span>
                <span style={{ color: "#0072ad" }}>Hospital</span>
              </div>
              <div className="text-[9px] font-semibold uppercase tracking-[2px] text-slate-400">
                Healthcare &amp; Research
              </div>
            </div>
          </div>

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-slate-700 font-medium border-b border-slate-100 last:border-0 hover:text-[#40ad4c] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-[9px] px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #40ad4c, #2e9440)" }}
          >
            <Phone size={13} /> Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
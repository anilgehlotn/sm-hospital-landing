// import { MapPin, Phone, Mail } from "lucide-react";

// const Footer = () => (
//   <footer className="bg-footer text-footer-foreground pt-16 pb-8">
//     <div className="container mx-auto px-4">
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//         <div className="space-y-4">
//           <h3 className="text-xl font-extrabold text-primary-foreground">
//             SM <span className="text-secondary">Hospital</span>
//           </h3>
//           <p className="text-sm leading-relaxed opacity-80">
//             Your trusted healthcare partner providing accessible, affordable and quality care for everyone.
//           </p>
//         </div>

//         <div className="space-y-4">
//           <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Services</h4>
//           <ul className="space-y-2 text-sm opacity-80">
//             <li>General Medicine</li>
//             <li>Preventive Care</li>
//             <li>Emergency Support</li>
//             <li>Specialist Visits</li>
//             <li>Pharmacy Services</li>
//           </ul>
//         </div>

//         <div className="space-y-4">
//           <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Quick Links</h4>
//           <ul className="space-y-2 text-sm opacity-80">
//             <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
//             <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
//             <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
//             <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
//           </ul>
//         </div>

//         <div className="space-y-4">
//           <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Contact Info</h4>
//           <div className="space-y-3 text-sm opacity-80">
//             <div className="flex gap-3 items-start">
//               <MapPin size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
//               <span>No. 747, ITI Layout, Drakshi Thota, Ganesha Temple Road, Nayandahalli, Bengaluru – 39</span>
//             </div>
//             <div className="flex gap-3 items-center">
//               <Phone size={18} className="flex-shrink-0 text-secondary" />
//               <a href="tel:+918431193373" className="hover:text-secondary transition-colors">+91 84311 93373</a>
//             </div>
//             <div className="flex gap-3 items-center">
//               <Mail size={18} className="flex-shrink-0 text-secondary" />
//               <a href="mailto:smhospital0303@gmail.com" className="hover:text-secondary transition-colors">smhospital0303@gmail.com</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-60">
//         © {new Date().getFullYear()} SM Hospital. All rights reserved.
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
// 
const Footer = () => (
  <footer
    style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#0a3a54",
      padding: "52px 24px 0",
    }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
      .footer-link {
        font-size: 13px;
        color: rgba(255,255,255,0.6);
        text-decoration: none;
        display: block;
        margin-bottom: 9px;
        transition: color 0.15s;
      }
      .footer-link:hover { color: #3bcc7a; }
      .footer-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
        gap: 36px;
        max-width: 1100px;
        margin: 0 auto;
        padding-bottom: 40px;
      }
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
      }
      @media (max-width: 640px) {
        .footer-grid { grid-template-columns: 1fr; gap: 24px; }
      }
      .footer-col-title {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #3bcc7a;
        margin-bottom: 16px;
      }
      .email-row { display: flex; margin-top: 20px; }
      .email-input {
        flex: 1;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        border-right: none;
        border-radius: 8px 0 0 8px;
        padding: 10px 14px;
        font-family: inherit;
        font-size: 13px;
        color: #fff;
        outline: none;
      }
      .email-input::placeholder { color: rgba(255,255,255,0.35); }
      .subscribe-btn {
        background: #3bcc7a;
        color: #fff;
        border: none;
        border-radius: 0 8px 8px 0;
        padding: 10px 16px;
        font-family: inherit;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.15s;
      }
      .subscribe-btn:hover { background: #2caa60; }
      .social-btn {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s;
        flex-shrink: 0;
      }
      .social-btn:hover { background: rgba(59,204,122,0.2); }
    `}</style>

    <div className="footer-grid">

      {/* Brand — matches Navbar exactly */}
      <div>
        <a href="#home" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16, textDecoration: "none" }}>
          <img
            src="https://res.cloudinary.com/dqp0pkern/image/upload/v1776370332/Screenshot_2026-04-17_at_12.25.47_AM-modified_w2ooek-removebg-preview_up2gad.png"
            alt="SM Hospital logo icon"
            style={{ height: 48, width: "auto", objectFit: "contain", objectPosition: "top" }}
          />
          <img
            src="https://res.cloudinary.com/dqp0pkern/image/upload/v1776750172/Screenshot_2026-04-21_at_9.36.12_AM-removebg-preview_bzfgpy.png"
            alt="SM HOSPITAL"
            style={{ height: 50, width: "auto", objectFit: "contain", display: "block" }}
          />
        </a>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
          Your trusted healthcare partner providing accessible, affordable and quality care for everyone in Nayandahalli, Bengaluru.
        </p>
      </div>

      {/* Services */}
      <div>
        <p className="footer-col-title">Services</p>
        <a className="footer-link" href="#services">General Medicine</a>
        <a className="footer-link" href="#services">Preventive Care</a>
        <a className="footer-link" href="#services">Emergency Support</a>
        <a className="footer-link" href="#services">Specialist Visits</a>
        <a className="footer-link" href="#services">Pharmacy Services</a>
      </div>

      {/* Quick Links */}
      <div>
        <p className="footer-col-title">Quick Links</p>
        <a className="footer-link" href="#home">Home</a>
        <a className="footer-link" href="#about">About Us</a>
        <a className="footer-link" href="#services">Services</a>
        <a className="footer-link" href="#specialties">Specialties</a>
        <a className="footer-link" href="#contact">Contact</a>
      </div>

      {/* Contact */}
      <div>
        <p className="footer-col-title">Contact Us</p>

        <a
          href="https://google.com/maps/dir//S+M+Hospital+-+Bangalore,+Ganesha,+747,+Shree+Hanuman+Temple+Rd,+ITI+layout,+Metro+Lay+Out,+Nayanda+Halli,+Bengaluru,+Karnataka+560026/@12.9289611,77.5046096,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bae3fe01b97d65d:0x976eea2a6588f2cb!2m2!1d77.5239335!2d12.9447574?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, textDecoration: "none" }}
        >
          <svg style={{ flexShrink: 0, marginTop: 2 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3bcc7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, transition: "color 0.15s" }}>
            No. 747, ITI Layout, Nayandahalli, Bengaluru – 560039
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <svg style={{ flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3bcc7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <a href="tel:+918431193373" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            +91 84311 93373
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 0 }}>
          <svg style={{ flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3bcc7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href="mailto:smhospital0303@gmail.com" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            smhospital0303@gmail.com
          </a>
        </div>

        <div className="email-row">
          <input className="email-input" type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

    </div>

    {/* Wordmark */}
    <div style={{ maxWidth: 1100, margin: "0 auto", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 0" }}>
      <img
        src="https://res.cloudinary.com/dqp0pkern/image/upload/v1776750172/Screenshot_2026-04-21_at_9.36.12_AM-removebg-preview_bzfgpy.png"
        alt="SM Hospital Wordmark"
        style={{
          maxWidth: "clamp(200px, 50vw, 500px)",
          height: "auto",
          width: "100%",
          objectFit: "contain",
          opacity: 0.35,
        }}
      />
    </div>

    {/* Bottom bar */}
    <div style={{
      maxWidth: 1100,
      margin: "0 auto",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "18px 0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
    }}>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
        © {new Date().getFullYear()} SM Hospital. All rights reserved.
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        {/* Twitter */}
        <div className="social-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03A12.84 12.84 0 0 1 2.1.89a4.52 4.52 0 0 0 1.4 6.03 4.49 4.49 0 0 1-2.05-.56v.06c0 2.19 1.56 4.01 3.63 4.43a4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.07 9.07 0 0 1 0 15.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 22 2.17z"/>
          </svg>
        </div>
        {/* Facebook */}
        <div className="social-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </div>
        {/* Instagram */}
        <div className="social-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.6)"/>
          </svg>
        </div>
        {/* YouTube */}
        <div className="social-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
            <polygon fill="#0a3a54" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
          </svg>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
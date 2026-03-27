import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-primary-foreground">
            SM <span className="text-secondary">Hospital</span>
          </h3>
          <p className="text-sm leading-relaxed opacity-80">
            Your trusted healthcare partner providing accessible, affordable and quality care for everyone.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>General Medicine</li>
            <li>Preventive Care</li>
            <li>Emergency Support</li>
            <li>Specialist Visits</li>
            <li>Pharmacy Services</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Contact Info</h4>
          <div className="space-y-3 text-sm opacity-80">
            <div className="flex gap-3 items-start">
              <MapPin size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
              <span>No. 747, ITI Layout, Drakshi Thota, Ganesha Temple Road, Nayandahalli, Bengaluru – 39</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={18} className="flex-shrink-0 text-secondary" />
              <a href="tel:+918431193373" className="hover:text-secondary transition-colors">+91 84311 93373</a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={18} className="flex-shrink-0 text-secondary" />
              <a href="mailto:smhospital0303@gmail.com" className="hover:text-secondary transition-colors">smhospital0303@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} SM Hospital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

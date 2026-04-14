import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918431193373";
const WHATSAPP_MSG = encodeURIComponent("Hello, I want to book an appointment at SM Hospital.");

const WhatsAppFAB = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 rounded-full bg-secondary flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    style={{
      bottom: "clamp(20px, 5vw, 24px)",
      right: "clamp(20px, 5vw, 24px)",
      width: "clamp(56px, 12vw, 64px)",
      height: "clamp(56px, 12vw, 64px)",
    }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={30} className="text-secondary-foreground" style={{ width: "clamp(24px, 5vw, 30px)", height: "clamp(24px, 5vw, 30px)" }} />
  </a>
);

export default WhatsAppFAB;

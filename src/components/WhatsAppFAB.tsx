import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918431193373";
const WHATSAPP_MSG = encodeURIComponent("Hello, I want to book an appointment at SM Hospital.");

const WhatsAppFAB = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={30} className="text-secondary-foreground" />
  </a>
);

export default WhatsAppFAB;

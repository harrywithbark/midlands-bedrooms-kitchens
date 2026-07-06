import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/gallery-data";

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl("")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

import { MessageCircle } from "lucide-react";

export function FloatingCta() {
  return (
    <a
      href="https://wa.me/15555555555?text=Hi%20Northwind%2C%20I%27d%20like%20a%20marketing%20audit"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

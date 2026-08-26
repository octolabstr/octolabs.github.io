"use client";

import { motion, useReducedMotion } from "framer-motion";

// TODO: replace with the real WhatsApp Business number before enabling this
// component, in international format without "+", spaces or leading zero
// (e.g. a number like +90 5xx xxx xx xx becomes "905xxxxxxxxx").
const WHATSAPP_NUMBER = "90XXXXXXXXXX";
const PREFILLED_MESSAGE = "Merhaba Octolabs, web siteniz üzerinden ulaşıyorum. Projem hakkında bilgi almak istiyorum.";

export default function WhatsAppButton() {
  const prefersReduced = useReducedMotion();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      initial={{ opacity: 0, y: 16, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
    >
      {!prefersReduced && (
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" style={{ animationDuration: "2.4s" }} />
      )}
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <svg viewBox="0 0 32 32" width={28} height={28} fill="#FFFFFF" aria-hidden>
          <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.68 4.56 1.87 6.42L4 29l7.77-1.83A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.6c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.6 1.08 1.1-4.48-.25-.4A9.53 9.53 0 0 1 5.4 15c0-5.86 4.77-10.6 10.62-10.6 5.86 0 10.62 4.74 10.62 10.6 0 5.86-4.76 10.6-10.62 10.6Zm5.83-7.94c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.43 5.43 4.81.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-[13.5px] font-semibold text-white transition-all duration-300 group-hover:max-w-[140px] group-hover:pr-5">
        WhatsApp&apos;tan Yazın
      </span>
    </motion.a>
  );
}

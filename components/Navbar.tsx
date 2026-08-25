"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { label: "Çözümler", href: "#solutions" },
  { label: "Hizmetler", href: "#integrations" },
  { label: "Yaklaşımımız", href: "#process" },
  { label: "Projeler", href: "#projects" },
  { label: "Hakkımızda", href: "#why" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050B18]/85 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <a href="#top" aria-label="Octolabs anasayfa">
          <Logo variant="dark" iconSize={34} />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[14.5px] font-medium text-white/85 transition hover:text-[#22C7DF]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-lg bg-gradient-to-r from-[#12A8C4] to-[#22C7DF] px-5 py-2.5 text-[14px] font-semibold text-[#050B18] transition hover:brightness-110 lg:inline-flex"
        >
          Bir Proje Konuşalım
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </a>

        <button
          aria-label="Menüyü aç"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[#050B18] lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[15px] font-medium text-white/90"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#12A8C4] to-[#22C7DF] px-5 py-2.5 text-[14px] font-semibold text-[#050B18]"
                >
                  Bir Proje Konuşalım <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

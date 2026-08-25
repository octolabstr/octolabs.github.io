"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import OctopusAnimation from "./OctopusAnimation";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#050B18] pb-20 pt-40 lg:pb-28 lg:pt-48">
      {/* backdrop: grid + glow + soft particles */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#12A8C4]/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#22C7DF]/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `pulse-soft ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#22C7DF]/30 bg-[#12A8C4]/10 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#22C7DF]"
        >
          ERP · Data · Business Intelligence
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold leading-[1.06] tracking-tight text-white"
        >
          ERP&rsquo;yi Değil,{" "}
          <span className="bg-gradient-to-r from-[#12A8C4] to-[#22C7DF] bg-clip-text text-transparent">
            İşinizi Yönetin.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#B7C6DE]"
        >
          Karmaşık süreçleri sadeleştiren, veriyi anlamlı hale getiren ve işletmenize özel ERP çözümleri.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#solutions"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#12A8C4] to-[#22C7DF] px-7 py-3.5 text-[15px] font-semibold text-[#050B18] transition hover:brightness-110"
          >
            Çözümlerimizi Keşfedin
            <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
          >
            Bizimle İletişime Geçin
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-16 w-full lg:mt-20"
        >
          <OctopusAnimation />
        </motion.div>
      </div>
    </section>
  );
}

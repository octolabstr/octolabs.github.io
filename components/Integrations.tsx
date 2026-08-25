"use client";

import { motion, useReducedMotion } from "framer-motion";
import { generateOctopusArms } from "@/lib/octopus-geometry";

const arms = generateOctopusArms({ viewBox: 520, center: 260, r0: 56, r1: 88, r2: 140, r3: 195, bendDeg: 22 });

const SYSTEMS = ["ERP", "CRM", "Banka", "E-Belge", "BI", "İK", "Satın Alma", "Stok"];

export default function Integrations() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="integrations" className="bg-[#050B18] py-24 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-bright-cyan">
            Entegrasyonlar
          </span>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
            Sistemleriniz Konuşsun. Veriniz Tek Yerde Anlam Kazansın.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[#8CA3C4]">
            Octolabs; ERP, CRM, banka, e-belge, İK ve raporlama sistemlerinizi tek merkezden birbirine bağlar.
          </p>
        </div>

        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[560px]">
          <svg viewBox="0 0 520 520" className="h-full w-full overflow-visible">
            <defs>
              <radialGradient id="intGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#12A8C4" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#12A8C4" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="intCyan" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#12A8C4" />
                <stop offset="100%" stopColor="#22C7DF" />
              </linearGradient>
            </defs>
            <circle cx="260" cy="260" r="220" fill="url(#intGlow)" />

            {arms.map((arm, i) => (
              <g key={i}>
                <path d={arm.d} stroke="url(#intCyan)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={0.55} />
                {!prefersReduced && (
                  <circle r="3" fill="#FFFFFF">
                    <animateMotion dur={`${3.2 + (i % 3) * 0.6}s`} repeatCount="indefinite" path={arm.d} begin={`${i * 0.35}s`} />
                  </circle>
                )}
                <circle cx={arm.tip[0]} cy={arm.tip[1]} r={5} fill="#22C7DF" />
              </g>
            ))}

            <circle cx="260" cy="260" r="58" fill="#0D2A5C" stroke="url(#intCyan)" strokeWidth="3" />
            <text x="260" y="255" textAnchor="middle" className="fill-white" style={{ fontSize: 15, fontWeight: 800 }}>
              OCTO
            </text>
            <text x="260" y="273" textAnchor="middle" fill="#22C7DF" style={{ fontSize: 15, fontWeight: 800 }}>
              LABS
            </text>
          </svg>

          {arms.map((arm, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-[#22C7DF]/30 bg-[#0D2A5C]/90 px-3 py-1.5 text-[12px] font-semibold text-white"
              style={{ left: `${arm.tipPct[0]}%`, top: `${arm.tipPct[1]}%` }}
            >
              {SYSTEMS[i]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

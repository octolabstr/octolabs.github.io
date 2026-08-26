"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { generateOctopusArms } from "@/lib/octopus-geometry";

const arms = generateOctopusArms({ viewBox: 560, center: 280 });

const SERVICES = [
  "ERP Danışmanlık",
  "Butik ERP Çözümleri",
  "İş Zekâsı & Raporlama",
  "Süreç Yönetimi",
  "ERP Entegrasyonları",
  "Veri & Analitik",
  "Özel Yazılım",
  "Dijital Dönüşüm",
] as const;

const STEP_MS = 2100;
const DRAW_MS = 650;
// How long the closing caption stays on screen before the whole sequence
// restarts from arm 1 — keeps the hero perpetually alive instead of running
// once and going permanently still (which needed a page refresh to replay).
const IDLE_HOLD_MS = 4500;

type Phase = "sequence" | "flash" | "idle";

export default function OctopusAnimation() {
  const prefersReduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>(prefersReduced ? "idle" : "sequence");
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [lengths, setLengths] = useState<number[]>([]);

  useEffect(() => {
    setLengths(pathRefs.current.map((p) => (p ? p.getTotalLength() : 0)));
  }, []);

  useEffect(() => {
    if (prefersReduced) return; // static, fully-drawn, all labels visible — no timers
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;
    let i = 0;

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(id);
    };

    const runStep = () => {
      setActiveIndex(i);
      setPhase("sequence");
      if (i < arms.length - 1) {
        schedule(() => { i += 1; runStep(); }, STEP_MS);
      } else {
        schedule(() => {
          setPhase("flash");
          setActiveIndex(null);
          schedule(() => {
            setPhase("idle");
            // hold on the closing caption for a beat, then loop the whole
            // sequence again from the first arm — runs indefinitely while
            // the hero is mounted, no refresh needed to see it replay.
            schedule(() => {
              i = 0;
              runStep();
            }, IDLE_HOLD_MS);
          }, 900);
        }, STEP_MS);
      }
    };

    schedule(runStep, 500);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [prefersReduced]);

  const isFlash = phase === "flash";
  const isIdle = phase === "idle";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <svg viewBox="0 0 560 560" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="octoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#12A8C4" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#12A8C4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="armCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#12A8C4" />
            <stop offset="100%" stopColor="#22C7DF" />
          </linearGradient>
          <linearGradient id="armNavy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#123F7A" />
            <stop offset="100%" stopColor="#2C6FC7" />
          </linearGradient>
          <filter id="armGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="280" cy="280" r="240" fill="url(#octoGlow)" />

        {/* base layer: all arms always fully drawn at low opacity */}
        {arms.map((arm, i) => (
          <path
            key={`base-${i}`}
            d={arm.d}
            stroke={i % 2 === 0 ? "url(#armCyan)" : "url(#armNavy)"}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={isFlash ? 0.9 : 0.28}
            style={{ transition: "opacity .5s ease" }}
          />
        ))}

        {/* base nodes */}
        {arms.map((arm, i) => (
          <g key={`nodes-${i}`}>
            <circle cx={arm.elbow1[0]} cy={arm.elbow1[1]} r={2.6} fill="#22C7DF" opacity={isFlash ? 0.9 : 0.3} style={{ transition: "opacity .5s ease" }} />
            <circle cx={arm.elbow2[0]} cy={arm.elbow2[1]} r={3.2} fill="#22C7DF" opacity={isFlash ? 0.9 : 0.3} style={{ transition: "opacity .5s ease" }} />
            <circle
              cx={arm.tip[0]}
              cy={arm.tip[1]}
              r={activeIndex === i || isFlash ? 6.5 : 4.4}
              fill="#22C7DF"
              opacity={activeIndex === i || isFlash || prefersReduced ? 1 : 0.35}
              style={{ transition: "all .4s ease", filter: activeIndex === i ? "drop-shadow(0 0 8px #22C7DF)" : "none" }}
            />
          </g>
        ))}

        {/* hidden reference paths, used only to measure length */}
        {arms.map((arm, i) => (
          <path
            key={`measure-${i}`}
            ref={(el) => { pathRefs.current[i] = el; }}
            d={arm.d}
            fill="none"
            stroke="none"
          />
        ))}

        {/* active drawing layer */}
        {!prefersReduced &&
          arms.map((arm, i) => {
            const len = lengths[i] ?? 0;
            const active = activeIndex === i;
            return (
              <motion.path
                key={`active-${i}`}
                d={arm.d}
                stroke="#FFFFFF"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#armGlow)"
                strokeDasharray={len}
                initial={{ strokeDashoffset: len }}
                animate={{ strokeDashoffset: active ? 0 : len, opacity: active ? 1 : 0 }}
                transition={{ duration: DRAW_MS / 1000, ease: "easeInOut" }}
              />
            );
          })}

        {/* center ring */}
        <motion.circle
          cx="280"
          cy="280"
          r="64"
          fill="none"
          stroke="url(#armNavy)"
          strokeWidth="24"
          animate={{ filter: isFlash ? "drop-shadow(0 0 22px #22C7DF)" : "drop-shadow(0 0 0px #22C7DF)" }}
          transition={{ duration: 0.5 }}
        />
        <circle cx="280" cy="280" r="64" fill="none" stroke="#22C7DF" strokeOpacity="0.5" strokeWidth="2" />
      </svg>

      {/* labels — tip-anchored badges (sm and up only; on mobile these can run off-screen) */}
      <div className="hidden sm:contents">
        {prefersReduced
          ? arms.map((arm, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0D2A5C]/80 px-2.5 py-1 text-[11px] font-semibold text-white"
                style={{ left: `${arm.tipPct[0]}%`, top: `${arm.tipPct[1]}%` }}
              >
                {SERVICES[i]}
              </div>
            ))
          : (
            <AnimatePresence>
              {activeIndex !== null && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-[#22C7DF]/40 bg-[#050B18]/90 px-3 py-1.5 text-[12px] font-semibold text-white shadow-[0_0_20px_rgba(34,199,223,0.35)]"
                  style={{ left: `${arms[activeIndex].tipPct[0]}%`, top: `${arms[activeIndex].tipPct[1]}%` }}
                >
                  {SERVICES[activeIndex]}
                </motion.div>
              )}
            </AnimatePresence>
          )}
      </div>

      {/* labels — simplified mobile version: no tip-anchoring (avoids off-screen overflow) */}
      <div className="mt-5 flex justify-center sm:hidden">
        {prefersReduced ? (
          <div className="flex flex-wrap justify-center gap-1.5 px-2">
            {SERVICES.map((s) => (
              <span key={s} className="whitespace-nowrap rounded-md bg-[#0D2A5C]/80 px-2 py-1 text-[10.5px] font-semibold text-white">
                {s}
              </span>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="whitespace-nowrap rounded-md border border-[#22C7DF]/40 bg-[#050B18]/90 px-3 py-1.5 text-[13px] font-semibold text-white shadow-[0_0_20px_rgba(34,199,223,0.35)]"
              >
                {SERVICES[activeIndex]}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* culminating caption, appears once the sequence + flash finish — in normal flow so it
          never overlaps the mobile label chips or the desktop tip-anchored badges above it */}
      <AnimatePresence>
        {isIdle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 w-[85%] text-center text-sm italic text-[#8CA3C4]"
          >
            “İşinizi karmaşıklaştırmadan, dijitali birlikte yönetiyoruz.”
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

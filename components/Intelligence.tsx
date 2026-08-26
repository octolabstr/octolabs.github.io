"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const KPIS = [
  { label: "Gelir", value: "₺4.2M", trend: "+12.4%", up: true, live: true },
  { label: "Maliyet", value: "₺2.6M", trend: "-4.1%", up: false, live: false },
  { label: "Kârlılık", value: "%38", trend: "+3.2pt", up: true, live: false },
];

const BUDGET = [
  { label: "Oca", budget: 62, actual: 58 },
  { label: "Şub", budget: 66, actual: 71 },
  { label: "Mar", budget: 70, actual: 64 },
  { label: "Nis", budget: 68, actual: 75 },
  { label: "May", budget: 74, actual: 80 },
  { label: "Haz", budget: 78, actual: 73 },
];

const CASHFLOW = [40, 55, 48, 62, 58, 70, 66, 78, 72, 85];

export default function Intelligence() {
  const prefersReduced = useReducedMotion();
  const [liveRevenue, setLiveRevenue] = useState(4.2);

  // Purely cosmetic — nudges the "Gelir" KPI within a small, realistic band every
  // couple of seconds so the demo panel reads as a live-updating dashboard rather
  // than a static screenshot. No real data is involved (see the DEMO VERİ badge).
  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => {
      setLiveRevenue((v) => {
        const next = v + (Math.random() - 0.45) * 0.06;
        return Math.min(4.6, Math.max(3.9, Number(next.toFixed(2))));
      });
    }, 2200);
    return () => clearInterval(id);
  }, [prefersReduced]);

  const min = Math.min(...CASHFLOW);
  const max = Math.max(...CASHFLOW);
  const cashPath = CASHFLOW.map((v, i) => {
    const x = (i / (CASHFLOW.length - 1)) * 100;
    const norm = (v - min) / (max - min || 1);
    const y = 36 - norm * 30;
    return `${x},${y}`;
  }).join(" ");

  return (
    <section id="intelligence" className="bg-white py-24 lg:py-32">
      <div className="section-container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-tech-cyan">
              Veri &amp; İş Zekâsı
            </span>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-corporate-navy">
              Veriyi Raporlamaktan Fazlasını Yapıyoruz.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-text-gray">
              Finansal ve operasyonel verilerinizi; yöneticilerin hızlı ve güvenle karar alabileceği canlı
              gösterge panellerine dönüştürüyoruz. Aşağıdaki pano, olası bir yönetim raporlaması yapısını
              göstermek amacıyla hazırlanmış örnek (demo) verilerle oluşturulmuştur.
            </p>
            <ul className="mt-7 space-y-3 text-[14.5px] text-text-gray">
              {["Finansal KPI ve kârlılık takibi", "Bütçe / gerçekleşen karşılaştırması", "Nakit akışı ve operasyonel göstergeler"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-tech-cyan" />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-[#12A8C4]/15 bg-gradient-to-b from-[#071A3D] to-[#0D2A5C] p-6 shadow-2xl"
          >
            {/* moving light sweep — the panel's "renkler hareket ediyor" cue */}
            {!prefersReduced && (
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-y-10 left-0 w-1/3 animate-shimmer-sweep bg-gradient-to-r from-transparent via-[#22C7DF]/12 to-transparent"
              />
            )}

            <div className="relative mb-5 flex items-center justify-between">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#8CA3C4]">
                Yönetim Panosu · Örnek Gösterim
              </span>
              <span className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                  <span className={`h-1.5 w-1.5 rounded-full bg-emerald-400 ${!prefersReduced ? "animate-live-blink" : ""}`} />
                  CANLI
                </span>
                <span className="rounded-full bg-[#22C7DF]/15 px-2.5 py-1 text-[10px] font-semibold text-bright-cyan">
                  DEMO VERİ
                </span>
              </span>
            </div>

            <div className="relative grid grid-cols-3 gap-3">
              {KPIS.map((k) => (
                <div key={k.label} className="rounded-xl bg-white/5 p-3.5">
                  <div className="text-[11px] text-[#8CA3C4]">{k.label}</div>
                  <motion.div
                    key={k.live ? liveRevenue : k.value}
                    initial={{ opacity: 0.3, y: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-1 text-[18px] font-bold text-white"
                  >
                    {k.live ? `₺${liveRevenue.toFixed(2)}M` : k.value}
                  </motion.div>
                  <div className={`mt-1 flex items-center gap-1 text-[11px] font-medium ${k.up ? "text-emerald-400" : "text-orange-300"}`}>
                    {k.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {k.trend}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-5 rounded-xl bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between text-[11px] text-[#8CA3C4]">
                <span>Bütçe / Gerçekleşen</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#123F7A]" />Bütçe</span>
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#22C7DF]" />Gerçekleşen</span>
                </span>
              </div>
              <div className="flex h-24 items-end gap-2.5">
                {BUDGET.map((b, i) => (
                  <div key={b.label} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="flex h-20 w-full items-end gap-0.5">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${b.budget}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className="w-1/2 rounded-t bg-[#123F7A]"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${b.actual}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.05 + 0.08 }}
                        className="w-1/2 rounded-t bg-[#22C7DF]"
                      />
                    </div>
                    <span className="text-[10px] text-[#8CA3C4]">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-4 rounded-xl bg-white/5 p-4">
              <div className="mb-2 text-[11px] text-[#8CA3C4]">Nakit Akışı</div>
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-12 w-full overflow-visible">
                <defs>
                  <linearGradient id="cashFlowGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22C7DF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#8FF3FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#22C7DF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.polyline
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  points={cashPath}
                  fill="none"
                  stroke="#22C7DF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                {/* traveling highlight — a bright dash loops along the same path so the
                    line reads as live/flowing data rather than a still chart */}
                {!prefersReduced && (
                  <polyline
                    points={cashPath}
                    fill="none"
                    stroke="url(#cashFlowGlow)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="16 84"
                    className="animate-flow-dash"
                    vectorEffect="non-scaling-stroke"
                  />
                )}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Landmark,
  Boxes,
  Building2,
  Coins,
} from "lucide-react";

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

const CASH_STATEMENT = [
  { icon: Wallet, label: "İşletme Faaliyetlerinden Nakit Akışı", value: "+₺1.85M", up: true },
  { icon: Landmark, label: "Yatırım Faaliyetlerinden Nakit Akışı", value: "-₺420K", up: false },
  { icon: Coins, label: "Finansman Faaliyetlerinden Nakit Akışı", value: "-₺180K", up: false },
];

const ASSETS = {
  total: "₺18.4M",
  current: {
    label: "Dönen Varlıklar",
    amount: "₺7.1M",
    pct: 39,
    items: [
      { label: "Nakit ve Nakit Benzerleri", value: "₺3.2M" },
      { label: "Ticari Alacaklar", value: "₺2.1M" },
      { label: "Stoklar", value: "₺1.8M" },
    ],
  },
  fixed: {
    label: "Duran Varlıklar",
    amount: "₺11.3M",
    pct: 61,
    items: [
      { label: "Maddi Duran Varlıklar", value: "₺9.6M" },
      { label: "Maddi Olmayan Varlıklar", value: "₺1.7M" },
    ],
  },
};

const TABS = [
  { id: "genel", label: "Genel Bakış" },
  { id: "nakit", label: "Nakit Akışı" },
  { id: "varlik", label: "Varlık Raporu" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Intelligence() {
  const prefersReduced = useReducedMotion();
  const [liveRevenue, setLiveRevenue] = useState(4.2);
  const [tab, setTab] = useState<TabId>("genel");

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
              göstermek amacıyla hazırlanmış örnek (demo) verilerle oluşturulmuştur — sekmelerle genel bakış,
              nakit akışı ve varlık raporu örneklerini inceleyebilirsiniz.
            </p>
            <ul className="mt-7 space-y-3 text-[14.5px] text-text-gray">
              {["Finansal KPI ve kârlılık takibi", "Nakit akış tablosu ve operasyonel göstergeler", "Varlık dağılımı ve bilanço özeti"].map(
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

            <div className="relative mb-4 flex items-center justify-between">
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

            {/* report tabs */}
            <div className="relative mb-5 flex gap-1.5 rounded-lg bg-white/5 p-1">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative flex-1 rounded-md px-2 py-2 text-[12px] font-semibold transition ${
                    tab === t.id ? "text-[#050B18]" : "text-[#8CA3C4] hover:text-white"
                  }`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="reportTabBg"
                      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                      className="absolute inset-0 rounded-md bg-gradient-to-r from-[#12A8C4] to-[#22C7DF]"
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {tab === "genel" && (
                <motion.div
                  key="genel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="grid grid-cols-3 gap-3">
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

                  <div className="mt-4 rounded-xl bg-white/5 p-4">
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
                </motion.div>
              )}

              {tab === "nakit" && (
                <motion.div
                  key="nakit"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="space-y-2">
                    {CASH_STATEMENT.map((row) => (
                      <div key={row.label} className="flex items-center justify-between rounded-xl bg-white/5 p-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                            <row.icon size={15} className="text-bright-cyan" />
                          </span>
                          <span className="text-[12.5px] text-[#B7C6DE]">{row.label}</span>
                        </div>
                        <span className={`flex items-center gap-1 text-[13.5px] font-bold ${row.up ? "text-emerald-400" : "text-orange-300"}`}>
                          {row.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                          {row.value}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between rounded-xl border border-bright-cyan/25 bg-bright-cyan/10 p-3.5">
                      <span className="text-[12.5px] font-semibold text-white">Net Nakit Artışı</span>
                      <span className="text-[14.5px] font-extrabold text-bright-cyan">+₺1.25M</span>
                    </div>
                  </div>

                  <div className="relative mt-4 rounded-xl bg-white/5 p-4">
                    <div className="mb-2 text-[11px] text-[#8CA3C4]">Nakit Akışı Trendi (10 Dönem)</div>
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
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        points={cashPath}
                        fill="none"
                        stroke="#22C7DF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
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
              )}

              {tab === "varlik" && (
                <motion.div
                  key="varlik"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="rounded-xl bg-white/5 p-3.5">
                    <div className="text-[11px] text-[#8CA3C4]">Toplam Varlıklar</div>
                    <div className="mt-1 text-[22px] font-extrabold text-white">{ASSETS.total}</div>

                    <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ASSETS.current.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="h-full bg-[#22C7DF]"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ASSETS.fixed.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="h-full bg-[#123F7A]"
                      />
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-[10.5px] text-[#8CA3C4]">
                      <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#22C7DF]" />Dönen · %{ASSETS.current.pct}</span>
                      <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#123F7A]" />Duran · %{ASSETS.fixed.pct}</span>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/5 p-3.5">
                      <div className="mb-2 flex items-center gap-2">
                        <Boxes size={14} className="text-bright-cyan" />
                        <span className="text-[11.5px] font-semibold text-white">{ASSETS.current.label}</span>
                        <span className="ml-auto text-[11px] text-[#8CA3C4]">{ASSETS.current.amount}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {ASSETS.current.items.map((it) => (
                          <li key={it.label} className="flex items-center justify-between text-[11px] text-[#B7C6DE]">
                            <span>{it.label}</span>
                            <span className="font-medium text-white">{it.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3.5">
                      <div className="mb-2 flex items-center gap-2">
                        <Building2 size={14} className="text-[#7C93BE]" />
                        <span className="text-[11.5px] font-semibold text-white">{ASSETS.fixed.label}</span>
                        <span className="ml-auto text-[11px] text-[#8CA3C4]">{ASSETS.fixed.amount}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {ASSETS.fixed.items.map((it) => (
                          <li key={it.label} className="flex items-center justify-between text-[11px] text-[#B7C6DE]">
                            <span>{it.label}</span>
                            <span className="font-medium text-white">{it.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

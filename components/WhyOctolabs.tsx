"use client";

import { motion } from "framer-motion";
import { Gem, Target, LineChart, Link2, RefreshCw } from "lucide-react";

const ITEMS = [
  { icon: Gem, title: "Butik Yaklaşım", desc: "Her işletmeye aynı çözümü sunmak yerine ihtiyaca göre tasarlıyoruz." },
  { icon: Target, title: "İş Odaklı Teknoloji", desc: "Teknolojiyi teknoloji için değil, iş sonucunu geliştirmek için kullanıyoruz." },
  { icon: LineChart, title: "Ölçülebilir Sonuçlar", desc: "Raporlama ve KPI'larla yapılan işin etkisini görünür hale getiriyoruz." },
  { icon: Link2, title: "Entegrasyon Odaklılık", desc: "Sistemlerin birbirinden kopuk çalışmasını engelliyoruz." },
  { icon: RefreshCw, title: "Sürekli Gelişim", desc: "Proje tesliminden sonra da çözümü geliştirmeye devam ediyoruz." },
];

export default function WhyOctolabs() {
  return (
    <section id="why" className="bg-light-bg py-24 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-tech-cyan">
            Neden Octolabs?
          </span>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-corporate-navy">
            Teknolojiyi Değil, Sonucu Konuşuyoruz.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 transition hover:border-tech-cyan/40 hover:shadow-[0_16px_40px_rgba(18,168,196,0.14)]"
            >
              <it.icon size={22} strokeWidth={1.8} className="mb-4 text-tech-cyan" />
              <h3 className="mb-2 text-[15.5px] font-bold text-corporate-navy">{it.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-text-gray">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

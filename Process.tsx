"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Analiz", desc: "İş süreçlerinizi ve mevcut sistemlerinizi analiz ediyoruz." },
  { n: "02", title: "Tasarım", desc: "İhtiyaca en uygun çözüm mimarisini oluşturuyoruz." },
  { n: "03", title: "Uygulama", desc: "ERP, entegrasyon, raporlama ve yazılım çalışmalarını hayata geçiriyoruz." },
  { n: "04", title: "Gelişim", desc: "Sistemi ölçüyor, geliştiriyor ve ihtiyaçlarınız doğrultusunda sürekli iyileştiriyoruz." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#050B18] py-24 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-bright-cyan">
            Yaklaşımımız
          </span>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
            Octolabs Nasıl Çalışır?
          </h2>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-14 md:grid-cols-4 md:gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-[#12A8C4] via-[#22C7DF] to-[#12A8C4] md:block"
          />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#22C7DF]/50 bg-[#050B18] text-[13px] font-bold text-bright-cyan">
                {s.n}
              </div>
              <h3 className="mb-2 text-[18px] font-bold text-white">{s.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-[#8CA3C4]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

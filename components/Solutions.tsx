"use client";

import { motion } from "framer-motion";
import { Settings2, PuzzleIcon, BarChart3, Workflow, Network, Code2 } from "lucide-react";

const CARDS = [
  {
    icon: Settings2,
    title: "ERP Danışmanlık",
    desc: "ERP süreçlerinin analizinden uygulama ve optimizasyona kadar uçtan uca danışmanlık.",
  },
  {
    icon: PuzzleIcon,
    title: "Butik ERP Çözümleri",
    desc: "Standart ERP yapılarına sığmayan ihtiyaçlarınız için işletmenize özel çözümler.",
  },
  {
    icon: BarChart3,
    title: "İş Zekâsı & Raporlama",
    desc: "Dağınık verileri yöneticilerin karar verebileceği anlamlı bilgilere dönüştürün.",
  },
  {
    icon: Workflow,
    title: "Süreç Yönetimi",
    desc: "Manuel ve karmaşık iş akışlarını dijitalleştirin ve ölçülebilir hale getirin.",
  },
  {
    icon: Network,
    title: "ERP Entegrasyonları",
    desc: "ERP, e-belge, banka, BI ve diğer sistemlerinizi birbirine bağlayın.",
  },
  {
    icon: Code2,
    title: "Özel Yazılım",
    desc: "İhtiyacınıza göre geliştirilen web tabanlı uygulamalar ve iş çözümleri.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-light-bg py-24 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-tech-cyan">
            Çözümlerimiz
          </span>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-corporate-navy">
            İşinizin Her Katmanında Yanınızdayız.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-text-gray">
            ERP, veri, raporlama ve süreçlerinizi birbirinden bağımsız sistemler olarak değil, tek bir dijital yapı
            olarak ele alıyoruz.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-black/[0.06] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-tech-cyan/40 hover:shadow-[0_20px_50px_rgba(18,168,196,0.15)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-corporate-navy to-octolabs-blue">
                <c.icon size={22} className="text-bright-cyan" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 text-[18px] font-bold text-corporate-navy">{c.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-text-gray">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

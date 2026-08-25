"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    tag: "Üretim Sektörü",
    title: "ERP Dönüşümü",
    problem: "Dağınık finans ve operasyon süreçleri, birbirinden bağımsız sistemlerde yönetiliyordu.",
    solution: "Finans, üretim ve stok süreçleri tek bir ERP altyapısında birleştirildi.",
    result: "Süreçler tek platformdan yönetilir hale geldi; veri tekrarı ve manuel kontrol ihtiyacı azaldı.",
  },
  {
    tag: "Hizmet Sektörü",
    title: "Yönetim Raporlama",
    problem: "Yönetim, karar almak için haftalarca süren manuel Excel raporlarına bağımlıydı.",
    solution: "KPI'lar otomatik, canlı güncellenen bir dashboard yapısına dönüştürüldü.",
    result: "Yönetim ekibi güncel verilere anlık erişebilir hale geldi, raporlama yükü azaldı.",
  },
  {
    tag: "Perakende",
    title: "Sistem Entegrasyonu",
    problem: "ERP, e-fatura ve banka sistemleri birbirinden kopuk çalışıyor, veriler elle taşınıyordu.",
    solution: "Sistemler arası otomatik entegrasyon katmanı kuruldu.",
    result: "Manuel veri girişi ihtiyacı ortadan kalktı, süreç hataları azaldı.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-tech-cyan">
            Projeler
          </span>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-corporate-navy">
            Örnek Proje Senaryoları
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-text-gray">
            Farklı sektörlerde karşılaştığımız tipik problemleri ve yaklaşımımızı gösteren örnek senaryolar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-light-bg p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,168,196,0.16)]"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-tech-cyan to-bright-cyan transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-tech-cyan/10 px-3 py-1 text-[11px] font-semibold text-tech-cyan">
                  {p.tag}
                </span>
                <ArrowUpRight size={18} className="text-text-gray transition group-hover:text-tech-cyan" />
              </div>
              <h3 className="mb-4 text-[19px] font-bold text-corporate-navy">{p.title}</h3>
              <dl className="space-y-3 text-[13.5px] leading-relaxed">
                <div>
                  <dt className="font-semibold text-corporate-navy">Problem</dt>
                  <dd className="text-text-gray">{p.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-corporate-navy">Çözüm</dt>
                  <dd className="text-text-gray">{p.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-corporate-navy">Sonuç</dt>
                  <dd className="text-text-gray">{p.result}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-[12.5px] text-text-gray">
          Yukarıdaki senaryolar, çalışma yaklaşımımızı örneklendirmek için hazırlanmış temsili proje tipleridir.
          Gerçek referans ve vaka çalışmalarınızı eklemek isterseniz bkz. README.md.
        </p>
      </div>
    </section>
  );
}

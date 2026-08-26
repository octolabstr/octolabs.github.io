"use client";

import { motion } from "framer-motion";
import { Sparkles, FileSearch, ShieldAlert, Bot } from "lucide-react";

const EXAMPLES = [
  {
    icon: Sparkles,
    tag: "Talep & Stok",
    title: "Akıllı Talep Tahmini",
    problem: "Sipariş ve stok kararları genellikle geçmiş tecrübeye ve manuel Excel hesaplarına dayanıyor.",
    solution: "Geçmiş satış ve mevsimsellik verisi, öğrenen bir modelle önümüzdeki dönem talebini tahmin eder.",
  },
  {
    icon: FileSearch,
    tag: "Belge & Fatura",
    title: "Yapay Zekâ ile Belge Okuma",
    problem: "Gelen fatura, irsaliye ve e-belgelerin sisteme elle girilmesi zaman kaybettiriyor, hataya açık.",
    solution: "Belgeler otomatik okunur, ilgili alanlar çıkarılır ve doğrudan ERP'ye aktarılmaya hazır hale gelir.",
  },
  {
    icon: ShieldAlert,
    tag: "Finans & Risk",
    title: "Anomali ve Risk Tespiti",
    problem: "Alışılmadık bir harcama, tekrar eden bir fatura veya anormal bir işlem fark edilmeden geçebiliyor.",
    solution: "Sistem, normal seyrin dışına çıkan hareketleri anlık işaretleyip ilgili ekibi uyarır.",
  },
  {
    icon: Bot,
    tag: "Raporlama",
    title: "Sohbet Tabanlı Rapor Asistanı",
    problem: "Yöneticinin bir rakama ulaşmak için raporlama ekibini beklemesi gerekiyor.",
    solution: "“Geçen ay en çok gider yapan üç departman hangisi?” gibi sorulara doğal dille, saniyeler içinde yanıt verir.",
  },
];

export default function AISolutions() {
  return (
    <section id="ai-solutions" className="bg-[#050B18] py-24 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-bright-cyan">
            Yapay Zekâ Destekli Çözümler
          </span>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
            ERP&apos;nizi Sadece Kayıt Tutan Değil, Düşünen Bir Sisteme Dönüştürüyoruz.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[#8CA3C4]">
            İhtiyaca göre kurgulayabileceğimiz yapay zekâ destekli çözüm tiplerinden birkaç örnek — aşağıdakiler
            kavramsal senaryolardır, gerçek bir müşteri entegrasyonunu temsil etmez.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-bright-cyan/40 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#12A8C4] to-[#22C7DF]">
                  <ex.icon size={19} strokeWidth={1.9} className="text-[#050B18]" />
                </span>
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#8CA3C4]">
                  {ex.tag}
                </span>
              </div>
              <h3 className="mb-2 text-[15.5px] font-bold text-white">{ex.title}</h3>
              <p className="text-[13px] leading-relaxed text-[#8CA3C4]">
                <span className="font-semibold text-white/70">Problem: </span>
                {ex.problem}
              </p>
              <p className="mt-2.5 text-[13px] leading-relaxed text-[#8CA3C4]">
                <span className="font-semibold text-bright-cyan">Çözüm: </span>
                {ex.solution}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-[#8CA3C4]/70">
          Yukarıdaki dört örnek, sunabileceğimiz yapay zekâ destekli çözüm tiplerini göstermek amacıyla
          hazırlanmıştır; gerçek referans ve vaka çalışmalarınız olduğunda bu bölüm kendi projelerinizle
          güncellenebilir.
        </p>
      </div>
    </section>
  );
}

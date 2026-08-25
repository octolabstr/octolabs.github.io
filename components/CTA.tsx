"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
    const FORM_ACTION = "https://formsubmit.co/ajax/anil.erdogan@octolabs.com.tr";

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          formData.append("_subject", "Octolabs web sitesi - yeni iletisim formu mesaji");
          formData.append("_template", "table");
          formData.append("_captcha", "false");
          try {
                  const res = await fetch(FORM_ACTION, {
                            method: "POST",
                            body: formData,
                            headers: { Accept: "application/json" },
                  });
                  if (res.ok) {
                            setStatus("ok");
                            form.reset();
                  } else {
                            setStatus("err");
                  }
          } catch {
                  setStatus("err");
  return (
    <section id="contact" className="relative overflow-hidden bg-[#050B18] py-24 lg:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#12A8C4]/10 blur-[130px]" />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-tight tracking-tight text-white">
            İşiniz İçin Doğru Dijital Yapıyı Birlikte Kuralım.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#B7C6DE]">
            Mevcut ERP sisteminiz, raporlama altyapınız veya dijital süreçleriniz hakkında konuşalım.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-[13px] font-medium text-[#B7C6DE]">Adınız</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Adınız Soyadınız"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14.5px] text-white placeholder:text-white/35 focus:border-[#22C7DF] focus:outline-none focus:ring-2 focus:ring-[#22C7DF]/25"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-[13px] font-medium text-[#B7C6DE]">E-posta</label>
              <input
                required
                name="email"
                type="email"
                placeholder="ornek@sirket.com"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14.5px] text-white placeholder:text-white/35 focus:border-[#22C7DF] focus:outline-none focus:ring-2 focus:ring-[#22C7DF]/25"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-[13px] font-medium text-[#B7C6DE]">Projenizi Anlatın</label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Mevcut sisteminiz ve ihtiyacınız hakkında kısaca bilgi verin..."
                className="w-full resize-y rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14.5px] text-white placeholder:text-white/35 focus:border-[#22C7DF] focus:outline-none focus:ring-2 focus:ring-[#22C7DF]/25"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#12A8C4] to-[#22C7DF] px-6 py-3.5 text-[15px] font-semibold text-[#050B18] transition hover:brightness-110"
          >
            Projenizi Anlatın
            <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </button>

          {status === "ok" && (
            <p className="mt-4 text-center text-[13.5px] font-medium text-emerald-400">
              Mesajınız başarıyla gönderildi!
            </p>
          )}
          {status === "err" && (
            <p className="mt-4 text-center text-[13.5px] font-medium text-orange-300">
              Bir sorun oluştu, lütfen tekrar deneyin ya da doğrudan anil.erdogan@octolabs.com.tr adresine yazın.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

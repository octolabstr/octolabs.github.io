import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Octolabs | ERP Danışmanlık, İş Zekâsı ve Dijital Çözümler",
  description:
    "Octolabs; ERP danışmanlık, butik ERP çözümleri, iş zekâsı, raporlama, süreç yönetimi ve ERP entegrasyonları ile işletmelerin dijital dönüşümünü kolaylaştırır.",
  keywords: [
    "ERP Danışmanlık",
    "ERP Çözümü",
    "ERP Entegrasyonu",
    "İş Zekâsı",
    "Power BI",
    "ERP Raporlama",
    "Süreç Yönetimi",
    "Dijital Dönüşüm",
    "Butik ERP",
    "Özel Yazılım",
  ],
  metadataBase: new URL("https://www.octolabs.com.tr"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Octolabs | ERP Danışmanlık, İş Zekâsı ve Dijital Çözümler",
    description:
      "Karmaşık iş süreçlerini tek bir merkezden yönetilebilir, anlaşılır ve verimli hale getiriyoruz.",
    url: "https://www.octolabs.com.tr",
    siteName: "Octolabs",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

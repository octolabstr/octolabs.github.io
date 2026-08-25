# Octolabs — Premium Kurumsal Web Sitesi

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion ile geliştirilmiş, "ahtapot" marka
metaforunu (merkezi zeka + çoklu entegre süreç) görsel kimliğin merkezine koyan premium bir
kurumsal/teknoloji web sitesi.

## Öne Çıkanlar

- **Hero'daki ahtapot animasyonu**: Merkezdeki logo halkasından 8 devre-hattı (PCB trace)
  tarzında kol çıkar. Sayfa yüklendiğinde kollar sırayla "çizilir", her kolun ucunda o
  hizmetin adı belirir (ERP Danışmanlık → Butik ERP Çözümleri → ... → Dijital Dönüşüm),
  tur tamamlanınca tüm kollar kısa süreliğine parlar ve kapanış mesajı belirir. Sonrasında
  sakin/ambient bir durgun hâle geçer (sürekli tekrar etmez — abartılı/yorucu animasyondan
  kaçınmak için).
- **`prefers-reduced-motion` desteği**: Bu tercihi açık kullanıcılarda animasyon hiç
  çalışmaz; ahtapot tamamen çizili ve tüm 8 hizmet etiketi aynı anda, sabit şekilde gösterilir.
- **Entegrasyon diyagramı** (`Sistemleriniz Konuşsun...` bölümü): Aynı ahtapot geometrisinin
  daha teknik/sürekli-akan bir versiyonu — merkezde OCTOLABS, çevresinde ERP/CRM/Banka/
  E-Belge/BI/İK/Satın Alma/Stok düğümleri.
- **Örnek (demo) veri ile İş Zekâsı paneli** ve **örnek proje senaryoları**: Gerçek müşteri
  verisi/adı kullanılmadı — bkz. aşağıdaki "Önemli: Demo İçerikler" bölümü.
- Mobilde ahtapot animasyonu sadeleştirilir (uç noktalara sabitlenmiş etiketler yerine,
  aktif hizmet adı görselin altında tek satır olarak gösterilir — taşma/kırpılma olmaz).
- Tüm renkler, tipografi ve bölüm sıralaması paylaştığınız marka brief'ine göre kuruldu
  (bkz. "Renk Paleti" ve "Bölüm Yapısı").

## Önemli: Logo Hakkında

Paylaştığınız logo görseli bu oturumda bana **dosya olarak** ulaşmadı (yalnızca sohbette
görsel olarak görüntülendi) — bu yüzden logoyu birebir/orijinal dosyasıyla projeye
gömemedim. Bunun yerine, gördüğüm görsele dayanarak **aynı kavramı** (devre hattı
tarzında sekiz kollu ahtapot halkası, "OCTO" lacivert + "LABS" turkuaz degrade yazı tipi,
aynı renk paleti) sadık şekilde vektör olarak yeniden oluşturdum: `lib/octopus-geometry.ts`
+ `components/Logo.tsx`.

**Gerçek logo dosyanızı (SVG/AI/yüksek çözünürlüklü PNG) eklemek isterseniz:**
1. Dosyayı `public/logo.svg` (veya `.png`) olarak projeye ekleyin.
2. `components/Logo.tsx` içindeki `<svg>...</svg>` bloğunu `<img src="/logo.svg" ... />` ile
   değiştirin.
3. `public/favicon.svg` dosyasını da isterseniz kendi favicon'unuzla değiştirebilirsiniz.

Hero'daki büyük animasyonlu versiyon (`components/OctopusAnimation.tsx`) zaten SVG path
olarak kurgulanmış durumda (spec'te istendiği gibi `stroke-dasharray` / `stroke-dashoffset`
tekniğiyle) — bu nedenle o kısım için ekstra bir işlem gerekmez, sadece küçük/statik logo
kullanımlarını (navbar, footer, favicon) kendi orijinal dosyanızla değiştirmeniz yeterli.

## Önemli: Demo İçerikler

Aşağıdaki iki bölüm, tasarımı ve veri yapısını göstermek amacıyla **temsili örnek
verilerle** hazırlanmıştır, gerçek müşteri/finansal veri içermez:

- **"Veriyi Raporlamaktan Fazlasını Yapıyoruz"** bölümündeki dashboard mock-up'ı
  (`components/Intelligence.tsx`) — panelin üzerinde açıkça "DEMO VERİ" etiketi bulunur.
- **"Örnek Proje Senaryoları"** bölümü (`components/Projects.tsx`) — gerçek şirket adı
  kullanılmaz, sektör bazlı temsili senaryolardır.

Gerçek finansal verileriniz, gerçek referanslarınız veya vaka çalışmalarınız olduğunda bu
iki dosyadaki `KPIS` / `BUDGET` / `CASHFLOW` / `PROJECTS` dizilerini kendi verilerinizle
güncelleyebilirsiniz.

## Renk Paleti

Brief'inizde verdiğiniz tam paleti kullandım (`tailwind.config.ts` + `app/globals.css`):

| Renk | Hex | Kullanım |
|---|---|---|
| Deep Navy | `#071A3D` | — |
| Corporate Navy | `#0D2A5C` | Başlıklar, kart aksanları |
| Octolabs Blue | `#123F7A` | Gradient/ikon arka planları |
| Technology Cyan | `#12A8C4` | Ana aksiyon rengi |
| Bright Cyan | `#22C7DF` | Vurgu, hover, glow |
| Dark Background | `#050B18` | Koyu bölüm arka planları (hero, CTA, footer) |
| Light Background | `#F6F8FB` | Açık bölüm arka planları |
| Text Gray | `#667085` | Gövde metni |

## Bölüm Yapısı

`app/page.tsx` içinde sırasıyla: `Navbar` → `Hero` (+ `OctopusAnimation`) → `Solutions` →
`Process` ("Nasıl Çalışıyoruz?") → `Intelligence` (veri/BI) → `Integrations` (entegrasyon
diyagramı) → `WhyOctolabs` → `Projects` → `CTA` (+ iletişim formu) → `Footer`.

Navigasyon menüsü brief'inizdeki 6 başlığı (`Çözümler, Hizmetler, Yaklaşımımız, Projeler,
Hakkımızda, İletişim`) birebir kullanır; `Çözümler` "Solutions" bölümüne, `Hizmetler` ise
daha teknik/entegrasyon ağırlıklı `Integrations` bölümüne yönlendirilecek şekilde
eşlendi (tek bir "Hizmetler" alt sayfası ayrıca kurulmadı — isterseniz `app/hizmetler/page.tsx`
gibi ayrı bir sayfa açıp bu linki oraya yönlendirebilirsiniz).

## Yerelde Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

Prodüksiyon derlemesi:

```bash
npm run build
npm run start
```

> Not: İlk `npm install` / `npm run build` sırasında proje, başlık fontu **Manrope**'u
> Google Fonts'tan indirir (`next/font/google`) — bu yüzden ilk derleme sırasında internet
> bağlantısı gereklidir (yalnızca ilk sefer; font dosyaları sonrasında projeye gömülür,
> siteniz yayında Google'a hiçbir istek atmaz).

## İletişim Formu (Formspree)

Alt kısımdaki iletişim formu (`components/CTA.tsx`) şu an
`https://formspree.io/f/YOUR_FORM_ID` adresine gönderim yapacak şekilde ayarlı — bu bir
örnektir, değiştirmeden mesajlar hiçbir yere ulaşmaz.

1. [formspree.io](https://formspree.io) üzerinden ücretsiz bir hesap açın, yeni form oluşturun.
2. `components/CTA.tsx` içinde `FORM_ACTION` sabitini kendi form adresinizle değiştirin.

## GitHub'a Yükleme ve Yayınlama

Bu proje **`octolabstr/octolabs.github.io`** reposunda (kullanıcı/organizasyon sayfası —
site doğrudan `https://octolabstr.github.io` kökünde yayınlanır) GitHub Pages ile
yayınlanacak şekilde hazırlanmıştır: `next.config.js` içinde `output: 'export'` zaten
açık ve `.github/workflows/deploy-pages.yml` adında bir **GitHub Actions** iş akışı
eklendi. Bu sayede `out/` klasörünü elle oluşturup yüklemenize gerek kalmaz — her
`main` branch'ine push'ta site otomatik build edilip yayınlanır.

### Kurulum (bir kere yapılır)

1. Bu projenin **tüm içeriğini** (`app/`, `components/`, `lib/`, `public/`, `.github/`,
   `package.json`, `tailwind.config.ts`, vb.) `octolabstr/octolabs.github.io` reposunun
   köküne kopyalayın — reponun mevcut (eski) içeriğinin yerini alacaktır.
2. Commit'leyip `main` branch'ine push edin:
   ```bash
   git add .
   git commit -m "Octolabs premium site (Next.js)"
   git push origin main
   ```
3. Repo → **Settings → Pages** sayfasında **Build and deployment → Source** ayarını
   **"GitHub Actions"** olarak seçin (bir kereye mahsus; daha önce "Deploy from a
   branch" seçiliyse değiştirin).
4. Repo → **Actions** sekmesinden "Deploy to GitHub Pages" iş akışının çalıştığını
   görebilirsiniz (~1-2 dakika sürer). Yeşil tik olduğunda site
   `https://octolabstr.github.io` adresinde güncellenmiş olur.

Bundan sonra her kod değişikliğinde sadece `main`'e push etmeniz yeterli — build/export
işlemini GitHub'ın sunucuları yapar (fontlar dahil internet erişimi gerektiren adımlar
orada sorunsuz çalışır).

### Alternatif — Vercel

Next.js'in sunucu taraflı özelliklerini de kullanmak isterseniz (şu an bu sitede
gerekmiyor, ileride eklerseniz gerekebilir), [vercel.com](https://vercel.com) üzerinden
GitHub hesabınızla giriş yapıp bu reponuzu "Import Project" ile içe aktarmanız yeterli;
Vercel Next.js projelerini otomatik tanır. Bu durumda `next.config.js`'teki
`output: 'export'` satırını kaldırabilirsiniz.

### Elle export (opsiyonel, Actions kullanmak istemezseniz)

1. `npm install && npm run build` — çıktı `out/` klasöründe oluşur (internet bağlantısı
   gerekir, Manrope fontu Google Fonts'tan indirilir).
2. `out/` klasörünün **içeriğini** (kendisini değil) reponun köküne kopyalayıp push edin,
   Settings → Pages → Source'u **"Deploy from a branch"** (branch: `main`, klasör: `/`)
   olarak ayarlayın.

## Özelleştirme

- **Metinler**: Her bölümün metni ilgili `components/*.tsx` dosyasının en üstündeki sabit
  (`const`) dizilerde tutulur (örn. `Solutions.tsx` içindeki `CARDS`).
- **Renkler**: `tailwind.config.ts` > `theme.extend.colors` ve `app/globals.css` > `:root`.
- **Animasyon zamanlaması**: `components/OctopusAnimation.tsx` içindeki `STEP_MS` (her
  kolun ekranda kalma süresi) ve `DRAW_MS` (kolun çizilme süresi) sabitleri.

import Logo from "./Logo";

const LINKS = [
  { label: "Çözümler", href: "#solutions" },
  { label: "Hizmetler", href: "#integrations" },
  { label: "Projeler", href: "#projects" },
  { label: "Hakkımızda", href: "#why" },
  { label: "İletişim", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050B18] py-12">
      <div className="section-container flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
        <div>
          <Logo variant="dark" showTagline iconSize={34} />
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 lg:justify-end">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13.5px] font-medium text-[#B7C6DE] transition hover:text-bright-cyan">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="section-container mt-8 border-t border-white/5 pt-6 text-center text-[12.5px] text-[#5C7096] lg:text-left">
        © 2026 Octolabs. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

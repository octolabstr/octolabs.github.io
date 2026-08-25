import { generateOctopusArms } from "@/lib/octopus-geometry";

const arms = generateOctopusArms({ viewBox: 120, center: 60, r0: 15, r1: 22, r2: 34, r3: 46, bendDeg: 24 });

interface LogoProps {
  /** 'dark' = for use on dark backgrounds (navbar/hero/footer); 'light' = for use on light backgrounds */
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
  iconSize?: number;
}

/**
 * Static, non-animated recreation of the Octolabs circuit-octopus mark for
 * compact contexts (navbar, footer, favicon-adjacent uses). The large,
 * animated centerpiece version lives in <OctopusAnimation />.
 *
 * NOTE: this is a faithful vector recreation built from the reference logo
 * you shared (same ring + circuit-trace arms + node dots, same navy/cyan
 * palette). If you have the original vector/source file, swap the <svg>
 * below with your own asset for pixel-perfect fidelity — see README.md.
 */
export default function Logo({ variant = "dark", showTagline = false, className = "", iconSize = 40 }: LogoProps) {
  const wordTop = variant === "dark" ? "#FFFFFF" : "#0D2A5C";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#12A8C4" />
            <stop offset="100%" stopColor="#22C7DF" />
          </linearGradient>
          <linearGradient id="logoNavy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#123F7A" />
            <stop offset="100%" stopColor="#0D2A5C" />
          </linearGradient>
        </defs>
        {arms.map((arm) => (
          <g key={arm.index}>
            <path
              d={arm.d}
              stroke={arm.index % 2 === 0 ? "url(#logoCyan)" : "url(#logoNavy)"}
              strokeWidth={3.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx={arm.elbow2[0]} cy={arm.elbow2[1]} r={2.6} fill={arm.index % 2 === 0 ? "#22C7DF" : "#123F7A"} />
            <circle cx={arm.tip[0]} cy={arm.tip[1]} r={4.2} fill={arm.index % 2 === 0 ? "#22C7DF" : "#123F7A"} />
          </g>
        ))}
        <circle cx="60" cy="60" r="15" fill="none" stroke="url(#logoNavy)" strokeWidth="9" />
      </svg>
      <div className="leading-none">
        <div className="flex items-baseline font-extrabold tracking-tight" style={{ fontSize: iconSize * 0.52 }}>
          <span style={{ color: wordTop }}>OCTO</span>
          <span
            style={{
              backgroundImage: "linear-gradient(90deg,#12A8C4,#22C7DF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            LABS
          </span>
        </div>
        {showTagline && (
          <div
            className="mt-1 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em]"
            style={{ color: variant === "dark" ? "#8CA3C4" : "#667085" }}
          >
            ERP • Data • Business Intelligence • Digital Transformation
          </div>
        )}
      </div>
    </div>
  );
}

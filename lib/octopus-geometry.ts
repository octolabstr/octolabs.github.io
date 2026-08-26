// Shared geometry generator for the Octolabs "circuit octopus" mark.
// Produces 8 evenly-spaced, elbowed (PCB-trace style) arms radiating from a
// central ring, plus the small node points along each arm. Used by both the
// compact static <Logo /> icon and the large animated hero <OctopusAnimation />
// so the two stay visually consistent.

export type ArmPoint = [number, number];

export interface OctopusArm {
  index: number;
  angleDeg: number;
  /** polyline points from the ring edge out to the terminal node */
  points: ArmPoint[];
  /** SVG path `d` for the polyline (straight segments, rounded joins) */
  d: string;
  /** the terminal (tip) node — where a label/badge can be anchored */
  tip: ArmPoint;
  /** tip position as a [left%, top%] pair, for absolutely-positioned HTML labels */
  tipPct: [number, number];
  /** the two intermediate elbow nodes */
  elbow1: ArmPoint;
  elbow2: ArmPoint;
}

export interface OctopusGeometryConfig {
  viewBox?: number; // square viewBox size, default 500
  center?: number; // defaults to viewBox / 2
  r0?: number; // ring outer edge — arm start
  r1?: number; // first elbow
  r2?: number; // second elbow
  r3?: number; // tip / terminal node
  bendDeg?: number; // how sharply arms bend outward
  startOffsetDeg?: number; // rotate the whole 8-arm fan
  /**
   * When false (default), the bend direction alternates per arm (i % 2), which
   * gives the compact <Logo/> and <OctopusAnimation/> a lively zigzag look —
   * fine there since neither anchors wide text labels to the tips. That same
   * alternation collapses EVERY adjacent pair of tips to ~2×bendDeg apart
   * (e.g. ~1° at the default 22° bend), which is invisible for icon dots but
   * makes label badges anchored at `tip`/`tipPct` overlap/stack.
   * When true, every arm bends the same rotational direction instead, which
   * shifts the whole 8-arm fan by a constant offset and — critically —
   * preserves the full 45° angular spacing between ALL consecutive tips
   * regardless of bendDeg. Use this for any diagram that labels the tips.
   */
  uniformBend?: boolean;
}

export function generateOctopusArms(config: OctopusGeometryConfig = {}): OctopusArm[] {
  const viewBox = config.viewBox ?? 500;
  const cx = config.center ?? viewBox / 2;
  const cy = config.center ?? viewBox / 2;
  const r0 = config.r0 ?? viewBox * 0.116;
  const r1 = config.r1 ?? viewBox * 0.184;
  const r2 = config.r2 ?? viewBox * 0.296;
  const r3 = config.r3 ?? viewBox * 0.41;
  const bend = ((config.bendDeg ?? 26) * Math.PI) / 180;
  const startOffset = ((config.startOffsetDeg ?? 22.5) * Math.PI) / 180;

  const arms: OctopusArm[] = [];
  for (let i = 0; i < 8; i++) {
    const theta = startOffset + (i * Math.PI) / 4;
    const bendDir = config.uniformBend ? 1 : i % 2 === 0 ? 1 : -1;
    const theta2 = theta + bendDir * bend;

    const pt = (r: number, ang: number): ArmPoint => [
      Math.round((cx + r * Math.cos(ang)) * 10) / 10,
      Math.round((cy + r * Math.sin(ang)) * 10) / 10,
    ];

    const p0 = pt(r0, theta);
    const p1 = pt(r1, theta);
    const p2 = pt(r2, theta2);
    const p3 = pt(r3, theta2);

    arms.push({
      index: i,
      angleDeg: (theta * 180) / Math.PI,
      points: [p0, p1, p2, p3],
      d: `M ${p0[0]} ${p0[1]} L ${p1[0]} ${p1[1]} L ${p2[0]} ${p2[1]} L ${p3[0]} ${p3[1]}`,
      tip: p3,
      tipPct: [Math.round((p3[0] / viewBox) * 1000) / 10, Math.round((p3[1] / viewBox) * 1000) / 10],
      elbow1: p1,
      elbow2: p2,
    });
  }
  return arms;
}

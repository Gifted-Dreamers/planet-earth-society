interface SectionDividerProps {
  from?: string;
  to?: string;
  variant?: "wave" | "roots" | "gentle";
  flip?: boolean;
}

export default function SectionDivider({
  from = "oklch(0.96 0.008 80)",
  to = "oklch(0.35 0.06 195)",
  variant = "wave",
  flip = false,
}: SectionDividerProps) {
  const paths: Record<string, string> = {
    wave: "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z",
    roots: "M0,60 Q180,20 360,50 T720,30 T1080,55 T1440,35 L1440,100 L0,100 Z",
    gentle: "M0,70 C480,30 960,90 1440,50 L1440,100 L0,100 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
    >
      <svg
        viewBox="0 0 1440 100"
        className="w-full block"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <rect width="1440" height="100" fill={from} />
        <path d={paths[variant]} fill={to} />
      </svg>
    </div>
  );
}

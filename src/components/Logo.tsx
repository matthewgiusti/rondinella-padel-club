type Props = {
  className?: string;
  variant?: "full" | "mark";
  tone?: "brand" | "light" | "dark";
};

/**
 * Rondinella Padel Club wordmark — typeset to echo the master brand reference:
 * the "O" of RONDINELLA carries a small swallow-tail / racket drop motif.
 */
export function Logo({ className, variant = "full", tone = "brand" }: Props) {
  const word = tone === "dark" ? "#0a0a0a" : tone === "light" ? "#f4f1ea" : "#f2b829";
  const sub = tone === "dark" ? "#0a0a0a" : "#f4f1ea";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        aria-label="Rondinella Padel Club"
      >
        <circle cx="32" cy="28" r="20" fill="none" stroke={word} strokeWidth="4" />
        <path d="M32 48 L26 60 L38 58 Z" fill={word} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 80"
      className={className}
      aria-label="Rondinella Padel Club"
    >
      <text
        x="0"
        y="46"
        fill={word}
        style={{
          fontFamily: "Archivo, Inter, sans-serif",
          fontWeight: 700,
          fontSize: "44px",
          letterSpacing: "0.02em",
        }}
      >
        R
      </text>
      {/* swallow / racket drop inside the O */}
      <g transform="translate(40,16)">
        <circle cx="16" cy="16" r="14" fill={word} />
        <path d="M16 30 L11 44 L22 40 Z" fill={word} />
        <circle cx="16" cy="16" r="9" fill="#0a0a0a" />
      </g>
      <text
        x="76"
        y="46"
        fill={word}
        style={{
          fontFamily: "Archivo, Inter, sans-serif",
          fontWeight: 700,
          fontSize: "44px",
          letterSpacing: "0.02em",
        }}
      >
        NDINELLA
      </text>
      <text
        x="0"
        y="72"
        fill={sub}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "12px",
          letterSpacing: "0.42em",
        }}
      >
        PADEL CLUB
      </text>
    </svg>
  );
}

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
}

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tagGradMark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rounded square background */}
      <rect width="40" height="40" rx="11" fill="url(#tagGradMark)" />

      {/* Shine overlay */}
      <rect width="40" height="20" rx="11" fill="url(#shineGrad)" />
      <rect x="0" y="10" width="40" height="10" fill="url(#shineGrad)" />

      {/* Price tag shape (white, centered) */}
      {/* Body: rect with rounded left corners */}
      <path
        d="M10 13C10 11.343 11.343 10 13 10H25.5L31 20L25.5 30H13C11.343 30 10 28.657 10 27V13Z"
        fill="white"
        fillOpacity="0.15"
      />
      <path
        d="M10 13C10 11.343 11.343 10 13 10H25.5L31 20L25.5 30H13C11.343 30 10 28.657 10 27V13Z"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1.2"
      />

      {/* Hole */}
      <circle cx="14.5" cy="20" r="2.2" fill="white" fillOpacity="0.9" />

      {/* Ascending bars (views going up) */}
      <rect x="18.5" y="23.5" width="2.5" height="4" rx="0.8" fill="white" fillOpacity="0.55" />
      <rect x="22.5" y="21" width="2.5" height="6.5" rx="0.8" fill="white" fillOpacity="0.75" />
      <rect x="26.5" y="17.5" width="2.5" height="10" rx="0.8" fill="white" fillOpacity="0.95" />

      {/* Tiny sparkle top-right */}
      <circle cx="33" cy="10" r="1.2" fill="#6ee7b7" fillOpacity="0.8" />
      <circle cx="36" cy="7" r="0.7" fill="#6ee7b7" fillOpacity="0.5" />
    </svg>
  );
}

export function Logo({ size = 36, showWordmark = true }: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          style={{
            fontSize: size * 0.52,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#f0f0f5",
          }}
        >
          Tag
          <span style={{ color: "#10b981" }}>Mint</span>
        </span>
      )}
    </div>
  );
}

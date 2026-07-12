type Props = { type: string; className?: string };

// Simple furniture silhouettes drawn in the same technical/blueprint line
// style as the dimension motif, so the catalog feels cohesive even before
// real product photography is uploaded.
export function ProductGraphic({ type, className }: Props) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "table":
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <rect x="20" y="30" width="160" height="10" {...common} />
          <line x1="35" y1="40" x2="35" y2="95" {...common} />
          <line x1="165" y1="40" x2="165" y2="95" {...common} />
          <line x1="35" y1="60" x2="165" y2="60" {...common} strokeDasharray="3 4" />
        </svg>
      );
    case "coffee-table":
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <rect x="30" y="45" width="140" height="8" {...common} />
          <line x1="42" y1="53" x2="42" y2="90" {...common} />
          <line x1="158" y1="53" x2="158" y2="90" {...common} />
          <line x1="60" y1="53" x2="60" y2="80" {...common} strokeDasharray="2 3" />
          <line x1="140" y1="53" x2="140" y2="80" {...common} strokeDasharray="2 3" />
        </svg>
      );
    case "sofa":
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <path d="M25 95 V55 Q25 45 35 45 H165 Q175 45 175 55 V95" {...common} />
          <path d="M25 95 H175" {...common} />
          <line x1="25" y1="45" x2="25" y2="30" {...common} />
          <line x1="175" y1="45" x2="175" y2="30" {...common} />
          <line x1="70" y1="55" x2="70" y2="95" {...common} strokeDasharray="2 3" />
          <line x1="130" y1="55" x2="130" y2="95" {...common} strokeDasharray="2 3" />
        </svg>
      );
    case "bed":
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <rect x="25" y="35" width="15" height="55" {...common} />
          <rect x="40" y="55" width="140" height="35" {...common} />
          <line x1="40" y1="65" x2="180" y2="65" {...common} strokeDasharray="2 3" />
        </svg>
      );
    case "sideboard":
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <rect x="25" y="40" width="150" height="55" {...common} />
          <line x1="75" y1="40" x2="75" y2="95" {...common} />
          <line x1="125" y1="40" x2="125" y2="95" {...common} />
          <circle cx="65" cy="67" r="2" fill="currentColor" />
          <circle cx="115" cy="67" r="2" fill="currentColor" />
          <circle cx="135" cy="67" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <rect x="30" y="40" width="140" height="12" {...common} />
          <line x1="45" y1="52" x2="45" y2="85" {...common} />
          <line x1="155" y1="52" x2="155" y2="85" {...common} />
        </svg>
      );
  }
}

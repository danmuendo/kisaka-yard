type DimDividerProps = {
  label?: string;
};

export function DimDivider({ label }: DimDividerProps) {
  return (
    <div className="flex items-center gap-3 w-full text-walnut/70" aria-hidden="true">
      <TickLine />
      {label && (
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
          {label}
        </span>
      )}
      <TickLine />
    </div>
  );
}

function TickLine() {
  return (
    <svg viewBox="0 0 100 8" preserveAspectRatio="none" className="flex-1 h-2 min-w-8">
      <line x1="0" y1="4" x2="100" y2="4" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="0" x2="100" y2="8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Renders a small elevation-style dimension callout, e.g. "180 × 90 × 76 cm"
export function DimTag({
  width,
  depth,
  height,
}: {
  width: number;
  depth: number;
  height: number;
}) {
  return (
    <span className="font-mono text-[11px] tracking-wide text-walnut/80 inline-flex items-center gap-1">
      <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-70">
        <line x1="1" y1="11" x2="11" y2="1" stroke="currentColor" strokeWidth="1" />
        <line x1="1" y1="11" x2="1" y2="7" stroke="currentColor" strokeWidth="1" />
        <line x1="1" y1="11" x2="5" y2="11" stroke="currentColor" strokeWidth="1" />
      </svg>
      {width} × {depth} × {height} cm
    </span>
  );
}

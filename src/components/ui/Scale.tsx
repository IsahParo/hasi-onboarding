"use client";

interface ScaleProps {
  value: number | null;
  onChange: (value: number) => void;
  leftLabel?: string;
  rightLabel?: string;
}

export default function Scale({ value, onChange, leftLabel = "Muito informal", rightLabel = "Muito formal" }: ScaleProps) {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-label={`Nível ${n}`}
            className={`w-10 h-10 rounded-lg border text-sm font-medium transition-all duration-200 ${
              value === n
                ? "border-hasi-cyan bg-hasi-cyan/10 text-hasi-cyan"
                : "border-cream/10 text-cream/40 hover:border-cream/25 hover:text-cream/60"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <span className="text-[11px] text-cream/30 italic">{leftLabel}</span>
        <span className="text-[11px] text-cream/30 italic">{rightLabel}</span>
      </div>
    </div>
  );
}

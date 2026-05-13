"use client";

interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  color?: "cyan" | "orange" | "purple";
  disabled?: boolean;
}

export default function Chip({ label, selected, onClick, color = "cyan", disabled = false }: ChipProps) {
  const colorMap = {
    cyan:   selected ? "border-hasi-cyan   bg-hasi-cyan/10   text-hasi-cyan"   : "border-cream/10 text-cream/50 hover:border-cream/20 hover:text-cream/70",
    orange: selected ? "border-hasi-orange bg-hasi-orange/10 text-hasi-orange" : "border-cream/10 text-cream/50 hover:border-cream/20 hover:text-cream/70",
    purple: selected ? "border-hasi-purple bg-hasi-purple/10 text-hasi-purple" : "border-cream/10 text-cream/50 hover:border-cream/20 hover:text-cream/70",
  };

  const isDisabled = disabled && !selected;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`px-3 py-1.5 rounded-[20px] border text-xs font-medium transition-all duration-200 ${colorMap[color]} ${isDisabled ? "opacity-25 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {label}
    </button>
  );
}

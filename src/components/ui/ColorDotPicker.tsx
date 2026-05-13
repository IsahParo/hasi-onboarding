"use client";

const PALETTE = [
  "#212224", "#fffbf0", "#8c52ff", "#f76307", "#0cc0df",
  "#e63946", "#f4a261", "#2a9d8f", "#457b9d", "#d4a373",
  "#6d6875", "#1d3557", "#606c38", "#c77dff",
];

interface ColorDotPickerProps {
  selected: string[];
  onChange: (colors: string[]) => void;
}

export default function ColorDotPicker({ selected, onChange }: ColorDotPickerProps) {
  const toggle = (color: string) => {
    if (selected.includes(color)) {
      onChange(selected.filter((c) => c !== color));
    } else {
      onChange([...selected, color]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {PALETTE.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => toggle(color)}
          title={color}
          aria-label={`Cor ${color}`}
          className={`w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 ${
            selected.includes(color)
              ? "ring-2 ring-white ring-offset-2 ring-offset-hasi-bg scale-110"
              : "ring-1 ring-cream/10"
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

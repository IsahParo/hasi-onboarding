"use client";

import { ConcorrenteData } from "@/types/briefing";

interface ConcorrenteCardProps {
  number: number;
  data: ConcorrenteData;
  onChange: (field: keyof ConcorrenteData, value: string) => void;
}

export default function ConcorrenteCard({ number, data, onChange }: ConcorrenteCardProps) {
  return (
    <div className="bg-cream/[0.03] border border-cream/[0.07] rounded-xl p-4 space-y-3">
      <p className="text-[10px] uppercase tracking-[0.14em] text-cream/30">Concorrente {number}</p>
      <input
        type="text"
        className="hasi-input"
        placeholder="@concorrente"
        value={data.nome}
        onChange={(e) => onChange("nome", e.target.value)}
        aria-label={`Nome do concorrente ${number}`}
      />
      <input
        type="text"
        className="hasi-input"
        placeholder="Ponto forte deles"
        value={data.forte}
        onChange={(e) => onChange("forte", e.target.value)}
        aria-label={`Ponto forte do concorrente ${number}`}
      />
      <input
        type="text"
        className="hasi-input"
        placeholder="Sua vantagem em relação a eles"
        value={data.vantagem}
        onChange={(e) => onChange("vantagem", e.target.value)}
        aria-label={`Sua vantagem sobre concorrente ${number}`}
      />
    </div>
  );
}

"use client";

import { Bloco3Data, ConcorrenteData } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";
import ConcorrenteCard from "@/components/ui/ConcorrenteCard";

interface Props {
  data: Bloco3Data;
  onChange: (field: keyof Bloco3Data, value: string | string[] | ConcorrenteData) => void;
}

const PERCEPCAO = ["Saturado — muita concorrência", "Competitivo mas com espaço", "Pouco explorado", "Em crescimento acelerado", "Instável / imprevisível"];

export default function Bloco3({ data, onChange }: Props) {
  const toggle = (field: keyof Bloco3Data, value: string) => {
    const cur = data[field] as string[];
    onChange(field, cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]);
  };

  const updateConcorrente = (key: "concorrente1" | "concorrente2" | "concorrente3", field: keyof ConcorrenteData, value: string) => {
    onChange(key, { ...data[key], [field]: value });
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-orange font-medium">Bloco 03</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Mercado e <span className="text-hasi-orange">concorrência</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          Onde você está no tabuleiro — e como você joga diferente.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Posicionamento</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Como você descreveria o seu posicionamento de marca hoje?</label>
          <textarea className="hasi-textarea" rows={3} placeholder="O que você representa no mercado, qual espaço você quer ocupar na cabeça da sua cliente." value={data.posicionamento} onChange={(e) => onChange("posicionamento", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que te diferencia da concorrência de verdade?</label>
          <p className="text-[11px] italic text-cream/35">Não o que você acha que deveria ser — o que de fato te faz única.</p>
          <textarea className="hasi-textarea" rows={3} placeholder="Pode ser método, entrega, experiência, produto, atendimento..." value={data.diferencial} onChange={(e) => onChange("diferencial", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Como você percebe o mercado no seu segmento hoje?</label>
          <div className="flex flex-wrap gap-2">
            {PERCEPCAO.map((o) => <Chip key={o} label={o} selected={data.percepcaoMercado.includes(o)} onClick={() => toggle("percepcaoMercado", o)} color="orange" />)}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que o mercado ainda não entendeu sobre o que você faz?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="A lacuna que você enxerga e quer ocupar." value={data.lacuna} onChange={(e) => onChange("lacuna", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Concorrentes diretos</SectionLabel>
        <div className="space-y-4">
          <ConcorrenteCard number={1} data={data.concorrente1} onChange={(f, v) => updateConcorrente("concorrente1", f, v)} />
          <ConcorrenteCard number={2} data={data.concorrente2} onChange={(f, v) => updateConcorrente("concorrente2", f, v)} />
          <ConcorrenteCard number={3} data={data.concorrente3} onChange={(f, v) => updateConcorrente("concorrente3", f, v)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Referências e inspirações</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Cite marcas ou pessoas que você admira.</label>
          <p className="text-[11px] italic text-cream/35">Para cada uma, diga o que admira nela especificamente.</p>
          <textarea className="hasi-textarea" rows={4} placeholder={"@marca1 — admiro a consistência visual\n@marca2 — o jeito de escrever..."} value={data.admiracao} onChange={(e) => onChange("admiracao", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Existe alguma marca que você definitivamente NÃO quer parecer?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="E por quê — o que te incomoda nela." value={data.naoQuerParecer} onChange={(e) => onChange("naoQuerParecer", e.target.value)} />
        </div>
      </section>
    </div>
  );
}

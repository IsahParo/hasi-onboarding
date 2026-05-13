"use client";

import { Bloco5Data } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";
import ColorDotPicker from "@/components/ui/ColorDotPicker";

interface Props {
  data: Bloco5Data;
  onChange: (field: keyof Bloco5Data, value: string | string[]) => void;
}

const STATUS      = ["Sim, completa e consolidada", "Sim, mas precisa de ajustes", "Tenho coisas soltas, é inconsistente", "Estamos construindo do zero"];
const PERSONALIDADE = ["Minimalista", "Bold / impactante", "Luxuoso / premium", "Delicado / feminino", "Moderno / tech", "Orgânico / natural", "Editorial / fashion", "Divertido / colorido", "Clássico / atemporal", "Urbano / streetwear"];
const APARECE     = ["Sim, me exponho bastante", "Apareço mas com moderação", "Pouco, quero mudar isso", "Não apareço, é uma marca produto"];
const FOTOS       = ["Sim, recentes e boas", "Tenho mas estão desatualizadas", "Só tenho fotos de produto", "Não tenho quase nada"];

export default function Bloco5({ data, onChange }: Props) {
  const toggle = (field: keyof Bloco5Data, value: string, max?: number) => {
    const cur = data[field] as string[];
    if (cur.includes(value)) {
      onChange(field, cur.filter((v) => v !== value));
    } else {
      if (max && cur.length >= max) return;
      onChange(field, [...cur, value]);
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-purple font-medium">Bloco 05</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Identidade <span className="text-hasi-purple">visual</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          A cara da sua marca — o que existe, o que falta e para onde ela precisa ir.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Status atual</SectionLabel>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Você já tem identidade visual?</label>
          <div className="flex flex-wrap gap-2">
            {STATUS.map((o) => <Chip key={o} label={o} selected={data.statusId.includes(o)} onClick={() => toggle("statusId", o)} color="purple" />)}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Se já tem, o que te incomoda na identidade atual?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="O que você mudaria ou sente que não representa mais a marca." value={data.incomoda} onChange={(e) => onChange("incomoda", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Direção visual</SectionLabel>

        <div className="space-y-3">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Selecione as paletas que mais combinam</label>
          <ColorDotPicker selected={data.cores} onChange={(colors) => onChange("cores", colors)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Descreva cores ou cole referências hex</label>
          <input className="hasi-input" type="text" placeholder="Ex: #F4C2C2, rosa suave, dourado envelhecido..." value={data.hexCores} onChange={(e) => onChange("hexCores", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">
            Personalidade visual da marca{" "}
            <span className="text-cream/25 normal-case tracking-normal text-[10px]">(máx 3)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {PERSONALIDADE.map((o) => (
              <Chip
                key={o}
                label={o}
                selected={data.personalidadeVisual.includes(o)}
                onClick={() => toggle("personalidadeVisual", o, 3)}
                color="purple"
                disabled={data.personalidadeVisual.length >= 3 && !data.personalidadeVisual.includes(o)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que você definitivamente NÃO quer na sua identidade visual?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="Cores, estilos, referências que você não quer de forma alguma." value={data.naoQuerVisual} onChange={(e) => onChange("naoQuerVisual", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Foto e presença visual</SectionLabel>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Você aparece na sua marca?</label>
          <div className="flex flex-wrap gap-2">
            {APARECE.map((o) => <Chip key={o} label={o} selected={data.apareceNaMarca.includes(o)} onClick={() => toggle("apareceNaMarca", o)} color="purple" />)}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Você tem fotos profissionais de marca?</label>
          <div className="flex flex-wrap gap-2">
            {FOTOS.map((o) => <Chip key={o} label={o} selected={data.temFotos.includes(o)} onClick={() => toggle("temFotos", o)} color="purple" />)}
          </div>
        </div>
      </section>
    </div>
  );
}

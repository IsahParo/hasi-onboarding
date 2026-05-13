"use client";

import { Bloco6Data } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";
import Scale from "@/components/ui/Scale";

interface Props {
  data: Bloco6Data;
  onChange: (field: keyof Bloco6Data, value: string | string[] | number | null) => void;
}

const TOM    = ["Direto", "Sofisticado", "Empático", "Educativo", "Inspirador", "Divertido", "Provocador", "Acolhedor", "Autoritário", "Íntimo & próximo", "Aspiracional", "Descontraído"];
const EMOJI  = ["Sim, bastante", "Sim, mas com moderação", "Raramente, só estratégico", "Não uso"];
const TRATA  = ["Você (formal)", "Você (informal)", "Tu", "Ela", "a cliente"];

export default function Bloco6({ data, onChange }: Props) {
  const toggle = (field: keyof Bloco6Data, value: string, max?: number) => {
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
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-purple font-medium">Bloco 06</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Linguagem e <span className="text-hasi-purple">voz</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          Como a sua marca fala — o tom, o estilo, o que pode e o que jamais deve sair da sua comunicação.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Tom de voz</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Se a sua marca fosse uma pessoa, como ela seria?</label>
          <p className="text-[11px] italic text-cream/35">Descreva a personalidade, o jeito de falar, como ela age.</p>
          <textarea className="hasi-textarea" rows={3} placeholder="Ex: Seria uma amiga direta e sofisticada, que fala sem rodeios mas com elegância..." value={data.personaMarca} onChange={(e) => onChange("personaMarca", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">
            Escolha os atributos que descrevem o tom da sua marca{" "}
            <span className="text-cream/25 normal-case tracking-normal text-[10px]">(máx 4)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {TOM.map((o) => (
              <Chip
                key={o}
                label={o}
                selected={data.tomVoz.includes(o)}
                onClick={() => toggle("tomVoz", o, 4)}
                color="purple"
                disabled={data.tomVoz.length >= 4 && !data.tomVoz.includes(o)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Estilo de escrita</SectionLabel>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Você usa emoji na sua comunicação?</label>
          <div className="flex flex-wrap gap-2">
            {EMOJI.map((o) => <Chip key={o} label={o} selected={data.usaEmoji.includes(o)} onClick={() => toggle("usaEmoji", o)} color="purple" />)}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Como você trata sua cliente na comunicação?</label>
          <div className="flex flex-wrap gap-2">
            {TRATA.map((o) => <Chip key={o} label={o} selected={data.trataCliente.includes(o)} onClick={() => toggle("trataCliente", o)} color="purple" />)}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40 block mb-3">Nível de formalidade</label>
          <Scale value={data.formalidade} onChange={(v) => onChange("formalidade", v)} leftLabel="Muito informal" rightLabel="Muito formal" />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Tem palavras, frases ou expressões que são da sua marca?</label>
          <p className="text-[11px] italic text-cream/35">O vocabulário que te representa — pode ser gíria, bordão, expressão característica.</p>
          <textarea className="hasi-textarea" rows={2} placeholder={"Ex: 'sem blábláblá', 'sua marca merece mais', 'vamos construir juntas'..."} value={data.vocabulario} onChange={(e) => onChange("vocabulario", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que você JAMAIS quer na sua comunicação?</label>
          <p className="text-[11px] italic text-cream/35">Palavras, abordagens, estilos de copy que não têm nada a ver com a sua marca.</p>
          <textarea className="hasi-textarea" rows={2} placeholder="Ex: frases motivacionais genéricas, copy agressivo, linguagem infantilizada..." value={data.proibicoes} onChange={(e) => onChange("proibicoes", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Tem algum exemplo de copy ou legenda que você adorou?</label>
          <textarea className="hasi-textarea" rows={3} placeholder="Cole aqui — isso me ajuda a entender seu ritmo de escrita de verdade." value={data.exemplosCopy} onChange={(e) => onChange("exemplosCopy", e.target.value)} />
        </div>
      </section>
    </div>
  );
}

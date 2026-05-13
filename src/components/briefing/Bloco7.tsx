"use client";

import { Bloco7Data } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";

interface Props {
  data: Bloco7Data;
  onChange: (field: keyof Bloco7Data, value: string | string[]) => void;
}

const PRIORIDADES  = ["Crescer seguidores", "Aumentar engajamento", "Converter em vendas", "Construir autoridade", "Lançar produto ou serviço", "Reposicionar a marca", "Criar consistência", "Ser reconhecida no nicho"];
const COMUNICACAO  = ["WhatsApp", "Email", "Reuniões periódicas", "Misto"];
const FREQUENCIA   = ["Semanalmente", "Quinzenalmente", "Mensalmente", "Sob demanda"];
const ENVOLVIMENTO = ["Quero aprovar tudo", "Confio e delego bastante", "Quero co-criar", "Só quero ver o resultado final"];

export default function Bloco7({ data, onChange }: Props) {
  const toggle = (field: keyof Bloco7Data, value: string) => {
    const cur = data[field] as string[];
    onChange(field, cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]);
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-orange font-medium">Bloco 07</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Objetivos e <span className="text-hasi-orange">estratégia</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          Para onde você quer ir — e o que espera construir com a Hasi.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Metas e visão</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual é o seu maior objetivo com a Hasi?</label>
          <textarea className="hasi-textarea" rows={3} placeholder="O que você quer que mude ou aconteça a partir do nosso trabalho juntas." value={data.objetivo} onChange={(e) => onChange("objetivo", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Em 6 meses, como seria o cenário ideal para sua marca?</label>
          <p className="text-[11px] italic text-cream/35">Seja específica — seguidores, faturamento, reconhecimento, autoridade.</p>
          <textarea className="hasi-textarea" rows={3} placeholder="Ex: Quero ter 10k seguidores qualificados, dobrar o faturamento..." value={data.cenario6meses} onChange={(e) => onChange("cenario6meses", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que você quer priorizar agora?</label>
          <div className="flex flex-wrap gap-2">
            {PRIORIDADES.map((o) => <Chip key={o} label={o} selected={data.prioridades.includes(o)} onClick={() => toggle("prioridades", o)} color="orange" />)}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Desafios e bloqueios</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual é a maior dificuldade que você enfrenta hoje no seu negócio?</label>
          <textarea className="hasi-textarea" rows={3} placeholder="Pode ser operacional, financeiro, de posicionamento, pessoal..." value={data.dificuldade} onChange={(e) => onChange("dificuldade", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que já tentou para resolver essa dificuldade?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="O que funcionou parcialmente, o que não funcionou, o que aprendeu." value={data.tentativas} onChange={(e) => onChange("tentativas", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Tem algo que te trava de crescer que não é operacional?</label>
          <p className="text-[11px] italic text-cream/35">Medos, crenças, comparações, síndrome do impostor...</p>
          <textarea className="hasi-textarea" rows={2} placeholder="Pode ser honesta — esse espaço é seguro." value={data.bloqueios} onChange={(e) => onChange("bloqueios", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Dinâmica de trabalho</SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Como prefere se comunicar no dia a dia?</label>
            <select className="hasi-select" value={data.comunicacao} onChange={(e) => onChange("comunicacao", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {COMUNICACAO.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Com que frequência quer alinhar?</label>
            <select className="hasi-select" value={data.frequenciaAlinhamento} onChange={(e) => onChange("frequenciaAlinhamento", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {FREQUENCIA.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual é o nível de envolvimento que você quer ter na produção?</label>
          <div className="flex flex-wrap gap-2">
            {ENVOLVIMENTO.map((o) => <Chip key={o} label={o} selected={data.envolvimento.includes(o)} onClick={() => toggle("envolvimento", o)} color="orange" />)}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Tem algo mais que eu preciso saber antes de começarmos?</label>
          <textarea className="hasi-textarea" rows={3} placeholder="Contexto importante, restrições, histórico relevante, expectativas específicas..." value={data.outrasInfos} onChange={(e) => onChange("outrasInfos", e.target.value)} />
        </div>
      </section>
    </div>
  );
}

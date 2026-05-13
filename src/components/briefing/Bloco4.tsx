"use client";

import { Bloco4Data } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";

interface Props {
  data: Bloco4Data;
  onChange: (field: keyof Bloco4Data, value: string | string[]) => void;
}

const OUTROS_CANAIS = ["TikTok", "Pinterest", "YouTube", "Site próprio", "Email marketing", "WhatsApp Business", "Marketplace", "LinkedIn"];
const FREQUENCIA    = ["Todo dia", "3–5x por semana", "1–2x por semana", "Quando dá", "Quase não publico"];
const FORMATOS      = ["Feed (foto)", "Carrossel", "Reels", "Stories", "Misto"];
const SENTIMENTO    = ["Gosto mas falta consistência", "Me sinto travada", "Não sei o que postar", "Falta tempo", "Tenho medo de julgamento", "Faço bem mas não converte", "Nunca apareço em vídeo"];
const TRAFEGO       = ["Sim, regularmente", "Sim, mas raramente", "Já tentei mas parei", "Nunca tentei"];
const COMO_CHEGAM   = ["Indicação", "Instagram orgânico", "Anúncios", "Google", "WhatsApp", "Eventos presenciais"];

export default function Bloco4({ data, onChange }: Props) {
  const toggle = (field: keyof Bloco4Data, value: string) => {
    const cur = data[field] as string[];
    onChange(field, cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]);
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-cyan font-medium">Bloco 04</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Presença <span className="text-hasi-cyan">digital</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          Como você está hoje no digital — o que funciona, o que trava e o que ainda não tentou.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Canais ativos</SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">@ do Instagram</label>
            <input className="hasi-input" type="text" placeholder="@suamarca" value={data.instagram} onChange={(e) => onChange("instagram", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Seguidores atualmente</label>
            <input className="hasi-input" type="text" placeholder="Ex: 4.200" value={data.seguidores} onChange={(e) => onChange("seguidores", e.target.value)} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Outros canais que você usa</label>
          <div className="flex flex-wrap gap-2">
            {OUTROS_CANAIS.map((o) => <Chip key={o} label={o} selected={data.outrosCanais.includes(o)} onClick={() => toggle("outrosCanais", o)} />)}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Publicação e conteúdo</SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Frequência atual de publicação</label>
            <select className="hasi-select" value={data.frequencia} onChange={(e) => onChange("frequencia", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {FREQUENCIA.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Formatos que mais usa hoje</label>
            <select className="hasi-select" value={data.formatos} onChange={(e) => onChange("formatos", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {FORMATOS.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual tipo de conteúdo performa melhor para você hoje?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="O que gera mais engajamento, salvamentos, mensagens, cliques..." value={data.melhorConteudo} onChange={(e) => onChange("melhorConteudo", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Como você se sente sobre produzir conteúdo hoje?</label>
          <div className="flex flex-wrap gap-2">
            {SENTIMENTO.map((o) => <Chip key={o} label={o} selected={data.sentimento.includes(o)} onClick={() => toggle("sentimento", o)} />)}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que você já tentou que não funcionou?</label>
          <textarea className="hasi-textarea" rows={3} placeholder="Estratégias, formatos, plataformas, agências, ferramentas..." value={data.naofuncionou} onChange={(e) => onChange("naofuncionou", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Tráfego e conversão</SectionLabel>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Você investe em tráfego pago?</label>
          <div className="flex flex-wrap gap-2">
            {TRAFEGO.map((o) => <Chip key={o} label={o} selected={data.trafegoPago.includes(o)} onClick={() => toggle("trafegoPago", o)} />)}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual é sua taxa de conversão de seguidores para clientes?</label>
          <input className="hasi-input" type="text" placeholder="Ex: baixa, média, boa — ou uma estimativa se souber" value={data.taxaConversao} onChange={(e) => onChange("taxaConversao", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Onde as pessoas chegam até você com mais frequência?</label>
          <div className="flex flex-wrap gap-2">
            {COMO_CHEGAM.map((o) => <Chip key={o} label={o} selected={data.comoChegam.includes(o)} onClick={() => toggle("comoChegam", o)} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

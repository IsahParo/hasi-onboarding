"use client";

import { Bloco2Data } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";

interface Props {
  data: Bloco2Data;
  onChange: (field: keyof Bloco2Data, value: string | string[]) => void;
}

const GENERO   = ["Feminino", "Masculino", "Misto", "Não binário"];
const FAIXA    = ["18–24", "25–34", "35–44", "45–54", "55+", "Variada"];
const RENDA    = ["Classe C", "Classe B", "Classe A", "Mista"];
const OBJECOES = ['"É caro"', '"Não tenho tempo"', '"Preciso pensar"', '"Já tentei e não funcionou"', '"Não sei se é pra mim"', '"Não confio ainda"', "Outra"];
const CANAIS   = ["Instagram", "TikTok", "Pinterest", "YouTube", "WhatsApp", "Google", "Podcast", "LinkedIn"];
const GATILHOS = ["Prova social / depoimento", "Urgência / escassez", "Conexão com a marca", "Autoridade / resultado", "Indicação", "Promoção / preço"];

export default function Bloco2({ data, onChange }: Props) {
  const toggle = (field: keyof Bloco2Data, value: string) => {
    const cur = data[field] as string[];
    onChange(field, cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]);
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-cyan font-medium">Bloco 02</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Público-alvo e <span className="text-hasi-cyan">persona</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          Quem você quer atrair — e o que essa pessoa sente, pensa e busca antes de chegar até você.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Perfil demográfico</SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Gênero predominante</label>
            <select className="hasi-select" value={data.genero} onChange={(e) => onChange("genero", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {GENERO.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Faixa etária</label>
            <select className="hasi-select" value={data.faixaEtaria} onChange={(e) => onChange("faixaEtaria", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {FAIXA.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Renda estimada</label>
            <select className="hasi-select" value={data.renda} onChange={(e) => onChange("renda", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {RENDA.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Onde ela está? (localização)</label>
            <input className="hasi-input" type="text" placeholder="Ex: Brasil inteiro, São Paulo, interior de MG..." value={data.localizacao} onChange={(e) => onChange("localizacao", e.target.value)} />
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Psicografia e comportamento</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Descreva sua cliente ideal como se fosse uma pessoa real.</label>
          <p className="text-[11px] italic text-cream/35">Nome fictício, o que faz, como é o dia dela, o que ela valoriza.</p>
          <textarea className="hasi-textarea" rows={4} placeholder="Ex: Juliana, 32 anos, tem uma boutique em SP..." value={data.personaDesc} onChange={(e) => onChange("personaDesc", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Quais são as maiores dores e frustrações dela que o seu negócio resolve?</label>
          <textarea className="hasi-textarea" rows={3} placeholder="O que ela sente antes de chegar até você. Pode ser racional ou emocional." value={data.dores} onChange={(e) => onChange("dores", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual é a transformação que ela busca?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="O resultado final que ela imagina quando pensa em resolver o problema dela." value={data.transformacao} onChange={(e) => onChange("transformacao", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que impede ela de resolver esse problema sozinha?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="Falta de tempo, conhecimento, dinheiro, confiança..." value={data.impedimentos} onChange={(e) => onChange("impedimentos", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Quais objeções ela costuma ter antes de comprar?</label>
          <div className="flex flex-wrap gap-2">
            {OBJECOES.map((o) => <Chip key={o} label={o} selected={data.objecoes.includes(o)} onClick={() => toggle("objecoes", o)} />)}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Onde ela passa o tempo online?</label>
          <div className="flex flex-wrap gap-2">
            {CANAIS.map((o) => <Chip key={o} label={o} selected={data.canaisOnline.includes(o)} onClick={() => toggle("canaisOnline", o)} />)}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Que tipo de conteúdo ela consome e quem ela segue?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="Perfis, categorias, formatos que ela costuma salvar ou compartilhar..." value={data.conteudoConsume} onChange={(e) => onChange("conteudoConsume", e.target.value)} />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que a faz comprar — qual é o gatilho final?</label>
          <div className="flex flex-wrap gap-2">
            {GATILHOS.map((o) => <Chip key={o} label={o} selected={data.gatilhos.includes(o)} onClick={() => toggle("gatilhos", o)} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

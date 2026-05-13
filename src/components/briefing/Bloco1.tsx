"use client";

import { Bloco1Data } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";

interface Props {
  data: Bloco1Data;
  onChange: (field: keyof Bloco1Data, value: string | string[]) => void;
}

const OPERACAO = ["Trabalho sozinha", "Tenho sócia", "Tenho funcionários", "Tenho freelancers", "Equipe grande (+5)"];
const CANAL    = ["Instagram", "DM", "WhatsApp", "Site ou loja virtual", "Loja física", "Marketplace", "Misto"];
const TEMPO    = ["Menos de 1 ano", "1 a 3 anos", "3 a 7 anos", "Mais de 7 anos"];

export default function Bloco1({ data, onChange }: Props) {
  const toggle = (field: keyof Bloco1Data, value: string) => {
    const cur = data[field] as string[];
    onChange(field, cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]);
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-cyan font-medium">Bloco 01</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Sobre o <span className="text-hasi-cyan">negócio</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          O ponto de partida de tudo. Quanto mais fundo você for aqui, mais precisa fica a estratégia.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Essência e identificação</SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Nome completo</label>
            <input className="hasi-input" type="text" placeholder="Seu nome" value={data.nome} onChange={(e) => onChange("nome", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Nome da marca</label>
            <input className="hasi-input" type="text" placeholder="Como se chama seu negócio?" value={data.nomeMarca} onChange={(e) => onChange("nomeMarca", e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Segmento principal</label>
            <input className="hasi-input" type="text" placeholder="Ex: moda feminina, estética, joias..." value={data.segmento} onChange={(e) => onChange("segmento", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Tempo no mercado</label>
            <select className="hasi-select" value={data.tempoMercado} onChange={(e) => onChange("tempoMercado", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {TEMPO.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Resuma seu negócio em uma frase</label>
          <p className="text-[11px] italic text-cream/35">A frase que você usaria para se apresentar em 10 segundos.</p>
          <textarea className="hasi-textarea" rows={2} placeholder="Ex: Ajudo mulheres a transformar expertise em renda..." value={data.frase} onChange={(e) => onChange("frase", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual é a história da sua marca? Como ela nasceu?</label>
          <p className="text-[11px] italic text-cream/35">O que te motivou a começar, o que você queria resolver ou criar.</p>
          <textarea className="hasi-textarea" rows={3} placeholder="Conte do começo — quanto mais real, melhor." value={data.historia} onChange={(e) => onChange("historia", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Produtos e serviços</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">O que você vende? Descreva cada produto ou serviço.</label>
          <p className="text-[11px] italic text-cream/35">Nome, o que é, para quem é e qual resultado entrega.</p>
          <textarea className="hasi-textarea" rows={4} placeholder={"Produto 1: [nome] — [descrição]\nProduto 2: [nome] — [descrição]"} value={data.produtos} onChange={(e) => onChange("produtos", e.target.value)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Ticket médio</label>
            <input className="hasi-input" type="text" placeholder="Ex: R$ 150 a R$ 800" value={data.ticketMedio} onChange={(e) => onChange("ticketMedio", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Principal canal de venda</label>
            <select className="hasi-select" value={data.canalVenda} onChange={(e) => onChange("canalVenda", e.target.value)}>
              <option value="" className="bg-hasi-bg">Selecione...</option>
              {CANAL.map((o) => <option key={o} value={o} className="bg-hasi-bg">{o}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual produto/serviço tem mais saída hoje?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="O que as clientes mais compram e por quê você acha que é esse." value={data.produtoDestaque} onChange={(e) => onChange("produtoDestaque", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Tem algum produto que quer impulsionar mas ainda não decolou?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="O que é, o que já tentou e qual é sua hipótese do porquê ainda não funcionou." value={data.produtoTravado} onChange={(e) => onChange("produtoTravado", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Modelo de negócio</SectionLabel>

        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Como é sua operação hoje?</label>
          <div className="flex flex-wrap gap-2">
            {OPERACAO.map((o) => <Chip key={o} label={o} selected={data.operacao.includes(o)} onClick={() => toggle("operacao", o)} />)}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Qual é a sua principal fonte de receita hoje?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="Produto físico, serviço recorrente, venda pontual, curso..." value={data.receitaPrincipal} onChange={(e) => onChange("receitaPrincipal", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Existe sazonalidade no seu negócio?</label>
          <textarea className="hasi-textarea" rows={2} placeholder="Quando vende mais, quando vende menos e o que acredita que causa isso." value={data.sazonalidade} onChange={(e) => onChange("sazonalidade", e.target.value)} />
        </div>
      </section>
    </div>
  );
}

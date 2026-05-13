"use client";

import { Bloco8Data, RespostasType } from "@/types/briefing";
import SectionLabel from "@/components/ui/SectionLabel";

// ── Configurar antes do deploy ──────────────────────────────────────────────
const WHATSAPP_NUMBER = "5511925615526";
// ────────────────────────────────────────────────────────────────────────────

interface Props {
  data: Bloco8Data;
  onChange: (field: keyof Bloco8Data, value: string) => void;
  respostas: RespostasType;
  onExportPdf: () => void;
  isExporting: boolean;
}

export default function Bloco8({ data, onChange, respostas, onExportPdf, isExporting }: Props) {
  const handleWhatsApp = async () => {
    await onExportPdf();
    const msg =
      `Olá Isa! Acabei de preencher meu briefing estratégico completo.\n\n` +
      `*Marca:* ${respostas.bloco1.nomeMarca}\n` +
      `*Segmento:* ${respostas.bloco1.segmento}\n` +
      `*Objetivo principal:* ${respostas.bloco7.objetivo}\n\n` +
      `O PDF foi baixado no meu dispositivo — vou anexar aqui na conversa!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] uppercase tracking-[0.16em] text-hasi-cyan font-medium">Bloco 08</span>
        <h2 className="text-[26px] font-bold mt-1 leading-tight">
          Material de <span className="text-hasi-cyan">apoio</span>
        </h2>
        <p className="text-sm text-cream/50 mt-2 leading-[1.8]">
          Tudo o que vai alimentar a criação — arquivos, links, fotos e referências.
        </p>
      </div>

      <section className="space-y-5">
        <SectionLabel>Arquivos e conteúdo existente</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Fotos e vídeos disponíveis para uso</label>
          <p className="text-[11px] italic text-cream/35">Cole o link do Google Drive, iCloud ou álbum compartilhado.</p>
          <input className="hasi-input" type="text" placeholder="https://drive.google.com/..." value={data.fotosVideos} onChange={(e) => onChange("fotosVideos", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Logo e arquivos de identidade visual</label>
          <p className="text-[11px] italic text-cream/35">Cole o link ou descreva onde estão.</p>
          <input className="hasi-input" type="text" placeholder="Link ou 'não tenho'" value={data.logoArquivos} onChange={(e) => onChange("logoArquivos", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Manual de marca ou brand guide</label>
          <input className="hasi-input" type="text" placeholder="Link do arquivo ou 'não tenho'" value={data.manualMarca} onChange={(e) => onChange("manualMarca", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Conteúdos anteriores que você gostou e quer usar como referência</label>
          <p className="text-[11px] italic text-cream/35">Posts, reels, campanhas — o que funcionou ou o que você achou bonito.</p>
          <input className="hasi-input" type="text" placeholder="Link do Instagram, Drive ou descreva..." value={data.conteudosAnteriores} onChange={(e) => onChange("conteudosAnteriores", e.target.value)} />
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Referências externas</SectionLabel>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Perfis no Instagram que você admira como referência</label>
          <textarea className="hasi-textarea" rows={3} placeholder={"@perfil1 — por quê\n@perfil2 — por quê\n@perfil3 — por quê"} value={data.perfisReferencia} onChange={(e) => onChange("perfisReferencia", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Sites, marcas ou campanhas que te inspiram visualmente</label>
          <textarea className="hasi-textarea" rows={2} placeholder="Pode ser de qualquer segmento — o importante é o que você sente olhando." value={data.sitesInspiram} onChange={(e) => onChange("sitesInspiram", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-[0.1em] text-cream/40">Moodboard, pasta do Pinterest ou referência organizada</label>
          <input className="hasi-input" type="text" placeholder="Link do Pinterest, Notion, Drive..." value={data.moodboard} onChange={(e) => onChange("moodboard", e.target.value)} />
        </div>
      </section>

      {/* Tela de conclusão */}
      <div className="border border-hasi-purple/20 bg-hasi-purple/5 rounded-2xl p-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-hasi-purple/10 border border-hasi-purple/20 text-[11px] uppercase tracking-[0.14em] text-hasi-purple">
          8/8 · Briefing finalizado
        </div>
        <p className="text-cream/60 text-sm leading-relaxed">
          Suas respostas serão analisadas antes do nosso próximo encontro.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={onExportPdf}
            disabled={isExporting}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-hasi-cyan/10 border border-hasi-cyan/40 text-hasi-cyan text-sm font-medium hover:bg-hasi-cyan/15 transition-colors duration-200 disabled:opacity-50"
          >
            {isExporting ? (
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            )}
            Exportar PDF
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-whatsapp-green/10 border border-whatsapp-green/40 text-whatsapp-green text-sm font-medium hover:bg-whatsapp-green/15 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { initialRespostas, RespostasType } from "@/types/briefing";
import ProgressBar from "@/components/ui/ProgressBar";
import Bloco1 from "@/components/briefing/Bloco1";
import Bloco2 from "@/components/briefing/Bloco2";
import Bloco3 from "@/components/briefing/Bloco3";
import Bloco4 from "@/components/briefing/Bloco4";
import Bloco5 from "@/components/briefing/Bloco5";
import Bloco6 from "@/components/briefing/Bloco6";
import Bloco7 from "@/components/briefing/Bloco7";
import Bloco8 from "@/components/briefing/Bloco8";
import { exportPdf } from "@/utils/exportPdf";

export default function BriefingPage() {
  const [current, setCurrent]       = useState(1);
  const [respostas, setRespostas]   = useState<RespostasType>(initialRespostas);
  const [isExporting, setExporting] = useState(false);

  // Typed generic updater
  function update<K extends keyof RespostasType>(
    bloco: K,
    field: keyof RespostasType[K],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ) {
    setRespostas((prev) => ({
      ...prev,
      [bloco]: { ...prev[bloco], [field]: value },
    }));
  }

  const handleExport = async () => {
    setExporting(true);
    try {
      await exportPdf(respostas);
    } finally {
      setExporting(false);
    }
  };

  const goNext = () => setCurrent((c) => Math.min(c + 1, 8));
  const goPrev = () => setCurrent((c) => Math.max(c - 1, 1));

  return (
    <div className="min-h-screen bg-hasi-bg">
      <ProgressBar current={current} onSelect={setCurrent} />

      {/* Mini player Spotify — persiste em todos os blocos */}
      <div style={{ background: "#121212" }} className="border-b border-cream/[0.05]">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1uHCeFHcn8X?utm_source=generator&theme=0"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Playlist Hasi — foco & presença"
        />
      </div>

      <main className="max-w-[680px] mx-auto px-5 sm:px-6 py-10">
        {current === 1 && (
          <Bloco1
            data={respostas.bloco1}
            onChange={(f, v) => update("bloco1", f, v)}
          />
        )}
        {current === 2 && (
          <Bloco2
            data={respostas.bloco2}
            onChange={(f, v) => update("bloco2", f, v)}
          />
        )}
        {current === 3 && (
          <Bloco3
            data={respostas.bloco3}
            onChange={(f, v) => update("bloco3", f, v)}
          />
        )}
        {current === 4 && (
          <Bloco4
            data={respostas.bloco4}
            onChange={(f, v) => update("bloco4", f, v)}
          />
        )}
        {current === 5 && (
          <Bloco5
            data={respostas.bloco5}
            onChange={(f, v) => update("bloco5", f, v)}
          />
        )}
        {current === 6 && (
          <Bloco6
            data={respostas.bloco6}
            onChange={(f, v) => update("bloco6", f, v)}
          />
        )}
        {current === 7 && (
          <Bloco7
            data={respostas.bloco7}
            onChange={(f, v) => update("bloco7", f, v)}
          />
        )}
        {current === 8 && (
          <Bloco8
            data={respostas.bloco8}
            onChange={(f, v) => update("bloco8", f, v)}
            respostas={respostas}
            onExportPdf={handleExport}
            isExporting={isExporting}
          />
        )}

        {/* Navigation — oculta no último bloco */}
        {current < 8 && (
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-cream/[0.07]">
            <button
              type="button"
              onClick={goPrev}
              disabled={current === 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cream/10 text-cream/50 text-sm hover:border-cream/20 hover:text-cream/70 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Anterior
            </button>

            <span className="text-[11px] text-cream/25 tracking-widest uppercase">
              {current} / 8
            </span>

            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hasi-cyan/10 border border-hasi-cyan/30 text-hasi-cyan text-sm font-medium hover:bg-hasi-cyan/15 transition-all duration-200"
            >
              Próximo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}

        {/* Voltar — disponível no último bloco */}
        {current === 8 && (
          <div className="mt-10 pt-6 border-t border-cream/[0.07]">
            <button
              type="button"
              onClick={goPrev}
              className="flex items-center gap-2 text-cream/30 text-sm hover:text-cream/50 transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Voltar para Objetivos
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

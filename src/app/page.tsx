"use client";

import { useState } from "react";
import Link from "next/link";
import Divider from "@/components/ui/Divider";

// ── Configurar antes do deploy ──────────────────────────────────────────────
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1uHCeFHcn8X?utm_source=generator&theme=0";
// ────────────────────────────────────────────────────────────────────────────

const CHECKLIST = [
  "Escolha um AMBIENTE calmo, sem interrupções",
  "Coloque a PLAYLIST Hasi acima para entrar no clima",
  "Pegue sua BEBIDA favorita — você merece esse momento",
  "Responda com HONESTIDADE — quanto mais detalhe, melhor o resultado",
  "Lembre-se: você NÃO ESTÁ SOZINHA nesse processo",
];

const BLOCKS = [
  { icon: "store",   title: "Sobre o negócio",       desc: "Essência, segmento, produtos e o que te faz única no mercado." },
  { icon: "users",   title: "Público e persona",      desc: "Quem é a pessoa que você quer atrair e o que ela sente antes de chegar até você." },
  { icon: "phone",   title: "Presença digital",       desc: "Como você está hoje, o que já tentou e o que ainda não funciona como deveria." },
  { icon: "chart",   title: "Mercado e concorrência", desc: "Onde você está posicionada e onde está sua vantagem real." },
  { icon: "palette", title: "Identidade visual",      desc: "A cara da sua marca — o que existe, o que falta e para onde ela precisa ir." },
  { icon: "target",  title: "Objetivos e expectativas", desc: "Para onde você quer ir e o que espera do nosso trabalho juntas." },
  { icon: "image",   title: "Material de apoio",      desc: "Fotos, vídeos, arquivos e referências que vão alimentar a criação." },
];

const TIMELINE = [
  { n: "1", title: "Você preenche o briefing",        desc: "Com calma, no seu tempo, com o máximo de detalhes." },
  { n: "2", title: "A Hasi analisa tudo",             desc: "Cada resposta vira insumo estratégico antes do nosso próximo encontro." },
  { n: "3", title: "A estratégia ganha forma",         desc: "Com base no que é real — sem fórmula pronta, sem blábláblá." },
  { n: "4", title: "Sua marca começa a ser lembrada", desc: "Do jeito certo, pelo público certo." },
];

function BlockIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    store: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l1-6h16l1 6" /><path d="M3 9a2 2 0 002 2 2 2 0 002-2 2 2 0 002 2 2 2 0 002-2 2 2 0 002 2 2 2 0 002-2" /><path d="M5 20V11M19 20V11M9 20v-5h6v5" />
      </svg>
    ),
    users: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    phone: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    chart: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    palette: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    target: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    image: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

export default function HomePage() {
  const [checked, setChecked] = useState<boolean[]>(new Array(CHECKLIST.length).fill(false));
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleCheck = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="min-h-screen bg-hasi-bg text-cream">
      <div className="max-w-[680px] mx-auto px-5 sm:px-6">

        {/* ── HERO ── */}
        <section className="pt-16 sm:pt-20 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hasi-cyan/20 bg-hasi-cyan/5 text-hasi-cyan text-[10px] uppercase tracking-[0.18em] font-medium mb-8">
            + HASI · ONBOARDING ESTRATÉGICO +
          </div>

          <p className="text-[13px] italic text-cream/35 mb-3">
            Para você que acabou de dar o passo certo.
          </p>

          <h1 className="text-[38px] sm:text-[42px] font-bold leading-[1.12] mb-8">
            Bem-vinda à{" "}
            <span className="text-hasi-cyan">Hasi</span>
            {".\n"}
            <br />
            Sua marca está em{" "}
            <span className="text-hasi-orange">boas mãos</span>.
          </h1>

          {/* Quote block */}
          <div className="border-l-2 border-hasi-purple bg-hasi-purple/[0.06] rounded-r-xl pl-5 pr-4 py-4">
            <p className="text-[14px] text-cream/80 leading-[1.8]">
              Não existe marca forte com comunicação fraca. E você já entendeu isso antes de muita gente.
            </p>
            <p className="text-[12px] text-cream/30 mt-3">— Isa · Hasi Estratégia</p>
          </div>
        </section>

        {/* ── CARDS CARTA ── */}
        <section className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 — cyan */}
            <div className="border border-cream/[0.09] rounded-xl p-5 space-y-3 bg-hasi-cyan/[0.02]">
              <div className="w-9 h-9 rounded-lg bg-hasi-cyan/10 flex items-center justify-center text-hasi-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10.5V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h8" /><path d="M22 10.5L12 14 2 10.5" /><path d="M17 16l2 2 4-4" />
                </svg>
              </div>
              <p className="text-[13px] text-cream/70 leading-[1.8]">
                Antes de qualquer estratégia, qualquer conteúdo, qualquer publicação — a gente precisa se conhecer de verdade. Não o resumo da sua marca. A marca de verdade.
              </p>
            </div>

            {/* Card 2 — laranja */}
            <div className="border border-cream/[0.09] rounded-xl p-5 space-y-3 bg-hasi-orange/[0.02]">
              <div className="w-9 h-9 rounded-lg bg-hasi-orange/10 flex items-center justify-center text-hasi-orange">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <p className="text-[13px] text-cream/70 leading-[1.8]">
                Esse briefing não é uma lista de perguntas burocráticas. É uma conversa — estruturada, estratégica, mas ainda assim uma conversa entre mim e você.
              </p>
            </div>

            {/* Card 3 — roxo, full width */}
            <div className="sm:col-span-2 border border-cream/[0.09] rounded-xl p-5 space-y-3 bg-hasi-purple/[0.02]">
              <div className="w-9 h-9 rounded-lg bg-hasi-purple/10 flex items-center justify-center text-hasi-purple">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <p className="text-[13px] text-cream/70 leading-[1.8]">
                Cada resposta que você der aqui vai direto para a construção da sua estratégia. Nada é descartado. Nada é genérico. Tudo o que você escrever vira insumo real do nosso trabalho juntas.
              </p>
            </div>
          </div>
        </section>

        {/* ── ASSINATURA ── */}
        <section className="pb-2">
          <div className="border border-cream/[0.08] bg-cream/[0.02] rounded-xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-hasi-orange/20 border border-hasi-orange/40 flex items-center justify-center text-hasi-orange font-bold text-base flex-shrink-0">
              I
            </div>
            <div className="space-y-3">
              <p className="text-[13px] text-cream/70 leading-[1.85]">
                Então respira. Abre espaço na sua agenda. Coloca uma música boa. E responde com a mesma seriedade com que você trata a sua marca — porque é exatamente isso que ela merece.
              </p>
              <p className="text-[12px] text-cream/30">Com carinho e estratégia · Hasi</p>
            </div>
          </div>
        </section>

        <Divider label="+ ANTES DE COMEÇAR +" />

        {/* ── RITUAL ── */}
        <section className="space-y-8 pb-4">
          <p className="text-[10px] uppercase tracking-[0.14em] text-cream/30 pb-2.5 border-b border-cream/[0.07]">
            CRIE O AMBIENTE CERTO PARA ISSO
          </p>

          {/* Spotify card */}
          <div className="rounded-xl overflow-hidden border border-cream/[0.07]" style={{ background: "#181818" }}>
            {SPOTIFY_EMBED_URL ? (
              <iframe
                src={SPOTIFY_EMBED_URL}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Playlist Hasi"
              />
            ) : (
              <div className="p-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-spotify-green">
                  + PLAYLIST EXCLUSIVA HASI +
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-hasi-purple/30 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-hasi-purple">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-semibold text-[15px]">Playlist Hasi</p>
                    <p className="text-cream/40 text-[12px] mt-0.5">para o briefing · foco & presença</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPlaying(!playing)}
                    aria-label={playing ? "Pausar" : "Tocar"}
                    className="ml-auto w-9 h-9 rounded-full bg-spotify-green flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {playing ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    )}
                  </button>
                </div>
                {/* Barra de progresso */}
                <div
                  className="relative h-1 bg-white/10 rounded-full cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setProgress(((e.clientX - rect.left) / rect.width) * 100);
                  }}
                >
                  <div className="h-full bg-spotify-green rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
                <p className="text-[11px] italic text-cream/20 text-center">foco & leveza</p>
              </div>
            )}
          </div>

          {/* Checklist */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.14em] text-cream/30 pb-2.5 border-b border-cream/[0.07]">
              RITUAL DE FOCO — CHECKLIST PRÉ-BRIEFING
            </p>
            {CHECKLIST.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => toggleCheck(i)}
                className="w-full flex items-start gap-3 text-left group"
              >
                <div className={`w-5 h-5 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center transition-all duration-200 ${
                  checked[i]
                    ? "border-hasi-cyan bg-hasi-cyan"
                    : "border-cream/20 group-hover:border-cream/35"
                }`}>
                  {checked[i] && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className={`text-[13px] leading-[1.7] transition-all duration-200 ${
                  checked[i] ? "line-through text-cream/25" : "text-cream/70"
                }`}>
                  {item}
                </span>
              </button>
            ))}
          </div>
        </section>

        <Divider label="+ O QUE VEM POR AÍ +" />

        {/* ── O QUE ESPERAR ── */}
        <section className="pb-4 space-y-5">
          <p className="text-[10px] uppercase tracking-[0.14em] text-cream/30 pb-2.5 border-b border-cream/[0.07]">
            7 BLOCOS ESTRATÉGICOS SOBRE A SUA MARCA
          </p>

          <div className="space-y-3">
            {BLOCKS.map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-cream/[0.07] bg-hasi-purple/[0.02]">
                <div className="w-9 h-9 rounded-lg bg-hasi-purple/[0.08] flex items-center justify-center text-hasi-purple flex-shrink-0">
                  <BlockIcon name={b.icon} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-cream/90">{b.title}</p>
                  <p className="text-[12px] text-cream/45 mt-0.5 leading-[1.6]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider label="+ O QUE ACONTECE DEPOIS +" />

        {/* ── TIMELINE ── */}
        <section className="pb-4 space-y-0">
          {TIMELINE.map((step, i) => (
            <div key={i} className="flex gap-5">
              {/* coluna esquerda: círculo + linha */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-8 h-8 rounded-full border border-hasi-purple/30 bg-hasi-purple/10 flex items-center justify-center text-hasi-purple text-[12px] font-semibold flex-shrink-0`}>
                  {step.n}
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="w-px flex-1 bg-hasi-purple/15 my-2" style={{ minHeight: "24px" }} />
                )}
              </div>
              {/* conteúdo */}
              <div className={`pb-${i < TIMELINE.length - 1 ? "6" : "0"} pt-1`} style={{ paddingBottom: i < TIMELINE.length - 1 ? "24px" : "0" }}>
                <p className="text-[14px] font-semibold text-cream/90">{step.title}</p>
                <p className="text-[13px] text-cream/45 mt-1 leading-[1.7]">{step.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-14">
          <div className="border border-hasi-cyan/15 bg-hasi-cyan/[0.03] rounded-2xl p-8 text-center space-y-4">
            <h2 className="text-[22px] sm:text-[26px] font-bold">
              Pronta para{" "}
              <span className="text-hasi-cyan">começar?</span>
            </h2>
            <p className="text-[13px] text-cream/50 leading-[1.8]">
              Preencha o briefing com calma. Cada resposta importa.
            </p>
            <Link
              href="/briefing"
              className="inline-block mt-2 px-6 py-3 rounded-xl border border-cream/[0.18] text-cream text-[13px] font-medium hover:bg-cream/[0.06] transition-colors duration-200"
            >
              Começar o briefing →
            </Link>
            <p className="text-[11px] text-cream/20 pt-1">~30 minutos · 8 blocos · 100% sobre a sua marca</p>
          </div>
        </section>

      </div>
    </div>
  );
}

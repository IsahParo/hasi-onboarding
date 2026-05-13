import { RespostasType } from "@/types/briefing";

function row(label: string, value: string | string[] | number | null | undefined): string {
  if (!value || (Array.isArray(value) && value.length === 0)) return "";
  const display = Array.isArray(value) ? value.join(", ") : String(value);
  return `
    <tr>
      <td style="padding:6px 8px;color:#555;font-size:12px;width:38%;vertical-align:top;border-bottom:1px solid #f0f0f0">${label}</td>
      <td style="padding:6px 8px;font-size:13px;color:#1a1a1a;vertical-align:top;border-bottom:1px solid #f0f0f0;white-space:pre-wrap">${display}</td>
    </tr>`;
}

function section(title: string, rows: string): string {
  if (!rows.trim()) return "";
  return `
    <div style="margin-bottom:28px">
      <h2 style="font-size:15px;font-weight:700;color:#8c52ff;border-bottom:2px solid #8c52ff;padding-bottom:6px;margin-bottom:0">${title}</h2>
      <table style="width:100%;border-collapse:collapse">${rows}</table>
    </div>`;
}

export async function exportPdf(respostas: RespostasType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const html2pdf = (await import("html2pdf.js" as any)).default;
  const { bloco1: b1, bloco2: b2, bloco3: b3, bloco4: b4, bloco5: b5, bloco6: b6, bloco7: b7, bloco8: b8 } = respostas;

  const html = `
<div style="font-family:Arial,sans-serif;color:#1a1a1a;padding:40px 48px;max-width:720px">
  <div style="text-align:center;margin-bottom:36px;padding-bottom:24px;border-bottom:2px solid #8c52ff">
    <h1 style="font-size:22px;color:#8c52ff;margin:0 0 6px">Hasi · Briefing Estratégico</h1>
    <p style="color:#888;font-size:13px;margin:0">${b1.nomeMarca || "Briefing"} · hasi.com.br</p>
  </div>

  ${section("Bloco 01 — Sobre o Negócio",
    row("Nome completo", b1.nome) +
    row("Nome da marca", b1.nomeMarca) +
    row("Segmento", b1.segmento) +
    row("Tempo no mercado", b1.tempoMercado) +
    row("Frase resumo", b1.frase) +
    row("História da marca", b1.historia) +
    row("Produtos e serviços", b1.produtos) +
    row("Ticket médio", b1.ticketMedio) +
    row("Canal de venda", b1.canalVenda) +
    row("Produto destaque", b1.produtoDestaque) +
    row("Produto travado", b1.produtoTravado) +
    row("Operação", b1.operacao) +
    row("Fonte de receita", b1.receitaPrincipal) +
    row("Sazonalidade", b1.sazonalidade)
  )}

  ${section("Bloco 02 — Público-Alvo e Persona",
    row("Gênero", b2.genero) +
    row("Faixa etária", b2.faixaEtaria) +
    row("Renda", b2.renda) +
    row("Localização", b2.localizacao) +
    row("Persona", b2.personaDesc) +
    row("Dores e frustrações", b2.dores) +
    row("Transformação buscada", b2.transformacao) +
    row("Impedimentos", b2.impedimentos) +
    row("Objeções", b2.objecoes) +
    row("Canais online", b2.canaisOnline) +
    row("Conteúdo consumido", b2.conteudoConsume) +
    row("Gatilhos de compra", b2.gatilhos)
  )}

  ${section("Bloco 03 — Mercado e Concorrência",
    row("Posicionamento", b3.posicionamento) +
    row("Diferencial", b3.diferencial) +
    row("Percepção de mercado", b3.percepcaoMercado) +
    row("Lacuna de mercado", b3.lacuna) +
    row("Concorrente 1", b3.concorrente1.nome ? `${b3.concorrente1.nome} | forte: ${b3.concorrente1.forte} | vantagem: ${b3.concorrente1.vantagem}` : "") +
    row("Concorrente 2", b3.concorrente2.nome ? `${b3.concorrente2.nome} | forte: ${b3.concorrente2.forte} | vantagem: ${b3.concorrente2.vantagem}` : "") +
    row("Concorrente 3", b3.concorrente3.nome ? `${b3.concorrente3.nome} | forte: ${b3.concorrente3.forte} | vantagem: ${b3.concorrente3.vantagem}` : "") +
    row("Marcas admiradas", b3.admiracao) +
    row("Não quer parecer com", b3.naoQuerParecer)
  )}

  ${section("Bloco 04 — Presença Digital",
    row("Instagram", b4.instagram) +
    row("Seguidores", b4.seguidores) +
    row("Outros canais", b4.outrosCanais) +
    row("Frequência de publicação", b4.frequencia) +
    row("Formatos usados", b4.formatos) +
    row("Melhor conteúdo", b4.melhorConteudo) +
    row("Sentimento sobre conteúdo", b4.sentimento) +
    row("O que não funcionou", b4.naofuncionou) +
    row("Tráfego pago", b4.trafegoPago) +
    row("Taxa de conversão", b4.taxaConversao) +
    row("Como chegam até você", b4.comoChegam)
  )}

  ${section("Bloco 05 — Identidade Visual",
    row("Status identidade", b5.statusId) +
    row("O que incomoda", b5.incomoda) +
    row("Cores selecionadas", b5.cores) +
    row("Referências hex", b5.hexCores) +
    row("Personalidade visual", b5.personalidadeVisual) +
    row("Não quer visualmente", b5.naoQuerVisual) +
    row("Aparece na marca", b5.apareceNaMarca) +
    row("Fotos profissionais", b5.temFotos)
  )}

  ${section("Bloco 06 — Linguagem e Voz",
    row("Persona da marca", b6.personaMarca) +
    row("Tom de voz", b6.tomVoz) +
    row("Uso de emoji", b6.usaEmoji) +
    row("Trata cliente como", b6.trataCliente) +
    row("Nível de formalidade", b6.formalidade) +
    row("Vocabulário próprio", b6.vocabulario) +
    row("Proibições", b6.proibicoes) +
    row("Exemplos de copy", b6.exemplosCopy)
  )}

  ${section("Bloco 07 — Objetivos e Estratégia",
    row("Objetivo com a Hasi", b7.objetivo) +
    row("Cenário em 6 meses", b7.cenario6meses) +
    row("Prioridades", b7.prioridades) +
    row("Maior dificuldade", b7.dificuldade) +
    row("Tentativas anteriores", b7.tentativas) +
    row("Bloqueios internos", b7.bloqueios) +
    row("Comunicação preferida", b7.comunicacao) +
    row("Frequência de alinhamento", b7.frequenciaAlinhamento) +
    row("Nível de envolvimento", b7.envolvimento) +
    row("Informações extras", b7.outrasInfos)
  )}

  ${section("Bloco 08 — Material de Apoio",
    row("Fotos e vídeos", b8.fotosVideos) +
    row("Logo e arquivos", b8.logoArquivos) +
    row("Manual de marca", b8.manualMarca) +
    row("Conteúdos anteriores", b8.conteudosAnteriores) +
    row("Perfis de referência", b8.perfisReferencia) +
    row("Sites inspiradores", b8.sitesInspiram) +
    row("Moodboard", b8.moodboard)
  )}

  <div style="text-align:center;margin-top:40px;padding-top:20px;border-top:1px solid #e0e0e0;color:#aaa;font-size:11px">
    Briefing estratégico · Hasi · hasi.com.br
  </div>
</div>`;

  const filename = `briefing-${(b1.nomeMarca || "marca").toLowerCase().replace(/\s+/g, "-")}-hasi.pdf`;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  await html2pdf()
    .set({
      margin: [8, 8],
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
    .from(wrapper)
    .save();

  document.body.removeChild(wrapper);
}

export interface ConcorrenteData {
  nome: string;
  forte: string;
  vantagem: string;
}

export interface Bloco1Data {
  nome: string;
  nomeMarca: string;
  segmento: string;
  tempoMercado: string;
  frase: string;
  historia: string;
  produtos: string;
  ticketMedio: string;
  canalVenda: string;
  produtoDestaque: string;
  produtoTravado: string;
  operacao: string[];
  receitaPrincipal: string;
  sazonalidade: string;
}

export interface Bloco2Data {
  genero: string;
  faixaEtaria: string;
  renda: string;
  localizacao: string;
  personaDesc: string;
  dores: string;
  transformacao: string;
  impedimentos: string;
  objecoes: string[];
  canaisOnline: string[];
  conteudoConsume: string;
  gatilhos: string[];
}

export interface Bloco3Data {
  posicionamento: string;
  diferencial: string;
  percepcaoMercado: string[];
  lacuna: string;
  concorrente1: ConcorrenteData;
  concorrente2: ConcorrenteData;
  concorrente3: ConcorrenteData;
  admiracao: string;
  naoQuerParecer: string;
}

export interface Bloco4Data {
  instagram: string;
  seguidores: string;
  outrosCanais: string[];
  frequencia: string;
  formatos: string;
  melhorConteudo: string;
  sentimento: string[];
  naofuncionou: string;
  trafegoPago: string[];
  taxaConversao: string;
  comoChegam: string[];
}

export interface Bloco5Data {
  statusId: string[];
  incomoda: string;
  cores: string[];
  hexCores: string;
  personalidadeVisual: string[];
  naoQuerVisual: string;
  apareceNaMarca: string[];
  temFotos: string[];
}

export interface Bloco6Data {
  personaMarca: string;
  tomVoz: string[];
  usaEmoji: string[];
  trataCliente: string[];
  formalidade: number | null;
  vocabulario: string;
  proibicoes: string;
  exemplosCopy: string;
}

export interface Bloco7Data {
  objetivo: string;
  cenario6meses: string;
  prioridades: string[];
  dificuldade: string;
  tentativas: string;
  bloqueios: string;
  comunicacao: string;
  frequenciaAlinhamento: string;
  envolvimento: string[];
  outrasInfos: string;
}

export interface Bloco8Data {
  fotosVideos: string;
  logoArquivos: string;
  manualMarca: string;
  conteudosAnteriores: string;
  perfisReferencia: string;
  sitesInspiram: string;
  moodboard: string;
}

export interface RespostasType {
  bloco1: Bloco1Data;
  bloco2: Bloco2Data;
  bloco3: Bloco3Data;
  bloco4: Bloco4Data;
  bloco5: Bloco5Data;
  bloco6: Bloco6Data;
  bloco7: Bloco7Data;
  bloco8: Bloco8Data;
}

export const initialRespostas: RespostasType = {
  bloco1: { nome: "", nomeMarca: "", segmento: "", tempoMercado: "", frase: "", historia: "", produtos: "", ticketMedio: "", canalVenda: "", produtoDestaque: "", produtoTravado: "", operacao: [], receitaPrincipal: "", sazonalidade: "" },
  bloco2: { genero: "", faixaEtaria: "", renda: "", localizacao: "", personaDesc: "", dores: "", transformacao: "", impedimentos: "", objecoes: [], canaisOnline: [], conteudoConsume: "", gatilhos: [] },
  bloco3: { posicionamento: "", diferencial: "", percepcaoMercado: [], lacuna: "", concorrente1: { nome: "", forte: "", vantagem: "" }, concorrente2: { nome: "", forte: "", vantagem: "" }, concorrente3: { nome: "", forte: "", vantagem: "" }, admiracao: "", naoQuerParecer: "" },
  bloco4: { instagram: "", seguidores: "", outrosCanais: [], frequencia: "", formatos: "", melhorConteudo: "", sentimento: [], naofuncionou: "", trafegoPago: [], taxaConversao: "", comoChegam: [] },
  bloco5: { statusId: [], incomoda: "", cores: [], hexCores: "", personalidadeVisual: [], naoQuerVisual: "", apareceNaMarca: [], temFotos: [] },
  bloco6: { personaMarca: "", tomVoz: [], usaEmoji: [], trataCliente: [], formalidade: null, vocabulario: "", proibicoes: "", exemplosCopy: "" },
  bloco7: { objetivo: "", cenario6meses: "", prioridades: [], dificuldade: "", tentativas: "", bloqueios: "", comunicacao: "", frequenciaAlinhamento: "", envolvimento: [], outrasInfos: "" },
  bloco8: { fotosVideos: "", logoArquivos: "", manualMarca: "", conteudosAnteriores: "", perfisReferencia: "", sitesInspiram: "", moodboard: "" },
};

// ════════════════════════════════════════════════════════
// IMMA MARKETING DASHBOARD — DADOS HISTÓRICOS
//
// Atualizado automaticamente pelo agente imma-relatorio-metricas
// Cada rodada semanal: (1) adiciona nova entrada em *.weekly[]
//                      (2) atualiza campos snapshot no topo
//                      (3) adiciona entrada em coletasLog[]
//
// NÃO modifique a estrutura — apenas os valores
// ════════════════════════════════════════════════════════

const IMMA_DATA = {
  lastUpdated: "2026-04-08T10:00:00",
  reportPeriod: "7–13 abr 2026",

  // ─────────────────────────────────────────────────────
  // GOOGLE ADS
  // ─────────────────────────────────────────────────────
  googleAds: {
    accountId: "447-373-7868",
    accountName: "Imma Experiências",

    // SNAPSHOT — estado atual (atualizado a cada rodada)
    activeCampaigns: 1,
    pausedCampaigns: 12,
    budgetLimitAlert: true,
    activeCampaignName: "11/02/26 | LEADS | IMMA | GRUPO DE ANÚNCIOS",
    activeCampaignBudget: 85,
    activeCampaignStatus: "Limitada pelo orçamento",
    activeCampaignType: "Pesquisa (Search)",
    activeCampaignScore: 84.5,

    topKeywords: [
      { keyword: "reconhecimento corporativo", cliques: 24, conversoes: 1, cpl: 180.00 },
      { keyword: "premiação colaboradores",    cliques: 18, conversoes: 1, cpl: 210.00 },
      { keyword: "plataforma de incentivo",    cliques: 12, conversoes: 0, cpl: null },
      { keyword: "experiências corporativas",  cliques: 15, conversoes: 0, cpl: null },
      { keyword: "employee experience",        cliques: 10, conversoes: 0, cpl: null }
    ],

    // HISTÓRICO SEMANAL — agente ADICIONA ao final, não substitui
    weekly: [
      { week: "17–23 fev", periodo: "2026-02-17", impressoes: 1890, cliques: 102, custo: 612.00,  conversoes: 3, cpl: 204.00  },
      { week: "24 fev–2 mar", periodo: "2026-02-24", impressoes: 2010, cliques: 118, custo: 698.00,  conversoes: 4, cpl: 174.50  },
      { week: "3–9 mar",      periodo: "2026-03-03", impressoes: 1743, cliques: 93,  custo: 580.00,  conversoes: 2, cpl: 290.00  },
      { week: "10–16 mar",    periodo: "2026-03-10", impressoes: 2254, cliques: 131, custo: 751.00,  conversoes: 4, cpl: 187.75  },
      { week: "17–23 mar",    periodo: "2026-03-17", impressoes: 1980, cliques: 110, custo: 674.00,  conversoes: 3, cpl: 224.67  },
      { week: "24–30 mar",    periodo: "2026-03-24", impressoes: 1567, cliques: 88,  custo: 590.00,  conversoes: 2, cpl: 295.00  },
      { week: "31 mar–6 abr", periodo: "2026-03-31", impressoes: 1538, cliques: 89,  custo: 588.16,  conversoes: 2, cpl: 294.08  },
      { week: "7–13 abr",    periodo: "2026-04-07", impressoes: 1477, cliques: 94,  custo: 632.20,  conversoes: 2, cpl: 316.10  }
      // PRÓXIMA SEMANA: { week: "14–20 abr", periodo: "2026-04-14", ... }
    ],

    // HISTÓRICO MENSAL — agente ADICIONA ao final no início de cada mês
    monthly: [
      { month: "Nov/25", periodo: "2025-11-01", impressoes: 7200, cliques: 390, custo: 2240.00, conversoes: 9,  cpl: 248.89 },
      { month: "Dez/25", periodo: "2025-12-01", impressoes: 6100, cliques: 320, custo: 1890.00, conversoes: 7,  cpl: 270.00 },
      { month: "Jan/26", periodo: "2026-01-01", impressoes: 8100, cliques: 445, custo: 2650.00, conversoes: 11, cpl: 240.91 },
      { month: "Fev/26", periodo: "2026-02-01", impressoes: 7850, cliques: 432, custo: 2580.00, conversoes: 10, cpl: 258.00 },
      { month: "Mar/26", periodo: "2026-03-01", impressoes: 8384, cliques: 462, custo: 2794.00, conversoes: 12, cpl: 232.83 }
      // PRÓXIMO MÊS: { month: "Abr/26", periodo: "2026-04-01", ... } — inserir no início de maio
    ]
  },

  // ─────────────────────────────────────────────────────
  // LINKEDIN
  // ─────────────────────────────────────────────────────
  linkedin: {
    // SNAPSHOT
    seguidores:       { start: 1871, end: 2056, growth: 185 },
    period:           "Últimos 30 dias",
    engajamentoMedio: 16.0,
    nota:             "Slug immaexperiencias indisponível — page atual via ID 1210891",
    benchmarkB2B:     3.5,

    // Posts recentes — substituir a cada rodada com os últimos posts (25 mar – 8 abr)
    postsRecentes: [
      { titulo: "Expectativa vs Realidade — Bônus",     data: "Abr 2026", periodo: "2026-04-07", alcance: 36,  engajamento: 16.7, tipo: "Imagem"    },
      { titulo: "Planilhas e cultura organizacional",   data: "Abr 2026", periodo: "2026-04-05", alcance: 75,  engajamento: 36.0, tipo: "Documento" },
      { titulo: "NR-1, saúde mental e empresas",        data: "Mar 2026", periodo: "2026-03-27", alcance: 59,  engajamento: 8.5,  tipo: "Artigo"    },
      { titulo: "Vittude Summit 2026",                  data: "Mar 2026", periodo: "2026-03-27", alcance: 53,  engajamento: 11.3, tipo: "Vídeo"     },
      { titulo: "Métricas de clima, eNPS e turnover",   data: "Mar 2026", periodo: "2026-03-25", alcance: 40,  engajamento: 7.5,  tipo: "Vídeo"     }
    ],

    // HISTÓRICO SEMANAL — agente ADICIONA ao final
    weekly: [
      { week: "24 fev–2 mar", periodo: "2026-02-24", seguidores: 1820, engajamento: 12.1, posts: 2 },
      { week: "3–9 mar",      periodo: "2026-03-03", seguidores: 1831, engajamento: 15.4, posts: 3 },
      { week: "10–16 mar",    periodo: "2026-03-10", seguidores: 1842, engajamento: 18.2, posts: 2 },
      { week: "17–23 mar",    periodo: "2026-03-17", seguidores: 1853, engajamento: 22.5, posts: 3 },
      { week: "24–30 mar",    periodo: "2026-03-24", seguidores: 1862, engajamento: 19.8, posts: 2 },
      { week: "31 mar–6 abr", periodo: "2026-03-31", seguidores: 1871, engajamento: 16.7, posts: 2 },
      { week: "7–13 abr",    periodo: "2026-04-07", seguidores: 2056, engajamento: 16.0, posts: 2 }
    ]
  },

  // ─────────────────────────────────────────────────────
  // SEARCH CONSOLE
  // ─────────────────────────────────────────────────────
  searchConsole: {
    // SNAPSHOT
    period:              "Últimos 7 dias",
    cliques:             174,
    impressoes:          6550,
    ctr:                 2.7,
    posicaoMedia:        8.3,
    paginasNaoIndexadas: 740,

    topKeywords: [
      { keyword: "imma experiências",             cliques: 42, posicao: 1.2 },
      { keyword: "reconhecimento corporativo",    cliques: 28, posicao: 4.1 },
      { keyword: "premiação colaboradores",       cliques: 19, posicao: 6.3 },
      { keyword: "felicidade no trabalho empresa",cliques: 14, posicao: 7.8 },
      { keyword: "employee experience brasil",    cliques: 11, posicao: 9.2 }
    ],

    // HISTÓRICO SEMANAL — agente ADICIONA ao final
    weekly: [
      { week: "17–23 fev", periodo: "2026-02-17", cliques: 145, impressoes: 5200, ctr: 2.79, posicao: 8.5 },
      { week: "24 fev–2 mar", periodo: "2026-02-24", cliques: 162, impressoes: 5890, ctr: 2.75, posicao: 8.4 },
      { week: "3–9 mar",      periodo: "2026-03-03", cliques: 171, impressoes: 6100, ctr: 2.80, posicao: 8.3 },
      { week: "10–16 mar",    periodo: "2026-03-10", cliques: 188, impressoes: 6450, ctr: 2.91, posicao: 8.1 },
      { week: "17–23 mar",    periodo: "2026-03-17", cliques: 192, impressoes: 6720, ctr: 2.86, posicao: 8.2 },
      { week: "24–30 mar",    periodo: "2026-03-24", cliques: 179, impressoes: 6580, ctr: 2.72, posicao: 8.3 },
      { week: "31 mar–6 abr", periodo: "2026-03-31", cliques: 185, impressoes: 6760, ctr: 2.74, posicao: 8.2 },
      { week: "7–13 abr",    periodo: "2026-04-07", cliques: 174, impressoes: 6550, ctr: 2.66, posicao: 8.3 }
    ]
  },

  // ─────────────────────────────────────────────────────
  // INSTAGRAM
  // ─────────────────────────────────────────────────────
  instagram: {
    // SNAPSHOT
    seguidores:       1302,
    crescimento:      "n/d (insights não coletados)",
    engajamentoMedio: 7.5,

    postsRecentes: [
      { titulo: "Dia da Felicidade",   data: "Mar 2026", alcance: 1240, engajamento: 8.4 },
      { titulo: "Premiação — Páscoa",  data: "Mar 2026", alcance: 980,  engajamento: 6.7 }
    ],

    // HISTÓRICO SEMANAL — agente ADICIONA ao final
    weekly: [
      { week: "31 mar–6 abr", periodo: "2026-03-31", seguidores: 2341, crescimento: 12,   engajamento: 7.5, posts: 2 },
      { week: "7–13 abr",    periodo: "2026-04-07", seguidores: 1302, crescimento: null, engajamento: 7.5, posts: 1 }
    ]
  },

  // ─────────────────────────────────────────────────────
  // META ADS
  // ─────────────────────────────────────────────────────
  metaAds: {
    // SNAPSHOT
    investimento7d: 0,
    leads7d:        0,
    status:         "Sem campanhas ativas",
    nota:           "Nenhum anúncio ativo nos últimos 60 dias",

    // HISTÓRICO SEMANAL — agente ADICIONA ao final
    weekly: [
      { week: "31 mar–6 abr", periodo: "2026-03-31", investimento: 0, leads: 0, cpl: null, impressoes: 0, cliques: 0 },
      { week: "7–13 abr",    periodo: "2026-04-07", investimento: 0, leads: 0, cpl: null, impressoes: 0, cliques: 0 }
    ]
  },

  // ─────────────────────────────────────────────────────
  // LINKEDIN ADS
  // ─────────────────────────────────────────────────────
  linkedinAds: {
    // SNAPSHOT — atualizado a cada rodada
    status:         "ok",
    nota:           "Campanha 'RH - Mensagem' (Sponsored Messaging/InMail) — 0 impressões é normal para este formato",
    investimento7d: 165.40,
    leads7d:        1,
    impressoes7d:   0,
    cliques7d:      0,
    ctr7d:          null,
    cpl7d:          165.40,
    campanhasAtivas: 1,

    // HISTÓRICO SEMANAL — agente ADICIONA ao final
    weekly: [
      { week: "31 mar–6 abr", periodo: "2026-03-31", investimento: null,   impressoes: null, cliques: null, ctr: null, leads: null, cpl: null,   status: "nao_coletado" },
      { week: "7–13 abr",    periodo: "2026-04-07", investimento: 165.40, impressoes: 0,    cliques: 0,    ctr: null, leads: 1,    cpl: 165.40, status: "ok" }
    ],

    // HISTÓRICO MENSAL
    monthly: [
      { month: "Mar/26", periodo: "2026-03-01", investimento: null,   impressoes: null, cliques: null, leads: null, cpl: null,   status: "nao_coletado" },
      { month: "Abr/26", periodo: "2026-04-01", investimento: 165.40, impressoes: 0,    cliques: 0,    leads: 1,    cpl: 165.40, status: "parcial" }
    ],

    // Campanhas recentes (substituir a cada rodada)
    campanhas: [
      { nome: "RH - Mensagem", status: "Ativa", tipo: "Sponsored Messaging (InMail)", objetivo: "Geração de leads" },
      { nome: "Mega Clientes",         status: "Pausada", tipo: null, objetivo: null },
      { nome: "Default Campaign Group",status: "Ativa",   tipo: null, objetivo: null }
    ]
  },

  // ─────────────────────────────────────────────────────
  // RD STATION
  // ─────────────────────────────────────────────────────
  rdStation: {
    // SNAPSHOT
    status: "502 — instabilidade no servidor",
    nota:   "Dados não coletados nesta rodada",

    // HISTÓRICO SEMANAL — agente ADICIONA ao final
    weekly: [
      { week: "31 mar–6 abr", periodo: "2026-03-31", status: "erro_502",     leads: null, mqls: null, abertura_email: null, ctr_email: null },
      { week: "7–13 abr",    periodo: "2026-04-07", status: "nao_coletado", leads: null, mqls: null, abertura_email: null, ctr_email: null }
    ]
  },

  // ─────────────────────────────────────────────────────
  // GA4
  // ─────────────────────────────────────────────────────
  ga4: {
    status: "nao_instalado",
    tagId:  "G-R8SYSRZFFW",
    nota:   "GA4 configurado mas pixel não instalado em imma.net.br",

    // Será preenchido após instalação da tag
    weekly: []
  },

  // ─────────────────────────────────────────────────────
  // LOG DE COLETAS — registro auditável de cada rodada
  // ─────────────────────────────────────────────────────
  coletasLog: [
    {
      data:    "2026-04-07",
      agente:  "imma-relatorio-metricas",
      rodada:  1,
      plataformas: {
        googleAds:    "ok — 1 campanha ativa, limitada pelo orçamento",
        linkedin:     "ok — 6 posts coletados, 1.871 seguidores",
        instagram:    "ok — 2 posts coletados",
        searchConsole:"ok — 185 cliques, 740 páginas não indexadas",
        metaAds:      "sem_campanhas — R$0 investido",
        rdStation:    "erro_502",
        ga4:          "nao_instalado"
      },
      notas: "Primeira coleta completa. GA4 não instalado é prioridade crítica. Campanha Google Ads limitada pelo orçamento."
    },
    {
      data:    "2026-04-08",
      agente:  "imma-relatorio-metricas",
      rodada:  2,
      plataformas: {
        googleAds:    "ok — 1477 imp, 94 cliques, R$632,20, 2 conversões, CPL R$316,10",
        linkedinAds:  "ok — R$165,40 investido, 1 lead, CPL R$165,40 (campanha RH-Mensagem InMail)",
        searchConsole:"ok — 174 cliques, 6550 imp, CTR 2,7%, posição 8,3",
        linkedin:     "ok — 2.056 seguidores (page migrou para ID 1210891), engaj. ~16%",
        instagram:    "parcial — 1.302 seguidores (perfil); insights não coletados",
        metaAds:      "sem_campanhas — R$0 investido",
        rdStation:    "nao_coletado",
        ga4:          "nao_instalado"
      },
      notas: "LinkedIn page slug 'immaexperiencias' indisponível — acessada via ID numérico 1210891. Instagram seguidores diverge de Rodada 1 (possível dado inicial estimado). RD Station não tentado nesta rodada."
    }
    // PRÓXIMA RODADA: { data: "2026-04-14", agente: "imma-relatorio-metricas", rodada: 3, ... }
  ]
};

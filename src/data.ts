/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Objection, ApproachStep, SimulationScenario } from "./types";

// Core overview loaded with the main slogan and simplified stand objective
export const companyOverview = {
  title: "iGreen Energy • Minas Gerais (Cemig)",
  concept: "Nosso trabalho é simples em MG:",
  slogan: "“Não estamos vendendo energia. Estamos entregando economia para os mineiros.”",
  description: "Nosso trabalho é simples em MG:\n• Abordar\n• Explicar rápido\n• Pegar a conta da Cemig\n\nQuem fizer isso bem, ganha dinheiro. Quem não fizer, fica para trás.\n\nA partir de agora, vocês são especialistas em reduzir a conta de luz da Cemig.",
};

// Bloco 1 - Produto na Lata
export const bloco1Produto = {
  title: "BLOCO 1 – PRODUTO NA LATA",
  explanation: "Supervisora explica assim:",
  items: [
    "Cliente continua com a Cemig",
    "Não muda nada na casa ou empresa",
    "Não instala nada",
    "Não paga nada",
    "Recebe desconto todo mês"
  ],
  keyPhrase: "“Você continua com tudo igual, só paga mais barato.”"
};

// Bloco 2 - Abordagem Prática
export const bloco2Abordagem = {
  title: "BLOCO 2 – ABORDAGEM PRÁTICA (treino obrigatório)",
  explanationTitle: "EXPLICAÇÃO RÁPIDA",
  explanationText: "A gente conecta você a uma usina solar e você passa a receber desconto direto na sua conta.\nSem taxa, sem fidelidade, sem instalação.\nSó economia todo mês.",
  closingTitle: "FECHAMENTO",
  closingText: "Me manda uma conta rapidinho que já te mostro quanto você economiza."
};

// Script de Abordagem (Padrão Time)
export const scriptAbordagem = {
  title: "SCRIPT DE ABORDAGEM (PADRÃO TIME)",
  sections: [
    {
      title: "Quebra de gelo (3 segundos)",
      instruction: "Treinar até virar automático:",
      phrases: [
        "“Posso te mostrar como pagar menos na conta de luz sem mudar nada?”",
        "OU",
        "“Sua conta de energia tá vindo cara? Dá pra reduzir agora sem custo.”"
      ]
    },
    {
      title: "Engajamento",
      instruction: "Se parar:",
      phrases: [
        "“Você paga mais ou menos quanto de luz hoje?”"
      ],
      extra: "Isso ativa dor + abre conversa"
    },
    {
      title: "Explicação (máximo 20 segundos)",
      instruction: "Fale de forma simples:",
      phrases: [
        "“A gente conecta você a uma usina solar, e você passa a receber desconto direto na conta da Cemig. Não muda nada, não tem taxa e nem obra.”"
      ]
    },
    {
      title: "Chamada pra ação",
      instruction: "Peça o fechamento:",
      phrases: [
        "“Me manda uma conta rapidinho que já te mostro quanto você economiza.”"
      ]
    }
  ]
};

// Objeções reais do script
export const objectionsData: Objection[] = [
  {
    id: "obj1",
    title: "“Isso é golpe?”",
    customerText: "Isso é golpe?",
    responseText: "“Não. É regulamentado pela ANEEL, você continua com a Cemig normal. Só recebe desconto.”",
    explanation: "NÃO É GOLPE, É LEI: Lei nº 14.300/2022. Institui o marco legal da microgeração e minigeração distribuída, o Sistema de Compensação de Energia Elétrica (SCEE) e o Programa de Energia Renovável Social (PERS); altera as Leis nºs 10.848, de 15 de março de 2004, e 9.427, de 26 de dezembro de 1996; e dá outras providências."
  },
  {
    id: "obj2",
    title: "“Tem que instalar placa?”",
    customerText: "Tem que instalar placa?",
    responseText: "“Nada. A energia vem de uma usina remota, você só recebe o crédito na conta.”",
    explanation: "Nossa usina injeta os créditos na rede e a distribuidora entrega para o cliente, sem obras nem despesas."
  },
  {
    id: "obj3",
    title: "“Tem fidelidade?”",
    customerText: "Tem fidelidade?",
    responseText: "“Não. Se não quiser mais, pode sair.”",
    explanation: "A ausência de fidelidade ou multas de quebra de contrato residencial elimina totalmente o risco percebido do cliente."
  },
  {
    id: "obj4",
    title: "“Vou pagar alguma coisa?”",
    customerText: "Vou pagar alguma coisa?",
    responseText: "“Não. Você só paga sua conta já com desconto.”",
    explanation: "Custo zero para aderir, sem taxas ocultas, sem custos operacionais ou de cadastro."
  },
  {
    id: "obj5",
    title: "“Vai mudar minha energia?”",
    customerText: "Vai mudar minha energia?",
    responseText: "“Mesma energia, mesmo padrão, só mais barata.”",
    explanation: "A fiação, a tensão de fornecimento e a segurança técnica permanecem responsabilidade exclusiva da Cemig aqui em Minas Gerais."
  }
];

// Perguntas para qualificação (Filtro)
export const perguntasFiltro = {
  title: "PERGUNTAS QUE O TIME TEM QUE FAZER",
  instruction: "Supervisora cobra isso:",
  items: [
    "“Quanto vem sua conta hoje?”",
    "“É residencial ou empresa?”",
    "“Tá no seu nome?”",
    "“Quer economizar quanto por mês?”"
  ],
  explanation: "Isso filtra cliente certo."
};

// Prazo de Desconto iGreen
export const prazoDesconto = {
  title: "PRAZO DA IGREEN COMEÇAR O DESCONTO (CEMIG)",
  period: "Prazo regulamentado: 30 a 60 dias",
  subtitle: "Como funciona na prática na Cemig:",
  steps: [
    "Cliente realiza o cadastro hoje no stand",
    "Contrato é enviado para validação na Cemig",
    "Unidade consumidora vincula-se à usina solar parceira",
    "Cemig libera a compensação dos créditos de energia"
  ],
  results: [
    "1ª fatura → processamento regulatório (pode vir sem desconto)",
    "2ª fatura → desconto começa a ser injetado pela Cemig",
    "3ª fatura → faturamento 100% normalizado com desconto iGreen"
  ],
  standPitchTitle: "O que você deve falar no stand",
  standPitchText: "“O desconto começa entre 30 e 60 dias porque depende do ciclo de faturamento e validação da Cemig. Na prática, geralmente já aparece na segunda conta.”",
  ajusteExpectativa: {
    title: "Ajuste de expectativa (MANDATÓRIO EM MG)",
    alert: "Deixe claro para o cliente para evitar reclamações desnecessárias:",
    items: [
      "O desconto não é imediato na próxima semana",
      "É um processo de trâmite regulatório oficial com a Cemig",
      "Depois de ativado, o desconto é recorrente e automático todo mês"
    ]
  },
  dicaConversao: "“É igual portabilidade de celular: leva uns dias para ativar na Cemig, mas depois que entra, o senhor paga menos todo mês de graça.”"
};

// Cancelamento
export const cancelamentoData = {
  title: "CANCELAMENTO EM MINAS GERAIS",
  prazoTitle: "Prazo de Efetivação",
  prazoItems: [
    "Até 30 dias para a Cemig desvincular a unidade da usina",
    "Pode vir uma última fatura com o desconto ativo dependendo da data de leitura da Cemig"
  ],
  funcionamentoTitle: "Como funciona na prática",
  funcionamentoItems: [
    "Cliente solicita o cancelamento no suporte iGreen",
    "A iGreen processa e envia a solicitação à Cemig",
    "A Cemig retira o vínculo com a usina solar",
    "A conta volta a vir no valor padrão da Cemig, sem desconto"
  ],
  summary: "100% Grátis e Sem multa (seu maior argumento)",
  standPitchTitle: "O que falar no stand",
  standPitchText: "“Se quiser sair, pode cancelar sem multa alguma. Só leva até 30 dias para suspender os créditos porque passa pelo fluxo interno da Cemig.”"
};

// Troca de Imóvel
export const trocaImovelData = {
  title: "MUDANÇA DE ENDEREÇO EM MG",
  cenarios: [
    {
      title: "Nova residência com mesmo titular (CPF/CNPJ)",
      desc: "Transferência automática:",
      bullets: [
        "Atualiza a nova conta de luz no sistema iGreen",
        "O desconto é migrado para a nova conta da Cemig",
        "Prazo de homologação na Cemig: 30 a 60 dias"
      ]
    },
    {
      title: "Esqueceu de avisar a iGreen sobre a mudança",
      desc: "Consequências:",
      bullets: [
        "Os créditos continuam caindo no endereço antigo",
        "Precisa pedir cancelamento e fazer novo cadastro"
      ]
    }
  ],
  regrasPraticasTitle: "Regras Práticas para Troca de Imóvel",
  regrasPraticasItems: [
    "O novo imóvel precisa estar no mesmo CPF ou CNPJ do cadastro",
    "A titularidade da nova conta de luz já deve estar atualizada",
    "O imóvel de destino deve ser em Minas Gerais (área atendida pela Cemig)"
  ],
  standPitchTitle: "O que falar pro cliente",
  standPitchText: "“Se você se mudar para qualquer outra cidade de Minas Gerais atendida pela Cemig, dá para transferir seu desconto na hora sem pagar nada.”",
  errosEvitarTitle: "Erros que você tem que evitar",
  errosEvitarItems: [
    "Prometer desconto no mesmo dia da mudança",
    "Não avisar sobre a necessidade de estar na mesma área da Cemig",
    "Não orientar que a conta precisa estar no CPF do titular cadastrado"
  ],
  dicaOuroTitle: "Dica de ouro em Minas Gerais",
  dicaOuroQuestion: "Quando o cliente perguntar se fica preso ao contrato:",
  dicaOuroText: "“Não fica preso. Se mudar de casa em Minas, o desconto vai junto. Se for para outro estado e não quiser mais, cancela sem multa.”",
  dicaOuroImpact: "Isso derruba a barreira e fecha o cadastro!"
};

// Processo no Stand
export const processoStandData = {
  title: "PROCESSO NO STAND (PADRÃO OPERAÇÃO)",
  steps: [
    "Abordou → Parou → Engajou",
    "Explicou rápido",
    "Pegou conta (foto)",
    "Simulou na hora",
    "Fechou cadastro"
  ],
  erroTitle: "ERRO GRAVE",
  erroText: "deixar cliente sair sem simulação",
  regraTitle: "REGRA DE OURO",
  regraText: "não saiu simulação = perdeu cliente"
};

// Metas do Time
export const metasTimeData = {
  title: "METAS DO TIME",
  instruction: "Supervisora deixa claro por dia:",
  items: [
    "100 pessoas abordadas = mínimo",
    "40 param",
    "20 enviam conta",
    "10 fecham"
  ]
};

// Comportamento de Campo
export const comportamentoCampoData = {
  title: "COMPORTAMENTO DE CAMPO",
  bom: {
    title: "O vendedor BOM:",
    items: [
      "Aborda todo mundo",
      "Fala com energia",
      "Não pensa demais",
      "Pede a conta sempre"
    ]
  },
  ruim: {
    title: "O vendedor RUIM:",
    items: [
      "espera cliente vir",
      "fala baixo",
      "enrola",
      "não pede a conta"
    ]
  }
};

// Manual Rápido para Equipe
export const manualRapidoData = {
  title: "MANUAL RÁPIDO (ENTREGAR PARA EQUIPE)",
  passoPasso: [
    "Abordar",
    "Engajar",
    "Explicar",
    "Pedir conta",
    "Simular",
    "Fechar"
  ],
  frasesVendem: [
    "“É desconto direto na sua conta”",
    "“Sem custo nenhum”",
    "“Sem mudar nada”",
    "“Só economia todo mês”"
  ],
  escala: {
    title: "DIFERENCIAL QUE VAI TE DAR ESCALA",
    subtitle: "PROVA REAL",
    items: [
      "print de conta com desconto",
      "falar valor: “cliente economizou R$ 132 esse mês” ou melhor ressaltar quanto economizaria em um ano."
    ]
  },
  supervisoraScript: {
    title: "BÔNUS – SCRIPT PRA SUPERVISORA COBRAR TIME",
    items: [
      "Quantas pessoas você abordou?",
      "Quantas contas pegou?",
      "Quem não pediu conta hoje, tá deixando dinheiro na rua.",
      "Aqui ganha quem executa."
    ]
  },
  controleSupervisora: {
    title: "CONTROLE DA SUPERVISORA",
    bullets: [
      "Abordagens feitas",
      "Pessoas que pararam",
      "Contas coletadas",
      "Cadastros fechados"
    ],
    meta: "Todo dia tem meta."
  },
  diferencialExplode: {
    title: "DIFERENCIAL QUE EXPLODE CONVERSÃO",
    subtitle: "Prova social (obrigatório)",
    bullets: [
      "Mostrar print de conta com desconto",
      "Falar: “cliente aqui do bairro economizou R$ X,XX”"
    ]
  },
  errosMatam: {
    title: "ERROS QUE MATAM A VENDA",
    items: [
      "Falar difícil (geração distribuída, etc)",
      "Demorar explicar",
      "Não pedir a conta",
      "Ficar passivo esperando cliente vir"
    ]
  },
  fraseDefinitiva: "“Não estamos vendendo energia. Estamos entregando economia.”"
};

// Interactive simulation scenarios matched to the exact training scripts and objections!
export const simulationScenarios: SimulationScenario[] = [
  {
    id: "scen1",
    stageName: "1. Quebra de Gelo (Abordagem)",
    description: "Um cliente está passando perto do stand do seu time. Qual frase você usa de forma automática para parar o cliente em 3 segundos?",
    customerDialogue: "Olha só, iGreen Energy... Do que se trata isso?",
    choices: [
      {
        text: "“Sua conta de energia tá vindo cara? Dá pra reduzir agora sem custo.”",
        isCorrect: true,
        feedback: "Excelente! Esta frase é direta, ativa a dor do cliente (conta cara) e oferece uma solução imediata sem custo, abrindo espaço na hora.",
        meterImpact: 25
      },
      {
        text: "Olá! Somos uma plataforma de geração distribuída solar com usinas limpas enquadradas no marco legal de microgeração da lei 14.300.",
        isCorrect: false,
        feedback: "Erro! Isso é falar difícil e demorado. O treinamento diz: 'ERROS QUE MATAM A VENDA: Falar difícil e Demorar para explicar'.",
        meterImpact: -20
      },
      {
        text: "Olá, quer assinar o nosso contrato de energia por assinatura iGreen? Demora apenas 5 minutos.",
        isCorrect: false,
        feedback: "Incorreto. Falar em 'assinar contrato' ou 'energia por assinatura' cria barreiras mentais antes do cliente entender o benefício de custo zero.",
        meterImpact: -15
      }
    ]
  },
  {
    id: "scen2",
    stageName: "2. Engajamento (Se Parar)",
    description: "O cliente parou para ouvir você. Qual a primeira pergunta que você deve fazer para engajá-lo, ativar a dor e abrir a conversa?",
    customerDialogue: "Ah, sim... Minha conta de luz tá vindo cara mesmo, mas como assim?",
    choices: [
      {
        text: "“Você gasta mais ou menos quanto de luz hoje?”",
        isCorrect: true,
        feedback: "Sensacional! Esta pergunta exata ativa a dor e abre a conversa, fazendo o cliente pensar e revelar o consumo dele na hora.",
        meterImpact: 25
      },
      {
        text: "Me passa o seu CPF e o código da instalação para eu cadastrar você de graça no consórcio solar?",
        isCorrect: false,
        feedback: "Péssimo. Pular direto para dados sensíveis antes de explicar de forma amigável assusta o cliente e mata a venda.",
        meterImpact: -30
      },
      {
        text: "Você prefere energia hidrelétrica tradicional ou energia renovável solar com créditos compensatórios?",
        isCorrect: false,
        feedback: "Ruim. Pergunta desnecessariamente teórica que não foca na economia financeira real e imediata.",
        meterImpact: -10
      }
    ]
  },
  {
    id: "scen3",
    stageName: "3. Explicação Rápida (Máx 20 Segundos)",
    description: "O cliente respondeu que paga R$ 250 de luz. Agora você precisa explicar como o produto funciona em menos de 20 segundos!",
    customerDialogue: "Eu pago cerca de R$ 250 por mês. Mas como funciona essa redução de energia?",
    choices: [
      {
        text: "“A gente conecta você a uma usina solar, e você passa a receber desconto direto na conta da Cemig. Não muda nada, não tem taxa e nem obra.”",
        isCorrect: true,
        feedback: "Perfeito! Você explicou rápido, usou a frase chave exata e removeu todos os medos de taxas, instalações e burocracia de forma impecável.",
        meterImpact: 25
      },
      {
        text: "Nós compramos usinas solares de parceiros e repassamos créditos financeiros em lote pela distribuidora sob regras tributárias de ICMS.",
        isCorrect: false,
        feedback: "Errado! Evite termos técnicos e explicações longas de bastidores que confundem o cliente.",
        meterImpact: -15
      },
      {
        text: "É igual a comprar placas de energia solar para colocar no seu telhado, mas o banco financia.",
        isCorrect: false,
        feedback: "Incorreto! Na iGreen o cliente não instala nada e é grátis. Não confunda com venda de placas fotovoltaicas.",
        meterImpact: -25
      }
    ]
  },
  {
    id: "scen4",
    stageName: "4. Lidando com Objeção: “Isso é golpe?”",
    description: "O cliente gostou muito, mas desconfia da facilidade e pergunta se não é golpe.",
    customerDialogue: "Olha, gostei... mas isso não é golpe não? Como vocês dão desconto assim de graça?",
    choices: [
      {
        text: "“Não. É regulamentado pela ANEEL, você continua com a Cemig normal. Só recebe desconto. Temos inclusive a Lei nº 14.300/2022 que garante o marco legal.”",
        isCorrect: true,
        feedback: "Excelente! Usar a resposta padrão do treinamento citando a regulamentação ANEEL e a Lei nº 14.300/2022 gera autoridade e desmistifica na hora.",
        meterImpact: 25
      },
      {
        text: "Não é golpe não, juro! Se fosse golpe a polícia já teria fechado nosso stand aqui no centro comercial.",
        isCorrect: false,
        feedback: "Defesa fraca! Falar 'juro' ou citar polícia de forma reativa não transmite autoridade regulamentar legítima.",
        meterImpact: -20
      },
      {
        text: "É de graça porque o governo quer dar energia solar pra todo mundo agora.",
        isCorrect: false,
        feedback: "Incorreto e falso! Nunca use falsas promessas ou afirmações politizadas no stand.",
        meterImpact: -15
      }
    ]
  },
  {
    id: "scen5",
    stageName: "5. Chamada pra Ação (Fechamento)",
    description: "O cliente entendeu e está convencido de que é seguro. Chegou a hora de pedir a conta de energia para simular e fechar cadastro!",
    customerDialogue: "Ah, entendi! E o que eu preciso fazer para ver quanto eu ganho de desconto?",
    choices: [
      {
        text: "“Me manda uma conta rapidinho que já te mostro quanto você economiza.”",
        isCorrect: true,
        feedback: "Sensacional! Pedir a conta com naturalidade é a etapa de fechamento essencial. O processo no stand diz: Abordou -> Parou -> Engajou -> Explicou rápido -> Pegou conta (foto) -> Simulou na hora -> Fechou.",
        meterImpact: 25
      },
      {
        text: "Me passa o seu contato de WhatsApp que semana que vem eu te ligo para marcar uma visita na sua casa.",
        isCorrect: false,
        feedback: "Ruim. O treinamento de stand é claro: 'ERRO: Deixar cliente sair sem simulação. REGRA: não saiu simulação = perdeu cliente'. Faça na hora!",
        meterImpact: -20
      },
      {
        text: "Dá uma olhada no nosso site oficial em casa e faça o seu cadastro sozinho quando tiver tempo livre.",
        isCorrect: false,
        feedback: "Péssimo. Você perde o timing de fechamento. O cliente se distrai no dia a dia e nunca mais volta. Cadastre-o no stand!",
        meterImpact: -25
      }
    ]
  }
];

// Simple mock/placeholder stand checklist structure for support
export const standChecklist = [
  { item: "Postura Sempre de Pé", desc: "Sentar passa imagem de cansaço. Ficar de pé aumenta a conversão em mais de 70%." },
  { item: "Sem Celular para Uso Pessoal", desc: "Redes sociais afastam clientes. O smartphone ou tablet deve ser exclusivo para simulação." },
  { item: "Tabela de Metas à Vista", desc: "Lembre-se da meta diária: 100 abordados, 40 parados, 20 contas coletadas, 10 fechados." },
  { item: "Print de Contas Reais (Prova Social)", desc: "Impresse ou salve prints de contas com descontos reais aplicados da iGreen." },
  { item: "Filtro Ativo na Ponta da Língua", desc: "Saber perguntar: Quanto vem sua conta? É residencial ou empresa? Tá no seu nome? Quer economizar quanto?" }
];

/**
 * ─────────────────────────────────────────────────────────────
 *  CONTEÚDO DO CARTÃO DIGITAL — MIGUEL MELLO
 * ─────────────────────────────────────────────────────────────
 *  Todo o texto do site vive neste arquivo.
 *  Para atualizar o cartão, edite apenas aqui: as seções,
 *  os serviços e os contatos se ajustam sozinhos na página.
 *
 *  • Adicionar um serviço → inclua um item em `services.items`
 *    (o card mostra só o título; o texto completo abre no pop-up)
 *  • Remover um objetivo  → apague a linha em `about.goals`
 *  • Trocar telefone/@    → altere em `profile`
 */

export type ServiceIcon =
  | "idosos"
  | "musculoesqueletica"
  | "esportiva"
  | "cirurgia"
  | "recovery"
  | "prevencao"
  | "palmilhas";

export type Service = {
  icon: ServiceIcon;
  /** Título do card. */
  title: string;
  /** Frase curta que aparece no card. */
  summary: string;
  /** Texto completo, exibido no pop-up. */
  description: string;
};

/** Número no formato internacional, só dígitos (necessário para o wa.me). */
const WHATSAPP_E164 = "5534998883002";
const WHATSAPP_MESSAGE =
  "Olá, Miguel! Vi seu cartão digital e gostaria de agendar uma avaliação.";

export const site = {
  profile: {
    firstName: "Miguel",
    fullName: "Miguel Mello",
    role: "Fisioterapeuta",
    initials: "MM",
    /** Coloque a foto em /public com este nome para ela aparecer. */
    photo: "/miguel-mello.jpg",
    photoAlt: "Miguel Mello, fisioterapeuta",
    university: "Universidade Federal de Uberlândia (UFU)",
    universityShort: "UFU",
    location: "Atendimento domiciliar",
    specialties: ["Musculoesquelética", "Esportiva", "Reabilitação funcional"],
    whatsapp: {
      display: "(34) 99888-3002",
      href: `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE,
      )}`,
      tel: `+${WHATSAPP_E164}`,
    },
    instagram: {
      display: "@ft.miguelmello",
      href: "https://instagram.com/ft.miguelmello",
    },
  },

  hero: {
    badge: "Fisioterapia domiciliar",
    /** Título animado letra a letra. */
    title: "Miguel Mello",
    headline: "Fisioterapia personalizada no conforto da sua casa",
    /** Frases que se alternam sozinhas. */
    rotatingPrefix: "Para",
    rotatingWords: [
      "reduzir dores",
      "recuperar movimentos",
      "voltar ao esporte",
      "ganhar autonomia",
      "prevenir lesões",
    ],
    primaryCta: "Agendar avaliação",
    secondaryCta: "Serviços",
  },

  about: {
    eyebrow: "Sobre",
    title: "Quem vai cuidar de você",
    lead: "Cuidado individualizado para você recuperar seus movimentos, reduzir dores e voltar à sua rotina com segurança.",
    paragraphs: [
      "Fisioterapeuta formado pela Universidade Federal de Uberlândia (UFU), com atuação em fisioterapia musculoesquelética, esportiva e reabilitação funcional.",
      "Atendimentos domiciliares individualizados, planejados de acordo com as necessidades, limitações e objetivos de cada paciente.",
    ],
    goalsTitle: "Meu objetivo é ajudar você a:",
    goals: [
      "Reduzir dores e desconfortos",
      "Recuperar força, mobilidade e funcionalidade",
      "Retomar atividades físicas e esportivas",
      "Recuperar-se de cirurgias e lesões",
      "Prevenir novas lesões e limitações",
      "Melhorar sua qualidade de vida e independência",
    ],
  },

  services: {
    eyebrow: "Serviços",
    title: "Como posso te ajudar",
    /** Texto do botão dentro do pop-up. */
    dialogCta: "Falar sobre isso",
    items: [
      {
        icon: "idosos",
        title: "Fisioterapia para idosos",
        summary: "Funcionalidade, equilíbrio e independência",
        description:
          "Atendimento voltado à manutenção e recuperação da funcionalidade, força, equilíbrio e independência, contribuindo para uma rotina mais ativa e segura.",
      },
      {
        icon: "musculoesqueletica",
        title: "Fisioterapia musculoesquelética",
        summary: "Tratamento de dores e disfunções",
        description:
          "Tratamento de dores e disfunções relacionadas ao sistema musculoesquelético, com foco na recuperação do movimento e da função.",
      },
      {
        icon: "esportiva",
        title: "Fisioterapia esportiva",
        summary: "Da lesão ao retorno ao esporte",
        description:
          "Reabilitação e acompanhamento de atletas e praticantes de atividade física, desde o tratamento da lesão até o retorno seguro ao esporte.",
      },
      {
        icon: "cirurgia",
        title: "Reabilitação pré e pós-operatória",
        summary: "Preparação e recuperação cirúrgica",
        description:
          "Preparação para procedimentos cirúrgicos e recuperação no período pós-operatório, respeitando cada fase do processo de reabilitação.",
      },
      {
        icon: "recovery",
        title: "Recovery",
        summary: "Recuperação após treinos e competições",
        description:
          "Estratégias voltadas à recuperação física após treinos, competições e períodos de maior demanda, auxiliando na preparação para os próximos estímulos.",
      },
      {
        icon: "prevencao",
        title: "Prevenção de lesões",
        summary: "Força, mobilidade e controle",
        description:
          "Identificação de fatores que podem aumentar o risco de lesões e elaboração de estratégias para melhorar força, mobilidade, controle e capacidade física.",
      },
      {
        icon: "palmilhas",
        title: "Palmilhas individualizadas",
        summary: "Conforto e distribuição de cargas",
        description:
          "Avaliação das necessidades de cada paciente e confecção de palmilhas individualizadas, buscando melhorar a distribuição das cargas, o conforto e a funcionalidade durante as atividades do dia a dia e na prática esportiva.",
      },
    ] satisfies Service[],
  },

  cta: {
    eyebrow: "Contato",
    lead: "Seu tratamento começa com uma avaliação individualizada",
    title: "Agende sua avaliação",
    subtitle:
      "Dê o primeiro passo para cuidar da sua saúde e recuperar sua funcionalidade.",
  },

  footer: {
    signature: "Miguel Mello · Fisioterapeuta",
    credential: "Fisioterapia domiciliar · Uberlândia e região",
  },

  seo: {
    title: "Miguel Mello · Fisioterapeuta | Fisioterapia domiciliar",
    description:
      "Fisioterapia personalizada no conforto da sua casa. Atendimento domiciliar individualizado em fisioterapia musculoesquelética, esportiva e reabilitação funcional.",
    keywords: [
      "fisioterapia domiciliar",
      "fisioterapeuta Uberlândia",
      "fisioterapia esportiva",
      "reabilitação funcional",
      "palmilhas individualizadas",
      "Miguel Mello",
    ],
    url: "https://miguelmello.vercel.app",
  },
} as const;

export type Site = typeof site;

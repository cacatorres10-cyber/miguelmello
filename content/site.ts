/**
 * ─────────────────────────────────────────────────────────────
 *  CONTEÚDO DO CARTÃO DIGITAL — MIGUEL MELLO
 * ─────────────────────────────────────────────────────────────
 *  Todo o texto do site vive neste arquivo.
 *  Para atualizar o cartão, edite apenas aqui: as seções,
 *  os serviços e os contatos se ajustam sozinhos na página.
 *
 *  • Adicionar um serviço → inclua um item em `services`
 *  • Remover um objetivo  → apague a linha em `goals`
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
  title: string;
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
    specialties: [
      "Musculoesquelética",
      "Esportiva",
      "Reabilitação funcional",
    ],
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
    badge: "Atendimento domiciliar individualizado",
    /** Título animado letra a letra. */
    title: "Miguel Mello",
    headline: "Fisioterapia personalizada no conforto da sua casa",
    subheadline:
      "Cuidado individualizado para você recuperar seus movimentos, reduzir dores e voltar à sua rotina com segurança.",
    /** Frases que se alternam sozinhas abaixo do título. */
    rotatingPrefix: "Fisioterapia para",
    rotatingWords: [
      "reduzir dores",
      "recuperar movimentos",
      "voltar ao esporte",
      "ganhar autonomia",
      "prevenir lesões",
    ],
    primaryCta: "Agendar avaliação",
    secondaryCta: "Ver serviços",
  },

  about: {
    eyebrow: "Sobre",
    title: "Quem vai cuidar de você",
    paragraphs: [
      "Sou Miguel Mello, fisioterapeuta formado pela Universidade Federal de Uberlândia (UFU), com atuação em fisioterapia musculoesquelética, esportiva e reabilitação funcional.",
      "Realizo atendimentos domiciliares individualizados, planejados de acordo com as necessidades, limitações e objetivos de cada paciente.",
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
    subtitle:
      "Cada atendimento é planejado a partir da sua história, das suas limitações e dos seus objetivos.",
    items: [
      {
        icon: "idosos",
        title: "Fisioterapia para idosos",
        description:
          "Atendimento voltado à manutenção e recuperação da funcionalidade, força, equilíbrio e independência, contribuindo para uma rotina mais ativa e segura.",
      },
      {
        icon: "musculoesqueletica",
        title: "Fisioterapia musculoesquelética",
        description:
          "Tratamento de dores e disfunções relacionadas ao sistema musculoesquelético, com foco na recuperação do movimento e da função.",
      },
      {
        icon: "esportiva",
        title: "Fisioterapia esportiva",
        description:
          "Reabilitação e acompanhamento de atletas e praticantes de atividade física, desde o tratamento da lesão até o retorno seguro ao esporte.",
      },
      {
        icon: "cirurgia",
        title: "Reabilitação pré e pós-operatória",
        description:
          "Preparação para procedimentos cirúrgicos e recuperação no período pós-operatório, respeitando cada fase do processo de reabilitação.",
      },
      {
        icon: "recovery",
        title: "Recovery",
        description:
          "Estratégias voltadas à recuperação física após treinos, competições e períodos de maior demanda, auxiliando na preparação para os próximos estímulos.",
      },
      {
        icon: "prevencao",
        title: "Prevenção de lesões",
        description:
          "Identificação de fatores que podem aumentar o risco de lesões e elaboração de estratégias para melhorar força, mobilidade, controle e capacidade física.",
      },
      {
        icon: "palmilhas",
        title: "Palmilhas individualizadas",
        description:
          "Avaliação das necessidades de cada paciente e confecção de palmilhas individualizadas, buscando melhorar a distribuição das cargas, o conforto e a funcionalidade durante as atividades do dia a dia e na prática esportiva.",
      },
    ] satisfies Service[],
  },

  evaluation: {
    text: "Seu tratamento começa com uma avaliação individualizada",
  },

  cta: {
    eyebrow: "Contato",
    title: "Agende sua avaliação",
    subtitle:
      "Dê o primeiro passo para cuidar da sua saúde e recuperar sua funcionalidade.",
    note: "Entre em contato e agende seu atendimento.",
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

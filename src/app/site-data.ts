export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fernandasouzafisio.com.br";

export const whatsappNumber = "+5571991055981";
export const displayPhone = "(71) 99105-5981";

export const whatsappHref =
  "https://wa.me/5571991055981?text=Ol%C3%A1%2C%20Fernanda.%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20fisioterapia%20p%C3%A9lvica%20em%20Salvador.";

export const brand = {
  name: "Fernanda Souza",
  title: "Fisioterapeuta Pélvica",
  registry: "CREFITO 268256/BA",
  telephone: whatsappNumber,
  displayPhone,
  city: "Salvador",
  region: "BA",
  areaServed: "Salvador e região metropolitana",
  openingHours: "Mo-Fr 08:00-18:00",
  description:
    "Fisioterapia pélvica em Salvador para saúde íntima feminina e masculina, incontinência urinária, dor pélvica, gestação, pós-parto e oncologia pélvica.",
};

export const images = {
  logo: "/images/logo-primary.png",
  hero: "/images/fernanda-hero.jpg",
  about: "/images/fernanda-about.jpg",
  authority: "/images/fernanda-authority.jpg",
  laser: "/images/fernanda-laser.jpg",
  laserDetail: "/images/fernanda-laser-detail.jpg",
  cones: "/images/fernanda-cones.jpg",
  patient: "/images/fernanda-patient.jpg",
  attendance: "/images/fernanda-attendance.jpg",
  cta: "/images/fernanda-cta.jpg",
  pelvicModel: "/images/fernanda-pelvic-model.jpg",
};

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "FAQ", href: "#faq" },
];

export const specialties = [
  {
    title: "Uroginecologia",
    description:
      "Avaliação e reabilitação das disfunções do assoalho pélvico com condutas individualizadas.",
  },
  {
    title: "Incontinência Urinária",
    description:
      "Tratamento para perdas de urina aos esforços, urgência miccional e escapes no dia a dia.",
  },
  {
    title: "Dor Pélvica",
    description:
      "Cuidado para dores íntimas, desconfortos persistentes e limitações relacionadas à pelve.",
  },
  {
    title: "Gestação",
    description:
      "Preparação do corpo para a gravidez com mobilidade, consciência pélvica e segurança.",
  },
  {
    title: "Pós-Parto",
    description:
      "Recuperação funcional após o parto, respeitando tempo, sintomas e objetivos da paciente.",
  },
  {
    title: "Saúde Íntima Feminina",
    description:
      "Acolhimento para sexualidade, função íntima, autoconhecimento corporal e prevenção.",
  },
  {
    title: "Saúde Íntima Masculina",
    description:
      "Reabilitação pélvica masculina para sintomas urinários, dor e função sexual.",
  },
  {
    title: "Oncologia Pélvica",
    description:
      "Suporte fisioterapêutico para impactos funcionais antes, durante ou após tratamentos oncológicos.",
  },
];

export const differentials = [
  "Atendimento individualizado",
  "Privacidade e escuta qualificada",
  "Humanização em cada etapa",
  "Condutas baseadas em evidências científicas",
];

export const processSteps = [
  {
    title: "Avaliação cuidadosa",
    description:
      "Histórico, sintomas, rotina e objetivos são analisados para entender o que precisa mudar.",
  },
  {
    title: "Plano terapêutico",
    description:
      "As técnicas são escolhidas conforme necessidade clínica, conforto e evolução de cada pessoa.",
  },
  {
    title: "Acompanhamento",
    description:
      "A evolução é monitorada com ajustes progressivos para ganho de função, autonomia e confiança.",
  },
];

export const faqs = [
  {
    question: "O que faz a fisioterapia pélvica?",
    answer:
      "A fisioterapia pélvica avalia e trata alterações do assoalho pélvico, como incontinência urinária, dor pélvica, desconfortos íntimos, alterações no pós-parto e sintomas relacionados à saúde sexual e urinária.",
  },
  {
    question: "A fisioterapia pélvica atende homens e mulheres?",
    answer:
      "Sim. O atendimento pode beneficiar mulheres e homens, sempre com avaliação individual, privacidade e conduta adequada aos sintomas apresentados.",
  },
  {
    question: "Quando procurar uma fisioterapeuta pélvica?",
    answer:
      "Procure atendimento se houver perda de urina, dor na relação, dor pélvica, urgência urinária, preparo para gestação, recuperação pós-parto ou necessidade de suporte após tratamentos na região pélvica.",
  },
  {
    question: "O atendimento é constrangedor?",
    answer:
      "O cuidado é conduzido com explicação, consentimento, privacidade e respeito. Cada etapa é combinada com a paciente ou o paciente antes de ser realizada.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "O número de sessões varia conforme queixa, histórico, objetivos e resposta ao tratamento. A estimativa é feita após a avaliação inicial.",
  },
  {
    question: "A fisioterapia pélvica ajuda no pós-parto?",
    answer:
      "Sim. Ela pode auxiliar na recuperação da função pélvica, melhora de sintomas urinários, dor, cicatrizes, percepção corporal e retorno seguro às atividades.",
  },
];

export type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  hero: string;
  intro: string;
  focus: string[];
  image: string;
};

export const seoPages: SeoPage[] = [
  {
    slug: "fisioterapia-pelvica-salvador",
    title: "Fisioterapia Pélvica em Salvador",
    metaTitle: "Fisioterapia Pélvica em Salvador | Fernanda Souza",
    description:
      "Atendimento especializado em fisioterapia pélvica em Salvador para saúde íntima, incontinência, dor pélvica, gestação e pós-parto.",
    hero:
      "Cuidado especializado para recuperar função, segurança e qualidade de vida com acolhimento e método.",
    intro:
      "A fisioterapia pélvica em Salvador com Fernanda Souza é indicada para quem busca compreender sintomas íntimos, tratar disfunções do assoalho pélvico e viver com mais autonomia.",
    focus: [
      "Avaliação funcional do assoalho pélvico",
      "Plano terapêutico individualizado",
      "Tratamento para mulheres e homens",
      "Acompanhamento humanizado em Salvador",
    ],
    image: images.hero,
  },
  {
    slug: "uroginecologia-salvador",
    title: "Uroginecologia em Salvador",
    metaTitle: "Uroginecologia em Salvador | Fisioterapia Pélvica",
    description:
      "Fisioterapia em uroginecologia em Salvador para sintomas urinários, função pélvica e saúde íntima com atendimento individual.",
    hero:
      "Reabilitação uroginecológica com privacidade, precisão clínica e cuidado próximo.",
    intro:
      "Na uroginecologia, o atendimento fisioterapêutico investiga sintomas urinários e alterações pélvicas para construir uma conduta segura, respeitosa e eficaz.",
    focus: [
      "Urgência urinária e escapes",
      "Fortalecimento e coordenação pélvica",
      "Educação corporal e prevenção",
      "Rotina de exercícios orientada",
    ],
    image: images.authority,
  },
  {
    slug: "incontinencia-urinaria-salvador",
    title: "Tratamento para Incontinência Urinária em Salvador",
    metaTitle: "Incontinência Urinária em Salvador | Fernanda Souza",
    description:
      "Tratamento fisioterapêutico para incontinência urinária em Salvador, perdas ao tossir, correr, sorrir ou urgência para urinar.",
    hero:
      "Perda de urina não precisa ser normalizada. Existe cuidado especializado para isso.",
    intro:
      "A incontinência urinária pode afetar rotina, autoestima e liberdade. A fisioterapia pélvica atua na causa funcional do sintoma com avaliação e acompanhamento.",
    focus: [
      "Perda aos esforços",
      "Urgência miccional",
      "Treino muscular pélvico",
      "Estratégias para vida diária",
    ],
    image: images.cones,
  },
  {
    slug: "dor-pelvica-salvador",
    title: "Tratamento para Dor Pélvica em Salvador",
    metaTitle: "Dor Pélvica em Salvador | Fisioterapia Pélvica",
    description:
      "Fisioterapia para dor pélvica em Salvador, desconfortos íntimos, dor na relação e sintomas persistentes na região pélvica.",
    hero:
      "Um cuidado delicado e técnico para investigar dor, tensão e limitação na região pélvica.",
    intro:
      "A dor pélvica precisa de escuta, avaliação funcional e condutas progressivas. O tratamento busca reduzir sintomas e devolver confiança ao corpo.",
    focus: [
      "Dor na relação",
      "Tensão do assoalho pélvico",
      "Educação em dor",
      "Técnicas manuais e exercícios",
    ],
    image: images.laserDetail,
  },
  {
    slug: "fisioterapia-gestantes-salvador",
    title: "Fisioterapia para Gestantes em Salvador",
    metaTitle: "Fisioterapia para Gestantes em Salvador | Fernanda Souza",
    description:
      "Acompanhamento fisioterapêutico para gestantes em Salvador com preparo pélvico, orientação corporal e cuidado no pós-parto.",
    hero:
      "Preparação pélvica para uma gestação mais consciente, confortável e segura.",
    intro:
      "Durante a gestação, a fisioterapia pélvica ajuda a entender mudanças corporais, trabalhar mobilidade, respiração, percepção pélvica e preparo para o parto.",
    focus: [
      "Preparação do assoalho pélvico",
      "Mobilidade e respiração",
      "Orientações para parto",
      "Cuidados no pós-parto",
    ],
    image: images.about,
  },
  {
    slug: "saude-intima-feminina-salvador",
    title: "Saúde Íntima Feminina em Salvador",
    metaTitle: "Saúde Íntima Feminina em Salvador | Fisioterapia Pélvica",
    description:
      "Fisioterapia pélvica para saúde íntima feminina em Salvador com acolhimento, educação corporal e tratamento individualizado.",
    hero:
      "Um espaço seguro para falar sobre sintomas íntimos com clareza, respeito e ciência.",
    intro:
      "A saúde íntima feminina envolve função urinária, sexualidade, dor, pós-parto, autoestima e autonomia. O cuidado é feito sem julgamentos e com explicação clara.",
    focus: [
      "Autoconhecimento corporal",
      "Disfunções sexuais",
      "Dor e desconforto íntimo",
      "Prevenção e educação pélvica",
    ],
    image: images.pelvicModel,
  },
  {
    slug: "saude-intima-masculina-salvador",
    title: "Saúde Íntima Masculina em Salvador",
    metaTitle: "Saúde Íntima Masculina em Salvador | Fisioterapia Pélvica",
    description:
      "Fisioterapia pélvica para saúde íntima masculina em Salvador, sintomas urinários, dor pélvica e função sexual.",
    hero:
      "Cuidado pélvico masculino com discrição, orientação e foco em função.",
    intro:
      "Homens também podem apresentar alterações do assoalho pélvico. O atendimento fisioterapêutico trabalha sintomas urinários, dor e função íntima com privacidade.",
    focus: [
      "Sintomas urinários",
      "Dor pélvica masculina",
      "Consciência e coordenação muscular",
      "Plano terapêutico discreto",
    ],
    image: images.laser,
  },
];

export const imageUsage = [
  {
    original: "7.png",
    renamed: "logo-primary.png",
    usage: "Logo principal no header e footer",
  },
  {
    original: "de5e2bd4-43ae-4792-8f2e-9e22d27a02df.jpg",
    renamed: "fernanda-hero.jpg",
    usage: "Hero principal e Open Graph",
  },
  {
    original: "3b3ae1f5-0222-412b-b44a-ec445621d006.jpg",
    renamed: "fernanda-about.jpg",
    usage: "Seção Sobre Fernanda e página de gestantes",
  },
  {
    original: "9287c311-5e08-4c31-b78b-315ee4267295.jpg",
    renamed: "fernanda-authority.jpg",
    usage: "Autoridade clínica e página de uroginecologia",
  },
  {
    original: "c6782724-93d6-43a7-8f98-ed634aee54fe.jpg",
    renamed: "fernanda-laser.jpg",
    usage: "Diferenciais, tecnologia e página de saúde íntima masculina",
  },
  {
    original: "f550f86b-6997-477d-9d53-de706ff0ed6b.jpg",
    renamed: "fernanda-cones.jpg",
    usage: "Recursos terapêuticos e página de incontinência urinária",
  },
  {
    original: "0aab9a6c-b93a-431f-bd69-1b40fd53521f.jpg",
    renamed: "fernanda-laser-detail.jpg",
    usage: "Detalhe técnico e página de dor pélvica",
  },
  {
    original: "7a422b00-32c5-437b-b552-83adade8c4d5.jpg",
    renamed: "fernanda-patient.jpg",
    usage: "Atendimento humanizado com paciente",
  },
  {
    original: "022f22e3-0c42-4452-9410-7f3141d9b203.jpg",
    renamed: "fernanda-attendance.jpg",
    usage: "Atendimento e movimento terapêutico",
  },
  {
    original: "428d143b-e5da-4702-9718-0bd355774569.jpg",
    renamed: "fernanda-cta.jpg",
    usage: "CTA final e página de apoio",
  },
  {
    original: "63037b1d-8a5c-4821-b30a-a57f90ffa9d4.jpg",
    renamed: "fernanda-pelvic-model.jpg",
    usage: "Página de saúde íntima feminina",
  },
];

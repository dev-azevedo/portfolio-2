/**
 * Source of truth for the message shape. `en.ts` is typed against this, so a
 * missing key there is a build error rather than a raw key shipped to users.
 *
 * Only UI chrome lives here. Item-shaped prose (skills, projects, roles) lives
 * in `src/data/*` as `Localized` values, next to the data it describes.
 *
 * Casing note: pt-BR headings use sentence case. Title Case is an English
 * convention and reads as a bad localisation in Portuguese.
 */
const ptBR = {
  meta: {
    description:
      'Jhonatan Azevedo, Coordenador de Desenvolvimento e desenvolvedor full-stack. APIs em Python, Go e .NET, microserviços e arquitetura orientada a eventos.',
    ogImageAlt: 'Jhonatan Azevedo — Coordenador de Desenvolvimento',
    notFoundTitle: 'Página não encontrada',
    notFoundBody: 'Essa fase não existe. Volte para o início e tente de novo.',
    notFoundCta: 'Voltar ao início',
  },

  nav: {
    primary: 'Navegação principal',
    open: 'Abrir menu',
    close: 'Fechar menu',
    homeLabel: 'Jhonatan Azevedo, início da página',
    items: {
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      about: 'Sobre',
      contact: 'Contato',
    },
  },

  hero: {
    eyebrow: 'Desenvolvedor · desde 2021',
    deck: 'De estagiário a coordenador de desenvolvimento em cinco anos, três deles em liderança técnica, e continuo entregando código em produção.',
    stack: 'APIs em Python, Go e .NET · DDD, microserviços e arquitetura orientada a eventos',
    portraitAlt: 'Jhonatan Azevedo',
    ctaPrimary: 'Ver trajetória',
    ctaSecondary: 'Falar comigo',
  },

  career: {
    label: 'Trajetória',
    a11yLabel: 'Trajetória de carreira, do primeiro cargo ao atual',
  },

  experience: {
    heading: 'Experiência',
    deck: 'De estagiário a coordenador de desenvolvimento em 5 anos, três deles liderando time, com o que entreguei em cada cargo.',
    present: 'Atual',
    currentBadge: 'Cargo atual',
  },

  projects: {
    heading: 'Projetos',
    deck: 'O que eu construí, do banco de dados ao deploy.',
    viewLive: 'Ver projeto',
    viewCode: 'Ver código',
    moreTitle: 'Ver mais no GitHub',
    moreBody: 'Experimentos, estudos e código do dia a dia.',
    stackLabel: 'Tecnologias usadas',
    openGallery: 'Ver telas',
    galleryLabel: 'Telas do projeto',
    screenOf: 'Tela {n} de {total}',
    close: 'Fechar',
    prev: 'Tela anterior',
    next: 'Próxima tela',
  },

  skills: {
    heading: 'Habilidades',
    deck: 'O que eu uso no dia a dia, agrupado por camada.',
    also: 'Também: DDD, Clean Architecture, SOLID e CQRS, metodologias ágeis (Scrum e Kanban), modelagem de dados e integração de sistemas.',
    groups: {
      languages: 'Linguagens',
      backend: 'Back-end',
      frontend: 'Front-end',
      data: 'Dados',
      infra: 'Infraestrutura',
    },
    groupDecks: {
      languages:
        'Python e Go no que é novo, C# no que sustenta o legado, JavaScript e TypeScript no front.',
      backend: 'APIs em FastAPI, Flask e Django, .NET com DDD, Go com Gin e Node.js com Express.',
      frontend: 'Interfaces em Vue e React, web e mobile, com Tailwind e Bootstrap.',
      data: 'Modelagem e consultas em PostgreSQL, SQL Server e MySQL; MongoDB quando o dado não é relacional.',
      infra: 'Serviços em Docker, mensageria com RabbitMQ e versionamento em Git.',
    },
  },

  about: {
    heading: 'Sobre',
    body: [
      'Comecei em 2021 como estagiário e hoje coordeno o time de desenvolvimento. No caminho passei por júnior, pleno, tech lead e gestor de tecnologia. São cinco anos de carreira, três deles em posições de liderança.',
      'Construo APIs e integrações para plataformas de cálculo tributário e aplicações financeiras: Python com FastAPI, Flask e Django, .NET com DDD e Entity Framework Core, Go com Gin e Node.js com Express. Ultimamente o foco é microserviços orientados a eventos, com RabbitMQ para mensageria e Docker para orquestrar os serviços.',
      'Liderar, para mim, é definir arquitetura e padrões, revisar código e fazer mentoria de júnior a sênior, e ser o ponto de contato entre tecnologia, produto e negócio, traduzindo requisito em solução técnica.',
    ],
    facts: {
      tenureLabel: 'Experiência',
      tenureValue: '5 anos',
      pathLabel: 'Trajetória',
      pathValue: 'Estágio → coordenação',
      leadershipLabel: 'Liderança',
      leadershipValue: '3 anos: Tech Lead, Gestor de Tecnologia e Coordenação',
      degreeLabel: 'Graduação',
      degreeValue: 'Análise e Desenvolvimento de Sistemas, UNINTER, 2021',
      postgradLabel: 'Pós-graduação',
      postgradValue: 'Ciência de Dados e Inteligência Artificial, UNINTER, em andamento',
      ageLabel: 'Idade',
      ageValue: '27 anos',
    },
  },

  contact: {
    heading: 'Como entrar em contato?',
  },

  theme: {
    toDark: 'Ativar tema escuro',
    toLight: 'Ativar tema claro',
    system: 'Usar o tema do sistema',
  },

  lang: {
    group: 'Idioma do site',
  },

  a11y: {
    skip: 'Pular para o conteúdo',
    newTab: '(abre em nova aba)',
  },

  mode: {
    group: 'Estilo visual',
    bit: 'Visual 8-bit, estilo games antigos',
    hd: 'Visual moderno em alta definição',
  },

  sound: {
    on: 'Ligar efeitos sonoros',
    off: 'Desligar efeitos sonoros',
  },

  /**
   * Game-flavoured chrome. Shown only in 8-BIT mode; the 4K skin reuses the
   * plain headings above. Uppercase is the genre's convention.
   */
  game: {
    player: 'JOGADOR 1',
    pressStart: 'APERTE START',
    level: 'NV',
    stage: 'FASE',
    stages: {
      experience: 'Mapa da carreira',
      projects: 'Selecione o cartucho',
      skills: 'Inventário',
      about: 'Ficha do personagem',
      contact: 'Continuar?',
    },
    hiScore: 'RECORDE',
    exp: 'EXP',
    slot: 'SLOT',
    insert: 'INSERIR',
    yes: 'SIM',
    clear: 'FASE CONCLUÍDA',
    current: 'VOCÊ ESTÁ AQUI',
    credits: 'CRÉDITOS',
  },

  footer: {
    builtBy: 'Desenvolvido por Jhonatan Azevedo',
    links: 'Redes e contato',
  },
}

export default ptBR

import logoTributoJusto from '@/assets/images/logo-tributojusto.webp'

import type { ExperienceItem } from '@/types/content'

/**
 * `roles` is the point of this file. The old section rendered a single block
 * marked "2021 - Atual", which hid a seven-step progression — the strongest
 * thing on the site. Hero.astro reads `experience[0].roles[0].title`, so the
 * hero subtitle and the timeline cannot drift apart.
 *
 * Every role carries its own `bullets`. A company-level summary used to stand
 * in for all seven, which meant six of them shipped as a bare title and a date
 * — the progression was asserted but never evidenced.
 *
 * Dates are ISO `YYYY-MM` and formatted for display with Intl.
 */
export const experience: ExperienceItem[] = [
  // Kept first: Hero.astro reads `experience[0].roles[0]` for the subtitle.
  {
    id: 'tributo-justo',
    company: 'Tributo Justo',
    kind: 'employment',
    url: 'https://tributojusto.com.br',
    logo: logoTributoJusto,
    startDate: '2021-02',
    endDate: null,
    companyTagline: {
      'pt-BR': 'Recuperação de crédito tributário · Curitiba, PR',
      en: 'Tax credit recovery · Curitiba, Brazil',
    },
    // Newest first.
    roles: [
      {
        title: { 'pt-BR': 'Coordenador de Desenvolvimento', en: 'Development Coordinator' },
        startDate: '2025-07',
        endDate: null,
        bullets: {
          'pt-BR': [
            'Coordeno o time de desenvolvimento e respondo pela arquitetura das aplicações, pelos padrões de engenharia e pela qualidade das entregas, sem sair do código.',
            'Defino a arquitetura de APIs em .NET (ASP.NET Core com DDD e Clean Architecture) e de microserviços em Python (FastAPI) e Go.',
            'Estruturo a comunicação entre serviços com RabbitMQ e arquitetura orientada a eventos, com foco em desacoplamento e escalabilidade.',
            'Conduzo code review, mentoria técnica e cerimônias ágeis (Scrum e Kanban), priorizando o backlog técnico junto de produto e negócio.',
          ],
          en: [
            'I coordinate the development team and own the application architecture, the engineering standards and the quality of what we ship, without stepping away from the code.',
            'I define the architecture of .NET APIs (ASP.NET Core with DDD and Clean Architecture) and of microservices in Python (FastAPI) and Go.',
            'I structure service-to-service communication with RabbitMQ and event-driven architecture, aiming for decoupling and scalability.',
            'I run code review, technical mentoring and agile ceremonies (Scrum and Kanban), prioritising the technical backlog alongside product and business.',
          ],
        },
      },
      {
        title: { 'pt-BR': 'Desenvolvedor Especialista', en: 'Specialist Developer' },
        startDate: '2025-03',
        endDate: '2025-07',
        bullets: {
          'pt-BR': [
            'Responsável por um dos principais sistemas da empresa, definindo a arquitetura orientada a eventos da solução, construída em .NET, Python e Vue.',
            'Desenhei e implementei as APIs críticas: ASP.NET Core com DDD e Entity Framework Core, FastAPI com Pydantic e programação assíncrona.',
            'Implementei serviços orientados a eventos com RabbitMQ, reduzindo o acoplamento entre módulos e viabilizando processamento assíncrono de alto volume.',
            'Padronizei a containerização com Docker e Docker Compose nos ambientes de desenvolvimento e homologação.',
          ],
          en: [
            'I owned one of the company’s core systems, defining the event-driven architecture of a solution built in .NET, Python and Vue.',
            'I designed and implemented the critical APIs: ASP.NET Core with DDD and Entity Framework Core, FastAPI with Pydantic and async programming.',
            'I built event-driven services with RabbitMQ, cutting coupling between modules and making high-volume asynchronous processing viable.',
            'I standardised containerisation with Docker and Docker Compose across the development and staging environments.',
          ],
        },
      },
      {
        title: { 'pt-BR': 'Gestor de Tecnologia', en: 'Technology Manager' },
        startDate: '2024-03',
        endDate: '2025-03',
        bullets: {
          'pt-BR': [
            'Respondi pela gestão de projetos e squads de desenvolvimento: escopo técnico, prazos, alocação e indicadores de entrega.',
            'Fiz a gestão direta de analistas de sistemas: prioridades, acompanhamento de entregas e desenvolvimento profissional do time.',
            'Implantei processos de versionamento, code review e documentação, aumentando a previsibilidade e a qualidade das entregas.',
            'Conduzi processos de contratação e onboarding técnico de desenvolvedores.',
          ],
          en: [
            'I ran project and squad management: technical scope, deadlines, staffing and delivery metrics.',
            'I directly managed systems analysts: priorities, delivery follow-up and the team’s professional growth.',
            'I put version control, code review and documentation processes in place, raising both predictability and quality.',
            'I led developer hiring and technical onboarding.',
          ],
        },
      },
      {
        title: { 'pt-BR': 'Tech Lead', en: 'Tech Lead' },
        startDate: '2023-08',
        endDate: '2024-03',
        bullets: {
          'pt-BR': [
            'Liderei tecnicamente o time de back-end: arquitetura de APIs, padrões de projeto e decisões de stack em .NET e Python.',
            'Conduzi code reviews e mentoria de desenvolvedores júnior e pleno, elevando o nível técnico do time.',
            'Traduzi requisitos de negócio em soluções técnicas e quebrei iniciativas grandes em entregas incrementais.',
          ],
          en: [
            'I led the back-end team technically: API architecture, design patterns and stack decisions in .NET and Python.',
            'I ran code reviews and mentored junior and mid-level developers, raising the team’s technical level.',
            'I translated business requirements into technical solutions and broke large initiatives into incremental deliveries.',
          ],
        },
      },
      {
        title: { 'pt-BR': 'Desenvolvedor Pleno', en: 'Mid-level Developer' },
        startDate: '2022-08',
        endDate: '2023-08',
        bullets: {
          'pt-BR': [
            'Desenvolvi e mantive APIs REST e sistemas web em C#/.NET (MVC e Web API) e Python (Django e Flask) para plataformas de cálculo tributário e aplicações financeiras.',
            'Implementei integrações com sistemas de terceiros e rotinas de sincronização e tratamento de dados.',
            'Participei do desenvolvimento de um aplicativo mobile, atuando na API em Node.js e na interface em React Native.',
            'Construí o front-end das aplicações em Vue e React.',
          ],
          en: [
            'I built and maintained REST APIs and web systems in C#/.NET (MVC and Web API) and Python (Django and Flask) for tax calculation platforms and financial applications.',
            'I implemented third-party integrations and data synchronisation and processing routines.',
            'I worked on a mobile app, on both the Node.js API and the React Native interface.',
            'I built the applications’ front-end in Vue and React.',
          ],
        },
      },
      {
        title: { 'pt-BR': 'Desenvolvedor Júnior', en: 'Junior Developer' },
        startDate: '2021-05',
        endDate: '2022-08',
        bullets: {
          'pt-BR': [
            'Desenvolvi funcionalidades back-end e front-end em sistemas administrativos e financeiros.',
            'Atuei em correção de bugs e melhorias de performance.',
            'Fiz modelagem e consultas em SQL Server, PostgreSQL e MySQL.',
          ],
          en: [
            'I developed back-end and front-end features for administrative and financial systems.',
            'I worked on bug fixing and performance improvements.',
            'I handled data modelling and queries in SQL Server, PostgreSQL and MySQL.',
          ],
        },
      },
      {
        title: { 'pt-BR': 'Estagiário', en: 'Intern' },
        startDate: '2021-02',
        endDate: '2021-05',
        bullets: {
          'pt-BR': [
            'Apoiei o time no desenvolvimento de novas funcionalidades e na manutenção dos sistemas web.',
          ],
          en: ['I supported the team on new features and on maintaining the web systems.'],
        },
      },
    ],
  },
  {
    id: 'client-projects',
    company: 'Projetos para clientes',
    kind: 'freelance',
    companyLabel: { 'pt-BR': 'Projetos para clientes', en: 'Client projects' },
    startDate: '2021-01',
    endDate: null,
    companyTagline: {
      'pt-BR': 'Trabalhos autônomos, em paralelo ao emprego',
      en: 'Freelance work, alongside full-time employment',
    },
    roles: [
      {
        title: { 'pt-BR': 'Desenvolvedor Freelancer', en: 'Freelance Developer' },
        startDate: '2021-01',
        endDate: null,
        bullets: {
          'pt-BR': [
            'Desenvolvi landing pages e sites institucionais para clientes, do layout responsivo à publicação.',
            'Construí um sistema de gerenciamento interno de processos (cadastro, acompanhamento e distribuição de demandas entre times), do banco de dados ao front-end.',
            'Atendi o ciclo completo de cada projeto: levantamento de requisitos com o cliente, desenvolvimento, deploy e manutenção.',
          ],
          en: [
            'I built landing pages and company websites for clients, from responsive layout to publishing.',
            'I built an internal process management system (intake, tracking and assignment of work across teams), from the database to the front-end.',
            'I handled the full cycle of each project: requirements with the client, development, deployment and maintenance.',
          ],
        },
      },
    ],
  },
]

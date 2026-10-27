import adotevlAdotantesKanbanJpg from '@/assets/images/project-adotevl-adotantes-kanban.jpg'
import adotevlAgendaJpg from '@/assets/images/project-adotevl-agenda.jpg'
import adotevlEstoqueJpg from '@/assets/images/project-adotevl-estoque.jpg'
import adotevlFichaJpg from '@/assets/images/project-adotevl-ficha.jpg'
import adotevlFinanceiroJpg from '@/assets/images/project-adotevl-financeiro.jpg'
import adotevlKanbanLightJpg from '@/assets/images/project-adotevl-kanban-light.jpg'
import adotevlMarketingJpg from '@/assets/images/project-adotevl-marketing.jpg'
import adotevlMobileJpg from '@/assets/images/project-adotevl-mobile.jpg'
import adotevlPetsJpg from '@/assets/images/project-adotevl-pets.jpg'
import salesCrudClientesJpg from '@/assets/images/project-salescrud-clientes.jpg'
import salesCrudDashboardJpg from '@/assets/images/project-salescrud-dashboard.jpg'
import salesCrudFormularioJpg from '@/assets/images/project-salescrud-formulario.jpg'
import salesCrudJpg from '@/assets/images/project-salescrud.jpg'
import salesCrudMobileJpg from '@/assets/images/project-salescrud-mobile.jpg'
import salesCrudModalJpg from '@/assets/images/project-salescrud-modal.jpg'
import salesCrudVendasJpg from '@/assets/images/project-salescrud-vendas.jpg'
import standbyDashboardJpg from '@/assets/images/project-standby-dashboard.jpg'
import standbyDashboardLightJpg from '@/assets/images/project-standby-dashboard-light.jpg'
import standbyFuncionariosJpg from '@/assets/images/project-standby-funcionarios.jpg'
import standbyMobileJpg from '@/assets/images/project-standby-mobile.jpg'
import standbyModalJpg from '@/assets/images/project-standby-modal.jpg'
import standbyPontoJpg from '@/assets/images/project-standby-ponto.jpg'
import standbyRelatoriosJpg from '@/assets/images/project-standby-relatorios.jpg'

import type { Project } from '@/types/content'

/**
 * Newest first. The grid is driven by this array, so it lays out correctly at
 * any length.
 */
export const projects: Project[] = [
  {
    id: 'adotevl',
    title: 'AdoteVL',
    year: 2026,
    status: 'live',
    liveUrl: 'https://adoteapp.netlify.app',
    stack: ['react', 'typescript', 'tailwind', 'nestjs', 'postgresql'],
    role: { 'pt-BR': 'Full-stack', en: 'Full-stack' },
    summary: {
      'pt-BR':
        'Sistema de gestão da Associação Adote um Vira-Lata: pets, adoções com kanban e ficha online, agenda, estoque, marketing, voluntários e financeiro. Desenvolvi front-end (React) e back-end (NestJS, PostgreSQL), com autenticação JWT, notificações em tempo real e PWA instalável.',
      en: 'Management system for the Adote um Vira-Lata shelter: pets, adoptions with a kanban board and online application form, schedule, inventory, marketing, volunteers and finances. I built both the front-end (React) and the back-end (NestJS, PostgreSQL), with JWT authentication, real-time notifications and an installable PWA.',
    },
    gallery: [
      {
        src: adotevlAdotantesKanbanJpg,
        alt: {
          'pt-BR':
            'Kanban de adotantes do AdoteVL em tema escuro, com colunas Pendente, Aprovado, Aguardando assinatura, Concluída e Reprovado',
          en: 'AdoteVL adopters kanban in dark theme, with Pending, Approved, Awaiting signature, Completed and Rejected columns',
        },
      },
      {
        src: adotevlPetsJpg,
        alt: {
          'pt-BR':
            'Tela de Pets do AdoteVL, com cards de cada animal mostrando status de adoção, porte, peso e castração',
          en: 'AdoteVL Pets screen, with a card per animal showing adoption status, size, weight and neutering',
        },
      },
      {
        src: adotevlAgendaJpg,
        alt: {
          'pt-BR': 'Agenda mensal do AdoteVL, com os turnos de voluntários marcados no calendário',
          en: 'AdoteVL monthly schedule, with volunteer shifts on the calendar',
        },
      },
      {
        src: adotevlFichaJpg,
        alt: {
          'pt-BR':
            'Ficha de adoção pública do AdoteVL, formulário em 7 etapas com o pet escolhido em destaque',
          en: 'AdoteVL public adoption form, a 7-step form with the chosen pet highlighted',
        },
      },
      {
        src: adotevlEstoqueJpg,
        alt: {
          'pt-BR':
            'Tela de Estoque do AdoteVL, tabela de produtos com tipo, quantidade e vencimento',
          en: 'AdoteVL Inventory screen, a product table with type, quantity and expiry date',
        },
      },
      {
        src: adotevlMarketingJpg,
        alt: {
          'pt-BR':
            'Quadro de Marketing do AdoteVL, com cards de conteúdo por rede social em colunas de produção',
          en: 'AdoteVL Marketing board, with content cards per social network in production columns',
        },
      },
      {
        src: adotevlFinanceiroJpg,
        alt: {
          'pt-BR':
            'Tela Financeiro do AdoteVL, com saldo, totais de entradas e saídas e tabela de lançamentos',
          en: 'AdoteVL Finances screen, with balance, income and expense totals and a transactions table',
        },
      },
      {
        src: adotevlKanbanLightJpg,
        alt: {
          'pt-BR': 'Kanban de adotantes do AdoteVL em tema claro',
          en: 'AdoteVL adopters kanban in light theme',
        },
      },
      {
        src: adotevlMobileJpg,
        alt: {
          'pt-BR': 'Três telas do AdoteVL no celular: pets, agenda e menu lateral',
          en: 'Three AdoteVL mobile screens: pets, schedule and side menu',
        },
      },
    ],
  },
  {
    id: 'standby-banco-horas',
    title: 'Banco de Horas',
    year: 2026,
    status: 'live',
    stack: ['react', 'typescript', 'tailwind', 'csharp', 'dotnet'],
    role: { 'pt-BR': 'Full-stack', en: 'Full-stack' },
    summary: {
      'pt-BR':
        'Gestão de horas extras para a Standby Marcenaria: funcionários, chaves PIX, contratos/obras, competências semanais com lançamento de ponto, resumos de pagamento e relatórios com exportação para XLSX. Interface em React e API em .NET.',
      en: 'Overtime management for the Standby Marcenaria woodworking shop: employees, PIX keys, contracts/projects, weekly pay periods with timesheet entry, payment summaries and reports with XLSX export. React interface and .NET API.',
    },
    // Internal system, no public URL. Employee names, CPFs and PIX keys are
    // blurred in the sources; never regenerate them from the raw captures.
    gallery: [
      {
        src: standbyMobileJpg,
        alt: {
          'pt-BR':
            'Três telas do Banco de Horas no celular, em tema claro: login, menu lateral e dashboard',
          en: 'Three Banco de Horas mobile screens in light theme: login, side menu and dashboard',
        },
      },
      {
        src: standbyDashboardJpg,
        alt: {
          'pt-BR':
            'Dashboard do Banco de Horas em tema escuro, com totais de funcionários, obras e competências e atalhos de cadastro',
          en: 'Banco de Horas dashboard in dark theme, with employee, project and pay-period totals and quick-add shortcuts',
        },
      },
      {
        src: standbyPontoJpg,
        alt: {
          'pt-BR':
            'Tela de ponto de uma competência semanal, com horários, horas normais e extras e total por funcionário (dados pessoais borrados)',
          en: 'Weekly pay-period timesheet screen, with shifts, regular and overtime hours and per-employee totals (personal data blurred)',
        },
      },
      {
        src: standbyRelatoriosJpg,
        alt: {
          'pt-BR':
            'Tela de relatórios com filtros por período, obra e funcionário, totais do período, composição do custo e quebra por obra',
          en: 'Reports screen with period, project and employee filters, period totals, cost breakdown and per-project split',
        },
      },
      {
        src: standbyFuncionariosJpg,
        alt: {
          'pt-BR':
            'Cadastro de funcionários com CPF, admissão, salário e acesso às chaves PIX (dados pessoais borrados)',
          en: 'Employee registry with tax ID, hire date, salary and PIX key access (personal data blurred)',
        },
      },
      {
        src: standbyModalJpg,
        alt: {
          'pt-BR':
            'Modal de lançamento de ponto, com blocos de entrada e saída, viagem e rateio por obra',
          en: 'Timesheet entry modal, with clock-in/out blocks, travel time and per-project cost split',
        },
      },
      {
        src: standbyDashboardLightJpg,
        alt: {
          'pt-BR': 'Dashboard do Banco de Horas em tema claro',
          en: 'Banco de Horas dashboard in light theme',
        },
      },
    ],
  },
  {
    id: 'salescrud',
    title: 'SalesCRUD',
    year: 2024,
    status: 'live',
    liveUrl: 'https://salescrud.netlify.app',
    stack: ['vue', 'typescript', 'csharp', 'dotnet', 'aspnet', 'tailwind'],
    summary: {
      'pt-BR':
        'Gestão de vendas com CRUD completo, autenticação por token e painel administrativo: API em .NET e interface em Vue com TypeScript.',
      en: 'Sales management with full CRUD, token authentication and an admin dashboard: a .NET API and a Vue interface in TypeScript.',
    },
    role: { 'pt-BR': 'Full-stack', en: 'Full-stack' },
    // Login stays first: it is the card cover. Data is demo-only (Mockaroo
    // names and prices), so nothing is blurred.
    gallery: [
      {
        src: salesCrudJpg,
        alt: {
          'pt-BR': 'Tela de login do SalesCRUD, com campos de e-mail e senha',
          en: 'SalesCRUD login screen, with email and password fields',
        },
      },
      {
        src: salesCrudDashboardJpg,
        alt: {
          'pt-BR':
            'Dashboard do SalesCRUD, com cards de total de produtos, clientes, vendas e produto mais vendido',
          en: 'SalesCRUD dashboard, with cards for total products, customers, sales and best-selling product',
        },
      },
      {
        src: salesCrudVendasJpg,
        alt: {
          'pt-BR':
            'Tela de Vendas do SalesCRUD, com busca e cards de venda mostrando cliente, produto, quantidade e total',
          en: 'SalesCRUD Sales screen, with search and sale cards showing customer, product, quantity and total',
        },
      },
      {
        src: salesCrudFormularioJpg,
        alt: {
          'pt-BR':
            'Formulário de edição de venda do SalesCRUD, com cliente, produto, valor, quantidade e total calculado',
          en: 'SalesCRUD sale edit form, with customer, product, unit price, quantity and calculated total',
        },
      },
      {
        src: salesCrudModalJpg,
        alt: {
          'pt-BR': 'Modal de confirmação de exclusão de venda do SalesCRUD',
          en: 'SalesCRUD delete-sale confirmation modal',
        },
      },
      {
        src: salesCrudClientesJpg,
        alt: {
          'pt-BR':
            'Tela de Clientes do SalesCRUD, com cards de clientes fictícios e ações de venda, edição e exclusão',
          en: 'SalesCRUD Customers screen, with cards of fictitious customers and sell, edit and delete actions',
        },
      },
      {
        src: salesCrudMobileJpg,
        alt: {
          'pt-BR': 'Três telas do SalesCRUD no celular: login, menu lateral e vendas',
          en: 'Three SalesCRUD mobile screens: login, side menu and sales',
        },
      },
    ],
  },
]

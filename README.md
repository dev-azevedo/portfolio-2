# Portfolio — Jhonatan Azevedo

Portfolio pessoal feito com [Astro](https://astro.build), com dois visuais para o mesmo conteúdo:

- **8-BIT** (padrão): estética de games antigos, com fontes de pixel, scanlines de CRT, imagens pixeladas de verdade e efeitos sonoros opcionais.
- **4K**: visual moderno em alta definição, com tema claro e escuro.

Os botões **8-BIT** e **4K** no topo trocam o visual na hora, com transição animada. A escolha fica salva no navegador.

Produção: <https://dev-azevedo.netlify.app>

## Começando

Requer Node 22 (veja `.nvmrc`).

```sh
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:4321
npm run build     # astro check + build estático em dist/
npm run preview   # serve o build localmente
npm run check     # só a checagem de tipos
```

## Stack

| Área | Ferramenta |
| --- | --- |
| Framework | Astro 7, saída estática, TypeScript strict |
| Estilo | Tailwind CSS v4 (CSS-first) + CSS com escopo por componente |
| Fontes | `@fontsource`: Press Start 2P e VT323 (8-BIT); Bricolage Grotesque, Instrument Sans e JetBrains Mono (4K) |
| Ícones | `@iconify-json/simple-icons` e `@iconify-json/lucide`, renderizados no build por `src/components/Icon.astro` |
| Imagens | `astro:assets` (gera AVIF/WebP e tamanhos responsivos) |
| SEO | `@astrojs/sitemap`, meta OG/Twitter, JSON-LD |
| Deploy | Netlify (`netlify.toml`) |

Não há framework de UI no cliente. O JavaScript são alguns scripts pequenos em `src/scripts/` e dentro das seções.

## Estrutura

```
src/
  assets/images/     retrato, logo e screenshots dos projetos (fontes para astro:assets)
  components/        Header, ModeSwitch, Toggles, ProjectCard, TechChip, Icon, ...
  data/              conteúdo: experience, projects, skills, socials, navigation, seo
  i18n/              textos da interface em pt-BR.ts e en.ts
  layouts/           Base (head, SEO, script pré-paint) e Page (monta as seções)
  pages/             index.astro (pt-BR), en/index.astro, 404.astro
  scripts/           app.ts (modo, tema, som, reveal, scroll-spy, menu) e sound.ts
  sections/          Hero, Experience, Projects, Skills, About, Contact
  styles/global.css  tokens dos dois modos e primitivas compartilhadas
```

## Como os dois modos funcionam

Existe uma única marcação. O modo é o atributo `data-mode="8bit" | "4k"` no `<html>`, e o tema do 4K é `data-theme="light" | "dark"`.

- **Tokens:** `src/styles/global.css` define tokens semânticos (`--bg`, `--fg`, `--accent`, `--font-display`, `--radius`, `--ease`...) e cada modo os redefine. Os componentes só leem os tokens.
- **Elementos exclusivos:** use as classes `.only-8bit` e `.only-4k` para algo que existe em um modo só (por exemplo, o "APERTE START" ou o botão de som).
- **Estilo por modo dentro de um componente:** use `:global([data-mode='8bit']) .minha-classe { ... }`.
- **Sem flash:** um script inline em `Base.astro` aplica modo, tema e som salvos antes da primeira pintura.
- **Link direto para um modo:** `?mode=4k` ou `?mode=8bit` na URL abre naquele modo e salva a escolha.
- **Transição:** usa a View Transitions API. Entrando no 8-BIT, a tela é redesenhada em degraus de cima para baixo; entrando no 4K, abre em círculo a partir do botão clicado. Com `prefers-reduced-motion`, a troca é instantânea.
- **Som:** `src/scripts/sound.ts` gera bleeps de onda quadrada via WebAudio, sem arquivos de áudio. Vem desligado, toca só no modo 8-BIT e só depois que o visitante liga.

## Editando o conteúdo

Todo o texto fica em arquivos tipados. Uma tradução faltando vira erro no `npm run build`.

| O quê | Onde |
| --- | --- |
| Cargos e experiência | `src/data/experience.ts` (o mais recente primeiro; o hero lê o cargo atual daqui) |
| Projetos e screenshots | `src/data/projects.ts` (a primeira imagem é a capa do card) |
| Habilidades | `src/data/skills.ts` |
| Redes e e-mail | `src/data/socials.ts` |
| Textos da interface | `src/i18n/pt-BR.ts` (fonte da verdade) e `src/i18n/en.ts` |
| Descrição para buscadores | `meta.description` nos arquivos de i18n |

Para adicionar um projeto, coloque as screenshots em `src/assets/images/` (16:9, cerca de 1200 px de largura), importe-as em `projects.ts` e adicione a entrada com `alt` nos dois idiomas. O Astro gera as versões otimizadas e, para o modo 8-BIT, uma cópia de baixa resolução exibida com `image-rendering: pixelated`.

Os ícones usam ids do Iconify, como `simple-icons:python` ou `lucide:mail`. Procure nomes em <https://icon-sets.iconify.design>.

## Idiomas

O roteamento i18n do Astro serve pt-BR em `/` e inglês em `/en/`. O seletor PT/EN no topo navega entre as duas páginas.

## SEO

- `<title>`, description, canonical e `hreflang` (pt-BR, en, x-default) por idioma.
- Open Graph e Twitter Card completos, com `og:locale:alternate` e alt da imagem.
- JSON-LD (`src/data/seo.ts`): `WebSite`, `ProfilePage`, `Person` (cargo, empresa, formação, `knowsAbout`, `sameAs`) e um `SoftwareApplication` por projeto. Tudo vem dos mesmos arquivos de dados da página, então não diverge do conteúdo visível.
- `sitemap-index.xml` gerado no build, com os pares de idioma; `robots.txt` aponta para ele.
- `404.astro` com `noindex`.
- Um único `<h1>`, um `<h2>` por seção, imagens com `alt`, `width` e `height`.
- Performance: preload das duas fontes do modo padrão. A foto em alta resolução usa `loading="lazy"`, então não é baixada enquanto o modo 8-BIT está ativo.

O domínio fica em `site` no `astro.config.mjs` e em `public/robots.txt`. Se mudar, altere os dois.

## Deploy

No Netlify, o `netlify.toml` já define build (`npm run build`), pasta publicada (`dist`), Node 22, cache imutável para `/_astro/*` e headers de segurança.

## Acessibilidade

- Skip link, foco visível nos dois modos e `aria-pressed` nos botões de modo e som.
- As abas de experiência seguem o padrão `tablist` e funcionam com as setas do teclado.
- O lightbox abre num `<dialog>` com setas e Esc.
- Animações, piscadas e flicker do CRT são desligados com `prefers-reduced-motion`.
- Sem JavaScript, todo o conteúdo continua visível: as abas mostram todos os cargos empilhados.

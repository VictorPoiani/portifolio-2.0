# Portfólio Profissional de Victor Poiani (Modern Tech Minimalist)

Plano de arquitetura e design para a renovação completa do portfólio de Victor Poiani, migrando da versão com fundo estelar para uma experiência front-end de alto nível: sóbria, minimalista, moderna e com estética dark grafite e azul cobalto metálico.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **Decisões confirmadas pelo usuário:**
> - **Paleta de Cores**: Fundo grafite profundo (`#121214` e `#0C0C0E`), superfícies estruturais em ardósia sutil (`#18181B` com bordas `#27272A`), e acentos vibrantes em azul cobalto metálico (`#2563EB` / `#3B82F6`).
> - **Tipografia**: Família moderna `Inter` e `Geist` para títulos/corpo, combinadas com toques em `JetBrains Mono / monospace` para parâmetros de código e tags técnicas.
> - **Estrutura do Hero**: Split-screen com coluna esquerda de apresentação e propostas de valor + coluna direita com retrato tratado em moldura técnica e indicador de disponibilidade acadêmica/profissional.
> - **Projetos**: Destaque principal para **"The Insight"** (microblogging minimalista e rede social com Supabase/PostgreSQL) e projetos correlatos em grade limpa (incluindo **Visão Computacional & IA**, **Gamificação do Aprendizado**, e **Certificações & Automações**).
> - **Modal Técnico**: Janela modal completa aberta ao clicar em qualquer card de projeto, exibindo banner/imagem, tags de tecnologias, objetivo/finalidade, arquitetura técnica e botões diretos para GitHub e Demonstração ao vivo.
> - **Contato & Trajetória**: Formulário funcional de mensagem com validação e feedback instantâneo (com opção de envio por e-mail e cópia rápida), além de timeline de formação (UFV) e mapa de habilidades.

---

## 1. Overview & Core Concept

- **O que é**: Uma aplicação web responsiva de portfólio de engenharia de software e desenvolvimento web para **Victor Poiani** (Estudante de Sistemas de Informação na Universidade Federal de Viçosa - UFV).
- **Público-alvo**: Recrutadores de tecnologia, líderes técnicos, clientes e parceiros acadêmicos/profissionais.
- **Proposta de Valor**: Transmitir maturidade técnica, clareza arquitetural, domínio de UI/UX contemporâneo e capacidade de entrega de software real através de projetos práticos e código limpo.

---

## 2. User Experience & Visual Design

### A. Estrutura de Navegação (Top Bar Contract)
- **Top Bar Fixa com Blur**:
  - *Zona 1 (Marca)*: Wordmark minimalista `Victor Poiani` com sutil indicador mono `dev / si`.
  - *Zona 2 (Links)*: `Sobre`, `Trajetória`, `Habilidades`, `Projetos`, `Contato`.
  - *Zona 3 (Ação Principal)*: Botão primário em azul cobalto `Falar Comigo` com âncora suave para o formulário.

### B. Seções Principais
1. **Hero Split-Screen**:
   - *Coluna Esquerda*: Kicker editorial `Sistemas de Informação · UFV`, headline impactante com tipografia balanceada, resumo profissional focado em solução de problemas reais, status de disponibilidade ("Disponível para Estágio & Projetos") e CTAs duplos (`Explorar Projetos` e `Baixar CV / GitHub`).
   - *Coluna Direita*: Card técnico sofisticado com moldura sutil em grafite e cantos arredondados contendo a imagem de perfil tratada em iluminação de estúdio e badges de foco técnico.
   - *Faixa de Métricas/Destaques*: Logo abaixo do split, métricas rápidas de impacto (Semestres cursados, Projetos desenvolvidos, Tecnologias dominadas, Certificações).

2. **Sobre Mim & Trajetória (Timeline)**:
   - História concisa unindo programação (Python, C, JS/TS, React), design de produto e visão empreendedora.
   - Linha do tempo vertical elegante com marcos na UFV (2026+), projetos de extensão, certificações e histórico de empreendedorismo.

3. **Matriz de Competências & Habilidades**:
   - Organização em categorias claras: *Desenvolvimento Web & Frontend*, *Linguagens & Backend*, *Bancos de Dados & Nuvem*, e *Metodologias & Práticas*.
   - Renderização limpa sem pills estáticas poluídas, com barras sutis de proficiência ou tags semânticas estruturadas.

4. **Galeria de Projetos**:
   - **Projeto em Destaque (The Insight)**: Card largo em layout de banner horizontal com imagem do projeto, sinopse aprofundada, tags de stack (JavaScript Vanilla, Supabase, PostgreSQL, RLS, UI/UX) e gatilho para o modal de detalhes técnicos ou acesso direto.
   - **Grade de Projetos Secundários**:
     - *Visão Computacional & IA*: Detecção de objetos e processamento de imagem com Python e OpenCV / Deep Learning.
     - *Gamificação do Aprendizado*: Metodologia pedagógica baseada em mecânicas de RPG educacional.
     - *Automações & Certificações*: Scripts de produtividade e hub de certificados técnicos válidos.
   - **Filtros Interativos**: Segmented control funcional para alternar categorias (`Todos`, `Full-Stack & Web`, `IA & Visão Computacional`, `Sistemas & Automação`).

5. **Modal de Detalhes Técnicos Interativo**:
   - Abertura fluida com bloqueio de scroll de fundo e tecla `Esc`/clique externo.
   - Header com título do projeto e categoria.
   - Preview visual de alta fidelidade com fallback elegante.
   - Resumo da finalidade e dor solucionada.
   - Especificação técnica ("Como foi construído", banco de dados, regras de negócio e desafios superados).
   - Ações: `Ver no GitHub` e `Acessar Projeto ao Vivo`.

6. **Contato Funcional & Rodapé**:
   - Formulário com campos validados (Nome, E-mail, Assunto, Mensagem) com disparo direto via `mailto:`, cópia rápida do endereço `dev.victorpoiani@gmail.com` com feedback toast, e links sociais diretos (GitHub, LinkedIn, Instagram).
   - Rodapé sóbrio com direitos autorais, ano dinâmico e stack de desenvolvimento.

---

## 3. Key Product Decisions & Trade-Offs

- **Substituição do fundo estelar por grafite refinado**: O fundo estelar da versão anterior transmitia tom jovial/estudantil; a nova estética grafite `#121214` com linhas de borda `#27272A` e azul cobalto confere perfil de engenheiro de software pleno.
- **Componentes React Modulares com Lucide Icons**: Em vez de ícones bootstrap pesados via CDN, uso de `@lucide/react` para ícones vetoriais uniformes e renderização ultra-rápida.
- **Modal Integrado com Estado React**: Gerenciamento de projeto ativo via `useState<Project | null>`, garantindo transições suaves sem conflitos de z-index ou dependência de Bootstrap JS.
- **Acessibilidade e Usabilidade**: Foco visível, navegação por teclado no modal, contraste WCAG AA testado em todos os textos sobre o fundo grafite.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                               App.tsx                                  │
│  - Active Project State (Modal)                                        │
│  - Category Filter State                                               │
│  - Contact Form State & Toast Notification State                       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
┌──────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  TopNavbar.tsx   │     │      Hero.tsx       │     │   AboutTimeline.tsx │
│  - 3-Zone bar    │     │  - Split-screen     │     │  - Academic history │
│  - Smooth anchor │     │  - Studio portrait  │     │  - Key milestones   │
│  - CTA Contact   │     │  - Metric highlights│     │  - Skills matrix    │
└──────────────────┘     └─────────────────────┘     └─────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    ▼                                                               ▼
┌──────────────────────────────────────┐       ┌───────────────────────────┐
│          ProjectsSection.tsx         │       │    ProjectModal.tsx       │
│  - Featured: "The Insight"           │◄──────┤  - Technical specs        │
│  - Grid: Computer Vision, RPG, etc.  │(Click)│  - Stack tags             │
│  - Category Filter Buttons           │       │  - Live & GitHub links    │
└──────────────────────────────────────┘       └───────────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    ▼                                                               ▼
┌──────────────────────────────────────┐       ┌───────────────────────────┐
│          ContactSection.tsx          │       │        Footer.tsx         │
│  - Interactive form with validation  │       │  - Tech stack credits     │
│  - One-click copy email button       │       │  - Dynamic year           │
│  - Verified social link outs         │       └───────────────────────────┘
└──────────────────────────────────────┘
```

### Entidades de Dados (`src/data/portfolioData.ts`)
- **Projeto**: `id`, `title`, `tagline`, `summary`, `category`, `featured`, `image`, `icon`, `technologies`, `objectives`, `technicalDetails`, `liveUrl`, `githubUrl`.
- **Habilidades**: Grupos categorizados com lista de ferramentas e nível de familiaridade prática.
- **Linha do Tempo**: Ano/período, título, instituição/iniciativa, descrição detalhada.

---

## Plan Verification & Delivery

Ao aprovar este plano, construiremos:
1. Catálogo de dados completo e enriquecido (`src/data/portfolioData.ts`).
2. Imagens de alta qualidade geradas para os projetos (The Insight mockup, Visão Computacional dashboard, etc.).
3. Componentes React modulares com Tailwind v4 configurado para a paleta grafite/cobalto.
4. Modal com detalhes técnicos e botões de ação reais.
5. Seção de contato com feedback visual interativo.

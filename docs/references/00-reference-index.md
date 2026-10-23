# Portfolio Documentation Reference Index

> Current Nokia update (23 October 2026): the canonical project is **Enterprise Reporting & Insights Platform** at `/projects/enterprise-reporting-insights/`. Its ten-section Business Analyst story replaces the old case study. The legacy URL remains a compatibility redirect. There are ten presentation routes plus this redirect; older validation records describe their original source state.

Central navigation and governance index for the portfolio documentation, covering the current website architecture, Intro Experience, Main Product Portfolio, four project case studies, repository QA status, implementation context, and GitHub Pages routing history.

<div align="center">

### 📚 Documentation Navigation & Governance

![Documentation](https://img.shields.io/badge/Documentation-0A66C2?style=for-the-badge)
![10 Routes](https://img.shields.io/badge/10_Routes-2563EB?style=for-the-badge)
![4 Projects](https://img.shields.io/badge/4_Projects-7C3AED?style=for-the-badge)
![QA Reference](https://img.shields.io/badge/QA_Reference-059669?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Architecture-0891B2?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance


---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Documentation Purpose

The `docs/references/` directory is the maintained documentation layer for the portfolio repository.

Its purpose is to provide a clear and factual reference for:

- the current website and route architecture;
- the four-page Intro Experience;
- the ten-section Main Product Portfolio;
- the four detailed project case studies;
- component, content, asset, responsive, navigation, and PDF/export behavior;
- repository-wide QA findings and their current resolution status;
- implementation constraints and maintenance guidance;
- the historical GitHub Pages and root-route migration.

These documents are intended to make future maintenance possible without having to rediscover the architecture from the repository each time.

### Documentation baseline

The current documentation is aligned to the production source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Repository: mapant/mapant.github.io
Site: https://mapant.github.io/
Documentation review date: 19 October 2026
```

Documentation updates created after this implementation commit may remain uncommitted until they are manually reviewed and committed.

The application source remains authoritative for actual implementation behavior. Documentation must not be treated as a substitute for inspecting source when making a code change.

---

> 📚 **REFERENCE DETAIL**

## 2. Documentation Structure

The documentation library follows a fixed sequence so that files remain easy to locate and understand.

```text
docs/
└── references/
    ├── 00-reference-index.md
    ├── 01-intro-experience-reference.md
    ├── 02-main-portfolio-reference.md
    ├── 03-integrated-channels-reference.md
    ├── 04-ayu-docconnect-reference.md
    ├── 05-ayu-sales-intelligence-reference.md
    ├── 06-telecom-cost-optimization-reference.md
    ├── 07-repository-qa-report.md
    ├── 08-project-context.md
    └── 09-github-pages-routing-migration.md
```

### Documentation organization

The files are intentionally grouped into four logical areas:

| Group | Files | Purpose |
|---|---|---|
| Experience references | `01`–`02` | Intro Experience and Main Product Portfolio |
| Project references | `03`–`06` | Detailed implementation reference for each project case study |
| Repository assurance/context | `07`–`08` | QA status and repository-wide architecture/maintenance context |
| Technical history | `09` | GitHub Pages hosting and route-migration history |

`00-reference-index.md` is the entry point for all of them.

---

> 🔗 **ROUTING & NAVIGATION**

## 3. Current Website Route Map

The portfolio currently exposes ten source routes.

| # | Experience / Page | Current Route | Primary Source |
|---:|---|---|---|
| 1 | Hero / Intro Landing | `/` | `src/pages/index.astro` |
| 2 | Hero Alias | `/intro/` | `src/pages/intro/index.astro` |
| 3 | About Me | `/about/` | `src/pages/about/index.astro` |
| 4 | Education | `/education/` | `src/pages/education/index.astro` |
| 5 | Work Experience | `/experience/` | `src/pages/experience/index.astro` |
| 6 | Main Product Portfolio | `/portfolio/` | `src/pages/portfolio/index.astro` |
| 7 | Integrated Channels | `/projects/integrated-channels/` | `src/pages/projects/integrated-channels.mdx` |
| 8 | Ayu DocConnect | `/projects/ayu-docconnect/` | `src/pages/projects/ayu-docconnect.mdx` |
| 9 | Ayu Sales Intelligence | `/projects/ayu-sales-intelligence/` | `src/pages/projects/ayu-sales-intelligence.mdx` |
| 10 | Enterprise Reporting & Insights Platform | `/projects/enterprise-reporting-insights/` | `src/pages/projects/enterprise-reporting-insights.mdx` |

### Route hierarchy

```text
/
├── /about/
├── /education/
├── /experience/
├── /portfolio/
│
├── /projects/integrated-channels/
├── /projects/ayu-docconnect/
├── /projects/ayu-sales-intelligence/
└── /projects/enterprise-reporting-insights/
```

`/intro/` remains available as an alias of the Hero experience, but normal Home and identity navigation uses `/`.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 4. Experience Architecture

The portfolio is organized as a progressive professional narrative:

```text
Intro Experience
      ↓
Main Product Portfolio
      ↓
Detailed Project Case Studies
```

### Intro Experience

The Intro Experience consists of four primary pages:

1. Hero
2. About Me
3. Education
4. Work Experience

Its purpose is to establish professional identity, background, experience, qualifications, product positioning, and progression before the visitor enters the detailed product portfolio.

### Main Product Portfolio

The Main Product Portfolio contains ten sections:

1. Overview
2. Ecosystem
3. Challenge
4. Strategy
5. PM Scope
6. Product Metrics
7. Product Portfolio
8. Tech & Data
9. Outcomes
10. Connect

It provides the cross-domain Product Management narrative and links to the detailed project case studies.

### Project Case Studies

The portfolio contains four detailed project case studies:

1. Integrated Channels
2. Ayu DocConnect
3. Ayu Sales Intelligence
4. Enterprise Reporting & Insights Platform

Each case study is a dedicated route with its own content, navigation, implementation details, product context, metrics, diagrams, technical representation, outcomes, and project-specific behavior.

---

> 📚 **REFERENCE DETAIL**

## 5. Documentation Index

| Seq. | Document | Primary Purpose | Main Coverage |
|---:|---|---|---|
| 01 | [Intro Experience Reference](01-intro-experience-reference.md) | Complete reference for the introductory portfolio experience | Hero, About Me, Education, Work Experience, shared Intro header, navigation, responsive behavior, assets, and four-page PDF export |
| 02 | [Main Product Portfolio Reference](02-main-portfolio-reference.md) | Complete reference for `/portfolio/` | All ten sections, portfolio data, project cards, metrics, Connect, navigation, responsive behavior, shared components, and export |
| 03 | [Integrated Channels Reference](03-integrated-channels-reference.md) | Detailed M2P Integrated Channels case-study reference | Twelve applications, banking ecosystem, product scope, architecture, integrations, compliance, PM scope, metrics, workspace modal, navigation, and export |
| 04 | [Ayu DocConnect Reference](04-ayu-docconnect-reference.md) | Detailed Doctor Business / DocConnect case-study reference | Doctor journeys, referrals, engagement, product metrics, architecture, modules, outcomes, components, assets, interaction behavior, and historical validation |
| 05 | [Ayu Sales Intelligence Reference](05-ayu-sales-intelligence-reference.md) | Detailed Sales Intelligence and Field Force Optimization reference | Prospect intelligence, prioritisation, beat planning, location execution, territory controls, metrics, workspaces, pilot outcomes, architecture, and historical validation |
| 06 | [Enterprise Reporting & Insights Platform Reference](06-telecom-cost-optimization-reference.md) | Detailed Enterprise Reporting & Insights Platform case-study reference | Business Analyst scope, reporting harmonisation, KPI definitions, requirements traceability, workspaces, functional data flow, outcomes, leadership, and navigation |
| 07 | [Repository QA Report](07-repository-qa-report.md) | Single repository-wide QA record | Original QA scope, five findings, severity, targeted validation, implemented fixes, deferred issue, post-fix checks, remaining verification limits |
| 08 | [Project Context](08-project-context.md) | Repository-wide implementation and maintenance context | Technology stack, routes, layouts, shared components, data organization, navigation, responsive architecture, assets, PDF/export, accessibility, and implementation constraints |
| 09 | [GitHub Pages Routing Migration](09-github-pages-routing-migration.md) | Historical technical record | Repository/root-domain migration, interim Intro routing, final Hero/Main Portfolio routing, route updates, GitHub Pages deployment evidence, and final state |

---

> 📚 **REFERENCE DETAIL**

## 6. Which Document to Use

Use the documentation according to the type of change being made.

| Change / Question | Primary Document |
|---|---|
| Hero, About, Education, or Work Experience | `01-intro-experience-reference.md` |
| Main Portfolio section or project-card change | `02-main-portfolio-reference.md` |
| Integrated Channels content or implementation | `03-integrated-channels-reference.md` |
| DocConnect content or implementation | `04-ayu-docconnect-reference.md` |
| Sales Intelligence content or implementation | `05-ayu-sales-intelligence-reference.md` |
| Telecom case-study content or implementation | `06-telecom-cost-optimization-reference.md` |
| Determine whether a known issue is fixed/deferred | `07-repository-qa-report.md` |
| Understand repository architecture before making a broader change | `08-project-context.md` |
| Understand why `/` and `/portfolio/` changed | `09-github-pages-routing-migration.md` |

For a project-specific change, read the corresponding project reference first.

For a shared architectural change affecting several routes, read `08-project-context.md` in addition to the relevant page/project reference.

For any change related to a previously identified QA issue, consult `07-repository-qa-report.md` before modifying the implementation.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 7. Source-of-Truth Hierarchy

When information appears in more than one place, use the following authority order.

### 7.1 Current implementation behavior

```text
Production source code
→ project/page reference document
→ Project Context
→ historical documentation
```

The current source code is authoritative for:

- rendered routes;
- current component relationships;
- navigation targets;
- active assets;
- implemented JavaScript behavior;
- responsive logic;
- PDF/export logic;
- accessibility attributes and interactions.

### 7.2 Professional content and metrics

Authored portfolio content should be preserved exactly unless an explicit content change has been approved.

This includes:

- employment and education facts;
- project scope;
- metrics;
- outcome values;
- user/stakeholder groups;
- process sequences;
- product capabilities;
- architecture descriptions;
- project-specific wording.

Implementation source confirms what is currently displayed; it does not independently verify the underlying professional claim.

### 7.3 Historical validation

Historical QA/build/browser records remain valid only for the implementation state in which they were performed.

A previous:

```text
PASS
```

must not automatically be interpreted as validation of a later source change.

Similarly:

```text
Build PASS
```

does not mean:

```text
Visual fidelity PASS
Accessibility PASS
Runtime interaction PASS
PDF output PASS
```

These are separate validation categories.

---

> 🔗 **ROUTING & NAVIGATION**

## 8. Navigation Model

The current high-level navigation model is:

### Intro Experience

```text
Identity
About Me
Education
Work Experience
Product Portfolio
View Projects
PDF
```

Primary destinations:

- Identity → `/`
- About Me → `/about/`
- Education → `/education/`
- Work Experience → `/experience/`
- Product Portfolio → `/portfolio/`
- View Projects → `/portfolio/#portfolio`

### Main Product Portfolio

```text
Identity
Section Navigation
Home
View Projects
PDF
```

Primary destinations:

- Identity → `/`
- Home → `/`
- View Projects → `/portfolio/#portfolio`

### Project Case Studies

```text
Identity
Project Section Navigation
Home
Back to Portfolio
View Projects
PDF
```

Primary destinations:

- Identity → `/`
- Home → `/`
- Back to Portfolio → `/portfolio/`
- View Projects → `/portfolio/#portfolio`

Previous/next navigation remains project-specific.

### Known current exception

A separately authored **Let’s Connect** link inside Ayu Sales Intelligence currently targets:

```text
/#connect
```

while the active Connect section now lives at:

```text
/portfolio/#connect
```

This is documented as a known source exception. It must not be described as resolved unless the production source is changed and verified.

---

> 📚 **REFERENCE DETAIL**

## 9. Documentation Conventions

All reference documents follow the same principles.

### Current implementation first

Reference documents describe the current implementation. Historical information is retained only where it provides useful maintenance, validation, migration, or decision context.

### Clear separation of implementation and product representation

The portfolio is a static professional website.

Product diagrams, dashboards, maps, workflows, metrics, architecture layers, phones, applications, and operating models represent professional product work and product concepts.

Their presence in the portfolio does not imply that the portfolio website itself connects to:

- banking systems;
- patient records;
- telecom infrastructure;
- live analytics services;
- location tracking;
- production databases;
- external product APIs.

This distinction should be stated where technically relevant without unnecessary repetition.

### Consistent terminology

Use these names consistently:

- **Intro Experience**
- **Main Product Portfolio**
- **Integrated Channels**
- **Ayu DocConnect**
- **Ayu Sales Intelligence**
- **Enterprise Reporting & Insights Platform**
- **Repository QA Report**
- **Project Context**
- **GitHub Pages Routing Migration**

Do not introduce alternate names unless they are actual visible project titles or source identifiers.

### Routes, source files, and code identifiers

Format technical identifiers with backticks:

```text
/portfolio/
src/components/ProjectShell.astro
#product-metrics
savePortfolioPdf
```

### Metrics

Do not:

- invent metrics;
- normalize different project claims without approval;
- silently change populations, periods, signs, ranges, or scope;
- treat decorative chart values as live calculations.

Where Main Product Portfolio and detailed case-study metrics differ, preserve the authored scope and document the distinction rather than choosing one automatically.

---

> 🖼️ **ASSETS & VISUALS**

## 10. Documentation and Production Assets

The documentation directory is Markdown-only.

```text
docs/references/
```

contains documentation.

Production assets remain under:

```text
public/
```

The repository does not retain separate visual-reference screenshot folders under `docs/references/`.

Do not duplicate live assets into the documentation directory.

Do not move or delete assets from `public/` merely because they are described in documentation.

Project reference documents may list production asset paths so that maintainers can identify which assets are actually used by each implementation.

---

> ✅ **QA & VALIDATION**

## 11. Validation Terminology

The documentation uses validation terms precisely.

### Source confirmed

The implementation exists in the inspected source.

### Build passed

The Astro production build completed successfully during the recorded validation pass.

### Runtime verified

Behavior was exercised in a browser or equivalent runtime during the recorded validation pass.

### Visual validation

Rendered layout/readability/fit was visually checked for the specified viewport or reference.

### Reference fidelity

Rendered output was compared with an approved reference.

### Accessibility source check

ARIA, focus logic, labels, keyboard handlers, or semantics were inspected in source.

### Accessibility certification

No formal accessibility certification has been performed.

A source-level accessibility improvement must not be described as formal WCAG compliance or assistive-technology certification unless such testing is explicitly performed.

---

> ✅ **QA & VALIDATION**

## 12. Current Repository QA Status

The repository-wide QA record is maintained in:

[07-repository-qa-report.md](07-repository-qa-report.md)

The original static QA reported:

| Severity | Findings |
|---|---:|
| Critical | 0 |
| High | 0 |
| Medium | 3 |
| Low | 2 |

Five issues were identified:

1. Integrated Channels modal focus handling
2. Connect form accessible labels
3. JavaScript-dependent responsive-navigation fallback
4. Connect inquiry-topic dropdown containing no real options
5. Telecom View Projects CTA inconsistency

Current documented disposition:

| Status | Count |
|---|---:|
| Implemented fixes | 4 |
| Intentionally deferred | 1 |

The JavaScript-dependent navigation fallback remains deferred and must not be represented as resolved.

See the QA report for severity, evidence, source locations, fixes, limitations, and post-fix validation details.

---

> 📄 **PDF & EXPORT**

## 13. Responsive and PDF Architecture

Responsive and export behavior are repository-wide architectural concerns and must not be changed casually while editing a single section.

### Responsive model

Current architecture uses:

- desktop presentation at approximately the established `1280 × 665` baseline;
- proportional desktop-style fitting for tablet widths;
- native responsive layouts for smaller mobile widths;
- `tablet-desktop-fit.js`;
- `responsive-relationships.js`;
- route-specific SCSS/CSS;
- shared navigation behavior.

The implementation is not CSS-only.

### PDF/export model

The portfolio uses browser print preparation rather than a backend PDF service.

Two export modes exist:

#### Intro Experience

Exports:

1. Hero
2. About Me
3. Education
4. Work Experience

#### Main Portfolio / Project Case Studies

Exports the current ten-section portfolio or project route.

Detailed behavior is documented in the relevant reference files and `08-project-context.md`.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 14. Maintenance Rules

When updating the repository:

1. Identify the owning page/project reference.
2. Confirm the current source location before editing.
3. Preserve approved content, metrics, section order, navigation, and architecture unless the task explicitly changes them.
4. Do not assume data stored in one file automatically updates another representation.
5. Check Main Product Portfolio summaries separately from detailed project pages.
6. Treat shared components and shared styles as higher-risk changes because they can affect several routes.
7. Do not modify generated output such as `dist/` as source.
8. Do not introduce a second responsive, header, PDF, or route architecture unless explicitly approved.
9. Keep production assets in `public/`.
10. Update the appropriate reference document when an approved implementation change materially affects documented behavior.
11. Update the QA report only when a QA finding/status genuinely changes.
12. Preserve historical migration evidence as history rather than rewriting it to describe the present.

---

> 📚 **REFERENCE DETAIL**

## 15. Documentation Boundaries

These references intentionally do not claim that every current behavior has been newly tested during documentation maintenance.

Documentation synchronization can confirm:

- source structure;
- declared routes;
- component ownership;
- current content/data mappings;
- configured navigation targets;
- known implementation logic.

It does not automatically confirm:

- live GitHub Pages deployment;
- browser rendering at every viewport;
- native browser zoom behavior;
- all external links;
- pixel-perfect reference fidelity;
- formal accessibility compliance;
- actual printed/PDF pagination;
- external API/system availability.

Where historical evidence exists, the corresponding document records the date and scope of that evidence.

---

> 📚 **REFERENCE DETAIL**

## 16. Recommended Reading Order

For someone new to the repository:

```text
00-reference-index.md
        ↓
08-project-context.md
        ↓
01-intro-experience-reference.md
        ↓
02-main-portfolio-reference.md
        ↓
03–06 project references as required
        ↓
07-repository-qa-report.md
        ↓
09-github-pages-routing-migration.md
```

For a narrow project change, it is not necessary to read every document. Start with the relevant project reference and consult Project Context or QA only where the change crosses shared architecture or known issues.

---

> 📚 **REFERENCE DETAIL**

## 17. Current Documentation State

At this documentation baseline:

- Hero is the root experience at `/`.
- `/intro/` remains a Hero alias.
- Main Product Portfolio is at `/portfolio/`.
- Four project routes remain under `/projects/`.
- Intro, Main Portfolio, and project navigation are documented separately.
- The repository-wide QA findings are consolidated into one QA report.
- Project-specific historical validation is retained only where it provides useful implementation context.
- Documentation contains Markdown only.
- Production assets remain under `public/`.
- No visual-reference screenshot folders are maintained under `docs/references/`.
- Current source remains authoritative where documentation and implementation differ.

For repository-wide architecture and maintenance constraints, continue with:

[08-project-context.md](08-project-context.md)
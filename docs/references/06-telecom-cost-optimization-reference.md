# Enterprise Reporting & Insights Platform Reference

Current Nokia case-study implementation reference, updated 23 October 2026. The legacy reference filename is retained so existing documentation links remain valid.

This replaces the previous Telecom Analytics & Cost Optimization case study. Its asset/geography/capital-efficiency narrative, cost-savings range and architecture are superseded, rather than carried into the new story. Historical repository QA and deployment evidence remain in [07-repository-qa-report.md](07-repository-qa-report.md) and [09-github-pages-routing-migration.md](09-github-pages-routing-migration.md); they do not certify this replacement.

## Project identity and scope

- **Title:** Enterprise Reporting & Insights Platform
- **Descriptor:** Cross-Market Telecom Delivery Analytics & Operations Governance Platform
- **Company:** Nokia Networks
- **Role:** Business Analyst
- **Project period:** Feb 2019 – Jan 2023
- **Background experience:** Reporting Analyst, Jan 2016 – Jan 2019. The detailed story focuses on subsequent Business Analyst work.
- **Challenge:** Cross-market reporting harmonisation within mature regional operating environments, with established systems, delivery processes and governance.

## Routes and navigation

Canonical source: `src/pages/projects/enterprise-reporting-insights.mdx`

Canonical URL: `/projects/enterprise-reporting-insights/`

`/projects/telecom-cost-optimization/` is retained only as a static HTML compatibility redirect with a canonical link and accessible continuation link. It does not render a second case study. GitHub Pages serves static HTML, so this is a meta-refresh redirect rather than a server-side HTTP redirect.

Card 04 in `src/data/portfolio.js`, Integrated Channels previous-project navigation and Sales Intelligence next-project navigation point to the canonical route.

Section 10 ends with the shared `ProjectNavigation.astro` pattern extracted from Integrated Channels:

| Position | Label | Route |
|---|---|---|
| Previous | Ayu Sales Intelligence & Field Force Optimization | `/projects/ayu-sales-intelligence/` |
| Center | Return to Product Portfolio | `/portfolio/` |
| Next | Integrated Channels Suite | `/projects/integrated-channels/` |

## Source architecture

| Source | Responsibility |
|---|---|
| `src/components/NokiaAnalyticsCaseStudy.astro` | Ten sections, authored content, functional diagrams, workspace wireframes |
| `src/components/NokiaPanel.astro` | Nokia content cards, icons, optional lists |
| `src/styles/nokia-analytics-case-study.scss` | Nokia section compositions and native mobile reflow |
| `src/components/ProjectShell.astro` | Existing shared profile/header, section navigation, actions and active-section observer; unchanged |
| `src/components/ProjectNavigation.astro` | Shared three-part adjacent-project navigation |
| `src/styles/page-view.scss` | Existing shared desktop page frame; unchanged |
| `src/scripts/tablet-desktop-fit.js` | Existing proportional tablet fit, natural-height scrolling and anchor handling; unchanged |
| `src/scripts/save-portfolio-pdf.js` | Existing ten-section PDF preparation; unchanged |

The Nokia component configures the shared shell with the same section labels as the completed projects. No Nokia-specific header, mobile menu, PDF control or navigation observer is introduced. Body section-number badges are omitted.

## Sections and content

| Section | Anchor | Composition and content |
|---|---|---|
| Overview | `overview` | Narrative beside seven-market/platform/user flow; four bottom value areas |
| Ecosystem | `ecosystem` | Narrative, source domains, reporting model and decision users; supporting value row |
| Challenge | `challenge` | Narrative beside six challenge areas; business-requirement transition and business importance |
| Strategy | `strategy` | Identify / Align / Automate / Visualise framework; analytical foundation and decision questions |
| PM Scope | `pm-scope` | Explicit BA role/period, lifecycle workstream rows, deliverable list, requirement traceability |
| Product Metrics | `product-metrics` | Five metric definitions, formulas, qualitative process steps and decisions; governance questions |
| Portfolio | `portfolio` | Three stakeholder-specific wireframe workspaces, reporting hierarchy and BA contribution |
| Tech & Data | `tech-data` | Source / SQL transformation / semantic model / analytics layers; functional flow and validation checkpoints |
| Outcomes | `outcomes` | Approved outcomes, standardised KPI framework, auditability, impact, value chain and before/after |
| Product Leadership | `product-leadership` | BA-to-product progression, seven capabilities, carried-forward practices, operating philosophy and shared project navigation |

Requirement traceability: Business Problem → Requirement → Data / KPI Rule → Acceptance Criteria → UAT Scenario → Business Sign-Off.

Functional flow: Regional Inputs → Staging → Clean & Standardise → Semantic Model → KPI Calculation → Reporting → Business Decision.

Confirmed technologies: Excel, SQL, Power BI, Tableau, SAP BI / Enterprise Reporting. Architecture is presented as functional BA definition, not infrastructure ownership.

## Content integrity

Only approved quantitative project facts appear:

- **7 markets:** APAC · CHINA · INDIA · MEA · EUR · LAT · NAM.
- **25%:** reduction in reporting turnaround time.
- **15%:** improvement in program productivity.

The Overview contains the market codes without the outcome percentages. Formula multipliers and the role period are definitions/context, not invented operating data. No operating percentages, project counts, dates, fictional program names or time-series values are added to the workspace wireframes. Neutral placeholder strokes represent text layout only.

The five metrics are Milestone Adherence Rate, Reporting Cycle Duration, Data / Pipeline Exception Rate, Delivery Progress and Data Completeness. Each connects business meaning to an intended decision.

## Responsive, assets and export

Desktop uses section-specific native grids within the existing viewport frame. Tablet inherits the shared 1280 × 665 desktop-fit mechanism and anchor handling. Below 768px, the same content reflows into readable single-column layouts with vertical process connectors. No narrative is hidden for mobile.

Visuals use semantic HTML, CSS Grid/Flexbox, gradients, borders, native connectors and existing inline SVG icon components. The leadership building illustration is authored inline SVG. Existing local `public/intro/logos/nokia-logo.png` and the shared profile portrait are reused. No reference screenshot, screenshot crop or new raster asset is included.

The ten section IDs match the shared header's ten navigation links, which the existing PDF exporter uses to identify ten printable pages. Print scripts and styles are unchanged.

## Validation boundary

The requested build and whitespace checks are reported in the delivery message. Browser, runtime accessibility, responsive visual acceptance, reference pixel fidelity and exported PDF appearance have not been certified in this implementation pass. Manual visual acceptance remains with the owner.

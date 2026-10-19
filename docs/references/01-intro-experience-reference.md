# Intro Experience Reference

Complete implementation and maintenance reference for the four-page Intro Experience: Hero, About Me, Education, and Work Experience.

---

## 1. Purpose and Scope

The Intro Experience establishes the professional context that precedes the detailed Main Product Portfolio.

It presents:

- professional identity and positioning;
- career progression across reporting, business analysis, and product management;
- domain experience across FinTech, Healthcare, Telecom, and CRM / Claims Automation;
- education and certifications;
- continuous-learning areas;
- detailed work experience;
- direct navigation into the Main Product Portfolio and project case studies.

The Intro Experience consists of four primary pages:

1. Hero
2. About Me
3. Education
4. Work Experience

The root Hero is also retained at `/intro/` as a backward-compatible alias.

The Intro Experience is implemented as a static Astro experience using local authored data, local production assets, native HTML/SVG/CSS, and shared browser JavaScript. It does not depend on a CMS, external profile service, employment API, or credential-verification service.

---

## 2. Route Structure

| Page | Current Route | Source Adapter | Page Component | Active Key |
|---|---|---|---|---|
| Hero | `/` | `src/pages/index.astro` | `HeroPage.astro` | `hero` |
| Hero alias | `/intro/` | `src/pages/intro/index.astro` | `HeroPage.astro` | `hero` |
| About Me | `/about/` | `src/pages/about/index.astro` | `AboutPage.astro` | `about` |
| Education | `/education/` | `src/pages/education/index.astro` | `EducationPage.astro` | `education` |
| Work Experience | `/experience/` | `src/pages/experience/index.astro` | `CareerTimeline.astro` | `experience` |

Normal Home and identity navigation uses `/`.

`/intro/` remains an alias and renders the same `IntroShell` + `HeroPage` composition as `/`. It is not implemented as a redirect.

### Document titles

The route adapters supply the following titles to `IntroShell.astro`:

| Route | IntroShell title | Final document-title pattern |
|---|---|---|
| `/` | `Product Leadership` | `Product Leadership \| Manoj Pant` |
| `/intro/` | `Product Leadership` | `Product Leadership \| Manoj Pant` |
| `/about/` | `About Me` | `About Me \| Manoj Pant` |
| `/education/` | `Education` | `Education \| Manoj Pant` |
| `/experience/` | `Work Experience` | `Work Experience \| Manoj Pant` |

---

## 3. Shared Intro Architecture

The common rendering path is:

```text
Route Adapter
    ↓
IntroShell.astro
    ↓
SiteLayout.astro
    ↓
IntroHeader.astro
    ↓
main#intro-main
    ↓
Route-specific Intro component
```

`IntroShell.astro` owns the shared Intro-page wrapper.

Its structure is:

```text
SiteLayout
└── .portfolio-root.intro-root.intro-root--<page>
    ├── Skip-to-content link
    ├── IntroHeader
    └── main#intro-main
        └── Route-specific content
```

The `portfolio-root` class is intentionally retained on Intro pages because shared responsive/tablet infrastructure identifies `.portfolio-root` as an eligible presentation canvas.

The shell imports:

```text
src/styles/intro-portfolio.scss
src/scripts/tablet-desktop-fit.js
```

The shared header separately uses `ResponsiveNavigation.astro`, which also imports the shared navigation/responsive scripts.

---

## 4. Experience Flow

The intended professional flow is:

```text
Hero
  ↓
About Me
  ↓
Education
  ↓
Work Experience
  ↓
Main Product Portfolio
  ↓
Detailed Project Case Studies
```

This is not enforced as a wizard or sequential application flow. Every page remains independently accessible through normal routes and navigation.

The Hero additionally exposes gateway cards to:

- About Me
- Education
- Work Experience
- Product Portfolio

---

## 5. Shared Header and Navigation

### 5.1 Header structure

`IntroHeader.astro` renders:

```text
Identity
Professional Profile Navigation
View Projects
PDF
```

The Intro header intentionally does **not** render the separate Home action used by the Main Product Portfolio and project case-study headers.

The identity itself serves as Home.

### 5.2 Identity

The brand/identity block contains:

- portrait: `/profile/portrait.jpg`;
- name: `Manoj Pant`;
- designation: `SENIOR PRODUCT MANAGER`;
- destination: `/`;
- accessible label: `Manoj Pant — introduction`.

On the Hero route, the identity receives:

```text
aria-current="page"
```

because there is no separate Hero item inside the four-item Intro navigation.

### 5.3 Professional-profile navigation

The navigation is generated from `navigation` in:

```text
src/data/intro-portfolio.js
```

Current order:

| Order | Navigation Item | Destination |
|---:|---|---|
| 1 | About Me | `/about/` |
| 2 | Education | `/education/` |
| 3 | Work Experience | `/experience/` |
| 4 | Product Portfolio | `/portfolio/` |

The current Intro page receives the active class and `aria-current="page"` where applicable.

### 5.4 Header actions

`HeaderActions.astro` is invoked as:

```text
href="/portfolio/#portfolio"
intro
```

For Intro pages this produces:

- View Projects → `/portfolio/#portfolio`
- Export Intro PDF

The normal HeaderActions Home button is suppressed when `intro={true}`.

### 5.5 Navigation destinations

| Intent | Destination |
|---|---|
| Identity / Home | `/` |
| About Me | `/about/` |
| Education | `/education/` |
| Work Experience | `/experience/` |
| Product Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |

---

## 6. Hero Page

### 6.1 Source

```text
src/components/intro/HeroPage.astro
```

Primary data:

```text
navigation
pillars
profile
```

from:

```text
src/data/intro-portfolio.js
```

### 6.2 Positioning

The Hero establishes the primary professional positioning.

Current visible identity/positioning includes:

```text
PRODUCT | DATA | AI | ENTERPRISE
```

Designation:

```text
SENIOR PRODUCT MANAGER
```

Primary positioning statement:

```text
Product leadership across enterprise platforms,
data, AI and digital transformation.
```

The authored profile narrative positions Manoj as a Senior Product Manager with 10+ years across:

- Product Management;
- Business Analysis;
- Data;
- FinTech;
- Healthcare;
- Telecom;
- enterprise technology environments.

The second narrative establishes the intersection of:

- business;
- technology;
- data;
- AI.

### 6.3 Hero visual composition

The page contains:

- full-width authored Hero environment;
- professional portrait;
- main positioning copy;
- four professional-focus pillars;
- four gateway cards.

The primary Hero portrait uses:

```text
/profile/portrait.png
```

with the authored alternative text:

```text
Manoj Pant wearing a grey suit
```

The Header uses the separate JPG portrait:

```text
/profile/portrait.jpg
```

These are intentionally separate source assets.

### 6.4 Professional pillars

Four records are supplied by `pillars`.

| Order | Pillar | Current Focus |
|---:|---|---|
| 1 | Product Leadership | Vision, roadmap, discovery, prioritization and lifecycle ownership |
| 2 | Data & Analytics | Product metrics, BI, KPI frameworks and data-informed decision making |
| 3 | AI & Automation | AI-assisted workflows, automation, document intelligence and emerging GenAI use cases |
| 4 | Enterprise Platforms | APIs, integrations, modular systems, compliance workflows and multi-stakeholder delivery |

### 6.5 Gateway cards

The Hero gateway cards reuse the shared `navigation` data.

| Gateway | Destination | Artwork |
|---|---|---|
| About Me | `/about/` | `/intro/hero/about-card-v1.png` |
| Education | `/education/` | `/intro/hero/education-card-v1.png` |
| Work Experience | `/experience/` | `/intro/hero/experience-card-v1.png` |
| Product Portfolio | `/portfolio/` | `/intro/hero/portfolio-card-v1.png` |

The artwork array and navigation array are positionally aligned.

Changing their order independently can attach the wrong artwork to a gateway.

---

## 7. About Me Page

### 7.1 Source

```text
src/components/intro/AboutPage.astro
```

Primary data:

```text
profile
journey
focus
principles
domains
```

### 7.2 Purpose

The About Me page explains the progression from analytics/reporting into Business Analysis and Product Management.

Its authored positioning emphasizes:

- data and reporting foundations;
- business understanding;
- product ownership;
- problem definition;
- solution shaping;
- cross-functional execution;
- business, technology, data, and product thinking.

### 7.3 Main journey

The page presents four career stages:

```text
Data & Reporting
      ↓
Business Analysis
      ↓
Product Management
      ↓
Senior Product Manager
```

Current journey records:

| Stage | Intent |
|---|---|
| Data & Reporting | Reporting, analytics, dashboards and business insight |
| Business Analysis | Business problems, requirements and process improvement |
| Product Management | Product vision, roadmap and execution |
| Senior Product Manager | Enterprise products, strategy, adoption and measurable outcomes |

### 7.4 What I Focus On

Eight authored focus areas are rendered:

1. Product vision, strategy and roadmap
2. Product analytics and KPI frameworks
3. Customer and stakeholder problem discovery
4. AI, automation and intelligent workflows
5. Enterprise workflow and platform products
6. Agile product delivery and release governance
7. API and system integrations
8. Adoption, efficiency and measurable business outcomes

### 7.5 How I Work

Five working principles are rendered:

| Principle | Intent |
|---|---|
| Problem-first | Start with the user, business problem and measurable outcome |
| Data-informed | Use metrics, operational data and stakeholder feedback |
| Technology-aware | Work with engineering across APIs, integrations, workflows, data flows and architecture |
| Cross-functional | Coordinate business, engineering, design, data, compliance, operations and leadership |
| Outcome-focused | Measure adoption, efficiency, risk reduction, cost improvement and business value |

### 7.6 Domains

Four domain cards are rendered:

1. FinTech & Banking
2. Healthcare
3. Telecom
4. CRM / Claims Automation

The current visible domain descriptions are not sourced exclusively from `domains`.

`AboutPage.astro` defines a `domainText` array that intentionally overrides some displayed copy.

Current behavior:

- FinTech & Banking → uses `domains[0].text`
- Healthcare → uses a literal About-page override
- Telecom → uses `domains[2].text`
- CRM / Claims Automation → uses a literal About-page override

Current About-specific Healthcare text includes:

```text
Doctor engagement, onboarding, payouts, field-force intelligence and healthcare operations.
```

Current About-specific CRM / Claims text includes:

```text
Workflow automation, OCR feasibility, APIs and claims-processing improvements.
```

Therefore, editing only `domains` in `intro-portfolio.js` does **not** guarantee that every visible About-page domain description changes.

### 7.7 About visual composition

The authored scene uses:

- local About environment;
- native `IntroArtwork` office composition;
- native mountain composition;
- professional portrait;
- handwritten `Curious / Analytical / Product-minded` treatment;
- three insight statements:
  - Understand Complex Problems
  - Design Practical Solutions
  - Create Measurable Impact

---

## 8. Education Page

### 8.1 Source

```text
src/components/intro/EducationPage.astro
```

Primary data:

```text
education
certifications
learning
```

### 8.2 Purpose

The Education page presents:

- academic background;
- professional certifications/courses;
- continuous-learning areas.

Continuous-learning entries are explicitly future-facing learning interests and must not be interpreted as completed certifications.

### 8.3 Academic credentials

Current records:

| Credential | Institution | Displayed Year |
|---|---|---|
| MBA – Business Analytics | Manipal Academy of Higher Education (MAHE) | 2024 – 2026 |
| BCA – Computer Program & Applications | Mansarovar Global University | 2018 |
| Software Engineering Diploma | NIIT | Not displayed |

The Software Engineering Diploma has an empty `year` value and therefore does not render a year.

### 8.4 Credential focus areas

#### MBA – Business Analytics

- Business Analytics
- Data Visualization
- Analytics-driven decision making
- Business and product problem solving

#### BCA – Computer Program & Applications

- Software and application concepts
- Databases
- Programming fundamentals
- Information technology

#### Software Engineering Diploma

- Software engineering
- Application development
- Programming concepts
- Technology fundamentals

### 8.5 Certifications

Eight authored records are rendered.

| # | Provider / Brand | Certification / Course |
|---:|---|---|
| 1 | Microsoft Certified | AI Product Manager |
| 2 | Google Certified | Project Management |
| 3 | Power BI brand | Advanced Analytics with Power BI |
| 4 | IBM | Exploratory Data Analysis for Machine Learning |
| 5 | Johns Hopkins University | Foundations of Data Visualization |
| 6 | IIBA | Business Analysis Foundations |
| 7 | IIBA | Studying for the Certified Business Analysis Professional (CBAP) |
| 8 | IIBA | What Is Business Analysis |

For the Power BI entry, the data record does not render a separate text provider. The associated visual brand is supplied through the parallel `certificationBrands` mapping.

`CertificationMark.astro` renders the certification/provider marks.

### 8.6 Certification mapping contract

`EducationPage.astro` maintains:

```text
credentialImages
certificationBrands
```

as index-aligned arrays.

Current certification-brand order:

```text
microsoft
google
powerbi
ibm
jhu
iiba
iiba
iiba
```

This order must remain aligned with the `certifications` data array.

### 8.7 Continuous Learning

Six learning areas are rendered:

1. AI Product Management
2. GenAI and Agentic Workflows
3. Product Strategy
4. Enterprise Architecture
5. Data Products
6. Project and Program Management

These records describe current/future learning interests, not additional completed qualifications.

---

## 9. Work Experience Page

### 9.1 Source

```text
src/components/intro/CareerTimeline.astro
```

Primary data:

```text
progression
experience
```

### 9.2 Career progression

Four progression stages appear before the detailed experience timeline:

```text
Reporting Analyst
      ↓
Business Analyst
      ↓
Product Manager
      ↓
Senior Product Manager
```

Current progression descriptions:

| Stage | Description |
|---|---|
| Reporting Analyst | Building the foundation in data and analytics |
| Business Analyst | Translating business needs to solutions |
| Product Manager | Driving product strategy and execution |
| Senior Product Manager | Leading multi-product platforms and client delivery |

### 9.3 Employment records

Five authored experience records are displayed.

| Company | Role | Period |
|---|---|---|
| M2P Solutions Ltd. | Senior Product Manager | Dec 2024 – Mar 2026 |
| Phoneme Solutions | Product Manager | Sep 2024 – Nov 2024 |
| Ayu Health | Product Manager | Mar 2023 – Aug 2024 |
| Nokia Networks | Business Analyst | Feb 2019 – Jan 2023 |
| Nokia Networks | Reporting Analyst | Jan 2016 – Jan 2019 |

The rendered page presents these records as historical authored content. It does not infer a current employer beyond the explicitly stored periods.

### 9.4 M2P Solutions Ltd.

**Role:** Senior Product Manager<br>
**Period:** Dec 2024 – Mar 2026

Current context:

- product vision;
- strategy;
- roadmap;
- multi-client delivery;
- 12+ application enterprise SaaS ecosystem;
- banking;
- payments;
- lending;
- automation.

Current selected impact:

- Improved execution efficiency by 25%
- Accelerated concept validation and prioritization by 15% with AI/GenAI
- Reduced integration complexity by 20%

Products / platforms / projects currently listed:

```text
Integrated Channels Suite;
LOS–LMS Platform;
UPI-Based Payments & Collections;
banking, lending, reconciliation and regulatory integrations.
```

### 9.5 Phoneme Solutions

**Role:** Product Manager<br>
**Period:** Sep 2024 – Nov 2024

Current scope includes:

- product requirements;
- feature prioritization;
- workflow optimization;
- PRDs / BRDs;
- user stories;
- functional specifications;
- API requirements;
- backlog alignment.

Current selected impact:

- Supported product execution across Business, Engineering and QA
- Contributed to AI-powered OCR product enhancements
- Improved claims workflow automation readiness

Current project description:

```text
CRM-enabled healthcare claims platform;
claims workflow optimization;
AI-powered OCR enhancements.
```

### 9.6 Ayu Health

**Role:** Product Manager<br>
**Period:** Mar 2023 – Aug 2024

Current context includes:

- Doctor Business vertical;
- product strategy;
- roadmap;
- delivery;
- Ayu DocConnect;
- Android and iOS;
- provider journeys;
- APIs;
- data flows.

Current selected impact:

- Contributed to 2X business growth
- Reduced customer acquisition cost by 35%
- Increased active doctor adoption from 40% to 75%

Current project description:

```text
Ayu DocConnect;
Healthcare Prior Authorization & Patient Care Platform;
provider journeys and payout automation.
```

### 9.7 Nokia Networks — Business Analyst

**Role:** Business Analyst<br>
**Period:** Feb 2019 – Jan 2023

Current context includes:

- analytics;
- enterprise BI;
- telecom process improvement;
- Power BI;
- Tableau;
- SQL;
- SAP Hybris;
- global programs.

Current selected impact:

- Improved project success by 15%
- Supported data-driven decisions across 7 market regions
- Reduced reporting turnaround by 25%

Current project description:

```text
Telecom Cost Optimization Platform;
Enterprise Reporting & Insights Platform;
procurement and OSS/BSS order management with SAP Hybris.
```

### 9.8 Nokia Networks — Reporting Analyst

**Role:** Reporting Analyst<br>
**Period:** Jan 2016 – Jan 2019

Current context includes:

- reporting;
- analytics;
- operational dashboards;
- performance metrics;
- data analysis;
- financial tracking.

Current project description:

```text
Network Rollout Financial Tracking & Monitoring;
operational reporting and business performance analysis.
```

### 9.9 Experience-card structure

Each detailed experience record renders four content areas:

1. Company / Role / Context
2. Key Scope
3. Selected Impact
4. Products / Platforms / Projects

Logo behavior:

```text
if logo path starts with "/"
    use it directly
else
    prefix with "/intro/logos/"
```

M2P therefore uses:

```text
/profile/m2p-logo.svg
```

while the other current company-logo records use assets under:

```text
/intro/logos/
```

---

## 10. Content and Data Source

The central Intro data file is:

```text
src/data/intro-portfolio.js
```

It currently exports:

| Collection | Purpose |
|---|---|
| `profile` | Contact/profile URLs and Hero portrait |
| `navigation` | Intro navigation and Hero gateway metadata |
| `pillars` | Four Hero professional-focus pillars |
| `journey` | Four About career-progression stages |
| `focus` | Eight About focus areas |
| `principles` | Five working principles |
| `domains` | Four professional-domain records |
| `education` | Three academic credentials |
| `certifications` | Eight certification/course records |
| `learning` | Six continuous-learning areas |
| `progression` | Four Work Experience progression stages |
| `experience` | Five detailed employment records |

Not every visible word on the Intro pages comes from this file.

Literal content also exists inside:

- `HeroPage.astro`
- `AboutPage.astro`
- `EducationPage.astro`
- `CareerTimeline.astro`

A text change must therefore be traced to its actual rendering source before editing.

---

## 11. Important Data / Rendering Contracts

The following mappings are position-sensitive and must remain synchronized.

### 11.1 Hero gateways

```text
navigation[index]
↔ gatewayArtwork[index]
```

Current count:

```text
4 navigation records
4 gateway artworks
```

### 11.2 Education credentials

```text
education[index]
↔ credentialImages[index]
```

Current count:

```text
3 education records
3 credential images
```

### 11.3 Certifications

```text
certifications[index]
↔ certificationBrands[index]
```

Current count:

```text
8 certification records
8 brand mappings
```

### 11.4 Experience logos

Absolute logo paths are used directly.

Relative logo filenames are resolved under:

```text
/intro/logos/
```

### 11.5 About domain copy

The About page has literal `domainText` overrides.

Changing `domains` alone may not update Healthcare or CRM / Claims visible text.

### 11.6 Hero alias

Both:

```text
/
```

and:

```text
/intro/
```

must continue rendering the same:

```text
IntroShell + HeroPage
```

unless the alias is intentionally redesigned or removed.

---

## 12. Component Map

All paths below are relative to the repository root.

| Component / File | Responsibility |
|---|---|
| `src/pages/index.astro` | Root Hero route |
| `src/pages/intro/index.astro` | Hero alias route |
| `src/pages/about/index.astro` | About route adapter |
| `src/pages/education/index.astro` | Education route adapter |
| `src/pages/experience/index.astro` | Work Experience route adapter |
| `src/components/intro/IntroShell.astro` | Shared Intro wrapper, SiteLayout, skip link, header and main canvas |
| `src/components/intro/IntroHeader.astro` | Shared identity, Intro navigation and header actions |
| `src/components/intro/HeroPage.astro` | Hero positioning, portrait, pillars and gateways |
| `src/components/intro/AboutPage.astro` | Journey, focus, principles, domains and About visual composition |
| `src/components/intro/EducationPage.astro` | Academic credentials, certifications and continuous learning |
| `src/components/intro/CareerTimeline.astro` | Career progression and employment timeline |
| `src/components/intro/IntroIcon.astro` | Intro-specific native icon rendering |
| `src/components/intro/IntroArtwork.astro` | Native decorative/compositional artwork |
| `src/components/intro/CertificationMark.astro` | Certification/provider marks |
| `src/components/HeaderActions.astro` | View Projects and PDF controls for Intro; shared actions elsewhere |
| `src/components/ResponsiveNavigation.astro` | Responsive Menu control and shared menu behavior |
| `src/components/SavePdf.astro` | Intro PDF trigger and busy/error handling |
| `src/data/intro-portfolio.js` | Primary Intro authored data |
| `src/styles/intro-portfolio.scss` | Shared Intro header and all four page layouts |
| `src/scripts/tablet-desktop-fit.js` | Tablet desktop-basis mirroring/scaling |
| `src/scripts/save-portfolio-pdf.js` | Four-page Intro print/PDF preparation |

---

## 13. Production Assets

All live Intro assets remain under `public/`.

Runtime URLs omit the `public` prefix.

### 13.1 Profile assets

```text
public/profile/portrait.jpg
public/profile/portrait.png
public/profile/m2p-logo.svg
```

Runtime usage:

| Asset | Usage |
|---|---|
| `/profile/portrait.jpg` | Shared Intro header portrait |
| `/profile/portrait.png` | Hero/About professional portrait |
| `/profile/m2p-logo.svg` | M2P Work Experience logo |

### 13.2 Hero assets

```text
public/intro/hero/hero-scene-v1.png
public/intro/hero/about-card-v1.png
public/intro/hero/education-card-v1.png
public/intro/hero/experience-card-v1.png
public/intro/hero/portfolio-card-v1.png
```

### 13.3 About assets

```text
public/intro/about/about-scene-v1.png
public/intro/about/banking-v1.png
public/intro/about/healthcare-v1.png
public/intro/about/telecom-v1.png
public/intro/about/claims-v1.png
```

### 13.4 Education assets

```text
public/intro/education/education-hero-v1.png
public/intro/education/education-campus-v1.png
public/intro/education/education-computing-v1.png
public/intro/education/education-software-v1.png
```

### 13.5 Experience logos

```text
public/intro/logos/Phoneme_logo.png
public/intro/logos/ayu_health_logo.jpeg
public/intro/logos/nokia-logo.png
```

There are no visual-reference screenshots stored under `docs/references/`.

Documentation remains Markdown-only.

Production assets must remain under `public/`.

---

## 14. Styling and Visual Architecture

The Intro Experience uses:

```text
src/styles/intro-portfolio.scss
```

The stylesheet is explicitly scoped to Intro routes and is intended to leave the Main Product Portfolio styles authoritative outside the Intro experience.

Primary Intro visual tokens include:

- Segoe UI / Arial system typography;
- dark navy text;
- blue/teal/purple/orange/pink/gold accent families;
- pastel supporting surfaces;
- gradient headings;
- native CSS/Grid/Flexbox;
- local PNG artwork;
- native SVG/icon components.

### Shared header

The Intro header uses:

- sticky positioning;
- dark blue gradient background;
- white identity/navigation text;
- shared View Projects/PDF controls;
- active navigation treatment;
- stable desktop geometry across all four Intro pages.

Page-specific content may vary, but page-specific CSS should not independently reposition or resize the shared Intro header.

---

## 15. Desktop Layout

Desktop behavior is defined at:

```text
min-width: 1280px
```

The principal desktop baseline is:

```text
1280 × 665
```

The Intro root defines:

```text
--intro-header-h: clamp(72px, 6.2vw, 120px)
```

The Intro header uses:

```text
height: var(--intro-header-h)
```

The main content area uses:

```text
height: calc(100dvh - var(--intro-header-h))
```

Desktop header geometry is based on a full-viewport inner grid.

Current desktop grid:

```text
Identity
Professional Navigation
Actions
```

The professional navigation uses four items in one desktop row.

Header spacing and action capacity were deliberately stabilized so that active-state changes and page scrollbar differences do not shift the shared header geometry between Hero, About, Education, and Work Experience.

---

## 16. Tablet Behaviour

Tablet range:

```text
768px – 1279px
```

The Intro experience reuses:

```text
src/scripts/tablet-desktop-fit.js
```

The script treats the existing desktop presentation as the authored basis:

```text
1280 × 665
```

and proportionally fits it into the available tablet viewport.

Important behavior:

- the current desktop cascade remains the authored layout basis;
- viewport-based CSS values are converted against the desktop basis;
- applicable desktop media rules are mirrored;
- the canvas is proportionally scaled;
- route content is not rebuilt as a separate tablet implementation;
- original stylesheets remain authoritative outside the tablet fitting range.

The Intro root intentionally carries the `portfolio-root` class so that it is detected by this shared fitting system.

Do not introduce a second independent tablet-scaling architecture unless explicitly approved.

---

## 17. Mobile Behaviour

Native mobile behavior applies below:

```text
768px
```

The Intro stylesheet defines route-specific mobile flow rather than attempting to retain the full fixed desktop composition.

Mobile behavior includes:

- compact sticky header;
- smaller identity portrait and typography;
- Menu control;
- two-column expanded Intro navigation;
- vertically flowing page content;
- hidden desktop-only line breaks;
- stacked/reflowed Hero, About, Education, and Work Experience sections;
- mobile-specific card and artwork arrangements.

The shared Menu closes when:

- a navigation link is selected;
- Escape is pressed;
- the user clicks outside the header;
- the compact media-query state changes.

---

## 18. Accessibility and Interaction

### 18.1 Skip navigation

`IntroShell.astro` includes:

```text
Skip to content
```

targeting:

```text
#intro-main
```

The skip link becomes visible when focused.

### 18.2 Header navigation

The shared navigation provides:

- `aria-label="Professional profile"`;
- `aria-current="page"` on the active Intro navigation item;
- Hero-page `aria-current="page"` on the identity link.

### 18.3 Responsive Menu

`ResponsiveNavigation.astro` provides:

```text
aria-controls
aria-expanded
```

The Menu supports:

- click toggle;
- Escape close;
- outside-click close;
- close after selecting a navigation link;
- focus return to Menu after Escape.

### 18.4 Focus visibility

Intro links define explicit `:focus-visible` treatment.

Header actions and the PDF control also define focus-visible outlines.

### 18.5 Images

Meaningful images retain authored alternatives where required.

Examples:

```text
Header portrait → "Manoj Pant"
Hero portrait → "Manoj Pant wearing a grey suit"
Experience logos → "<Company> logo"
```

Decorative artwork generally uses empty alternative text and/or `aria-hidden`.

### 18.6 PDF state

The Intro PDF button uses:

```text
aria-label="Export Intro PDF"
title="Export Intro PDF"
```

While export preparation is running it receives:

```text
disabled
aria-busy="true"
```

### 18.7 Known navigation limitation

The compact navigation remains JavaScript-dependent.

Below the collapse breakpoint, the navigation is hidden until the JavaScript-driven `navigation-open` state is applied.

The repository QA review classified this as:

```text
VALID BUT LOW PRACTICAL IMPACT
```

and it remains intentionally deferred.

It must not be documented as resolved.

No formal accessibility certification follows from the source-level accessibility behavior described above.

---

## 19. Intro PDF / Export Behaviour

### 19.1 Trigger

The shared PDF control is rendered by:

```text
SavePdf.astro
```

with:

```text
intro={true}
```

Visible/accessible label:

```text
Export Intro PDF
```

### 19.2 Export routes

Intro mode uses exactly:

```text
/
 /about/
 /education/
 /experience/
```

in this order:

1. Hero
2. About Me
3. Education
4. Work Experience

`/intro/` is intentionally **not** an Intro PDF source.

### 19.3 Export preparation

`savePortfolioPdf({ intro: true })`:

1. fetches fresh HTML for all four routes;
2. parses each response;
3. removes scripts and module-preload links from the print source;
4. confirms that each route contains an Intro presentation;
5. merges route-specific stylesheet content;
6. creates a hidden same-origin print iframe;
7. waits for fonts and images;
8. freezes responsive media behavior against the desktop print basis;
9. prepares four presentation pages;
10. opens the browser print dialog.

Expected page count:

```text
4
```

If four Intro canvases are not found, export preparation fails instead of silently producing an incomplete document.

### 19.4 Print basis

The print preparation uses:

```text
1280 × 665
```

for each Intro page.

Intro mode intentionally retains the designed Intro header.

The Intro export button itself is hidden from the printed output.

### 19.5 Output model

The site does not generate or store a PDF on a backend.

The workflow is:

```text
Prepare print document
    ↓
Open browser print dialog
    ↓
User selects Save as PDF
```

Actual PDF pagination/render fidelity therefore depends partly on the browser print environment and must be validated separately from source inspection.

---

## 20. Maintenance Rules

When changing the Intro Experience:

1. Preserve the four-page route structure unless a routing change is explicitly requested.
2. Keep `/` and `/intro/` aligned while `/intro/` remains the Hero alias.
3. Treat `navigation` as shared data used by both the Header and Hero gateways.
4. Keep `navigation` and `gatewayArtwork` in the same order.
5. Keep `education` and `credentialImages` index-aligned.
6. Keep `certifications` and `certificationBrands` index-aligned.
7. Check About-page literal `domainText` overrides before changing domain descriptions.
8. Search literal Astro markup as well as `intro-portfolio.js` before assuming text ownership.
9. Preserve experience logo path behavior when adding/changing company logos.
10. Keep production assets under `public/`.
11. Do not add documentation screenshots or visual-reference assets under `docs/references/`.
12. Preserve the existing desktop/tablet/mobile architecture unless responsive behavior is explicitly being redesigned.
13. Do not create page-specific Intro header geometry that causes alignment differences between the four Intro pages.
14. Preserve the four Intro PDF routes and expected page count unless export scope is intentionally changed.
15. Treat professional facts, dates, roles, metrics, certifications, and project claims as authored content; do not silently reconcile or rewrite them without approval.

---

## 21. Important Source Relationships

The primary source relationships are:

```text
src/data/intro-portfolio.js
        ↓
HeroPage
AboutPage
EducationPage
CareerTimeline
IntroHeader
```

with shared infrastructure:

```text
IntroShell
    ↓
SiteLayout
    ↓
IntroHeader
    ↓
HeaderActions
    ↓
ResponsiveNavigation
    ↓
SavePdf
```

and styling/export infrastructure:

```text
intro-portfolio.scss
tablet-desktop-fit.js
save-portfolio-pdf.js
portfolio-print.css
```

A change to a shared file can affect more than one Intro route.

---

## 22. Known Implementation Considerations

### Shared data does not control all visible copy

Several headings, descriptions, diagrams, labels, and supporting narratives are literal Astro markup.

Always locate the exact rendered string before editing.

### Main Portfolio and Intro content are independently authored

The Product Portfolio gateway links to `/portfolio/`, but detailed Main Product Portfolio content is not sourced from `intro-portfolio.js`.

Changes to Intro positioning do not automatically update Main Portfolio content.

### Experience data is static

The Work Experience page does not calculate tenure from the current date.

Displayed periods and claims come directly from authored records.

### Certifications are static records

The site does not query Microsoft, Google, IBM, Johns Hopkins, IIBA, or any credential-verification API.

### Local assets are authoritative for current rendering

The active Intro imagery comes from `public/` and native source components.

Do not substitute documentation assets or historical visual references.

---

## 23. Validation Status

Current implementation reference is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

The current source confirms:

| Area | Status |
|---|---|
| Root Hero route | Confirmed |
| `/intro/` Hero alias | Confirmed |
| About route | Confirmed |
| Education route | Confirmed |
| Work Experience route | Confirmed |
| Shared IntroShell architecture | Confirmed |
| Shared IntroHeader navigation | Confirmed |
| Product Portfolio destination | Confirmed |
| View Projects destination | Confirmed |
| Four-page Intro PDF route list | Confirmed |
| Local Intro production assets | Confirmed |
| Desktop/tablet/mobile source architecture | Confirmed |
| Responsive Menu source behavior | Confirmed |
| Deferred no-JavaScript navigation fallback | Still deferred |

The final routing/header implementation associated with this source state previously recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

These technical checks confirm build/source integrity for that recorded implementation state.

They do **not** by themselves certify:

- current pixel-perfect visual alignment;
- every desktop resolution;
- every tablet/mobile device;
- native browser zoom;
- complete keyboard/runtime behavior;
- assistive-technology behavior;
- formal accessibility compliance;
- final PDF print fidelity.

Those require their own runtime validation when relevant to a future change.

For repository-wide QA findings and status, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

For repository-wide architecture and implementation constraints, see:

[08-project-context.md](08-project-context.md)
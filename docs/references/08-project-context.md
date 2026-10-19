# Project Context

Repository-wide implementation, architecture, routing, navigation, data, responsive, export, accessibility, QA, asset, deployment, and maintenance context for the professional Product Management portfolio.

---

## 1. Purpose

This document provides the repository-wide context needed before making changes that can affect more than one page or project.

It explains:

- what the portfolio represents;
- the current route architecture;
- how the Intro Experience, Main Product Portfolio, and project case studies relate;
- shared layouts and components;
- navigation behavior;
- data/content ownership;
- styling architecture;
- production assets;
- responsive behavior;
- PDF/export architecture;
- accessibility/interaction behavior;
- repository QA status;
- source-of-truth rules;
- development constraints;
- deployment context;
- maintenance boundaries.

Project-specific details remain in their dedicated reference documents.

---

## 2. Current Source Baseline

Current documentation is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Repository origin:

```text
https://github.com/mapant/mapant.github.io.git
```

Public site:

```text
https://mapant.github.io/
```

Local repository path used during development:

```text
C:\Users\Manoj Pant\GitHub\manoj-product-portfolio
```

The application source remains authoritative for implementation behavior.

Documentation updates created after the implementation commit may remain uncommitted until manually reviewed and committed.

---

## 3. Repository Purpose

This repository contains Manoj Pant's professional Product Management portfolio website.

The portfolio presents experience across:

- Product Management;
- Business Analysis;
- data and analytics;
- AI / GenAI;
- workflow automation;
- enterprise platforms;
- FinTech / Banking;
- Healthcare;
- Telecom;
- CRM / Claims Automation;
- technical product delivery;
- API and integration environments.

The portfolio is intended to position Manoj as a:

```text
Senior Product Manager
```

with broad enterprise and cross-domain experience.

It must not position the professional profile as exclusively:

- FinTech;
- Healthcare;
- Telecom;
- Analytics.

The cross-domain progression is an important part of the portfolio narrative.

---

## 4. Professional Narrative

The overall portfolio experience follows:

```text
Professional Identity
        ↓
Background & Career Progression
        ↓
Education & Learning
        ↓
Work Experience
        ↓
Product Management Narrative
        ↓
Detailed Product Case Studies
```

The professional progression represented across the Intro Experience is:

```text
Reporting Analyst
        ↓
Business Analyst
        ↓
Product Manager
        ↓
Senior Product Manager
```

The portfolio connects this progression to capabilities such as:

- product strategy;
- roadmap;
- discovery;
- requirements;
- solution design;
- technical collaboration;
- analytics;
- architecture understanding;
- AI / automation;
- APIs and integrations;
- stakeholder management;
- delivery governance;
- product metrics;
- measurable outcomes.

---

## 5. Portfolio Experience Architecture

The website is organized into three primary experience layers.

```text
Intro Experience
        ↓
Main Product Portfolio
        ↓
Detailed Project Case Studies
```

### Intro Experience

Four principal pages:

1. Hero
2. About Me
3. Education
4. Work Experience

### Main Product Portfolio

Ten sections:

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

### Detailed Project Case Studies

Four projects:

1. Integrated Channels
2. Ayu DocConnect
3. Ayu Sales Intelligence
4. Telecom Cost Optimization

---

## 6. Current Route Architecture

| # | Page / Experience | Route | Primary Source |
|---:|---|---|---|
| 1 | Hero | `/` | `src/pages/index.astro` |
| 2 | Hero alias | `/intro/` | `src/pages/intro/index.astro` |
| 3 | About Me | `/about/` | `src/pages/about/index.astro` |
| 4 | Education | `/education/` | `src/pages/education/index.astro` |
| 5 | Work Experience | `/experience/` | `src/pages/experience/index.astro` |
| 6 | Main Product Portfolio | `/portfolio/` | `src/pages/portfolio/index.astro` |
| 7 | Integrated Channels | `/projects/integrated-channels/` | `src/pages/projects/integrated-channels.mdx` |
| 8 | Ayu DocConnect | `/projects/ayu-docconnect/` | `src/pages/projects/ayu-docconnect.mdx` |
| 9 | Ayu Sales Intelligence | `/projects/ayu-sales-intelligence/` | `src/pages/projects/ayu-sales-intelligence.mdx` |
| 10 | Telecom Cost Optimization | `/projects/telecom-cost-optimization/` | `src/pages/projects/telecom-cost-optimization.mdx` |

Current route hierarchy:

```text
/
├── /intro/
├── /about/
├── /education/
├── /experience/
├── /portfolio/
│
├── /projects/integrated-channels/
├── /projects/ayu-docconnect/
├── /projects/ayu-sales-intelligence/
└── /projects/telecom-cost-optimization/
```

---

## 7. Route Ownership

The route types have different implementation owners.

### Intro routes

Implemented through:

```text
IntroShell.astro
+
route-specific Intro components
```

### Main Product Portfolio

Implemented through:

```text
PortfolioLayout.astro
+
10 section components
```

### Project routes

Implemented through:

```text
MDX route adapter
+
project-specific Astro wrapper
+
ProjectShell.astro
```

The short project MDX files are mainly route adapters.

The detailed product content usually lives in Astro components rather than MDX prose.

---

## 8. Root Route Migration

The current architecture is:

```text
/           → Hero
/portfolio/ → Main Product Portfolio
```

Historically, the Main Product Portfolio occupied `/`.

During the migration:

```text
/intro/
```

was used as the Intro landing route before Hero ultimately moved to `/`.

Current intended behavior:

```text
/        = primary Hero
/intro/  = Hero alias
```

Normal Home and identity navigation should use:

```text
/
```

For full migration history, see:

[09-github-pages-routing-migration.md](09-github-pages-routing-migration.md)

---

## 9. Technology Stack

The site is built with:

```text
Astro
MDX
SCSS / CSS
HTML
Native SVG
Plain Browser JavaScript
```

Current source does not use:

- React;
- Vue;
- Angular;
- Tailwind;
- a client-side SPA router;
- a CMS;
- a backend application server;
- authentication;
- a production database;
- portfolio-specific server APIs.

The portfolio is statically generated.

---

## 10. Package / Runtime Context

The repository declares Node support for:

```text
^22.12.0 || ^24.0.0
```

Declared direct dependencies include:

```text
astro
@astrojs/mdx
sass
```

Previously inspected source state recorded:

```text
Astro declared:       ^7.3.5
MDX declared:         ^8.0.2
Sass declared:        ^1.93.2
```

The inspected lockfile resolved:

```text
Astro: 7.3.5
MDX:   8.0.2
Sass:  1.105.1
```

CI uses:

```text
Node 22.12.0
```

The lockfile should be retained for reproducible installs.

---

## 11. Astro Configuration

Primary configuration:

```text
astro.config.mjs
```

Current architectural characteristics include:

```text
site: https://mapant.github.io
static output
MDX integration
directory-format build
no repository-subpath base
```

This architecture supports root deployment to:

```text
https://mapant.github.io/
```

rather than deployment beneath a repository-name subpath.

---

## 12. Static Rendering Model

Astro renders the site to static HTML.

Typical flow:

```text
Astro Source
        ↓
Build
        ↓
Static HTML / CSS / JS
        ↓
GitHub Pages
```

Browser JavaScript is used only where interaction is required, such as:

- section active-state tracking;
- responsive Menu;
- relationship/connector adjustments;
- tablet desktop fitting;
- Integrated Channels modal;
- Sales Intelligence dialogs;
- Connect form/mailto preparation;
- PDF print preparation.

There is no client-side application router.

---

## 13. Shared Layout Architecture

The layout hierarchy includes:

```text
SiteLayout.astro
PortfolioLayout.astro
IntroShell.astro
ProjectShell.astro
```

Each has a different responsibility.

---

## 14. `SiteLayout.astro`

Primary shared document owner:

```text
src/layouts/SiteLayout.astro
```

Responsibilities include:

- HTML document structure;
- document language;
- metadata;
- viewport configuration;
- title;
- favicon;
- body slot.

All major experiences ultimately render inside `SiteLayout`.

Changes here have repository-wide impact.

---

## 15. `PortfolioLayout.astro`

Primary source:

```text
src/layouts/PortfolioLayout.astro
```

This is a lightweight wrapper around:

```text
SiteLayout.astro
```

for the Main Product Portfolio.

The Main Portfolio itself is composed in:

```text
src/pages/portfolio/index.astro
```

---

## 16. `IntroShell.astro`

Primary source:

```text
src/components/intro/IntroShell.astro
```

Used by:

- Hero;
- Hero alias;
- About;
- Education;
- Work Experience.

Responsibilities include:

- SiteLayout integration;
- Intro root wrapper;
- skip link;
- IntroHeader;
- `main#intro-main`;
- route-specific Intro content.

See:

[01-intro-experience-reference.md](01-intro-experience-reference.md)

---

## 17. `ProjectShell.astro`

Primary source:

```text
src/components/ProjectShell.astro
```

Used by all four detailed project routes.

Responsibilities include:

- project Header;
- identity;
- project-specific section navigation;
- active section observer;
- Header actions;
- optional shared project footer;
- project profile image;
- viewport-fit configuration.

Changes to `ProjectShell.astro` can affect all four project case studies.

---

## 18. Header Architecture

There are two primary Header implementations.

### Intro Header

```text
src/components/intro/IntroHeader.astro
```

Used by Intro pages.

### Main / Project Header

```text
src/components/Header.astro
src/components/ProjectShell.astro
```

Used for the Main Product Portfolio and project case studies.

Shared action components include:

```text
HeaderActions.astro
ResponsiveNavigation.astro
SavePdf.astro
```

---

## 19. Navigation Model — Intro Experience

Current Intro Header order:

```text
Identity
About Me
Education
Work Experience
Product Portfolio
View Projects
PDF
```

Destinations:

| Control | Destination |
|---|---|
| Identity | `/` |
| About Me | `/about/` |
| Education | `/education/` |
| Work Experience | `/experience/` |
| Product Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| PDF | Intro print/PDF workflow |

The Intro Header intentionally has no separate Home action.

The identity itself serves as Home.

---

## 20. Navigation Model — Main Product Portfolio

Current Main Portfolio Header order:

```text
Identity
10 Section Links
Home
View Projects
PDF
```

Destinations:

| Control | Destination |
|---|---|
| Identity | `/` |
| Home | `/` |
| View Projects | local `#portfolio` |
| Resolved View Projects URL | `/portfolio/#portfolio` |
| PDF | Portfolio print/PDF workflow |

The section links remain local anchors on:

```text
/portfolio/
```

---

## 21. Navigation Model — Project Case Studies

Current project Header order:

```text
Identity
Project Section Navigation
Home
Back to Portfolio
View Projects
PDF
```

Destinations:

| Control | Destination |
|---|---|
| Identity | `/` |
| Home | `/` |
| Back to Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| PDF | Project print/PDF workflow |

Project-specific section anchors remain owned by each project.

---

## 22. Four-Project Navigation Loop

Current project sequence:

```text
Integrated Channels
        ↓
Ayu DocConnect
        ↓
Ayu Sales Intelligence
        ↓
Telecom Cost Optimization
        ↓
Integrated Channels
```

Current previous/next relationships:

| Project | Previous | Next |
|---|---|---|
| Integrated Channels | Telecom Cost Optimization | Ayu DocConnect |
| Ayu DocConnect | Integrated Channels | Ayu Sales Intelligence |
| Ayu Sales Intelligence | Ayu DocConnect | Telecom Cost Optimization |
| Telecom Cost Optimization | Ayu Sales Intelligence | Integrated Channels |

Any project-order change requires coordinated updates across project navigation.

---

## 23. Known Navigation Exception

Current source exception:

```text
src/components/SalesIntelligenceOutcomes.astro
```

contains:

```text
Let’s Connect → /#connect
```

Current active Connect destination is:

```text
/portfolio/#connect
```

Current status:

```text
KNOWN
UNRESOLVED
```

This documentation records the discrepancy.

It does not change production source.

See:

[05-ayu-sales-intelligence-reference.md](05-ayu-sales-intelligence-reference.md)

and:

[07-repository-qa-report.md](07-repository-qa-report.md)

---

## 24. Active Section Navigation

The Main Product Portfolio uses:

```text
src/scripts/navigation.js
```

for active section tracking.

The script uses:

```text
IntersectionObserver
```

and responds to:

- section visibility;
- navigation clicks;
- hash changes.

Project routes use the observer implemented through:

```text
ProjectShell.astro
```

Navigation scripts track active links.

They do **not** scale the page.

---

## 25. Responsive Navigation

Shared compact navigation is implemented through:

```text
src/components/ResponsiveNavigation.astro
```

Behavior includes:

- Menu toggle;
- `aria-expanded`;
- `aria-controls`;
- Escape close;
- outside-click close;
- close after selecting a navigation item;
- focus return after Escape.

The component also participates in shared responsive architecture by importing:

```text
responsive-relationships.js
tablet-desktop-fit.js
```

where applicable.

---

## 26. Known Responsive Navigation Limitation

At collapsed widths, navigation visibility depends on JavaScript.

Current dependency:

```text
JavaScript initializes
        ↓
Menu state can change
        ↓
navigation-open exposes links
```

If JavaScript is unavailable or initialization fails, the compact links cannot be revealed.

Repository QA classification:

```text
VALID BUT LOW PRACTICAL IMPACT
```

Current status:

```text
DEFERRED
```

Do not document this issue as resolved.

---

## 27. Main Product Portfolio Architecture

Main route:

```text
src/pages/portfolio/index.astro
```

Current composition:

```text
Overview
Ecosystem
Challenge
Strategy
PMScope
Metrics
Portfolio
TechData
Outcomes
Connect
```

Section components live under:

```text
src/components/sections/
```

Primary data source:

```text
src/data/portfolio.js
```

See:

[02-main-portfolio-reference.md](02-main-portfolio-reference.md)

---

## 28. Main Portfolio Data Collections

`src/data/portfolio.js` exports twelve named collections:

```text
navItems
expertise
ecosystemCards
challengeCards
strategySteps
scopeCards
metricGroups
metricFormulas
products
techLayers
outcomes
connectFocus
```

These are local authored data.

They are not fetched from:

- a CMS;
- APIs;
- remote JSON;
- a database.

---

## 29. Main Portfolio Content Ownership

Not all Main Portfolio text is stored in:

```text
portfolio.js
```

Visible content also exists literally in:

```text
Overview.astro
Ecosystem.astro
Challenge.astro
Strategy.astro
PMScope.astro
Metrics.astro
Portfolio.astro
TechData.astro
Outcomes.astro
Connect.astro
```

Therefore:

```text
Data file
≠
complete content source
```

Before editing a visible phrase, search for the exact string.

---

## 30. Main Portfolio Product Contract

Each project summary in:

```text
products
```

contains fields including:

| Field | Purpose |
|---|---|
| `number` | Project sequence |
| `company` | Company/domain label |
| `title` | Product title |
| `short` | Short description |
| `problem` | Problem statement |
| `ownership` | Ownership narrative |
| `outcome` | Outcome statement |
| `stats` | Summary statistics |
| `tags` | Domain/capability tags |
| `url` | Detailed case-study route |
| `tint` | Visual theme |

The Main Portfolio card is independently authored from the corresponding detailed case study.

---

## 31. Project Detail Content Ownership

The four projects use different content patterns.

### Integrated Channels

Primary detail sources:

```text
IntegratedChannelsCaseStudy.astro
IntegratedChannelsPresentation.astro
```

Canonical applications stored in:

```text
APPS
```

### Ayu DocConnect

Primary detail source:

```text
DocConnectCaseStudy.astro
```

with local arrays and literal content.

### Ayu Sales Intelligence

Content split across:

```text
SalesIntelligencePresentation.astro
SalesIntelligenceManagement.astro
SalesIntelligenceWorkspaces.astro
SalesIntelligenceOutcomes.astro
```

### Telecom Cost Optimization

Detailed content is largely literal inside:

```text
NokiaAnalyticsCaseStudy.astro
```

There is no universal project-content schema.

---

## 32. Main Portfolio vs Detailed Project Synchronization

The Main Product Portfolio and detailed project pages do **not** automatically synchronize.

A project update may require checking:

```text
Main Portfolio card
Detailed project content
Project navigation
Previous / next links
Metrics
Titles
Outcome wording
Routes
```

Do not assume changing one source updates another.

---

## 33. Metric Ownership and Qualification

Portfolio metrics are authored professional content.

They are not runtime calculations.

Current Main Product Portfolio outcome examples include:

```text
40% → 75%
Doctor adoption

10 → 2 days
Provider payout turnaround

25%
Manual compliance effort reduction

20%
Manual reconciliation reduction

30%
Manual claim processing reduction

25%
Telecom operating-cost reduction
```

Do not invent additional values.

Do not infer additional percentages.

---

## 34. Independent Project Metrics

Detailed case studies contain their own scope-specific metrics.

### Ayu DocConnect

Current detailed metrics include:

```text
1,150+ Doctors installed / logged in
400+ Monthly active users
170+ Weekly active users
27+ Doctor referrals in pilot
7 Newly onboarded doctors through referral flow
```

### Ayu Sales Intelligence

Two-BDM Bengaluru manual pilot:

```text
+60%  Unique visits · BDM A
+166% Unique visits · BDM B

−18% Distance per visit · BDM A
−15% Distance per visit · BDM B
```

### Telecom

Detailed result:

```text
15%–20% CapEx / OpEx savings
```

These values must retain their existing:

- population;
- scope;
- sign;
- range;
- wording.

---

## 35. Known Telecom Metric Distinction

The Main Product Portfolio Outcomes contains:

```text
25% telecom operating-cost reduction
```

while the detailed Telecom case study and project card use:

```text
15%–20% cost savings
```

These are currently separate authored claims.

Current documentation does **not** reconcile them.

Do not silently normalize one value to the other.

Any future reconciliation requires explicit confirmation of:

- metric definition;
- source;
- population;
- time period;
- cost category;
- measurement basis.

---

## 36. Static Product Representation Boundary

The portfolio contains visual references to technologies, systems, and enterprise workflows.

These references describe professional/product context.

They do **not** mean the website itself connects to those systems.

Examples include:

- Core Banking;
- NPCI;
- UPI;
- AEPS;
- CIBIL;
- CKYC;
- GST;
- AML / KYC;
- SQL;
- PostgreSQL;
- Python;
- Power BI;
- Tableau;
- Looker Studio;
- GA / Mixpanel;
- Maps;
- WhatsApp;
- Frappe;
- microservices;
- cloud infrastructure.

The portfolio is a static representation.

---

## 37. Shared Component Architecture

Important shared components include:

| Component | Responsibility |
|---|---|
| `SiteLayout.astro` | Common HTML document |
| `PortfolioLayout.astro` | Main Portfolio wrapper |
| `IntroShell.astro` | Intro Experience wrapper |
| `IntroHeader.astro` | Intro navigation/header |
| `Header.astro` | Main Portfolio Header |
| `ProjectShell.astro` | Shared project wrapper/header |
| `HeaderActions.astro` | Home / Back / View Projects / PDF actions |
| `ResponsiveNavigation.astro` | Compact Menu behavior |
| `SavePdf.astro` | Browser print/PDF trigger |
| `PortfolioIcon.astro` | Main Portfolio icon vocabulary |
| `PortfolioDiagram.astro` | Main Portfolio native diagrams |
| `PortfolioIllustration.astro` | Main Portfolio illustrations |

Changes to shared components require broader regression consideration.

---

## 38. Project-Specific Component Architecture

### Integrated Channels

```text
IntegratedChannelsCaseStudy.astro
IntegratedChannelsPresentation.astro
IntegratedChannelsIcon.astro
IntegratedChannelsBrandMark.astro
```

### Ayu DocConnect

```text
DocConnectCaseStudy.astro
AyuHealthBrand.astro
DocConnectIcon.astro
DocConnectLandscape.astro
```

### Ayu Sales Intelligence

```text
SalesIntelligencePresentation.astro
SalesIntelligenceManagement.astro
SalesIntelligenceWorkspaces.astro
SalesIntelligenceOutcomes.astro
SalesIntelligenceStory.astro
SalesIntelligencePhone.astro
SalesIntelligenceMap.astro
SalesIntelligenceIllustration.astro
SalesIntelligenceIcon.astro
```

### Telecom

```text
NokiaAnalyticsCaseStudy.astro
```

Telecom relies primarily on native markup/SVG/CSS rather than a separate component family.

---

## 39. Important Active vs Legacy Distinction

Some repository files may resemble active implementations but are not the current route owner.

Examples include the older:

```text
src/scripts/integrated-channels.js
```

which is **not** the active Integrated Channels workspace implementation.

The active workspace logic lives inline in:

```text
IntegratedChannelsCaseStudy.astro
```

Other generic/legacy case-study structures may also exist.

Do not edit a similarly named legacy file without confirming that the current route imports or executes it.

---

## 40. Styling Architecture

The site uses multiple style ownership layers.

Important shared files include:

```text
src/styles/portfolio.scss
src/styles/page-view.scss
src/styles/project-case-study.scss
src/styles/portfolio-print.css
src/styles/intro-portfolio.scss
```

Project-specific styles include:

```text
src/styles/integrated-channels-case-study.scss
src/styles/docconnect-case-study.scss
src/styles/docconnect-overview-prototype.scss
src/styles/docconnect-reference-layout.scss
src/styles/ayu-sales-intelligence-case-study.scss
src/styles/nokia-analytics-case-study.scss
```

Final rendering depends on the combined CSS cascade.

---

## 41. `portfolio.scss`

Primary responsibility:

```text
Main Product Portfolio
```

It contains:

- base palette;
- typography;
- Header foundations;
- ten section designs;
- responsive rules;
- project-related shared foundations inherited historically.

It also contains older/base layout rules that can be overridden later by:

```text
page-view.scss
```

Do not assume an earlier declaration is the winning current rule.

---

## 42. `page-view.scss`

This stylesheet contains important active desktop viewport-fit overrides.

It affects areas including:

- Main Product Portfolio;
- Ayu Sales Intelligence;
- Telecom;
- selected dense section arrangements.

It can override:

- earlier aspect-ratio rules;
- older section dimensions;
- minimum heights;
- dense-grid behavior.

When debugging desktop geometry, inspect:

```text
route-specific stylesheet
+
page-view.scss
```

rather than only the local project file.

---

## 43. Shared DocConnect Prototype Styles

The file:

```text
src/styles/docconnect-overview-prototype.scss
```

is **not** exclusively DocConnect-specific.

It is also imported by Integrated Channels.

Therefore changes to this file can affect:

```text
Ayu DocConnect
Integrated Channels
```

Despite its filename, it must be treated as a shared dependency.

---

## 44. Generated Output Is Not Source

Do not edit generated build output such as:

```text
dist/
.astro/
node_modules/
```

as application source.

Authoritative implementation lives under areas such as:

```text
src/
public/
astro.config.mjs
package.json
package-lock.json
.github/
```

Generated output should be recreated through the build.

---

## 45. Production Asset Organization

All production/live images and logos remain under:

```text
public/
```

Runtime asset URLs are root-relative.

Example:

```text
public/profile/portrait.jpg
```

is referenced as:

```text
/profile/portrait.jpg
```

not:

```text
/public/profile/portrait.jpg
```

---

## 46. Key Production Asset Areas

Important asset locations include:

```text
public/profile/
public/intro/
public/ics/
public/ayu-docconnect/
public/ayu-sales-intelligence/
```

Telecom has no project-specific photograph folder.

Most Telecom visuals are native HTML/SVG/CSS.

---

## 47. Documentation Asset Policy

The documentation directory is Markdown-only.

```text
docs/references/
```

must not become a second visual-asset archive.

Do not store:

- screenshots;
- reference-image copies;
- exported page captures;
- temporary visual comparison assets;

inside the documentation directory.

Production assets belong under:

```text
public/
```

Temporary validation screenshots should remain outside the repository unless explicitly required.

---

## 48. Asset Replacement Rules

Before replacing an asset:

1. identify its current source path;
2. confirm whether it is actively referenced;
3. determine whether CSS crop/positioning depends on it;
4. identify shared reuse;
5. preserve licensing where applicable;
6. avoid creating duplicate V2/V3 assets unless explicitly required.

The presence of an image under `public/` does not guarantee that it is currently rendered.

---

## 49. Vendor Logo Licensing

DocConnect stores vendor SVG sources under:

```text
public/ayu-docconnect/logos/
```

including:

```text
postgresql.svg
python.svg
figma.svg
github.svg
DEVICON-LICENSE.txt
```

The license/attribution file must remain with the retained vendor-logo sources.

Some of these assets are also reused outside DocConnect, including Main Portfolio contexts.

---

## 50. Responsive Architecture

The portfolio uses a three-range responsive model.

```text
Desktop   ≥ 1280px
Tablet    768px – 1279px
Mobile    < 768px
```

The responsive system is **not** CSS-only.

It combines:

```text
route-specific SCSS
shared SCSS
ResponsiveNavigation
tablet-desktop-fit.js
responsive-relationships.js
```

---

## 51. Desktop Architecture

The established desktop presentation basis is approximately:

```text
1280 × 665
```

Shared Header heights generally resolve through:

```text
clamp(72px, 6.2vw, 120px)
```

Dense portfolio/project sections use viewport-sized compositions beneath the Header.

Current desktop behavior is influenced by:

- route-specific SCSS;
- shared styles;
- `page-view.scss`;
- project-specific overrides.

Do not infer final geometry from one source declaration.

---

## 52. Historical 16:10 Rules

Some older/base style layers include concepts such as:

```text
max-width: 1440px
aspect-ratio: 16 / 10
```

These are not necessarily the final current desktop frame.

Current viewport-fit overrides can set:

```text
aspect-ratio: auto
max-width: none
```

for active layouts.

Do not restore older aspect-ratio behavior without confirming which rule currently owns the route.

---

## 53. Tablet Architecture

Tablet range:

```text
768px – 1279px
```

The system uses:

```text
src/scripts/tablet-desktop-fit.js
```

The helper treats:

```text
1280 × 665
```

as the authored desktop basis.

It then proportionally fits that desktop composition into the available tablet viewport.

The tablet experience therefore preserves the existing desktop composition rather than introducing a completely independent tablet redesign.

---

## 54. Tablet Desktop-Fit Responsibilities

The helper can:

- mirror relevant desktop media rules;
- resolve viewport-relative sizing against the desktop basis;
- scale the presentation proportionally;
- preserve authored desktop composition.

It should not be duplicated by another independent scale/zoom implementation.

Do not introduce:

- CSS `zoom`;
- competing full-page transform scaling;
- a second tablet fitting script;

unless intentionally replacing the existing system.

---

## 55. Mobile Architecture

Mobile applies below:

```text
768px
```

The portfolio switches to native responsive flow.

Mobile behavior includes:

- compact Header;
- Menu control;
- stacked content;
- reflowed cards;
- native scrolling;
- mobile-specific project/Intro layouts;
- compact relationship handling.

Mobile is not simply the desktop canvas scaled down.

---

## 56. Responsive Relationships

Shared helper:

```text
src/scripts/responsive-relationships.js
```

This script can measure/reposition existing relationship structures at compact sizes.

It supports diagrams where:

- connectors;
- nodes;
- labels;
- lists;

need layout-aware adjustment.

It does not create a second content copy.

---

## 57. Browser Zoom

Browser-controlled native zoom remains separate from the portfolio responsive architecture.

The repository should not attempt to replace browser zoom with application-level scaling.

Historical validation did not provide comprehensive native browser zoom certification.

Do not claim zoom support solely from:

- build success;
- page-fit success;
- tablet scaling;
- CSS inspection.

---

## 58. Overflow and Fit Risk

Desktop pages often use:

```text
overflow: hidden
```

for viewport-sized presentation.

This creates an important QA consideration:

```text
Correct outer section dimensions
≠
proof that all inner content fits
```

Dense sections can conceal lower-row clipping without producing page-level horizontal overflow.

After changes to dense layouts, inspect:

- lower rows;
- footer strips;
- legends;
- diagram labels;
- card text;
- action controls.

---

## 59. PDF / Export Architecture

PDF export is implemented through:

```text
src/components/SavePdf.astro
src/scripts/save-portfolio-pdf.js
src/styles/portfolio-print.css
```

The site does not use:

- a backend PDF generator;
- a PDF API;
- a stored generated PDF endpoint.

The export workflow uses browser printing.

---

## 60. Intro PDF Export

Intro mode exports exactly four pages:

```text
/
 /about/
 /education/
 /experience/
```

Ordered as:

1. Hero
2. About Me
3. Education
4. Work Experience

The alias:

```text
/intro/
```

is not an Intro PDF dependency.

Expected Intro page count:

```text
4
```

---

## 61. Main Portfolio / Project PDF Export

Normal Portfolio/project export uses the current route:

```text
location.pathname + location.search
```

It requires:

```text
10
```

unique navigation-linked sections.

This applies to:

- Main Product Portfolio;
- Integrated Channels;
- Ayu DocConnect;
- Ayu Sales Intelligence;
- Telecom Cost Optimization.

Navigation IDs and section IDs therefore form part of the export contract.

---

## 62. PDF Preparation Flow

Typical export flow:

```text
Fetch fresh route HTML
        ↓
Parse document
        ↓
Remove scripts / module preloads
        ↓
Identify export sections
        ↓
Load styles / fonts / images
        ↓
Freeze desktop media behavior
        ↓
Prepare print sheets
        ↓
Open browser print dialog
```

Current print basis:

```text
1280 × 665
```

Print CSS hides route interaction elements where required.

---

## 63. PDF Validation Boundary

Source inspection can confirm:

- route list;
- page count requirement;
- section collection logic;
- print preparation logic.

It cannot by itself certify:

- final print pagination;
- browser-specific scaling;
- image fidelity;
- page margins;
- actual saved-PDF output.

PDF fidelity should be runtime-checked when export behavior changes.

---

## 64. Accessibility Architecture

Repository-wide source-level accessibility features include:

- skip links;
- `aria-current`;
- `aria-label`;
- `aria-expanded`;
- `aria-controls`;
- focus-visible styles;
- Escape behavior;
- focus restoration;
- native dialogs;
- custom modal labeling;
- inert background handling;
- meaningful image alternative text;
- decorative `aria-hidden`.

These are implementation features.

They are not formal accessibility certification.

---

## 65. Integrated Channels Modal Accessibility

Current source includes:

- opener storage;
- Close focus;
- single-control Tab containment;
- background inert handling;
- previous inert-state restoration;
- opener focus restoration;
- Escape;
- backdrop close;
- deep-link preservation.

The current Tab behavior assumes:

```text
Close = only interactive modal control
```

Adding additional modal controls requires a real multi-control focus-trap redesign.

---

## 66. Sales Intelligence Dialogs

Sales Intelligence uses native:

```text
HTMLDialogElement
```

for its seven product workspaces.

Native dialogs support:

- modal opening;
- focus management;
- Escape behavior.

Project code additionally supports outside-rectangle close.

Historical interaction tests exist, but were not rerun during documentation synchronization.

---

## 67. Connect Form Architecture

Main Portfolio Connect is implemented in:

```text
src/components/sections/Connect.astro
```

Current controls:

```text
Name
Company
Email
Inquiry topic
Message
```

Current topic options:

```text
Product Management
Technical Product Management
Business Analysis
Enterprise Technology / Transformation
Other
```

The form uses:

```text
mailto:
```

rather than a server endpoint.

---

## 68. Connect Form Backend Boundary

Connect does not have:

- server-side submission;
- database storage;
- delivery confirmation;
- inbox API integration.

The browser script:

1. reads `FormData`;
2. builds an email subject/body;
3. opens the configured mail client.

Current destination in source:

```text
manoj.pant.pm@outlook.com
```

Changing the email destination requires changing source code.

---

## 69. QA Status

Repository QA originally identified:

```text
Critical: 0
High:     0
Medium:   3
Low:      2
```

Current disposition:

```text
4 findings resolved in source
1 finding intentionally deferred
```

The deferred issue is:

```text
JavaScript-dependent responsive-navigation fallback
```

A separate unresolved Sales Intelligence `/#connect` route exception exists outside the original five-finding count.

For complete QA history, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

---

## 70. Visual Validation Boundaries

Visual validation and functional validation must remain separate.

Examples:

```text
Build PASS
≠
Visual fidelity PASS
```

and:

```text
Page fit PASS
≠
Pixel-perfect fidelity PASS
```

Historical examples:

### Ayu DocConnect

```text
Product Metrics strict pixel-perfect fidelity → FAIL
```

### Ayu Sales Intelligence

Historical photo/icon/layout comparisons retained multiple:

```text
FAIL
```

results while:

```text
Text/content → PASS
Page fit     → PASS
```

These historical results must not be silently upgraded.

---

## 71. Source-of-Truth Hierarchy

For implementation behavior:

```text
Current source code
        ↓
Page / project reference document
        ↓
Project Context
        ↓
Historical documentation
```

For professional claims and portfolio content:

```text
Approved authored content
```

remains authoritative.

Source implementation confirms what is displayed.

It does not independently verify the underlying professional claim.

---

## 72. Documentation Architecture

Current documentation structure:

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

The documentation directory contains Markdown only.

---

## 73. Reference Ownership

Use:

```text
01
```

for Intro Experience.

Use:

```text
02
```

for Main Product Portfolio.

Use:

```text
03–06
```

for individual case studies.

Use:

```text
07
```

for repository QA.

Use:

```text
08
```

for shared repository architecture and maintenance context.

Use:

```text
09
```

for routing/deployment migration history.

---

## 74. Repository File Responsibilities

| File | Responsibility |
|---|---|
| `astro.config.mjs` | Astro site/build configuration |
| `package.json` | Metadata, scripts, engines, direct dependencies |
| `package-lock.json` | Exact dependency resolution |
| `.github/workflows/deploy.yml` | Active GitHub Pages deployment workflow |
| `.github/workflows/build.yml.bak` | Historical backup; not active workflow |
| `.gitignore` | Generated/environment exclusions |
| `README.md` | General repository onboarding |
| `src/layouts/SiteLayout.astro` | Shared HTML document |
| `src/layouts/PortfolioLayout.astro` | Main Portfolio layout wrapper |
| `src/components/intro/IntroShell.astro` | Intro wrapper |
| `src/components/intro/IntroHeader.astro` | Intro Header |
| `src/components/Header.astro` | Main Portfolio Header |
| `src/components/ProjectShell.astro` | Project Header/wrapper/footer |
| `src/components/HeaderActions.astro` | Shared Header actions |
| `src/components/ResponsiveNavigation.astro` | Compact navigation |
| `src/components/SavePdf.astro` | PDF trigger |
| `src/scripts/save-portfolio-pdf.js` | Export preparation |
| `src/scripts/tablet-desktop-fit.js` | Tablet canvas fitting |
| `src/scripts/responsive-relationships.js` | Compact relationship handling |
| `src/scripts/navigation.js` | Main Portfolio active navigation |
| `src/data/intro-portfolio.js` | Intro authored data |
| `src/data/portfolio.js` | Main Portfolio authored data |
| `src/styles/intro-portfolio.scss` | Intro styles |
| `src/styles/portfolio.scss` | Main Portfolio base styles |
| `src/styles/page-view.scss` | Active viewport-fit/dense-layout overrides |
| `src/styles/project-case-study.scss` | Shared project styles |
| `src/styles/portfolio-print.css` | Print styles |
| `public/` | Production assets |
| `docs/references/` | Markdown documentation |

---

## 75. Development Commands

Current package scripts support:

```text
dev
build
preview
```

On the Windows PowerShell development environment, use:

```text
npm.cmd
```

rather than relying on:

```text
npm
```

when PowerShell execution-policy behavior blocks `npm.ps1`.

Examples:

```text
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
```

Reproducible dependency installation should prefer:

```text
npm.cmd ci
```

when installation is explicitly required.

---

## 76. Development Change Principles

Repository changes should be:

```text
Focused
Minimal
Owning-file first
Source-aware
Validation-aware
```

Do not:

- refactor unrelated code;
- redesign unrelated sections;
- replace working architecture without approval;
- introduce duplicate implementations;
- modify generated output;
- silently change professional claims;
- normalize different project metrics without confirmation.

---

## 77. Shared-File Risk

Treat these as high-impact shared files:

```text
SiteLayout.astro
ProjectShell.astro
Header.astro
HeaderActions.astro
ResponsiveNavigation.astro
SavePdf.astro
portfolio.scss
page-view.scss
project-case-study.scss
tablet-desktop-fit.js
responsive-relationships.js
save-portfolio-pdf.js
portfolio-print.css
```

Changes can affect multiple routes.

A narrow project correction should prefer project-specific owners where possible.

---

## 78. Scope Preservation

When asked to modify one area:

```text
change only that area
```

unless a shared dependency must change to implement the request.

Do not use a small alignment or wording request as justification for:

- architecture refactoring;
- unrelated cleanup;
- new design systems;
- dependency upgrades;
- route restructuring;
- shared responsive redesign.

---

## 79. Content Preservation

Professional facts, metrics, roles, dates, and project outcomes must remain exactly as approved unless the requested task explicitly changes them.

Do not silently:

- rewrite role titles;
- change employment dates;
- invent scope;
- invent metrics;
- broaden pilot results;
- convert ranges into point estimates;
- remove qualifications;
- merge independently authored claims.

---

## 80. Project Addition Requirements

Adding a new detailed project requires coordinated changes across:

```text
Route
Project wrapper
Project content
Styles
Assets
Main Portfolio product card
Project sequence
Previous / next links
Navigation
PDF section structure
Documentation
```

A fifth project would also require an explicit Main Portfolio layout decision.

Do not assume the current four-card arrangement automatically supports an additional project.

---

## 81. New Section Requirements

If a ten-section project structure is changed, review:

- project Header navigation;
- section IDs;
- IntersectionObserver behavior;
- PDF section collection;
- print page count;
- final project navigation;
- responsive layout.

The PDF architecture currently expects:

```text
10
```

sections for Main Portfolio/project exports.

Changing section count is therefore an architectural change.

---

## 82. Route Change Requirements

Any route change requires reviewing:

- page source;
- Main Portfolio project URL;
- identity links;
- Home links;
- Back to Portfolio;
- View Projects;
- previous/next links;
- Connect links;
- PDF route behavior;
- GitHub Pages deployment;
- documentation.

Route changes should not be performed as isolated text replacements.

---

## 83. Asset Change Requirements

Before adding/replacing an asset:

- confirm active source usage;
- confirm directory ownership;
- verify shared reuse;
- retain licensing;
- inspect crop/position dependencies;
- avoid duplicate alternatives;
- update documentation when architecture materially changes.

Do not copy assets into documentation merely to explain them.

---

## 84. Git / Repository Safety

Preserve unknown or uncommitted work.

Do not automatically:

- reset;
- clean;
- stash;
- discard;
- delete;
- overwrite;
- commit;
- push;

unless explicitly requested.

Before committing documentation or implementation changes, review the actual repository state.

Generated documentation should not be assumed committed merely because it exists locally.

---

## 85. Build Validation

A successful build confirms:

```text
source compiles
routes generate
imports resolve
```

It does not prove:

- visual accuracy;
- responsive fit;
- accessibility;
- runtime interaction;
- PDF fidelity;
- live deployment.

Build validation and visual/runtime validation must remain separate.

---

## 86. `git diff --check`

`git diff --check` is useful for identifying:

- whitespace errors;
- conflict markers in diffs;
- malformed trailing whitespace patterns.

A pass does not establish:

- semantic correctness;
- visual fidelity;
- runtime correctness.

Use it as a technical integrity check, not a complete QA test.

---

## 87. Current Final Technical Validation

The final routing/header implementation associated with the current source baseline recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

Current generated route set:

```text
/
/intro/
/about/
/education/
/experience/
/portfolio/
/projects/integrated-channels/
/projects/ayu-docconnect/
/projects/ayu-sales-intelligence/
/projects/telecom-cost-optimization/
```

This validates the recorded source/build state.

It does not automatically certify the live GitHub Pages deployment.

---

## 88. GitHub Pages Architecture

The repository deploys through GitHub Pages.

Active workflow:

```text
.github/workflows/deploy.yml
```

General deployment model:

```text
Push to main
        ↓
GitHub Actions
        ↓
Astro static build
        ↓
Pages artifact
        ↓
GitHub Pages deployment
```

Historical deployment evidence is recorded separately in:

[09-github-pages-routing-migration.md](09-github-pages-routing-migration.md)

---

## 89. Workflow Backup

The repository contains:

```text
.github/workflows/build.yml.bak
```

The `.bak` suffix means it is not an active GitHub Actions workflow.

Do not interpret it as a second active deployment pipeline.

---

## 90. `.gitignore` Context

The repository excludes generated/runtime-local artifacts such as:

```text
node_modules
dist
.astro
environment files
OS artifacts
```

These exclusions help keep generated/local content out of source control.

Do not remove them casually.

---

## 91. Current Repository QA State

Current high-level QA state:

```text
Original QA findings: 5

Resolved in source: 4
Deferred: 1
```

Additional known source exception:

```text
Sales Intelligence Let’s Connect → /#connect
```

Current final technical validation:

```text
Build → PASS
10 generated routes
git diff --check → PASS
```

No formal accessibility certification exists.

No comprehensive native browser zoom certification exists.

No new full PDF-output certification was performed during documentation synchronization.

---

## 92. Current Validation Boundary

Current source/documentation alignment confirms:

- route structure;
- source ownership;
- component relationships;
- current navigation destinations;
- content/data architecture;
- asset organization;
- responsive architecture;
- PDF logic;
- QA-source status.

It does not automatically confirm:

- current live-site deployment;
- every browser;
- every desktop resolution;
- every tablet/mobile device;
- browser zoom;
- assistive technologies;
- current print/PDF fidelity;
- external service availability;
- professional metric correctness beyond authored source.

---

## 93. Documentation Maintenance Rules

When implementation changes materially:

1. update the owning project/page reference;
2. update Project Context only if shared architecture changes;
3. update Repository QA only when QA status genuinely changes;
4. update Routing Migration only when route/deployment history changes;
5. do not duplicate the same detailed content across every reference;
6. keep historical evidence tied to its date/source state;
7. do not rewrite historical FAIL results;
8. do not store screenshots in `docs/references/`.

---

## 94. Reference Documents

Intro Experience:

[01-intro-experience-reference.md](01-intro-experience-reference.md)

Main Product Portfolio:

[02-main-portfolio-reference.md](02-main-portfolio-reference.md)

Integrated Channels:

[03-integrated-channels-reference.md](03-integrated-channels-reference.md)

Ayu DocConnect:

[04-ayu-docconnect-reference.md](04-ayu-docconnect-reference.md)

Ayu Sales Intelligence:

[05-ayu-sales-intelligence-reference.md](05-ayu-sales-intelligence-reference.md)

Telecom Cost Optimization:

[06-telecom-cost-optimization-reference.md](06-telecom-cost-optimization-reference.md)

Repository QA:

[07-repository-qa-report.md](07-repository-qa-report.md)

Routing / GitHub Pages migration:

[09-github-pages-routing-migration.md](09-github-pages-routing-migration.md)

---

## 95. Current Repository Context Summary

Current architecture:

```text
Astro + MDX static portfolio
        ↓
Hero at /
        ↓
Intro Experience
        ↓
Main Product Portfolio at /portfolio/
        ↓
Four detailed project routes
```

Shared architecture:

```text
SiteLayout
IntroShell / PortfolioLayout / ProjectShell
Shared Header actions
Responsive navigation
Tablet desktop fitting
Responsive relationships
Browser print/PDF export
```

Current maintenance principles:

```text
Preserve approved content
Preserve route architecture
Preserve responsive architecture
Preserve metric scope
Prefer owning-file changes
Treat shared files carefully
Validate build/runtime/visual behavior separately
Do not modify unrelated areas
```

Current known unresolved implementation items:

```text
JavaScript-dependent collapsed-navigation fallback
Sales Intelligence Let’s Connect → /#connect
```

Current recorded final technical state:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884

npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```
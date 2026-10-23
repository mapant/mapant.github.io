# Main Product Portfolio Reference

Complete implementation, content, navigation, responsive, interaction, export, and maintenance reference for the ten-section Main Product Portfolio at `/portfolio/`.

<div align="center">

### 🧭 Main Product Portfolio

![Product Portfolio](https://img.shields.io/badge/Product_Portfolio-0A66C2?style=for-the-badge)
![10 Sections](https://img.shields.io/badge/10_Sections-2563EB?style=for-the-badge)
![4 Projects](https://img.shields.io/badge/4_Projects-7C3AED?style=for-the-badge)
![Product Metrics](https://img.shields.io/badge/Product_Metrics-059669?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-0891B2?style=for-the-badge)
![PDF Export](https://img.shields.io/badge/PDF_Export-E76F51?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance


---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Purpose and Scope

The Main Product Portfolio is the central professional Product Management narrative of the website.

It connects:

- product strategy;
- business analysis;
- customer and stakeholder discovery;
- technical product management;
- AI / GenAI;
- workflow automation;
- enterprise architecture;
- APIs and integrations;
- data and analytics;
- delivery governance;
- product metrics;
- business outcomes;
- selected project case studies.

The page follows the professional journey from:

```text
Problem Understanding
        ↓
Product Ecosystem
        ↓
Challenge Framing
        ↓
Strategy
        ↓
PM Scope
        ↓
Measurement
        ↓
Selected Products
        ↓
Technology & Data
        ↓
Outcomes
        ↓
Connect
```

The Main Product Portfolio is a static Astro experience built from local authored data, Astro components, native HTML/SVG/CSS, and browser JavaScript.

It does not operate the represented banking, healthcare, telecom, analytics, AI, workflow, or enterprise systems.

---

> 🔗 **ROUTING & NAVIGATION**

## 2. Route and Page Entry Point

Current route:

```text
/portfolio/
```

Primary source:

```text
src/pages/portfolio/index.astro
```

The route renders:

```text
PortfolioLayout
    ↓
SiteLayout
    ↓
.portfolio-root.viewport-fit-prototype
    ├── Header
    └── main#portfolio-main
        ├── Overview
        ├── Ecosystem
        ├── Challenge
        ├── Strategy
        ├── PMScope
        ├── Metrics
        ├── Portfolio
        ├── TechData
        ├── Outcomes
        └── Connect
```

The page imports:

```text
src/styles/portfolio.scss
src/styles/page-view.scss
src/scripts/navigation.js
```

Current document title:

```text
Manoj Pant | Senior Product Manager | Product Portfolio
```

Shared metadata comes from:

```text
src/layouts/SiteLayout.astro
```

Current shared description:

```text
Manoj Pant — Senior Product Manager portfolio and product case studies.
```

---

> 🔗 **ROUTING & NAVIGATION**

## 3. Routing Context

The Main Product Portfolio originally occupied `/`.

After the final route migration:

```text
/            → Hero / Intro Experience
/portfolio/  → Main Product Portfolio
```

The project case-study routes remain under:

```text
/projects/
```

The Main Product Portfolio should therefore not be moved back to `/` unless an explicit routing change is approved.

For migration history, see:

[09-github-pages-routing-migration.md](09-github-pages-routing-migration.md)

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 4. Page Architecture

The page wrapper is:

```text
<div class="portfolio-root viewport-fit-prototype">
```

The `viewport-fit-prototype` class is important because it activates the current viewport-sized desktop presentation and shared tablet-fitting behavior.

The main content container is:

```text
<main id="portfolio-main" aria-label="Product portfolio">
```

All ten sections are direct children of this main container and use:

```text
.slide.page
```

Each section has its own unique anchor ID.

The Main Product Portfolio uses:

- Astro static rendering;
- local JavaScript for navigation and interactions;
- local data from `src/data/portfolio.js`;
- literal section-level content inside Astro components;
- native SVG/CSS illustrations;
- shared responsive helpers;
- browser print preparation for PDF export.

It does not use:

- React;
- a client-side SPA router;
- a CMS;
- a portfolio backend;
- a live BI connection;
- external product APIs for section content.

---

> 🔗 **ROUTING & NAVIGATION**

## 5. Section Order and Navigation Anchors

The section order is fixed.

| # | Section | Navigation Label | Anchor | Component |
|---:|---|---|---|---|
| 1 | Overview | Overview | `#overview` | `Overview.astro` |
| 2 | Ecosystem | Ecosystem | `#ecosystem` | `Ecosystem.astro` |
| 3 | Challenge | Challenge | `#challenge` | `Challenge.astro` |
| 4 | Strategy | Strategy | `#strategy` | `Strategy.astro` |
| 5 | PM Scope | PM Scope | `#scope` | `PMScope.astro` |
| 6 | Product Metrics | Product Metrics | `#metrics` | `Metrics.astro` |
| 7 | Product Portfolio | Portfolio | `#portfolio` | `Portfolio.astro` |
| 8 | Tech & Data | Tech & Data | `#tech` | `TechData.astro` |
| 9 | Outcomes | Outcomes | `#outcomes` | `Outcomes.astro` |
| 10 | Connect | Connect | `#connect` | `Connect.astro` |

The Main Product Portfolio anchor names intentionally differ from project-case-study anchors in some places.

Examples:

```text
Main Portfolio     Project Case Studies
#scope             #pm-scope
#metrics           #product-metrics
#tech              #tech-data
#connect            #product-leadership or project-specific final section
```

Do not copy project navigation IDs into the Main Product Portfolio.

---

> 🔗 **ROUTING & NAVIGATION**

## 6. Header and Navigation

### 6.1 Header source

Primary component:

```text
src/components/Header.astro
```

Shared actions:

```text
src/components/HeaderActions.astro
```

Responsive menu:

```text
src/components/ResponsiveNavigation.astro
```

Navigation data:

```text
navItems
```

from:

```text
src/data/portfolio.js
```

### 6.2 Header structure

Current order:

```text
Identity
Section Navigation
Home
View Projects
PDF
```

### 6.3 Identity

The Header identity displays:

```text
Manoj Pant
SENIOR PRODUCT MANAGER
```

Portrait:

```text
/profile/portrait.jpg
```

Alternative text:

```text
Manoj Pant
```

Identity destination:

```text
/
```

Accessible label:

```text
Go to homepage
```

### 6.4 Section navigation

The Header renders the ten `navItems` records as local anchors.

Current data order:

```text
Overview
Ecosystem
Challenge
Strategy
PM Scope
Product Metrics
Portfolio
Tech & Data
Outcomes
Connect
```

The associated IDs are:

```text
overview
ecosystem
challenge
strategy
scope
metrics
portfolio
tech
outcomes
connect
```

### 6.5 Header actions

For the Main Product Portfolio, `HeaderActions.astro` renders:

1. Home
2. View Projects
3. Save PDF

Destinations:

| Control | Destination / Action |
|---|---|
| Identity | `/` |
| Home | `/` |
| View Projects | `#portfolio` |
| Resolved View Projects URL | `/portfolio/#portfolio` |
| PDF | Browser print/PDF preparation |

The Main Portfolio View Projects action uses the default:

```text
href="#portfolio"
```

because the control is already rendered on `/portfolio/`.

### 6.6 PDF label

For non-Intro pages, the PDF control uses:

```text
Save PDF
```

as both:

```text
aria-label
title
```

---

> 🔗 **ROUTING & NAVIGATION**

## 7. Active Section Navigation

Active-state behavior is implemented by:

```text
src/scripts/navigation.js
```

The script reads:

```text
#nav a
main > .slide
```

and uses:

```text
IntersectionObserver
```

to determine the currently visible section.

Active state is updated through:

```text
class="active"
```

The observer considers:

- current intersection state;
- intersection ratio;
- shared header height;
- clicked anchors;
- URL hash changes.

On initial load:

```text
window.location.hash
```

is used when present.

Otherwise the first section becomes active.

The script does **not**:

- scale the page;
- transform the presentation;
- implement routing;
- replace native document scrolling.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 8. Overview

### 8.1 Source

```text
src/components/sections/Overview.astro
```

Primary data:

```text
expertise
```

### 8.2 Purpose

The Overview establishes the high-level positioning of the portfolio.

Primary headline:

```text
Building products
from complex problems
to measurable impact.
```

The lead positions Manoj as a Senior Product Manager with:

```text
10+ years of experience
```

across:

- FinTech;
- Healthcare;
- Telecom;
- Enterprise IT.

The positioning combines:

- product strategy;
- business analysis;
- technology;
- data;
- execution.

### 8.3 Summary statistics

Four authored statistics are displayed:

| Metric | Label |
|---|---|
| `10+` | Years Experience |
| `12+` | Enterprise Applications |
| `4` | Industry Ecosystems |
| `0 → 1` | Product Development |

These are authored portfolio statements and are not dynamically calculated.

### 8.4 Core expertise

Six `expertise` records are rendered:

| Expertise | Current Supporting Content |
|---|---|
| Analytics | SQL · Power BI · Tableau · KPI Reporting |
| Business Analysis | Requirements · Process Design · Stakeholder Discovery |
| Technical Product | APIs · Workflows · Data Flows · Solution Collaboration |
| Product Management | Strategy · Roadmap · Delivery · Adoption · Outcomes |
| AI & GenAI | AI Strategy · Copilot · LLMs · Intelligent Workflows |
| Automation & Integration | API-First · Microservices · Cloud · Enterprise Platforms |

### 8.5 Product Operating Model

The right-side operating model represents four contexts feeding the Product layer:

```text
Business
AI & GenAI
Automation
Data
      ↓
Product
```

Current supporting labels include:

```text
Business
FinTech | Health Tech | Telecom

AI & GenAI
AI Strategy | Copilot | LLMs

Automation
API-First | Microservices | Cloud

Data
SQL | Power BI | KPI Frameworks
```

The bottom operating flow is:

```text
STRATEGY
Vision · Priorities · Roadmap

DELIVERY
Build · Integrate · Deploy

ADOPTION & OUTCOMES
Scale · Measure · Impact
```

The operating-model illustration is native HTML/SVG/CSS and local `PortfolioIllustration` / `PortfolioIcon` content.

---

> 📚 **REFERENCE DETAIL**

## 9. Ecosystem

### 9.1 Source

```text
src/components/sections/Ecosystem.astro
```

Primary data:

```text
ecosystemCards
```

### 9.2 Purpose

The section positions Product as the coordination layer across:

- business;
- customer needs;
- product;
- AI / GenAI;
- automation;
- data;
- operations;
- compliance.

Primary heading:

```text
Product is the coordination layer between business,
technology and operations.
```

### 9.3 Narrative model

The left narrative emphasizes that enterprise product work requires more than a feature.

It connects:

- customer/business problems;
- measurable outcomes;
- user journeys;
- workflows;
- data;
- integrations;
- controls;
- intelligence;
- operational readiness.

Current narrative checks include:

1. Customer and business problem → measurable outcome
2. Product journey and workflow across multiple systems
3. AI / GenAI opportunity in real business processes
4. Automation and integration behavior with enterprise platforms
5. Data, operations, compliance and support readiness

### 9.4 Ecosystem dimensions

Eight ecosystem cards are rendered.

| Dimension | Purpose |
|---|---|
| Business | Goals, economics and operating constraints |
| Customer | Journeys, pain points and adoption |
| Product | Vision, roadmap, capabilities and experience |
| AI & GenAI | Decisioning, document and knowledge workflows |
| Automation | Rules, approvals, exceptions and reconciliation |
| Data | SQL, BI, KPIs and product intelligence |
| Operations | Controls, rollout, training and support |
| Compliance | AML/KYC, audit, regulatory and risk controls |

Each card also contains three authored supporting bullets.

### 9.5 Ecosystem proof strip

Four bottom indicators are rendered:

```text
100%
Cross Functional Collaboration

MULTI-SYSTEM
Integrations & Data Flows

COMPLIANT
And Secure by Design

MEASURABLE
Business Outcomes and User Impact
```

These are narrative indicators, not runtime measurements of the website.

### 9.6 Visual implementation

The section uses:

```text
PortfolioDiagram kind="ecosystem"
PortfolioIcon
native SVG spokes
HTML/CSS cards
```

No remote ecosystem diagram or embedded presentation is used.

---

> 📚 **REFERENCE DETAIL**

## 10. Challenge

### 10.1 Source

```text
src/components/sections/Challenge.astro
```

Primary data:

```text
challengeCards
```

### 10.2 Purpose

The section frames common enterprise-product complexity before solution design.

Primary heading:

```text
Complex enterprise products rarely have a single problem.
```

The section emphasizes coordination across:

- stakeholders;
- systems;
- data sources;
- business rules;
- exceptions;
- regulatory requirements;
- operational hand-offs.

### 10.3 Six challenge categories

| # | Type | Challenge |
|---:|---|---|
| 01 | Workflow | Fragmented processes |
| 02 | Integration | Integration dependency |
| 03 | Decision | Decision complexity |
| 04 | Automation | Manual operations |
| 05 | Data | Data ambiguity |
| 06 | Alignment | Enterprise alignment |

Each challenge card contains:

```text
Number
Type
Title
Illustration
Description
Four problem signals
PM Response
```

### 10.4 PM response model

Each card uses the common response sequence:

```text
Frame → Design → Deliver → Measure
```

The actual response copy remains challenge-specific.

Examples include:

- map, standardize and streamline workflows;
- define integration patterns and failure handling;
- design decision workflows;
- automate repetitive work with controls;
- define data/KPI frameworks;
- align stakeholders around roadmap and outcomes.

### 10.5 Visual implementation

The section uses:

```text
PortfolioDiagram kind="challenge"
PortfolioIllustration
PortfolioIcon
```

Challenge illustration keys are positionally mapped:

```text
workflow
integration
decision
automation
data
alignment
```

Changing `challengeCards` order without updating the illustration mapping can attach the wrong visual to a challenge.

---

> 📚 **REFERENCE DETAIL**

## 11. Strategy

### 11.1 Source

```text
src/components/sections/Strategy.astro
```

Primary data:

```text
strategySteps
```

### 11.2 Purpose

The section presents a repeatable enterprise Product Strategy process.

Primary heading:

```text
From problem framing to measurable product delivery.
```

The strategy connects:

- customer need;
- business value;
- feasibility;
- AI opportunity;
- automation potential;
- measurable outcomes.

### 11.3 Strategy sequence

Seven stages are rendered in this exact order:

```text
01 FRAME
02 DISCOVER
03 DEFINE
04 PRIORITIZE
05 ROADMAP
06 DELIVER
07 LEARN & MEASURE
```

### 11.4 Stage definitions

| Stage | Main Intent |
|---|---|
| Frame | Problem framing and opportunity |
| Discover | User, process and data discovery |
| Define | Translate to product strategy |
| Prioritize | Balance value, risk and feasibility |
| Roadmap | Plan and sequence delivery |
| Deliver | Execute and scale solutions |
| Learn & Measure | Measure impact and iterate |

Each `strategySteps` record contains:

```text
number
stage
title
description
four activities
PM focus
```

### 11.5 Strategy outcomes

Four bottom outcomes are rendered:

1. Higher Customer Satisfaction
2. Measurable Business Impact
3. Faster Time to Value
4. Scalable & Compliant Growth

### 11.6 Visual implementation

The strategy section uses:

```text
PortfolioDiagram kind="strategy"
PortfolioDiagram kind="strategy-wheel"
PortfolioIcon
```

The strategy cards are deliberately positioned around the central strategy-wheel composition on desktop.

Their visual order should not be changed casually by modifying only CSS grid placement.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 12. PM Scope

### 12.1 Source

```text
src/components/sections/PMScope.astro
```

Primary data:

```text
scopeCards
```

### 12.2 Purpose

The section describes end-to-end Product Management ownership.

Primary heading:

```text
Product management
across strategy,
systems and execution.
```

Current narrative covers ownership from:

```text
Problem Discovery
        ↓
Requirements
        ↓
Solution Design
        ↓
Architecture
        ↓
Automation / Intelligence
        ↓
Delivery
        ↓
Adoption & Improvement
```

### 12.3 Eight PM scope areas

| # | Scope | Eyebrow |
|---:|---|---|
| 01 | Discover | Insights |
| 02 | Define | Requirements |
| 03 | Design | Solution Design |
| 04 | Architect | Technical Architecture |
| 05 | Automate | Workflows & Controls |
| 06 | AI / GenAI | Intelligence |
| 07 | Deliver | Execution |
| 08 | Scale & Adopt | Adoption & Impact |

Each record contains:

```text
number
title
eyebrow
description
four activity items
key output
```

### 12.4 Example outputs

The current authored outputs include:

- problem statements;
- user insights;
- process maps;
- BRD / FRD / FSD;
- user stories;
- acceptance criteria;
- Figma designs;
- user journeys;
- architecture diagrams;
- DFD;
- ER models;
- API specifications;
- integration design;
- compliance controls;
- automated workflows;
- rules;
- alerts;
- reconciliation logic;
- AI models;
- document-AI workflows;
- GenAI features;
- UAT sign-off;
- release notes;
- training;
- adoption metrics;
- feedback loops.

### 12.5 Supporting principles

The section also presents:

```text
Business & Customer
Needs & Outcomes

Strategy & Planning
Vision & Roadmap
```

and:

```text
Cross-functional Collaboration
Regulated & Compliant Delivery
Data-Driven Decisions
Continuous Improvement
```

### 12.6 Visual implementation

The section uses:

```text
PortfolioDiagram kind="lifecycle"
PortfolioIllustration
PortfolioIcon
```

The eight illustration keys are positionally aligned with the eight scope cards:

```text
discover
requirements
design
architecture
automation
ai
delivery
adoption
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 13. Product Metrics

### 13.1 Source

```text
src/components/sections/Metrics.astro
```

Primary data:

```text
metricGroups
metricFormulas
```

### 13.2 Purpose

The section explains how Product Management measurement connects activity to actual outcomes.

Primary heading:

```text
Measure the product,
not just the release.
```

The narrative covers:

- adoption;
- activation;
- workflow behavior;
- operational efficiency;
- quality;
- risk;
- automation;
- business impact.

### 13.3 Measurement signals

Four top-level signals are presented:

```text
Users
Who is using the product?

Behavior
How are they using it?

Efficiency
Is it reducing effort?

Business Impact
Is it creating measurable value?
```

### 13.4 Metric groups

Six metric groups are rendered.

| # | Metric Group | Example Display Value |
|---:|---|---|
| 01 | Adoption | `78%` User Adoption |
| 02 | Activation | `62%` Activation Rate |
| 03 | Efficiency | `45%` Effort Reduction |
| 04 | Quality & Risk | `90%` Process Accuracy |
| 05 | AI & Automation | `68%` STP Rate |
| 06 | Business Impact | `32%` Cost Reduction |

These values are authored illustrative samples inside `portfolio.js`.

They are not calculated from live product telemetry.

### 13.5 Metric questions

The six groups answer:

| Group | Question |
|---|---|
| Adoption | Are the intended users actually using the product? |
| Activation | How quickly does a user reach meaningful value? |
| Efficiency | Does the product remove time, effort or manual work? |
| Quality & Risk | Does the product make the process more reliable and controlled? |
| AI & Automation | Is intelligence improving the workflow without losing control? |
| Business Impact | Did the product change a meaningful business outcome? |

### 13.6 North-star flow

The section uses:

```text
Adoption
→ Usage
→ Workflow Behavior
→ Operational Efficiency
→ Business Outcome
```

Goal:

```text
Data-driven decisions for continuous improvement
```

### 13.7 Metric formulas

Five formulas are stored in `metricFormulas`.

| Metric | Formula |
|---|---|
| Adoption rate | Active eligible users ÷ Total eligible users × 100 |
| Activation rate | Users reaching first value ÷ Eligible users × 100 |
| Efficiency gain | (Baseline effort − Current effort) ÷ Baseline effort × 100 |
| Automation rate | Automated cases ÷ Total eligible cases × 100 |
| Exception rate | Exception cases ÷ Total processed cases × 100 |

The website displays these formulas as authored text.

It does not calculate them.

### 13.8 Metric categories

Five category summaries are also displayed:

1. Adoption & Usage
2. Operational Efficiency
3. Quality & Risk
4. Business Impact
5. AI & Automation

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 14. Product Portfolio

### 14.1 Source

```text
src/components/sections/Portfolio.astro
```

Primary data:

```text
products
```

### 14.2 Purpose

The section provides four representative case studies across:

- FinTech;
- HealthTech;
- Telecom.

Primary heading:

```text
Real products. Real impact.
Across domains and platforms.
```

Portfolio lens:

```text
Problem
→ Ownership
→ Solution
→ Execution
→ Outcome
```

### 14.3 Product-card contract

Each `products` record contains:

| Field | Rendered Use |
|---|---|
| `number` | Case-study sequence |
| `company` | Company / domain label |
| `title` | Product title |
| `short` | Short product description |
| `problem` | Problem statement |
| `ownership` | Authored ownership statement |
| `outcome` | Authored outcome statement |
| `stats` | Three card statistics |
| `tags` | Capability/domain tags |
| `url` | Case-study destination |
| `tint` | Visual theme |

### 14.4 Product 01 — Integrated Channels Suite

Company:

```text
M2P FINTECH
```

Title:

```text
Integrated Channels Suite
```

Short description:

```text
Digital banking platform for banks and NBFCs.
```

Current statistics:

| Value | Label |
|---|---|
| `100+` | Banks deployed |
| `12` | Domain apps |
| `Multi-tenant` | Architecture |

Tags:

```text
Banking
Lending
Payments
Compliance
```

Current data URL:

```text
/projects/integrated-channels
```

### 14.5 Product 02 — Ayu DocConnect

Company:

```text
AYU HEALTH
```

Title:

```text
Ayu DocConnect
```

Short description:

```text
Doctor engagement, referral & patient journey platform.
```

Current statistics:

| Value | Label |
|---|---|
| `1,150+` | Doctors installed / logged in |
| `400+` | Monthly active users |
| `170+` | Weekly active users |

Tags:

```text
Doctor Engagement
Patient Journey
Referrals
Healthcare
```

Current data URL:

```text
/projects/ayu-docconnect
```

### 14.6 Product 03 — Sales Intelligence & Field Force Optimization

Company:

```text
AYU HEALTH
```

Title:

```text
Sales Intelligence & Field Force Optimization
```

Short description:

```text
Data-driven doctor acquisition, territory planning & field execution.
```

Current statistics:

| Value | Label |
|---|---|
| `+60%` | Unique visits · BDM 1 |
| `+166%` | Unique visits · BDM 2 |
| `−18% / −15%` | Distance per visit · BDM 1 / 2 |

Tags:

```text
Sales Intelligence
Territory Planning
Field Execution
Healthcare
```

Current data URL:

```text
/projects/ayu-sales-intelligence
```

### 14.7 Product 04 — Enterprise Reporting & Insights Platform

Company: **NOKIA NETWORKS**

Title: **Enterprise Reporting & Insights Platform**

Subtitle: Cross-market telecom delivery analytics & operations governance platform.

Problem: Regional delivery reporting across established market operations required a consistent and comparable management view across differing source structures, KPI interpretations and reporting contexts.

My ownership: Business analysis across requirements, KPI standardisation, process/data mapping, stakeholder alignment, reporting validation and UAT.

Outcome: Delivered a standardised analytical/reporting layer supporting consistent cross-market management insight and stronger operational decision-making.

| Value | Label |
|---|---|
| `25%` | Reporting turnaround reduction |
| `15%` | Program productivity improvement |
| `7` | International markets |

Tags: Business Analysis · Reporting Analytics · Power BI · Telecom.

Current data URL: `/projects/enterprise-reporting-insights/`.

Card 04 retains its existing styling. Cards 01–03 are unchanged. The former Nokia case-study card and cost-savings claim are replaced by the above approved reporting story.

### 14.8 Independent content ownership

The Main Product Portfolio card summaries are independently authored from the detailed project case studies.

A change to:

```text
src/data/portfolio.js
```

does not automatically update:

```text
IntegratedChannelsCaseStudy
DocConnectCaseStudy
AyuSalesIntelligenceCaseStudy
NokiaAnalyticsCaseStudy
```

Similarly, updating a detailed project page does not automatically update its Main Product Portfolio card.

When an approved project title, metric, scope statement, or outcome changes, check both representations.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 15. Tech & Data

### 15.1 Source

```text
src/components/sections/TechData.astro
```

Primary data:

```text
techLayers
```

### 15.2 Purpose

The section explains the technical translation layer involved in Product Management.

Primary heading:

```text
Where product meets technology, AI and data.
```

The section positions Product Management as the connection between:

- business intent;
- product behavior;
- technical context;
- systems;
- data;
- measurable outcomes.

### 15.3 Six technology/product layers

| # | Layer |
|---:|---|
| 01 | Business Intent |
| 02 | Product & Journeys |
| 03 | AI / GenAI Intelligence |
| 04 | Workflow & Automation |
| 05 | APIs, Architecture & Data |
| 06 | Delivery & Measurable Outcomes |

### 15.4 Product Technology Model

The authored model is:

```text
Business
    ↓
Product
    ↓
Intelligence
    ↓
Workflow & Automation
    ↓
Technology
    ↓
Outcome
```

Current supporting concepts include:

#### Business

```text
Goals, needs and constraints
```

#### Product

```text
Journeys, features and experiences
```

#### Intelligence

```text
AI / GenAI
Decisioning and insights
```

#### Workflow & Automation

```text
Rules, approvals and orchestration
```

#### Technology

```text
APIs & Data
Integrations, architecture and data
```

#### Outcome

```text
Adoption, efficiency and business value
```

### 15.5 Architecture model

The section contains native explanatory architecture for:

```text
Data Sources
        ↓
External / Connected Systems
        ↓
API Layer
        ↓
Product Services
        ↓
Data Layer
        ↓
Outputs & Impact
```

Current source groups include:

```text
Core Systems
External APIs
Partner Systems
Documents
Real-time Data
```

Connected-system labels include:

```text
Web / Mobile Apps
Partner Systems
Banks / NBFCs
Regulatory Systems
3rd Party Services
```

### 15.6 Product-service context

The native architecture labels include:

```text
REST APIs
Integrations
Security & Access Control
Business Logic
Workflows
AI / GenAI
Rules
Compliance
SQL
Data Models
DFD
ER Models
Analytics
```

These labels describe product/technical experience.

The portfolio website itself does not implement these enterprise services.

### 15.7 Tools and technologies strip

Current displayed tools:

```text
SQL
Power BI
Tableau
Looker Studio
Excel
Figma
JIRA
APIs
DFD / ER
Data Mapping
```

The Figma mark is currently loaded from:

```text
/ayu-docconnect/logos/figma.svg
```

This is a reused production asset rather than a separate Main Portfolio logo file.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 16. Outcomes

### 16.1 Source

```text
src/components/sections/Outcomes.astro
```

Primary data:

```text
outcomes
```

### 16.2 Purpose

The section connects product work to measurable business outcomes.

Primary heading:

```text
Outcomes that connect product work
to real business performance.
```

Current outcome categories include:

- adoption;
- engagement;
- efficiency;
- automation;
- compliance;
- cost optimization;
- business impact.

### 16.3 Six authored outcome records

| Outcome | Title | Source Label |
|---|---|---|
| `40% → 75%` | Doctor adoption | AYU HEALTH · DOCONNECT |
| `10 → 2 days` | Provider payout turnaround | PHONEME / AYU HEALTH |
| `25%` | Manual compliance effort reduction | M2P FINTECH · AML / KYC |
| `20%` | Manual reconciliation reduction | M2P FINTECH · UPI COLLECTIONS |
| `30%` | Manual claim processing reduction | CLAIMS AUTOMATION |
| `25%` | Telecom operating-cost reduction | NOKIA NETWORKS |

Current delta labels:

| Outcome | Displayed Delta |
|---|---|
| Doctor adoption | `↑ 88%` Increase in adoption |
| Provider payout turnaround | `↓ 80%` Turnaround time |
| Compliance effort | `↓ 25%` Manual effort reduced |
| Reconciliation | `↓ 20%` Operations effort reduced |
| Claims | `↓ 30%` Processing effort reduced |
| Telecom operating cost | `↓ 25%` Opex cost reduction |

These are authored portfolio metrics and are not calculated by the website.

### 16.4 Outcome Framework

The section presents:

```text
Adoption
→ Engagement
→ Efficiency
→ Compliance
→ Business Impact
```

### 16.5 Key Outcomes by Domain

Current authored summary values:

| Domain Outcome | Value |
|---|---|
| Adoption & Engagement | `+60%` |
| Operational Efficiency | `+35%` |
| Compliance & Risk Reduction | `+25%` |
| Cost Optimization | `+25%` |

These values are separate authored summary indicators and must not automatically be substituted for detailed project-specific metrics.

### 16.6 Business Impact

Four impact themes are rendered:

1. Better Customer Experience
2. Lower Operational Cost
3. Stronger Compliance Posture
4. Scalable Product Platforms

### 16.7 Important metric distinction

The Main Product Portfolio currently contains:

```text
25% Telecom operating-cost reduction
```

in the Outcomes section.

The replacement Nokia project card and detailed case study now use:

```text
25% reporting-turnaround reduction; 15% program-productivity improvement; 7 international markets
```

The broader Outcomes section is unchanged by the Nokia/Card 04 replacement. Its operating-cost claim is separate from the new reporting case study and must not be attributed to it.

Do **not** silently normalize one to the other.

Any reconciliation requires explicit confirmation of intended scope and wording.

---

> 📚 **REFERENCE DETAIL**

## 17. Connect

### 17.1 Source

```text
src/components/sections/Connect.astro
```

Primary data:

```text
connectFocus
```

### 17.2 Purpose

The final section provides:

- professional positioning;
- opportunity preferences;
- contact form;
- professional platform links;
- availability;
- location context.

Primary heading:

```text
Building products where business, technology
and outcomes meet.
```

### 17.3 Current positioning

The section states:

```text
Based in Noida, India
```

and presents openness to:

- Product Management;
- Technical Product;
- Business Transformation opportunities.

The supporting copy references:

- data;
- business analysis;
- 0 → 1 product development;
- enterprise platform management;
- AI / GenAI;
- workflow automation;
- data-driven product decisions.

### 17.4 Connect focus areas

Five `connectFocus` records are rendered:

| Focus | Supporting Text |
|---|---|
| Product Strategy | From discovery to scalable products. |
| AI & GenAI | Intelligent products and automation. |
| Workflow Automation | Efficient and scalable operations. |
| Technical Product Management | Platforms, integrations and enterprise systems. |
| Data & Analytics | Insights that drive business outcomes. |

### 17.5 Contact form fields

Current controls:

1. Name
2. Company
3. Email
4. Inquiry topic
5. Message

Current explicit accessible labels:

```text
Name
Company
Email
Inquiry topic
Message
```

Required fields:

```text
Name
Email
```

Message limit:

```text
500 characters
```

The visible counter begins at:

```text
0/500
```

### 17.6 Inquiry topics

The select contains:

```text
I'm reaching out for...
Product Management
Technical Product Management
Business Analysis
Enterprise Technology / Transformation
Other
```

The placeholder remains the empty default value.

The five real options were added as part of the repository QA fixes.

### 17.7 Form behavior

The form does not submit to a backend.

On submission, JavaScript:

1. prevents the normal HTML form submission;
2. reads values using `FormData`;
3. builds an email subject;
4. builds an email body;
5. navigates to a `mailto:` URL.

Current destination in source:

```text
manoj.pant.pm@outlook.com
```

Subject format:

```text
Portfolio inquiry from <name>
```

Body includes:

```text
Name
Company
Email
Topic
Message
```

The user's configured email client must complete the send.

There is:

- no API endpoint;
- no form database;
- no server-side validation;
- no inbox integration;
- no delivery confirmation.

### 17.8 Professional links

Current links:

| Platform | Destination |
|---|---|
| LinkedIn | `https://www.linkedin.com/in/manoj-pant-35129495/` |
| GitHub | `https://github.com/mapant` |
| X | `https://x.com/` |

The X destination is currently generic and should not be documented as a confirmed personal profile.

### 17.9 Availability

The section currently displays:

```text
Full-time
Contract / Consulting
Remote / Hybrid
```

Location panel:

```text
Based in Noida, India
```

Supporting text states availability across India and openness to relocation for the right role.

### 17.10 Connect visual

The Product Planning Desk scene is authored as inline SVG.

It is not an externally loaded illustration.

The GitHub logo used in the social links is:

```text
/ayu-docconnect/logos/github.svg
```

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 18. Main Data Source

The primary data file is:

```text
src/data/portfolio.js
```

It exports twelve named collections:

| Collection | Main Consumer |
|---|---|
| `navItems` | Header |
| `expertise` | Overview |
| `ecosystemCards` | Ecosystem |
| `challengeCards` | Challenge |
| `strategySteps` | Strategy |
| `scopeCards` | PM Scope |
| `metricGroups` | Product Metrics |
| `metricFormulas` | Product Metrics |
| `products` | Product Portfolio |
| `techLayers` | Tech & Data |
| `outcomes` | Outcomes |
| `connectFocus` | Connect |

The data file does **not** contain every visible word.

Literal content also exists inside individual Astro section components.

A text or metric change must therefore be traced to its actual source before editing.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 19. Important Data / Rendering Contracts

### 19.1 Navigation

```text
navItems
↔ section IDs
```

All ten navigation IDs must correspond to actual section IDs.

If a section ID changes, check:

- `navItems`;
- section markup;
- `navigation.js`;
- direct links;
- PDF section collection.

### 19.2 Expertise

`expertise` order is positionally connected to the icon mapping inside `Overview.astro`.

Changing array order without checking icons can misalign visual meaning.

### 19.3 Ecosystem cards

Card title values are used to choose icons through title-based lookup maps.

Renaming a title may break its intended icon selection unless the lookup is also updated.

### 19.4 Challenge cards

```text
challengeCards[index]
↔ illustrationKeys[index]
```

Current illustration order:

```text
workflow
integration
decision
automation
data
alignment
```

### 19.5 Strategy

```text
strategySteps[index]
↔ icon[index]
↔ desktop grid position
```

Preserve the seven-step semantic order.

### 19.6 PM Scope

```text
scopeCards[index]
↔ illustration[index]
↔ icon[index]
↔ tone[index]
```

All eight scope records must stay positionally aligned with the illustration, icon, and tone mappings.

### 19.7 Product Metrics

`metricGroups[n]` selects its icon using the numeric record number.

Keep:

```text
01–06
```

consistent and sequential unless rendering logic is intentionally changed.

### 19.8 Product cards

The `products` array order is also positionally mapped to:

```text
banking
docconnect
sales
telecom
```

inside `Portfolio.astro`.

Reordering product records requires checking the illustration mapping.

### 19.9 Outcomes

The six outcome records are positionally mapped to:

```text
users
clock
document
gear
bolt
database
```

inside `Outcomes.astro`.

### 19.10 Connect focus

`connectFocus` is positionally mapped to:

```text
target
brain
network
cube
chart
```

inside `Connect.astro`.

Changing focus order without updating this icon mapping can create semantic mismatch.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 20. Component Map

All paths are relative to the repository root.

| Component / File | Responsibility |
|---|---|
| `src/pages/portfolio/index.astro` | Main Portfolio route composition |
| `src/layouts/PortfolioLayout.astro` | Main Portfolio wrapper around SiteLayout |
| `src/layouts/SiteLayout.astro` | Common HTML/head/body structure and metadata |
| `src/components/Header.astro` | Main Portfolio identity and section navigation |
| `src/components/HeaderActions.astro` | Home, View Projects and PDF actions |
| `src/components/ResponsiveNavigation.astro` | Responsive Menu and shared responsive scripts |
| `src/components/SavePdf.astro` | Save PDF trigger and busy/error state |
| `src/components/PortfolioIcon.astro` | Shared native icon vocabulary |
| `src/components/PortfolioDiagram.astro` | Ecosystem, Challenge, Strategy and lifecycle diagrams |
| `src/components/PortfolioIllustration.astro` | Section/project illustrations |
| `src/components/sections/Overview.astro` | Overview |
| `src/components/sections/Ecosystem.astro` | Ecosystem |
| `src/components/sections/Challenge.astro` | Challenge |
| `src/components/sections/Strategy.astro` | Strategy |
| `src/components/sections/PMScope.astro` | PM Scope |
| `src/components/sections/Metrics.astro` | Product Metrics |
| `src/components/sections/Portfolio.astro` | Product case-study cards |
| `src/components/sections/TechData.astro` | Tech & Data |
| `src/components/sections/Outcomes.astro` | Outcomes |
| `src/components/sections/Connect.astro` | Connect form, social links and availability |
| `src/data/portfolio.js` | Shared Main Portfolio authored data |
| `src/scripts/navigation.js` | Main section active-state tracking |
| `src/scripts/tablet-desktop-fit.js` | Tablet desktop-fit behavior |
| `src/scripts/responsive-relationships.js` | Compact relationship/diagram adjustments |
| `src/scripts/save-portfolio-pdf.js` | Print/PDF preparation |
| `src/styles/portfolio.scss` | Main Portfolio base styling and responsive rules |
| `src/styles/page-view.scss` | Current viewport-sized desktop frame and dense-layout overrides |
| `src/styles/portfolio-print.css` | Shared print/export styling |

---

> 🖼️ **ASSETS & VISUALS**

## 21. Icons, Diagrams, Illustrations, and Assets

### 21.1 Native visual system

The majority of Main Product Portfolio visuals are native:

```text
HTML
CSS
Inline SVG
PortfolioIcon
PortfolioDiagram
PortfolioIllustration
```

They are not stored screenshot slices.

### 21.2 Header asset

```text
/profile/portrait.jpg
```

### 21.3 Reused vendor assets

Current Main Portfolio source reuses:

```text
/ayu-docconnect/logos/figma.svg
/ayu-docconnect/logos/github.svg
```

for:

- Figma in Tech & Data;
- GitHub in Connect.

These are production assets under `public/`.

Their directory name does not mean those icons are exclusive to the DocConnect route.

### 21.4 No documentation visual references

There are no visual-reference screenshots stored under:

```text
docs/references/
```

Documentation remains Markdown-only.

Production/live assets remain under:

```text
public/
```

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 22. Styling Architecture

The Main Product Portfolio uses two primary style layers:

```text
src/styles/portfolio.scss
src/styles/page-view.scss
```

### `portfolio.scss`

Owns:

- base palette;
- typography;
- Header foundations;
- section designs;
- card systems;
- diagrams;
- mobile layouts;
- historical/base responsive rules.

### `page-view.scss`

Owns the current viewport-sized desktop frame and dense layout overrides used by the Main Portfolio and selected project routes.

Because both stylesheets participate in the final cascade, inspecting only `portfolio.scss` is not sufficient to determine final desktop geometry.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 23. Desktop Behaviour

Current desktop viewport behavior applies from:

```text
min-width: 1280px
```

The current header height is:

```text
clamp(72px, 6.2vw, 120px)
```

Each Main Product Portfolio section uses:

```text
height: calc(100dvh - var(--header-h))
```

with:

```text
width: 100%
max-width: none
aspect-ratio: auto
overflow: hidden
```

The older base rule in `portfolio.scss` includes:

```text
max-width: 1440px
aspect-ratio: 16 / 10
```

but `page-view.scss` overrides that rule for the current desktop viewport-fit implementation.

Therefore, the old 16:10 base declaration must not be treated as the universal current desktop frame.

### Desktop header layout

The Header is organized into:

```text
Identity
Navigation
Actions
```

At desktop size, the ten navigation links are displayed as:

```text
5 columns × 2 rows
```

The current desktop action controls are standardized through `HeaderActions.astro`.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 24. Tablet Behaviour

Tablet range:

```text
768px – 1279px
```

The portfolio reuses:

```text
src/scripts/tablet-desktop-fit.js
```

The script treats:

```text
1280 × 665
```

as the desktop presentation basis and proportionally fits the existing desktop composition into the available tablet viewport.

Important behavior:

- desktop media rules are mirrored for the tablet-fit presentation;
- viewport units are resolved against the desktop basis;
- the existing portfolio canvas is scaled;
- the route is not rebuilt as a second independent tablet design;
- original styles remain authoritative outside the fitting range.

The implementation is therefore not CSS-only.

Do not add a second tablet scaling system without explicitly replacing the existing architecture.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 25. Mobile Behaviour

Native responsive behavior applies below:

```text
768px
```

Shared responsive navigation changes to the Menu control.

The mobile system uses:

- native document flow;
- compact Header;
- responsive Menu;
- reflowed section grids;
- stacked cards;
- route-specific responsive rules;
- shared relationship adjustments.

The original `portfolio.scss` also contains older layout breakpoints at:

```text
860px
560px
```

These remain part of the CSS cascade, while the shared responsive/navigation architecture treats:

```text
767px
```

as the compact-navigation/mobile boundary.

When debugging responsive behavior, inspect both:

```text
portfolio.scss
page-view.scss
ResponsiveNavigation.astro
tablet-desktop-fit.js
responsive-relationships.js
```

rather than relying on one breakpoint in isolation.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 26. Responsive Menu Behaviour

The shared Menu is implemented by:

```text
ResponsiveNavigation.astro
```

The button contains:

```text
aria-controls
aria-expanded
```

The compact menu supports:

- click to open/close;
- close on navigation selection;
- Escape handling;
- outside-click handling;
- responsive header-height calculation;
- focus restoration on Escape.

Below the compact breakpoint, the section navigation is hidden until the JavaScript-applied:

```text
navigation-open
```

state is present.

The repository QA review classified the no-JavaScript fallback as:

```text
VALID BUT LOW PRACTICAL IMPACT
```

and it remains intentionally deferred.

Do not document it as resolved.

---

> 📄 **PDF & EXPORT**

## 27. PDF / Export Behaviour

### 27.1 Trigger

The Header renders:

```text
SavePdf.astro
```

in normal portfolio mode.

Visible/accessibility label:

```text
Save PDF
```

### 27.2 Export source

For the Main Product Portfolio, `savePortfolioPdf()` fetches:

```text
location.pathname + location.search
```

The current route is therefore:

```text
/portfolio/
```

rather than `/`.

### 27.3 Section collection

The export script uses Header navigation anchors to locate the ten portfolio sections.

Expected page count:

```text
10
```

The export fails if it does not find exactly ten unique presentation sections.

This makes the relationship between:

```text
navItems
section IDs
Header anchors
```

important to PDF behavior.

### 27.4 Print preparation

The script:

1. fetches fresh HTML;
2. parses the current page;
3. removes scripts and module-preload links;
4. identifies the ten sections;
5. clones the authored presentation;
6. keeps the selected section for each PDF page;
7. removes dialogs and interactive export-only elements;
8. loads styles, fonts, and images;
9. freezes desktop responsive rules;
10. prepares browser-print sheets;
11. invokes the browser print dialog.

Desktop print basis:

```text
1280 × 665
```

### 27.5 Output model

There is no backend PDF service.

The workflow is:

```text
Prepare print document
      ↓
Browser print dialog
      ↓
User selects Save as PDF
```

Actual output fidelity depends on browser print behavior and should be tested separately from source/build validation.

---

> ♿ **ACCESSIBILITY & INTERACTION**

## 28. Accessibility and Interaction Notes

### 28.1 Section semantics

Sections use IDs and `aria-labelledby` relationships.

Examples:

```text
#ecosystem → ecosystem-title
#challenge → challenge-title
#strategy → strategy-title
#scope → scope-title
#metrics → metrics-title
#portfolio → portfolio-title
#tech → tech-title
#outcomes → outcomes-title
#connect → connect-title
```

### 28.2 Header

The main section navigation uses:

```text
aria-label="Portfolio sections"
```

The identity uses:

```text
aria-label="Go to homepage"
```

### 28.3 Responsive Menu

The Menu provides:

```text
aria-controls
aria-expanded
```

and keyboard/outside-click behavior.

### 28.4 Connect form

All five form controls now have explicit accessible names:

```text
Name
Company
Email
Inquiry topic
Message
```

This was one of the approved repository QA fixes.

### 28.5 Decorative visuals

Many decorative SVG/illustration elements are explicitly:

```text
aria-hidden="true"
```

where appropriate.

### 28.6 Source-level limitation

These accessibility features are source-confirmed implementation behavior.

They do not constitute:

- formal accessibility certification;
- complete WCAG verification;
- screen-reader certification;
- browser/device compatibility certification.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 29. Known Source Exception

A separately authored CTA inside:

```text
src/components/SalesIntelligenceOutcomes.astro
```

currently points to:

```text
/#connect
```

The active Connect section now exists at:

```text
/portfolio/#connect
```

This exception belongs to the Ayu Sales Intelligence source rather than the Main Product Portfolio component itself.

It is documented as a known exception and must not be described as resolved until the production source is changed and verified.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 30. Authored Metrics and Scope Boundaries

Main Product Portfolio metrics must be treated as authored claims with their existing labels and scope.

Do not:

- invent new metrics;
- calculate new percentages from unrelated values;
- merge Main Portfolio and detailed project metrics automatically;
- silently alter ranges;
- change signs;
- broaden a pilot result into a portfolio-wide result;
- interpret decorative chart values as measured source data.

Examples of independently authored values include:

```text
40% → 75% Doctor adoption
10 → 2 days Provider payout turnaround
25% Manual compliance effort reduction
20% Manual reconciliation reduction
30% Manual claim processing reduction
25% Telecom operating-cost reduction
```

Project-detail references contain their own detailed scope and qualification.

Where values differ between summary and detailed pages, preserve the distinction and request explicit confirmation before changing them.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 31. Main Portfolio and Project Case-Study Synchronization

The Main Product Portfolio and detailed project pages do not share a single content model.

Main Portfolio summaries are stored primarily in:

```text
src/data/portfolio.js
```

Detailed project content lives in project-specific Astro components.

Therefore, changing any of the following requires checking both representations:

- project title;
- short description;
- problem statement;
- ownership;
- outcome;
- key metrics;
- case-study route;
- company label;
- product tags;
- previous/next project navigation.

Do not assume changing a case-study page automatically updates its card.

Do not assume changing the card automatically updates the case study.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 32. Maintenance Rules

When modifying the Main Product Portfolio:

1. Preserve the ten-section sequence unless a structural change is explicitly requested.
2. Keep `navItems` aligned with actual section IDs.
3. Preserve Main Portfolio anchor names unless routing/navigation changes are intentional.
4. Check `navigation.js` when section IDs or Header links change.
5. Check PDF section collection when Header navigation changes.
6. Search both `portfolio.js` and the owning Astro section before changing visible text.
7. Preserve position-sensitive icon/illustration mappings.
8. Check Main Portfolio project summaries separately from detailed project pages.
9. Do not silently reconcile conflicting metrics or terminology.
10. Preserve current Home → `/`.
11. Preserve current View Projects → `/portfolio/#portfolio`.
12. Preserve Connect → `/portfolio/#connect`.
13. Keep production assets under `public/`.
14. Do not place visual-reference screenshots under `docs/references/`.
15. Do not modify generated `dist/` output as the source implementation.
16. Preserve the current desktop/tablet/mobile architecture unless responsive behavior is explicitly being redesigned.
17. Do not introduce another PDF/export mechanism without intentionally replacing the current browser-print architecture.
18. Treat shared files such as `HeaderActions.astro`, `ResponsiveNavigation.astro`, `page-view.scss`, and `save-portfolio-pdf.js` as cross-route changes.
19. Preserve explicit accessible names and inquiry-topic options in Connect.
20. Do not describe source-level accessibility fixes as formal accessibility certification.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 33. Important Source Relationships

Primary Main Portfolio content flow:

```text
src/data/portfolio.js
        ↓
Header
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

Page composition:

```text
src/pages/portfolio/index.astro
        ↓
PortfolioLayout.astro
        ↓
SiteLayout.astro
```

Shared interaction flow:

```text
Header
    ↓
ResponsiveNavigation
    ↓
HeaderActions
    ↓
SavePdf
```

Supporting scripts:

```text
navigation.js
tablet-desktop-fit.js
responsive-relationships.js
save-portfolio-pdf.js
```

Supporting styles:

```text
portfolio.scss
page-view.scss
portfolio-print.css
```

A change to these shared files can affect multiple sections or routes.

---

> ✅ **QA & VALIDATION**

## 34. Current Validation Status

Current implementation reference is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Current source confirms:

| Area | Status |
|---|---|
| `/portfolio/` route | Confirmed |
| Ten-section composition | Confirmed |
| Section order | Confirmed |
| Section anchors | Confirmed |
| Main Header structure | Confirmed |
| Identity → `/` | Confirmed |
| Home → `/` | Confirmed |
| View Projects → `/portfolio/#portfolio` | Confirmed |
| Active-section JavaScript | Confirmed |
| Main `portfolio.js` data collections | Confirmed |
| Four project cards | Confirmed |
| Connect accessible labels | Confirmed |
| Five inquiry-topic options | Confirmed |
| Mailto form behavior | Confirmed |
| Responsive source architecture | Confirmed |
| Ten-page PDF source logic | Confirmed |
| Deferred JavaScript navigation fallback | Still deferred |
| Sales `/#connect` exception | Still present |

The final routing/header implementation associated with this source state previously recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

Those technical checks confirm build/source integrity for that recorded implementation state.

They do **not** by themselves certify:

- current pixel-perfect visual alignment;
- all desktop resolutions;
- all tablet/mobile dimensions;
- native browser zoom;
- every runtime interaction;
- formal accessibility compliance;
- all external destinations;
- final PDF print fidelity.

Historical Main Portfolio measurements performed before later shared route/header changes recorded approximately:

```text
1280 × 665 viewport
79.36px header
1265 × 585.63px section area
```

Those measurements are historical evidence and must not be treated as a fresh acceptance measurement of the current shared-header implementation.

For repository-wide QA findings and current resolution status, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

For repository-wide architecture and maintenance constraints, see:

[08-project-context.md](08-project-context.md)
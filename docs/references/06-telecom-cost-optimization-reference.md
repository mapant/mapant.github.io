# Telecom Cost Optimization Reference

Complete implementation, analytics/product scope, data model, architecture, delivery, navigation, responsive behavior, export, outcome qualification, and maintenance reference for the Telecom Cost Optimization case study.

<div align="center">

### 📡 Telecom Analytics · Cost Optimization

![Telecom](https://img.shields.io/badge/Telecom-E76F51?style=for-the-badge)
![Analytics](https://img.shields.io/badge/Analytics-0A66C2?style=for-the-badge)
![Spatial Intelligence](https://img.shields.io/badge/Spatial_Intelligence-059669?style=for-the-badge)
![CapEx / OpEx](https://img.shields.io/badge/CapEx_%2F_OpEx-F59E0B?style=for-the-badge)
![10 Sections](https://img.shields.io/badge/10_Sections-2563EB?style=for-the-badge)
![15–20% Supplied Result](https://img.shields.io/badge/15--20%_Supplied_Result-7C3AED?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance


---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Purpose and Product Context

The Telecom Cost Optimization case study presents an enterprise network-analytics and capital-efficiency product that connects:

- network assets;
- rollout activity;
- field operations;
- telemetry;
- finance;
- geography;
- CapEx / OpEx context;
- analytical decision support.

The public case-study title remains:

```text
Telecom Analytics & Cost Optimization
```

while source files retain Nokia-oriented naming.

The core product thesis is:

```text
Connect where the network is
with what it costs.
```

The case study demonstrates how disconnected network, operational, geographic, and finance records can be brought together through a common asset-centered analytical model.

The portfolio represents this product through:

- ten case-study sections;
- native maps;
- source-to-model diagrams;
- KPI/data-model concepts;
- delivery/rollout models;
- a command-centre-style product explorer;
- impact/outcome content;
- analytics-maturity and leadership concepts.

The portfolio website is **not** the network-analytics system itself.

It does not connect to:

- production telecom networks;
- OSS / BSS platforms;
- network telemetry;
- live asset databases;
- finance systems;
- GIS systems;
- Power BI;
- Tableau;
- SQL databases;
- map services;
- operational field systems.

All maps, bars, source systems, filters, KPIs, and data relationships shown in the case study are authored explanatory product representations.

---

> 🔗 **ROUTING & NAVIGATION**

## 2. Route and Page Entry Point

Current route:

```text
/projects/telecom-cost-optimization/
```

Route source:

```text
src/pages/projects/telecom-cost-optimization.mdx
```

Primary implementation component:

```text
src/components/NokiaAnalyticsCaseStudy.astro
```

Rendering flow:

```text
telecom-cost-optimization.mdx
        ↓
NokiaAnalyticsCaseStudy.astro
        ↓
ProjectShell.astro
        ↓
10 Telecom case-study sections
```

Current project sequence:

```text
Previous → Ayu Sales Intelligence
Current  → Telecom Analytics & Cost Optimization
Next     → Integrated Channels
```

---

> 📚 **REFERENCE DETAIL**

## 3. Case Study Structure

All ten sections are authored directly in:

```text
src/components/NokiaAnalyticsCaseStudy.astro
```

Project-specific styling lives primarily in:

```text
src/styles/nokia-analytics-case-study.scss
```

with shared viewport-fit overrides from:

```text
src/styles/page-view.scss
```

The case study does not use a project-specific JSON file, CMS, or external data loader.

Detailed content is primarily literal Astro markup.

---

> 🔗 **ROUTING & NAVIGATION**

## 4. Section Order and Navigation Anchors

The project contains ten sections.

| # | Section | Anchor | Approved Section Heading |
|---:|---|---|---|
| 1 | Overview | `#overview` | Connect where the network is with what it costs. |
| 2 | Ecosystem | `#ecosystem` | Join network activity, finance and place. |
| 3 | Challenge | `#challenge` | The asset existed; the decision context did not. |
| 4 | Strategy | `#strategy` | Trust the join before trusting the insight. |
| 5 | PM Scope | `#pm-scope` | Define the semantic layer users can make decisions with. |
| 6 | Architecture | `#architecture` | Converge independent domains through an asset-centred model. |
| 7 | Delivery | `#delivery` | Roll out insight at the level teams act. |
| 8 | Product Explorer | `#product-explorer` | A spatial cost-intelligence command centre. |
| 9 | Impact | `#impact` | Asset visibility turns disconnected records into cost action. |
| 10 | Product Leadership | `#leadership` | Analytics trust depends on what users cannot see. |

These IDs are project-specific.

Do not replace them with Main Product Portfolio IDs such as:

```text
#tech-data
#product-metrics
#product-leadership
```

unless the project structure is intentionally redesigned.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 5. Section Structure

| # | Section | Main Information | Visual / Layout Model |
|---:|---|---|---|
| 1 | Overview | Asset identity + geography + cost thesis; supplied savings result | Two-column narrative/map composition |
| 2 | Ecosystem | Five source domains, shared analytical core, three decision-user groups | Converging/fan-out connector model |
| 3 | Challenge | Disconnected source records and missing join context | Before/after decision-context composition |
| 4 | Strategy | Identity, Join, Measure, Drill | Four-quadrant strategy matrix and decision ladder |
| 5 | PM Scope | Discovery, definition, modeling and delivery | Product/data-contract rail and stakeholder bar |
| 6 | Architecture | Sources, ingestion, conformed model, consumers | Layered native architecture diagram |
| 7 | Delivery | Site → regional → enterprise rollout | Rollout ladder and readiness/feedback conditions |
| 8 | Product Explorer | Executive signals, spatial view, cost drivers | Static dashboard-style command centre |
| 9 | Impact | Integrate → Locate → Understand → Optimise | Supplied savings range and impact chain |
| 10 | Product Leadership | Trust pyramid and analytics maturity | Now → Next → Future roadmap |

Each section also includes its own numbered:

```text
.case-page-foot
```

content strip.

These section footers are part of the project content and are distinct from the shared ProjectShell footer.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 6. Telecom / Network Analytics Context

The product story brings together five source domains:

1. Hardware Rollouts
2. Field Operations
3. Network Telemetry
4. Finance
5. Geographic Data

These domains converge into shared analytical context around:

```text
Asset Identity
Spatial Context
Cost Context
```

The model is then consumed by decision users such as:

- Engineering;
- Field Operations;
- Finance Leadership.

The core opportunity is not simply to visualize a map.

It is to create a trusted analytical relationship between:

```text
what the asset is
where it is
what activity occurred
what it costs
what decision should follow
```

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 7. Product Problem

The project identifies a common enterprise analytics problem:

```text
The asset existed;
the decision context did not.
```

Operational and financial records can exist independently while still failing to provide useful decision context.

Examples include:

- rollout records;
- field records;
- asset inventories;
- network telemetry;
- finance records;
- map/geographic records.

Without a stable join across those records, teams can struggle to answer:

- What is this asset?
- Where is it located?
- What rollout/field activity relates to it?
- What cost belongs to it?
- Is capacity being used?
- Where are inefficiencies?
- Where should action be taken?

---

> 📚 **REFERENCE DETAIL**

## 8. Problem / Opportunity Areas

The case-study narrative identifies issues such as:

- disconnected operational records;
- disconnected finance context;
- incomplete geographic visibility;
- inconsistent asset identity;
- overlapping investments;
- unmapped assets;
- underused capacity;
- rollout inefficiency;
- limited cost attribution;
- weak decision traceability.

The Challenge section also uses the phrase:

```text
multi-million-dollar inefficiencies
```

as supplied narrative context.

This is **not** a newly calculated or audited amount in the portfolio.

No underlying raw financial dataset is shipped with the website.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 9. Core Product Thesis

The analytical approach can be summarized as:

```text
Standardize Asset Identity
        ↓
Attach Geography
        ↓
Attach Cost
        ↓
Define Decision KPIs
        ↓
Enable Drill-Down
        ↓
Identify Action
```

The project repeatedly emphasizes:

```text
Trust the join
before trusting the insight.
```

This principle is central to:

- Strategy;
- Architecture;
- Product Explorer;
- Impact;
- Product Leadership.

---

> 🖼️ **ASSETS & VISUALS**

## 10. Asset Identity

Asset identity is the primary conceptual join key.

It appears across:

- Overview;
- Ecosystem;
- Strategy;
- PM Scope;
- Architecture;
- Impact.

It must remain represented as:

```text
the stable identity used to connect multiple data domains
```

rather than as only:

- a map pin;
- a site label;
- a finance code;
- a visual marker.

The product story depends on identity being the semantic bridge between operational and financial context.

---

> 📚 **REFERENCE DETAIL**

## 11. Geography / Location

Geography is represented through:

- authored maps;
- spatial relationships;
- location context;
- regional drill-down;
- site-level analysis.

The portfolio uses native SVG map geometry.

It does **not** query:

- Google Maps;
- Mapbox;
- Leaflet;
- GIS services;
- live coordinate datasets.

Map markers and regions are static product illustrations.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 12. Finance / Cost Context

The analytics model connects operational asset context with:

- CapEx;
- OpEx;
- asset-level cost;
- period-level cost;
- regional cost;
- rollout cost;
- capital-efficiency decisions.

The supplied result is expressed as:

```text
15%–20% CapEx / OpEx savings
```

through asset-visibility optimization.

This range must remain qualified as a supplied project result.

It must not be converted into a single-point percentage without confirming:

- measurement basis;
- population;
- time period;
- CapEx / OpEx definition;
- scope.

---

> 📚 **REFERENCE DETAIL**

## 13. Decision Users

Three major user groups are represented:

### Engineering

Uses the model to understand:

- asset context;
- network deployment;
- capacity;
- performance;
- engineering decisions.

### Field Operations

Uses the model to understand:

- site-level context;
- field activity;
- rollout execution;
- operational action.

### Finance Leadership

Uses the model to understand:

- cost;
- capital efficiency;
- portfolio-level implications;
- investment decisions.

These roles use a shared analytical model but do not necessarily require identical information or views.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 14. Overview

### 14.1 Purpose

The Overview introduces the core relationship between:

```text
Asset Identity
+
Geography
+
Cost Context
```

Primary heading:

```text
Connect where the network is
with what it costs.
```

### 14.2 Visual structure

The section contains:

- narrative content;
- native network/spatial illustration;
- map-style geometry;
- asset markers;
- explanatory legend;
- supplied result strip.

The map is an authored schematic.

It is not a screenshot or external GIS embed.

### 14.3 Result strip

The Overview presents the supplied:

```text
15%–20%
```

result in the context of:

```text
CapEx / OpEx savings via asset visibility optimisation
```

Preserve the range and qualification.

---

> 📚 **REFERENCE DETAIL**

## 15. Ecosystem

### 15.1 Purpose

The Ecosystem explains how independent enterprise data domains must converge before analytics can support decisions.

Primary heading:

```text
Join network activity,
finance and place.
```

### 15.2 Five source domains

Current conceptual source domains:

```text
Hardware Rollouts
Field Operations
Network Telemetry
Finance
Geographic Data
```

### 15.3 Shared analytical core

The converging paths lead into a central model based on:

```text
Asset
Spatial
Cost
```

context.

### 15.4 Decision consumers

The model then branches into user/decision groups such as:

```text
Engineering
Field Operations
Finance Leadership
```

### 15.5 Visual model

The section uses:

- source cards;
- native SVG convergence paths;
- central semantic/analytical core;
- branching connectors;
- decision-user cards.

Preserve the meaning and direction of:

```text
Source
→ Model
→ Decision
```

when modifying connector geometry.

---

> 📚 **REFERENCE DETAIL**

## 16. Challenge

### 16.1 Purpose

The Challenge shows why data availability alone is not enough.

Primary heading:

```text
The asset existed;
the decision context did not.
```

### 16.2 Disconnected record types

The visual narrative represents isolated records from areas such as:

- field;
- rollout;
- finance;
- maps/geography.

The missing piece is:

```text
a stable semantic join
```

### 16.3 Decision consequences

Without the join, users can struggle with:

- asset visibility;
- cost attribution;
- site context;
- investment overlap;
- capacity understanding;
- rollout comparison;
- decision confidence.

### 16.4 Before/after representation

The Challenge contains a native comparison between:

```text
Disconnected Records
        ↓
Missing Decision Context
```

and:

```text
Connected Asset Context
        ↓
Actionable Insight
```

---

> 📚 **REFERENCE DETAIL**

## 17. Strategy

### 17.1 Purpose

The Strategy defines the analytical product around data trust before visualization.

Primary heading:

```text
Trust the join
before trusting the insight.
```

### 17.2 Four strategy dimensions

The strategy matrix is built around:

1. Identity
2. Join
3. Measure
4. Drill

### 17.3 Identity

Defines:

```text
what the asset is
```

and establishes the stable semantic key.

### 17.4 Join

Connects:

```text
asset
location
activity
cost
```

across source domains.

### 17.5 Measure

Defines decision-relevant metrics and KPI meaning.

### 17.6 Drill

Enables navigation from:

```text
Portfolio
→ Region
→ Site
→ Action
```

### 17.7 Decision ladder

The section separately represents movement from executive insight into operational action.

Preserve the distinction between:

- strategic overview;
- analytical drill-down;
- site-level action.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 18. PM Scope

### 18.1 Purpose

The PM Scope explains the Product Management role in defining a trusted semantic and analytical product.

Primary heading:

```text
Define the semantic layer
users can make decisions with.
```

### 18.2 PM process

The current PM rail follows:

```text
Discover
→ Define
→ Model
→ Deliver
```

### 18.3 Discovery

Focuses on understanding:

- source systems;
- data ownership;
- field meaning;
- stakeholder needs;
- decision workflows.

### 18.4 Definition

Focuses on:

- common terminology;
- asset meaning;
- source relationships;
- KPI requirements;
- business decisions.

### 18.5 Modeling

Focuses on:

- asset dimensions;
- geography;
- cost;
- data joins;
- analytical structure.

### 18.6 Delivery

Focuses on:

- usable analytical views;
- stakeholder validation;
- rollout;
- adoption;
- feedback.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 19. Data-Contract Questions

The PM Scope explicitly represents five important data-contract questions.

These include:

1. What does the asset mean?
2. How fresh is the data?
3. Who owns the source?
4. What decision does the metric support?
5. How will the value be verified?

These questions represent analytical-product governance.

They are not automated data-quality checks running on the portfolio website.

---

> 📚 **REFERENCE DETAIL**

## 20. Stakeholder Alignment

The PM Scope includes the stakeholder relationship:

```text
Engineering
↔
Field Operations
↔
Finance
↔
Analytics / Data
```

This reflects the need to define shared analytical meaning across functions.

The Product Manager role is represented as the coordination layer between:

- technical data meaning;
- operational reality;
- financial interpretation;
- user decisions.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 21. Architecture

### 21.1 Purpose

The Architecture section shows how independent source domains converge through a shared asset-centered analytical model.

Primary heading:

```text
Converge independent domains
through an asset-centred model.
```

### 21.2 Source layer

Four major source groups are represented.

The wider case-study narrative covers areas such as:

- operations;
- telemetry;
- finance;
- geography;
- rollout context.

### 21.3 Ingestion / quality layer

The architecture represents concepts such as:

- ingestion;
- validation;
- freshness.

These are conceptual system responsibilities.

The portfolio does not implement an ingestion pipeline.

### 21.4 Conformed model

The core model includes:

```text
Identity
Spatial
Measure
```

dimensions.

This is the analytical semantic layer that allows cross-domain decisions.

### 21.5 Consumers

The architecture branches into three analytical consumer contexts.

These correspond to decision needs such as:

- engineering analysis;
- field operations;
- finance/capital efficiency.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 22. Architecture Trust Concepts

Four quality/trust labels are represented in the architecture/leadership model.

The wider case-study trust themes include:

- freshness;
- coverage;
- quality;
- governance;
- spatial context.

These represent requirements for trusted analytics.

They are **not** implemented monitoring endpoints within the portfolio.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 23. Technical Context

The project references technologies and analytical capabilities such as:

```text
SQL
Power BI
Tableau
Analytics
Data Quality
Governance
```

These describe the represented product/delivery environment.

The website does not have:

- a SQL engine;
- database credentials;
- a Power BI embed;
- a Tableau embed;
- ETL jobs;
- telemetry ingestion;
- GIS integration;
- operational monitoring.

---

> 📚 **REFERENCE DETAIL**

## 24. Delivery

### 24.1 Purpose

The Delivery section explains how analytical value should be rolled out at the level where users actually make decisions.

Primary heading:

```text
Roll out insight
at the level teams act.
```

### 24.2 Delivery sequence

The rollout concept progresses through:

```text
Site Validation
        ↓
Regional Deployment / Cost Comparison
        ↓
Enterprise Capital Efficiency
```

This connects local trust and validation to broader portfolio-level decisions.

### 24.3 Site validation

Focus:

- validate asset identity;
- validate local context;
- verify cost/operational meaning;
- build trust at the lowest actionable level.

### 24.4 Regional deployment

Focus:

- compare deployment;
- compare costs;
- identify patterns;
- support regional decisions.

### 24.5 Enterprise capital efficiency

Focus:

- portfolio visibility;
- investment decisions;
- CapEx / OpEx optimization;
- enterprise-scale prioritization.

### 24.6 Readiness / feedback

The Delivery section also represents:

- readiness conditions;
- feedback loops;
- adoption considerations.

These are product rollout concepts rather than an automated deployment pipeline.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 25. Product Explorer

### 25.1 Purpose

The Product Explorer demonstrates what a decision-oriented spatial cost-intelligence product could look like.

Primary heading:

```text
A spatial cost-intelligence
command centre.
```

The section is intentionally dashboard-like.

It is still static portfolio content.

### 25.2 Main composition

The Product Explorer includes:

- four executive-signal cards;
- display-only filter labels;
- native SVG map;
- map markers;
- legend;
- cost-driver bars;
- supporting analytical labels.

### 25.3 Executive signals

The signal cards are authored values.

They are not calculated from a dataset at runtime.

### 25.4 Cost-driver bars

Bar lengths are defined through HTML/CSS presentation.

Changing a CSS width changes the illustration.

It does **not** change any underlying business calculation.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 26. Product Explorer Filter Labels

The Product Explorer displays labels such as:

```text
Region
Period
Asset Class
```

These are:

```text
display-only labels
```

implemented as spans.

They are **not** functional filters.

The page does not implement:

- dropdown filtering;
- query parameters;
- dashboard state;
- dynamic data filtering;
- data refresh.

Do not document these labels as interactive dashboard controls.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 27. Product Explorer Map

The Product Explorer map is implemented with native:

```text
SVG
```

and authored:

- shapes;
- paths;
- markers;
- labels;
- legends.

It does not use a map SDK.

There is no:

- live coordinate source;
- geocoding;
- map account;
- tile service;
- external GIS dependency.

---

> 📚 **REFERENCE DETAIL**

## 28. Impact

### 28.1 Purpose

The Impact section connects data integration to tangible cost action.

Primary heading:

```text
Asset visibility turns
disconnected records
into cost action.
```

### 28.2 Impact chain

The core sequence is:

```text
Integrate
→ Locate
→ Understand
→ Optimise
```

### 28.3 Integrate

Connect source domains around stable asset context.

### 28.4 Locate

Attach geographic/spatial meaning to the asset.

### 28.5 Understand

Combine operational and financial context.

### 28.6 Optimise

Use the shared context to support cost and capital-efficiency decisions.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 29. Supplied Outcome

The case study reports:

```text
15%–20%
```

CapEx / OpEx savings through:

```text
asset visibility optimisation
```

The source explicitly treats this as a:

```text
supplied project result
```

It is not recalculated by the portfolio.

Preserve:

- the range;
- CapEx / OpEx wording;
- asset-visibility context;
- qualification.

Do not convert:

```text
15%–20%
```

into:

```text
17.5%
20%
25%
```

without an explicitly approved content change.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 30. Main Product Portfolio Metric Difference

The Main Product Portfolio product card also describes:

```text
15–20% cost savings
```

for the Telecom case study.

However, the Main Product Portfolio Outcomes section separately includes:

```text
25% telecom operating-cost reduction
```

These are independently authored claims.

They currently differ.

This documentation does **not** reconcile them.

Do not silently normalize one value to the other during:

- layout work;
- copy cleanup;
- documentation cleanup;
- metric refactoring.

Any reconciliation requires explicit confirmation of:

- source;
- metric definition;
- time period;
- population;
- cost category;
- calculation basis.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 31. Product Leadership

### 31.1 Purpose

The final section focuses on trust, analytical maturity, and governance.

Primary heading:

```text
Analytics trust depends
on what users cannot see.
```

### 31.2 Trust pyramid

The section presents a four-layer trust model.

The wider trust concepts include:

- quality;
- freshness;
- spatial context;
- governance.

The point is that visual insight is only credible when the underlying:

```text
identity
data quality
freshness
governance
```

are trusted.

### 31.3 Analytics maturity roadmap

The section also presents:

```text
Now
→ Next
→ Future
```

as analytical maturity stages.

---

> 📚 **REFERENCE DETAIL**

## 32. Now / Next / Future

### Now

Represents:

```text
Trusted periodic reporting
```

The emphasis is on establishing reliable data and reporting foundations.

### Next

Represents:

```text
Near-real-time visibility
```

This describes future product maturity intent.

It does not mean the portfolio implements streaming telemetry.

### Future

Represents:

```text
Predictive planning
```

This describes a future analytical capability.

It does not mean predictive models are running on the website.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 33. Cross-Section Conceptual Mapping

Several concepts intentionally repeat across the case study.

| Concept | Appears In | Required Meaning |
|---|---|---|
| Asset identity | Overview, Ecosystem, Strategy, PM Scope, Architecture, Impact | Stable semantic join key |
| Geography / location | Overview map, Ecosystem, Architecture, Product Explorer | Spatial decision context |
| Finance / CapEx / OpEx | Ecosystem, Architecture, Explorer, Impact | Cost/measure context |
| Engineering / Field / Finance users | Ecosystem, PM Scope | Distinct users of shared analytical model |
| Freshness / coverage / governance | Architecture, Product Leadership | Trust requirements |
| Source → Model → Decision | Ecosystem, Architecture, Impact | Convergence and decision flow |
| Now → Next → Future | Product Leadership | Analytics maturity roadmap |

When visual diagrams change, preserve the conceptual meaning across all affected sections.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 34. Data / KPI Framework

The project does not define a separate project data schema.

Detailed content is mainly literal in:

```text
NokiaAnalyticsCaseStudy.astro
```

The product story relies on consistent analytical definitions rather than a frontmatter data model.

Important analytical concepts include:

- asset identity;
- location;
- region;
- site;
- period;
- asset class;
- cost;
- CapEx;
- OpEx;
- deployment;
- capacity;
- source freshness;
- analytical coverage;
- data governance.

These concepts should remain semantically consistent across sections.

---

> 📚 **REFERENCE DETAIL**

## 35. No Runtime Analytics Engine

The source does **not** include a project-specific:

- SQL query;
- ETL pipeline;
- data-ingestion service;
- spatial join function;
- BI semantic model;
- filter engine;
- live KPI calculation;
- report-export engine;
- telemetry collector.

The project is a static analytical-product case study.

This distinction is especially important for Product Explorer.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 36. Main Product Portfolio Synchronization

The Main Product Portfolio stores the Telecom project summary separately in:

```text
src/data/portfolio.js
```

Current Main Portfolio card includes:

```text
Company:
NOKIA NETWORKS

Title:
Telecom Analytics & Cost Optimization

Short:
Enterprise network analytics & capital-efficiency platform.
```

Current card statistics include:

```text
15–20%   Cost savings
Real-time Network insights
Scalable  Reporting framework
```

The Main Portfolio card and detailed case study are independently authored.

Changing the detailed page does not automatically update the summary card.

Review both locations when changing:

- project title;
- short description;
- problem statement;
- outcome;
- metric;
- route;
- tags.

---

> 📚 **REFERENCE DETAIL**

## 37. Real-Time Terminology

The Main Product Portfolio card uses:

```text
Real-time
Network insights
```

The detailed Telecom case study's maturity roadmap distinguishes:

```text
Now  → Trusted periodic reporting
Next → Near-real-time visibility
```

These are separately authored contexts.

Do not automatically rewrite one based on the other.

If terminology is to be reconciled, confirm the intended product capability and scope first.

---

> 🔗 **ROUTING & NAVIGATION**

## 38. Header and Navigation

### 38.1 Shared shell

The project uses:

```text
ProjectShell.astro
```

for:

- Header;
- identity;
- project-section navigation;
- active-state tracking;
- project footer.

### 38.2 Header order

Current order:

```text
Identity
Project Section Navigation
Home
Back to Portfolio
View Projects
PDF
```

### 38.3 Destinations

| Control | Destination |
|---|---|
| Identity | `/` |
| Home | `/` |
| Back to Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| PDF | Browser print/PDF preparation |

Telecom explicitly supplies:

```text
ctaText="View Projects"
ctaHref="/portfolio/#portfolio"
```

This destination was corrected during the final repository QA/fix pass.

---

> 🔗 **ROUTING & NAVIGATION**

## 39. Project Navigation Anchors

Current project Header links:

```text
Overview             → #overview
Ecosystem            → #ecosystem
Challenge            → #challenge
Strategy             → #strategy
PM Scope             → #pm-scope
Architecture         → #architecture
Delivery             → #delivery
Product Explorer     → #product-explorer
Impact               → #impact
Product Leadership   → #leadership
```

Preserve these IDs unless the entire project navigation is intentionally updated.

---

> 📚 **REFERENCE DETAIL**

## 40. Project Footer

Unlike several other project routes, Telecom keeps the shared:

```text
ProjectShell
```

project footer enabled.

Current project relationship:

```text
Previous → Ayu Sales Intelligence
Home     → Product Portfolio
Next     → Integrated Channels
```

The footer is separate from the numbered `.case-page-foot` strip inside each individual project section.

Do not confuse:

```text
section content footer
```

with:

```text
shared project-navigation footer
```

---

> 🔗 **ROUTING & NAVIGATION**

## 41. Four-Project Navigation Loop

Current project order:

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

Telecom therefore acts as the final project before the navigation cycles back to Integrated Channels.

Any project-order change requires reviewing previous/next links across all project routes.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 42. Component Map

All paths are relative to the repository root.

| File | Responsibility |
|---|---|
| `src/pages/projects/telecom-cost-optimization.mdx` | Route adapter and project frontmatter |
| `src/components/NokiaAnalyticsCaseStudy.astro` | All ten sections, literal narratives, maps, diagrams, explorer, outcomes and ProjectShell props |
| `src/styles/nokia-analytics-case-study.scss` | Project palette, section layout, maps, strategy matrix, architecture, delivery, explorer, impact and leadership styles |
| `src/styles/page-view.scss` | Shared desktop viewport/fit overrides including Product Explorer adjustments |
| `src/components/ProjectShell.astro` | Shared Header, navigation, active-state tracking and project footer |
| `src/components/HeaderActions.astro` | Home, Back to Portfolio, View Projects and PDF actions |
| `src/components/ResponsiveNavigation.astro` | Shared compact navigation |
| `src/components/SavePdf.astro` | Browser print/PDF trigger |
| `src/styles/project-case-study.scss` | Shared project-case-study defaults |
| `src/layouts/SiteLayout.astro` | Shared HTML document and metadata |
| `src/scripts/tablet-desktop-fit.js` | Tablet desktop-fit behavior |
| `src/scripts/responsive-relationships.js` | Compact relationship/diagram adjustments |
| `src/scripts/save-portfolio-pdf.js` | Print/PDF preparation |
| `src/data/portfolio.js` | Main Product Portfolio Telecom summary and separate outcomes |

There is no Nokia-specific client application or data-loader script.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 43. Styling Architecture

Primary project stylesheet:

```text
src/styles/nokia-analytics-case-study.scss
```

The route also depends on:

```text
src/styles/page-view.scss
src/styles/project-case-study.scss
```

The final rendered layout is determined by the CSS cascade across these layers.

Do not inspect only:

```text
nokia-analytics-case-study.scss
```

and assume every local declaration wins.

---

> 📚 **REFERENCE DETAIL**

## 44. Project Palette

The local project palette begins with variables such as:

```text
--nok:       #1875a8
--nok-deep:  #103d62
--nok-teal:  #08a997
--nok-green: #65a847
--nok-line:  #c9ddeb
--nok-soft:  #eef7fb
```

Additional project-specific colors and gradients remain literal within the stylesheet.

This is not a complete global design-token system for the entire portfolio.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 45. Visual Implementation

The Telecom case study primarily uses:

- HTML;
- CSS Grid;
- Flexbox;
- inline SVG;
- CSS arrows/connectors;
- native cards;
- native labels;
- authored maps;
- native bars and matrices.

It does not rely on:

- a dashboard library;
- a charting package;
- a UI framework;
- a map SDK;
- a remote telecom-analytics application.

---

> 🖼️ **ASSETS & VISUALS**

## 46. Maps and Spatial Visuals

Both the Overview and Product Explorer contain authored map/spatial visuals.

These are native source geometry.

They represent:

- sites;
- regions;
- asset positions;
- cost/spatial relationships.

They do not represent:

- live tower coordinates;
- actual current network topology;
- a GIS query;
- browser geolocation.

---

> 📚 **REFERENCE DETAIL**

## 47. Strategy Matrix

The Strategy section uses native HTML/CSS geometry for the:

```text
Identity
Join
Measure
Drill
```

matrix.

Changing card position, axis labeling, or connector direction can change the conceptual meaning.

Review the full matrix when modifying one quadrant.

---

> 📚 **REFERENCE DETAIL**

## 48. Trust Pyramid

The Product Leadership section uses native card/geometry structures for the trust model.

This is not an image of a finished dashboard or an external illustration.

Preserve:

- hierarchy;
- trust-layer ordering;
- quality/freshness/governance meaning.

---

> 🖼️ **ASSETS & VISUALS**

## 49. Production Assets

The Telecom case study has no project-specific photo folder.

Current project photograph usage is limited to the shared Header profile:

```text
/profile/portrait.jpg
```

Nokia/project identity is rendered as literal text.

Project maps, bars, matrices, diagrams, connectors, and markers are native HTML/SVG/CSS.

There is no:

- Telecom-specific downloaded map;
- remote Nokia logo service;
- Telecom screenshot dependency;
- project-specific external photograph.

No visual-reference assets are stored under:

```text
docs/references/
```

Documentation remains Markdown-only.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 50. Responsive Architecture

Current responsive model:

```text
Desktop   ≥ 1280px
Tablet    768px – 1279px
Mobile    < 768px
```

The implementation combines:

- Nokia-specific SCSS;
- shared ProjectShell styles;
- `page-view.scss`;
- `tablet-desktop-fit.js`;
- `responsive-relationships.js`;
- shared responsive navigation.

It is not a CSS-only responsive implementation.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 51. Desktop Behaviour

Desktop uses the current:

```text
>= 1280px
```

cascade.

Shared viewport-fit rules create section-sized layouts beneath the shared Header.

The project also contains route-specific local layout rules.

Some final geometry therefore depends on:

```text
Nokia SCSS
+
Project SCSS
+
page-view.scss
```

Hidden overflow at desktop sizes can conceal lower content even when the outer section dimensions appear correct.

A valid outer section size is therefore not enough to prove that every internal label fits.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 52. Product Explorer Fit Risk

The Product Explorer is one of the densest project sections.

After visual changes, manually check:

- explorer map;
- executive-signal cards;
- filter labels;
- legend;
- cost-driver bars;
- lower explanatory content;
- section footer.

Do not rely on:

```text
build PASS
```

alone to establish explorer fit.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 53. Tablet Behaviour

Tablet range:

```text
768px – 1279px
```

The project reuses:

```text
tablet-desktop-fit.js
```

against the desktop basis:

```text
1280 × 665
```

The helper:

- mirrors relevant desktop media behavior;
- resolves viewport-relative styles against the desktop basis;
- proportionally fits the authored desktop canvas.

The case study is not independently redesigned as a separate tablet page.

Do not add a second tablet-fit architecture unless intentionally replacing the existing system.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 54. Mobile Behaviour

Below:

```text
768px
```

the project uses native compact flow.

This includes:

- compact Header;
- responsive Menu;
- reflowed cards;
- stacked analytical sections;
- responsive maps/diagrams;
- normal document scrolling.

`responsive-relationships.js` can adjust relationship/connector structures at smaller sizes.

It does not introduce a second copy of the project content.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 55. Responsive Navigation

The shared compact Menu uses:

```text
ResponsiveNavigation.astro
```

Current behavior includes:

- open/close toggle;
- `aria-controls`;
- `aria-expanded`;
- Escape handling;
- outside-click handling;
- close after selecting a section;
- focus return after Escape.

The compact navigation remains JavaScript-dependent.

Repository QA classified the no-JavaScript fallback as:

```text
VALID BUT LOW PRACTICAL IMPACT
```

and it remains intentionally deferred.

Do not document it as resolved.

---

> 📄 **PDF & EXPORT**

## 56. PDF / Export Behaviour

### 56.1 Trigger

The shared project Header uses:

```text
SavePdf.astro
```

### 56.2 Export source

Project export uses:

```text
savePortfolioPdf()
```

which fetches:

```text
location.pathname + location.search
```

For this route:

```text
/projects/telecom-cost-optimization/
```

### 56.3 Expected page count

Project export requires:

```text
10
```

unique navigation-linked sections.

Therefore:

```text
Project Navigation
↔ Section IDs
↔ PDF Section Collection
```

must remain aligned.

### 56.4 Print preparation

The export flow:

1. fetches fresh route HTML;
2. parses the document;
3. removes scripts and module preloads;
4. collects the ten project sections;
5. prepares one section per print sheet;
6. waits for styles, fonts, and images;
7. freezes desktop media behavior;
8. hides route-navigation/actions and interactive print exclusions;
9. prepares 1280 × 665 sheets;
10. opens the browser print dialog.

### 56.5 Output model

There is no server-side PDF generator.

The workflow is:

```text
Prepare Print Document
        ↓
Browser Print Dialog
        ↓
User Selects Save as PDF
```

Actual print/PDF fidelity requires separate runtime validation.

---

> ♿ **ACCESSIBILITY & INTERACTION**

## 57. Accessibility and Interaction Notes

The Telecom route has no project-specific custom modal or interactive product application.

Primary interactions are:

- section navigation;
- shared responsive Menu;
- Header actions;
- previous/next project links;
- PDF trigger.

Display labels in Product Explorer are not interactive controls.

Native SVG/diagram content is explanatory rather than a user-operated analytics interface.

Source inspection does not constitute formal accessibility certification.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 58. Important Source / Rendering Contracts

### 58.1 Section order

Preserve the ten-section sequence.

### 58.2 Navigation IDs

Keep the Header links aligned with:

```text
overview
ecosystem
challenge
strategy
pm-scope
architecture
delivery
product-explorer
impact
leadership
```

### 58.3 Asset identity

Keep asset identity as the semantic join key across sections.

### 58.4 Source-to-decision flow

Preserve:

```text
Source
→ Model
→ Decision
```

meaning.

### 58.5 Strategy matrix

Preserve:

```text
Identity
Join
Measure
Drill
```

semantic roles.

### 58.6 Maturity roadmap

Preserve:

```text
Now
→ Next
→ Future
```

ordering.

### 58.7 Product Explorer filters

Keep Region / Period / Asset Class documented as display labels unless actual controls are implemented.

### 58.8 Supplied savings range

Preserve:

```text
15%–20%
```

and its qualification.

### 58.9 Main Portfolio metric distinction

Do not automatically replace the separate:

```text
25% telecom operating-cost reduction
```

Main Portfolio outcome.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 59. Maintenance Rules

When modifying Telecom Cost Optimization:

1. Preserve the ten-section order unless a structural change is explicitly requested.
2. Preserve the current project-specific anchor IDs.
3. Keep navigation IDs aligned with actual sections.
4. Keep asset identity as the core semantic join concept.
5. Preserve the meaning of source → model → decision diagrams.
6. Preserve the Identity → Join → Measure → Drill strategy logic.
7. Preserve site → regional → enterprise rollout progression.
8. Preserve Integrate → Locate → Understand → Optimise impact logic.
9. Preserve Now → Next → Future analytical maturity.
10. Do not convert Product Explorer display labels into claims of working filters.
11. Do not describe SVG maps as live GIS.
12. Do not describe CSS bars as calculated analytics.
13. Do not describe SQL / Power BI / Tableau labels as website integrations.
14. Preserve the supplied `15%–20%` outcome range.
15. Do not silently reconcile it with the separate `25%` Main Portfolio outcome.
16. Preserve the narrative qualification around “multi-million-dollar inefficiencies.”
17. Keep Main Product Portfolio summary content separately reviewed.
18. Preserve Identity/Home → `/`.
19. Preserve Back to Portfolio → `/portfolio/`.
20. Preserve View Projects → `/portfolio/#portfolio`.
21. Keep previous/next project navigation aligned with the four-project loop.
22. Preserve the shared project footer unless explicitly changing project-navigation architecture.
23. Keep production assets under `public/`.
24. Do not add visual-reference screenshots under `docs/references/`.
25. Treat ProjectShell, shared styles, responsive helpers, and PDF scripts as cross-project dependencies.
26. Check Product Explorer manually after dense visual changes.
27. Preserve the current responsive architecture unless an explicit redesign is approved.
28. Preserve the ten-section PDF contract.
29. Do not interpret build/source checks as proof of visual fit or accessibility certification.
30. Do not present future near-real-time/predictive maturity states as already implemented website functionality.

---

> ✅ **QA & VALIDATION**

## 60. Historical Validation

Historical checks performed on:

```text
10 October 2026
```

recorded:

- HTTP 200;
- successful build/hash checks;
- approximate 1280 × 665 viewport measurements.

Historical recorded geometry was approximately:

```text
Header:         79.36px
Section width:  1265px
Section height: 585.63px
```

These measurements apply to that historical implementation state.

They were **not**:

- an external Telecom reference overlay;
- a complete clipping audit;
- native browser zoom certification;
- formal accessibility testing.

---

> ✅ **QA & VALIDATION**

## 61. Historical Validation Boundary

The earlier Telecom validation did not establish:

- pixel-perfect reference fidelity;
- all internal label fit;
- Product Explorer clipping safety at every viewport;
- native Chrome zoom behavior;
- current tablet behavior;
- current mobile behavior;
- current PDF print fidelity;
- formal accessibility compliance.

Later routing/header changes also mean historical geometry should not be treated as a fresh current acceptance test.

---

> ✅ **QA & VALIDATION**

## 62. Current Validation Status

Current implementation reference is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Current source confirms:

| Area | Status |
|---|---|
| `/projects/telecom-cost-optimization/` route | Confirmed |
| Telecom MDX route adapter | Confirmed |
| `NokiaAnalyticsCaseStudy.astro` implementation | Confirmed |
| Ten case-study sections | Confirmed |
| Section order and anchors | Confirmed |
| Shared ProjectShell | Confirmed |
| Shared project footer | Confirmed |
| Previous → Ayu Sales Intelligence | Confirmed |
| Next → Integrated Channels | Confirmed |
| Identity/Home → `/` | Confirmed |
| Back to Portfolio → `/portfolio/` | Confirmed |
| View Projects → `/portfolio/#portfolio` | Confirmed |
| Five source-domain product context | Confirmed |
| Asset-centered analytical model | Confirmed |
| Strategy matrix | Confirmed |
| Architecture section | Confirmed |
| Delivery sequence | Confirmed |
| Product Explorer | Confirmed |
| Display-only Region / Period / Asset Class labels | Confirmed |
| `15%–20%` supplied result | Confirmed |
| Main Portfolio `25%` separate outcome difference | Confirmed |
| Native map/diagram implementation | Confirmed |
| No live GIS / BI / SQL integration | Confirmed |
| Responsive source architecture | Confirmed |
| Ten-section PDF source logic | Confirmed |
| JavaScript-dependent compact-navigation fallback | Still deferred |

The final routing/header implementation associated with this source state previously recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

These technical checks confirm build/source integrity for that recorded implementation state.

They do **not** by themselves certify:

- current pixel-perfect visual fidelity;
- every desktop resolution;
- internal clipping at every density;
- Product Explorer fit after future changes;
- all tablet/mobile dimensions;
- native browser zoom;
- formal accessibility compliance;
- assistive-technology behavior;
- final PDF/print fidelity.

For repository-wide QA findings and current status, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

For repository-wide architecture and maintenance constraints, see:

[08-project-context.md](08-project-context.md)
# Enterprise Reporting & Insights Platform Reference

Complete implementation, Business Analysis scope, reporting model, metrics, reporting workspaces, functional data flow, navigation, responsive behavior, export, validation, and maintenance reference for the Nokia Enterprise Reporting & Insights Platform case study.

<div align="center">

### 📊 Enterprise Reporting & Insights Platform · Nokia Networks

![Business Analysis](https://img.shields.io/badge/Business_Analysis-087FF0?style=for-the-badge)
![Reporting Analytics](https://img.shields.io/badge/Reporting_Analytics-00A783?style=for-the-badge)
![Power BI](https://img.shields.io/badge/Power_BI-F59E0B?style=for-the-badge)
![Telecom](https://img.shields.io/badge/Telecom-7C3AED?style=for-the-badge)
![7 Markets](https://img.shields.io/badge/7_Markets-059669?style=for-the-badge)
![10 Sections](https://img.shields.io/badge/10_Sections-E11D48?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Purpose and Product Context

The Enterprise Reporting & Insights Platform case study represents Nokia reporting, analytics, and Business Analysis work across international delivery environments.

Current project identity:

| Field | Current source |
|---|---|
| Company | Nokia Networks |
| Role | Business Analyst |
| Detailed role period | Feb 2019 – Jan 2023 |
| Earlier Nokia role | Reporting Analyst |
| Earlier role period | Jan 2016 – Jan 2019 |
| Case-study title | Enterprise Reporting & Insights Platform |
| Portfolio descriptor | Cross-market telecom delivery analytics & operations governance platform |

The detailed case study focuses on the Business Analyst period.

The portfolio's employment data separately records the earlier Reporting Analyst period as the analytical foundation preceding the Business Analyst role.

The case study is centered on cross-market reporting within Nokia's established operating environment.

The authored story explicitly describes Nokia as already having:

- established delivery processes;
- established systems;
- established governance;
- regional reporting structures;
- regional source data;
- operational trackers;
- regional requirements.

The project problem is therefore reporting harmonisation and analytical consistency across those environments, not the creation of basic enterprise processes.

The case study currently covers:

- regional source domains;
- business and reporting requirements;
- KPI definitions and calculation rules;
- data and process mapping;
- reporting harmonisation;
- reporting workspaces;
- functional data flow;
- validation;
- UAT;
- reporting outcomes;
- Business Analysis capability development.

The current case-study implementation is a portfolio representation.

It does not connect to live Nokia production data or operational systems.

---

> 🔗 **ROUTING & NAVIGATION**

## 2. Route and Page Entry Point

Canonical route:

```text
/projects/enterprise-reporting-insights/
```

Route source:

```text
src/pages/projects/enterprise-reporting-insights.mdx
```

Current route metadata:

```text
title: "Enterprise Reporting & Insights Platform"
company: "NOKIA NETWORKS"
```

Primary component:

```text
src/components/NokiaAnalyticsCaseStudy.astro
```

Rendering flow:

```text
enterprise-reporting-insights.mdx
        ↓
NokiaAnalyticsCaseStudy.astro
        ↓
ProjectShell.astro
        ↓
Overview
        +
NokiaReferenceSections.astro
        ↓
Sections 2–10
```

Current adjacent-project sequence:

```text
Previous → Ayu Sales Intelligence & Field Force Optimization
Current  → Enterprise Reporting & Insights Platform
Next     → Integrated Channels Suite
```

---

> 🔗 **ROUTING & NAVIGATION**

## 3. Legacy Nokia Route

The previous Nokia route remains in the repository:

```text
/projects/telecom-cost-optimization/
```

Source:

```text
src/pages/projects/telecom-cost-optimization.mdx
```

It no longer renders the previous Nokia case study.

The current source is a static compatibility page containing:

```html
<meta http-equiv="refresh"
      content="0;url=/projects/enterprise-reporting-insights/" />
```

and:

```html
<link rel="canonical"
      href="https://mapant.github.io/projects/enterprise-reporting-insights/" />
```

The page also contains an accessible continuation link to:

```text
/projects/enterprise-reporting-insights/
```

Therefore:

```text
/projects/enterprise-reporting-insights/
```

is the active Nokia case-study route.

The telecom-cost-optimization route is a compatibility redirect only.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 4. Case Study Architecture

The Nokia implementation is split between a project wrapper and a detailed section-rendering component.

### 4.1 Project wrapper

Primary source:

```text
src/components/NokiaAnalyticsCaseStudy.astro
```

This file owns:

- `ProjectShell` configuration;
- ten navigation records;
- previous/next project data;
- Overview content;
- Overview data collections;
- source-domain data;
- reporting-model data;
- stakeholder data;
- challenge data;
- BA lifecycle data;
- deliverable data;
- metric definitions;
- governance questions;
- reporting-workspace definitions;
- technology-source data;
- analytics-tool data;
- validation checkpoints;
- capability data;
- Product Management carry-forward items.

It passes these collections to:

```text
NokiaReferenceSections.astro
```

### 4.2 Detailed section renderer

Source:

```text
src/components/NokiaReferenceSections.astro
```

This component renders:

```text
Ecosystem
Challenge
Strategy
PM Scope
Product Metrics
Portfolio
Tech & Data
Outcomes
Product Leadership
```

The Overview remains directly authored inside:

```text
NokiaAnalyticsCaseStudy.astro
```

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 5. Supporting Nokia Components

Current Nokia-specific supporting components are:

| Component | Current responsibility |
|---|---|
| `NokiaPanel.astro` | Reusable Nokia/reference card rendering |
| `NokiaIcon.astro` | Nokia case-study SVG icon system |
| `NokiaChart.astro` | Native illustrative/confirmed chart and donut compositions |
| `NokiaVisual.astro` | Market shapes, world graphic, report/audit visuals, Nokia SVG treatments |
| `NokiaReferenceSections.astro` | Sections 2–10 |
| `ProjectNavigation.astro` | Shared previous / portfolio / next navigation |

`NokiaPanel.astro` supports two rendering modes.

The Overview currently uses its:

```text
reference
```

variant.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 6. Shared Project Shell

The Nokia case study uses:

```text
src/components/ProjectShell.astro
```

Current configuration from `NokiaAnalyticsCaseStudy.astro`:

```text
title="Enterprise Reporting & Insights Platform"
ctaText="View Projects"
ctaHref="/portfolio/#portfolio"
showProjectFooter={false}
```

Because:

```text
showProjectFooter={false}
```

the generic `ProjectShell` footer is not rendered.

Final adjacent-project navigation is instead rendered inside the Product Leadership section through:

```text
ProjectNavigation.astro
```

The shared shell supplies:

- Manoj Pant identity;
- profile image;
- Senior Product Manager label;
- project section navigation;
- active-section observation;
- shared header actions;
- responsive navigation integration.

The default profile image used by `ProjectShell` is:

```text
/profile/portrait.jpg
```

---

> 🔗 **ROUTING & NAVIGATION**

## 7. Header Actions

Current shared project header actions come from:

```text
src/components/HeaderActions.astro
```

For the Nokia project they resolve to:

| Action | Destination |
|---|---|
| Home | `/` |
| Back to Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| PDF control | Shared `SavePdf.astro` behavior |

The case study does not define a Nokia-specific duplicate header.

---

> 🔗 **ROUTING & NAVIGATION**

## 8. Section Order and Navigation Anchors

Current `navSections`:

| # | Navigation label | Section ID |
|---:|---|---|
| 1 | Overview | `overview` |
| 2 | Ecosystem | `ecosystem` |
| 3 | Challenge | `challenge` |
| 4 | Strategy | `strategy` |
| 5 | PM Scope | `pm-scope` |
| 6 | Product Metrics | `product-metrics` |
| 7 | Portfolio | `portfolio` |
| 8 | Tech & Data | `tech-data` |
| 9 | Outcomes | `outcomes` |
| 10 | Product Leadership | `product-leadership` |

The IDs are used by:

- the shared project navigation;
- active-section observation;
- anchor navigation;
- tablet section framing;
- project PDF section collection.

The number and identity of these sections form part of the current project/export contract.

---

> 📚 **REFERENCE DETAIL**

## 9. Case Study Structure

| # | Section | Current implementation |
|---:|---|---|
| 1 | Overview | Project identity, seven markets, source inputs, platform pillars, stakeholder cards, four value cards |
| 2 | Ecosystem | Five source domains, four reporting-model layers, three decision-user groups, four enabled-value cards |
| 3 | Challenge | Six challenges, business-requirement transition, four importance cards |
| 4 | Strategy | Five strategy stages and four supporting strategy elements |
| 5 | PM Scope | Six BA lifecycle workstreams, five deliverable groups, four value cards |
| 6 | Product Metrics | Five metric cards, six governance questions, measurement philosophy |
| 7 | Portfolio | Three reporting-workspace representations, reporting hierarchy, BA contribution |
| 8 | Tech & Data | Four functional architecture areas, seven-step flow, six BA validation checkpoints |
| 9 | Outcomes | Four outcome cards, four operational-impact cards, five-step value chain, career reflection |
| 10 | Product Leadership | Six capability cards, five carry-forward practices, Nokia banner, closing statement, project navigation |

The ten sections use section-specific layouts rather than one common repeated page composition.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 10. Nokia Employment Context

Repository employment data records:

```text
Nokia Networks
Business Analyst
Feb 2019 – Jan 2023
```

and:

```text
Nokia Networks
Reporting Analyst
Jan 2016 – Jan 2019
```

The detailed Enterprise Reporting & Insights Platform case study identifies the role directly as:

```text
My role: Business Analyst
```

with the Overview summary:

```text
Requirements · KPI logic · source mapping · business validation.
```

The Product Leadership section explicitly retains the same distinction:

```text
The role was Business Analyst.
The mindset became increasingly product-oriented.
```

The case study therefore must not be documented as a Nokia Product Manager role.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 11. Seven-Market Context

The Overview defines exactly seven international market codes:

```text
APAC
CHINA
INDIA
MEA
EUR
LAT
NAM
```

These codes are rendered directly in:

```text
NokiaAnalyticsCaseStudy.astro
```

The Ecosystem supporting-value copy also refers to:

```text
APAC, China, India, MEA, EUR, LAT and NAM
```

The primary case-study market code is:

```text
LAT
```

not `LATAM`.

A separate illustrative Executive workspace currently contains a `LATAM` label; that is documented later as a current source exception rather than being treated as the canonical market code.

---

> 📚 **REFERENCE DETAIL**

## 12. Overview

### 12.1 Purpose

Section:

```text
#overview
```

Primary eyebrow:

```text
Enterprise Reporting & Delivery Intelligence
```

Title:

```text
Enterprise Reporting & Insights Platform
```

Descriptor:

```text
Cross-Market Telecom Delivery Analytics &
Operations Governance Platform
```

Primary statement:

```text
From regional reporting to
a unified operational view.
```

Current authored narrative:

```text
Within Nokia’s established global operations,
regional reporting structures and KPI interpretations varied.
A standardised analytical layer supported consistent,
comparable and traceable management reporting.
```

### 12.2 Business Analysis role

The Overview renders:

```text
My role: Business Analyst
```

with:

```text
Requirements · KPI logic · source mapping ·
business validation.
```

### 12.3 Main visual composition

The Overview contains:

- inline Nokia logo;
- seven market cards;
- market-to-platform connector SVGs;
- five regional input cards;
- source-to-platform connector SVGs;
- background reporting/dashboard artwork;
- central Enterprise Reporting & Insights Platform;
- three platform pillars;
- platform-to-user connectors;
- three stakeholder cards;
- four bottom value cards.

### 12.4 Platform pillars

Current central platform pillars:

#### Standardised KPI Logic

```text
Common business definitions and calculation rules.
```

#### Consolidated Data Inputs

```text
Regional delivery, logistics, procurement and operational
data in a unified structure.
```

#### Operational Reporting

```text
Role-based management views for project,
regional and executive stakeholders.
```

### 12.5 Overview stakeholder cards

The Overview renders:

#### Regional PMOs

```text
Monitor delivery performance, milestones,
dependencies and execution status.
```

#### Operations Leaders

```text
Review operational health, identify issues
and coordinate corrective action.
```

#### Executive Stakeholders

```text
Access consistent cross-market information
for management and strategic decisions.
```

### 12.6 Overview value cards

Current cards:

```text
Standardised Metrics
Common KPI definitions across markets.
```

```text
Automated Reporting
Repeatable processing reduces consolidation.
```

```text
Operational Visibility
Clearer milestones, risks and status.
```

```text
Decision Support
Trusted information for management reviews.
```

---

> 🧩 **COMPONENTS & VISUALS**

## 13. Overview Visual Implementation

Market shapes are generated by:

```text
NokiaVisual.astro
kind="market"
```

Each market code maps to an authored SVG path.

The larger world graphic uses:

```text
NokiaVisual.astro
kind="world"
```

The Nokia wordmark in the Overview is rendered as inline SVG through:

```text
NokiaVisual.astro
kind="nokia-logo"
```

The Overview background dashboard uses:

```text
NokiaChart.astro
kind="dashboard-bars"
```

and:

```text
NokiaChart.astro
kind="dashboard-donut"
```

The Overview itself is therefore primarily HTML/CSS/inline-SVG based.

It is not a full-page screenshot asset.

---

> 📚 **REFERENCE DETAIL**

## 14. Ecosystem

### 14.1 Purpose

Section:

```text
#ecosystem
```

Primary statement:

```text
Bring delivery, logistics
and operational data
into one ecosystem.
```

Current narrative explicitly states that Nokia operated across international markets with:

- established delivery processes;
- systems;
- governance;
- regional reporting structures;
- regional source data;
- operational trackers.

It then defines the objective as creating a common analytical layer that harmonised those sources and business definitions.

### 14.2 Visual architecture

The main Ecosystem composition contains three groups:

```text
Regional source domains
        →
Unified Reporting & Insights Model
        →
Decision users
```

---

> 📚 **REFERENCE DETAIL**

## 15. Ecosystem Source Domains

Current `sources` data contains five entries.

### 15.1 Network & Infrastructure Delivery

```text
Rollout plans, milestone updates and site information
```

### 15.2 Order Management & Procurement

```text
Material requirements, purchase orders and vendor information
```

### 15.3 Logistics & Inventory

```text
Warehouse movements, delivery status and equipment availability
```

### 15.4 Engineering & Delivery Capacity

```text
Project resources, work packages and subcontractor delivery
```

### 15.5 Regional Reporting Inputs

```text
Market-specific trackers and operational data
maintained by local teams
```

---

> 📚 **REFERENCE DETAIL**

## 16. Unified Reporting & Insights Model

Current `model` data contains four entries.

### 16.1 Data Integration

```text
Bring structured and semi-structured inputs
into a common analytical environment.
```

### 16.2 Harmonised Business Definitions

```text
Standardise regional terminology,
KPI definitions and reference values.
```

### 16.3 Consistent KPI Logic

```text
Apply agreed calculation rules
across all participating markets.
```

### 16.4 Reporting Layer

```text
Expose trusted information through
Power BI, Tableau and enterprise reporting views.
```

---

> 📚 **REFERENCE DETAIL**

## 17. Ecosystem Decision Users

Current stakeholder data contains:

### Regional PMOs

```text
View delivery performance,
manage pipeline execution
and monitor regional KPIs.
```

### Operations Leaders

```text
Track operational status,
resolve issues and ensure on-track delivery across markets.
```

### Executive Stakeholders

```text
Access a consistent view of delivery performance
for strategic decision-making.
```

These descriptions are section-specific and differ slightly from the Overview stakeholder descriptions.

---

> 📚 **REFERENCE DETAIL**

## 18. Ecosystem Enabled-Value Cards

The section currently renders four supporting outcomes.

### Consistent View Across Markets

```text
Harmonised data and KPI definitions enabled comparable
delivery insights across APAC, China, India, MEA, EUR, LAT and NAM.
```

### Reduced Manual Consolidation

```text
Consolidated key inputs from multiple sources,
reducing manual effort and delays in preparing regional
and global reports.
```

### Improved Data Traceability

```text
Clear mapping from source data to reporting outputs,
with validated logic and defined business rules.
```

### Enable Better Decision-Making

```text
Provided trusted, consistent insights for Regional PMOs,
Operations leaders and Executives to prioritise actions
and manage delivery effectively.
```

---

> 📚 **REFERENCE DETAIL**

## 19. Challenge

### 19.1 Purpose

Section:

```text
#challenge
```

Primary statement:

```text
A consistent cross-market
view required greater
standardisation.
```

Current narrative explicitly says:

```text
Nokia had well-established delivery processes,
systems and governance across its international markets.
```

The challenge is then described as regional differences in:

- data structures;
- reporting practices;
- terminology;
- KPI interpretation.

### 19.2 Six challenge records

Current `challenges` data contains:

1. Regional Data Structures
2. KPI Interpretation Differences
3. Reporting Cadence
4. Consolidation Effort
5. Exception Traceability
6. Cross-Market Comparability

#### Regional Data Structures

```text
Variations in source systems, data structures
and field definitions across markets.
```

#### KPI Interpretation Differences

```text
Differences in KPI definitions,
calculation logic and thresholds
based on regional requirements.
```

#### Reporting Cadence

```text
Different reporting frequencies and update cycles
across projects, markets and functions.
```

#### Consolidation Effort

```text
Multiple inputs required reconciliation,
validation and standardisation before reporting.
```

#### Exception Traceability

```text
Inconsistent logging and categorisation
of delays, risks and operational issues.
```

#### Cross-Market Comparability

```text
Differences in terminology, context and business rules
made it difficult to compare delivery performance across markets.
```

---

> 📚 **REFERENCE DETAIL**

## 20. Challenge Business Requirement

The lower Challenge composition represents:

```text
From existing regional reporting
```

to:

```text
a standardised analytical layer
```

Current source text defines the starting point as:

```text
Multiple regional reports, trackers and data sources,
each aligned to local requirements and reporting practices.
```

The target is:

```text
A common set of business definitions,
consolidated data and standardised reporting structures
to provide a consistent and comparable view across all markets.
```

Current `Why this mattered` cards are:

```text
More Efficient Consolidation
Better Comparability
Stronger Traceability
Faster Management Review
```

---

> 📚 **REFERENCE DETAIL**

## 21. Strategy

### 21.1 Purpose

Section:

```text
#strategy
```

Primary statement:

```text
A structured approach
to standardise reporting
across markets.
```

The current authored narrative says the approach focused on:

- harmonising regional reporting;
- standardising business definitions;
- consolidating operational data;
- aligning with established Nokia delivery processes, systems and governance;
- clear requirements;
- consistent KPI logic;
- well-defined data flows;
- validation;
- business acceptance.

### 21.2 Five strategy stages

Current `stages` data contains:

```text
01 Understand & Align
02 Define & Standardise
03 Design & Build
04 Validate & Rollout
05 Enable & Sustain
```

---

> 📚 **REFERENCE DETAIL**

## 22. Strategy Stage Content

### 22.1 Understand & Align

Current items:

```text
Engage regional stakeholders
Understand existing reporting structures and KPI definitions
Capture and analyse business requirements
Identify gaps and harmonisation needs
```

### 22.2 Define & Standardise

Current items:

```text
Establish common business definitions
Harmonise KPI logic and calculation rules
Define reporting hierarchies and dimensions
Create data mapping and transformation requirements
```

### 22.3 Design & Build

Current items:

```text
Design consolidated data model and reporting layer
Define data flows and integration logic
Develop standardised reports and dashboards
Ensure scalability, reusability and performance
```

### 22.4 Validate & Rollout

Current items:

```text
Conduct data validation and cross-checks
Perform UAT with regional teams
Incorporate feedback and refine reports
Ensure business sign-off and phased rollout across markets
```

### 22.5 Enable & Sustain

Current items:

```text
Provide user documentation and guidance
Support adoption across regional teams
Monitor usage and address feedback
Enable continuous improvements based on evolving needs
```

---

> 📚 **REFERENCE DETAIL**

## 23. Strategy Supporting Elements

Current `strategyValues`:

### Stakeholder Collaboration

```text
Worked closely with regional PMOs, operations,
data teams and business stakeholders
to ensure alignment and buy-in.
```

### Standardised Definitions

```text
Established common business definitions,
KPI logic and reporting hierarchies
for consistent interpretation across markets.
```

### Governed Reporting Layer

```text
Designed a consolidated reporting layer
with structured data flows,
validation and access controls.
```

### Iterative Rollout & Adoption

```text
Delivered in phases with UAT,
business sign-off and continuous improvements
based on user feedback and evolving needs.
```

---

> 📚 **REFERENCE DETAIL**

## 24. PM Scope / Business Analysis Scope

### 24.1 Navigation label

The shared case-study navigation label remains:

```text
PM Scope
```

The section itself is explicitly authored as Business Analysis.

Section ID:

```text
#pm-scope
```

Primary statement:

```text
End-to-end Business
Analysis scope across
the reporting lifecycle.
```

Current source describes the scope as covering:

- regional reporting;
- delivery insights;
- Regional PMOs;
- operations;
- executive stakeholders;
- requirements;
- implementation;
- adoption;
- KPI definitions;
- data flows;
- validation.

---

> 📚 **REFERENCE DETAIL**

## 25. BA Lifecycle Workstreams

Current `lifecycle` data contains six workstreams.

### Stakeholder Engagement

```text
Engaged regional PMOs, operations and leadership teams
to understand requirements and align on reporting needs.
```

### Requirements & Analysis

```text
Captured and analysed business requirements,
mapped current reporting structures
and identified harmonisation needs.
```

### Data & Process Mapping

```text
Mapped data sources, reporting flows,
KPI definitions and business rules across regions.
```

### Solution Design Support

```text
Worked with technical teams to define data models,
reporting logic, integration flows and dashboard requirements.
```

### Validation & UAT

```text
Prepared test scenarios,
coordinated UAT with regional teams
and managed issue resolution
to ensure data accuracy and business acceptance.
```

### Release & Adoption

```text
Supported deployment, user documentation,
training and ongoing support
for continued usage and feedback.
```

---

> 📚 **REFERENCE DETAIL**

## 26. BA Deliverables

Current `deliverables` data contains five groups.

### Business Requirements Document

```text
Detailed business requirements,
current state analysis
and future state reporting needs.
```

### KPI Definitions & Reporting Business Rules

```text
Standardised KPI logic, definitions,
calculation rules and data validation criteria.
```

### Data Flow & Process Mapping

```text
Source-to-report data flow,
process maps and reporting architecture.
```

### UAT Plan & Test Scenarios

```text
Comprehensive UAT scenarios,
execution tracking and issue resolution log.
```

### User Documentation & Training

```text
Reporting guidelines,
user manuals and training sessions
for regional teams.
```

---

> 📚 **REFERENCE DETAIL**

## 27. BA Scope Value Cards

Current `scopeValues`:

```text
Standardised Reporting
Reliable Data Foundation
Better Decision-Making
Improved Adoption
```

Current descriptions connect those areas to:

- common KPI definitions;
- business rules;
- structured data flows;
- validation;
- data consistency;
- Regional and Executive stakeholders;
- risk identification;
- documentation;
- training;
- ongoing support.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 28. Product Metrics

### 28.1 Purpose

Section:

```text
#product-metrics
```

Primary statement:

```text
Define metrics that
every market interprets
the same way.
```

The section explicitly says each important KPI required:

```text
an agreed business definition
defined numerator and denominator
data source
calculation logic
exception handling
reporting frequency
accountable owner
```

Current `metrics` contains five records:

1. Milestone Adherence Rate
2. Reporting Cycle Duration
3. Data / Pipeline Exception Rate
4. Delivery Progress
5. Data Completeness

---

> 📊 **DATA, METRICS & OUTCOMES**

## 29. Metric Definitions

### 29.1 Milestone Adherence Rate

Definition:

```text
Measures whether planned project milestones
were achieved within their approved target dates.
```

Stored formula:

```text
Milestones completed on/before target date
÷
Total scheduled milestones
× 100
```

Decision:

```text
Which markets or programs are at risk of delivery slippage?
```

### 29.2 Reporting Cycle Duration

Definition:

```text
Measures how long it takes to move
from the reporting input window
to a published management view.
```

Stored formula:

```text
Dashboard Publication Timestamp
−
Data Ingestion / Reporting Window Start
```

Decision:

```text
Is reporting becoming operationally faster
and less dependent on manual preparation?
```

### 29.3 Data / Pipeline Exception Rate

Definition:

```text
Measures the proportion of records that cannot be processed
because of missing, invalid or inconsistent data.
```

Stored formula:

```text
Rejected or exception records
÷
Total ingested records
× 100
```

Decision:

```text
Where are recurring data-quality
or source-process problems occurring?
```

### 29.4 Delivery Progress

Definition:

```text
Tracks completed delivery activity
against the approved implementation scope.
```

Decision:

```text
How much of the planned regional program has progressed
and where is execution falling behind?
```

The current visual contains these illustrative stage values:

```text
Planning          100%
Site Preparation   80%
Deployment         60%
Integration        45%
Go Live            20%
```

The source explicitly labels this composition as illustrative.

### 29.5 Data Completeness

Definition:

```text
Tracks whether required reporting fields are available
for the records expected in the reporting cycle.
```

Stored formula:

```text
Valid records with all required fields
÷
Total expected records
× 100
```

Decision:

```text
Can leadership trust the reported regional picture?
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 30. KPI Governance Questions

Current `governance` data contains six questions.

| Governance area | Current question |
|---|---|
| Definition | What exactly are we measuring? |
| Source | Where does the underlying data originate? |
| Owner | Who is accountable for its quality? |
| Frequency | How often should it update? |
| Exception | What happens when required inputs are missing? |
| Decision | What action should the metric enable? |

The section also contains the authored measurement principle:

```text
Do not measure because data is available.
Measure because the metric helps somebody
make a better decision.
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 31. Current Metric Rendering Exception

The stored metric formulas use:

```text
÷
```

for division.

However, the current `NokiaReferenceSections.astro` formula renderer inserts:

```text
+
```

between numerator and denominator for the generic percentage-formula rendering path.

This affects the current displayed treatment of:

- Milestone Adherence Rate;
- Data / Pipeline Exception Rate;
- Data Completeness.

Therefore:

```text
stored metric definition
≠
current rendered operator
```

for those cards.

The stored formula data remains the authoritative authored formula.

This is a current source/rendering exception and should not be silently documented as intentional calculation logic.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 32. Nokia Chart Component

Current chart source:

```text
src/components/NokiaChart.astro
```

Supported chart kinds currently include:

```text
adherence
cycle
exception
completeness
turnaround
productivity
qualitytrend
exception-donut
dashboard-bars
dashboard-donut
```

The component's accessible chart names distinguish illustrative visuals from confirmed outcome visuals.

Examples explicitly labelled illustrative include:

```text
Illustrative milestone adherence bars and target
Illustrative reporting-cycle trend, down 30 percent
Illustrative exception trend, down 20 percent
Illustrative completeness donut, 92 percent
Illustrative exception trend from January to May
Illustrative exception sources...
```

Confirmed outcome visual labels include:

```text
Reporting turnaround reduction of 25 percent
Program productivity improvement of 15 percent
```

This distinction is important when interpreting numeric values in the case study.

---

> 📚 **REFERENCE DETAIL**

## 33. Portfolio / Reporting Workspaces

### 33.1 Purpose

Section:

```text
#portfolio
```

Primary statement:

```text
Different users.
One trusted analytical
foundation.
```

Current source says:

```text
The platform supported multiple reporting experiences
based on the decision context of each stakeholder group.
```

and:

```text
Rather than creating one overloaded dashboard for everyone,
information could be organised around the needs
of distinct users.
```

Current `workspaces` contains:

1. Executive Performance View
2. Regional Delivery Performance View
3. Data Quality & Integration View

These are rendered as native dashboard wireframes.

---

> 📚 **REFERENCE DETAIL**

## 34. Executive Performance View

Primary users:

```text
Executive and senior operations leadership
```

Configured `Provides` items:

```text
cross-market health overview
milestone performance
major risks
regional comparison
historical trends
high-level operational indicators
```

Primary question:

```text
Where should leadership attention be focused?
```

Current dashboard fixture values:

```text
92%  Milestone Adherence
24   Active Projects
5    At Risk
```

Current change indicators:

```text
↑ 6%
↑ 2
↓ 3
```

Current illustrative `Project Health by Region` values:

```text
APAC      92%
EMEA      86%
Americas  78%
LATAM     81%
MEA       88%
```

These values are current workspace fixtures.

They are not part of the separately confirmed Nokia outcome set.

---

> 📚 **REFERENCE DETAIL**

## 35. Executive Workspace Market-Label Exception

The primary case-study market model uses:

```text
APAC · CHINA · INDIA · MEA · EUR · LAT · NAM
```

The current Executive Performance View fixture instead contains:

```text
APAC
EMEA
Americas
LATAM
MEA
```

Therefore the workspace's regional labels do not currently use the same canonical market-code set as the Overview.

In particular:

```text
LATAM
```

appears in the illustrative workspace while the canonical project market code is:

```text
LAT
```

This is a current source inconsistency.

It should not be used to redefine the canonical seven-market model.

---

> 📚 **REFERENCE DETAIL**

## 36. Regional Delivery Performance View

Primary users:

```text
Regional PMO and delivery leads
```

Configured `Provides` items:

```text
milestone status
project-level progress
delayed activities
dependency visibility
regional comparisons
execution exceptions
```

Primary question:

```text
Which programs, markets or milestones require intervention?
```

Current filter fixtures:

```text
Region → APAC
Market → All
Status → All
```

Current dashboard KPI fixtures:

```text
18 Total Projects
14 On Track
3 Delayed
1 At Risk
```

Current table columns:

```text
Project
Market
Milestone
Status
Planned
Actual
```

Current illustrative records:

```text
5G Deployment       India       Site Rollout      On Track  30 Oct  28 Oct
Core Upgrade        Singapore   Integration       Delayed   12 Nov  18 Nov
RAN Expansion       Australia   Site Acceptance   On Track  20 Oct  19 Oct
Fiber Network       Malaysia    Implementation    Delayed   15 Nov  22 Nov
Infra Modernisation Indonesia   Testing           On Track  28 Oct  27 Oct
```

The table caption explicitly identifies this as:

```text
Illustrative project dashboard from the approved design
```

These are interface fixtures, not documented Nokia delivery records.

---

> 📚 **REFERENCE DETAIL**

## 37. Data Quality & Integration View

Primary users:

```text
Reporting, Analytics and Data teams
```

Configured `Provides` items:

```text
source-data status
processing exceptions
validation errors
missing fields
data-quality trends
ingestion visibility
```

Primary question:

```text
Can the reported information be trusted?
```

Current KPI fixtures:

```text
2.8%  Exception Rate
98.5% Data Completeness
12    Failed Pipelines
```

Current change indicators:

```text
↑ 0.4%
↑ 1.2%
↓ 40%
```

The section also renders:

```text
Exception Trend
Exception by Source
```

Current exception-source donut fixture:

```text
Missing Fields      42%
Invalid Format      28%
Mapping Error       18%
Duplicate Records    8%
Others                4%
```

These are illustrative workspace values.

They are not separately approved Nokia project outcomes.

---

> 📚 **REFERENCE DETAIL**

## 38. Reporting Design Hierarchy

Current `hierarchy` data contains:

```text
EXECUTIVE SIGNAL
High-level health, risks and trends across markets.
```

```text
REGIONAL PERFORMANCE
Regional and market-level progress and comparisons.
```

```text
PROGRAM / PROJECT
Project performance, milestones and delivery status.
```

```text
MILESTONE / ISSUE
Detailed milestone status, issues and dependencies.
```

```text
ACTION
Targeted actions for operational follow-up
and improved delivery.
```

---

> 📚 **REFERENCE DETAIL**

## 39. Business Analysis Contribution

The Portfolio section states that the Business Analysis responsibility was not to visually design every dashboard component.

The current source says each workspace needed:

```text
A clear user
A defined business problem
Agreed KPIs
Traceable data
Functional requirements
Acceptance criteria
```

The accompanying Product Management reflection says this experience reinforced thinking in terms of:

- user groups;
- use cases;
- value.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 40. Tech & Data

### 40.1 Purpose

Section:

```text
#tech-data
```

Primary statement:

```text
Move from manual
reporting inputs to a
governed analytical flow.
```

The section explicitly defines the perspective as:

```text
functional rather than infrastructure ownership
```

and describes the BA focus as:

- understanding source relationships;
- documenting mappings;
- defining validation requirements;
- ensuring output matched business expectations.

### 40.2 Architecture groups

The current implementation contains four primary areas:

```text
SOURCE LAYER
INGESTION & TRANSFORMATION
SEMANTIC / REPORTING MODEL
ANALYTICS EXPERIENCE
```

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 41. Source Layer

Current `techSources`:

### Regional Operational Files

```text
Excel and structured reporting inputs
maintained by market teams.
```

### Order & Procurement Data

```text
Enterprise order and material-tracking information.
```

### Logistics & Inventory

```text
Equipment movements, delivery and availability information.
```

### Project / Site Metadata

```text
Market, project, site and milestone reference data.
```

No additional named Nokia source platform is defined in this case-study architecture.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 42. Ingestion & Transformation

Current composition:

### SQL Staging

```text
Consolidate information from source structures.
```

### Transformation Rules

Current items:

```text
field formats
identifiers
milestone values
regional labels
```

### Validation

Current items:

```text
missing values
invalid mappings
duplicate records
unexpected values
```

The Transformation Rules visual currently uses:

```text
NokiaIcon name="wand"
```

The Validation visual uses:

```text
NokiaIcon name="shield"
```

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 43. Semantic / Reporting Model

Current semantic-model entities:

```text
Market
Program
Project / Site
Milestone
Status
Date / Period
Operational Measure
KPI
```

Each entity is rendered with a Nokia icon and project-specific tone.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 44. Analytics Experience

Current `analyticsTools`:

### Power BI

```text
Interactive business and operational reporting.
```

### Tableau

```text
Visual analysis and stakeholder reporting.
```

### SAP BI / Enterprise Reporting

```text
Supporting enterprise reporting requirements where applicable.
```

### Excel

```text
Operational source analysis,
validation and reconciliation.
```

Current rendered technology treatment uses:

- a Power BI-style native bar icon;
- `PortfolioIcon` for Tableau;
- an authored `SAP` wordmark;
- an authored Excel `X` wordmark.

SQL appears separately in the staging layer.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 45. Functional Data Flow

Current `flow` data contains seven stages:

```text
REGIONAL INPUTS
Operational files and source systems
        ↓
STAGING
Consolidate data in SQL staging layer
        ↓
CLEAN & STANDARDISE
Apply transformation and validation rules
        ↓
SEMANTIC MODEL
Common analytical model and business definitions
        ↓
KPI CALCULATION
Apply agreed calculation logic and business rules
        ↓
POWER BI / TABLEAU / REPORTING
Stakeholder-specific reporting views
        ↓
BUSINESS DECISION
Trusted insights for operational and strategic decisions
```

The architecture is therefore documented as a functional reporting flow.

---

> ✅ **QA & VALIDATION**

## 46. BA Validation Checkpoints

Current `checkpoints` data contains six validation stages.

### 01 — Source validation

```text
Is the expected information available?
```

### 02 — Mapping validation

```text
Does every source field map
to the correct business definition?
```

### 03 — Business-rule validation

```text
Is the transformation consistent
with agreed requirements?
```

### 04 — Metric validation

```text
Does the KPI calculate
according to the approved definition?
```

### 05 — UI validation

```text
Does the dashboard represent
the expected result?
```

### 06 — UAT validation

```text
Can stakeholders make the intended decision
using the delivered solution?
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 47. Outcomes

### 47.1 Purpose

Section:

```text
#outcomes
```

Primary statement:

```text
Less time preparing
reports.
More time acting on
the information.
```

Current narrative links value to:

```text
standardisation
automation
decision visibility
```

and states that reducing collection/reconciliation effort allowed more focus on identifying and resolving operational issues.

### 47.2 Current outcome cards

Four outcome cards are rendered:

```text
25%
Reduction in reporting turnaround time
```

```text
15%
Improvement in program productivity
```

```text
Standardised KPI Framework
```

```text
Stronger Auditability
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 48. Confirmed Quantitative Case-Study Outcomes

The detailed Nokia case study currently presents two quantitative outcome values.

### Reporting turnaround

```text
25%
Reduction in reporting turnaround time
```

Current explanation:

```text
Reduced manual consolidation and review effort
through standardised reporting
and more automated data processing.
```

### Program productivity

```text
15%
Improvement in program productivity
```

Current explanation:

```text
Better operational visibility and reduced reporting effort
helped teams focus more time
on execution and issue resolution.
```

These values are also used by Main Product Portfolio Card 04.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 49. Qualitative Outcome Cards

### Standardised KPI Framework

Current subtitle:

```text
Consistent cross-market metric interpretation
```

Current explanation:

```text
Common KPI definitions reduced reporting disagreements
across participating regions.
```

### Stronger Auditability

Current subtitle:

```text
Clearer traceability from management metric
to supporting data
```

Current explanation:

```text
Requirements, source mappings and standardised definitions
improved transparency and validation.
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 50. Operational Impact

Current `impact` data contains:

### Faster Reporting

```text
Reduced manual preparation before reviews.
```

### More Consistent Data

```text
Common definitions improved comparability across markets.
```

### Earlier Risk Visibility

```text
Structured dashboards highlighted execution exceptions sooner.
```

### Improved Review Quality

```text
Leadership discussions focused on action
and less on reconciling numbers.
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 51. Business Value Chain

The current five-stage value chain is:

```text
STANDARDISE
Common data and KPI definitions
```

```text
AUTOMATE
Repeatable data processing and validation
```

```text
VISUALISE
Role-based reporting and dashboards
```

```text
IDENTIFY
Operational issues and risks
```

```text
ACT
Faster and more informed decisions
```

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 52. Career Outcome Reflection

The Outcomes section contains a career-learning block.

Current starting question:

```text
“What report needs
to be produced?”
```

Current evolved question:

```text
“What problem is the stakeholder trying to solve,
what information supports the decision,
and what solution should we enable?”
```

The source describes this shift as part of progression from:

```text
analytics and reporting
        ↓
Business Analysis
        ↓
Product Management
```

Supporting cards:

```text
From reporting delivery to problem solving
Stronger focus on stakeholder decisions
Foundation for product-oriented thinking
```

This is a career-development narrative.

It does not alter the historical Nokia role from Business Analyst.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 53. Product Leadership

### 53.1 Purpose

Section:

```text
#product-leadership
```

Eyebrow:

```text
From Business Analysis to Product Thinking
```

Primary statement:

```text
The role was Business Analyst.
The mindset became increasingly product-oriented.
```

The current narrative connects later Product Management development to experience across:

- reporting;
- operational requirements;
- KPI logic;
- stakeholder alignment;
- business validation;
- problem framing;
- usable solution definition;
- measurement of operational decision improvement.

---

> 📚 **REFERENCE DETAIL**

## 54. Capabilities Developed Through the Project

Current `capabilities` contains six records.

### Problem Framing

```text
Move beyond report requests to understand
the underlying operational need,
decision context and business impact.
```

### Stakeholder Alignment

```text
Bring PMO, operations, reporting and regional teams
toward one shared definition
of requirements and success.
```

### Requirements Definition

```text
Translate business needs into functional requirements,
KPI rules, data mappings, acceptance criteria
and usable reporting behaviour.
```

### Data-Informed Decisions

```text
Use metrics, process evidence and reporting logic
to support prioritisation, visibility
and better operational decisions.
```

### Cross-Functional Execution

```text
Coordinate with analytics, engineering, QA and business teams
to move requirements from discussion into delivery.
```

### Validation & Adoption

```text
Support UAT, business sign-off and stakeholder confidence
so the solution is trusted and actually used.
```

---

> 📚 **REFERENCE DETAIL**

## 55. What Carried Forward into Product Management

Current `carried` data contains five items:

```text
01
Discovery grounded in real user and business problems
```

```text
02
Prioritisation based on value and operational need
```

```text
03
Clear product-style requirement definition
```

```text
04
Cross-functional execution with measurable outcomes
```

```text
05
Validation that delivery solves the intended problem
```

---

> 🧩 **COMPONENTS & ASSETS**

## 56. Product Leadership Banner

The current Product Leadership section imports:

```text
src/assets/nokia/nokia-leadership-banner.png
```

through:

```text
import leadershipBanner
  from '../assets/nokia/nokia-leadership-banner.png';
```

The rendered image uses:

```text
width="644"
height="249"
```

Current alt text:

```text
Nokia office building.
Connecting people, ideas and a more open world.
```

Current image behavior:

```text
loading="eager"
decoding="async"
```

This is a dedicated standalone image asset.

The active Product Leadership section does not load a complete reference-page screenshot and crop it in the browser.

---

> 🧩 **COMPONENTS & ASSETS**

## 57. Active vs Unused Nokia Banner Implementation

`NokiaVisual.astro` still contains an inline SVG branch:

```text
kind="nokia-banner"
```

However, current repository search shows the active Product Leadership implementation uses:

```text
nokia-leadership-banner.png
```

through `NokiaReferenceSections.astro`.

No current case-study call to:

```text
<Visual kind="nokia-banner" />
```

is present.

Therefore:

```text
PNG leadership banner
→ active
```

```text
NokiaVisual kind="nokia-banner"
→ retained in component source but not used by the active section
```

Do not describe the inline `nokia-banner` SVG as the current Product Leadership artwork.

---

> 🔗 **ROUTING & NAVIGATION**

## 58. Final Project Navigation

The Product Leadership section renders:

```text
ProjectNavigation.astro
```

Current previous project:

```text
Ayu Sales Intelligence & Field Force Optimization
/projects/ayu-sales-intelligence/
```

Current center action:

```text
Return to Product Portfolio
/portfolio/
```

Current next project:

```text
Integrated Channels Suite
/projects/integrated-channels/
```

This center destination differs from the Header's View Projects destination:

```text
/portfolio/#portfolio
```

Both routes are intentional current source values.

---

> 🧩 **COMPONENTS & ASSETS**

## 59. Nokia Icon Architecture

Current icon source:

```text
src/components/NokiaIcon.astro
```

The component renders inline SVG rather than external icon-image files.

Current named icon handling includes examples such as:

```text
chart
analytics
powerbi
database
document
spreadsheet
users
user
gear
eye
shield
check
bulb
cube
flag
trophy
network
warning-solid
star-solid
audit-shield
bulb-outline
wand
folder
building
antenna
share
layers
calendar
alert
truck
rocket
checklist
book
globe
target
clock
refresh
link
pin
monitor
search
map
```

Unsupported names fall back to the target path.

The component is marked:

```html
aria-hidden="true"
```

because these icons support surrounding labelled content.

---

> 🧩 **COMPONENTS & ASSETS**

## 60. Nokia Visual Architecture

Current source:

```text
src/components/NokiaVisual.astro
```

Active visual kinds used by the case study include:

```text
market
world
report
audit
nokia-logo
```

The file also contains:

```text
nokia-banner
```

but the active leadership section currently uses the standalone PNG instead.

Market SVG definitions are provided for:

```text
APAC
CHINA
INDIA
MEA
EUR
LAT
NAM
```

The world graphic is a native SVG composition.

The report and audit outcome illustrations are also native SVG.

---

> 🧩 **COMPONENTS & ASSETS**

## 61. Styling Architecture

Current Nokia style ownership spans three project-specific stylesheets.

### `src/styles/nokia-analytics-case-study.scss`

Imported by:

```text
NokiaAnalyticsCaseStudy.astro
```

Current source contains the project-level Nokia case-study styling and mobile rules.

### `src/styles/nokia-pdf-reference.scss`

Also imported directly by:

```text
NokiaAnalyticsCaseStudy.astro
```

Despite its filename, this stylesheet is part of the live webpage cascade.

Current media-query ranges include:

```text
min-width: 768px
max-width: 767px
min-width: 1280px
```

### `src/styles/nokia-reference-sections.scss`

Imported by:

```text
NokiaReferenceSections.astro
```

It contains detailed styling for Sections 2–10 and mobile behavior.

The Nokia project also imports:

```text
src/styles/page-view.scss
```

Shared `ProjectShell` styling comes from:

```text
src/styles/project-case-study.scss
```

Therefore a future Nokia layout change should account for all active style layers rather than assuming one SCSS file owns the final geometry.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 62. Responsive Architecture

Shared responsive navigation imports:

```text
src/scripts/responsive-relationships.js
src/scripts/tablet-desktop-fit.js
```

Current primary breakpoints in the shared responsive architecture are:

```text
Desktop  ≥ 1280px
Tablet   768px – 1279px
Mobile   < 768px
```

Nokia also contains its own project-specific mobile rules under:

```text
max-width: 767px
```

The case study therefore participates in the existing shared project responsive architecture rather than introducing a separate Nokia-only tablet engine.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 63. Desktop Behaviour

The shared portfolio/project desktop basis used by the tablet-fit and PDF systems is:

```text
1280 × 665
```

`page-view.scss` contains shared desktop section behavior at:

```text
min-width: 1280px
```

Nokia then applies its own section-specific desktop compositions through its active style layers.

The current section layouts are individually authored for:

- Overview;
- Ecosystem;
- Challenge;
- Strategy;
- PM Scope;
- Product Metrics;
- Portfolio;
- Tech & Data;
- Outcomes;
- Product Leadership.

The current repository does not use one generic Nokia section grid for all ten sections.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 64. Tablet Behaviour

Tablet range:

```text
768px – 1279px
```

Current shared helper:

```text
src/scripts/tablet-desktop-fit.js
```

The source comment explicitly states:

```text
Tablet uses the existing 1280 x 665 desktop cascade
and one proportional fit.
```

The helper defines:

```javascript
const desktop = { width: 1280, height: 665 };
```

Its current behavior includes:

- mirroring active stylesheets;
- evaluating desktop media rules against the 1280 × 665 basis;
- converting viewport units against that desktop basis;
- proportionally scaling the project canvas;
- wrapping navigation-linked sections in tablet frames;
- preserving section backgrounds;
- measuring section heights;
- aligning section anchors below the header;
- updating frame height through `ResizeObserver`;
- restoring original styles outside the tablet range.

The tablet implementation derives its section boundaries from the existing project navigation.

Therefore the ten navigation IDs must continue to resolve to the ten actual case-study sections.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 65. Mobile Behaviour

Below:

```text
768px
```

the shared compact Header and Nokia-specific mobile rules become active.

`ResponsiveNavigation.astro` provides:

- Menu control;
- `aria-controls`;
- `aria-expanded`;
- open/close state;
- Escape close;
- focus return after Escape;
- outside-click close;
- close after selecting a navigation item;
- responsive header-height measurement.

At mobile width the project navigation changes to a compact menu rather than displaying the desktop ten-link navigation continuously.

Nokia section styles also contain explicit:

```text
@media (max-width:767px)
```

rules for native smaller-screen reflow.

---

> 📄 **PDF & EXPORT**

## 66. PDF / Export Behaviour

Current shared export source:

```text
src/scripts/save-portfolio-pdf.js
```

The project export uses the current route:

```javascript
location.pathname + location.search
```

For Nokia that resolves to:

```text
/projects/enterprise-reporting-insights/
```

The project export requires:

```text
10
```

navigation-linked sections.

Current source:

```javascript
const expectedPages = intro ? 4 : 10;
```

The export identifies project sections from:

```text
header nav a
        ↓
link.hash
        ↓
matching main section ID
```

Therefore:

```text
Navigation IDs
↔
Section IDs
↔
PDF page collection
```

must stay aligned.

---

> 📄 **PDF & EXPORT**

## 67. PDF Preparation Process

Current shared export flow:

1. fetch current route HTML;
2. parse it into an isolated document;
3. remove scripts and module preloads;
4. wait for fonts and images;
5. locate the project canvas;
6. collect the ten navigation-linked project sections;
7. create one `.pdf-page` per section;
8. clone only the selected section into each project page;
9. remove dialogs, scripts, PDF controls and generic project footer;
10. freeze desktop media behavior inside the print document;
11. use the 1280 × 665 desktop basis for viewport-unit conversion;
12. open the browser print dialog.

There is no Nokia-specific backend PDF generator.

---

> ♿ **ACCESSIBILITY & INTERACTION**

## 68. Shared Navigation Accessibility

`ProjectShell.astro` renders:

```html
<nav id="project-nav" aria-label="Case study sections">
```

The identity link has:

```text
aria-label="Go to homepage"
```

`ProjectNavigation.astro` uses:

```text
aria-label="Adjacent project navigation"
```

The responsive Menu uses:

```text
aria-controls
aria-expanded
```

and includes keyboard Escape handling.

The Nokia-specific visual icon component marks decorative icons:

```text
aria-hidden="true"
```

Charts that communicate information use:

```text
role="img"
aria-label
```

where implemented in `NokiaChart.astro`.

These source features should not be described as formal accessibility certification.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 69. Main Product Portfolio Card 04

Current source:

```text
src/data/portfolio.js
```

Current Product 04 entry:

```text
Company:
NOKIA NETWORKS
```

```text
Title:
Enterprise Reporting & Insights Platform
```

```text
Short:
Cross-market telecom delivery analytics &
operations governance platform.
```

Current problem:

```text
Regional delivery reporting across established market operations
required a consistent and comparable management view
across differing source structures,
KPI interpretations and reporting contexts.
```

Current ownership:

```text
Business analysis across requirements,
KPI standardisation,
process/data mapping,
stakeholder alignment,
reporting validation and UAT.
```

Current outcome:

```text
Delivered a standardised analytical/reporting layer
supporting consistent cross-market management insight
and stronger operational decision-making.
```

Current Card 04 statistics:

```text
25% Reporting turnaround reduction
15% Program productivity improvement
7   International markets
```

Current tags:

```text
Business Analysis
Reporting Analytics
Power BI
Telecom
```

Current URL:

```text
/projects/enterprise-reporting-insights/
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 70. Main Portfolio Outcome Distinction

The Main Product Portfolio contains a separate repository-level outcome record:

```text
25%
Telecom operating-cost reduction
NOKIA NETWORKS
```

That record exists in:

```text
src/data/portfolio.js
```

inside the general:

```text
outcomes
```

collection.

The new Nokia case-study Card 04 and detailed case study instead use:

```text
25% reporting turnaround reduction
15% program productivity improvement
7 international markets
```

Therefore the current repository contains two separately authored Nokia metric contexts.

The general Main Portfolio outcome:

```text
25% telecom operating-cost reduction
```

should not be silently treated as the reporting-turnaround metric of the Enterprise Reporting & Insights Platform.

Any future reconciliation of those independently authored records requires an explicit content decision.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 71. Case-Study Numeric Content Boundary

Current detailed case-study source contains several categories of numeric content.

### Confirmed project-level values

```text
7 international markets
25% reporting turnaround reduction
15% program productivity improvement
```

### Metric-definition formulas

Examples:

```text
Milestone Adherence Rate
Data / Pipeline Exception Rate
Data Completeness
```

These describe metric calculation rather than project outcome results.

### Illustrative metric visuals

Examples include:

```text
30% reporting-cycle trend
20% exception trend
92% completeness donut
100 / 80 / 60 / 45 / 20 delivery-progress stages
```

### Illustrative workspace fixtures

Examples include:

```text
92% Milestone Adherence
24 Active Projects
5 At Risk

18 Total Projects
14 On Track
3 Delayed
1 At Risk

2.8% Exception Rate
98.5% Data Completeness
12 Failed Pipelines
```

These fixture values are part of the authored dashboard representations.

They should not be documented as additional measured Nokia project outcomes.

---

> 📚 **REFERENCE DETAIL**

## 72. Technology Scope Boundary

The detailed Nokia case study currently renders:

```text
Excel
SQL
Power BI
Tableau
SAP BI / Enterprise Reporting
```

The case-study source architecture uses functional terms such as:

```text
Regional Operational Files
Order & Procurement Data
Logistics & Inventory
Project / Site Metadata
SQL Staging
Semantic / Reporting Model
```

Do not automatically import technology claims from other portfolio pages or older Nokia material into this case-study reference.

The detailed Nokia case study should be documented according to its own active source.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 73. Important Data / Rendering Contracts

### 73.1 Section contract

The ten navigation records must continue to resolve to ten actual project sections.

Changing a section ID requires coordinated updates to:

- `navSections`;
- section markup;
- anchor navigation;
- tablet fitting;
- PDF section collection.

### 73.2 Market-code contract

Canonical Overview market codes are:

```text
APAC
CHINA
INDIA
MEA
EUR
LAT
NAM
```

Do not silently change:

```text
LAT
```

to:

```text
LATAM
```

in the canonical market model.

### 73.3 Role contract

The detailed Nokia role is:

```text
Business Analyst
```

Product Management appears as later capability progression.

### 73.4 Outcome contract

Current detailed-project/Card 04 values are:

```text
25%
15%
7
```

with their existing labels.

Do not reinterpret illustrative dashboard values as measured outcomes.

### 73.5 Source-array contract

The data collections defined in `NokiaAnalyticsCaseStudy.astro` are consumed by `NokiaReferenceSections.astro`.

Changes to array ordering can affect:

- tone assignment;
- icon assignment;
- section ordering;
- visual grouping.

### 73.6 Leadership-banner contract

Current active image:

```text
src/assets/nokia/nokia-leadership-banner.png
```

The retained inline `nokia-banner` SVG is not the active leadership image.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 74. Styling Maintenance Rules

Current Nokia layout styling spans:

```text
nokia-analytics-case-study.scss
nokia-pdf-reference.scss
nokia-reference-sections.scss
page-view.scss
project-case-study.scss
```

Before adding layout overrides:

1. identify which active layer already owns the rule;
2. check desktop behavior;
3. check Nokia's mobile rules;
4. check shared `page-view.scss`;
5. check tablet mirroring behavior;
6. check PDF desktop freezing behavior.

Do not assume:

```text
nokia-pdf-reference.scss
```

is PDF-only.

It is imported into the live Nokia case-study page.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 75. Maintenance Rules

When modifying Enterprise Reporting & Insights Platform:

1. Preserve the canonical route `/projects/enterprise-reporting-insights/` unless a route migration is explicitly approved.
2. Preserve the legacy `/projects/telecom-cost-optimization/` compatibility behavior unless that redirect is intentionally retired.
3. Preserve the ten-section order unless a structural change is explicitly approved.
4. Keep `navSections` aligned with the ten actual section IDs.
5. Preserve the detailed Nokia role as Business Analyst.
6. Keep the seven canonical market codes aligned with the Overview source.
7. Preserve `LAT` as the canonical project market code unless source content is explicitly changed.
8. Do not treat illustrative workspace values as confirmed project outcomes.
9. Preserve the distinction between stored metric formulas and visual chart fixtures.
10. Treat the current formula `+` rendering as a source exception rather than the intended formula definition.
11. Keep Card 04 synchronized when the detailed project's approved title, route, stats, tags, problem, ownership, or outcome changes.
12. Do not automatically reconcile the independent Main Portfolio `25% telecom operating-cost reduction` outcome with the detailed reporting project.
13. Keep the current previous-project route aligned to Ayu Sales Intelligence.
14. Keep the current next-project route aligned to Integrated Channels.
15. Preserve Header Home → `/`.
16. Preserve Header Back to Portfolio → `/portfolio/`.
17. Preserve Header View Projects → `/portfolio/#portfolio`.
18. Preserve final ProjectNavigation center → `/portfolio/` unless intentionally changed.
19. Preserve the ten-section PDF/export contract.
20. Preserve the shared tablet-fit system unless responsive architecture is intentionally redesigned.
21. Do not add a second Nokia-specific tablet scaling engine on top of `tablet-desktop-fit.js`.
22. Check all active Nokia and shared style layers before adding competing desktop overrides.
23. Keep `nokia-leadership-banner.png` as the active leadership image unless the section is intentionally redesigned.
24. Do not document the unused inline `nokia-banner` SVG as the active leadership artwork.
25. Do not import technologies into the detailed case study merely because they appear elsewhere in the portfolio.
26. Keep the functional Tech & Data architecture distinct from infrastructure-ownership claims.
27. Do not describe source-level accessibility features as accessibility certification.
28. Validate final PDF output separately when section geometry or export-sensitive styles change.

---

> ✅ **QA & VALIDATION**

## 76. Current Source and Commit State

This reference is aligned to the Nokia implementation committed as:

```text
Branch: main
Commit: 07c39ea
Commit message:
feat: add Nokia enterprise reporting case study
and update portfolio references
```

The commit recorded:

```text
26 files changed
2039 insertions
2675 deletions
```

New Nokia/project files in that commit include:

```text
src/assets/nokia/nokia-leadership-banner.png
src/components/NokiaChart.astro
src/components/NokiaIcon.astro
src/components/NokiaPanel.astro
src/components/NokiaReferenceSections.astro
src/components/NokiaVisual.astro
src/components/ProjectNavigation.astro
src/pages/projects/enterprise-reporting-insights.mdx
src/styles/nokia-pdf-reference.scss
src/styles/nokia-reference-sections.scss
```

Modified Nokia/project files include:

```text
src/components/NokiaAnalyticsCaseStudy.astro
src/styles/nokia-analytics-case-study.scss
src/data/portfolio.js
src/pages/projects/telecom-cost-optimization.mdx
```

Additional reference and adjacent-project files were also updated in the same commit.

---

> ✅ **QA & VALIDATION**

## 77. Recorded Engineering Validation

Before commit, the current source state recorded:

```text
npm.cmd run build
```

Result:

```text
PASS
```

Astro reported:

```text
11 page(s) built
```

The staged source was then checked with:

```text
git diff --cached --check
```

After two trailing-whitespace findings in:

```text
src/components/NokiaReferenceSections.astro
```

were removed and the file was re-staged, the check returned no output.

Result:

```text
PASS
```

Commit created:

```text
07c39ea
```

Push result:

```text
d1afd82..07c39ea  main -> main
```

Subsequent repository status:

```text
## main...origin/main
```

Therefore the recorded post-push local branch was aligned with `origin/main`.

---

> ✅ **QA & VALIDATION**

## 78. Current Validation Boundary

The recorded checks establish:

- source committed successfully;
- build completed successfully;
- staged whitespace check passed;
- commit was pushed to `origin/main`;
- local `main` matched `origin/main` after push.

They do not by themselves certify:

- exact pixel-for-pixel equivalence with the Nokia requirement PDF;
- every desktop resolution;
- every tablet width;
- every mobile width;
- native browser zoom behavior;
- final printed PDF fidelity;
- formal accessibility compliance;
- assistive-technology behavior.

Visual acceptance remains separate from source/build validation.

---

> ✅ **QA & VALIDATION**

## 79. Current Known Source Exceptions

The current committed source contains several items that should remain visible in documentation rather than being silently normalized.

### 79.1 Metric formula rendering

Stored percentage formulas use:

```text
÷
```

but the generic rendered formula path currently inserts:

```text
+
```

between formula parts.

### 79.2 Executive workspace geography labels

Canonical project market codes:

```text
APAC · CHINA · INDIA · MEA · EUR · LAT · NAM
```

Illustrative Executive workspace region labels:

```text
APAC · EMEA · Americas · LATAM · MEA
```

These are not the same taxonomy.

### 79.3 Main Portfolio Nokia metric distinction

Card 04 / detailed case study:

```text
25% reporting turnaround reduction
15% program productivity improvement
7 international markets
```

General Main Portfolio outcome collection:

```text
25% telecom operating-cost reduction
```

These are currently separate authored records.

### 79.4 Leadership artwork implementations

Active:

```text
src/assets/nokia/nokia-leadership-banner.png
```

Retained but unused:

```text
NokiaVisual.astro
kind="nokia-banner"
```

These differences should be preserved as current-source facts unless the underlying implementation is changed.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 80. Documentation Boundaries

This reference documents the current Enterprise Reporting & Insights Platform implementation.

It should not be used to revive the removed Telecom Analytics & Cost Optimization case-study narrative.

Historical repository records may still mention the previous Nokia project because they describe earlier source states.

Current project documentation should use:

```text
Enterprise Reporting & Insights Platform
```

and:

```text
/projects/enterprise-reporting-insights/
```

as the active Nokia project identity.

For repository-wide architecture and maintenance context, see:

[08-project-context.md](08-project-context.md)

For repository-wide QA history, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

For GitHub Pages routing/deployment history, see:

[09-github-pages-routing-migration.md](09-github-pages-routing-migration.md)

For the Main Product Portfolio reference, see:

[02-main-portfolio-reference.md](02-main-portfolio-reference.md)

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 81. Reference Filename

The current Nokia project is no longer Telecom Cost Optimization.

The project-specific reference filename should therefore be:

```text
06-enterprise-reporting-insights-reference.md
```

Repository documentation that currently links to:

```text
06-telecom-cost-optimization-reference.md
```

must be updated separately when this file is renamed so that cross-document links remain valid.

---

## 82. Final Current-State Summary

```text
Project
Enterprise Reporting & Insights Platform

Company
Nokia Networks

Role
Business Analyst

Detailed role period
Feb 2019 – Jan 2023

Canonical route
/projects/enterprise-reporting-insights/

Legacy compatibility route
/projects/telecom-cost-optimization/

Sections
10

Canonical market codes
APAC · CHINA · INDIA · MEA · EUR · LAT · NAM

Confirmed detailed-project/Card 04 values
25% Reporting turnaround reduction
15% Program productivity improvement
7 International markets

Detailed case-study technologies rendered
Excel
SQL
Power BI
Tableau
SAP BI / Enterprise Reporting

Primary implementation
NokiaAnalyticsCaseStudy.astro
NokiaReferenceSections.astro

Active leadership image
src/assets/nokia/nokia-leadership-banner.png

Shared shell
ProjectShell.astro

Shared tablet fit
tablet-desktop-fit.js

Shared project PDF/export
save-portfolio-pdf.js

Committed source state
07c39ea
```
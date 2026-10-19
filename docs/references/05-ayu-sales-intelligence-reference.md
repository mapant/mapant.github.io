# Ayu Sales Intelligence Reference

Complete implementation, product scope, field-force workflow, measurement framework, workspace interaction, architecture, pilot outcomes, responsive behavior, export, historical validation, and maintenance reference for the Ayu Sales Intelligence case study.

<div align="center">

### 📍 Ayu Sales Intelligence · Field Force

![Sales Intelligence](https://img.shields.io/badge/Sales_Intelligence-7C3AED?style=for-the-badge)
![Field Force](https://img.shields.io/badge/Field_Force-0EA5E9?style=for-the-badge)
![Location Intelligence](https://img.shields.io/badge/Location_Intelligence-059669?style=for-the-badge)
![7 Workspaces](https://img.shields.io/badge/7_Workspaces-F59E0B?style=for-the-badge)
![10 Sections](https://img.shields.io/badge/10_Sections-2563EB?style=for-the-badge)
![Pilot Metrics](https://img.shields.io/badge/Pilot_Metrics-E11D48?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance


---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Purpose and Product Context

Ayu Sales Intelligence represents a field-force intelligence and doctor-acquisition product designed to improve how sales teams discover, prioritise, plan, execute, measure, and optimise doctor/prospect engagement.

The product story connects:

- doctor and non-doctor prospects;
- referral agents;
- BDMs / sales agents;
- sales managers / Team Leads;
- sales admins;
- Product / Business / Analytics teams.

The case study demonstrates how fragmented field-sales execution can be transformed into a more structured operating model using:

- prospect intelligence;
- prioritisation;
- beat planning;
- visit planning;
- geographic context;
- location-aware execution;
- reassignment;
- territory controls;
- verification;
- manager visibility;
- product analytics;
- operational MIS;
- field-performance measurement.

The portfolio page represents these capabilities through:

- ten case-study sections;
- native phone demonstrations;
- authored map illustrations;
- seven interactive workspaces;
- product-measurement frameworks;
- pilot outcomes;
- local images;
- SVG/CSS diagrams;
- native browser dialogs.

The portfolio website does **not**:

- track real BDM locations;
- query live prospect records;
- access doctor databases;
- calculate live beat plans;
- validate clinics;
- reassign actual agents;
- query Maps APIs;
- access real sales MIS;
- save workspace changes;
- connect to Ayu Health production systems.

All data, maps, phone screens, dialog content, metrics, and field-workflow views are portfolio representations.

---

> 🔗 **ROUTING & NAVIGATION**

## 2. Route and Page Entry Point

Current route:

```text
/projects/ayu-sales-intelligence/
```

Route source:

```text
src/pages/projects/ayu-sales-intelligence.mdx
```

Primary project wrapper:

```text
src/components/AyuSalesIntelligenceCaseStudy.astro
```

Primary section composition:

```text
src/components/SalesIntelligencePresentation.astro
```

Rendering flow:

```text
ayu-sales-intelligence.mdx
        ↓
AyuSalesIntelligenceCaseStudy.astro
        ↓
ProjectShell.astro
        ↓
SalesIntelligencePresentation.astro
        ↓
Presentation / Management / Workspaces / Outcomes components
        ↓
10 case-study sections
```

Current project sequence:

```text
Previous → Ayu DocConnect
Current  → Ayu Sales Intelligence
Next     → Telecom Cost Optimization
```

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 3. Case Study Architecture

The case study is split across several specialized components rather than one monolithic presentation file.

### 3.1 Route wrapper

`AyuSalesIntelligenceCaseStudy.astro` owns:

- ProjectShell configuration;
- project metadata;
- ten project navigation entries;
- previous/next project relationships;
- project styles.

### 3.2 Presentation layer

`SalesIntelligencePresentation.astro`:

- composes all ten sections;
- directly owns Overview;
- directly owns Ecosystem;
- directly owns Challenge;
- directly owns Strategy;
- defines their corresponding content arrays.

### 3.3 Product Management layer

`SalesIntelligenceManagement.astro` owns:

- PM Scope;
- Product Metrics;
- responsibilities;
- deliverables;
- PM process;
- measurement framework.

### 3.4 Workspace layer

`SalesIntelligenceWorkspaces.astro` owns:

- Portfolio;
- Tech & Data;
- seven capability records;
- detail labels;
- native dialogs;
- workspace open/close interaction.

### 3.5 Outcomes layer

`SalesIntelligenceOutcomes.astro` owns:

- Outcomes;
- Product Leadership;
- pilot figures;
- operational impacts;
- business-value records;
- connection CTA;
- bottom project navigation.

This separation is important when identifying the actual owner of a content or layout change.

---

> 🔗 **ROUTING & NAVIGATION**

## 4. Section Order and Navigation Anchors

The project contains ten sections.

| # | Section | Anchor | Primary Owner |
|---:|---|---|---|
| 1 | Overview | `#overview` | Presentation |
| 2 | Ecosystem | `#ecosystem` | Presentation |
| 3 | Challenge | `#challenge` | Presentation |
| 4 | Strategy | `#strategy` | Presentation |
| 5 | PM Scope | `#pm-scope` | Management |
| 6 | Product Metrics | `#product-metrics` | Management |
| 7 | Portfolio | `#portfolio` | Workspaces |
| 8 | Tech & Data | `#tech-data` | Workspaces |
| 9 | Outcomes | `#outcomes` | Outcomes |
| 10 | Product Leadership | `#product-leadership` | Outcomes |

Project-specific IDs must remain aligned with:

- Header navigation;
- active-section tracking;
- project PDF export.

Do not replace them with Main Product Portfolio IDs such as:

```text
#scope
#metrics
#tech
#connect
```

---

> 📚 **REFERENCE DETAIL**

## 5. Case Study Structure

| # | Section | Main Content | Visual / Technical Implementation |
|---:|---|---|---|
| 1 | Overview | Project positioning, field-sales problem, four product-value cards | Ayu Health brand, local hospital photograph, native phone/map composition |
| 2 | Ecosystem | Six field-force actors and operating relationships | Six portrait-sprite crops, native connectors and supporting-service relationships |
| 3 | Challenge | Six field-sales problems and baseline context | Six named native illustrations and narrative panel |
| 4 | Strategy | Six-step field-force strategy | Numbered cards, native illustrations, directional sequence |
| 5 | PM Scope | Six responsibility areas, deliverables and PM process | Three-column authored layout, local planning photograph |
| 6 | Product Metrics | Field Sales Measurement Framework | Six metric groups, lifecycle journey and instrumentation cards |
| 7 | Portfolio | Seven product capabilities/workspaces | Native capability cards, two phone previews and seven dialogs |
| 8 | Tech & Data | Five architecture layers and location-data concepts | Native architecture, map and data cards |
| 9 | Outcomes | Four scoped pilot results and operational impact | Outcome cards, business-value panels and summary |
| 10 | Product Leadership | Six leadership capabilities and four themes | Leadership cards, connection CTA and project navigation |

Each section is specifically authored for its content.

The page is **not** implemented as ten identical repeated templates.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 6. Sales Intelligence / Field Force Product Scope

The product addresses the complete field-sales operating cycle:

```text
Discover Prospects
        ↓
Prioritise
        ↓
Plan Visits
        ↓
Execute in Field
        ↓
Capture Activity
        ↓
Measure
        ↓
Optimise
```

Core product scope includes:

- prospect discovery;
- prospect intelligence;
- doctor prioritisation;
- referral-agent prioritisation;
- beat planning;
- visit planning;
- field routing;
- geographic context;
- visit verification;
- agent movement;
- reassignment;
- territory management;
- operational MIS;
- BDM / City views;
- outcome measurement.

The product narrative combines:

```text
Prospect Intelligence
+
Field Execution
+
Location Context
+
Operational Control
+
Measurement
```

---

> 📚 **REFERENCE DETAIL**

## 7. Primary Actors

Six major actor groups are represented.

### 7.1 Doctor / Non-Doctor Prospects

Represent:

- potential doctor relationships;
- non-doctor prospects;
- acquisition opportunities;
- future referral potential.

### 7.2 Referral Agents

Represent:

- referral-network activity;
- movement;
- engagement;
- referral-source context.

### 7.3 BDMs / Sales Agents

Represent field users responsible for:

- doctor/prospect visits;
- beat-plan execution;
- relationship building;
- field activity;
- visit outcomes;
- onboarding support.

### 7.4 Sales Managers / Team Leads

Represent users responsible for:

- field-team visibility;
- prioritisation;
- territory oversight;
- execution review;
- performance monitoring.

### 7.5 Sales Admins

Represent users responsible for:

- allocation;
- reassignment;
- territory controls;
- operational configuration.

### 7.6 Product / Business / Analytics Teams

Represent users responsible for:

- measurement;
- product decisions;
- business insights;
- field-process optimisation;
- product improvement.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 8. Actor Data Contract

The actor collection follows the structure:

```text
[id, tone, spriteIndex, title, copy]
```

Current actor count:

```text
6
```

The following must remain aligned:

```text
actor ID
actor order
spriteIndex
portrait crop
position
connector relationship
visible actor label
```

Changing the actor order without reviewing the sprite mapping can display the wrong portrait against an actor.

---

> 📚 **REFERENCE DETAIL**

## 9. Ecosystem Portrait Sprite

The actor portraits are stored in:

```text
public/ayu-sales-intelligence/ecosystem-portraits.png
```

This is:

```text
one transparent sprite
```

rather than six separately loaded portrait images.

Current sprite structure:

```text
3 columns × 2 rows
```

CSS selects the correct portrait crop for each actor.

Preserve:

- `spriteIndex`;
- actor order;
- background-position logic;
- sprite geometry.

Do not treat the sprite as six independent image files.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 10. Overview

### 10.1 Purpose

The Overview establishes the product as a sales-intelligence and field-execution system rather than a basic CRM visit tracker.

The product narrative focuses on:

- doctor/prospect discovery;
- prioritisation;
- field planning;
- geographic execution;
- sales visibility;
- measurable business outcomes.

### 10.2 Main visual composition

The section uses:

- Ayu Health inline SVG branding;
- literal project headline and narrative;
- local hospital photograph;
- native phone interface;
- authored map;
- four value cards.

Current production photograph:

```text
/ayu-sales-intelligence/field-sales-hospital.png
```

The image represents a field-sales context outside a hospital.

### 10.3 Product-value cards

The Overview defines:

```text
values
```

with four records.

Each follows:

```text
[tone, icon, title, copy]
```

The values communicate the product's primary field-force benefits.

Keep:

```text
value order
tone
icon
title
copy
```

aligned.

---

> 📚 **REFERENCE DETAIL**

## 11. Ecosystem

### 11.1 Purpose

The Ecosystem describes how prospect, sales, management, admin, and analytical roles interact through one operating model.

The six actor groups surround a central field-sales operating model.

### 11.2 Visual architecture

The section uses:

- six actor cards;
- six portrait-sprite crops;
- role labels;
- native SVG/CSS connectors;
- supporting-service relationships;
- bottom summary strip.

The connector layout is authored around the fixed actor arrangement.

Do not change actor placement independently of:

- actor IDs;
- sprite crops;
- connectors;
- supporting labels.

---

> 📚 **REFERENCE DETAIL**

## 12. Challenge

### 12.1 Purpose

The Challenge explains the field-sales problems that motivated the product.

The six core challenge themes are:

1. Discovery
2. Planning
3. Travel
4. Reassignment
5. Visibility
6. Verification

### 12.2 Challenge data

The collection contract is:

```text
[tone, illustrationName, title, copy]
```

Current illustration keys:

```text
discovery
planning
travel
reassignment
visibility
verification
```

Each key must correspond to a valid implementation in:

```text
SalesIntelligenceIllustration.astro
```

Do not change the semantic meaning of an illustration key while only modifying its vector geometry.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 13. Challenge Baseline Context

The authored Challenge context includes:

```text
14,420 doctors
```

and:

```text
85% with no patient lead
```

These values represent challenge/baseline context.

They are **not** the same population as the later two-BDM pilot.

Do not combine:

```text
14,420-doctor baseline context
```

with:

```text
two-BDM Bengaluru pilot results
```

as though they are one measurement population.

The website does not fetch or recalculate either value.

---

> 📚 **REFERENCE DETAIL**

## 14. Challenge — Prospect Discovery

The discovery problem represents dependence on existing sales relationships rather than systematic prospect intelligence.

The product opportunity is to support discovery using data such as:

- prospect attributes;
- fitment indicators;
- location;
- business potential;
- onboarding status;
- engagement signals.

The portfolio does not query a live prospect database.

---

> 📚 **REFERENCE DETAIL**

## 15. Challenge — Visit Planning

The planning problem represents inconsistent or manual visit planning.

The product opportunity is to:

- determine who should be visited;
- identify appropriate visit frequency;
- structure beat plans;
- reduce ad hoc field execution.

The website does not generate live sales schedules.

---

> 📚 **REFERENCE DETAIL**

## 16. Challenge — Travel Efficiency

The travel problem represents field time lost due to inefficient geographic sequencing.

The product opportunity is to:

- cluster visits;
- use locality context;
- reduce unnecessary distance;
- improve field productivity.

The portfolio does not calculate real routes or travel distances.

---

> 📚 **REFERENCE DETAIL**

## 17. Challenge — Reassignment

The reassignment problem represents operational dependency on individual identifiers or manual processes.

The product story introduces centralized territory/allocation controls for:

- administrators;
- managers;
- sales teams.

Reassignment is represented as product functionality, not as a live portfolio control.

---

> 📚 **REFERENCE DETAIL**

## 18. Challenge — Manager Visibility

The visibility problem represents limited understanding of:

- where agents are;
- what visits occurred;
- which prospects were covered;
- whether planned activity was executed.

The product story introduces:

- activity visibility;
- MIS;
- field performance;
- manager views.

The portfolio does not query real-time agent-location data.

---

> 📚 **REFERENCE DETAIL**

## 19. Challenge — Verification

The verification problem represents the need to confirm that field activity actually occurred.

The product narrative can include:

- location context;
- visit evidence;
- proof uploads;
- clinic verification.

These are represented workflows.

The portfolio does not validate real clinics or field visits.

---

> 📚 **REFERENCE DETAIL**

## 20. Prospect Intelligence

### 20.1 Purpose

Prospect Intelligence expands discovery beyond BDM personal networks.

The product concept uses prospect attributes and fitment signals to help sales teams determine:

```text
who to pursue
why they matter
where they are
what action should happen next
```

### 20.2 Prospect data context

The product story can use signals such as:

- prospect type;
- doctor attributes;
- pincode;
- latitude / longitude;
- onboarding status;
- historical leads;
- IPDs;
- interest level;
- engagement;
- inactivity;
- business potential.

These are product-domain concepts.

The portfolio site does not fetch prospect records from an external service.

---

> 📚 **REFERENCE DETAIL**

## 21. Prioritisation

### 21.1 Purpose

The strategy introduces data-informed prioritisation so that field teams focus on the most relevant doctors/prospects.

Authored priority logic references signals such as:

- Leads;
- IPDs;
- onboarding recency;
- interest;
- inactivity.

The portfolio describes the logic but does not execute an actual scoring engine.

### 21.2 Important strategy order

The `strategy` collection is intentionally stored in this visual order:

```text
1
2
3
6
5
4
```

This is **not** a data error.

The order supports the current visual strategy sequence.

Do not automatically reorder the array into:

```text
1
2
3
4
5
6
```

without intentionally changing the layout.

---

> 📚 **REFERENCE DETAIL**

## 22. Strategy

The strategy contains six authored steps.

The illustration keys are:

```text
intelligence
priority
beat-plan
optimise
allocation
territory
```

These correspond to the six strategy cards.

The strategy concept can be summarized as:

```text
1. Prospect Intelligence
        ↓
2. Prioritise Doctors / Agents
        ↓
3. Algorithm / Rules-Driven Beat Planning
        ↓
4. Location-Aware Execution
        ↓
5. Centralised Allocation / Territory Controls
        ↓
6. Measure & Optimise
```

The underlying source preserves the authored visual array order:

```text
1, 2, 3, 6, 5, 4
```

The semantic strategy and the visual storage order must both be respected.

---

> 📚 **REFERENCE DETAIL**

## 23. Beat / Visit Planning

### 23.1 Purpose

Beat planning helps sales teams organise field activity around:

- prospect priority;
- visit frequency;
- locality;
- field capacity;
- business potential.

The product narrative includes rules-driven planning rather than relying purely on manual selection.

### 23.2 Visit frequency

The strategy can vary visit frequency according to doctor/prospect context.

Examples of context can include:

- lead/IPD history;
- priority;
- interest;
- onboarding stage;
- inactivity;
- business potential.

### 23.3 Locality organisation

Visits are structured within geographic areas to improve:

- field coverage;
- travel efficiency;
- productivity.

The website itself does not execute beat-plan logic.

---

> 📚 **REFERENCE DETAIL**

## 24. Location-Aware Execution

### 24.1 Purpose

Location context supports field execution by connecting prospect activity with geographic information.

The product narrative includes:

- nearby visits;
- travel history;
- current-location review;
- manager visibility;
- field-activity capture.

### 24.2 Map implementation

`SalesIntelligenceMap.astro` supplies:

- native SVG street geometry;
- fixed routes;
- fixed pin coordinates;
- `field` variant;
- `hero` variant.

It does **not** use:

- Google Maps SDK;
- Mapbox;
- live geolocation;
- a routing API;
- live address lookup.

The map is an authored portfolio illustration.

---

> 📚 **REFERENCE DETAIL**

## 25. Allocation and Territory Controls

The product narrative introduces centralized allocation/reassignment rather than relying on individual phone-number-based reassignment.

Users represented include:

- sales admins;
- managers;
- Team Leads.

The workflow includes pincode-based territory context.

The intent is to improve:

- operational control;
- territory ownership;
- reassignment;
- field coverage.

These controls are static portfolio representations.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 26. PM Scope

### 26.1 Source

Primary component:

```text
src/components/SalesIntelligenceManagement.astro
```

The PM Scope uses:

```text
responsibilities
```

with six records.

Contract:

```text
[tone, icon, title, copy]
```

### 26.2 Purpose

The PM Scope explains Product Management ownership across:

- problem framing;
- workflow definition;
- solution specification;
- validation;
- rollout enablement;
- measurement.

### 26.3 PM process

The authored process is:

```text
Frame
→ Define
→ Specify
→ Validate
→ Enable
→ Measure
```

Preserve this order.

---

> 📚 **REFERENCE DETAIL**

## 27. PM Deliverables

Two groups of five items are authored directly in Management markup.

Current groups:

```text
Key Deliverables
Measurement & Rollout
```

The deliverables support the product story across:

- requirements;
- workflow design;
- field planning;
- measurement;
- validation;
- rollout.

They are literal component content rather than a remote dataset.

---

> 🖼️ **ASSETS & VISUALS**

## 28. PM Scope Production Asset

Current local PM Scope image:

```text
/ayu-sales-intelligence/product-planning-desk.png
```

The photograph represents a product-planning workspace.

It does not contain the entire PM Scope UI.

The historical reference-fidelity validation recorded that its pixels/composition differ from the original flattened comparison image.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 29. Product Metrics

### 29.1 Purpose

The active Product Metrics section is a:

```text
Field Sales Measurement Framework
```

The framework measures the field-sales product from prospect discovery through post-onboarding business outcomes.

The primary measurement flow is:

```text
Created
→ Visited
→ Onboarded
→ Leads / IPDs / GMV
```

### 29.2 Six metric groups

Current groups:

1. Prospect Quality & Acquisition
2. Field Coverage
3. Visit Efficiency
4. Conversion
5. Field Productivity
6. Product Adoption / Usage

Each group contains three product signals.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 30. Prospect Quality & Acquisition Metrics

This group evaluates whether the system is helping teams identify and convert relevant prospects.

Relevant measurements include concepts such as:

- prospect status;
- pre-onboarding visits;
- prospects created;
- prospects onboarded;
- doctor/prospect quality;
- interested/high-potential coverage.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 31. Field Coverage Metrics

Field Coverage measures whether the intended doctors/prospects are being reached.

Important signals include:

- unique doctor/prospect visits per BDM;
- visit coverage;
- priority-doctor coverage;
- locality coverage.

These are measurement requirements for the represented product.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 32. Visit Efficiency Metrics

Visit Efficiency focuses on the relationship between field activity and travel effort.

Important concepts include:

- visits completed;
- travel distance;
- distance per visit;
- route efficiency;
- visit density.

The website does not calculate these values from GPS records.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 33. Conversion Metrics

Conversion connects prospect/visit activity to onboarding and downstream business outcomes.

The product measurement journey is:

```text
Created
→ Visited
→ Onboarded
→ Leads
→ IPDs
→ GMV
```

Relevant measures can include:

- visits vs onboarded;
- created-to-onboarded conversion;
- leads after onboarding;
- IPDs after onboarding;
- GMV after conversion.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 34. Field Productivity Metrics

Field Productivity evaluates the relationship between:

- available field time;
- visits;
- prospect priority;
- geographic efficiency;
- business outcomes.

The focus is not merely on visit volume, but on whether field time is being used effectively.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 35. Product Adoption / Usage Metrics

Product Adoption / Usage measures whether users are actually using the product capabilities.

Instrumentation context includes:

```text
GA / Mixpanel
Live MIS
BDM / City Views
```

These labels describe the underlying product measurement approach.

They do **not** mean Google Analytics or Mixpanel is instrumenting the portfolio case-study interactions.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 36. Measurement Instrumentation

Three instrumentation cards are represented.

### GA / Mixpanel

Represents:

- product events;
- feature usage;
- user behavior.

### Live MIS

Represents:

- operational field metrics;
- monitoring;
- activity visibility.

### BDM / City Views

Represents:

- BDM-level performance;
- city-level performance;
- operational comparison.

These are product-measurement requirements rather than live portfolio integrations.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 37. Data and Content Contracts

There is no Sales Intelligence JSON database or CMS.

The case study uses local arrays and literal Astro markup.

Current major collections:

| Collection / Owner | Count | Contract / Purpose |
|---|---:|---|
| `values`, Presentation | 4 | `[tone, icon, title, copy]`; Overview value cards |
| `actors`, Presentation | 6 | `[id, tone, spriteIndex, title, copy]`; Ecosystem actors |
| `challenges`, Presentation | 6 | `[tone, illustrationName, title, copy]`; Challenge cards |
| `strategy`, Presentation | 6 | `[number, tone, illustrationName, title, copy]`; Strategy cards |
| `responsibilities`, Management | 6 | `[tone, icon, title, copy]`; PM Scope |
| Deliverable groups | 2 × 5 | Key Deliverables / Measurement & Rollout |
| PM process | 6 | Frame → Define → Specify → Validate → Enable → Measure |
| `metrics`, Management | 6 | Six measurement groups |
| `capabilities`, Workspaces | 7 | Workspace/capability records |
| `layers`, Workspaces | 5 | Product architecture |
| `locationData`, Workspaces | 5 | Location-data descriptions |
| `detailLabels`, Workspaces | 7 | Workspace detail labels |
| `pilot`, Outcomes | 4 | Scoped pilot results |
| `impact`, Outcomes | 4 | Operational impacts |
| `value`, Outcomes | 3 | Business value |
| `leadership`, Outcomes | 6 | Leadership capabilities |

Additional text remains literal markup.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 38. Portfolio / Workspaces

### 38.1 Purpose

The Portfolio section demonstrates seven field-sales product capabilities.

Each capability acts as:

- a visible product card;
- a workspace trigger;
- a phone-menu target where applicable;
- a dialog identifier.

### 38.2 Capability contract

Each `capabilities` record follows:

```text
[id, number, tone, icon, title, description]
```

The ID is critical because it connects:

```text
Capability Card
↔ Phone Control
↔ data-asi-workspace
↔ Dialog ID
↔ detailLabels
```

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 39. Seven Product Workspaces

| ID | Capability | Dialog |
|---|---|---|
| `prospects` | Prospect Intelligence & Assignment | `#asi-workspace-prospects` |
| `beat-plan` | Beat Plan & Visit Prioritisation | `#asi-workspace-beat-plan` |
| `visits` | Agent & Prospect Visit Management | `#asi-workspace-visits` |
| `travel` | Location & Travel Intelligence | `#asi-workspace-travel` |
| `agent-movement` | Referral-Agent Movement | `#asi-workspace-agent-movement` |
| `insights` | Sales Insights & MIS | `#asi-workspace-insights` |
| `verification` | Agent Lifecycle & Verification | `#asi-workspace-verification` |

These IDs are part of the implementation contract.

Do not rename one without updating all dependent controls and labels.

---

> ♿ **ACCESSIBILITY & INTERACTION**

## 40. Workspace Interaction

The workspaces use native:

```text
HTMLDialogElement
```

rather than a custom div-only modal.

Buttons use:

```text
data-asi-workspace="<id>"
```

The script finds the matching:

```text
#asi-workspace-<id>
```

dialog and calls:

```text
showModal()
```

Close controls use:

```text
data-asi-close
```

---

> 📚 **REFERENCE DETAIL**

## 41. Workspace Close Behaviour

Dialogs can be closed through:

- the explicit close control;
- clicking outside the dialog rectangle;
- Escape via native dialog behavior.

The workspace does **not**:

- change the URL hash;
- fetch remote records;
- save user changes;
- modify real sales data.

The dialog is an interactive portfolio demonstration.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 42. Workspace Maintenance Contract

When a capability is added or changed, review all of the following together:

```text
capabilities
detailLabels
dialog body
data-asi-workspace controls
phone-menu controls
bottom workspace controls
dialog ID
```

Every workspace target must exist.

The current implementation assumes only one dialog should be open at a time.

Preserve native dialog behavior unless an interaction redesign is explicitly requested.

---

> 📚 **REFERENCE DETAIL**

## 43. Native Phone Demonstrations

The case study uses:

```text
SalesIntelligencePhone.astro
```

Supported modes include:

```text
home
map
prospects
field
```

The component can also render hero-specific presentation.

Phone controls can reuse the same workspace IDs used by Portfolio capability cards.

The phones are:

- native HTML/CSS/SVG compositions;
- static portfolio demonstrations.

They are not:

- screenshots of a live app;
- embedded mobile apps;
- iframes;
- live field-sales sessions.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 44. Tech & Data Architecture

### 44.1 Purpose

The Tech & Data section describes the product architecture needed to connect:

- field users;
- prospect workflows;
- location context;
- field execution;
- data;
- operational visibility;
- supporting services.

### 44.2 Architecture data

`SalesIntelligenceWorkspaces.astro` defines:

```text
layers
```

with five conceptual product architecture layers.

Contract:

```text
[tone, layerTitle, [[icon, label, supportingText], …]]
```

### 44.3 Architecture model

The architecture represents product layers across areas such as:

- users;
- product experience;
- workflow;
- data/intelligence;
- supporting services.

The section is conceptual product architecture.

It is not a running system diagram generated from live infrastructure.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 45. Location Data

The Tech & Data section defines:

```text
locationData
```

with five records.

Contract:

```text
[tone, icon, title, copy]
```

Location context supports product concepts such as:

- prospect location;
- nearby visits;
- travel context;
- agent movement;
- field verification.

The portfolio does not read browser GPS or production location history.

---

> 📚 **REFERENCE DETAIL**

## 46. Sales Intelligence Map

`SalesIntelligenceMap.astro` owns the authored map composition.

It contains:

- fixed street geometry;
- fixed routes;
- fixed pins;
- hero/field variants.

The map is native SVG.

It does not depend on:

```text
Google Maps
Mapbox
OpenStreetMap API
live coordinates
geolocation API
routing API
```

Changing SVG geometry changes the illustration, not product data.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 47. Outcomes

### 47.1 Purpose

The Outcomes section records the scoped results of a manual Beat Plan pilot.

The source identifies the pilot as:

```text
Beat Plan manual pilot
Two BDMs
Bengaluru
```

This scope must remain attached to the outcome values.

The results are not:

- national-rollout results;
- all-team averages;
- algorithm-at-scale results;
- portfolio-calculated values.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 48. Pilot Results

Four pilot results are stored in:

```text
pilot
```

Contract:

```text
[tone, icon, number, title, scopeCopy]
```

Current measured results:

| Metric | BDM A | BDM B |
|---|---:|---:|
| Unique doctor-agent visits | `+60%` | `+166%` |
| Distance travelled per visit | `−18%` | `−15%` |

These are the exact scoped pilot results.

Preserve:

- positive/negative sign;
- percentage;
- BDM scope;
- pilot scope;
- Bengaluru context.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 49. Unique Doctor-Agent Visit Results

The pilot reports:

```text
+60%
BDM A
```

and:

```text
+166%
BDM B
```

for unique doctor-agent visits.

These values demonstrate increased field coverage in the manual pilot.

They must not be described as:

- 60% / 166% company-wide growth;
- nationwide sales improvement;
- production algorithm performance.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 50. Distance per Visit Results

The pilot reports:

```text
−18%
BDM A
```

and:

```text
−15%
BDM B
```

for distance travelled per visit.

These values demonstrate improved field-travel efficiency in the scoped pilot.

The portfolio does not calculate these distances at runtime.

---

> 📚 **REFERENCE DETAIL**

## 51. Operational Impact

The Outcomes section contains four `impact` records representing themes such as:

- structured planning;
- priority coverage;
- reassignment;
- manager visibility.

These are product/operational impacts supported by the field-force operating model.

They are distinct from the four numeric pilot records.

---

> 📚 **REFERENCE DETAIL**

## 52. Business Value

Three `value` records represent the broader business-value themes:

1. Better field time
2. Operational control
3. Informed product decisions

These value statements summarize the intended product effect rather than introducing new numeric outcome claims.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 53. Baseline vs Pilot Population

The Challenge section includes:

```text
14,420 doctors
85% with no patient lead
```

The Outcomes section includes:

```text
two-BDM manual pilot
Bengaluru
```

These are separate contexts.

Do not infer that:

```text
14,420 doctors
```

participated in the pilot.

Do not calculate a portfolio-wide effect by combining the baseline and pilot values.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 54. Main Product Portfolio Metric Relationship

The Main Product Portfolio independently summarizes the Sales Intelligence project in:

```text
src/data/portfolio.js
```

Current Main Portfolio card statistics include:

```text
+60%        Unique visits · BDM 1
+166%       Unique visits · BDM 2
−18% / −15% Distance per visit · BDM 1 / 2
```

The detailed project uses BDM A / B naming in its outcome narrative.

These are independently authored representations of the same scoped pilot context.

Do not silently change:

- labels;
- signs;
- percentages;
- scope;

without explicit approval.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 55. Product Leadership

The Product Leadership section is owned by:

```text
SalesIntelligenceOutcomes.astro
```

The section contains:

```text
leadership
```

with six records.

Contract:

```text
[tone, icon, title, copy]
```

The section also includes four leadership/product themes.

The Product Leadership narrative positions the project across:

- product strategy;
- field-force product design;
- analytics;
- measurement;
- stakeholder coordination;
- operational transformation.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 56. Let’s Connect CTA — Known Source Exception

The Product Leadership/Outcomes source contains a:

```text
Let’s Connect
```

CTA.

Current source destination:

```text
/#connect
```

The Main Product Portfolio Connect section now lives at:

```text
/portfolio/#connect
```

Therefore:

```text
/#connect
```

is a known stale source destination.

Current status:

```text
UNRESOLVED
```

This documentation records the exception.

It does not correct production code.

Do not describe the CTA as fixed until the source is changed and verified.

---

> 🔗 **ROUTING & NAVIGATION**

## 57. Header and Navigation

### 57.1 Shared shell

The project uses:

```text
ProjectShell.astro
```

for:

- sticky Header;
- project identity;
- ten section links;
- active-section observation;
- shared action controls.

### 57.2 Header order

Current order:

```text
Identity
Project Section Navigation
Home
Back to Portfolio
View Projects
PDF
```

### 57.3 Destinations

| Control | Destination |
|---|---|
| Identity | `/` |
| Home | `/` |
| Back to Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| PDF | Browser print/PDF preparation |

The shared Header destination model is separate from the stale section-level Let’s Connect CTA.

---

> 🔗 **ROUTING & NAVIGATION**

## 58. Final Project Navigation

The shared project footer is disabled:

```text
showProjectFooter={false}
```

The final Product Leadership section owns previous/return/next navigation.

Current project relationships:

```text
Previous → Ayu DocConnect
Current  → Ayu Sales Intelligence
Next     → Telecom Cost Optimization
```

The current visible return targets:

```text
/portfolio/
```

This differs from project Headers, where View Projects targets:

```text
/portfolio/#portfolio
```

Preserve the authored distinction unless navigation is intentionally standardized.

---

> 🔗 **ROUTING & NAVIGATION**

## 59. Four-Project Navigation Loop

The portfolio case-study loop is:

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

If a route slug or project order changes, review previous/next relationships across all four project pages.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 60. Component Map

All paths are relative to the repository root.

| File | Responsibility |
|---|---|
| `src/pages/projects/ayu-sales-intelligence.mdx` | Route adapter and frontmatter |
| `src/components/AyuSalesIntelligenceCaseStudy.astro` | Shared shell, project navigation and project sequence |
| `src/components/SalesIntelligencePresentation.astro` | Composes all sections and directly owns Overview, Ecosystem, Challenge and Strategy |
| `src/components/SalesIntelligenceManagement.astro` | PM Scope and Product Metrics |
| `src/components/SalesIntelligenceWorkspaces.astro` | Portfolio, Tech & Data, seven workspaces and dialog logic |
| `src/components/SalesIntelligenceOutcomes.astro` | Outcomes, Product Leadership, pilot metrics and final navigation |
| `src/components/SalesIntelligenceStory.astro` | Reusable narrative panel |
| `src/components/SalesIntelligencePhone.astro` | Native phone mockups |
| `src/components/SalesIntelligenceMap.astro` | Native map/street/pin SVG |
| `src/components/SalesIntelligenceIllustration.astro` | Challenge/Strategy native illustrations |
| `src/components/SalesIntelligenceIcon.astro` | Named project-specific SVG icons |
| `src/components/ProjectShell.astro` | Shared project Header and active-section tracking |
| `src/components/HeaderActions.astro` | Home, Back, View Projects and PDF actions |
| `src/components/ResponsiveNavigation.astro` | Shared compact-navigation behavior |
| `src/components/SavePdf.astro` | Browser print/PDF trigger |
| `src/styles/ayu-sales-intelligence-case-study.scss` | Primary Sales Intelligence styling |
| `src/styles/project-case-study.scss` | Shared project styling |
| `src/styles/page-view.scss` | Shared desktop frame/fit overrides |
| `src/scripts/tablet-desktop-fit.js` | Tablet desktop-fitting |
| `src/scripts/responsive-relationships.js` | Compact relationship layout |
| `src/scripts/save-portfolio-pdf.js` | Print/PDF preparation |
| `src/data/portfolio.js` | Main Portfolio Sales Intelligence summary |

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 61. Reusable Story Component

`SalesIntelligenceStory.astro` provides the reusable narrative-panel structure.

It supports content such as:

- kicker;
- heading fragments;
- highlighted text;
- description;
- checks;
- optional mini-strip;
- decorative SVG wave.

Sections can use the common story vocabulary without requiring identical overall layouts.

Do not interpret component reuse as proof that every section should have the same geometry.

---

> 📚 **REFERENCE DETAIL**

## 62. Native Illustration System

`SalesIntelligenceIllustration.astro` owns named vector scenes used across Challenge and Strategy.

Current Challenge keys:

```text
discovery
planning
travel
reassignment
visibility
verification
```

Current Strategy keys:

```text
intelligence
priority
beat-plan
optimise
allocation
territory
```

Preserve the semantic meaning of each illustration name.

Changing vector artwork should not silently change which business concept the key represents.

---

> 📚 **REFERENCE DETAIL**

## 63. Icon System

`SalesIntelligenceIcon.astro` provides named inline SVG icons for the project.

These icons are native source geometry rather than a hosted icon library.

When extending the project:

- reuse the existing key where semantically appropriate;
- create a clear new key where required;
- do not replace meaningful icons with arbitrary Unicode characters.

---

> 🖼️ **ASSETS & VISUALS**

## 64. Production Assets

All active project image assets remain under:

```text
public/
```

Current Sales Intelligence assets:

| Asset | Usage |
|---|---|
| `/ayu-sales-intelligence/field-sales-hospital.png` | Overview field-sales/hospital photograph |
| `/ayu-sales-intelligence/ecosystem-portraits.png` | Six-actor portrait sprite |
| `/ayu-sales-intelligence/product-planning-desk.png` | PM Scope planning photograph |
| `/profile/portrait.jpg` | Default shared project-header portrait |

There are no Sales Intelligence visual-reference screenshots stored under:

```text
docs/references/
```

Documentation remains Markdown-only.

---

> 🖼️ **ASSETS & VISUALS**

## 65. Asset Interpretation

The three Sales Intelligence project images are production assets.

They should not be described as:

- original source/reference photographs;
- live user photographs;
- production field records.

The earlier implementation used independently generated/recreated imagery.

Historical fidelity evaluation therefore treated photographic identity separately from general page functionality.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 66. Styling Architecture

Primary route stylesheet:

```text
src/styles/ayu-sales-intelligence-case-study.scss
```

This stylesheet owns:

- `.ayu-sales-case`;
- `.asi-*` project styles;
- project palette;
- card surfaces;
- phone geometry;
- portrait sprite crops;
- illustration sizing;
- dialog styling;
- project-specific responsive rules.

The final desktop cascade also uses:

```text
src/styles/page-view.scss
```

Some final desktop values can therefore be controlled by `page-view.scss` rather than the local Sales Intelligence stylesheet.

Do not assume the first local declaration found in Sales SCSS is the winning style.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 67. Responsive Architecture

Current responsive architecture:

```text
Desktop  ≥ 1280px
Tablet   768px – 1279px
Mobile   < 768px
```

The implementation combines:

- local Sales Intelligence SCSS;
- shared project SCSS;
- `page-view.scss`;
- responsive navigation;
- tablet desktop fitting;
- compact relationship handling.

The architecture is not CSS-only.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 68. Desktop Behaviour

Desktop uses the existing:

```text
>= 1280px
```

cascade.

`page-view.scss` contains active viewport-sized layout overrides and may override older local minimum-height or section rules.

Therefore:

```text
source declaration
≠
proof of final rendered fit
```

A dense card appearing valid in SCSS does not by itself prove that it fits at runtime.

Dialog size and section size are also separate layout concerns.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 69. Tablet Behaviour

Tablet range:

```text
768px – 1279px
```

The project reuses:

```text
tablet-desktop-fit.js
```

against the established desktop basis:

```text
1280 × 665
```

The helper:

- mirrors relevant desktop media-query behavior;
- resolves viewport-dependent styles against the desktop basis;
- proportionally fits the existing desktop canvas.

The case study is not re-authored as a separate tablet product.

Do not introduce a second independent tablet-fit system unless replacing the existing architecture intentionally.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 70. Mobile Behaviour

Below:

```text
768px
```

the route uses native mobile/compact flow.

This includes:

- compact Header;
- Menu control;
- vertically reflowed content;
- stacked cards;
- mobile-specific phone/layout behavior;
- native dialogs;
- shared compact relationship handling.

`responsive-relationships.js` relocates existing relationship content where required.

It does not create a duplicate content set.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 71. Responsive Navigation

The shared Menu comes from:

```text
ResponsiveNavigation.astro
```

Current behavior includes:

- Menu toggle;
- `aria-controls`;
- `aria-expanded`;
- Escape close;
- outside-click close;
- close after selecting a navigation item;
- focus return on Escape.

The collapsed menu remains JavaScript-dependent.

Repository QA classified the no-JavaScript fallback as:

```text
VALID BUT LOW PRACTICAL IMPACT
```

and it remains intentionally deferred.

Do not document it as resolved.

---

> ♿ **ACCESSIBILITY & INTERACTION**

## 72. Workspace Accessibility and Native Dialog Behavior

The seven workspaces use native:

```text
HTMLDialogElement
```

This provides browser-managed modal behavior.

Historical validation recorded:

- all seven workspaces opening;
- focus behavior;
- Escape close;
- backdrop close.

Those checks were historical and were not rerun during later documentation synchronization.

The current source should not be described as formally accessibility-certified.

---

> 📄 **PDF & EXPORT**

## 73. PDF / Export Behaviour

### 73.1 Trigger

The shared Header uses:

```text
SavePdf.astro
```

### 73.2 Export source

Project export fetches:

```text
location.pathname + location.search
```

For this route:

```text
/projects/ayu-sales-intelligence/
```

### 73.3 Expected section count

The export requires:

```text
10
```

unique navigation-linked project sections.

The following must remain aligned:

```text
Project Navigation
↔ Section IDs
↔ Export Collection
```

### 73.4 Print preparation

`savePortfolioPdf()`:

1. fetches fresh route HTML;
2. parses the document;
3. removes scripts and module preloads;
4. identifies the ten sections;
5. prepares one section per print sheet;
6. removes/hides interactive dialog content where required;
7. waits for assets and fonts;
8. freezes desktop media behavior;
9. prepares the desktop print basis;
10. opens the browser print dialog.

Current print basis:

```text
1280 × 665
```

### 73.5 Output model

The website does not create a server-generated PDF.

The flow is:

```text
Prepare Print Document
        ↓
Browser Print Dialog
        ↓
User Chooses Save as PDF
```

Print fidelity must be validated separately when PDF behavior changes.

---

> ✅ **QA & VALIDATION**

## 74. Historical Visual Validation

An earlier October validation compared all ten sections with supplied flattened page references.

The validation deliberately separated:

- implementation functionality;
- text/content preservation;
- page fit;
- visual/reference fidelity.

A reference-fidelity:

```text
FAIL
```

means visible differences remained.

It does **not** mean the route or implementation was broken.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 75. Historical Fidelity Results

| Section | Photo / Illustration Fidelity | Icon / SVG Fidelity | Layout Fidelity | Text / Content | Page Fit |
|---|---|---|---|---|---|
| Overview | FAIL | FAIL | FAIL | PASS | PASS |
| Ecosystem | FAIL | FAIL | FAIL | PASS | PASS |
| Challenge | FAIL | FAIL | FAIL | PASS | PASS |
| Strategy | FAIL | FAIL | FAIL | PASS | PASS |
| PM Scope | FAIL | FAIL | FAIL | PASS | PASS |
| Product Metrics | PASS | FAIL | FAIL | PASS | PASS |
| Portfolio | FAIL | FAIL | FAIL | PASS | PASS |
| Tech & Data | FAIL | FAIL | FAIL | PASS | PASS |
| Outcomes | PASS | FAIL | FAIL | PASS | PASS |
| Product Leadership | PASS | FAIL | FAIL | PASS | PASS |

These results are intentionally conservative.

They must not be upgraded to PASS without a later explicit comparison.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 76. Historical Remaining Visual Differences

### Overview

Historical differences included:

- different generated subject/hospital image;
- phone/map geometry;
- icon detail;
- text wrapping;
- card proportions.

### Ecosystem

Historical differences included:

- portrait identities/crops;
- connector bends;
- arrow positions;
- label wrapping.

### Challenge

Historical differences included:

- illustration shading;
- record/pin geometry;
- card spacing;
- text wrapping.

### Strategy

Historical differences included:

- calendar/target/cycle detail;
- card proportions;
- heading wrapping;
- beat-plan card wrapping.

### PM Scope

Historical differences included:

- photograph pixels/composition;
- icon outlines;
- decorative wave geometry;
- card density;
- typography spacing.

### Product Metrics

Historical differences included:

- funnel/agent/gear icon detail;
- decorative waves;
- row density;
- body wrapping.

### Portfolio

Historical differences included:

- phone bezel geometry;
- device perspective;
- card proportions;
- text wrapping.

### Tech & Data

Historical differences included:

- map street/pin geometry;
- layer icons;
- headline word breaks.

### Outcomes

Historical differences included:

- icon paths;
- card spacing;
- text wrapping;
- decorative circles/strip geometry.

### Product Leadership

Historical differences included:

- symbol detail;
- wave geometry;
- card density;
- typography spacing.

---

> ✅ **QA & VALIDATION**

## 77. Historical Validation Constraint

The original visual comparison used:

```text
flattened page references
```

rather than:

- editable vectors;
- original standalone photographs;
- source design files.

Therefore exact source-image identity was not available for recreation.

The historical fidelity FAIL results remain valid acceptance evidence for that comparison.

No visual-reference images are retained in the current documentation library.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 78. Historical Baseline Geometry

Historical browser validation used:

```text
1280 × 665 CSS viewport
device scale factor 1
```

Recorded geometry was approximately:

```text
Header: 79.36px
Content width: 1265px
Section height: 585.63px
```

These measurements apply to that historical implementation state.

They do not certify later:

- Header changes;
- routing changes;
- responsive changes;
- PDF changes.

---

> ✅ **QA & VALIDATION**

## 79. Historical Interaction Validation

The earlier validation recorded:

```text
7 dialogs
```

opening/focusing/closing successfully.

It also recorded:

- Escape close;
- backdrop close;
- workspace target integrity;
- `31` controls with valid targets;
- ten navigation anchors;
- active states.

These tests were not rerun specifically for the documentation consolidation.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 80. Historical Content Integrity

The earlier report recorded:

```text
425 text records
102 article elements
```

as unchanged during the relevant visual correction pass.

This demonstrates that the correction effort intentionally preserved product content while modifying presentation.

It is historical evidence, not a current automatic regression test.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 81. Historical Engineering Checks

The historical validation recorded:

```text
npm.cmd run build → PASS
git diff --check → PASS
```

At that time the build covered the then-existing five-page source state.

The repository has since expanded to the current ten source routes.

Therefore that historical five-page build result should not be misrepresented as the current ten-route build result.

Later final routing/header work separately recorded a successful ten-route build.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 82. Native Browser Zoom

Historical Sales Intelligence validation explicitly did **not** verify:

```text
Native Chrome zoom
```

No zoom matrix was performed.

Do not infer zoom support from:

- page-fit PASS;
- build PASS;
- responsive source inspection.

---

> 🔗 **ROUTING & NAVIGATION**

## 83. Current Source Exception — Contact Route

The stale:

```text
/#connect
```

Let’s Connect CTA remains the most important current source exception documented for this project.

Correct active Main Portfolio contact destination:

```text
/portfolio/#connect
```

The exception should remain visible in:

- this project reference;
- Project Context;
- repository QA/current-known-issues context where relevant.

It should only be marked resolved after production source correction and verification.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 84. Main Portfolio Synchronization

Main Product Portfolio summary data lives in:

```text
src/data/portfolio.js
```

Detailed Sales Intelligence content lives in project-specific components.

They do not automatically synchronize.

When an approved change affects:

- product title;
- short description;
- scope;
- problem;
- ownership;
- outcomes;
- pilot metrics;
- case-study route;
- tags;

check both the Main Portfolio summary and the detailed case study.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 85. Important Data / Rendering Contracts

### 85.1 Actor contract

```text
actors
↔ actor IDs
↔ spriteIndex
↔ portrait crop
↔ connector layout
```

### 85.2 Challenge contract

```text
challenges[].illustrationName
↔ SalesIntelligenceIllustration
```

### 85.3 Strategy contract

Preserve:

```text
strategy array order = 1, 2, 3, 6, 5, 4
```

unless the visual sequence is intentionally redesigned.

### 85.4 Capability contract

```text
capabilities[].id
↔ data-asi-workspace
↔ dialog ID
↔ detailLabels
↔ phone controls
```

### 85.5 Map contract

Map routes/pins are fixed authored SVG geometry.

They are not data-driven coordinates.

### 85.6 Pilot contract

Preserve:

```text
+60%
+166%
−18%
−15%
```

with the correct BDM and pilot scope.

### 85.7 Navigation contract

Ten Header anchors must match ten actual sections.

### 85.8 PDF contract

The same section IDs are required for the ten-page project export.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 86. Maintenance Rules

When modifying Ayu Sales Intelligence:

1. Preserve the ten-section order unless a structural change is explicitly requested.
2. Preserve project-specific section IDs.
3. Keep project Header navigation aligned with actual section IDs.
4. Preserve actor IDs and sprite-index mapping.
5. Check `ecosystem-portraits.png` crop mapping after actor changes.
6. Preserve valid Challenge illustration keys.
7. Preserve valid Strategy illustration keys.
8. Do not automatically reorder the Strategy array from `1,2,3,6,5,4`.
9. Preserve the semantic strategy sequence when changing visual order.
10. Keep capability IDs aligned with dialogs, detail labels and phone controls.
11. Confirm every `data-asi-workspace` target exists.
12. Preserve native `HTMLDialogElement` behavior.
13. Do not change map illustrations into claims of live geolocation.
14. Do not describe prioritisation as a running algorithm unless one is explicitly implemented.
15. Keep the two-BDM Bengaluru pilot scope attached to outcome metrics.
16. Preserve the exact signs and percentages of pilot outcomes.
17. Do not combine the 14,420-doctor baseline with the two-BDM pilot population.
18. Do not reinterpret “Live MIS” as portfolio-site telemetry.
19. Keep production assets under `public/`.
20. Do not add visual-reference screenshots under `docs/references/`.
21. Preserve Identity/Home → `/`.
22. Preserve Back to Portfolio → `/portfolio/`.
23. Preserve Header View Projects → `/portfolio/#portfolio`.
24. Keep the final-section project-navigation destinations aligned with the intended project loop.
25. Record the current `/#connect` CTA as unresolved until source is fixed.
26. Check the Main Product Portfolio summary separately after approved project-content changes.
27. Preserve the responsive architecture unless redesign is explicitly requested.
28. Preserve the ten-section PDF contract.
29. Do not treat historical fidelity FAIL as PASS.
30. Do not describe source/browser checks as formal accessibility certification.

---

> ✅ **QA & VALIDATION**

## 87. Current Validation Status

Current implementation reference is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Current source confirms:

| Area | Status |
|---|---|
| `/projects/ayu-sales-intelligence/` route | Confirmed |
| Ten project sections | Confirmed |
| Project-specific anchors | Confirmed |
| Previous → Ayu DocConnect | Confirmed |
| Next → Telecom Cost Optimization | Confirmed |
| Shared project Header | Confirmed |
| Identity/Home → `/` | Confirmed |
| Back to Portfolio → `/portfolio/` | Confirmed |
| View Projects → `/portfolio/#portfolio` | Confirmed |
| Six actors | Confirmed |
| Actor sprite mapping architecture | Confirmed |
| Six Challenge records | Confirmed |
| Six Strategy records | Confirmed |
| Strategy storage order `1,2,3,6,5,4` | Confirmed |
| PM process | Confirmed |
| Six metric groups | Confirmed |
| Seven workspaces | Confirmed |
| Seven native dialogs | Confirmed |
| Five architecture layers | Confirmed |
| Five location-data records | Confirmed |
| Native SVG map | Confirmed |
| Two-BDM Bengaluru pilot scope | Confirmed |
| `+60% / +166%` unique-visit results | Confirmed |
| `−18% / −15%` distance-per-visit results | Confirmed |
| Production assets | Confirmed |
| Responsive source architecture | Confirmed |
| Ten-section PDF source logic | Confirmed |
| JavaScript-dependent compact-navigation fallback | Still deferred |
| Let’s Connect `/#connect` CTA | **Still unresolved** |
| Historical strict visual fidelity | **FAIL retained** |

The final routing/header implementation associated with this source state previously recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

These technical checks establish build/source integrity for that recorded implementation state.

They do **not** by themselves certify:

- current pixel-perfect visual fidelity;
- every desktop resolution;
- all tablet/mobile dimensions;
- native browser zoom;
- all dialog interaction behavior after later changes;
- formal accessibility compliance;
- assistive-technology behavior;
- final PDF print fidelity.

Historical Sales Intelligence visual validation remains preserved separately as dated evidence and must not be treated as a fresh post-routing acceptance pass.

For repository-wide QA findings and current resolution status, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

For repository-wide architecture and maintenance constraints, see:

[08-project-context.md](08-project-context.md)
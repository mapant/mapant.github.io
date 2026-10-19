# Integrated Channels Reference

Complete implementation, product scope, application model, navigation, workspace interaction, responsive behavior, export, accessibility, and maintenance reference for the Integrated Channels case study.

---

## 1. Purpose and Product Context

Integrated Channels represents a modular enterprise digital-banking platform designed for banks and NBFCs.

The case study demonstrates Product Management across a multi-application banking ecosystem spanning:

- lending;
- compliance;
- AML / KYC;
- CKYC and document management;
- card management;
- reconciliation;
- credit-information integration;
- government schemes;
- fixed-asset management;
- audit;
- treasury operations;
- share-management workflows;
- enterprise integrations;
- reporting and operational controls.

The product story is designed around the challenge of connecting multiple banking workflows and applications through a common enterprise platform rather than treating each application as an isolated point solution.

The portfolio presents the product through:

- ten case-study sections;
- twelve application workspaces;
- product strategy;
- PM ownership;
- product metrics;
- technical architecture;
- integrations;
- compliance controls;
- operational outcomes;
- interactive application-detail workspaces.

The portfolio page is a static professional representation of the product.

It does **not** connect to:

- live banking systems;
- Core Banking Systems;
- NPCI;
- card networks;
- CKYC;
- CIBIL;
- GSTN;
- production databases;
- client banking records;
- live transaction data.

Example APIs, workflows, reports, transactions, controls, and application data shown in the portfolio are explanatory representations.

---

## 2. Route and Page Entry Point

Current route:

```text
/projects/integrated-channels/
```

Primary route source:

```text
src/pages/projects/integrated-channels.mdx
```

Primary wrapper:

```text
src/components/IntegratedChannelsCaseStudy.astro
```

Primary presentation component:

```text
src/components/IntegratedChannelsPresentation.astro
```

Rendering flow:

```text
integrated-channels.mdx
        ↓
IntegratedChannelsCaseStudy.astro
        ↓
ProjectShell.astro
        ↓
IntegratedChannelsPresentation.astro
        ↓
10 Integrated Channels sections
```

Project sequence:

```text
Previous → Telecom Cost Optimization
Current  → Integrated Channels
Next     → Ayu DocConnect
```

The route slug must remain aligned with the corresponding Main Product Portfolio project-card destination.

---

## 3. Case Study Architecture

The project uses two main content layers.

### 3.1 Case-study wrapper

`IntegratedChannelsCaseStudy.astro` owns:

- `ProjectShell` configuration;
- project title and company context;
- ten navigation entries;
- canonical `APPS` records;
- application workspace/modal markup;
- workspace opening/closing logic;
- deep-link behavior;
- previous/next project navigation context.

### 3.2 Presentation layer

`IntegratedChannelsPresentation.astro` owns:

- the ten visible case-study sections;
- section-specific narrative;
- visual card collections;
- application display dictionaries;
- architecture content;
- metrics;
- outcomes;
- leadership content;
- application launch controls.

The canonical application data is passed into the presentation as:

```text
apps={APPS}
```

This allows both:

- Ecosystem application launchers;
- Portfolio application launchers;

to open the same canonical application workspaces.

---

## 4. Section Order and Navigation Anchors

The case study contains ten sections.

| # | Section | Anchor |
|---:|---|---|
| 1 | Overview | `#overview` |
| 2 | Ecosystem | `#ecosystem` |
| 3 | Challenge | `#challenge` |
| 4 | Strategy | `#strategy` |
| 5 | PM Scope | `#pm-scope` |
| 6 | Product Metrics | `#product-metrics` |
| 7 | Portfolio | `#portfolio` |
| 8 | Tech & Data | `#tech-data` |
| 9 | Outcomes | `#outcomes` |
| 10 | Product Leadership | `#product-leadership` |

These project IDs intentionally differ from some Main Product Portfolio anchors.

Examples:

```text
Main Product Portfolio     Integrated Channels
#scope                     #pm-scope
#metrics                   #product-metrics
#tech                      #tech-data
#connect                   #product-leadership
```

Do not substitute Main Product Portfolio hashes into the project navigation.

---

## 5. Case Study Structure

| # | Section | Primary Content Sources | Main Implementation |
|---:|---|---|---|
| 1 | Overview | Literal suite narrative, `overviewPillars`, `overviewPillarIconNames` | Native narrative, suite composition, three product pillars, SVG branding/icons |
| 2 | Ecosystem | `apps`, `displayName`, `ecosystemIcons`, `ecosystemTones` | Twelve application launchers around the banking ecosystem |
| 3 | Challenge | `challenges`, `challengeThemes` | Six challenge cards, banking photograph, impact themes |
| 4 | Strategy | `strategyPillars`, `strategicPriorities` | Four strategy pillars, integration model and priorities |
| 5 | PM Scope | `responsibilities`, `deliverables`, `tools`, `deliveryStages` | PM responsibilities, artifacts, delivery stages and PM photograph |
| 6 | Product Metrics | `metricCards`, `useCases`, `frameworks`, `decisionLenses` | Product-measurement framework and decision lenses |
| 7 | Portfolio | `apps`, display/category/description/icon/tone mappings, `portfolioHighlights`, `portfolioValues` | Twelve interactive product-workspace launchers |
| 8 | Tech & Data | `architectureLayers`, `integrations`, `technologies`, `technologyBrands` | Architecture layers, integrations and technology context |
| 9 | Outcomes | `outcomeMetrics`, `institutionImpacts`, `businessOutcomes` | Product and institutional outcome narrative |
| 10 | Product Leadership | `leadershipCompetencies`, `capabilities`, `connectWays` | Leadership capabilities, product-management themes and project navigation |

All ten sections are authored as one continuous project presentation.

---

## 6. Product Scope

Integrated Channels is represented as a modular enterprise suite with twelve canonical application records.

The product scope spans multiple banking domains:

```text
Audit
Fixed Assets
GST
Lending
Cards
Shares
Government Schemes
Credit Information
Reconciliation
AML / KYC
Treasury
Documents / CKYC
```

The platform story emphasizes:

- modular applications;
- shared enterprise integration;
- banking workflows;
- role-based processing;
- maker-checker controls;
- reporting;
- exception management;
- API integration;
- regulatory workflows;
- scalable deployment across financial institutions.

Application capabilities remain application-specific.

They should not be generalized into one universal banking workflow.

---

## 7. Canonical Application Portfolio

The current application order is:

| # | ID | Application |
|---:|---|---|
| 1 | `audit` | Audit |
| 2 | `fam` | FAM |
| 3 | `gst` | GST |
| 4 | `los-lms` | LOS–LMS |
| 5 | `cms` | CMS |
| 6 | `shares` | Shares |
| 7 | `pm-schemes` | PM Schemes |
| 8 | `cibil` | CIBIL |
| 9 | `reconciliation` | Reconciliation |
| 10 | `aml-kyc` | AML–KYC |
| 11 | `treasury` | Treasury |
| 12 | `dms-ckyc` | DMS & CKYC |

The order is important because the presentation also uses numbered/spatial application positions.

Changing application order can affect:

- application numbering;
- Ecosystem positioning;
- CSS node placement;
- Portfolio ordering;
- visual connector relationships;
- workspace launch behavior.

---

## 8. Application Capability Reference

### 8.1 Audit

Application ID:

```text
audit
```

Current capability scope:

- Internal Audit
- Compliance Audit
- Statutory Audit
- Operations Audit
- Findings tracking
- Action tracking
- Audit reporting

Represented integrations include:

- source / core systems;
- document repository;
- reporting layer.

---

### 8.2 FAM

Application ID:

```text
fam
```

FAM represents Fixed Asset Management.

Current capability scope:

- asset registration;
- asset categorisation;
- assignment;
- tracking;
- depreciation;
- asset history;
- operational reporting.

Represented integrations include:

- finance / accounting data;
- GST-related information;
- document repository.

---

### 8.3 GST

Application ID:

```text
gst
```

Current capability scope:

- purchase capture;
- GST calculation;
- warranty tracking;
- insurance tracking;
- GSTR1B-related extraction;
- reporting.

Represented integrations include:

- GST portal / external source where applicable;
- finance systems;
- FAM.

---

### 8.4 LOS–LMS

Application ID:

```text
los-lms
```

Represents:

```text
Loan Origination System
+
Loan Management System
```

Current lending scope includes:

- Vehicle Loans
- Education Loans
- Gold Loans
- Staff Loans
- Personal Loans
- Home Loans

Current workflow concepts include:

- Maker
- Checker
- Sanctioner
- Disbursement
- Repayment-schedule configuration

Represented integrations include:

- CIBIL;
- DMS & CKYC;
- Core Banking / bank systems;
- payment / collection systems.

---

### 8.5 CMS

Application ID:

```text
cms
```

Current capability scope includes:

- personalised cards;
- instant cards;
- card-product setup;
- RuPay;
- Visa;
- Mastercard;
- NBIN-related issuance context;
- operational reporting.

Represented integrations include:

- NPCI / card ecosystem;
- RuPay;
- Visa;
- Mastercard;
- Core Banking.

Visible CMS descriptions can differ between the canonical modal data and separate presentation dictionaries.

Do not silently merge those descriptions.

---

### 8.6 Shares

Application ID:

```text
shares
```

Current capability scope:

- share management;
- portfolio management;
- dividend calculation;
- maker-checker workflow;
- board-meeting reports;
- operational reporting.

Represented integrations include:

- core / finance data;
- document repository;
- reporting layer.

---

### 8.7 PM Schemes

Application ID:

```text
pm-schemes
```

Current capability scope:

- scheme master;
- eligibility configuration;
- workflow configuration;
- operational tracking;
- status monitoring;
- reports;
- user controls.

Represented integrations include:

- bank systems;
- customer / account data;
- reporting layer.

---

### 8.8 CIBIL

Application ID:

```text
cibil
```

Current capability scope:

- credit-information request;
- API connectivity;
- response capture;
- status tracking;
- exception handling;
- LOS hand-off.

Represented integrations include:

- CIBIL API;
- LOS–LMS;
- customer / application data.

---

### 8.9 Reconciliation

Application ID:

```text
reconciliation
```

Current capability scope:

- transaction ingestion;
- transaction matching;
- reconciliation;
- exception identification;
- status tracking;
- operational reporting;
- settlement-oriented views.

Represented payment/source contexts include:

- AEPS;
- UPI;
- Switch;
- ATM;
- bank transaction systems.

---

### 8.10 AML–KYC

Application ID:

```text
aml-kyc
```

Current capability scope:

- transaction monitoring;
- rule-based flagging;
- risk workflow;
- alert workflow;
- CTR reporting;
- STR reporting;
- NTR reporting;
- KYC controls;
- compliance dashboards.

Represented integrations include:

- transaction sources;
- KYC / CKYC;
- bank systems;
- reporting interfaces.

AML / KYC product content should remain scoped to the actual authored banking/compliance context.

---

### 8.11 Treasury

Application ID:

```text
treasury
```

Current capability scope:

- Beginning-of-Day activities;
- End-of-Day activities;
- operational checklist;
- status tracking;
- exception visibility;
- reporting.

Represented integrations include:

- Core Banking / finance systems;
- transaction data;
- reporting layer.

---

### 8.12 DMS & CKYC

Application ID:

```text
dms-ckyc
```

Current capability scope:

- OVD capture;
- customer information;
- document-authenticity verification;
- secure document storage;
- CKYC-number retrieval;
- document-status management.

Represented integrations include:

- CKYC;
- customer / account systems;
- LOS–LMS;
- document services.

---

## 9. Canonical `APPS` Data Contract

Each application record contains structured data used by the workspace/modal.

| Field | Usage |
|---|---|
| `id` | Stable application identifier and deep-link lookup |
| `name` | Canonical application name |
| `category` | Application category |
| `color` | Workspace theme/fallback |
| `purpose` | Product purpose |
| `problem` | Business/problem context |
| `capabilities` | Application capabilities |
| `users` | Representative user roles |
| `integrations` | Conceptual integrations |
| `workflow` | Ordered workflow steps |
| `reports` | Synthetic report/dashboard content |
| `pm` | Application-specific Product Management contribution |
| `api` | Example API-contract path |
| `error` | Representative guardrail/error |
| `learning` | Product-learning summary |

The application records are local build-time data.

They are not fetched from a database or external application service.

---

## 10. Application Presentation Dictionaries

The visible Ecosystem and Portfolio application cards do not rely exclusively on the canonical `APPS` fields.

Additional dictionaries include:

```text
displayName
displayCategory
cardDescriptions
ecosystemIcons
portfolioIcons
ecosystemTones
portfolioTones
portfolioDisplayName
```

These dictionaries control presentation-specific:

- names;
- categories;
- descriptions;
- icons;
- tone/theme;
- visible card wording.

This creates an important maintenance rule:

```text
Canonical APPS record
≠
Every visible application-card string
```

A change to an `APPS` record does not automatically update every displayed summary.

Before editing visible application wording, locate whether the rendered value comes from:

- `APPS`;
- a presentation dictionary;
- literal markup.

Do not silently normalize different descriptions unless the content change is explicitly approved.

---

## 11. Overview

### 11.1 Purpose

The Overview introduces Integrated Channels as a modular banking platform rather than a collection of disconnected applications.

The section establishes:

- enterprise-banking context;
- modular product architecture;
- integrated workflows;
- shared banking capabilities;
- cross-application Product Management ownership.

### 11.2 Data sources

Primary local collections:

```text
overviewPillars
overviewPillarIconNames
```

### 11.3 Visual structure

The section uses:

- authored product narrative;
- native suite composition;
- M2P / Integrated Channels branding;
- three capability pillars;
- native SVG/icon components;
- HTML/CSS surfaces.

The case-study Overview is not a screenshot of a production banking product.

---

## 12. Ecosystem

### 12.1 Purpose

The Ecosystem section presents the twelve applications as a connected banking-product environment.

### 12.2 Application launchers

All twelve applications are positioned around the ecosystem.

The launch controls use:

```text
data-open="<application-id>"
```

Examples:

```text
data-open="los-lms"
data-open="aml-kyc"
data-open="reconciliation"
```

The same application IDs are used by the workspace system.

### 12.3 Presentation sources

The Ecosystem relies on:

```text
apps
displayName
ecosystemIcons
ecosystemTones
```

The diagram also contains native:

- nodes;
- connectors;
- positioning classes;
- SVG/CSS relationships.

Application positioning should not be changed independently of:

- node class;
- CSS coordinates;
- connector geometry;
- application order.

---

## 13. Challenge

### 13.1 Purpose

The Challenge section explains the complexity of enterprise banking-platform delivery.

Primary data:

```text
challenges
challengeThemes
```

### 13.2 Current composition

The section contains:

- narrative context;
- six challenge cards;
- standalone banking photograph;
- impact/theme content;
- project-native icons;
- HTML/CSS grid layouts.

### 13.3 Production photograph

Current asset:

```text
/ics/ics-challenge-bank.png
```

The photograph is a supporting visual.

It does not contain the page UI itself.

Image appearance also depends on CSS:

- crop;
- sizing;
- positioning;
- container geometry.

When replacing the asset, inspect both the image and its CSS treatment.

---

## 14. Strategy

### 14.1 Purpose

The Strategy section explains how the product is shaped as a modular, integrated enterprise platform.

Primary data:

```text
strategyPillars
strategicPriorities
```

### 14.2 Structure

The current section includes:

- four strategy pillars;
- ecosystem-integration concept;
- strategic-priority strip;
- native diagram elements;
- HTML/CSS composition.

The strategy should continue to represent platform/product thinking rather than independent application delivery only.

---

## 15. PM Scope

### 15.1 Purpose

The PM Scope section represents Product Management ownership across discovery, specification, delivery, validation, and adoption.

Primary sources:

```text
responsibilities
deliverables
tools
deliveryStages
APPS.pm
```

### 15.2 Product-management responsibilities

Current authored PM work includes examples such as:

- discovery;
- stakeholder requirements;
- use-case definition;
- role design;
- workflow design;
- product requirements;
- BRD;
- FRD;
- FSD;
- field mapping;
- report requirements;
- API specification;
- acceptance criteria;
- UAT;
- client demonstrations;
- feedback incorporation;
- delivery coordination.

Application-specific contributions are also stored under:

```text
APPS.pm
```

### 15.3 PM artifacts

The page represents typical delivery evidence and product artifacts including:

- requirements;
- workflows;
- functional specifications;
- API specifications;
- acceptance criteria;
- UAT;
- reporting requirements;
- solution collaboration.

### 15.4 Production photograph

Current PM Scope photograph:

```text
/ics/ics-pm-scope-photo.png
```

The image supports the section visually and does not contain the complete interface.

---

## 16. Product Metrics

### 16.1 Purpose

The Product Metrics section describes how the Integrated Channels product suite is measured.

Primary collections:

```text
metricCards
useCases
frameworks
decisionLenses
```

The section contains authored measurement frameworks rather than live analytics.

### 16.2 Measurement context

The framework represents product questions such as:

- Are users adopting the application?
- Are workflows completing successfully?
- Are manual steps decreasing?
- Are exceptions reducing?
- Are integrations reliable?
- Are controls functioning?
- Are users reaching value?
- Is operational efficiency improving?
- Are product decisions supported by measurable evidence?

### 16.3 No live analytics

The portfolio does not fetch:

- client telemetry;
- product analytics;
- transaction statistics;
- bank adoption data;
- compliance dashboards;
- production KPIs.

Values and frameworks shown in the case study are authored explanatory content.

---

## 17. Product Portfolio / Workspaces

### 17.1 Purpose

The Portfolio section exposes all twelve banking applications as interactive workspace launchers.

Primary sources:

```text
apps
displayName
displayCategory
cardDescriptions
portfolioIcons
portfolioTones
portfolioDisplayName
portfolioHighlights
portfolioValues
```

### 17.2 Interactive behavior

Each launch card points to the corresponding canonical `APPS.id`.

A selected application opens the custom Integrated Channels workspace/modal.

The workspace presents details such as:

- purpose;
- business problem;
- capabilities;
- users;
- integrations;
- workflow;
- reports;
- Product Management contribution;
- example API;
- representative validation/error;
- learning.

### 17.3 Static product demonstration

The workspace is an explanatory product view.

It does not:

- authenticate a banking user;
- load account data;
- execute transactions;
- submit API requests;
- change bank records;
- connect to client systems.

---

## 18. Workspace / Modal Interaction

### 18.1 Active implementation

The active implementation is the inline script inside:

```text
src/components/IntegratedChannelsCaseStudy.astro
```

The script uses:

```text
<script is:inline define:vars={{ appData: APPS }}>
```

The older:

```text
src/scripts/integrated-channels.js
```

uses a different DOM/data contract and is **not** the active workspace implementation.

Do not edit the older script assuming it controls the current page.

---

### 18.2 Opening a workspace

Every application launcher uses:

```text
[data-open]
```

The script:

1. reads the launcher application ID;
2. finds the matching application in `appData`;
3. stores the opener;
4. stores the current section hash;
5. renders application content into the workspace;
6. opens the backdrop/dialog;
7. sets the modal state;
8. locks background/body scrolling;
9. updates the URL to the application deep link.

Current deep-link pattern:

```text
#app/<id>
```

Examples:

```text
#app/los-lms
#app/aml-kyc
#app/reconciliation
```

---

### 18.3 Workspace content targets

The workspace script populates elements including:

```text
#dbadge
#dname
#dcat
#dbody
```

The application content is built from the selected canonical `APPS` record.

---

### 18.4 URL behavior

Opening an application uses:

```text
history.replaceState
```

to update the URL to:

```text
#app/<id>
```

The previous project-section hash is retained.

On close, the section hash is restored.

This allows application workspaces to coexist with section-navigation state.

---

### 18.5 Direct deep links

If the page loads with a valid:

```text
#app/<id>
```

hash, the corresponding workspace opens automatically.

This deep-link behavior depends on stable application IDs.

Changing an `APPS.id` therefore affects:

- application launchers;
- deep links;
- workspace lookup;
- any saved/shared application URL.

---

### 18.6 Closing behavior

The workspace can be closed through:

- Close button;
- backdrop/outside interaction;
- Escape.

Closing:

- hides the workspace;
- clears the active modal state;
- restores body scrolling;
- restores previous background inert states;
- restores the prior section hash;
- returns focus to the opener where applicable.

---

## 19. Workspace Content Safety

Rendered string values pass through the local:

```text
esc()
```

function before being inserted through `innerHTML`.

Preserve this escaping behavior when extending the workspace template.

Do not directly interpolate uncontrolled strings into workspace HTML without equivalent escaping.

The workspace's displayed:

```text
/api/v1/...
```

paths are conceptual API examples.

They are not executed.

Similarly, representative request identifiers such as:

```text
IC-DEMO-001
```

are synthetic demonstration content.

Workspace report tables are also synthetic product/report specifications rather than client banking data.

---

## 20. Modal Accessibility

The custom workspace/modal previously lacked complete focus handling.

That issue was identified during repository QA and has been fixed in source.

### 20.1 Current source behavior

Opening the modal now:

1. remembers the triggering element;
2. stores previous inert states;
3. makes relevant background ancestor-siblings inert;
4. focuses the Close control;
5. prevents focus from leaving the currently interactive modal surface.

Current modal label relationship:

```text
aria-labelledby="dname"
```

### 20.2 Focus containment

The Close control is currently the modal's only interactive control.

For:

```text
Tab
Shift + Tab
```

the handler keeps focus on Close.

This behavior is valid for the current single-control modal.

### 20.3 Closing and restoration

Closing restores:

- prior inert states;
- background interaction;
- focus to the connected opener;
- previous section/deep-link state.

### 20.4 Future maintenance rule

If another interactive element is added to the modal, such as:

- button;
- link;
- input;
- tab;
- dropdown;
- action control;

the existing single-control Tab handling must be redesigned into a true multi-control focus trap.

Do not simply retain the current Tab behavior after adding more interactive controls.

### 20.5 Validation boundary

The current behavior is source-confirmed.

It does not constitute:

- formal accessibility certification;
- full screen-reader validation;
- cross-browser keyboard certification;
- WCAG conformance certification.

---

## 21. Tech & Data

### 21.1 Purpose

The Tech & Data section describes the architecture and integration context of the suite.

Primary sources:

```text
architectureLayers
integrations
technologies
technologyBrands
```

The section uses:

- HTML architecture nodes;
- native SVG icons/logos;
- CSS connectors;
- local product architecture descriptions.

### 21.2 Architecture context

The represented architecture includes modular product/application layers and enterprise integration relationships.

The technical story includes concepts such as:

- modular applications;
- low-code/platform implementation context;
- microservices;
- APIs;
- event/integration patterns;
- cloud alignment;
- shared services;
- enterprise systems;
- data;
- banking integrations.

These describe the represented product architecture.

The portfolio website itself does not implement the banking architecture.

---

## 22. Application Integration Reference

| Application | Represented Integrations |
|---|---|
| Audit | Source/core systems; document repository; reporting layer |
| FAM | Finance/accounting data; GST-related information; document repository |
| GST | GST portal/external source where applicable; finance systems; FAM |
| LOS–LMS | CIBIL; DMS & CKYC; Core Banking/bank systems; payment/collection systems |
| CMS | NPCI/card ecosystem; RuPay; Visa; Mastercard; Core Banking |
| Shares | Core/finance data; document repository; reporting layer |
| PM Schemes | Bank systems; customer/account data; reporting layer |
| CIBIL | CIBIL API; LOS–LMS; customer/application data |
| Reconciliation | AEPS; UPI; Switch; ATM; bank transaction systems |
| AML–KYC | Transaction sources; KYC/CKYC; bank systems; reporting interfaces |
| Treasury | Core Banking/finance systems; transaction data; reporting layer |
| DMS & CKYC | CKYC; customer/account systems; LOS–LMS; document services |

These are represented product integrations.

They are not network calls made by the portfolio website.

---

## 23. Compliance and Operational Controls

Integrated Channels includes several authored control concepts across applications.

These include:

- maker-checker processing;
- maker-checker-sanctioner workflows;
- role-based processing;
- mandatory evidence;
- approval dependencies;
- state-transition dependencies;
- KYC verification;
- CKYC workflows;
- document verification;
- AML monitoring;
- risk/alert workflow;
- CTR reporting;
- STR reporting;
- NTR reporting;
- reconciliation exceptions;
- treasury Beginning-of-Day dependencies;
- treasury End-of-Day dependencies;
- audit findings and action tracking.

Each application may also contain a representative:

```text
error
```

field.

That field demonstrates a product guardrail or validation concept.

It is not a running banking validator implemented by the portfolio website.

---

## 24. Outcomes

### 24.1 Primary sources

```text
outcomeMetrics
institutionImpacts
businessOutcomes
```

### 24.2 Purpose

The Outcomes section connects product-platform work to:

- operational efficiency;
- automation;
- integration;
- compliance;
- institutional adoption;
- business impact.

The source includes deployment/scale references such as:

```text
100+ deployments
```

across banks / NBFC environments.

A Product Leadership statement also references scale across approximately:

```text
98–100+ banks and NBFCs
```

These are authored portfolio claims and are not dynamically calculated or independently validated by the website.

Do not silently normalize the wording/range between those references without confirmation.

### 24.3 Main Portfolio independence

The Main Product Portfolio contains its own summary metrics for Integrated Channels.

Those summaries are independently authored in:

```text
src/data/portfolio.js
```

They are not generated from the detailed Integrated Channels case study.

When an approved outcome changes, review both locations.

---

## 25. Product Leadership

### 25.1 Purpose

The final section summarizes Product Leadership across the Integrated Channels platform.

Primary sources:

```text
leadershipCompetencies
capabilities
connectWays
```

The section represents themes such as:

- product strategy;
- platform thinking;
- prioritisation;
- stakeholder alignment;
- technical collaboration;
- banking domain understanding;
- cross-functional delivery;
- measurable product outcomes.

### 25.2 Final project navigation

The final section also owns project-navigation controls separately from the shared ProjectShell footer.

The shared project footer is intentionally suppressed for this route.

---

## 26. Header and Navigation

### 26.1 Shared shell

The project uses:

```text
src/components/ProjectShell.astro
```

for:

- shared project header;
- identity;
- project section navigation;
- active-section tracking;
- shared responsive behavior.

### 26.2 Header order

Current desktop order:

```text
Identity
Project Section Navigation
Home
Back to Portfolio
View Projects
PDF
```

### 26.3 Destinations

| Control | Destination |
|---|---|
| Identity | `/` |
| Home | `/` |
| Back to Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| PDF | Browser print/PDF preparation |

### 26.4 Section navigation

Project-specific links target:

```text
#overview
#ecosystem
#challenge
#strategy
#pm-scope
#product-metrics
#portfolio
#tech-data
#outcomes
#product-leadership
```

These IDs must remain aligned with the actual sections.

---

## 27. Previous / Next Project Navigation

Current case-study relationship:

```text
Previous:
Telecom Cost Optimization

Current:
Integrated Channels

Next:
Ayu DocConnect
```

The four-project loop is:

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

If a project slug or project order changes, update the relevant previous/next links consistently across all project pages.

---

## 28. Component Map

All paths are relative to the repository root.

| File | Responsibility |
|---|---|
| `src/pages/projects/integrated-channels.mdx` | File-based route adapter and project metadata |
| `src/components/IntegratedChannelsCaseStudy.astro` | ProjectShell configuration, canonical `APPS`, modal/workspace markup and interaction logic |
| `src/components/IntegratedChannelsPresentation.astro` | All ten project sections and visible presentation data |
| `src/components/IntegratedChannelsIcon.astro` | Project-specific native SVG icons |
| `src/components/IntegratedChannelsBrandMark.astro` | Native SVG M2P / project branding |
| `src/components/ProjectShell.astro` | Shared project header, navigation and section observer |
| `src/components/HeaderActions.astro` | Home, Back to Portfolio, View Projects and PDF actions |
| `src/components/ResponsiveNavigation.astro` | Compact project-menu behavior |
| `src/components/SavePdf.astro` | Browser PDF/print trigger |
| `src/styles/integrated-channels-case-study.scss` | Primary Integrated Channels visual/layout styling |
| `src/styles/docconnect-overview-prototype.scss` | Shared imported prototype/header/layout layer |
| `src/styles/project-case-study.scss` | Shared project-case-study styles |
| `src/styles/page-view.scss` | Shared viewport-fit behavior where applicable |
| `src/scripts/tablet-desktop-fit.js` | Tablet desktop-fit behavior |
| `src/scripts/responsive-relationships.js` | Compact relationship/diagram adjustments |
| `src/scripts/save-portfolio-pdf.js` | Print/PDF preparation |
| `src/data/portfolio.js` | Main Product Portfolio summary/card for Integrated Channels |

---

## 29. Active vs Legacy Implementation

The current Integrated Channels workspace behavior is implemented inline in:

```text
IntegratedChannelsCaseStudy.astro
```

The older:

```text
src/scripts/integrated-channels.js
```

has a different DOM/data contract.

It is not the active workspace implementation.

This distinction is important when:

- fixing application launch behavior;
- changing modal logic;
- modifying deep links;
- updating focus handling;
- debugging workspace content.

Do not assume a similarly named legacy script controls the live route.

---

## 30. Icon and Brand Architecture

### 30.1 Icons

Project icons come from:

```text
IntegratedChannelsIcon.astro
```

The implementation uses native SVG paths rather than a hosted icon library.

When adding a new concept:

- use the correct icon key;
- extend the native icon component where required;
- do not substitute arbitrary Unicode/text symbols.

### 30.2 Branding

Integrated Channels branding comes from:

```text
IntegratedChannelsBrandMark.astro
```

The brand mark is native SVG.

Preserve:

- `viewBox`;
- path structure;
- aspect ratio;
- sizing contract.

---

## 31. Production Assets

Integrated Channels production photographs are stored under:

```text
public/ics/
```

Current project-specific production assets:

```text
public/ics/ics-challenge-bank.png
public/ics/ics-pm-scope-photo.png
```

Runtime URLs:

```text
/ics/ics-challenge-bank.png
/ics/ics-pm-scope-photo.png
```

Shared profile asset:

```text
/profile/portrait.jpg
```

### Asset responsibilities

| Asset | Usage |
|---|---|
| `/ics/ics-challenge-bank.png` | Challenge banking photograph |
| `/ics/ics-pm-scope-photo.png` | PM Scope work/planning photograph |
| `/profile/portrait.jpg` | Shared project-header portrait |

These are live production assets.

There are no Integrated Channels visual-reference screenshots under:

```text
docs/references/
```

Documentation remains Markdown-only.

---

## 32. Styling Architecture

Primary project stylesheet:

```text
src/styles/integrated-channels-case-study.scss
```

The stylesheet owns:

- project palette;
- section layout;
- cards;
- diagrams;
- application-node positioning;
- modal/workspace styling;
- responsive rules;
- project-specific visual hierarchy.

The implementation also depends on shared styles including:

```text
src/styles/project-case-study.scss
src/styles/docconnect-overview-prototype.scss
src/styles/page-view.scss
```

The filename:

```text
docconnect-overview-prototype.scss
```

does not mean the file affects only DocConnect.

It is a shared dependency and therefore requires cross-project caution.

---

## 33. `ic()` Sizing Helper

Integrated Channels SCSS uses the Sass helper:

```text
ic()
```

for proportional sizing.

The helper converts authored baseline pixel values into:

```text
cqw
```

container-relative sizing.

This is separate from:

```text
tablet-desktop-fit.js
```

The two mechanisms solve different layout concerns.

Do not replace or combine them without first understanding:

- project-local proportional sizing;
- shared tablet canvas fitting.

---

## 34. Desktop Behaviour

Current shared project desktop architecture applies from approximately:

```text
1280px
```

The shared header height is normalized to:

```text
clamp(72px, 6.2vw, 120px)
```

The project contains older/local route-specific sizing declarations as well.

Final behavior depends on the stylesheet cascade.

Therefore, do not determine final desktop geometry from one SCSS rule in isolation.

The desktop presentation retains:

- one continuous page;
- sticky project header;
- section-sized layouts;
- application ecosystem diagrams;
- modal overflow behavior;
- authored project content density.

---

## 35. Tablet Behaviour

Tablet range:

```text
768px – 1279px
```

The project uses:

```text
tablet-desktop-fit.js
```

against the established desktop basis:

```text
1280 × 665
```

The helper:

- mirrors relevant desktop styles/media behavior;
- resolves viewport-relative values against the desktop basis;
- proportionally scales the authored desktop canvas.

The project is not rebuilt as a separate tablet application.

Do not introduce a competing tablet-scale system without intentionally replacing the existing architecture.

---

## 36. Mobile Behaviour

Below:

```text
768px
```

the project uses native smaller-screen flow.

Shared responsive behavior includes:

- compact project header;
- Menu control;
- stacked/reflowed layouts;
- responsive cards;
- shared relationship helpers;
- normal document scrolling.

`responsive-relationships.js` can measure/relocate existing relationship content at compact sizes.

This is part of the active architecture and should not be duplicated through a second compact-layout script.

---

## 37. PDF / Export Behaviour

### 37.1 Trigger

The shared project Header provides the PDF control through:

```text
SavePdf.astro
```

### 37.2 Export source

For project routes:

```text
savePortfolioPdf()
```

fetches the current:

```text
location.pathname + location.search
```

For this case study, that means:

```text
/projects/integrated-channels/
```

### 37.3 Section requirement

The export requires ten unique navigation-linked sections.

Expected count:

```text
10
```

Those sections are identified through the project navigation.

Therefore:

```text
Navigation IDs
↔ Section IDs
↔ PDF section collection
```

must remain aligned.

### 37.4 Print preparation

The export flow:

1. fetches fresh route HTML;
2. parses the page;
3. removes scripts/module preloads;
4. identifies the project sections;
5. prepares one section per print sheet;
6. waits for styles, fonts, and images;
7. freezes desktop responsive behavior;
8. removes/hides interactive elements such as dialogs;
9. prepares the print frame;
10. opens the browser print dialog.

Print basis:

```text
1280 × 665
```

### 37.5 Output model

There is no backend PDF generator.

The output flow is:

```text
Prepare browser print document
        ↓
Browser print dialog
        ↓
User chooses Save as PDF
```

Actual PDF fidelity should be validated separately when export behavior is changed.

---

## 38. Important Data / Rendering Contracts

### 38.1 Application IDs

`APPS.id` is shared by:

- Ecosystem launchers;
- Portfolio launchers;
- modal lookup;
- deep links.

Do not rename an ID without updating all dependent references.

---

### 38.2 Application order

The `APPS` order also influences spatial/application ordering.

Adding or reordering an application may require updates to:

```text
ics-node-*
```

position classes and connector geometry.

---

### 38.3 Presentation dictionaries

These mappings must remain aligned with application IDs:

```text
displayName
displayCategory
cardDescriptions
ecosystemIcons
portfolioIcons
ecosystemTones
portfolioTones
portfolioDisplayName
```

---

### 38.4 Modal escaping

Workspace strings rendered through `innerHTML` must continue to pass through:

```text
esc()
```

Do not remove this protection when extending modal content.

---

### 38.5 Modal focus logic

The current keyboard logic assumes one interactive modal control.

Adding additional modal controls requires rewriting the Tab/focus logic.

---

### 38.6 Section navigation

The ten project-nav IDs must match the ten actual section IDs.

This also affects PDF export.

---

### 38.7 Main Portfolio summary

The detailed case study and Main Product Portfolio summary are independently authored.

Changing one does not automatically update the other.

---

## 39. Maintenance Rules

When modifying Integrated Channels:

1. Preserve the ten-section order unless a structural change is explicitly requested.
2. Preserve the twelve canonical application IDs unless a deliberate migration is approved.
3. Keep application display dictionaries aligned with `APPS`.
4. Check Ecosystem and Portfolio launchers after any application change.
5. Check deep links after changing application IDs.
6. Check numbered/spatial CSS positions when applications are added or reordered.
7. Preserve the `esc()` rendering protection in the modal.
8. Revisit focus trapping if new interactive modal controls are added.
9. Do not treat example API paths as working endpoints.
10. Do not convert synthetic report/demo data into claims of live client data.
11. Preserve project-specific section hashes.
12. Preserve Identity/Home → `/`.
13. Preserve Back to Portfolio → `/portfolio/`.
14. Preserve View Projects → `/portfolio/#portfolio`.
15. Check PDF section collection if navigation changes.
16. Keep production images under `public/ics/`.
17. Do not add visual-reference screenshots under `docs/references/`.
18. Treat `ProjectShell`, `HeaderActions`, `ResponsiveNavigation`, shared SCSS, responsive scripts, and PDF scripts as cross-project dependencies.
19. Do not edit the older `integrated-channels.js` assuming it is the active workspace implementation.
20. Check Main Product Portfolio summary content separately when product scope, metrics, or title changes.
21. Preserve authored compliance terminology and role/control scope.
22. Do not silently normalize deployment counts or outcome claims.
23. Preserve current responsive architecture unless the change explicitly concerns responsive redesign.
24. Validate workspace interactions separately from visual/layout changes.

---

## 40. Current QA-Resolved Modal Finding

The repository-wide QA originally identified the Integrated Channels custom dialog as a Medium confirmed defect because opening the modal did not adequately:

- move focus;
- contain focus;
- disable relevant background interaction;
- restore the triggering element.

The source has since been updated to:

- store the trigger;
- focus Close;
- retain Tab/Shift+Tab within the current single interactive control;
- apply background inertness;
- preserve prior inert states;
- restore background states;
- restore trigger focus;
- retain Close;
- retain backdrop close;
- retain Escape close;
- retain application deep links;
- retain section-hash restoration.

Current status:

```text
Resolved in source
```

Runtime assistive-technology verification remains separate from this source confirmation.

For complete QA history, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

---

## 41. Current Validation Status

Current implementation reference is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Current source confirms:

| Area | Status |
|---|---|
| Integrated Channels route | Confirmed |
| Ten project sections | Confirmed |
| Twelve canonical applications | Confirmed |
| Application order | Confirmed |
| Section navigation IDs | Confirmed |
| Shared project Header | Confirmed |
| Identity/Home → `/` | Confirmed |
| Back to Portfolio → `/portfolio/` | Confirmed |
| View Projects → `/portfolio/#portfolio` | Confirmed |
| Canonical application workspaces | Confirmed |
| `#app/<id>` deep-link behavior | Confirmed |
| Close / backdrop / Escape handling | Confirmed in source |
| Modal trigger focus restoration | Confirmed in source |
| Background inert handling | Confirmed in source |
| Single-control Tab containment | Confirmed in source |
| Modal escaping through `esc()` | Confirmed |
| Local ICS production assets | Confirmed |
| Responsive source architecture | Confirmed |
| Ten-page project PDF logic | Confirmed |

The final routing/header implementation associated with this source state previously recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

Historical Integrated Channels checks performed on 10 October 2026 reported:

- all ten sections measured;
- no missing section anchors;
- no broken HTML images;
- no document-level horizontal overflow;
- 1280 × 665 viewport checks.

Those historical checks predate later shared header/routing and modal-accessibility changes.

They must not be treated as fresh certification of:

- current visual alignment;
- current keyboard runtime behavior;
- current modal accessibility behavior;
- native browser zoom;
- current tablet/mobile rendering;
- final PDF fidelity;
- pixel-perfect reference equivalence.

For repository-wide architecture and implementation constraints, see:

[08-project-context.md](08-project-context.md)

For repository-wide QA findings and their current status, see:

[07-repository-qa-report.md](07-repository-qa-report.md)
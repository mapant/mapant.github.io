# Ayu DocConnect Reference

Complete implementation, product scope, user journey, measurement, architecture, navigation, responsive behavior, export, historical validation, and maintenance reference for the Ayu DocConnect case study.

<div align="center">

### 🩺 Ayu DocConnect · HealthTech

![HealthTech](https://img.shields.io/badge/HealthTech-00A67E?style=for-the-badge)
![Doctor Engagement](https://img.shields.io/badge/Doctor_Engagement-0EA5E9?style=for-the-badge)
![Referral Journey](https://img.shields.io/badge/Referral_Journey-7C3AED?style=for-the-badge)
![Product Metrics](https://img.shields.io/badge/Product_Metrics-E11D48?style=for-the-badge)
![10 Sections](https://img.shields.io/badge/10_Sections-059669?style=for-the-badge)
![Mobile Experience](https://img.shields.io/badge/Mobile_Experience-F59E0B?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance


---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Purpose and Product Context

Ayu DocConnect represents a doctor-engagement, patient-referral, and patient-journey platform within the Ayu Health ecosystem.

The product story connects:

- referral doctors;
- patients;
- BDMs / Sales;
- Ayu hospitals and operations;
- Growth / Product teams;
- external healthcare services.

The case study demonstrates how a fragmented, relationship-led doctor/referral process can be converted into a connected digital product experience covering:

- doctor onboarding and activation;
- digital patient referrals;
- patient-journey visibility;
- OPD / IPD progression;
- discharge visibility;
- follow-up;
- incentives and earnings;
- doctor-network growth;
- notifications and engagement;
- healthcare-service integrations;
- analytics and product measurement.

The portfolio page represents the product through native Astro components, HTML, CSS, SVG, local production assets, and authored data.

It does **not** connect to:

- patient medical records;
- Ayu Health production systems;
- hospital databases;
- live doctor accounts;
- payment systems;
- Google Business APIs;
- WhatsApp APIs;
- ambulance-service APIs;
- production analytics platforms.

Phone screens, patient names, statuses, earnings, charts, workflows, and architectural diagrams are portfolio representations rather than a running healthcare application.

---

> 🔗 **ROUTING & NAVIGATION**

## 2. Route and Page Entry Point

Current route:

```text
/projects/ayu-docconnect/
```

Route source:

```text
src/pages/projects/ayu-docconnect.mdx
```

Primary implementation component:

```text
src/components/DocConnectCaseStudy.astro
```

Route metadata:

```text
title: Ayu DocConnect
company: AYU HEALTH · DOCTOR ENGAGEMENT PLATFORM
```

Rendering flow:

```text
ayu-docconnect.mdx
        ↓
DocConnectCaseStudy.astro
        ↓
ProjectShell.astro
        ↓
10 Ayu DocConnect sections
```

Current project sequence:

```text
Previous → Integrated Channels Suite
Current  → Ayu DocConnect
Next     → Ayu Sales Intelligence & Field Force Optimization
```

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 3. Shared Project-Shell Configuration

`DocConnectCaseStudy.astro` invokes `ProjectShell.astro` with project-specific configuration.

Current configuration includes:

```text
title="Ayu DocConnect"
ctaText="View Projects"
ctaHref="/portfolio/#portfolio"
showProjectFooter={false}
viewportFitPrototype={true}
profileImage="/profile/portrait.png"
```

Important implications:

- the shared project header is used;
- the Header profile uses `/profile/portrait.png` rather than the default JPG;
- the shared ProjectShell footer is suppressed;
- previous/return/next navigation is authored inside the final Product Leadership section;
- viewport-fit behavior is enabled;
- View Projects goes directly to the Main Product Portfolio project section.

---

> 🔗 **ROUTING & NAVIGATION**

## 4. Section Order and Navigation Anchors

The case study contains ten sections in a fixed order.

| # | Section | Anchor | Section Class |
|---:|---|---|---|
| 1 | Overview | `#overview` | `dc-overview` |
| 2 | Ecosystem | `#ecosystem` | `dc-ecosystem` |
| 3 | Challenge | `#challenge` | `dc-challenge` |
| 4 | Strategy | `#strategy` | `dc-strategy` |
| 5 | PM Scope | `#pm-scope` | `dc-scope` |
| 6 | Product Metrics | `#product-metrics` | `dc-metrics` |
| 7 | Portfolio | `#portfolio` | `dc-portfolio` |
| 8 | Tech & Data | `#tech-data` | `dc-tech` |
| 9 | Outcomes | `#outcomes` | `dc-outcomes` |
| 10 | Product Leadership | `#product-leadership` | `dc-leadership` |

Project navigation must remain aligned with these IDs.

Main Product Portfolio IDs such as:

```text
#metrics
#tech
#scope
```

must not replace the project-specific:

```text
#product-metrics
#tech-data
#pm-scope
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 5. Section Metadata

`DocConnectCaseStudy.astro` maintains a `pages` collection containing:

- section ID;
- section class;
- stored reference ratio;
- page number;
- caption.

Current values:

| # | ID | Stored Ratio | Caption |
|---:|---|---:|---|
| 01 | `overview` | `1.95` | A CONNECTED ECOSYSTEM FOR DOCTORS, PATIENTS AND HEALTHCARE SERVICES |
| 02 | `ecosystem` | `1.95` | DOCTORS · PATIENTS · HOSPITALS · SERVICES |
| 03 | `challenge` | `1.95` | OFFLINE DEPENDENCE · LIMITED VISIBILITY · FRAGMENTED EXPERIENCE |
| 04 | `strategy` | `1.95` | REFER → TRACK → ENGAGE → GROW |
| 05 | `pm-scope` | `1.9296` | STRATEGY · DISCOVERY · DELIVERY · ADOPTION · MEASUREMENT |
| 06 | `product-metrics` | `1.9498` | ACQUISITION · ACTIVATION · ENGAGEMENT · JOURNEY VISIBILITY |
| 07 | `portfolio` | `1.943` | REFERRALS · JOURNEY TRACKING · ENGAGEMENT · SERVICES |
| 08 | `tech-data` | `1.9498` | MODULAR APPS · INTEGRATIONS · DATA · OPERATIONAL VISIBILITY |
| 09 | `outcomes` | `1.9397` | DOCTOR ADOPTION · REFERRAL GROWTH · JOURNEY VISIBILITY |
| 10 | `product-leadership` | `1.942` | HEALTHTECH PRODUCTS · PARTNERSHIPS · SHARED IMPACT |

The component applies these ratios through:

```text
--reference-ratio
```

However, the current desktop viewport-fit CSS overrides section aspect ratio to:

```text
auto
```

Therefore, changing a stored ratio does not necessarily change the actual current desktop section frame.

The ratios remain implementation metadata and must not be treated as proof of the rendered page dimensions.

---

> 📚 **REFERENCE DETAIL**

## 6. Case Study Structure

| # | Section | Main Content Sources | Main Presentation |
|---:|---|---|---|
| 1 | Overview | Literal narrative and value statements | Doctor image, native DocConnect workspace, care journey, stakeholder callouts, three value cards |
| 2 | Ecosystem | `ecosystemNodes`, `ecosystemOutcomes` | Six stakeholder nodes around central Ayu DocConnect hub |
| 3 | Challenge | `challenges`, `fragmentation` | Four challenge cards, doctor photograph, callouts and fragmentation impacts |
| 4 | Strategy | `strategyCards` | Four strategy pillars, native product orbit and priority strip |
| 5 | PM Scope | `phases`, `phaseTypography` | Six PM phases, deliverables, process track and impact strip |
| 6 | Product Metrics | `coreSignals`, `handoffMeasures`, `doctorLifecycle`, `measurementWorkflows` | Doctor & Referral Measurement Framework |
| 7 | Portfolio | `modules`, `uxHighlights`, `journeySteps` | Six modules, three native phone views, UX highlights and doctor journey |
| 8 | Tech & Data | `integrations`, `techStack`, literal layer data | Four architecture layers, six integrations and ten technology cards |
| 9 | Outcomes | `outcomeMetrics`, `adoption`, `ecosystemValue` | Pilot metrics, adoption visualization, referral growth and stakeholder value |
| 10 | Product Leadership | `leadershipCards` | Collaboration map, leadership cards, connect banner and project navigation |

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 7. Doctor Business / Product Scope

Ayu DocConnect is positioned around doctor engagement and referral-driven patient journeys.

Core scope includes:

```text
Doctor Relationships
        ↓
Digital Referral
        ↓
Patient Journey Visibility
        ↓
Engagement
        ↓
Incentives / Services
        ↓
Doctor Network Growth
```

The product narrative combines:

- digital patient referral;
- doctor engagement;
- patient tracking;
- incentives;
- earnings visibility;
- external healthcare services;
- doctor-to-doctor network growth;
- operational visibility;
- analytics and measurement.

The detailed page is independently authored from the Main Product Portfolio DocConnect card.

Changes to one do not automatically update the other.

---

> 📚 **REFERENCE DETAIL**

## 8. Primary Stakeholders

The Ecosystem defines six stakeholder groups.

### 8.1 Referral Doctors

Current responsibilities/value include:

- patient referrals;
- patient tracking;
- doctor referrals;
- incentives and earnings;
- access to healthcare services.

### 8.2 Patients

Current journey/value includes:

- OPD consultations;
- IPD admissions;
- discharge journey;
- ambulance services;
- care-journey updates.

### 8.3 BDMs / Sales

Current context includes:

- digital leads from doctors;
- doctor relationships;
- follow-up and support;
- doctor engagement.

### 8.4 Ayu Hospitals / Operations

Current context includes:

- patient handling;
- hospital coordination;
- OPD / IPD updates;
- discharge information;
- patient-journey tracking.

### 8.5 Growth / Product

Current context includes:

- referral acquisition;
- engagement and notifications;
- doctor-to-doctor network;
- incentive programs;
- referral / OPD / IPD funnel analytics.

### 8.6 External Services

Current represented services include:

- WhatsApp notifications;
- Google Business;
- ambulance partners;
- other healthcare services.

These are represented integration/product contexts.

They are not active service connections made by the portfolio website.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 9. Overview

### 9.1 Purpose

The Overview establishes Ayu DocConnect as a connected doctor/referral product rather than an isolated referral form.

Primary headline:

```text
Ayu DocConnect

Turn doctor relationships
into a connected
digital care journey.
```

Primary authored description:

```text
Ayu DocConnect is a doctor engagement, referral and patient journey platform that brings referral doctors, patient journeys and healthcare services into one connected digital experience, enabling stronger collaboration and better patient care.
```

### 9.2 Main visual composition

The Overview contains:

- Ayu Health brand mark;
- professional doctor photograph;
- native Ayu DocConnect device/workspace;
- three primary action tiles;
- patient-care-stage flow;
- three stakeholder callouts;
- three value cards.

Primary workspace actions:

```text
Refer Patient
Track Journey
Engage
```

Care-stage flow:

```text
Referral
→ OPD
→ IPD
→ Discharge
```

Primary stakeholder callouts:

```text
Ayu Hospitals
Patients
Referral Doctors
```

### 9.3 Three value cards

#### Refer Digitally

Purpose:

```text
Enable referral doctors to refer patients easily and keep them within the Ayu Health network.
```

#### Track Patient Journeys

Purpose:

```text
Provide real-time visibility across the patient journey from referral to discharge.
```

#### Stay Engaged with Ayu

Purpose:

```text
Deliver relevant information, updates and opportunities to strengthen long-term relationships with doctors.
```

### 9.4 Branding

Overview uses:

```text
AyuHealthBrand.astro
```

The brand mark is native SVG and carries:

```text
aria-label="Ayu Health"
```

Standalone Ayu Health branding is intentionally concentrated in the Overview.

---

> 📚 **REFERENCE DETAIL**

## 10. Ecosystem

### 10.1 Purpose

The Ecosystem describes how stakeholders and services interact through a shared doctor-engagement and referral product.

Primary heading:

```text
A connected ecosystem enabling doctor engagement,
patient care journeys and network growth.
```

The product narrative emphasizes:

- end-to-end doctor and patient journey connectivity;
- digital referrals;
- journey visibility;
- engagement;
- incentives;
- doctor-network growth;
- service integrations.

### 10.2 Doctor ecosystem loop

The authored loop is:

```text
Engage Doctors
      ↓
Enable Patient Care
      ↓
Grow Network
```

### 10.3 Network structure

Six stakeholder cards surround the central hub:

```text
Referral Doctors
Patients
BDMs / Sales
Ayu Hospitals / Operations
Growth / Product
External Services
        ↓
Ayu DocConnect
Doctor Engagement & Referral Platform
```

Each stakeholder record includes a fixed positional class:

```text
dc-node-1
dc-node-2
dc-node-3
dc-node-4
dc-node-5
dc-node-6
```

Changing stakeholder order or positioning requires checking:

- node classes;
- connector coordinates;
- label geometry;
- section layout.

### 10.4 Ecosystem outcomes

Four authored outcomes are displayed:

| Outcome | Description |
|---|---|
| Stronger doctor engagement | Digital tools and continuous value beyond onboarding |
| Transparent patient journeys | Real-time visibility from referral to discharge |
| Network-driven growth | Doctor-to-doctor referrals and measurable funnel |
| Integrated services | Access to ambulance, Google Business and healthcare services |

---

> 📚 **REFERENCE DETAIL**

## 11. Challenge

### 11.1 Purpose

The Challenge section describes the original doctor/referral journey as fragmented across people, systems, and offline interactions.

Primary heading:

```text
Doctor relationships existed,
but the journey was fragmented.
```

### 11.2 Four challenge areas

| # | Challenge | Description |
|---:|---|---|
| 01 | Offline dependence | Doctor relationships relied heavily on BDM-led and offline interactions |
| 02 | Patient journey opacity | Referring doctors lacked one place to understand progress after referral |
| 03 | Limited digital engagement | Limited recurring value or triggers encouraged doctors to return |
| 04 | Network growth dependency | Acquisition relied heavily on direct BDM relationships |

### 11.3 Offline dependence

Current problem signals:

- manual coordination;
- phone / WhatsApp communication;
- lack of self-serve digital platform.

### 11.4 Patient journey opacity

Current problem signals:

- no real-time patient status;
- limited OPD / IPD updates;
- unclear discharge and follow-up.

### 11.5 Limited digital engagement

Current problem signals:

- few recurring engagement triggers;
- limited visibility into outcomes;
- no integrated services or incentives.

### 11.6 Network growth dependency

Current problem signals:

- dependency on field teams;
- limited organic doctor referrals;
- slower and less scalable growth.

### 11.7 Fragmented-flow narrative

The left narrative visual uses:

```text
Offline Interactions
→ Multiple Touchpoints
→ Limited Visibility
→ Slower Network Growth
```

### 11.8 Challenge doctor visual

Current production image:

```text
/ayu-docconnect/doctor-portrait-challenge-phone.png
```

Alternative text:

```text
Doctor viewing a patient's referral journey
```

Visible callouts:

```text
Patient Referred
Track Journey
OPD · IPD Updates
Earn Incentives
```

### 11.9 Impact of fragmentation

Four impacts are authored:

| Impact | Explanation |
|---|---|
| Delayed patient updates | Referring doctors had to follow up manually |
| Lower repeat engagement | Limited reasons to return after initial use |
| Slower network growth | Acquisition remained dependent on direct BDM relationships |
| Underutilised potential | Doctor relationships did not fully convert to patient/business outcomes |

---

> 📚 **REFERENCE DETAIL**

## 12. Strategy

### 12.1 Purpose

The Strategy converts the referral process into a continuous engagement and growth loop.

Primary heading:

```text
Turn referral activity into an
engagement and growth loop.
```

The strategy is:

```text
Refer
→ Track
→ Engage
→ Grow
```

### 12.2 Four strategy pillars

#### 01 — Digitise the referral journey

Purpose:

```text
Allow doctors to create patient leads digitally and follow their progress.
```

Current actions:

- simple digital patient-referral flow;
- easy tracking of referred patients;
- seamless doctor-app experience.

#### 02 — Create continuous visibility

Purpose:

```text
Expose patient progression through referral, OPD, IPD and discharge stages.
```

Current actions:

- real-time patient-journey updates;
- OPD / IPD / discharge status;
- clear and transparent tracking.

#### 03 — Build engagement loops

Purpose:

```text
Use notifications, incentives, patient updates and healthcare services to create repeat value.
```

Current actions:

- notifications and WhatsApp updates;
- incentives and earnings for referrals;
- practice services and healthcare utilities.

#### 04 — Turn the network into a growth channel

Purpose:

```text
Enable doctor-to-doctor referrals with measurable acquisition and business outcomes.
```

Current actions:

- doctor-to-doctor referral capability;
- incentive programs;
- referral-led acquisition measurement.

### 12.3 Strategy outcomes

The narrative panel displays:

```text
More Doctor Referrals
Higher Engagement
Stronger Doctor Network
Measurable Business Impact
```

### 12.4 Strategy orbit

The main strategy composition uses a native four-color directional orbit around:

```text
Ayu DocConnect
```

The four orbit concepts map to:

- referral;
- visibility;
- incentives;
- network growth.

### 12.5 Strategic priorities

Five priorities are displayed:

1. Seamless doctor experience
2. Real-time journey visibility
3. Repeat engagement
4. Network-led growth
5. Measurable business outcomes

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 13. Product Management Scope

### 13.1 Purpose

The PM Scope presents end-to-end Product Management ownership across:

```text
Strategy
→ Requirements
→ Design
→ Development
→ GTM / Adoption
→ Monitoring / Improvement
```

Primary heading:

```text
Drove end-to-end product execution
to create real impact.
```

### 13.2 Six PM phases

Current phases:

1. Product Strategy
2. Requirement Gathering
3. Product Design & Documentation
4. Development & Execution
5. GTM & Adoption
6. Monitoring & Continuous Improvement

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 14. Product Strategy Phase

Primary description begins:

```text
Defined product vision
```

Current deliverables:

- Product vision & positioning
- Target user personas
- Use-case definition
- Product roadmap
- Success metrics

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 15. Requirement Gathering Phase

Primary description begins:

```text
Engaged with doctors
```

Current deliverables:

- stakeholder interviews;
- user requirements;
- requirement prioritisation;
- feature backlog;
- As-Is / To-Be process mapping.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 16. Product Design & Documentation Phase

Primary description begins:

```text
Created PRD, BRD, FRD
```

Current deliverables:

- PRD / BRD / FRD;
- user flows and journey maps;
- Figma wireframes;
- process flows / DFD;
- UI/UX inputs and design reviews;
- UAT scenarios.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 17. Development & Execution Phase

Primary description begins:

```text
Worked with engineering teams
```

Current deliverables:

- sprint planning;
- backlog grooming;
- feature development;
- testing;
- UAT support;
- release planning;
- deployment;
- JIRA issue tracking.

---

> 📚 **REFERENCE DETAIL**

## 18. GTM & Adoption Phase

Primary description begins:

```text
Planned pilot launch
```

Current deliverables:

- pilot plan and rollout;
- doctor onboarding;
- training;
- incentive programs;
- communication assets;
- adoption tracking;
- feedback.

---

> 📚 **REFERENCE DETAIL**

## 19. Monitoring & Continuous Improvement Phase

Primary description begins:

```text
Tracked usage, referrals and engagement
```

Current deliverables:

- usage analytics;
- referral analytics;
- feedback analysis;
- feature enhancement;
- performance tracking;
- continuous-improvement roadmap.

### PM Scope impact

The final impact strip states that the work delivered:

```text
a usable, scalable and measurable
doctor engagement and patient journey platform
from concept to adoption.
```

Current benefit statements:

- Better alignment across stakeholders
- Faster time to value
- Higher adoption
- Strong foundation for future scale

---

> 📚 **REFERENCE DETAIL**

## 20. PM Phase Rendering Contract

The PM Scope maintains two separate arrays:

```text
phases
phaseTypography
```

They are index-aligned.

`phaseTypography[index].emphasis` is rendered in bold and then removed from the beginning of:

```text
phase.description
```

using:

```text
phase.description.slice(phaseTypography[index].emphasis.length)
```

Therefore:

```text
phaseTypography[index].emphasis
```

must remain an exact prefix of the matching phase description.

If it does not, visible text can:

- lose characters;
- duplicate wording;
- split incorrectly.

Do not reorder `phases` without also reordering `phaseTypography`.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 21. Product Metrics

### 21.1 Current measurement framework

The active Product Metrics section is:

```text
Doctor & Referral Measurement Framework
```

Subtitle:

```text
Specific product signals tied to doctor value and patient progression.
```

Primary narrative:

```text
Measure doctor activation,
referral conversion
and care continuity.
```

The measurement approach connects:

- doctor onboarding;
- activation;
- repeat usage;
- referrals;
- patient progression;
- journey visibility;
- service responsiveness;
- payout turnaround.

### 21.2 Measurement lens

Three primary lenses:

```text
Activation
Conversion
Continuity
```

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 22. Core Product Signals

Six signals are displayed in the current framework.

| Signal | Definition / Measurement Intent |
|---|---|
| Doctor Activation | Doctors creating a first referral ÷ doctors onboarded |
| Active Doctor Usage | Weekly / monthly doctors using referral or tracking workflows |
| Repeat Referral Rate | Doctors referring again ÷ referring doctors |
| Referral Conversion | Referral → OPD and OPD → IPD progression |
| Journey Visibility | Referred patients with an updated journey status |
| Payout Turnaround | Time from payout initiation to completion |

The content uses deliberately authored line arrays.

For example:

```text
title: [...]
lines: [...]
```

Each line is rendered separately using `<span>` elements.

Changing the array structure changes approved wrapping and should not be treated as a normal prose edit.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 23. Referral Journey Measurement

The Product Metrics section measures every handoff in:

```text
Referral
→ OPD
→ IPD
→ Discharge
→ Follow-up
```

Three handoff measures are displayed.

### Conversion

```text
Stage-to-stage progression
and drop-offs
```

### Timeliness

```text
Time between stages
and status updates
```

### Completeness

```text
Patient tracking through
discharge and follow-up
```

Current product-decision statement:

```text
identify where referrals stall or visibility breaks.
```

---

> 📚 **REFERENCE DETAIL**

## 24. Doctor Lifecycle and Retention

Three lifecycle areas are represented.

### Onboarding

```text
Completion and time to first referral
```

### Engagement

```text
Repeat visits, referrals and notification interaction
```

### Retention

```text
Returning doctors, inactivity and cohort behaviour
```

Current product decision:

```text
remove activation friction
and strengthen repeat value.
```

---

> 📚 **REFERENCE DETAIL**

## 25. Workflow Adoption and Operational Health

Four workflow-health cards are rendered.

### Patient Referrals & Tracking

Measure:

```text
Referral creation and patient-status tracking usage
```

Informs:

```text
Improve the core referral workflow
```

### Incentives & Earnings

Measure:

```text
Earnings-view usage and payout turnaround
```

Informs:

```text
Improve payout clarity and responsiveness
```

### Extended Services

Measure:

```text
Google Business and ambulance-service usage
```

Informs:

```text
Prioritise services doctors use
```

### Support & Reliability

Measure:

```text
Support resolution time and referral errors
```

Informs:

```text
Resolve recurring service friction
```

---

> 📊 **DATA, METRICS & OUTCOMES**

## 26. Product Decisions Driven by Measurement

The current Metrics section ends with four decision areas:

1. Onboarding simplification
2. Doctor engagement
3. Referral bottlenecks
4. Workflow prioritisation

These are product-decision outcomes of the measurement framework rather than additional metrics.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 27. Product Metrics Replacement History

The current Doctor & Referral Measurement Framework replaced an earlier metrics design.

The removed/obsolete design included concepts such as:

- acquisition funnel;
- referral-conversion chart;
- feature-adoption chart;
- old adoption percentages;
- North Star strip;
- Product Health Framework;
- older metric categories.

Those older structures must **not** be restored from:

- historical documentation;
- archived screenshots;
- unused CSS classes;
- older visual references.

The current source is authoritative.

No reference image is used as live Product Metrics UI.

---

> ✅ **QA & VALIDATION**

## 28. Product Metrics Fidelity Status

The historical targeted validation explicitly recorded:

```text
Product Metrics 100% pixel-perfect fidelity: FAIL
```

The historical pass confirmed:

- correct framework structure;
- correct group order;
- required wording;
- native HTML/CSS/SVG implementation;
- section readability;
- existing 1280 × 665 fit.

It did **not** establish exact pixel equality for:

- typography sizing;
- icon finish;
- gradients;
- reference-relative dimensions;
- precise visual proportions.

The documentation must preserve this result as:

```text
FAIL
```

until an explicitly performed later fidelity validation proves otherwise.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 29. Portfolio / Product Experience

### 29.1 Purpose

The Portfolio section presents the detailed product experience for doctors.

Primary heading:

```text
A Connected
Product Experience
for Doctors
```

The narrative emphasizes a unified platform for:

- patient referrals;
- patient tracking;
- incentives;
- doctor network;
- ambulance services;
- Google Business.

### 29.2 Product-experience principles

Current authored statements:

- Designed for real-world clinical workflows
- Simple, intuitive and mobile-first experience
- Integrated with key healthcare services
- Built to drive engagement, referrals and network growth

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 30. Product Modules

Six modules are rendered.

| Module | Purpose |
|---|---|
| Patient Referrals | Create, track and manage patient referrals |
| Patient Tracking | Follow patient journey across OPD, IPD and discharge |
| Incentives & Earnings | Track incentives, earnings and referral performance |
| Doctor Network | Discover and collaborate with other doctors |
| Ambulance Services | Book ambulance for patients directly from the app |
| Google Business | Manage practice profile and digital presence |

These are authored product capabilities, not functioning modules within the portfolio website.

---

> 📚 **REFERENCE DETAIL**

## 31. Native Phone Demonstrations

The Portfolio uses three native phone mockups.

They are built from:

- HTML;
- CSS;
- SVG;
- `DocConnectIcon`;
- local authored fixture content.

They are not:

- screenshots;
- application embeds;
- live mobile-app views;
- iframes.

### Phone 1 — Home

Current fixture content includes:

```text
Dr. Sharma
MBBS, General Physician
```

Primary quick actions:

- Refer a Patient
- My Patients
- My Earnings
- Doctor Network
- Ambulance Services
- Google Business

Recent Activity contains example entries such as:

- New patient referred
- Patient admitted
- Incentive credited

These are demonstration fixtures.

### Phone 2 — Patient Referrals

Example records include authored patient names and statuses such as:

```text
Amit Verma
Priya Mehta
Ramesh Kumar
Sunita Sharma
```

with example states including:

```text
In Progress
Admitted
Discharged
Pending
```

These are static illustrative records and must not be interpreted as real patient data.

### Phone 3 — My Earnings

Current authored fixture includes:

```text
Total Earnings
₹24,500
+12% vs last month
```

and example categories:

- Referral Incentives
- Service Usage
- Network Bonus

These values are static UI examples.

They are not connected to real doctor payouts or financial systems.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 32. User Experience Highlights

Four UX themes are rendered.

| Highlight | Current Intent |
|---|---|
| Mobile-first design | Optimised for on-the-go doctor access |
| Quick actions | Referrals, updates and earnings in a few taps |
| Personalised dashboard | Relevant information and insights |
| Real-time notifications | Patient updates, referral status and incentives |

---

> 📚 **REFERENCE DETAIL**

## 33. Doctor Journey

The Portfolio section presents five product journey steps:

```text
1. Refer Patient
2. Track Journey
3. Earn Incentives
4. Grow Network
5. Access Services
```

Current supporting intent:

| Step | Description |
|---|---|
| Refer Patient | Create and share patient referrals |
| Track Journey | Follow status across OPD, IPD and discharge |
| Earn Incentives | Get rewarded for successful referrals |
| Grow Network | Connect with other doctors and collaborate |
| Access Services | Book ambulance and other healthcare services |

---

> 📊 **DATA, METRICS & OUTCOMES**

## 34. Tech & Data

### 34.1 Purpose

The Tech & Data section describes a modular and integration-ready product architecture supporting:

- doctor engagement;
- referrals;
- patient-journey visibility;
- external services;
- analytics;
- reporting;
- operational visibility.

Primary heading:

```text
Modern, scalable
and secure
Technology backbone
```

Current narrative principles:

- modular and integration-ready architecture;
- referral and patient-journey data capture;
- Google Analytics and Looker Studio reporting;
- operational visibility;
- secure and role-based foundation.

---

> 📚 **REFERENCE DETAIL**

## 35. Platform Foundation

The authored foundation sequence presents:

```text
Modular Apps
→ API-Ready Services
→ Secure & Compliant
→ Analytics & Growth
```

These represent the underlying product architecture concept.

They are not runtime capabilities of the portfolio website.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 36. System Architecture

The Tech & Data section represents four layers.

### 36.1 User Layer

Current nodes:

- Doctors — Mobile App
- Patients — Referral Journey
- Ayu Health Operations
- Healthcare Partners

### 36.2 Application Layer

Current nodes:

```text
Ayu DocConnect
(Web & Mobile)

Backend Services
(API Layer)

Business Logic
(Referral / Journey Workflows)
```

### 36.3 Data Layer

Current nodes:

#### Application Database

Represents:

```text
Doctor
Patient
Referral
Engagement Data
```

#### Analytics & Reporting

Represents:

```text
Google Analytics
Looker Studio
SQL Reporting
```

#### Event & Activity Logs

Represents:

```text
Usage and workflow tracking
```

### 36.4 External Integrations

Current represented integrations:

- Google Business
- Ambulance Services
- Notification Services
  - SMS
  - Push
  - WhatsApp
- Incentive & Earnings Services

The architecture diagram is conceptual product documentation.

It does not represent live connections created by the portfolio.

---

> 📚 **REFERENCE DETAIL**

## 37. Key Integrations

Six integration summaries are stored in `integrations`.

| Integration | Purpose |
|---|---|
| Google Business | Manage practice profile, visibility and reviews |
| Ambulance Booking | Support patient ambulance requests |
| Communication Services | Notifications, WhatsApp and in-app alerts |
| Incentives & Earnings | Referral rewards and earnings visibility |
| Analytics & Reporting | Adoption, referral and journey dashboards |
| Security & Governance | Access control, permissions and audit visibility |

These integration labels describe the represented product ecosystem.

No external integration request is initiated by the portfolio page.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 38. Technology Stack

Ten authored technology/context cards are displayed.

| Technology / Tool | Context |
|---|---|
| PostgreSQL | Relational database |
| Python | Scripting & automation |
| Big Data | Data processing & analytics |
| Google Analytics | Web & user analytics |
| Looker Studio | Dashboards & reporting |
| SQL Reporting | Reporting & query analysis |
| REST APIs | Integration & services |
| JIRA | Project & sprint management |
| Figma | UI/UX design & prototyping |
| GitHub | Source control & collaboration |

These labels describe product/delivery context.

They do not mean the portfolio route directly connects to or executes these systems.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 39. Technology Logo Implementation

`DocConnectIcon.astro` owns the current technology-icon rendering.

Stored logo assets include:

```text
/ayu-docconnect/logos/postgresql.svg
/ayu-docconnect/logos/python.svg
/ayu-docconnect/logos/figma.svg
/ayu-docconnect/logos/github.svg
```

The current icon component embeds the relevant SVG geometry locally rather than relying on remote logo requests.

Licensing/attribution file:

```text
public/ayu-docconnect/logos/DEVICON-LICENSE.txt
```

This file must be retained when the vendor SVG sources are retained.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 40. Outcomes

### 40.1 Purpose

The Outcomes section connects product adoption and referral activity to doctor, patient, and ecosystem value.

Primary heading:

```text
Real impact
across doctors, patients
and the healthcare ecosystem.
```

The section presents:

- doctor adoption;
- active usage;
- referral growth;
- doctor-network growth;
- patient-journey visibility;
- stakeholder value.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 41. Key Outcome Metrics

The current authored outcome records are:

| Metric | Label |
|---:|---|
| `1,150+` | Doctors installed / logged in |
| `400+` | Monthly active users (MAU) |
| `170+` | Weekly active users (WAU) |
| `27+` | Doctor referrals in pilot |
| `7` | Newly onboarded doctors through referral flow |

The section explicitly labels these as:

```text
Key Outcomes
(Pilot Phase)
```

Preserve their scope.

Do not transform these values into broader organizational or production-wide claims without explicit approval.

---

> 🖼️ **ASSETS & VISUALS**

## 42. Adoption Visualization

The source contains six authored adoption-bar fixtures.

| Stage | Display Value | Bar Height |
|---|---:|---:|
| Pilot Start | `120+` | `15%` |
| Month 1 | `280+` | `30%` |
| Month 2 | `520+` | `48%` |
| Month 3 | `780+` | `67%` |
| Month 4 | `980+` | `82%` |
| Month 5 | `1,150+` | `96%` |

The percentage values are used as:

```text
visual bar heights
```

They must not automatically be interpreted as independently calculated adoption-rate percentages.

The website does not calculate the chart from raw product data.

---

> 📚 **REFERENCE DETAIL**

## 43. Referral Growth

The current Referral Growth panel displays:

```text
27+
Doctor referrals in pilot
```

and:

```text
7
Newly onboarded doctors through referral flow
```

Current supporting statements include:

- increasing doctor-to-doctor referrals;
- higher conversion to new doctor onboarding;
- expanding referral network across specialties.

These remain authored pilot-scope statements.

---

> 📚 **REFERENCE DETAIL**

## 44. Patient Journey Visibility

The Outcomes section represents:

```text
Referral
→ OPD
→ IPD
→ Discharge
```

Current supporting statements:

- real-time patient-journey tracking;
- better transparency for referral doctors;
- fewer follow-up gaps;
- improved continuity of care across services.

The portfolio itself does not query a patient-status system.

---

> 📚 **REFERENCE DETAIL**

## 45. Ecosystem Value

Five stakeholder-value records are displayed.

| Stakeholder | Value |
|---|---|
| Doctors | Higher engagement, visibility and earnings opportunities |
| Patients | Better coordinated care and improved patient experience |
| BDMs / Sales | Stronger doctor relationships and network growth |
| Ayu Hospitals / Operations | Improved referral inflow and operational visibility |
| Growth / Product | Validated product model with clear path to scale |

---

> 📊 **DATA, METRICS & OUTCOMES**

## 46. Outcomes Key Takeaway

The authored takeaway states that Ayu DocConnect has demonstrated value through:

- stronger doctor relationships;
- more referrals and network growth;
- better patient journeys and outcomes.

The section uses `DocConnectLandscape.astro` as the supporting background scene.

The landscape combines:

- native SVG gradients;
- native SVG mountain shapes;
- local photograph;
- overlay gradients;
- native trail effects.

Current photograph:

```text
/ayu-docconnect/mountain-light-trail.png
```

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 47. Product Leadership

### 47.1 Purpose

The final section positions the work in the context of broader healthcare Product Leadership and collaboration.

Primary heading:

```text
Let’s build impactful
healthcare products
together.
```

### 47.2 Collaboration areas

The central map includes:

1. Healthtech Products
2. Product Strategy & Advisory
3. Digital Health Solutions
4. Doctor & Patient Engagement Platforms
5. Healthcare Data & Analytics
6. Collaborations & Partnerships

### 47.3 Leadership cards

Four `leadershipCards` are rendered.

#### Build Similar Platforms

Focus:

- Product discovery & vision
- Use-case definition
- Solution design and roadmap

#### Healthcare Product Consulting

Focus:

- Product strategy & positioning
- Feature and roadmap planning
- Market and user insights

#### Data-Driven Healthcare Solutions

Focus:

- Data strategy and use cases
- Metrics and outcome framework
- Analytics-driven product decisions

#### Collaborations & Opportunities

Focus:

- Product partnerships
- Advisory and consulting
- Exploring new opportunities

---

> 📚 **REFERENCE DETAIL**

## 48. Final Connect Banner

The final section contains an authored healthcare-product collaboration banner.

Current primary question:

```text
Have a healthcare product idea
or looking to build something similar?
```

Current connection themes:

```text
Explore ideas
Share perspectives
Create impact
```

This banner is content within the case study.

It is distinct from the Main Product Portfolio `#connect` form.

---

> 🔗 **ROUTING & NAVIGATION**

## 49. Project Navigation

The final Product Leadership section owns its own project-navigation block because:

```text
showProjectFooter={false}
```

Current links:

### Previous Project

```text
/projects/integrated-channels
```

Label:

```text
Integrated Channels Suite
```

### Return to Product Portfolio

```text
/portfolio/#portfolio
```

### Next Project

```text
/projects/ayu-sales-intelligence
```

Label:

```text
Ayu Sales Intelligence & Field Force Optimization
```

This final-section return link intentionally targets the project-card section rather than only `/portfolio/`.

---

> 🔗 **ROUTING & NAVIGATION**

## 50. Shared Header and Navigation

### 50.1 Header structure

Current shared project-header order:

```text
Identity
Project Section Navigation
Home
Back to Portfolio
View Projects
PDF
```

### 50.2 Destinations

| Control | Destination |
|---|---|
| Identity | `/` |
| Home | `/` |
| Back to Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| PDF | Browser print/PDF workflow |

### 50.3 Header profile asset

Ayu DocConnect explicitly overrides the default ProjectShell profile asset with:

```text
/profile/portrait.png
```

This differs from project routes that use the default:

```text
/profile/portrait.jpg
```

Do not change the DocConnect profile path unintentionally while modifying shared header behavior.

---

> 🔗 **ROUTING & NAVIGATION**

## 51. Active Section Navigation

`ProjectShell.astro` creates an:

```text
IntersectionObserver
```

for the project navigation.

The observer tracks all section targets generated from:

```text
navSections
```

Current observer configuration includes:

```text
rootMargin: -18% 0px -58% 0px
threshold: [0, .15, .35, .6]
```

The currently visible section receives:

```text
class="active"
```

on its project-header navigation link.

This behavior is shared across project routes.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 52. Main Data Collections

`DocConnectCaseStudy.astro` contains its primary project data locally.

Major collections include:

| Collection | Count / Purpose |
|---|---|
| `navSections` | 10 project-section links |
| `pages` | 10 section metadata records |
| `ecosystemNodes` | 6 stakeholder nodes |
| `ecosystemOutcomes` | 4 ecosystem outcomes |
| `challenges` | 4 challenge cards |
| `fragmentation` | 4 fragmentation impacts |
| `strategyCards` | 4 strategy pillars |
| `phases` | 6 PM phases |
| `phaseTypography` | 6 matching rendering records |
| `coreSignals` | 6 product signals |
| `handoffMeasures` | 3 referral-handoff measures |
| `doctorLifecycle` | 3 lifecycle stages |
| `measurementWorkflows` | 4 workflow-health areas |
| `modules` | 6 product modules |
| `uxHighlights` | 4 UX themes |
| `journeySteps` | 5 doctor-journey steps |
| `integrations` | 6 integration cards |
| `techStack` | 10 technology/tool cards |
| `outcomeMetrics` | 5 outcome metrics |
| `adoption` | 6 authored chart fixtures |
| `ecosystemValue` | 5 stakeholder-value records |
| `leadershipCards` | 4 leadership/collaboration records |

Additional content remains literal Astro markup.

There is no project CMS or remote content database.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 53. Main Portfolio Synchronization

The Main Product Portfolio independently stores the DocConnect project summary in:

```text
src/data/portfolio.js
```

Current Main Portfolio card includes:

```text
Company:
AYU HEALTH

Title:
Ayu DocConnect

Short:
Doctor engagement, referral & patient journey platform.
```

Current card statistics:

```text
1,150+  Doctors installed / logged in
400+    Monthly active users
170+    Weekly active users
```

Current card route:

```text
/projects/ayu-docconnect
```

The Main Portfolio card and detailed case study are **not automatically synchronized**.

When an approved change affects:

- title;
- product description;
- problem;
- ownership;
- outcome;
- statistics;
- tags;
- route;

review both sources.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 54. Component Map

All paths below are relative to the repository root.

| File | Responsibility |
|---|---|
| `src/pages/projects/ayu-docconnect.mdx` | File-based route adapter and route metadata |
| `src/components/DocConnectCaseStudy.astro` | Ten sections, all major project data, phone UI, navigation and literal narrative |
| `src/components/AyuHealthBrand.astro` | Native Ayu Health SVG identity |
| `src/components/DocConnectIcon.astro` | Project icons and embedded technology/vendor SVG geometry |
| `src/components/DocConnectLandscape.astro` | Reusable landscape composition used in lower sections |
| `src/components/ProjectShell.astro` | Shared project header, section navigation and active-state observer |
| `src/components/HeaderActions.astro` | Home, Back to Portfolio, View Projects and PDF actions |
| `src/components/ResponsiveNavigation.astro` | Compact shared navigation behavior |
| `src/components/SavePdf.astro` | Browser print/PDF trigger |
| `src/styles/docconnect-case-study.scss` | Base DocConnect layout and visual vocabulary |
| `src/styles/docconnect-overview-prototype.scss` | Existing viewport/header/Overview layout layer |
| `src/styles/docconnect-reference-layout.scss` | Detailed section refinements and current Metrics implementation |
| `src/styles/project-case-study.scss` | Shared project-shell styling |
| `src/styles/page-view.scss` | Shared viewport-fit overrides where applicable |
| `src/scripts/tablet-desktop-fit.js` | Tablet desktop-fit logic |
| `src/scripts/responsive-relationships.js` | Compact relationship layout behavior |
| `src/scripts/save-portfolio-pdf.js` | Print/PDF preparation |
| `src/data/portfolio.js` | Main Product Portfolio DocConnect summary |

---

> 📚 **REFERENCE DETAIL**

## 55. Style-Layer Ownership

DocConnect uses several SCSS layers.

### `docconnect-case-study.scss`

Owns the core:

- `.dc-*` visual system;
- section layouts;
- cards;
- diagrams;
- typography;
- tones;
- phone styling;
- architecture;
- project-specific responsive behavior.

### `docconnect-overview-prototype.scss`

Contains existing prototype/header/viewport treatment and Overview-related layout rules.

This stylesheet is also imported by Integrated Channels.

Its filename must therefore **not** be interpreted as meaning it is safe to change only for DocConnect.

### `docconnect-reference-layout.scss`

Owns later detailed refinements including:

- readability corrections;
- Product Metrics replacement;
- phone-presentation refinements;
- PM typography;
- orbit presentation;
- landscape contrast;
- detailed layout overrides.

Because all layers participate in the final cascade, do not create a new competing frame/layout system before tracing which existing selector currently wins.

---

> 🖼️ **ASSETS & VISUALS**

## 56. Production Assets

All live assets remain under:

```text
public/
```

Current DocConnect assets:

| Production Asset | Current Role |
|---|---|
| `/ayu-docconnect/doctor-portrait.png` | Overview and Portfolio doctor image |
| `/ayu-docconnect/doctor-portrait-challenge-phone.png` | Current Challenge doctor-with-phone image |
| `/ayu-docconnect/doctor-portrait-challenge.png` | Earlier stored doctor image; not current Challenge source |
| `/ayu-docconnect/mountain-light-trail.png` | Landscape photograph used by `DocConnectLandscape` |
| `/ayu-docconnect/logos/postgresql.svg` | Stored PostgreSQL source/logo |
| `/ayu-docconnect/logos/python.svg` | Stored Python source/logo |
| `/ayu-docconnect/logos/figma.svg` | Stored Figma source/logo |
| `/ayu-docconnect/logos/github.svg` | Stored GitHub source/logo |
| `/ayu-docconnect/logos/DEVICON-LICENSE.txt` | License/attribution |
| `/profile/portrait.png` | Explicit project-header profile image |

No archived reference screenshots are retained in:

```text
docs/references/
```

Documentation is Markdown-only.

---

> 🖼️ **ASSETS & VISUALS**

## 57. Active and Inactive Assets

The presence of an asset under `public/` does not guarantee that it is currently rendered.

Example:

```text
doctor-portrait-challenge.png
```

is retained in production assets but is not the current Challenge image.

The live Challenge uses:

```text
doctor-portrait-challenge-phone.png
```

Before deleting or replacing an asset:

1. search the current source;
2. confirm whether it is actively referenced;
3. distinguish historical/stored assets from runtime assets.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 58. DocConnect Landscape Component

`DocConnectLandscape.astro` is a reusable SVG composition.

It contains:

- gradient definitions;
- mountain vectors;
- light-trail vectors;
- the local `/ayu-docconnect/mountain-light-trail.png` image;
- a photo-fade overlay.

The SVG IDs are generated from the component class:

```text
const idPrefix =
  dc-landscape-<first-class-name>
```

This prevents multiple instances from reusing the same SVG gradient/filter IDs.

Current uses include project-specific landscape strips in sections such as:

- PM Scope;
- Outcomes;
- Product Leadership.

When adding another instance, provide a distinct class so its generated SVG IDs remain distinct.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 59. Responsive Architecture

The project uses the shared responsive model:

```text
Desktop     ≥ 1280px
Tablet      768px – 1279px
Mobile      < 768px
```

The architecture is not CSS-only.

It combines:

- route-specific SCSS;
- shared ProjectShell styles;
- viewport-fit classes;
- `tablet-desktop-fit.js`;
- `responsive-relationships.js`;
- shared responsive navigation logic.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 60. Desktop Behaviour

At desktop widths:

```text
>= 1280px
```

the current viewport-fit cascade uses the existing authored desktop composition.

Shared project-header height is normalized to approximately:

```text
clamp(72px, 6.2vw, 120px)
```

Dense section layouts are still controlled by the DocConnect style layers.

Current desktop overrides can supersede older aspect-ratio rules.

Therefore:

```text
pages[].ratio
```

must not be treated as the final rendered aspect ratio.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 61. Tablet Behaviour

Tablet range:

```text
768px – 1279px
```

The project reuses:

```text
src/scripts/tablet-desktop-fit.js
```

against the established desktop basis:

```text
1280 × 665
```

The helper:

- mirrors relevant desktop media rules;
- resolves viewport-dependent values against the desktop basis;
- scales the authored canvas proportionally.

The project is not independently rebuilt as a separate tablet presentation.

Do not introduce a second tablet scaling system unless the existing approach is explicitly being replaced.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 62. Mobile Behaviour

Below:

```text
768px
```

the case study uses native responsive flow.

This includes:

- compact project header;
- Menu control;
- reflowed cards;
- stacked sections;
- mobile phone/layout changes;
- compact relationship handling;
- normal document scrolling.

`responsive-relationships.js` can reposition existing relationship content at compact widths.

It does not create a second duplicate content set.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 63. Responsive Navigation

The shared project Menu is supplied through:

```text
ResponsiveNavigation.astro
```

It supports:

- open / close toggle;
- `aria-expanded`;
- `aria-controls`;
- Escape;
- outside click;
- close after selecting a navigation link;
- focus return to Menu after Escape.

The collapsed navigation remains JavaScript-dependent.

Repository QA classified the no-JavaScript fallback as:

```text
VALID BUT LOW PRACTICAL IMPACT
```

and it remains intentionally deferred.

Do not document it as resolved.

---

> 📄 **PDF & EXPORT**

## 64. PDF / Export Behaviour

### 64.1 Trigger

The project uses:

```text
SavePdf.astro
```

through the shared project header.

### 64.2 Export source

For project routes:

```text
savePortfolioPdf()
```

fetches:

```text
location.pathname + location.search
```

For Ayu DocConnect this resolves to:

```text
/projects/ayu-docconnect/
```

### 64.3 Expected page count

Project export expects:

```text
10
```

unique navigation-linked sections.

The export depends on alignment between:

```text
navSections
section IDs
project header links
```

### 64.4 Preparation process

The export:

1. fetches fresh route HTML;
2. parses the page;
3. removes scripts and module-preload links;
4. identifies the ten case-study sections;
5. clones the authored content;
6. removes/hides interactive controls as required for print;
7. waits for styles, images, and fonts;
8. freezes desktop media behavior;
9. prepares 1280 × 665 print sheets;
10. opens the browser print dialog.

### 64.5 Output model

There is no backend PDF-generation service.

The workflow is:

```text
Prepare print document
        ↓
Browser print dialog
        ↓
User selects Save as PDF
```

Actual print/PDF fidelity must be validated separately from source inspection.

---

> ♿ **ACCESSIBILITY & INTERACTION**

## 65. Accessibility and Interaction Notes

### 65.1 Project navigation

The shared project navigation uses:

```text
aria-label="Case study sections"
```

Active navigation is tracked by `ProjectShell`.

### 65.2 Section semantics

Sections use unique IDs and structured headings.

Decorative SVG elements are commonly marked:

```text
aria-hidden="true"
```

### 65.3 Images

Current meaningful image alternatives include:

```text
Doctor using the Ayu DocConnect workspace
Doctor viewing a patient's referral journey
Doctor using Ayu DocConnect
Manoj Pant
```

Some repeated/decorative image instances intentionally use empty alternative text.

### 65.4 Brand mark

`AyuHealthBrand.astro` uses:

```text
role="img"
aria-label="Ayu Health"
```

### 65.5 No healthcare backend

There is no route-specific:

- patient form;
- doctor login;
- patient lookup;
- medical-record backend;
- health-data submission.

### 65.6 Accessibility boundary

Source semantics and keyboard behavior are implementation features.

They are not formal accessibility certification.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 66. Important Data / Rendering Contracts

### 66.1 `phases` ↔ `phaseTypography`

Must remain in identical order.

The `emphasis` value must remain an exact prefix of `phase.description`.

### 66.2 Core Product Signals

`coreSignals` deliberately stores:

```text
title: [...]
lines: [...]
```

The line arrays control approved visual wrapping.

### 66.3 Handoff Measures

`handoffMeasures` also uses deliberate line arrays.

Do not flatten or reflow their text without considering layout.

### 66.4 Measurement Workflows

Each record contains:

```text
measure: [...]
informs: [...]
```

with authored line breaks.

### 66.5 Stakeholder Nodes

`ecosystemNodes` contain fixed:

```text
position
```

classes.

Changing order or position requires connector/layout review.

### 66.6 Technology icons

Technology names depend on valid `DocConnectIcon` keys.

Keep the icon definitions and technology array aligned.

### 66.7 Landscape component instances

Keep class-based SVG ID prefixes distinct.

### 66.8 Section IDs

Navigation, active-state tracking, and PDF export depend on the ten stable section IDs.

---

> 📊 **DATA, METRICS & OUTCOMES**

## 67. Main Portfolio Metric Distinction

The Main Product Portfolio contains a separate global outcome:

```text
40% → 75%
Doctor adoption
AYU HEALTH · DOCONNECT
```

The detailed DocConnect case study currently presents:

```text
1,150+ Doctors installed / logged in
400+ Monthly active users
170+ Weekly active users
27+ Doctor referrals in pilot
7 Newly onboarded doctors through referral flow
```

These are separate authored metrics.

Do not substitute one set for the other automatically.

If a future content update intends to reconcile them, the intended:

- population;
- time period;
- metric definition;
- scope;

must be confirmed first.

---

> ✅ **QA & VALIDATION**

## 68. Historical Targeted Validation

A dedicated DocConnect correction pass was performed on:

```text
9 October 2026
```

The historical validation focused on:

- readability;
- branding;
- narrative panels;
- Portfolio phone presentation;
- Product Metrics replacement;
- technology icons;
- section fit;
- section navigation.

Those historical results remain evidence for that implementation state.

They are not a new validation of later routing/header/export changes.

---

> ✅ **QA & VALIDATION**

## 69. Historical Targeted Validation Results

| Check | Historical Result |
|---|---|
| Ecosystem readability | PASS |
| Strategy readability | PASS |
| PM Scope standalone branding removed | PASS |
| PM Scope descriptions and all six deliverable groups readable | PASS |
| Product Metrics consistent blue left panel | PASS |
| Product Metrics required wording/groups | PASS |
| Product Metrics readability and complete lower row | PASS |
| Product Metrics 100% pixel-perfect fidelity | **FAIL** |
| Portfolio consistent blue left panel | PASS |
| Three Portfolio phones independently angled with shadows/overlap | PASS |
| PostgreSQL, Python, Figma and GitHub logos visible | PASS |
| All ten technology icons visible | PASS |
| Four architecture layers with strengthened pastel backgrounds | PASS |
| Outcomes standalone branding removed | PASS |
| Outcomes readability | PASS |
| Landscape-strip text readability | PASS |
| Product Leadership readability | PASS |
| Standalone branding only in Overview | PASS |

The historical fidelity FAIL must remain visible and must not be converted to PASS based on later source inspection alone.

---

> ✅ **QA & VALIDATION**

## 70. Historical Section Fit Validation

The historical browser validation used:

```text
1280 × 665 CSS viewport
device scale factor: 1
```

Recorded geometry:

```text
Layout width:          1265px
Sticky header:         79.359375px
Section height:        585.625px
Scrollbar allowance:   approximately 15px
```

Section starts were recorded as aligning below the header within approximately:

```text
0.5 CSS pixel
```

Historical section results:

| Section | Readability | Text Clipping | Horizontal Overflow | Nested Scrolling | Header / Active State |
|---|---|---|---|---|---|
| Overview | PASS | NONE | NONE | NONE | PASS |
| Ecosystem | PASS | NONE | NONE | NONE | PASS |
| Challenge | PASS | NONE | NONE | NONE | PASS |
| Strategy | PASS | NONE | NONE | NONE | PASS |
| PM Scope | PASS | NONE | NONE | NONE | PASS |
| Product Metrics | PASS | NONE | NONE | NONE | PASS |
| Portfolio | PASS | NONE | NONE | NONE | PASS |
| Tech & Data | PASS | NONE | NONE | NONE | PASS |
| Outcomes | PASS | NONE | NONE | NONE | PASS |
| Product Leadership | PASS | NONE | NONE | NONE | PASS |

These are historical measurements.

They predate later shared route/header/responsive/export changes and must not be treated as a fresh current acceptance test.

---

> ✅ **QA & VALIDATION**

## 71. Historical Portfolio and Asset Validation

The historical validation also recorded:

- all five remaining HTML images loaded;
- all ten technology-stack icons rendered;
- previous/next project routes returned HTTP 200;
- all ten sections were visually inspected;
- no unintended section/card clipping was reported;
- no unintended document-level horizontal overflow was reported.

The five existing Portfolio journey counters were intentionally positioned beside their cards and remained within their enclosing panel/section.

Historical visual inspection found no unintended overlap from those counters.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 72. Historical Engineering Checks

The targeted historical pass recorded:

```text
npm.cmd run build → PASS
git diff --check → PASS
```

It also recorded:

```text
New dependencies → NONE
Staging          → NONE
Commit           → NO
Push             → NO
```

The pass did not introduce:

- CSS zoom;
- application-wide transform scaling;
- screenshot-derived UI;
- new dependencies.

Native Chrome zoom was explicitly:

```text
NOT VERIFIED
```

No zoom matrix was performed.

---

> ✅ **QA & VALIDATION**

## 73. Historical Validation Boundaries

The historical validation did **not** establish:

- current route/header acceptance after later changes;
- current tablet behavior;
- current mobile behavior;
- native Chrome zoom support;
- formal accessibility compliance;
- assistive-technology certification;
- current PDF output fidelity;
- 100% Product Metrics pixel equality.

Historical temporary QA evidence was stored outside the repository.

No visual-comparison screenshots are retained in the current documentation directory.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 74. Maintenance Rules

When modifying Ayu DocConnect:

1. Preserve the ten-section order unless a structural change is explicitly requested.
2. Preserve the project-specific anchor IDs.
3. Keep `navSections` aligned with actual section IDs.
4. Keep `pages` aligned with the ten sections.
5. Do not assume stored reference ratios control final current desktop geometry.
6. Keep `phases` and `phaseTypography` in the same order.
7. Keep each `phaseTypography.emphasis` as an exact prefix of its matching phase description.
8. Preserve deliberate text-line arrays in Product Metrics unless wrapping is intentionally being changed.
9. Do not restore the obsolete pre-replacement Product Metrics design.
10. Preserve outcome metric labels and pilot scope.
11. Do not interpret adoption-chart bar percentages as independently calculated adoption rates.
12. Do not treat static phone fixtures as real patient/doctor data.
13. Keep production assets under `public/`.
14. Do not add visual-reference images to `docs/references/`.
15. Preserve the vendor-license file while retaining the vendor logo sources.
16. Keep `DocConnectLandscape` instance classes distinct so SVG IDs remain unique.
17. Search all three DocConnect SCSS layers before adding competing overrides.
18. Treat `docconnect-overview-prototype.scss` as a shared dependency because Integrated Channels also imports it.
19. Preserve Identity/Home → `/`.
20. Preserve Back to Portfolio → `/portfolio/`.
21. Preserve Header View Projects → `/portfolio/#portfolio`.
22. Preserve final-section Return to Product Portfolio → `/portfolio/#portfolio`.
23. Check Main Product Portfolio DocConnect summary separately when detailed metrics/content change.
24. Preserve the current shared responsive architecture unless an explicit redesign is approved.
25. Preserve the ten-section PDF contract unless export scope is intentionally changed.
26. Do not represent source-level accessibility features as formal accessibility certification.
27. Preserve historical fidelity FAIL results unless a new validation explicitly replaces them.

---

> ✅ **QA & VALIDATION**

## 75. Current Validation Status

Current implementation reference is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Current source confirms:

| Area | Status |
|---|---|
| `/projects/ayu-docconnect/` route | Confirmed |
| Ayu DocConnect MDX adapter | Confirmed |
| Ten case-study sections | Confirmed |
| Section order and IDs | Confirmed |
| Shared ProjectShell | Confirmed |
| Explicit `/profile/portrait.png` Header image | Confirmed |
| Identity/Home → `/` | Confirmed |
| Back to Portfolio → `/portfolio/` | Confirmed |
| View Projects → `/portfolio/#portfolio` | Confirmed |
| Final-section Return → `/portfolio/#portfolio` | Confirmed |
| Previous → Integrated Channels | Confirmed |
| Next → Ayu Sales Intelligence | Confirmed |
| Six stakeholder groups | Confirmed |
| Four challenges | Confirmed |
| Four strategy pillars | Confirmed |
| Six PM phases | Confirmed |
| Doctor & Referral Measurement Framework | Confirmed |
| Six core product signals | Confirmed |
| Five referral-journey stages | Confirmed |
| Six product modules | Confirmed |
| Three native phone demonstrations | Confirmed |
| Four architecture layers | Confirmed |
| Six integration cards | Confirmed |
| Ten technology cards | Confirmed |
| Five key outcome metrics | Confirmed |
| Six adoption fixtures | Confirmed |
| Local production assets | Confirmed |
| Responsive source architecture | Confirmed |
| Ten-section PDF source logic | Confirmed |
| No-JavaScript compact-navigation fallback | Still deferred |
| Product Metrics historical pixel-perfect fidelity | **FAIL retained** |

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
- current tablet/mobile rendering;
- native browser zoom;
- complete keyboard/runtime behavior;
- formal accessibility compliance;
- assistive-technology behavior;
- final PDF/print fidelity.

For repository-wide QA findings and current status, see:

[07-repository-qa-report.md](07-repository-qa-report.md)

For repository-wide architecture and maintenance constraints, see:

[08-project-context.md](08-project-context.md)
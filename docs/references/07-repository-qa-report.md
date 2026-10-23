# Repository QA Report

> Nokia replacement (23 October 2026): current source now uses `/projects/enterprise-reporting-insights/` for **Enterprise Reporting & Insights Platform**, with `/projects/telecom-cost-optimization/` retained only as a static HTML compatibility redirect. The earlier Nokia title, route and validation evidence below are historical and do not certify the replacement. See [the current Nokia reference](06-telecom-cost-optimization-reference.md). No new deployment or browser certification is implied.

Repository-wide record of the original static QA review, targeted validation, approved fixes, deferred risk, later technical validation, known source exceptions, historical evidence, and remaining verification boundaries.

<div align="center">

### ✅ Repository QA · Validation & Risk

![QA Report](https://img.shields.io/badge/QA_Report-0A66C2?style=for-the-badge)
![0 Critical](https://img.shields.io/badge/0_Critical-059669?style=for-the-badge)
![0 High](https://img.shields.io/badge/0_High-059669?style=for-the-badge)
![3 Medium](https://img.shields.io/badge/3_Medium-F59E0B?style=for-the-badge)
![2 Low](https://img.shields.io/badge/2_Low-EAB308?style=for-the-badge)
![4 Resolved · 1 Deferred](https://img.shields.io/badge/4_Resolved_%C2%B7_1_Deferred-7C3AED?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance


---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Purpose

This document preserves the repository QA history in one authoritative location.

Its purpose is to record:

- what was originally reviewed;
- what was intentionally excluded;
- the five original QA findings;
- their original severity and classification;
- targeted validation results;
- approved source fixes;
- the intentionally deferred navigation fallback;
- later repository-level technical validation;
- known source exceptions discovered outside the original five-finding audit;
- historical visual-validation evidence;
- what has and has not been runtime-verified.

This report is **not**:

- a new broad repository audit;
- a formal accessibility assessment;
- a penetration/security test;
- a current pixel-perfect visual certification;
- a substitute for runtime/browser validation.

The original five-finding count must remain historically accurate even when later source issues or migration exceptions are documented separately.

---

> 📚 **REFERENCE DETAIL**

## 2. Current Documentation Baseline

Current documentation is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Current repository:

```text
https://github.com/mapant/mapant.github.io.git
```

Current public site:

```text
https://mapant.github.io/
```

The repository source remains authoritative for current implementation behavior.

Historical QA evidence remains authoritative only for the source state and scope in which it was originally performed.

---

> ✅ **QA & VALIDATION**

## 3. QA History Overview

The QA history can be divided into four stages.

```text
Original Static QA
        ↓
Targeted Validation of Five Findings
        ↓
Approved Source Fixes / Deferred Risk
        ↓
Later Routing, Header and Repository Validation
```

### Stage 1 — Original static QA

The repository was inspected through source review without a new browser/build pass.

Five findings were recorded:

```text
3 Medium
2 Low
```

### Stage 2 — Targeted validation

The five findings were revisited individually.

Results:

- four were confirmed/actionable;
- one remained a valid but low-practical-impact risk.

### Stage 3 — Approved fixes

Four findings were fixed in source.

The JavaScript-dependent navigation fallback was intentionally deferred.

### Stage 4 — Later repository work

Subsequent authorized routing/header changes and final repository validation occurred after the original QA.

That later work eventually recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

Those later checks validate the final recorded repository source state more broadly.

They do **not** retroactively mean that every original QA fix was individually runtime-tested immediately after its implementation.

---

> ✅ **QA & VALIDATION**

## 4. Original QA Scope

The original QA focused on source-level defects and practical implementation risks.

Areas reviewed included:

- Astro configuration;
- package/build configuration;
- route source files;
- shared layouts;
- shared Headers;
- navigation;
- Header actions;
- project shells;
- Intro shell;
- section components;
- imported assets;
- literal asset paths;
- internal anchors;
- external destinations visible directly in source;
- JavaScript interactions;
- contact-form logic;
- Integrated Channels custom modal;
- Sales Intelligence native dialogs;
- responsive navigation;
- responsive helper scripts;
- tablet-fit logic;
- relationship/connector logic;
- PDF/export preparation;
- static responsive declarations;
- overflow/clipping risk;
- markup;
- ARIA/source-level accessibility behavior;
- route/deployment inconsistencies.

Findings required source evidence.

They were classified as either:

```text
CONFIRMED DEFECT
```

or:

```text
POTENTIAL RISK
```

and assigned:

```text
Critical
High
Medium
Low
```

severity.

---

> 🔗 **ROUTING & NAVIGATION**

## 5. Routes Covered

The original QA was performed before the final routing migration was complete.

At that time:

```text
/        → Main Product Portfolio
/intro/  → Hero
```

The current routing architecture is now:

```text
/           → Hero
/intro/     → Hero alias
/portfolio/ → Main Product Portfolio
```

Current route map:

| # | Experience / Project | Current Route | Primary Source |
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

The current ten-route architecture should not be confused with the route state in effect during every historical test.

---

> 📚 **REFERENCE DETAIL**

## 6. Shared Areas Reviewed

The original source review included shared implementation areas such as:

```text
SiteLayout
PortfolioLayout
IntroShell
ProjectShell
Header
IntroHeader
HeaderActions
ResponsiveNavigation
SavePdf
```

and supporting scripts including:

```text
navigation.js
tablet-desktop-fit.js
responsive-relationships.js
save-portfolio-pdf.js
```

Project-specific areas inspected included:

- Integrated Channels workspace/modal;
- Main Portfolio Connect form;
- Telecom project CTA behavior;
- Sales Intelligence native dialogs;
- project navigation;
- section anchors;
- responsive menu behavior.

Because many of these files are shared, a defect in one shared component can affect multiple routes.

---

> 📚 **REFERENCE DETAIL**

## 7. Intentionally Excluded Areas

The original static QA intentionally did **not** perform:

- dependency vulnerability scanning;
- secrets/API-key scanning;
- generated-folder review;
- dependency-internal source review;
- comprehensive Git-history analysis;
- full external-link crawling;
- new browser-rendering sessions;
- Chrome zoom validation;
- pixel-fidelity comparison;
- subjective design review;
- new screenshots;
- new builds;
- package installation;
- dev-server startup;
- file-generating automated tests;
- formal WCAG testing;
- screen-reader certification;
- assistive-technology matrix testing;
- penetration/security testing.

Historical browser/build/visual evidence from earlier work was retained separately.

It was not silently rerun or upgraded during the QA consolidation.

---

> ✅ **QA & VALIDATION**

## 8. Original QA Summary

Original finding counts:

| Severity | Count |
|---|---:|
| Critical | 0 |
| High | 0 |
| Medium | 3 |
| Low | 2 |
| **Total** | **5** |

These are the **original audit counts**.

They must not be rewritten as the current unresolved count.

Current disposition:

| Current Disposition | Count |
|---|---:|
| Resolved in source | 4 |
| Intentionally deferred | 1 |

---

> ✅ **QA & VALIDATION**

## 9. Finding Classification Definitions

### Confirmed Defect

A concrete source-level implementation issue was present.

### Potential Risk

The source architecture contained a valid failure mode, but the issue was not necessarily occurring in normal operation.

### Resolved in Source

The approved implementation change exists in the inspected source.

This does not automatically mean every runtime/browser/accessibility scenario has been retested.

### Deferred

The finding remains known and intentionally unchanged.

---

<div align="center">

![QA & VALIDATION](https://img.shields.io/badge/QA_&_VALIDATION-059669?style=flat-square)

</div>

# Original QA Findings

---

> ✅ **QA & VALIDATION**

## 10. Finding 1 — Integrated Channels Modal Focus Handling

### Original severity

```text
Medium
```

### Original classification

```text
CONFIRMED DEFECT
```

### Primary location

```text
src/components/IntegratedChannelsCaseStudy.astro
```

Affected behavior:

```text
custom application dialog/workspace
showApp()
closeApp()
```

### Original issue

Opening the custom Integrated Channels workspace did not adequately:

- move keyboard focus into the dialog;
- contain keyboard focus;
- disable relevant background interaction;
- restore focus to the triggering control after close.

### Practical impact

Keyboard users could remain logically outside the modal or move into content behind it.

Closing the modal also did not reliably restore the user's interaction position.

### Targeted validation result

```text
CONFIRMED
```

### Approved resolution

The custom modal was updated to:

- remember the triggering element;
- remember previous inert states;
- focus the Close control;
- prevent Tab / Shift+Tab from escaping the current single-control dialog;
- make relevant background ancestor-siblings inert;
- preserve Close behavior;
- preserve backdrop close;
- preserve Escape close;
- preserve deep-link behavior;
- restore previous inert states;
- restore focus to the opener;
- restore section/deep-link state.

### Current status

```text
RESOLVED IN SOURCE
```

### Remaining verification boundary

The source change does not constitute:

- screen-reader certification;
- cross-browser keyboard certification;
- formal WCAG conformance.

The current Tab handling also assumes that Close remains the only interactive modal control.

If additional interactive controls are introduced, the focus logic must be redesigned.

---

> ✅ **QA & VALIDATION**

## 11. Finding 2 — Connect Form Accessible Names

### Original severity

```text
Medium
```

### Original classification

```text
CONFIRMED DEFECT
```

### Primary location

```text
src/components/sections/Connect.astro
```

### Affected controls

Five form controls:

1. Name
2. Company
3. Email
4. Inquiry topic
5. Message

### Original issue

The icon-oriented wrapping labels did not provide sufficiently explicit descriptive accessible names.

Placeholders could provide fallback naming in some accessibility models, but that was not considered a robust implementation.

The message counter could also contribute an unhelpful accessible naming relationship.

### Practical impact

Assistive-technology users could receive:

- ambiguous names;
- placeholder-dependent names;
- incomplete context.

### Targeted validation result

```text
CONFIRMED
```

with the qualification that placeholders can provide fallback naming in some environments.

### Approved resolution

Explicit accessible labels were added:

```text
Name
Company
Email
Inquiry topic
Message
```

### Current status

```text
RESOLVED IN SOURCE
```

### Remaining verification boundary

Source inspection confirms the explicit names.

Formal screen-reader/assistive-technology validation was not performed as part of the source fix.

---

> ✅ **QA & VALIDATION**

## 12. Finding 3 — JavaScript-Dependent Responsive Navigation

### Original severity

```text
Medium
```

### Original classification

```text
POTENTIAL RISK
```

### Primary locations

```text
src/components/ResponsiveNavigation.astro
src/styles/intro-portfolio.scss
```

with shared impact across responsive navigation.

### Original issue

At collapsed responsive widths, navigation is hidden until JavaScript initializes and applies the open-state class.

Current dependency:

```text
JavaScript initialization
        ↓
navigation-open state
        ↓
collapsed navigation becomes visible
```

There is no static/no-JavaScript fallback that exposes the links.

### Practical impact

If JavaScript:

- is disabled;
- fails to load;
- throws during initialization;
- is blocked;

the collapsed navigation links cannot be revealed.

### Targeted validation result

```text
VALID BUT LOW PRACTICAL IMPACT
```

The risk is valid, but it affects degraded/failed-JavaScript scenarios rather than a confirmed failure during normal JavaScript-enabled operation.

### Resolution decision

The proposed fix would modify:

- shared navigation initialization;
- collapsed-menu styles;
- fallback layout;
- potentially the initial visual state.

Because the change could affect multiple routes and the issue had low practical impact, it was intentionally deferred.

### Current status

```text
DEFERRED
NOT RESOLVED
```

### Documentation rule

Do **not** describe the responsive-navigation fallback as fixed.

---

> ✅ **QA & VALIDATION**

## 13. Finding 4 — Empty Inquiry Topic Select

### Original severity

```text
Low
```

### Original classification

```text
CONFIRMED DEFECT
```

### Primary location

```text
src/components/sections/Connect.astro
```

### Original issue

The inquiry-topic select contained only the empty placeholder.

The user could not choose a real inquiry type.

The generated mailto draft therefore received an empty topic.

### Practical impact

The field visually existed but had no usable selection.

### Targeted validation result

```text
CONFIRMED
```

### Approved resolution

The original placeholder was retained.

Five usable options were added:

```text
Product Management
Technical Product Management
Business Analysis
Enterprise Technology / Transformation
Other
```

The existing `FormData`/mailto behavior now carries the selected topic.

### Current status

```text
RESOLVED IN SOURCE
```

---

> ✅ **QA & VALIDATION**

## 14. Finding 5 — Telecom View Projects CTA

### Original severity

```text
Low
```

### Original classification

```text
CONFIRMED DEFECT
```

### Primary location

```text
src/components/NokiaAnalyticsCaseStudy.astro
```

through:

```text
ProjectShell.astro
HeaderActions.astro
```

### Original issue

The Telecom case study displayed:

```text
View Projects
```

while inheriting an earlier root/portfolio destination and inconsistent accessible naming behavior.

The route worked, but the destination did not align with the intended project-card section.

### Practical impact

Users could land at the old portfolio top rather than the project section.

The visible CTA and accessible destination context were also inconsistent.

### Targeted validation result

```text
VALID BUT LOW PRACTICAL IMPACT
```

### Approved resolution

Telecom now explicitly supplies:

```text
ctaText="View Projects"
ctaHref="/portfolio/#portfolio"
```

Current destination:

```text
/portfolio/#portfolio
```

### Current status

```text
RESOLVED IN SOURCE
```

### Remaining verification boundary

The source destination is confirmed.

Full runtime route/navigation verification was not part of the original source-fix step.

---

<div align="center">

![QA & VALIDATION](https://img.shields.io/badge/QA_&_VALIDATION-059669?style=flat-square)

</div>

# Consolidated Finding Table

---

> ✅ **QA & VALIDATION**

## 15. Original Five-Finding Matrix

| # | Severity | Classification | Area | Targeted Validation | Current Status |
|---:|---|---|---|---|---|
| 1 | Medium | CONFIRMED DEFECT | Integrated Channels modal focus/background behavior | CONFIRMED | Resolved in source |
| 2 | Medium | CONFIRMED DEFECT | Connect accessible names | CONFIRMED with placeholder qualification | Resolved in source |
| 3 | Medium | POTENTIAL RISK | JavaScript-dependent collapsed navigation | VALID BUT LOW PRACTICAL IMPACT | **Deferred** |
| 4 | Low | CONFIRMED DEFECT | Connect inquiry-topic select | CONFIRMED | Resolved in source |
| 5 | Low | CONFIRMED DEFECT | Telecom View Projects CTA | VALID BUT LOW PRACTICAL IMPACT | Resolved in source |

---

> 📚 **REFERENCE DETAIL**

## 16. Implemented Fix Summary

### Integrated Channels Modal

Current source behavior:

```text
Store trigger
Store prior inert states
Focus Close
Contain current single-control Tab behavior
Make relevant background siblings inert
Restore background states
Restore trigger focus
Preserve deep links
Preserve Close/backdrop/Escape
Preserve return hash
```

### Connect Accessible Names

Current explicit labels:

```text
Name
Company
Email
Inquiry topic
Message
```

### Connect Topic Options

Current real options:

```text
Product Management
Technical Product Management
Business Analysis
Enterprise Technology / Transformation
Other
```

### Telecom CTA

Current explicit destination:

```text
/portfolio/#portfolio
```

---

> ✅ **QA & VALIDATION**

## 17. Deferred Finding Summary

The only original finding intentionally left unresolved is:

```text
JavaScript-dependent responsive-navigation fallback
```

Current state:

```text
Known
Valid
Low practical impact
Intentionally deferred
```

A future fix must be treated as a shared navigation change because it can affect:

- Intro pages;
- Main Product Portfolio;
- all project case studies;
- initial collapsed-state rendering;
- compact-menu behavior.

It should not be changed casually while working on a single route.

---

<div align="center">

![QA & VALIDATION](https://img.shields.io/badge/QA_&_VALIDATION-059669?style=flat-square)

</div>

# Known Source Exceptions Outside the Original Five Findings

---

> 📚 **REFERENCE DETAIL**

## 18. Ayu Sales Intelligence `/#connect` CTA

A separate source exception exists in:

```text
src/components/SalesIntelligenceOutcomes.astro
```

The authored:

```text
Let’s Connect
```

CTA currently targets:

```text
/#connect
```

The active Main Product Portfolio Connect section now lives at:

```text
/portfolio/#connect
```

Current status:

```text
UNRESOLVED
```

This discrepancy was identified/documented during later routing/documentation work.

It was **not** one of the original five QA findings.

Therefore it must **not** be added to the original QA count as a sixth historical finding.

It should instead remain documented as:

```text
Known current source exception
```

until explicitly fixed and verified.

---

> 📚 **REFERENCE DETAIL**

## 19. Why Known Exceptions Are Kept Separate

The repository QA count represents a specific historical audit.

Adding later observations into that original count would incorrectly change the audit history.

The documentation therefore distinguishes:

```text
Original QA Findings
```

from:

```text
Later Known Source Exceptions
```

This preserves both:

- historical accuracy;
- current maintenance awareness.

---

<div align="center">

![QA & VALIDATION](https://img.shields.io/badge/QA_&_VALIDATION-059669?style=flat-square)

</div>

# Validation History

---

> ✅ **QA & VALIDATION**

## 20. Original QA Methodology

The original QA was a read-only/static source review.

It reused shared-source understanding across routes rather than repeatedly auditing identical implementation.

The review looked for:

- source defects;
- navigation inconsistencies;
- accessibility-source issues;
- form logic issues;
- modal interaction issues;
- responsive risks;
- asset/reference inconsistencies;
- export risks.

It did not intentionally perform broad visual or runtime testing.

---

> ✅ **QA & VALIDATION**

## 21. Targeted Validation Methodology

After the five findings were reported, a separate targeted pass revisited those specific areas.

The goal was:

```text
Confirm
Reject
Qualify
or
Defer
```

each finding without reopening the entire repository.

The targeted validation produced:

```text
Finding 1 → Confirmed
Finding 2 → Confirmed with qualification
Finding 3 → Valid but low practical impact
Finding 4 → Confirmed
Finding 5 → Valid but low practical impact
```

This targeted pass should not be described as a second full audit.

---

> ✅ **QA & VALIDATION**

## 22. Source Fix Validation vs Runtime Validation

A critical distinction must be preserved.

### Source validation

Confirms that the intended code change exists.

Examples:

- `aria-label` exists;
- topic options exist;
- modal focus logic exists;
- CTA points to `/portfolio/#portfolio`.

### Runtime validation

Would confirm that behavior works in a real browser/environment.

Examples:

- focus actually lands correctly;
- Tab is contained correctly;
- assistive technology announces labels as intended;
- selected topic appears correctly in the mail draft;
- navigation destination behaves correctly;
- PDF prints correctly.

A source fix may be:

```text
RESOLVED IN SOURCE
```

while some runtime scenarios still remain unverified.

---

> ✅ **QA & VALIDATION**

## 23. Historical Ayu Sales Intelligence Validation

A separate earlier visual/interaction pass for Ayu Sales Intelligence recorded:

- ten sections;
- seven dialogs;
- 31 workspace controls;
- ten navigation anchors;
- active-state checks;
- Escape/backdrop dialog behavior;
- content-preservation checks;
- 1280 × 665 page-fit checks.

Historical engineering checks recorded:

```text
npm.cmd run build → PASS
git diff --check → PASS
```

That historical build applied to the then-existing repository state and route count.

It predates later routing/header changes.

For detailed historical evidence, see:

[05-ayu-sales-intelligence-reference.md](05-ayu-sales-intelligence-reference.md)

---

> ✅ **QA & VALIDATION**

## 24. Historical Ayu DocConnect Validation

A separate targeted DocConnect correction pass recorded:

- ten-section readability checks;
- section fit;
- no unintended text clipping in the recorded viewport;
- technology-icon visibility;
- phone presentation;
- PM Scope readability;
- Product Metrics structure;
- build success;
- whitespace validation.

The important strict-fidelity result was:

```text
Product Metrics 100% pixel-perfect fidelity → FAIL
```

That FAIL remains valid historical evidence.

It must not be silently upgraded to PASS.

For details, see:

[04-ayu-docconnect-reference.md](04-ayu-docconnect-reference.md)

---

> ✅ **QA & VALIDATION**

## 25. Historical Telecom Validation

Historical Telecom checks recorded:

```text
HTTP 200
build/hash checks
approximately 1265 × 585.63px sections
approximately 79.36px header
1280 × 665 viewport
```

Those checks did not constitute:

- external reference-overlay validation;
- a complete clipping audit;
- native zoom certification;
- formal accessibility testing.

For details, see:

[06-telecom-cost-optimization-reference.md](06-telecom-cost-optimization-reference.md)

---

> ✅ **QA & VALIDATION**

## 26. Historical GitHub Pages Validation

The earlier root-hosting migration work recorded successful GitHub Pages deployment evidence for the then-current release.

Historical evidence included:

```text
Commit: 1269e9d
GitHub Actions run: 37994412272
Date: 10 October 2026
```

The historical deployment validated the repository state at that time.

It should not be interpreted as direct deployment verification of every later commit.

For migration/deployment history, see:

[09-github-pages-routing-migration.md](09-github-pages-routing-migration.md)

---

> ✅ **QA & VALIDATION**

## 27. Final Routing / Header Technical Validation

Later authorized routing/header work produced the current routing model:

```text
/           → Hero
/portfolio/ → Main Product Portfolio
/intro/     → Hero alias
```

and standardized key destinations including:

```text
Identity → /
Home → /
Back to Portfolio → /portfolio/
View Projects → /portfolio/#portfolio
```

The final source-validation pass associated with the current implementation state recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

This is later repository-level evidence.

It is distinct from the earlier statement that no build was run immediately as part of the narrow four-fix QA implementation step.

Both statements can therefore be true:

```text
No immediate build during narrow QA-fix step
```

and later:

```text
Final repository build after subsequent routing/header work → PASS
```

---

> ✅ **QA & VALIDATION**

## 28. Current Route Generation Evidence

The later final build generated ten routes corresponding to the current source architecture.

Current route set:

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

This confirms build-time route generation for the recorded final source state.

It does not by itself validate:

- live GitHub Pages deployment;
- browser rendering;
- every navigation click;
- every PDF page;
- every responsive breakpoint.

---

<div align="center">

![QA & VALIDATION](https://img.shields.io/badge/QA_&_VALIDATION-059669?style=flat-square)

</div>

# Current QA Status

---

> ✅ **QA & VALIDATION**

## 29. Current Finding Status

| Area | Current State |
|---|---|
| Integrated Channels modal focus/background source logic | Resolved in source |
| Connect accessible names | Resolved in source |
| Connect inquiry-topic options | Resolved in source |
| Telecom View Projects CTA | Resolved in source |
| JavaScript-disabled/failed navigation fallback | **Deferred / unresolved** |
| Sales Intelligence `/#connect` CTA | **Known unresolved source exception** |

---

> 📚 **REFERENCE DETAIL**

## 30. Original Severity vs Current Unresolved State

The original audit recorded:

```text
3 Medium
2 Low
```

That remains historically correct.

It should not be rewritten as:

```text
1 Medium unresolved
```

because severity counts describe the original audit.

For operational maintenance purposes, however, the remaining known unresolved items are:

```text
1 original deferred finding
1 later source exception
```

These are different categories.

---

> 📚 **REFERENCE DETAIL**

## 31. Runtime / Manual Verification Still Appropriate

Even with current source fixes and final build validation, the following would still require runtime/manual testing when relevant:

### Integrated Channels

- opener focus restoration;
- Tab / Shift+Tab containment;
- inert background behavior;
- Escape close;
- backdrop close;
- direct `#app/<id>` loading;
- return-hash behavior.

### Connect

- assistive-technology announcements;
- form field labels;
- selected topic;
- 500-character counter;
- mailto draft content;
- mail-client behavior.

### Navigation

- current route links;
- Header alignment;
- compact Menu;
- active states;
- breakpoint transitions;
- no-JavaScript fallback if it is ever implemented.

### Responsive Behavior

- desktop fit;
- tablet proportional fit;
- mobile native flow;
- connector relocation;
- dense-section clipping.

### PDF

- ten-section pagination;
- Intro four-page pagination;
- print header/action visibility;
- browser-specific output fidelity.

### Browser Zoom

Native browser zoom remains a separate validation category.

---

> ✅ **QA & VALIDATION**

## 32. Accessibility Status

Current source contains several accessibility improvements, including:

- explicit Connect accessible labels;
- skip links;
- active-page state;
- `aria-expanded`;
- `aria-controls`;
- modal labeling;
- focus restoration logic;
- background inert logic;
- native Sales Intelligence dialogs;
- authored image alternatives;
- decorative `aria-hidden` usage where applicable.

However:

```text
Accessibility source improvements
≠
formal accessibility certification
```

No claim is made that the repository has completed:

- WCAG certification;
- NVDA testing;
- JAWS testing;
- VoiceOver testing;
- TalkBack testing;
- full keyboard matrix testing.

---

> ✅ **QA & VALIDATION**

## 33. Responsive QA Status

Current responsive architecture is source-confirmed.

It includes:

```text
Desktop ≥ 1280px
Tablet 768–1279px
Mobile < 768px
```

with:

```text
tablet-desktop-fit.js
responsive-relationships.js
ResponsiveNavigation.astro
route-specific SCSS
shared SCSS
```

Current source review does not certify every viewport.

Important known risk:

```text
collapsed navigation requires JavaScript
```

Important maintenance risk:

```text
hidden overflow can conceal internal clipping
```

particularly in dense sections.

---

> ✅ **QA & VALIDATION**

## 34. PDF QA Status

Current source confirms:

### Intro Experience

Expected export:

```text
4 pages
```

Routes:

```text
/
/about/
/education/
/experience/
```

### Main Product Portfolio / Projects

Expected export:

```text
10 sections/pages
```

The export architecture is source-confirmed.

Actual browser print output was not newly certified during documentation synchronization.

---

> ✅ **QA & VALIDATION**

## 35. Visual Fidelity Status

Repository QA must distinguish:

```text
Functional correctness
Page fit
Reference fidelity
```

These are not interchangeable.

### DocConnect

Historical Product Metrics result:

```text
Strict pixel-perfect fidelity → FAIL
```

### Sales Intelligence

Historical visual comparison retained multiple:

```text
Photo / Illustration fidelity → FAIL
Icon / SVG fidelity → FAIL
Layout fidelity → FAIL
```

while text/content and page fit passed in that historical scope.

These historical FAIL results remain documented evidence.

They do not mean the routes are functionally broken.

They also must not be silently upgraded to PASS.

---

> ✅ **QA & VALIDATION**

## 36. Business-Metric Validation Boundary

Repository QA validates implementation/source behavior.

It does **not** independently audit professional/business claims such as:

- number of banks;
- adoption percentages;
- cost savings;
- pilot outcomes;
- doctors installed/logged in;
- MAU / WAU;
- CapEx / OpEx savings.

Those values are authored portfolio content.

The QA process only checks whether the source contains and presents them consistently within its intended implementation.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 37. External Service Boundary

The portfolio references technologies and platforms such as:

- APIs;
- banking systems;
- CKYC;
- CIBIL;
- NPCI;
- Google Analytics;
- Mixpanel;
- Power BI;
- Tableau;
- Google Business;
- WhatsApp;
- Maps/location;
- SQL;
- PostgreSQL.

Repository QA should not interpret those labels as proof that the static portfolio connects to those services.

The website primarily renders authored explanatory content.

---

> ✅ **QA & VALIDATION**

## 38. QA Maintenance Rules

When updating this report:

1. Do not change the original `3 Medium / 2 Low` count.
2. Do not add later observations to the original five-finding count.
3. Keep original severity separate from current status.
4. Mark a finding resolved only when the implementation source has actually changed.
5. Do not claim runtime verification from source inspection alone.
6. Preserve the deferred navigation fallback until explicitly fixed.
7. Keep the Sales `/#connect` issue classified as a later known source exception.
8. Preserve historical DocConnect fidelity FAIL.
9. Preserve historical Sales fidelity FAIL results.
10. Do not reinterpret build PASS as visual PASS.
11. Do not reinterpret page-fit PASS as pixel-fidelity PASS.
12. Do not reinterpret accessibility source fixes as formal accessibility certification.
13. Keep historical validation tied to its original source state/date.
14. Update current validation only when a new validation pass actually occurs.
15. Keep generated build/deployment evidence distinct from live-site validation.
16. Do not invent tests that were not performed.

---

> ✅ **QA & VALIDATION**

## 39. Evidence Hierarchy

When QA evidence conflicts or appears inconsistent, use this hierarchy:

```text
Current production source
        ↓
Current source-confirmed documentation
        ↓
Recorded final technical validation
        ↓
Historical route-specific validation
        ↓
Older migration / implementation evidence
```

For professional content claims:

```text
Approved authored content
```

remains the source of truth.

QA does not independently redefine those claims.

---

> ✅ **QA & VALIDATION**

## 40. Current QA Summary

Current overall repository QA state:

| Category | Current Status |
|---|---|
| Critical original findings | 0 |
| High original findings | 0 |
| Medium original findings | 3 |
| Low original findings | 2 |
| Original findings fixed in source | 4 |
| Original findings deferred | 1 |
| Later known unresolved source exceptions | 1 |
| Current final source build | PASS |
| Current final `git diff --check` | PASS |
| Final generated route count | 10 |
| Formal accessibility certification | Not performed |
| Native browser zoom certification | Not performed |
| Current full pixel-fidelity certification | Not performed |
| Current PDF output certification | Not performed |

---

> ✅ **QA & VALIDATION**

## 41. Current Validation Baseline

The current documentation baseline is associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Final technical validation associated with this source state recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

Current source confirms:

| Area | Status |
|---|---|
| Four approved QA fixes | Confirmed in source |
| Deferred JavaScript navigation fallback | Still unresolved |
| Sales Intelligence `/#connect` exception | Still unresolved |
| Current ten-route source architecture | Confirmed |
| Final build | PASS |
| Final whitespace/diff validation | PASS |
| Runtime browser regression of every fix | Not comprehensively performed |
| Formal accessibility certification | Not performed |
| Native zoom validation | Not performed |
| Current PDF fidelity validation | Not performed |
| Current full visual-reference validation | Not performed |

For project-specific implementation and historical evidence, see:

[03-integrated-channels-reference.md](03-integrated-channels-reference.md)

[04-ayu-docconnect-reference.md](04-ayu-docconnect-reference.md)

[05-ayu-sales-intelligence-reference.md](05-ayu-sales-intelligence-reference.md)

[06-telecom-cost-optimization-reference.md](06-telecom-cost-optimization-reference.md)

For repository-wide architecture and maintenance constraints, see:

[08-project-context.md](08-project-context.md)

For routing and GitHub Pages migration history, see:

[09-github-pages-routing-migration.md](09-github-pages-routing-migration.md)
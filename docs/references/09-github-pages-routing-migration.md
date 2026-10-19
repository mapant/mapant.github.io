# GitHub Pages Routing Migration

Complete technical history of repository root-hosting migration, Intro Experience introduction, final Hero/Main Product Portfolio route migration, GitHub Pages deployment architecture, navigation changes, export-route updates, historical deployment evidence, and current maintenance boundaries.

<div align="center">

### 🚀 GitHub Pages · Routing Migration

![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=for-the-badge)
![Routing Migration](https://img.shields.io/badge/Routing_Migration-0A66C2?style=for-the-badge)
![Root Hosting](https://img.shields.io/badge/Root_Hosting-2563EB?style=for-the-badge)
![10 Routes](https://img.shields.io/badge/10_Routes-7C3AED?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-059669?style=for-the-badge)
![PDF Routes](https://img.shields.io/badge/PDF_Routes-E76F51?style=for-the-badge)

</div>

> **Visual guide:** 🧭 Context · 🔗 Routing · 🏗️ Architecture · 🧩 Components · 📊 Metrics · 📱 Responsive · 📄 Export · ♿ Accessibility · ✅ Validation · 🛠️ Maintenance


---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 1. Purpose

This document records how the portfolio moved from a repository-subpath deployment to the GitHub Pages root domain and how the final website routing evolved afterward.

It covers two separate changes:

```text
Repository / Hosting Migration
        ↓
Content / Route Migration
```

These changes are related but should not be treated as the same operation.

### Repository / hosting migration

Moved the new portfolio from:

```text
https://mapant.github.io/manoj-product-portfolio/
```

to:

```text
https://mapant.github.io/
```

### Content / route migration

Changed the website experience from:

```text
/        → Main Product Portfolio
/intro/  → Hero
```

to:

```text
/           → Hero
/portfolio/ → Main Product Portfolio
/intro/     → Hero alias
```

Current source is authoritative for current routing.

Historical deployment evidence remains tied to the source state in which it was originally recorded.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 2. Current Source Baseline

Current documentation is aligned to the source state associated with:

```text
Branch: main
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Review date: 19 October 2026
```

Current repository origin:

```text
https://github.com/mapant/mapant.github.io.git
```

Current public site:

```text
https://mapant.github.io/
```

Local repository folder:

```text
C:\Users\Manoj Pant\GitHub\manoj-product-portfolio
```

The local folder name does not control the public GitHub Pages URL.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 3. Migration Timeline

The routing/hosting evolution can be summarized as:

```text
Stage 1
New portfolio repository deployed under repository subpath
https://mapant.github.io/manoj-product-portfolio/

        ↓

Stage 2
Repository migration to mapant/mapant.github.io
New portfolio deployed at root domain
https://mapant.github.io/

        ↓

Stage 3
Intro Experience introduced
/        → Main Product Portfolio
/intro/  → Hero
/about/
/education/
/experience/

        ↓

Stage 4
Final content-routing migration
/           → Hero
/portfolio/ → Main Product Portfolio
/intro/     → Hero alias

        ↓

Stage 5
Shared Header/navigation routes updated
Project links and PDF route behavior aligned
```

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# Repository / Root-Hosting Migration

---

> 🕘 **HISTORY & DEPLOYMENT**

## 4. Original Hosting State

Before the root-domain migration, the new portfolio repository was:

```text
mapant/manoj-product-portfolio
```

and its GitHub Pages deployment was served under:

```text
https://mapant.github.io/manoj-product-portfolio/
```

At the same time, an older repository already owned the root GitHub Pages repository name:

```text
mapant/mapant.github.io
```

and therefore controlled:

```text
https://mapant.github.io/
```

This created an important routing problem.

The new portfolio made extensive use of root-relative URLs such as:

```text
/profile/portrait.jpg
/projects/integrated-channels/
/projects/ayu-docconnect/
```

When the site itself was hosted below:

```text
/manoj-product-portfolio/
```

a root-relative URL could resolve against:

```text
https://mapant.github.io/
```

instead of the repository subpath.

Because the old repository occupied the root site, some root-relative navigation could lead to old or unrelated content.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 5. Root-Domain Migration Decision

The approved solution was to make the new portfolio repository the GitHub Pages user-site repository:

```text
mapant/mapant.github.io
```

This allowed the portfolio to operate naturally from:

```text
https://mapant.github.io/
```

without requiring a repository-name base path.

The old portfolio repository was retained as a backup rather than deleted.

---

> 📚 **REFERENCE DETAIL**

## 6. Repository Renames

The repository renames were completed manually through the GitHub user interface.

| Repository Before Migration | Repository After Migration | Purpose |
|---|---|---|
| `mapant/mapant.github.io` | `mapant/mapant.github.io-backup-2026-10-10` | Preserve the previous root portfolio and repository history |
| `mapant/manoj-product-portfolio` | `mapant/mapant.github.io` | Make the new portfolio the root GitHub Pages repository |

The assistant did **not** perform the GitHub UI renames.

The repository migration preserved the old repository rather than deleting it.

---

> 📚 **REFERENCE DETAIL**

## 7. Repository Identity Verification

Before pushing to the renamed repository, the renamed repositories were verified through GitHub's API.

Recorded repository IDs:

### New portfolio repository

```text
Repository ID: 1395181345
Current name:  mapant/mapant.github.io
```

### Previous portfolio repository

```text
Repository ID: 1376922594
Current name:  mapant/mapant.github.io-backup-2026-10-10
```

This verification established that:

```text
mapant/mapant.github.io
```

was the renamed **new portfolio repository**, not the old root portfolio.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 8. Backup Repository Boundary

The previous root portfolio was preserved as:

```text
mapant/mapant.github.io-backup-2026-10-10
```

No backup repository files were deleted as part of the migration.

The original migration task did **not** verify whether GitHub Pages was subsequently:

- disabled;
- unpublished;
- retained;

for the backup repository.

Do not claim that backup Pages was disabled unless separately verified.

---

> 📚 **REFERENCE DETAIL**

## 9. Local Repository Name

The local repository remained:

```text
C:\Users\Manoj Pant\GitHub\manoj-product-portfolio
```

even after the remote repository became:

```text
mapant/mapant.github.io
```

This is valid.

A local Git folder does not need to use the same directory name as the remote GitHub repository.

The important relationship is the configured Git remote:

```text
origin
→ https://github.com/mapant/mapant.github.io.git
```

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# GitHub Pages Configuration

---

> 📚 **REFERENCE DETAIL**

## 10. Astro Root-Site Configuration

Current Astro configuration uses:

```text
site: https://mapant.github.io
```

with:

```text
static output
MDX integration
directory-format build
```

There is no repository-subpath:

```text
base
```

configured.

This is appropriate for a root GitHub Pages user site.

---

> 📚 **REFERENCE DETAIL**

## 11. Why No Subpath `base` Is Required

For a project site such as:

```text
https://mapant.github.io/manoj-product-portfolio/
```

Astro would normally need to account for:

```text
/manoj-product-portfolio/
```

in routing/assets.

The current site instead publishes from the root domain:

```text
https://mapant.github.io/
```

Therefore the intended URL model is:

```text
/
├── about/
├── education/
├── experience/
├── portfolio/
├── profile/
├── intro/
└── projects/
```

Root-relative URLs now correctly resolve against the intended portfolio site.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 12. Active Deployment Workflow

Active workflow:

```text
.github/workflows/deploy.yml
```

The workflow runs on pushes to:

```text
main
```

Current deployment architecture:

```text
Push to main
        ↓
GitHub Actions
        ↓
Checkout repository
        ↓
Astro build
        ↓
Upload Pages artifact
        ↓
Deploy GitHub Pages
```

Recorded workflow technologies include:

```text
actions/checkout@v4
withastro/action@v2
actions/deploy-pages@v4
```

Node version:

```text
22.12.0
```

---

> 📚 **REFERENCE DETAIL**

## 13. Inactive Workflow Backup

The repository also contains:

```text
.github/workflows/build.yml.bak
```

Because the file ends in:

```text
.bak
```

it is not an active GitHub Actions workflow.

Do not treat it as a second deployment pipeline.

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# Historical Root Deployment

---

> 🕘 **HISTORY & DEPLOYMENT**

## 14. Root-Hosting Migration Commit

Historical root-hosting deployment evidence was recorded for:

```text
Commit:
1269e9ddf639fea2c5236af4fd7885d50b869f6b
```

Short form:

```text
1269e9d
```

Commit description:

```text
Deploy portfolio at root GitHub Pages URL
```

Recorded commit time:

```text
10 October 2026
03:05:52 IST
```

The commit changed:

```text
astro.config.mjs
```

to support root-domain deployment.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 15. Historical Push

The root-hosting migration push advanced:

```text
main
```

from:

```text
81855f5
```

to:

```text
1269e9d
```

on the renamed new portfolio repository:

```text
mapant/mapant.github.io
```

---

> 🕘 **HISTORY & DEPLOYMENT**

## 16. Historical GitHub Actions Deployment

Recorded GitHub Actions run:

```text
37994412272
```

Historical result:

```text
Conclusion: success
```

Associated commit:

```text
1269e9d
```

This established successful GitHub Pages deployment for that historical source state.

It does not independently establish the live deployment status of every later commit.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 17. Historical Five-Route Build

At the time of the original root-hosting deployment, the repository produced five static pages.

Recorded command:

```text
npm.cmd run build
```

Historical result:

```text
PASS
```

The five published pages were the then-root Main Product Portfolio plus the four project routes.

This occurred **before** the Intro Experience and final routing architecture expanded the site to the current ten routes.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 18. Historical Published Routes

The historical root-hosting deployment validated:

```text
/
```

which at that time was the Main Product Portfolio, plus:

```text
/projects/integrated-channels/
/projects/ayu-docconnect/
/projects/ayu-sales-intelligence/
/projects/telecom-cost-optimization/
```

The current meaning of `/` is different.

Today:

```text
/
```

renders Hero.

Therefore historical root-route test results must not be described as Hero-route test results.

---

> ✅ **QA & VALIDATION**

## 19. Historical HTTP Validation

Recorded historical results:

| Published Page | HTTP Result |
|---|---:|
| Then-root Main Product Portfolio | 200 |
| Integrated Channels | 200 |
| Ayu DocConnect | 200 |
| Ayu Sales Intelligence | 200 |
| Telecom Analytics & Cost Optimization | 200 |

These results belong to the 10 October 2026 root-hosting deployment state.

---

> ✅ **QA & VALIDATION**

## 20. Historical Asset / Link Validation

The root migration recorded:

```text
23 unique root references
```

in local output.

Result:

```text
No missing targets
No stale /manoj-product-portfolio/ prefixes
```

Published output validation checked:

```text
22 unique asset and link URLs
```

Historical result:

```text
All HTTP 200
```

This provided evidence that the root-relative URL migration worked for the then-existing site.

---

> ✅ **QA & VALIDATION**

## 21. Historical HTML Hash Validation

Historical live HTML was compared against local production output.

Recorded result:

```text
SHA-256 hashes matched
```

for all five then-published pages.

This established that the published HTML matched the local build at the time of the migration.

It does not establish hash equality for the current ten-route implementation.

---

> ✅ **QA & VALIDATION**

## 22. Historical Browser Validation

Historical browser checks used:

```text
1280 × 665
```

and recorded:

- no broken HTML images;
- no document-level horizontal overflow;
- no missing section anchor targets;

across the five then-published pages.

Native browser zoom was not tested.

Pixel-perfect visual fidelity was not certified.

---

> ✅ **QA & VALIDATION**

## 23. Historical Whitespace Validation

The migration work recorded:

```text
git diff --check → PASS
```

and staged-diff checks also passed for that migration.

This verifies diff/whitespace integrity for the historical change.

It does not establish visual correctness.

---

<div align="center">

![PRODUCT & EXPERIENCE CONTEXT](https://img.shields.io/badge/PRODUCT_&_EXPERIENCE_CONTEXT-0A66C2?style=flat-square)

</div>

# Intro Experience Introduction

---

> 🔗 **ROUTING & NAVIGATION**

## 24. Intermediate Routing State

After root hosting was established, the Intro Experience was added.

The intermediate routing model became:

```text
/            → Main Product Portfolio
/intro/      → Hero
/about/      → About Me
/education/  → Education
/experience/ → Work Experience
```

At this stage:

```text
/
```

still represented the Main Product Portfolio.

The Intro Experience existed alongside it.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 25. Intro Architecture Introduced

The Intro Experience added shared structures including:

```text
IntroShell.astro
IntroHeader.astro
HeroPage.astro
AboutPage.astro
EducationPage.astro
CareerTimeline.astro
intro-portfolio.scss
intro-portfolio.js
```

The experience was designed to provide professional context before the user entered the detailed Product Portfolio.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 26. Intermediate Experience Flow

The intended progression became:

```text
Hero
→ About
→ Education
→ Work Experience
→ Product Portfolio
```

However, during the intermediate state:

```text
Hero = /intro/
Product Portfolio = /
```

This created the basis for the later route migration.

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# Final Content Routing Migration

---

> 🔗 **ROUTING & NAVIGATION**

## 27. Final Routing Objective

The final migration changed the content hierarchy so that the professional introduction became the true website homepage.

Approved final mapping:

```text
/           → Hero
/portfolio/ → Main Product Portfolio
```

The previous Hero route:

```text
/intro/
```

was retained as an alias.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 28. Final Route Migration

The previous root Main Product Portfolio composition was moved to:

```text
src/pages/portfolio/index.astro
```

The root page:

```text
src/pages/index.astro
```

was changed to render:

```text
IntroShell
+
HeroPage
```

The resulting current architecture is:

```text
/           → Hero
/intro/     → Hero alias
/portfolio/ → Main Product Portfolio
```

---

> 🔗 **ROUTING & NAVIGATION**

## 29. Current Route Map

| # | Page | Route | Source |
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

---

> 🔗 **ROUTING & NAVIGATION**

## 30. Current Route Hierarchy

```text
/
├── intro/
├── about/
├── education/
├── experience/
├── portfolio/
└── projects/
    ├── integrated-channels/
    ├── ayu-docconnect/
    ├── ayu-sales-intelligence/
    └── telecom-cost-optimization/
```

The four detailed project slugs were preserved during the final root/content-route migration.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 31. Content Preservation During Migration

The final route migration was intended to move existing experiences rather than rewrite them.

The migration preserved:

- Hero content;
- Intro page content;
- Main Product Portfolio section order;
- Main Product Portfolio section IDs;
- project routes;
- project case-study content;
- Main Portfolio product data;
- approved QA fixes;
- responsive architecture;
- PDF/export architecture.

The change was primarily a route/navigation migration rather than a product-content rewrite.

---

> 🧭 **PRODUCT & EXPERIENCE CONTEXT**

## 32. Main Product Portfolio Move

Before the final migration:

```text
src/pages/index.astro
```

owned the Main Product Portfolio.

After migration:

```text
src/pages/portfolio/index.astro
```

owns that ten-section composition.

Relative imports were adjusted for the deeper directory path.

The section structure itself remained:

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

---

> 📚 **REFERENCE DETAIL**

## 33. Hero Move

Before the final migration:

```text
/intro/
```

was the primary Hero route.

After migration:

```text
/
```

became the primary Hero route.

The Hero is still available at:

```text
/intro/
```

for backward compatibility.

---

<div align="center">

![REFERENCE DETAIL](https://img.shields.io/badge/REFERENCE_DETAIL-6B7280?style=flat-square)

</div>

# `/intro/` Alias

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 34. Alias Implementation

Current source:

```text
src/pages/intro/index.astro
```

renders the same:

```text
IntroShell
+
HeroPage
```

composition as:

```text
src/pages/index.astro
```

Therefore:

```text
/intro/
```

is an authored Astro alias.

It is **not** implemented through an HTTP redirect.

---

> 🔗 **ROUTING & NAVIGATION**

## 35. Normal Navigation Uses Root

Although `/intro/` remains valid, normal Home and identity navigation uses:

```text
/
```

This prevents the website from treating `/intro/` as the canonical Home destination.

---

> 🔗 **ROUTING & NAVIGATION**

## 36. `/intro/` Route vs `/intro/` Asset Directory

An important distinction exists between:

```text
/intro/
```

as a route and:

```text
/intro/...
```

as production asset URLs.

Examples:

```text
/intro/hero/about-card-v1.png
/intro/about/banking-v1.png
/intro/education/education-hero-v1.png
```

These asset URLs remain valid.

Do not replace or remove them merely because the primary Hero route moved from:

```text
/intro/
```

to:

```text
/
```

Route migration and asset-directory naming are separate concerns.

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# Navigation Migration

---

> 🔗 **ROUTING & NAVIGATION**

## 37. Navigation Destinations Requiring Update

Moving the Main Product Portfolio from:

```text
/
```

to:

```text
/portfolio/
```

required navigation destinations to be reviewed across:

- Intro Header;
- Main Portfolio Header;
- project Headers;
- project final navigation;
- project CTAs;
- Main Portfolio project links;
- Contact links;
- PDF route behavior.

---

> 🔗 **ROUTING & NAVIGATION**

## 38. Current Global Navigation Intent

| Intent | Current Destination |
|---|---|
| Identity / Home | `/` |
| Product Portfolio | `/portfolio/` |
| Back to Portfolio | `/portfolio/` |
| View Projects | `/portfolio/#portfolio` |
| Main Contact section | `/portfolio/#connect` |
| Case-study previous / next | Existing `/projects/.../` routes |

This table represents the intended current route model.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 39. Intro Navigation After Migration

Current Intro destinations:

```text
Identity          → /
About Me          → /about/
Education         → /education/
Work Experience   → /experience/
Product Portfolio → /portfolio/
View Projects     → /portfolio/#portfolio
```

The Intro Header does not use a separate Home button.

Identity is the Home control.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 40. Main Product Portfolio Navigation After Migration

The Main Portfolio Header now uses:

```text
Identity → /
Home     → /
```

Its local section navigation remains relative to:

```text
/portfolio/
```

For example:

```text
#portfolio
```

resolves to:

```text
/portfolio/#portfolio
```

---

> 🕘 **HISTORY & DEPLOYMENT**

## 41. Project Header Navigation After Migration

Current project actions:

```text
Identity          → /
Home              → /
Back to Portfolio → /portfolio/
View Projects     → /portfolio/#portfolio
```

This shared model is supplied through:

```text
ProjectShell.astro
HeaderActions.astro
```

---

> 📚 **REFERENCE DETAIL**

## 42. Telecom CTA Correction

The Telecom case study previously inherited an outdated portfolio destination.

The final QA/fix work explicitly set:

```text
ctaText="View Projects"
ctaHref="/portfolio/#portfolio"
```

Current Telecom View Projects destination:

```text
/portfolio/#portfolio
```

This aligns the Telecom Header with the current route architecture.

---

> 📚 **REFERENCE DETAIL**

## 43. Known Sales Intelligence Contact Exception

A separately authored CTA remains in:

```text
src/components/SalesIntelligenceOutcomes.astro
```

Current source:

```text
Let’s Connect → /#connect
```

Current correct contact route:

```text
/portfolio/#connect
```

Status:

```text
KNOWN
UNRESOLVED
```

This source exception was documented but not changed during documentation synchronization.

It is also recorded in:

[05-ayu-sales-intelligence-reference.md](05-ayu-sales-intelligence-reference.md)

and:

[07-repository-qa-report.md](07-repository-qa-report.md)

---

> 🔗 **ROUTING & NAVIGATION**

## 44. Project Previous / Next Navigation

The final route migration preserved the project route slugs.

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

Because project slugs did not change, the primary migration work concerned Home/Portfolio destinations rather than project route renaming.

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# PDF / Export Migration

---

> 📄 **PDF & EXPORT**

## 45. Why PDF Routes Required Update

The PDF/export logic fetches rendered routes.

When:

```text
/
```

changed from Main Product Portfolio to Hero, the export logic could no longer assume that root meant the ten-section portfolio.

The PDF architecture therefore had to distinguish:

```text
Intro export
```

from:

```text
Main Portfolio / project export
```

---

> 🕘 **HISTORY & DEPLOYMENT**

## 46. Intro Export Route Migration

Current Intro export fetches exactly:

```text
/
/about/
/education/
/experience/
```

in that order.

Expected pages:

```text
4
```

The Hero alias:

```text
/intro/
```

is **not** an Intro export dependency.

This ensures the exported Intro PDF starts from the canonical root Hero.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 47. Main Product Portfolio Export Migration

Main Product Portfolio export now operates from:

```text
/portfolio/
```

The export logic uses:

```text
location.pathname + location.search
```

for normal portfolio/project exports.

Therefore, when invoked from:

```text
/portfolio/
```

it fetches the Main Product Portfolio rather than Hero.

---

> 📄 **PDF & EXPORT**

## 48. Project Export Behavior

The four detailed case-study routes continue to export their current route.

Examples:

```text
/projects/integrated-channels/
/projects/ayu-docconnect/
/projects/ayu-sales-intelligence/
/projects/telecom-cost-optimization/
```

Each normal project export expects:

```text
10
```

navigation-linked sections.

Project slugs did not require migration.

---

> 📄 **PDF & EXPORT**

## 49. Export Architecture Preserved

The route migration did not introduce:

- a redirect-based PDF system;
- a backend PDF API;
- a server-generated PDF;
- a stored downloadable PDF endpoint.

The existing browser-print architecture was preserved.

Typical flow:

```text
Fetch current authored route
        ↓
Prepare print HTML
        ↓
Freeze desktop presentation
        ↓
Create print sheets
        ↓
Open browser print dialog
```

---

<div align="center">

![ARCHITECTURE & IMPLEMENTATION](https://img.shields.io/badge/ARCHITECTURE_&_IMPLEMENTATION-0A66C2?style=flat-square)

</div>

# Current Build Architecture

---

> 🔗 **ROUTING & NAVIGATION**

## 50. Current Ten-Route Source Set

The current source architecture contains ten routes:

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

This route count differs from the historical five-page root-hosting deployment.

---

> ✅ **QA & VALIDATION**

## 51. Final Current Build Validation

Later final routing/header work associated with the current implementation state recorded:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

This is the current recorded source/build validation.

It is separate from the earlier five-route migration deployment evidence.

---

> ✅ **QA & VALIDATION**

## 52. Historical vs Current Validation

Two distinct validation states must remain separate.

### Historical root-hosting deployment

```text
Commit: 1269e9d
Date: 10 October 2026
Generated pages: 5
Live deployment verified: Yes
HTTP/browser/hash checks: Yes
```

### Current final routing/header source state

```text
Commit: 70d6aef34ea646fde80295feeebb76d6653b4884
Generated routes: 10
Build: PASS
git diff --check: PASS
Current live deployment re-verification in this documentation pass: Not performed
```

Do not combine these into one test event.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 53. Current Live-Deployment Verification Boundary

The recorded final source build confirms:

- Astro compilation;
- route generation;
- import resolution.

It does **not** independently confirm that the live GitHub Pages deployment currently serves every route exactly as the local build.

A fresh deployment/HTTP/browser validation would be required to make that claim.

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# GitHub Pages Deployment Architecture

---

> 🕘 **HISTORY & DEPLOYMENT**

## 54. Deployment Flow

Current expected production flow:

```text
Local source
        ↓
Git commit
        ↓
Push to main
        ↓
GitHub Actions deploy workflow
        ↓
Astro static build
        ↓
GitHub Pages artifact
        ↓
https://mapant.github.io/
```

No manual upload of:

```text
dist/
```

is required by the normal workflow.

---

> 🏗️ **ARCHITECTURE & IMPLEMENTATION**

## 55. Source vs Generated Output

Authoritative source includes:

```text
src/
public/
astro.config.mjs
package.json
package-lock.json
.github/
```

Generated output includes:

```text
dist/
.astro/
```

Generated output should not be edited as the source of routing changes.

---

> 🖼️ **ASSETS & VISUALS**

## 56. Root-Relative Asset Model

Because the site is now a GitHub Pages user site at:

```text
https://mapant.github.io/
```

root-relative resources such as:

```text
/profile/portrait.jpg
/ics/ics-challenge-bank.png
/ayu-docconnect/doctor-portrait.png
/projects/integrated-channels/
/portfolio/
```

resolve within the intended current portfolio.

This was one of the principal reasons for moving the repository to the root GitHub Pages repository name.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 57. Repository Rename vs Route Migration

These two changes must not be conflated.

### Repository rename

Changed:

```text
where GitHub publishes the site
```

from repository-subpath hosting to root hosting.

### Route migration

Changed:

```text
which content is rendered at /
```

from Main Product Portfolio to Hero.

A future hosting change does not necessarily require a content-route change, and vice versa.

---

<div align="center">

![HISTORY & DEPLOYMENT](https://img.shields.io/badge/HISTORY_&_DEPLOYMENT-7C3AED?style=flat-square)

</div>

# Migration Preservation Rules

---

> 🔗 **ROUTING & NAVIGATION**

## 58. Route Preservation

Current canonical route model:

```text
/           Hero
/portfolio/ Main Product Portfolio
```

Do not move Main Product Portfolio back to `/` without an explicit routing decision.

Do not remove `/intro/` unless backward-compatibility removal is intentional.

---

> 📚 **REFERENCE DETAIL**

## 59. Identity / Home Preservation

All normal Home/identity navigation should continue to use:

```text
/
```

Do not use:

```text
/intro/
```

as the normal Home destination while the root Hero remains canonical.

---

> 🔗 **ROUTING & NAVIGATION**

## 60. Portfolio Navigation Preservation

Main Portfolio destinations should use:

```text
/portfolio/
```

Project-card navigation should use:

```text
/portfolio/#portfolio
```

where the intent is specifically to show the project-card section.

---

> 🔗 **ROUTING & NAVIGATION**

## 61. Contact Route Preservation

The Main Portfolio Contact section lives at:

```text
/portfolio/#connect
```

Do not introduce new:

```text
/#connect
```

links while Hero remains at `/`.

The existing Sales Intelligence exception is historical/current source debt, not a pattern to follow.

---

> 📚 **REFERENCE DETAIL**

## 62. Project Slug Preservation

Current project slugs:

```text
/projects/integrated-channels/
/projects/ayu-docconnect/
/projects/ayu-sales-intelligence/
/projects/telecom-cost-optimization/
```

These routes were intentionally preserved during the root/content migration.

Changing a project slug requires coordinated updates to:

- Main Portfolio cards;
- previous/next links;
- project navigation;
- documentation;
- any external links;
- PDF/runtime testing.

---

> 🖼️ **ASSETS & VISUALS**

## 63. `/intro/` Asset Preservation

Do not confuse the route alias with asset directories.

Production assets under:

```text
public/intro/
```

continue to use runtime URLs such as:

```text
/intro/hero/...
/intro/about/...
/intro/education/...
/intro/logos/...
```

These URLs should not be rewritten solely because the Hero moved to `/`.

---

> 📄 **PDF & EXPORT**

## 64. PDF Route Preservation

Current export contracts:

### Intro

```text
/
/about/
/education/
/experience/
```

### Main Portfolio

```text
/portfolio/
```

### Projects

```text
current project route
```

Changing page routes requires checking export behavior.

---

> 📚 **REFERENCE DETAIL**

## 65. Astro `site` Preservation

Current production configuration:

```text
site: https://mapant.github.io
```

Do not add:

```text
base: /manoj-product-portfolio/
```

while the site remains deployed from:

```text
mapant/mapant.github.io
```

Doing so would reintroduce a project-site URL model that no longer matches the current hosting architecture.

---

> 📚 **REFERENCE DETAIL**

## 66. Remote Preservation

Current intended origin:

```text
https://github.com/mapant/mapant.github.io.git
```

Before a sensitive push after remote/repository changes, verify:

```text
git remote -v
```

rather than assuming the local folder name represents the remote repository.

---

> 📚 **REFERENCE DETAIL**

## 67. Backup Repository Preservation

The historical repository:

```text
mapant/mapant.github.io-backup-2026-10-10
```

is a backup of the former root portfolio.

Do not:

- delete it;
- overwrite it;
- push current portfolio changes into it;

unless an explicit backup-management action is requested.

---

<div align="center">

![QA & VALIDATION](https://img.shields.io/badge/QA_&_VALIDATION-059669?style=flat-square)

</div>

# Validation and Maintenance

---

> ✅ **QA & VALIDATION**

## 68. Validation Categories

Routing changes can require different types of validation.

### Source validation

Checks:

- route source exists;
- imports resolve;
- links contain intended paths;
- configuration is correct.

### Build validation

Checks:

```text
npm.cmd run build
```

and generated route count.

### Git diff validation

Checks:

```text
git diff --check
```

### HTTP validation

Checks that published URLs return expected responses.

### Browser validation

Checks:

- rendered navigation;
- images;
- anchors;
- layout;
- overflow.

### Deployment validation

Checks the GitHub Actions run and current live site.

These categories should not be treated as interchangeable.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 69. Build PASS Boundary

A successful:

```text
npm.cmd run build
```

confirms:

- source compilation;
- import resolution;
- static route generation.

It does not confirm:

- live deployment;
- correct browser rendering;
- external links;
- page fit;
- accessibility;
- PDF output.

---

> ✅ **QA & VALIDATION**

## 70. Historical Live Evidence Boundary

The historical migration's HTTP/hash/browser results establish that:

```text
1269e9d
```

was successfully deployed and matched the local five-page production output.

They do not automatically validate:

```text
70d6aef...
```

or any later uncommitted documentation state.

---

> 📱 **RESPONSIVE EXPERIENCE**

## 71. Browser Zoom Boundary

Native Chrome zoom was not verified during the original root-hosting migration.

Do not infer browser-zoom compatibility from:

- 1280 × 665 checks;
- build success;
- HTTP 200;
- route availability.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 72. Pixel-Fidelity Boundary

The GitHub Pages migration was a hosting/routing task.

It did not establish pixel-perfect visual fidelity.

Visual-reference fidelity is documented separately in project references where relevant.

---

> ♿ **ACCESSIBILITY & INTERACTION**

## 73. Accessibility Boundary

The hosting/routing migration did not constitute an accessibility audit.

Later source-level accessibility fixes are documented in:

[07-repository-qa-report.md](07-repository-qa-report.md)

Do not treat routing/deployment success as accessibility certification.

---

> 🛠️ **MAINTENANCE & GUARDRAILS**

## 74. Backup Pages Boundary

The original migration did not verify whether Pages for:

```text
mapant/mapant.github.io-backup-2026-10-10
```

was disabled after the rename.

This remains outside the recorded migration validation.

Do not state otherwise without a new check.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 75. Migration Maintenance Rules

When changing routing or hosting:

1. Confirm the intended canonical root experience.
2. Check `astro.config.mjs`.
3. Check whether the site is a root user site or repository project site.
4. Verify the Git remote before pushing.
5. Preserve `/intro/` unless alias removal is explicitly requested.
6. Preserve root-relative production asset paths where appropriate.
7. Update Main Portfolio links if `/portfolio/` changes.
8. Update Contact links if `#connect` moves.
9. Update project Back to Portfolio actions.
10. Update View Projects actions.
11. Review all previous/next project links if project routes change.
12. Review Intro PDF route list.
13. Review Main Portfolio/project PDF behavior.
14. Run a focused build when authorized.
15. Use `git diff --check` when authorized.
16. Distinguish local build validation from live deployment validation.
17. Do not overwrite the backup repository.
18. Do not infer live deployment solely from source state.
19. Update this migration document only when route/hosting/deployment history materially changes.
20. Keep historical validation tied to the commit at which it was performed.

---

> 🔗 **ROUTING & NAVIGATION**

## 76. Current Known Routing Exception

Current intended navigation model is internally consistent except for the separately authored Sales Intelligence CTA:

```text
Current source:
Let’s Connect → /#connect

Current intended destination:
/portfolio/#connect
```

This remains unresolved.

It should not be silently omitted from routing documentation.

---

> 📚 **REFERENCE DETAIL**

## 77. Current Technical State

Current source baseline:

```text
Branch:
main

Commit:
70d6aef34ea646fde80295feeebb76d6653b4884
```

Current source route model:

```text
/           → Hero
/intro/     → Hero alias
/about/     → About Me
/education/ → Education
/experience/→ Work Experience
/portfolio/ → Main Product Portfolio
/projects/* → Four project case studies
```

Recorded final source validation:

```text
npm.cmd run build → PASS
10 generated routes
git diff --check → PASS
```

Current live-site HTTP/browser revalidation for all ten routes was **not** performed during the documentation synchronization.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 78. Historical Deployment State

Historical root-hosting evidence:

```text
Commit:
1269e9ddf639fea2c5236af4fd7885d50b869f6b

Date:
10 October 2026

GitHub Actions Run:
37994412272

Deployment:
SUCCESS
```

Historical validation included:

```text
5 generated pages
HTTP 200 checks
asset/link checks
HTML hash comparison
1280 × 665 browser checks
```

These checks belong to that historical five-route state.

---

> 🕘 **HISTORY & DEPLOYMENT**

## 79. Migration State Summary

The complete migration can be summarized as:

```text
OLD HOSTING
mapant/manoj-product-portfolio
https://mapant.github.io/manoj-product-portfolio/

        ↓

REPOSITORY MIGRATION
Old root repo → mapant.github.io-backup-2026-10-10
New portfolio → mapant.github.io

        ↓

ROOT HOSTING
https://mapant.github.io/

        ↓

INTERMEDIATE CONTENT ROUTING
/       → Main Product Portfolio
/intro/ → Hero

        ↓

FINAL CONTENT ROUTING
/           → Hero
/portfolio/ → Main Product Portfolio
/intro/     → Hero alias
```

---

> 🔗 **ROUTING & NAVIGATION**

## 80. Current Routing Contract

The current routing contract is:

```text
HOME
/

INTRO EXPERIENCE
/
/intro/
/about/
/education/
/experience/

MAIN PRODUCT PORTFOLIO
/portfolio/

PROJECTS
/projects/integrated-channels/
/projects/ayu-docconnect/
/projects/ayu-sales-intelligence/
/projects/telecom-cost-optimization/
```

Current intended shared navigation contract:

```text
Identity / Home       → /
Product Portfolio     → /portfolio/
Back to Portfolio     → /portfolio/
View Projects         → /portfolio/#portfolio
Contact               → /portfolio/#connect
```

---

> 📚 **REFERENCE DETAIL**

## 81. Related Documentation

Reference index:

[00-reference-index.md](00-reference-index.md)

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

Repository-wide implementation context:

[08-project-context.md](08-project-context.md)
# Trunk & Tandoor — Current Implementation Audit

## Phase Status

Phase 2 — Production Translation

Experience Definition:

Complete

KHDS Mapping:

Complete

Guest Journey:

Complete

Proof Plan:

Complete

Participation Plan:

Complete

Information Architecture:

Complete

Production Validation Framework:

Initialized

Current Implementation Audit:

Complete at Documented Architecture Level

Source-Level Verification:

Required

Production Rebuild:

Pending

---

# Purpose

This document audits:

the existing Trunk & Tandoor implementation

against:

the approved Phase 2 production architecture.

The objective is to determine:

- what already works
- what should remain
- what KHDS already supports
- what belongs to Trunk & Tandoor specifically
- what should be removed
- what should be restructured
- what requires source-level verification
- what genuinely needs new implementation capability

The purpose is not:

to redesign:

Trunk & Tandoor

from zero.

The purpose is:

to identify the smallest responsible path

from:

the existing concept

to:

the first full KHDS production experience.

---

# Audit Evidence Boundary

This audit uses:

documented implementation history

and:

the completed Phase 2 architecture.

The current repository source files:

- `index.html`
- restaurant-specific CSS
- current JavaScript
- current asset inventory
- current deployed DOM
- current reservation integration

have not been provided as source files for this audit.

Therefore:

this document distinguishes:

## Confirmed

Established by existing KHDS project documentation.

## Architectural Decision

Established by Phase 2 production work.

## Verify in Source

Requires inspection of:

the current implementation.

No code-level condition should be:

invented.

---

# Current Documented Implementation State

The existing project has already completed:

## KHDS Foundation

Confirmed.

Shared KHDS infrastructure exists for:

- design tokens
- layout
- typography
- buttons
- motion
- reusable components
- utilities
- central KHDS stylesheet

---

## KHDS Entry Point

Confirmed.

The intended architecture is:

```text
Restaurant
    ↓
khds/khds.css
    ↓
KHDS Tokens
+
KHDS Components
+
KHDS Utilities

## Source Finding — Local KHDS Token Duplication

### File

`previews/ke-trunk-tandoor-elevated/styles/tokens.css`

### Classification

Reusable KHDS Structure

### Finding

The Trunk & Tandoor preview contains a local copy of shared KHDS tokens covering:

- spacing
- radii
- motion duration
- easing
- container width
- gutters
- z-index

These values are framework concerns rather than restaurant identity.

### Direction

Compare against the canonical KHDS token layer.

If equivalent canonical tokens already exist:

remove the local token file

and consume them through:

`khds/khds.css`.

Do not migrate restaurant identity values into this file.

### Status

Migration Candidate — Verify Against Canonical KHDS Tokens

## Source Finding — Typography Layer Mixes System and Identity

### File

`previews/ke-trunk-tandoor-elevated/styles/typography.css`

### Classification

Mixed Responsibility

### Finding

The local typography file combines:

- shared KHDS typography behaviour
- reusable KHDS typography utilities
- Trunk & Tandoor-specific font-family choices
- one remaining hard-coded text colour

The font choices:

- Instrument Serif
- Manrope

belong to the restaurant theme.

The typography utilities and base rendering behaviour belong to KHDS.

The `.khds-body` class also contains a hard-coded:

`rgba(245, 242, 236, .74)`

which bypasses the semantic theme layer.

### Direction

Compare reusable rules against the canonical KHDS typography layer.

Move restaurant font values into:

`theme/theme.css`

Replace remaining hard-coded text colour with the appropriate semantic token.

Remove the local typography file once all consumers are safely covered by:

`khds/khds.css`

plus:

the Trunk & Tandoor theme.

### Status

Migration Candidate — Mixed System / Identity

## Source Finding — Base Layer Duplicates KHDS Structure

### File

`previews/ke-trunk-tandoor-elevated/styles/base.css`

### Classification

Reusable KHDS Structure With Local Visual Residue

### Finding

The file contains reusable system responsibilities including:

- box-sizing reset
- baseline element behaviour
- focus treatment
- shared shell layout
- scene layout
- scene media behaviour
- scene content positioning
- pause layout

These responsibilities belong to KHDS rather than Trunk & Tandoor.

The file also contains hard-coded dark visual values inside shared `.khds-*` classes, including:

- scene veil gradients
- secondary pause text colour

These values reduce theme portability.

There may also be duplicate scene architecture between:

`.khds-scene`

and:

the restaurant-local `.scene` classes used by the current HTML.

### Direction

Compare these rules against:

- canonical KHDS layout utilities
- canonical KHDS scene / experience primitives
- current Trunk & Tandoor `.scene` implementation

Move reusable structure into:

KHDS

and replace hard-coded visual values with:

semantic theme contracts.

Retain restaurant-specific scene expression locally only where it cannot be represented through shared KHDS structure.

### Status

Migration Candidate — High Priority



## Source Finding — Local Component Library Duplicates KHDS

### File

`previews/ke-trunk-tandoor-elevated/styles/components.css`

### Classification

Reusable KHDS Structure

### Finding

The file defines reusable component behaviour for:

- buttons
- primary actions
- quiet actions
- fixed header
- brand treatment
- floating actions
- modal / sheet presentation

These responsibilities belong to:

the shared KHDS component layer.

The file also contains several hard-coded visual values inside reusable `.khds-*` classes, including:

- primary-button foreground
- quiet-button background
- modal backdrop
- sheet-handle colour

These should eventually be expressed through semantic theme contracts.

A second potential duplication is visible between:

the `.khds-*` components defined here

and:

the restaurant-specific classes currently used by `index.html`, including:

- `.site-header`
- `.primary-action`
- `.floating-reserve`
- `.booking-sheet`

### Direction

Compare this file against:

the canonical KHDS component library

and:

the restaurant-local implementation in `trunk-tandoor.css`.

Where equivalent shared KHDS components already exist:

remove local duplication.

Where Trunk & Tandoor requires visual identity:

express it through:

theme values

or:

minimal local composition.

Do not preserve two parallel component systems.

### Status

Migration Candidate — High Priority

## Source Finding — Motion Layer Is Reusable KHDS Behaviour



### File

`previews/ke-trunk-tandoor-elevated/styles/motion.css`

### Classification

Reusable KHDS Structure

### Finding

The file defines reusable motion behaviour for:

- reveal transitions
- ambient image movement
- sheet entry
- reduced-motion accessibility

These are framework-level behaviours rather than restaurant identity.

The reduced-motion rule also correctly disables smooth scrolling and effectively removes animation for guests who request reduced motion.

### Direction

Compare this file against the canonical KHDS motion layer.

If equivalent behaviour already exists:

remove the local copy

and consume motion through:

`khds/khds.css`.

Trunk & Tandoor should decide:

where motion is used

rather than:

owning the reusable motion engine.

### Production Rule

Motion remains optional.

Each use must answer:

> **What does this motion communicate?**

If the answer is only:

decoration

remove it.

### Status

Migration Candidate — Strong


## Source Finding — Principles Panel Is Internal Tooling

### File

`previews/ke-trunk-tandoor-elevated/styles/principles.css`

### Classification

Internal KHDS Review Tool

### Finding

The file styles the KHDS principles monitor rather than the restaurant guest experience.

It includes:

- fixed review panel
- collapse state
- rule status
- watch state
- risk state
- mobile behaviour

The panel appears to work together with:

`khds-principles.js`

This is internal review infrastructure, not hospitality production UI.

The file also depends on restaurant theme values such as:

- `--text-secondary`
- `--accent-primary`
- `--border-color`

which means the internal tool inherits restaurant identity.

### Direction

Keep the tooling logically separate from:

Trunk & Tandoor production styling.

Before production release:

either:

- exclude the principles monitor entirely

or:

- enable it only in an explicit internal / development mode.

Long term, consider giving KHDS internal tooling:

its own semantic tokens

rather than inheriting restaurant theme values.

### Status

Internal Tooling — Production Exclusion Review Required


## Source Finding — Restaurant Stylesheet Is a Legacy Composite Layer

### File

`previews/ke-trunk-tandoor-elevated/styles/trunk-tandoor.css`

### Classification

Mixed Responsibility

### Finding

The stylesheet combines:

- restaurant identity
- restaurant composition
- legacy colour tokens
- legacy typography tokens
- spacing tokens
- motion tokens
- reset behaviour
- header structure
- button structure
- modal structure
- reservation styling
- responsive behaviour
- reduced-motion handling

This confirms that the existing Trunk & Tandoor preview still contains a substantial pre-KHDS implementation layer.

At the same time, the file contains valuable restaurant-specific expression that should be preserved, including:

- image crop decisions
- hero composition
- scene sequencing
- light/dark experience contrast
- brand-specific typography scale
- restaurant-specific pacing
- image-specific positioning
- Trunk & Tandoor visual identity

### Major Duplication

The stylesheet overlaps with:

- `styles/tokens.css`
- `styles/typography.css`
- `styles/base.css`
- `styles/components.css`
- `styles/motion.css`

and with canonical KHDS responsibilities.

### Direction

Do not replace the restaurant design.

Decompose the stylesheet.

Move reusable structure and behaviour into:

KHDS

or consume equivalent existing KHDS capability.

Move identity values into:

`theme/theme.css`.

Retain only restaurant-specific composition and expression locally.

### Target

Current:

`Restaurant = System + Theme + Composition`

Target:

`Restaurant = Theme + Composition`

with:

`System = KHDS`

### Additional Finding

The current floating Reserve action is mobile-only.

Its necessity should be evaluated against the fixed mobile header before removal.

### Status

Primary Migration Target — Preserve Expression, Remove System Duplication

## Source Finding — Theme Layer Is Stale Relative to Live Identity

### File

`previews/ke-trunk-tandoor-elevated/theme/theme.css`

### Classification

Restaurant Identity Layer

### Finding

The semantic theme layer exists, but its values do not currently match the identity used by the live Trunk & Tandoor implementation.

Major mismatches include:

Typography:

Theme:
- Cormorant Garamond
- Inter

Live implementation:
- Instrument Serif
- Manrope

Primary accent:

Theme:
- `#d4af37`

Live implementation:
- `#bd9a58`

Surface and text values also differ.

The current restaurant stylesheet therefore bypasses the semantic theme through legacy variables including:

- `--ink`
- `--paper`
- `--stone`
- `--gold`
- `--copper`
- `--serif`
- `--sans`

### Direction

Update the restaurant theme to reflect the approved current Trunk & Tandoor identity.

Then progressively replace legacy restaurant tokens with semantic theme values.

Do not change the visual identity merely to match stale theme values.

### Additional Requirement

The semantic theme should support both:

- dark hospitality surfaces
- light editorial surfaces

because the current experience intentionally moves between both.

### Status

Theme Contract Requires Reconciliation Before Style Migration


## Source Finding — Reservation Is a Prototype Request Flow

### File

`previews/ke-trunk-tandoor-elevated/script.js`

### Classification

Mixed Reusable Behaviour + Prototype Participation Logic

### Finding

The current reservation experience does not connect to:

- real availability
- a booking API
- a reservation platform
- a confirmation service

Instead, the interface collects:

- party choice
- preferred date
- preferred time
- name
- phone

then prepares:

a `mailto:` reservation request.

The website therefore cannot know whether a reservation is:

- submitted
- received
- available
- pending
- confirmed

### State-Clarity Risk

The interface currently lets the guest select hard-coded time slots before ultimately preparing an email request.

This may imply more availability certainty than the system actually provides.

The final success-style presentation also occurs before the email has actually been sent.

### Operational Assumptions Requiring Verification

- party sizes 2 / 4 / 6
- private-event route
- service times
- reservation email
- reservation-request workflow
- confirmation process

### Direction

Until production operations are verified:

frame date and time as:

preferred date

and:

preferred time.

Do not present:

hard-coded choices

as:

real availability.

Keep:

Prepared

Submitted

Pending

Confirmed

as:

distinct participation states.

Remove or hold:

Private Event

until verified.

### Additional Finding

The page loader intentionally waits approximately:

1050ms

after load before disappearing.

This should be tested against:

Pacing as Atmospheric Structure

and:

unnecessary delay.

### Status

Prototype Behaviour — Operational Verification Required
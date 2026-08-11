# KHDS Research

## Purpose

The KHDS research system exists to build hospitality knowledge from evidence rather than intuition alone.

Its role is to study real restaurant experiences, identify recurring behaviours, preserve contradictions, test abstractions, and determine which ideas are strong enough to become part of the Kodawa Hospitality Design System.

KHDS research is not intended to prove that one design style is correct.

It exists to answer:

- What repeatedly works across different hospitality models?
- Which patterns are context-specific?
- Which ideas survive contradiction?
- Which assumptions fail when the restaurant model changes?
- Which behaviours are visible from public digital evidence?
- Which claims require operational or guest evidence?
- Which commercial opportunities emerge from the research?

The research process must remain stricter than the implementation process.

Evidence wins.

---

# Research Tracks

KHDS currently uses two separate research tracks.

---

## Track A — Independent Hospitality Research

Track A studies restaurants not designed by Kodawa Labs.

These cases provide independent evidence.

Current completed independent research set:

1. Ankole
2. Cultiva
3. Talisman
4. Mawimbi
5. Bistro Lolo
6. FYN

These restaurants form the current evidence base for research-derived pattern maturity.

---

## Track B — Kodawa Labs Validation

Track B studies Kodawa Labs concepts and implementations.

Current validation concept:

1. Trunk & Tandoor Concept

Track B may help test:

- implementation
- design translation
- production viability
- pattern application
- interaction decisions

Track B must not count as independent research evidence.

Kodawa Labs should never validate its own research merely by implementing its own ideas.

---

# Pattern Lifecycle

Research-derived patterns move through:

Observed

↓

Candidate

↓

Emerging

↓

Validated

↓

KHDS Principle

The status reflects evidence maturity.

It does not reflect how attractive or commercially useful an idea sounds.

---

# Current Research State

## Independent Restaurants Studied

6

## Kodawa Labs Validation Concepts

1

## Emerging Patterns

17

## Candidate Patterns

9

## Partially Supported Findings

1

## Validated Research-Derived Patterns

0

## KHDS Principles Promoted From Research

0

## Existing KHDS Implementation Patterns Pending Validation

1

---

# Highest Current Research-Derived Status

Emerging

No research-derived pattern has reached Validated status.

---

# Current Emerging Pattern Set

1. Emotion Before Interface
2. Story Before Features
3. Photography Before Decoration
4. Reservation Throughout the Journey
5. Atmosphere Through Consistency
6. Dual-Path Hospitality
7. Commitment Without Pressure
8. Photography as Proof
9. Story Through Place
10. Promise Before Proof
11. Layered Arrival
12. Narrative Coherence Through Organising Logic
13. The Guest as Participant
14. Photography Through Layers of Experience
15. Human Confirmation as Hospitality
16. Atmosphere as Product
17. Escalating Reservation Complexity

Canonical definitions live in:

`../patterns/registry.md`

---

# Current Candidate Pattern Set

1. Atmosphere Through Worldview
2. Show the System Behind the Plate
3. Heritage Builds Confidence
4. Growth as Narrative
5. Atmosphere Through Continuity
6. Designed Escape
7. World Before Biography
8. Narrative Language as Interface
9. Photography Should Demonstrate Difference

Candidate governance lives in:

`validation/candidate-patterns.md`

---

# Partially Supported Finding

## Own the Guest Relationship

### Status

Partially Supported

### Confidence

Medium

### Visible Evidence

Across the independent research set, restaurants visibly use combinations of:

- direct websites
- direct email
- phone
- WhatsApp
- branded reservation entrypoints
- third-party booking tools

### Current Limitation

Public website observation cannot establish:

- CRM ownership
- guest-data ownership
- reservation-data ownership
- payment-data ownership
- remarketing rights
- guest-history control
- booking-platform contract terms
- backend integrations

### Governance Rule

Do not promote this finding from website research alone.

Operational evidence is required.

---

# Existing KHDS Implementation Pattern

## Invitation

### Classification

Existing KHDS Implementation Pattern

### Research Status

Pending Formal Validation

### Kodawa Labs Validation

Trunk & Tandoor Concept

### Important Rule

Invitation is not currently:

- Candidate
- Emerging
- Validated
- Research-Derived KHDS Principle

until independent research formally supports it.

---

# Research Architecture

```text
khds/
├── components/
├── docs/
├── experiences/
├── patterns/
│   ├── invitation.md
│   └── registry.md
├── principles/
├── research/
│   ├── comparison/
│   │   ├── arrival.md
│   │   ├── atmosphere.md
│   │   ├── photography.md
│   │   ├── reservation.md
│   │   └── story.md
│   ├── methodology/
│   ├── observations/
│   ├── restaurants/
│   │   ├── ankole/
│   │   ├── cultiva/
│   │   ├── talisman/
│   │   ├── mawimbi/
│   │   ├── bistro-lolo/
│   │   └── fyn/
│   ├── validation/
│   │   ├── trunk-tandoor/
│   │   │   └── arrival-pattern-study.md
│   │   ├── candidate-patterns.md
│   │   ├── dashboard.md
│   │   ├── promotion-process.md
│   │   └── README.md
│   └── README.md
├── tokens/
├── utilities/
└── khds.css
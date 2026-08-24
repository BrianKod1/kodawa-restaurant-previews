# KHDS Research Validation

## Status

Post–Din Tai Fung Validation Overview Reconciliation

Canonical Governance:

Complete

Pattern Registry:

Complete

Validation Dashboard:

Complete

Research Overview:

Complete

Validation Overview:

Complete

Independent Restaurant Research:

13 Complete

Kodawa Labs Validation Cases:

1

Emerging Patterns:

23

Candidate Patterns:

6

Partially Supported Findings:

1

Validated Patterns:

0

Research-Derived KHDS Principles:

0

Existing Implementation Patterns Pending Formal Validation:

1

Opportunity Themes:

36

Track B Implementation Learnings:

17

Highest Research-Derived Maturity:

Emerging

---

# Purpose

The KHDS validation layer exists to determine:

what:

the research evidence

actually justifies.

Its role is not:

to reward:

interesting ideas

useful implementations

beautiful interfaces

or:

successful production outcomes.

Its role is to govern:

research maturity.

The validation layer answers:

> **What does the current independent evidence support, how strongly does it support it, and where are the boundaries?**

It also protects KHDS from:

- pattern inflation
- premature certainty
- production bias
- evidence leakage
- unfalsifiable abstractions
- name duplication
- research / implementation conflation
- public-site overclaiming

---

# Core Validation Principle

> **Research narrows the decision space. It does not make the decision for us.**

And:

> **Production success does not increase research maturity.**

---

# Validation Folder

```text
khds/research/validation/
├── README.md
├── candidate-patterns.md
├── dashboard.md
└── promotion-process.md
```

---

# File Responsibilities

---

# `candidate-patterns.md`

Canonical research governance.

Controls:

- official pattern names
- maturity
- confidence
- promotions
- demotions
- renames
- merges
- deduplication
- definitions
- boundaries
- partially supported findings
- official counts

If:

another governance file

conflicts with:

`candidate-patterns.md`

the canonical file wins.

---

# `dashboard.md`

Operational summary.

Mirrors:

the canonical governance state

in:

a more scannable format.

It must not:

create:

new governance decisions.

---

# `promotion-process.md`

Defines:

how:

research findings

should move through:

the maturity system.

It should govern:

process

not:

specific pattern outcomes.

If:

its wording

conflicts with:

current canonical governance

it should be:

reviewed

before:

future promotion decisions.

---

# `README.md`

Current file.

Explains:

the validation model

current state

research / production separation

promotion discipline

and:

governance boundaries.

It is:

an overview mirror.

Not:

an independent authority.

---

# Canonical Governance Hierarchy

Use this order:

1. `candidate-patterns.md`
2. `../../patterns/registry.md`
3. `dashboard.md`
4. `../README.md`
5. `README.md`

Mirrors must:

follow:

canonical governance.

They must not:

independently:

change:

pattern maturity.

---

# Two Validation Tracks

KHDS keeps:

research validation

and:

production validation

separate.

---

# Track A — Independent Hospitality Research

Purpose:

determine:

research maturity.

Current completed independent restaurants:

1. Ankole
2. Cultiva
3. Talisman
4. Mawimbi
5. Bistro Lolo
6. FYN
7. Dishoom Covent Garden
8. Franklin Barbecue
9. Alinea
10. NARISAWA
11. Haidilao Toronto Downtown
12. ICHIRAN Shibuya
13. Din Tai Fung Covent Garden

Track A controls:

- Candidate status
- Emerging status
- Validated status
- Research-Derived KHDS Principle status
- formal research confidence

---

# Track B — Kodawa Labs Validation

Purpose:

determine:

implementation knowledge.

Current stable case:

Trunk & Tandoor

Production Build:

Stable

Production Validation:

Phase 2 Checkpoint Complete

Production Classification:

First Stable KHDS Production Translation

Track B may establish:

- implementation success
- implementation friction
- implementation contradictions
- technical lessons
- responsive behaviour
- content / component behaviour
- new implementation patterns
- return-to-research questions

Track B does not:

control:

Track A maturity.

---

# Track Separation

```text
Track A
Independent Hospitality Evidence
↓
Research Maturity
```

```text
Track B
Kodawa Labs Production Evidence
↓
Implementation Knowledge
```

Do not:

merge:

these systems.

---

# Research Maturity Lifecycle

Current formal lifecycle:

```text
Observed
↓
Candidate
↓
Emerging
↓
Validated
↓
Research-Derived KHDS Principle
```

---

# Observed

A behaviour:

has been:

noticed.

It may be:

interesting

useful

or:

worth testing.

Observed does not:

mean:

formal pattern.

---

# Candidate

A finding has:

credible:

independent support

and:

enough definition clarity

to justify:

active:

cross-case testing.

Candidate means:

promising.

It does not mean:

broadly established.

---

# Emerging

A pattern has:

survived:

broader:

independent evidence

contradiction

definition pressure

and:

falsification work.

Emerging is:

currently:

the highest:

research-derived maturity

inside KHDS.

---

# Validated

Future Validated status should require:

substantial:

independent evidence

across:

materially different:

hospitality models

and:

strong:

boundary survival.

Depending on:

the claim

Validated may also require:

evidence beyond:

public websites.

Examples:

- operational evidence
- behavioural evidence
- guest evidence
- commercial evidence
- technical evidence

Current count:

0

---

# Research-Derived KHDS Principle

A future:

Research-Derived KHDS Principle

should represent:

a:

high-confidence:

transferable:

hospitality rule

with:

broad:

independent support

clear:

falsification boundaries

and:

successful:

practical translation.

Current count:

0

---

# Important Foundation Boundary

The Twelve Foundations are:

Pre-Research Studio Foundations.

They are not:

Research-Derived KHDS Principles.

Current Foundations:

1. Emotion before Interface
2. Story before Features
3. Photography before Decoration
4. Restraint before Complexity
5. Motion with Purpose
6. Mobile is the Primary Experience
7. Pacing is our Signature
8. Respect the Brand
9. Create Emotion or Business Value
10. Own the Guest Relationship
11. Build for Legacy
12. Craft Over Convenience

Names may overlap:

with:

formal research patterns.

Overlap does not:

change:

research maturity.

---

# Official Post–Din Tai Fung Validation State

| Measure | Current State |
|---|---:|
| Independent Restaurants | 13 |
| Kodawa Labs Validation Cases | 1 |
| Emerging Patterns | 23 |
| Candidate Patterns | 6 |
| Partially Supported Findings | 1 |
| Validated Patterns | 0 |
| Research-Derived KHDS Principles | 0 |
| Existing Implementation Patterns Pending Formal Validation | 1 |
| Opportunity Themes | 36 |
| Track B Implementation Learnings | 17 |

Highest Research-Derived Maturity:

**Emerging**

---

# Current Emerging Patterns

Count:

23

1. Emotion Before Interface
2. Story Before Features
3. Photography Before Decoration
4. Participation Throughout the Journey
5. Atmosphere Through Consistency
6. Multi-Intent Hospitality
7. Commitment Without Pressure
8. Photography as Proof
9. Story Through Place
10. Promise Before Proof
11. Layered Arrival
12. Narrative Coherence Through Organising Logic
13. The Guest as Participant
14. Photography Through Layers of Experience
15. Human Assistance Where Structured Self-Service Is Insufficient
16. Atmosphere as Product
17. Escalating Participation Complexity
18. Photography Should Demonstrate Difference
19. Show the System Behind the Plate
20. Biography When It Explains the Experience
21. Photography as Use-Case Evidence
22. Walk-In as First-Class Participation
23. Story Through Hospitality Model

Canonical definitions live in:

`candidate-patterns.md`

---

# Current Candidate Patterns

Count:

6

| Pattern | Confidence | Status |
|---|---|---|
| Atmosphere Through Worldview | Medium-High | Under Review |
| Heritage Builds Confidence | Medium-High | Candidate |
| Atmosphere Through Continuity | Medium | Candidate |
| Designed Escape | Medium | Candidate |
| Narrative Language Within Clear Interface | High | Candidate |
| Hospitality System Proof | Medium-High | Candidate |

---

# Post–Din Tai Fung Promotions

Five:

formal:

Candidate → Emerging promotions

were made during:

canonical reconciliation.

---

# Show the System Behind the Plate

Previous:

Candidate / High

Current:

Emerging

Reason:

strong:

cross-case:

culinary-system evidence

and:

clear:

separation from:

guest-facing:

Hospitality System Proof.

---

# Biography When It Explains the Experience

Previous:

Candidate / High

Current:

Emerging

Reason:

strong:

cross-case:

causal:

founder

chef

and:

authorship:

evidence.

---

# Photography as Use-Case Evidence

Previous:

Candidate / Medium-High

Current:

Emerging

Reason:

the pattern survived:

substantial:

definition expansion

across:

social

individual

configuration-based

and:

participation-object:

evidence.

---

# Walk-In as First-Class Participation

Previous:

Candidate / High

Current:

Emerging

Reason:

strong:

independent:

support

across:

materially different:

walk-in:

operating models.

---

# Story Through Hospitality Model

Previous:

Candidate / Medium-High

Current:

Emerging

Reason:

strong:

support

across:

Haidilao

ICHIRAN

and:

Din Tai Fung

through:

materially different:

operating systems.

---

# Candidate Confidence Changes

Two:

remaining Candidates

received:

confidence increases.

---

# Heritage Builds Confidence

Previous:

Medium

Current:

Medium-High

Reason:

Din Tai Fung adds:

a:

different:

heritage mechanism

through:

brand continuity

founder history

product practice

and:

present standards.

---

# Hospitality System Proof

Previous:

Medium

Current:

Medium-High

Reason:

Din Tai Fung adds:

strong:

multi-route:

participation evidence

and:

important:

system-clarity contradiction.

---

# Current Candidate Review Position

---

# Atmosphere Through Worldview

Status:

Candidate / Under Review

Confidence:

Medium-High

Current Interpretation:

Worldview is:

one:

valid:

atmospheric mechanism.

It is not:

the universal:

atmosphere abstraction.

---

# Heritage Builds Confidence

Status:

Candidate

Confidence:

Medium-High

Current Interpretation:

Heritage is strongest when:

historical continuity

remains:

specific

relevant

evidenced

and:

connected to:

present practice.

Living Heritage

remains:

a mechanism

inside:

this Candidate.

---

# Atmosphere Through Continuity

Status:

Candidate

Confidence:

Medium

Current Interpretation:

Atmospheric continuity may emerge through:

- place
- practice
- material
- history
- cultural identity
- repeated brand behaviour

Important distinction:

```text
Brand Continuity
≠
Place Continuity
```

---

# Designed Escape

Status:

Candidate

Confidence:

Medium

Current Interpretation:

Some:

hospitality experiences

create value

through:

intentional:

experiential transportation.

Boundary:

```text
Distinct Atmosphere
≠
Designed Escape
```

---

# Narrative Language Within Clear Interface

Status:

Candidate

Confidence:

High

Current Interpretation:

Narrative language may:

strengthen:

hospitality identity

without:

weakening:

actions

states

navigation

or:

participation clarity.

---

# Hospitality System Proof

Status:

Candidate

Confidence:

Medium-High

Current Interpretation:

When:

guest-facing:

operating structure

materially affects:

participation

or:

differentiation

the guest should:

understand:

relevant:

routes

states

rules

expectations

and:

assistance paths.

Major correction:

```text
System Visibility
≠
System Clarity
```

and:

```text
Route Visibility
≠
State Clarity
```

---

# Partially Supported Finding

Count:

1

---

# Own the Guest Relationship

Status:

Partially Supported

Confidence:

Medium

Public website research can establish:

- direct websites
- branded booking entrypoints
- branded participation routes
- phone
- email
- WhatsApp
- third-party routes

It cannot establish:

- CRM ownership
- guest-data ownership
- reservation-data ownership
- payment-data ownership
- remarketing rights
- backend architecture
- intermediary economics
- customer-history ownership
- contractual platform relationships

Promotion requires:

evidence beyond:

public-site observation.

---

# Existing Implementation Pattern Pending Formal Validation

Count:

1

---

# Invitation

Classification:

Existing KHDS Implementation Pattern

Research Status:

Pending Formal Validation

Track B Evidence:

Trunk & Tandoor

Invitation is not:

Candidate

Emerging

Validated

or:

Research-Derived KHDS Principle.

Production success:

does not:

promote:

Invitation

inside:

Track A.

---

# Validation Change Summary

## Candidate → Emerging

5

1. Show the System Behind the Plate
2. Biography When It Explains the Experience
3. Photography as Use-Case Evidence
4. Walk-In as First-Class Participation
5. Story Through Hospitality Model

---

## Candidate Confidence Increases

2

1. Heritage Builds Confidence
2. Hospitality System Proof

---

## New Formal Candidates

0

---

## Demotions

0

---

## Renames

0

---

## Validated Promotions

0

---

## Research-Derived Principle Promotions

0

---

## Partially Supported Changes

0

---

## Opportunity Theme Changes

0

---

## Track B Implementation Learning Changes

0

---

# Why No New Standardisation Pattern Was Created

Restaurant #13 created:

a major:

standardisation:

research family.

Observed directions include:

- Standardisation as Confidence
- Standardisation as Narrative
- Standardisation as Visual Proof
- Standardisation as Participation Confidence
- Standardised Core / Local Atmosphere

These findings:

do not yet:

share:

one sufficiently:

specific

falsifiable

formal definition.

The current architecture suggests:

```text
Structure
+
Meaning
+
Legibility
+
Appropriate Flexibility
=
Potential Hospitality Value
```

This is:

a research hypothesis.

Not:

a formal pattern.

---

# Standardisation Validation Position

Do not create:

- Standardisation as Hospitality
- Standardisation as Confidence
- Standardisation as Narrative
- Standardisation as Atmosphere
- Standardisation as Proof
- Standardisation as Participation

as:

formal Candidates

without:

more:

independent:

contradiction research.

---

# Multi-Location Validation Position

Din Tai Fung also strengthened:

a:

multi-location:

research family.

Current directions include:

- Global Promise / Local Expression
- Standardised Core / Local Atmosphere
- Atmospheric Invariants
- Atmospheric Variables
- Brand Proof / Location Proof
- Brand Story / Location Story
- Narrative Layering Across Scale
- Cultural Translation as Narrative

Current validation decision:

Architecture / Research Direction

No:

formal:

multi-location pattern

has been created.

---

# Major Deduplication Decisions

Useful:

mechanisms

should remain:

inside:

existing:

patterns

or:

architecture

where possible.

---

# Service Philosophy as Story

Current Home:

Story Through Hospitality Model

Classification:

Mechanism

---

# Operational Narrative

Current Home:

Story Through Hospitality Model

Classification:

Mechanism

---

# Ritual as Story

Current Home:

Story Through Hospitality Model

and:

The Guest as Participant

where relevant.

Classification:

Mechanism

---

# Explain the Ritual

Current Home:

Hospitality System Proof

and:

Participation Clarity

Classification:

Mechanism

---

# Product Focus as Narrative

Current Home:

Story Architecture

Classification:

Architecture Direction

---

# Constraint as Narrative

Current Home:

Story Architecture

Classification:

Architecture Direction

---

# Configuration as Use-Case Evidence

Current Home:

Photography as Use-Case Evidence

Classification:

Mechanism

---

# Motion as Evidence

Current Home:

Proof Architecture

Classification:

Evidence Medium

---

# Photography as Service Proof

Current Home:

Proof Architecture

Classification:

Proof Subtype

---

# Photography as Participation Reassurance

Current Home:

Use-Case / Participation Proof

Classification:

Proof Purpose

---

# Structured Human Handoff

Current Home:

Human Assistance Where Structured Self-Service Is Insufficient

Classification:

Mechanism

---

# Living Heritage

Current Home:

Heritage Builds Confidence

Classification:

Mechanism / Definition Refinement

---

# Below-Candidate Directions

These remain:

outside:

formal Candidate maturity.

---

# Atmosphere / Service

- Social Interaction as Designed Hospitality
- Experiential Human Service
- Hospitality During Waiting
- Concentration as Atmosphere
- Privacy as Hospitality
- Operational Atmosphere
- Precision as Atmosphere
- Contemporary Heritage Atmosphere

---

# Standardisation

- Standardisation as Confidence
- Standardisation as Narrative
- Standardisation as Visual Proof
- Standardisation as Participation Confidence
- Standardised Core / Local Atmosphere

---

# Multi-Location

- Global Promise / Local Expression
- Cultural Translation as Narrative
- Narrative Layering Across Scale

---

# Participation

- Participation Rule Consistency
- Manageable Commitment
- Structured Human Handoff
- Intent-Based Complexity Reduction
- Pre-Visit Operational Preparation

---

# Story

- Product Focus as Narrative
- Constraint as Narrative
- Adaptation as Narrative
- Living Heritage

---

# Proof

- Motion as Evidence
- Layered Proof
- Evidence Efficiency
- Configuration as Use-Case Evidence

---

# Current Architecture Knowledge

The following:

are:

architecture variables

or:

structures.

They are not:

formal patterns.

---

# Arrival Variables

- Experience Familiarity
- Participation Familiarity
- Brand Familiarity
- Product Confidence
- Place Confidence
- Experience Confidence
- Participation Confidence
- Compatibility Confidence
- Commitment Confidence
- Explanation Type
- Standardisation Visibility

---

# Atmosphere Variables

- Desired Guest State
- Compatible Guest-State Cluster
- Production Presence
- Service Presence
- Service Availability
- Social Exposure
- Participation Orientation
- Atmospheric Invariants
- Atmospheric Variables
- Spatial Zone

---

# Proof Variables

- Proof Scale
- Proof Depth
- Evidence Legibility
- Evidence Multiplicity
- Evidence Medium
- Breadth / Depth Orientation

---

# Participation Variables

- Commitment Level
- Participation Complexity
- Participation Breadth
- Participation Depth
- Exception Load
- Escalation Level
- Availability Layer
- Participation Context
- Participation Orientation
- Participation State

---

# Story Variables

- Narrative Anchor
- Narrative Scale
- Narrative Specificity
- Narrative Weight

---

# Current Waiting Taxonomy

Waiting remains:

architecture knowledge.

Current states:

- Access Waiting
- Resource Waiting
- Product Waiting
- Service Waiting
- Exception Waiting

---

# Waiting Validation Position

Hospitality During Waiting

Status:

Below Candidate

Reason:

the presence:

of:

waiting

does not:

prove:

hospitality:

inside:

the waiting state.

Canonical correction:

```text
Waiting Exists
≠
Hospitality During Waiting
```

---

# Human Service Validation Position

Human involvement now needs:

three:

different:

categories.

---

# Structured Self-Service

Use where:

the guest need

is:

predictable

and:

can be:

reliably resolved

through:

structure.

---

# Human Assistance

Use where:

the structured system

becomes:

insufficient

because of:

complexity

uncertainty

exceptions

coordination

or:

physical needs.

Formal Pattern:

Human Assistance Where Structured Self-Service Is Insufficient

Status:

Emerging

---

# Experiential Human Service

Use where:

human interaction itself:

creates:

hospitality value.

Current Status:

Below Candidate

Strongest current evidence:

Haidilao

Boundary pressure:

ICHIRAN

Din Tai Fung

More research required.

---

# Proof Validation Position

The following:

must remain:

distinct.

---

# Photography as Proof

Status:

Emerging

Role:

Medium-level visual evidence.

---

# Photography Should Demonstrate Difference

Status:

Emerging

Role:

Difference-focused visual evidence.

---

# Photography Through Layers of Experience

Status:

Emerging

Role:

Evidence-layer architecture.

---

# Photography as Use-Case Evidence

Status:

Emerging

Role:

Use

configuration

behaviour

and:

participation proof.

---

# Show the System Behind the Plate

Status:

Emerging

Role:

Culinary-system proof.

---

# Hospitality System Proof

Status:

Candidate / Medium-High

Role:

Guest-facing operating-system proof.

---

# Required Boundary

```text
Show the System Behind the Plate
≠
Hospitality System Proof
```

---

# Narrative Validation Position

The following:

must remain:

distinct.

---

# Story Before Features

Status:

Emerging

Role:

Meaning before feature reduction.

---

# Narrative Coherence Through Organising Logic

Status:

Emerging

Role:

Coherence across:

hospitality elements.

---

# Story Through Hospitality Model

Status:

Emerging

Role:

Operating model as:

narrative carrier.

---

# Biography When It Explains the Experience

Status:

Emerging

Role:

Person as:

explanatory narrative carrier.

---

# Heritage Builds Confidence

Status:

Candidate / Medium-High

Role:

Historical continuity as:

confidence mechanism.

---

# Narrative Language Within Clear Interface

Status:

Candidate / High

Role:

Narrative language inside:

clear interface structure.

---

# Required Boundaries

```text
Narrative Coherence Through Organising Logic
≠
Story Through Hospitality Model
```

```text
Story Through Hospitality Model
≠
Hospitality System Proof
```

```text
Story Through Hospitality Model
≠
Show the System Behind the Plate
```

---

# Participation Validation Position

The research increasingly supports:

Participation Architecture

rather than:

Reservation Architecture.

Reservation is:

one:

participation state.

Current routes may include:

- Reserve
- Walk In
- Queue
- Wait
- Enquire
- Order
- Collect
- Modify
- Cancel
- Request Assistance
- Participate
- Complete

---

# Strongest Participation Corrections

```text
Reservation
≠
Participation
```

```text
Walk-In
≠
Failed Reservation
```

```text
No Online Availability
≠
No Physical Access
```

```text
Commitment
≠
Participation Complexity
```

```text
Self-Service
≠
Low Hospitality
```

```text
Structured Participation
≠
Low Agency
```

```text
Human Assistance
≠
Experiential Human Service
```

```text
System Visibility
≠
System Clarity
```

```text
Route Visibility
≠
State Clarity
```

---

# Arrival Validation Position

The current:

arrival abstraction is:

```text
Guest Intent
↓
Relevant Uncertainty
↓
Relevant Meaning
+
Relevant Evidence
+
Relevant Utility
↓
Appropriate Confidence
↓
Appropriate Certainty
↓
Appropriate Participation
```

Arrival is:

not:

a universal:

homepage sequence.

It is:

an:

uncertainty-resolution architecture.

---

# Atmosphere Validation Position

Current:

atmosphere abstraction:

```text
Hospitality Model
↓
Desired Guest State
↓
Relevant Atmospheric Mechanisms
↓
Relevant Presence
+
Relevant Absence
+
Relevant Guest Participation
↓
Relational Coherence
↓
Atmospheric Experience
```

Atmosphere is:

not:

decoration

visual style

or:

social energy alone.

---

# Proof Validation Position

Current:

proof abstraction:

```text
Claim
↓
What Must Be Proven?
↓
How Deeply?
↓
At What Scale?
↓
Which Medium Makes It Legible?
↓
Minimum Sufficient Evidence
↓
Confidence
```

Photography is:

one:

evidence medium

inside:

this broader:

proof system.

---

# Story Validation Position

Current:

story abstraction:

```text
Hospitality Meaning
↓
What Best Explains It?
↓
Primary Narrative Carrier
↓
Relevant Evidence
↓
Guest Understanding
↓
Participation
↓
Experienced Meaning
```

Story is:

not:

a page type.

It is:

a system:

of:

meaning.

---

# Major Post–Din Tai Fung Corrections

Restaurant #13 strengthens:

the following:

canonical boundaries.

1. Standardisation ≠ Generic Experience
2. Standardisation ≠ Lack of Craft
3. Structured Participation ≠ Low Agency
4. Global Brand Consistency ≠ Location Genericness
5. System Visibility ≠ System Clarity
6. Product Confidence ≠ Participation Confidence
7. Craft Explanation ≠ Hospitality System Explanation
8. Finished Product Proof ≠ Process Proof
9. Production Presence ≠ Technique Proof
10. Use-Case Evidence ≠ Visible People
11. Brand Proof ≠ Location Proof
12. One Image ≠ One Proof Role
13. One Image ≠ Unlimited Meaning
14. Reservation ≠ Participation
15. Walk-In ≠ Failed Reservation
16. No Online Availability ≠ No Physical Access
17. Waiting Exists ≠ Hospitality During Waiting
18. Human Assistance ≠ Experiential Human Service
19. Service Presence ≠ Service Availability
20. Production Presence ≠ Service Presence
21. Commitment ≠ Participation Complexity
22. More Routes ≠ More Guest Complexity
23. System Explanation ≠ System Story
24. Story ≠ About Page
25. Heritage ≠ Age Alone
26. Brand Story ≠ Location Story
27. Narrative Coherence ≠ Story Through Hospitality Model
28. Story Through Hospitality Model ≠ Hospitality System Proof
29. Story Through Hospitality Model ≠ Show the System Behind the Plate
30. Focused Meaning ≠ Single Intent

---

# Evidence Boundaries

Public website research may establish:

- published content
- visible interface
- public booking routes
- published walk-in policies
- publicly described systems
- visible photography
- public story
- published atmosphere intent
- location claims
- participation routes
- operating rules
- product claims
- process claims

Public website research cannot establish:

- actual guest satisfaction
- guest emotion
- actual conversion
- profitability
- actual service quality
- actual waiting quality
- actual craft consistency
- actual booking success
- real operational consistency
- CRM ownership
- guest-data ownership
- payment ownership
- platform contracts
- backend architecture
- repeat visitation
- experienced meaning
- perceived authenticity

Do not:

promote:

claims

beyond:

the evidence.

---

# Validation of Opportunity Themes

Opportunity Themes remain:

separate from:

research pattern maturity.

Current count:

36

Current change:

0

There is:

no canonical:

Opportunity Theme registry.

Do not create:

one

solely:

to reconcile:

the number.

---

# Validation of Track B Learnings

Current Track B implementation-learning count:

17

Source Case:

Trunk & Tandoor

Track B implementation learning:

does not:

change:

Track A pattern maturity.

---

# Validation Workflow

The intended:

research governance flow is:

```text
Independent Restaurant
↓
Evidence Collection
↓
Dimension Research
↓
Knowledge Extraction
↓
Cross-Restaurant Comparison
↓
Pattern Pressure
↓
Governance Reconciliation
↓
Canonical candidate-patterns.md
↓
Registry Mirror
↓
Dashboard Mirror
↓
Research README Mirror
↓
Validation README Mirror
```

The current:

Din Tai Fung cycle

has completed:

this full:

workflow.

---

# Promotion Discipline

A pattern should not:

advance

because:

- it sounds useful
- it appears in one famous restaurant
- it worked in production
- it matches a Foundation
- it creates an elegant framework
- it appears multiple times in one restaurant
- it is easy to implement

Promotion requires:

independent:

research support

cross-case:

transferability

contradiction survival

definition clarity

and:

falsification boundaries.

---

# Confidence Discipline

Confidence reflects:

research support

inside:

the current maturity stage.

Confidence should not:

substitute for:

maturity.

Example:

Candidate / High

is still:

Candidate.

It does not mean:

Emerging.

---

# Contradiction Discipline

When:

new evidence

conflicts with:

a pattern

ask:

1. Is the pattern false?
2. Is the definition too broad?
3. Is the restaurant outside the intended context?
4. Is the observed mechanism only one implementation form?
5. Does the contradiction identify a useful boundary?
6. Is the evidence itself strong enough to support the contradiction?

Do not:

protect:

a pattern

from:

negative evidence.

---

# Falsification Discipline

Every:

formal pattern

should eventually answer:

> **What evidence would make this pattern not apply?**

A pattern that:

can explain:

every restaurant

regardless of:

evidence

is:

too broad.

---

# Mechanism Discipline

A mechanism should remain:

inside:

an existing pattern

when:

it explains:

how:

the broader pattern

can occur.

Examples:

Configuration as Use-Case Evidence

↓

Photography as Use-Case Evidence

Structured Human Handoff

↓

Human Assistance Where Structured Self-Service Is Insufficient

Living Heritage

↓

Heritage Builds Confidence

Operational Narrative

↓

Story Through Hospitality Model

---

# Variable Discipline

Architecture variables help:

describe:

differences

without:

creating:

new patterns.

Examples:

- Product Confidence
- Participation Confidence
- Production Presence
- Service Presence
- Service Availability
- Proof Scale
- Proof Depth
- Narrative Scale
- Participation Breadth
- Participation Depth
- Exception Load
- Escalation Level

Variables:

are:

knowledge.

They are not:

automatically:

governance objects.

---

# Research Selection Discipline

Future restaurant selection should:

prioritize:

contradiction.

Do not ask:

> **What restaurant will give us more evidence for this pattern?**

Ask:

> **What restaurant would make this pattern fail?**

This reduces:

confirmation bias.

---

# Post–Din Tai Fung Research Priorities

Future independent research should:

pressure-test:

areas that:

remain:

under-developed.

Priority questions include:

1. When does standardisation become impersonal?
2. When does visible structure reduce agency?
3. When does a multi-location brand lose location specificity?
4. When does heritage fail to create present-day confidence?
5. When does biography add little hospitality value?
6. When does narrative language reduce interface clarity?
7. When does system explanation become unnecessary overhead?
8. When does walk-in access create operational friction?
9. When does visible production add little proof value?
10. When does human interaction itself become indispensable?
11. When does atmosphere resist current mechanism categories?
12. When does local operating variation legitimately require different participation rules?

---

# Restaurant #14 Selection Bias

Restaurant #14 should:

not:

simply repeat:

Din Tai Fung.

High-value contradiction characteristics include:

- low standardisation
- strongly local identity
- weak founder emphasis
- little explicit heritage
- no dominant signature product
- low-tech hospitality
- heavy human involvement without ritual
- community-led hospitality
- limited digital participation
- intentionally simple visual system
- atmosphere based on everyday use
- local variation stronger than global consistency
- unusual accessibility demands
- weak or absent explicit story architecture

Selection should:

target:

research pressure

not:

pattern confirmation.

---

# Research Integrity Check

## Canonical Governance

Complete

---

## Five-Dimension Comparison

Complete

---

## Registry Mirror

Complete

---

## Dashboard Mirror

Complete

---

## Research Overview Mirror

Complete

---

## Validation Overview Mirror

Complete

---

## Pattern Inflation

Controlled

New formal patterns from:

Din Tai Fung:

0

---

## Candidate → Emerging Promotions

5

---

## Candidate Confidence Increases

2

---

## Validated Promotions

0

---

## Research-Derived Principle Promotions

0

---

## Track Separation

Preserved

---

## Website Evidence Boundaries

Preserved

---

## Foundations Separation

Preserved

---

## Opportunity Theme Count

36

Unchanged

---

## Track B Implementation Learnings

17

Unchanged

---

# Official Post–Din Tai Fung Validation State

Independent Restaurants:

13

Kodawa Labs Validation Cases:

1

Emerging:

23

Candidate:

6

Partially Supported:

1

Validated:

0

Research-Derived KHDS Principles:

0

Existing Implementation Patterns Pending Formal Validation:

1

Opportunity Themes:

36

Track B Implementation Learnings:

17

Highest Research-Derived Maturity:

Emerging

---

# Post–Din Tai Fung Governance Summary

## Promoted to Emerging

- Show the System Behind the Plate
- Biography When It Explains the Experience
- Photography as Use-Case Evidence
- Walk-In as First-Class Participation
- Story Through Hospitality Model

---

## Confidence Increased

### Heritage Builds Confidence

Medium

↓

Medium-High

### Hospitality System Proof

Medium

↓

Medium-High

---

## New Candidates

0

---

## Demotions

0

---

## Renames

0

---

## Validated

0

---

## Research-Derived Principles

0

---

# Validation Cycle Status

Restaurant #13:

Din Tai Fung Covent Garden

Dossier:

Complete

Knowledge Extraction:

Complete

Five-Dimension Comparison:

Complete

Canonical Governance:

Complete

Pattern Registry:

Complete

Validation Dashboard:

Complete

Research Overview:

Complete

Validation Overview:

Complete

---

# Post–Din Tai Fung Governance Cycle

**CLOSED**

The next change to:

formal research maturity

should come from:

new:

independent evidence

or:

a deliberate:

governance audit.

Do not:

continue modifying:

the current:

23 Emerging

6 Candidate

1 Partially Supported

0 Validated

0 Research-Derived Principles

state

without:

new evidence

or:

confirmed governance inconsistency.

---

# Next Research Stage

Restaurant #14 Selection

Before beginning:

the next dossier

select:

a restaurant

for:

contradiction value

rather than:

similarity

to:

the current:

research set.
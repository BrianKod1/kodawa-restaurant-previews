# KHDS Research

## Status

Post–Din Tai Fung Research Overview Reconciliation

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

The KHDS research system exists to build:

hospitality knowledge

from:

evidence

rather than:

intuition alone.

Its role is to:

study:

real hospitality experiences

identify:

recurring behaviours

preserve:

contradictions

test:

abstractions

discover:

business opportunities

and:

determine:

which ideas are strong enough

to become:

reusable KHDS knowledge.

Research does not exist to:

prove:

one design style

one interface structure

one reservation model

or:

one hospitality philosophy

correct.

It exists to ask:

- What repeatedly survives across different hospitality models?
- Which behaviours are context-specific?
- What fails under contradiction?
- Which assumptions require narrower definitions?
- What can public digital evidence genuinely establish?
- Which claims require operational, behavioural, guest, or commercial evidence?
- Which implementation questions should return to independent research?
- Which business opportunities emerge without becoming research patterns?

The research process must remain:

stricter

than:

the implementation process.

Evidence wins.

---

# Core Research Position

> **Research narrows the decision space. It does not make the decision for us.**

KHDS should improve:

judgment.

It should not:

replace:

judgment.

---

# Core Research Rules

## Rule 1

Observe before:

generalising.

---

## Rule 2

Compare before:

promoting.

---

## Rule 3

Contradiction is:

evidence.

Not:

research failure.

---

## Rule 4

Independent evidence determines:

research maturity.

---

## Rule 5

Production success determines:

implementation knowledge.

Not:

research maturity.

---

## Rule 6

A useful:

mechanism

variable

direction

medium

or:

tension

is not automatically:

a formal pattern.

---

## Rule 7

Public website evidence must not:

be extended:

into claims

it cannot support.

---

## Rule 8

Pattern count is:

not:

a success metric.

Better:

definitions

boundaries

and:

falsification

are valid:

research outcomes.

---

# Two Evidence Tracks

KHDS maintains:

two:

strictly separated:

evidence tracks.

---

# Track A — Independent Hospitality Research

Track A studies:

hospitality businesses

not designed by:

Kodawa Labs.

Track A controls:

research maturity.

Current completed independent research set:

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

Current Track A Status:

13 complete.

---

# Track B — Kodawa Labs Validation

Track B studies:

Kodawa Labs concepts

and:

production experiences.

Current stable validation case:

Trunk & Tandoor

Production Status:

Stable

Production Classification:

First Stable KHDS Production Translation

Track B may contribute:

- implementation knowledge
- production contradictions
- technical lessons
- component behaviour
- responsive lessons
- implementation patterns
- return-to-research questions

Track B does not:

independently:

promote

demote

validate

or:

increase confidence

for:

Track A patterns.

---

# Track Separation

```text
Track A
Independent Evidence
↓
Research Maturity


Track B
Kodawa Labs Production
↓
Implementation Knowledge
```

The two tracks:

inform:

each other

without:

being confused.

---

# Research Architecture

```text
khds/
├── research/
│   ├── comparison/
│   ├── methodology/
│   ├── observations/
│   ├── restaurants/
│   ├── validation/
│   │   ├── README.md
│   │   ├── candidate-patterns.md
│   │   ├── dashboard.md
│   │   └── promotion-process.md
│   └── README.md
│
├── patterns/
│   └── registry.md
│
└── experiences/
    └── trunk-tandoor/
        ├── production-validation.md
        └── implementation-learnings.md
```

---

# Folder Responsibilities

---

# `restaurants/`

Contains:

independent restaurant research dossiers.

A full dossier normally contains:

- `README.md`
- `arrival.md`
- `atmosphere.md`
- `photography.md`
- `reservation.md`
- `story.md`
- `knowledge-extraction.md`

Primary Question:

> **What is this restaurant forcing KHDS to understand, question, narrow, or expand?**

---

# `comparison/`

Contains:

cross-restaurant comparison

by:

hospitality dimension.

Current comparison areas:

- arrival
- atmosphere
- photography
- reservation / participation
- story

Primary Question:

> **What survives when materially different hospitality models are compared?**

---

# `methodology/`

Defines:

how:

hospitality research

should be:

conducted.

Primary Question:

> **How do we study hospitality consistently without pretending the evidence is stronger than it is?**

---

# `observations/`

Contains:

raw

or:

early:

research findings

that have not yet matured into:

formal patterns

or:

architecture knowledge.

Primary Question:

> **What did we observe before governance interpretation?**

---

# `validation/`

Contains:

research governance.

Primary Question:

> **What does the current evidence justify?**

Key files:

- `candidate-patterns.md`
- `dashboard.md`
- `promotion-process.md`
- `README.md`

---

# `../patterns/registry.md`

Provides:

a readable:

system-level view

of:

the formal research pattern set.

It mirrors:

canonical governance.

It does not:

create:

governance decisions.

---

# `../experiences/`

Contains:

Kodawa Labs production translation

and:

implementation evidence.

Current stable case:

Trunk & Tandoor

Primary Question:

> **What happens when KHDS knowledge meets production reality?**

---

# Canonical Governance Hierarchy

Use this order:

1. `validation/candidate-patterns.md`
2. `../patterns/registry.md`
3. `validation/dashboard.md`
4. `README.md`
5. `validation/README.md`

If:

this README

conflicts with:

`validation/candidate-patterns.md`

the canonical file:

wins.

This README is:

an overview mirror.

Not:

an independent:

governance authority.

---

# Pattern Lifecycle

Research-derived patterns move through:

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

A behaviour

or:

direction

has been:

noticed.

It may be:

interesting

or:

useful.

It is not yet:

formal:

research maturity.

---

# Candidate

The behaviour has:

credible:

independent support

and:

a sufficiently clear:

working definition

to justify:

active:

cross-case testing.

Candidate means:

promising.

Not:

proven.

---

# Emerging

The pattern has:

survived:

broader:

independent support

contradiction

definition pressure

and:

boundary clarification.

Emerging is:

currently:

the highest:

research-derived maturity

inside KHDS.

---

# Validated

A future:

Validated pattern

should require:

broad:

independent support

material:

operating-model diversity

meaningful:

geographic

and:

category diversity

contradiction survival

clear:

falsification boundaries

and:

operational

behavioural

or:

guest evidence

where:

the claim requires it.

Current Validated count:

0

---

# Research-Derived KHDS Principle

A:

Research-Derived KHDS Principle

should represent:

a:

high-confidence:

research-derived:

hospitality rule

that has:

survived:

broad testing

and:

practical translation.

Current count:

0

---

# Current Official Research State

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

# Current Emerging Pattern Set

There are:

23

formal:

Emerging patterns.

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

`validation/candidate-patterns.md`

Readable registry definitions live in:

`../patterns/registry.md`

---

# Current Candidate Pattern Set

There are:

6

formal Candidate patterns.

| Candidate | Confidence | Status |
|---|---|---|
| Atmosphere Through Worldview | Medium-High | Under Review |
| Heritage Builds Confidence | Medium-High | Candidate |
| Atmosphere Through Continuity | Medium | Candidate |
| Designed Escape | Medium | Candidate |
| Narrative Language Within Clear Interface | High | Candidate |
| Hospitality System Proof | Medium-High | Candidate |

Candidate governance lives in:

`validation/candidate-patterns.md`

---

# Current Partially Supported Finding

There remains:

1

---

# Own the Guest Relationship

Status:

Partially Supported

Confidence:

Medium

Public website evidence can establish:

- direct websites
- branded reservation entrypoints
- phone
- email
- WhatsApp
- third-party booking routes
- direct participation interfaces

It cannot establish:

- CRM ownership
- guest-data ownership
- payment-data ownership
- booking-data ownership
- remarketing rights
- backend architecture
- platform contracts
- intermediary economics
- customer-history ownership

Operational

technical

or:

contractual:

evidence

is required

before:

promotion.

---

# Existing KHDS Implementation Pattern Pending Formal Validation

Current count:

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

- Candidate
- Emerging
- Validated
- Research-Derived KHDS Principle

Production use:

does not:

change:

its:

Track A maturity.

---

# Post–Din Tai Fung Governance Result

Restaurant #13:

Din Tai Fung Covent Garden

produced:

five:

Candidate → Emerging promotions.

---

## Show the System Behind the Plate

Candidate / High

↓

Emerging

---

## Biography When It Explains the Experience

Candidate / High

↓

Emerging

---

## Photography as Use-Case Evidence

Candidate / Medium-High

↓

Emerging

---

## Walk-In as First-Class Participation

Candidate / High

↓

Emerging

---

## Story Through Hospitality Model

Candidate / Medium-High

↓

Emerging

---

# Candidate Confidence Changes

Two:

remaining Candidates

received:

confidence increases.

---

## Heritage Builds Confidence

Medium

↓

Medium-High

---

## Hospitality System Proof

Medium

↓

Medium-High

---

# Formal Changes Not Made

New Formal Candidates:

0

Demotions:

0

Renames:

0

Validated Promotions:

0

Research-Derived Principle Promotions:

0

Partially Supported Changes:

0

Opportunity Theme Changes:

0

Track B Learning Changes:

0

---

# Why Din Tai Fung Mattered

Din Tai Fung entered:

Track A

to pressure-test:

standardisation

craft

structured participation

global scale

and:

location specificity.

Its strongest contribution was:

not:

a new:

formal pattern.

Instead:

it clarified:

how:

structure

can interact with:

hospitality meaning.

The dossier demonstrated:

important research pressure around:

- product confidence
- participation confidence
- production presence
- proof depth
- proof scale
- rule consistency
- structured participation
- local expression
- narrative scale
- standardisation

The strongest:

Restaurant #13:

research correction is:

> **Structure does not automatically reduce hospitality. The question is whether the structure is meaningful, legible, proportionate, and flexible at the correct layer.**

---

# Current Arrival Architecture

The strongest current:

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

---

# Current Arrival Variables

Current important variables include:

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

# Major Arrival Corrections

```text
Emotion Before Interface
≠
Emotion Before Product
```

```text
Emotion Before Interface
≠
Emotion Before Utility
```

```text
Story Before Features
≠
Storytelling Before Functions
```

```text
Layered Arrival
≠
More Sections
```

```text
Product Confidence
≠
Participation Confidence
```

```text
No Online Reservation
≠
No Participation
```

---

# Current Atmosphere Architecture

The strongest current:

atmosphere abstraction is:

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

---

# Current Atmosphere Variables

Important variables now include:

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

# Major Atmosphere Corrections

```text
Atmosphere
≠
Decoration
```

```text
Atmosphere
≠
Social Energy
```

```text
Production Presence
≠
Service Presence
```

```text
Service Presence
≠
Service Availability
```

```text
Standardisation
≠
Atmospheric Sameness
```

```text
Distinct Atmosphere
≠
Designed Escape
```

---

# Current Proof Architecture

The strongest current:

proof abstraction is:

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

---

# Current Proof Variables

## Proof Scale

- Brand
- Location
- Product
- Participation

## Proof Depth

- Presence
- Environment
- Activity
- Technique
- Standard
- Outcome

## Evidence Medium

- Still Photography
- Motion
- Sequential Evidence
- Interface
- Diagram
- Text
- Other

## Additional Variables

- Evidence Legibility
- Evidence Multiplicity
- Breadth / Depth Orientation

---

# Major Proof Corrections

```text
Photography
≠
Decoration
```

```text
Finished Product Proof
≠
Process Proof
```

```text
Production Presence
≠
Technique Proof
```

```text
Use-Case Evidence
≠
Visible People
```

```text
Brand Proof
≠
Location Proof
```

```text
One Image
≠
One Proof Role
```

```text
One Image
≠
Unlimited Meaning
```

```text
Maximum Reveal
≠
Maximum Confidence
```

---

# Current Participation Architecture

The strongest current:

participation abstraction is:

```text
Guest Intent
↓
Commitment
+
Complexity
+
Required Certainty
↓
Appropriate Route
↓
Appropriate Structure
↓
Appropriate Human Support
↓
Participation
```

Reservation is:

one state

inside:

Participation Architecture.

---

# Current Participation Variables

Important variables include:

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

# Current Waiting Taxonomy

Waiting remains:

architecture knowledge.

Current types:

- Access Waiting
- Resource Waiting
- Product Waiting
- Service Waiting
- Exception Waiting

---

# Major Participation Corrections

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
Waiting Exists
≠
Hospitality During Waiting
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
Commitment
≠
Participation Complexity
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

# Current Story Architecture

The strongest current:

story abstraction is:

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

---

# Current Story Variables

Important variables now include:

- Narrative Anchor
- Narrative Scale
- Narrative Specificity
- Narrative Weight

---

# Major Story Corrections

```text
Story
≠
About Page
```

```text
Story
≠
Long-Form Copy
```

```text
Biography
≠
Required Narrative
```

```text
Heritage
≠
Age Alone
```

```text
Recognition
≠
Primary Narrative
```

```text
Brand Story
≠
Location Story
```

```text
Narrative Coherence
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

# Standardisation Research Family

Restaurant #13 introduced:

standardisation

as:

a major:

cross-dimensional:

research family.

Current directions include:

- Standardisation as Confidence
- Standardisation as Narrative
- Standardisation as Visual Proof
- Standardisation as Participation Confidence
- Standardised Core / Local Atmosphere

These are:

not:

formal patterns.

---

# Current Standardisation Position

Do not create:

a broad:

Standardisation pattern.

The current evidence suggests:

different effects

depending on:

- what is standardized
- why it is standardized
- whether the standard is visible
- whether the guest understands it
- where flexibility remains
- whether the standard affects product, participation, atmosphere, proof, or story

Current provisional architecture:

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

Status:

Research Hypothesis

Not:

formal governance.

---

# Multi-Location Research Family

Din Tai Fung also strengthens:

multi-location:

research.

Current directions include:

- Global Promise / Local Expression
- Standardised Core / Local Atmosphere
- Atmospheric Invariants
- Atmospheric Variables
- Brand Proof / Location Proof
- Brand Story / Location Story
- Narrative Layering Across Scale
- Cultural Translation as Narrative

These remain:

architecture

and:

research directions.

No:

formal:

multi-location pattern

currently exists.

---

# Current Below-Candidate Research Directions

The following remain:

below:

formal Candidate maturity.

---

## Atmosphere / Service

- Social Interaction as Designed Hospitality
- Experiential Human Service
- Hospitality During Waiting
- Concentration as Atmosphere
- Privacy as Hospitality
- Operational Atmosphere
- Precision as Atmosphere
- Contemporary Heritage Atmosphere

---

## Standardisation

- Standardisation as Confidence
- Standardisation as Narrative
- Standardisation as Visual Proof
- Standardisation as Participation Confidence
- Standardised Core / Local Atmosphere

---

## Multi-Location

- Global Promise / Local Expression
- Cultural Translation as Narrative
- Narrative Layering Across Scale

---

## Participation

- Participation Rule Consistency
- Manageable Commitment
- Structured Human Handoff
- Intent-Based Complexity Reduction
- Pre-Visit Operational Preparation

---

## Story

- Product Focus as Narrative
- Constraint as Narrative
- Adaptation as Narrative
- Living Heritage

---

## Proof

- Motion as Evidence
- Layered Proof
- Evidence Efficiency
- Configuration as Use-Case Evidence

---

# Deduplication Discipline

KHDS should:

avoid:

creating:

formal patterns

when:

a finding is better understood as:

a mechanism

inside:

an existing pattern.

Current canonical examples:

| Direction | Current Home |
|---|---|
| Service Philosophy as Story | Story Through Hospitality Model |
| Operational Narrative | Story Through Hospitality Model |
| Ritual as Story | Story Through Hospitality Model / The Guest as Participant |
| Explain the Ritual | Hospitality System Proof / Participation Clarity |
| Product Focus as Narrative | Story Architecture |
| Constraint as Narrative | Story Architecture |
| Configuration as Use-Case Evidence | Photography as Use-Case Evidence |
| Structured Human Handoff | Human Assistance Where Structured Self-Service Is Insufficient |
| Living Heritage | Heritage Builds Confidence |
| Motion as Evidence | Evidence Medium |
| Photography as Service Proof | Proof Architecture |
| Photography as Participation Reassurance | Use-Case / Participation Proof |

---

# Current Research Tensions

A tension is:

not:

a pattern.

It is:

an unresolved:

research question.

---

# Arrival Tensions

- Meaning vs Utility
- Explanation vs Discovery
- Standardisation vs Individuality
- Global Promise vs Local Meaning
- Reservation Certainty vs Walk-In Flexibility
- Product Focus vs Experience Breadth
- System Visibility vs System Clarity

---

# Atmosphere Tensions

- Standardisation vs Local Specificity
- Precision vs Warmth
- Operating Proof vs Atmosphere
- Brand Atmosphere vs Zone Atmosphere
- Cultural Reference vs Decorative Tokenism
- Addition vs Reduction
- Social vs Individual Atmosphere

---

# Proof Tensions

- Breadth vs Depth
- Stillness vs Motion
- Proof vs Anticipation
- Brand Consistency vs Location Specificity
- Proof vs Atmosphere
- Evidence Efficiency vs Evidence Compression
- Visual Specificity vs Explanation Need

---

# Participation Tensions

- Reservation Certainty vs Walk-In Flexibility
- Structured Self-Service vs Human Assistance
- Simplicity vs Operational Reality
- Participation Breadth vs Interface Clarity
- Standardisation vs Agency
- Digital Availability vs Physical Availability
- Local Variation vs System Consistency
- Service Presence vs Service Availability
- Human Assistance vs Human Hospitality

---

# Story Tensions

- Explicit Story vs Embodied Story
- Biography vs Experience
- Heritage vs Present Relevance
- Product Story vs Broader Hospitality Story
- Operating Model vs Utility
- Global Consistency vs Local Narrative
- Standardisation vs Individuality
- Narrative Specificity vs Narrative Volume
- Cultural Origin vs Cultural Translation

---

# Business Opportunity Layer

Research may expose:

commercial:

or:

operational:

opportunities.

These remain:

separate from:

research maturity.

Current Opportunity Theme count:

36

There is:

no canonical:

Opportunity Theme registry.

Do not:

invent:

one

solely to:

reconcile:

the count.

---

# Opportunity Lifecycle

```text
Observed Gap
↓
Potential Opportunity
↓
Validated Business Gap
↓
Kodawa Labs Solution Opportunity
↓
Prototype
↓
Client Validation
↓
Production Offering
```

A:

commercial opportunity

does not:

automatically become:

a KHDS pattern.

---

# Current Commercial Architecture Hypotheses

These are:

not:

formal research patterns.

---

# Adaptive Participation Infrastructure

Route guests through:

- walk-in
- reservation
- preorder
- groups
- events
- human coordination

based on:

intent

certainty

resource

and:

complexity.

---

# Hospitality Proof System

Determine:

```text
What must be believed?
↓
What must be proven?
↓
How deeply?
↓
At what scale?
↓
Which evidence can prove it?
```

---

# Hospitality Narrative Architecture

Determine:

```text
What creates meaning?
↓
What best explains it?
↓
Which carrier deserves narrative weight?
↓
What evidence supports it?
```

---

# Digital Atmosphere Translation System

Translate:

- physical atmosphere
- social behaviour
- cultural context
- material signals
- operating activity
- use
- craft
- presence
- absence

into:

digital experience.

---

# Production Feedback Loop

The intended KHDS learning loop is:

```text
Independent Research
↓
KHDS Knowledge
↓
Experience Definition
↓
Production Decision
↓
Implementation
↓
Observed Outcome
↓
Production Validation
↓
Implementation Knowledge
↓
Research Question
↓
Future Independent Research
```

The loop:

continues.

It should not:

collapse:

Track A

and:

Track B.

---

# Track B Implementation Knowledge

Current canonical implementation-learning count:

17

Source:

`../experiences/trunk-tandoor/implementation-learnings.md`

These learnings answer:

> **What should KHDS remember when we build the next hospitality experience?**

They do not answer:

> **What does independent research prove?**

---

# Current Track B Position

Trunk & Tandoor:

Production Build:

Stable

Production Validation:

Phase 2 Checkpoint Complete

Production Classification:

First Stable KHDS Production Translation

This classification establishes:

implementation stability.

It does not establish:

research validation.

---

# Relationship to the Twelve Foundations

The Twelve Foundations are:

Pre-Research Studio Foundations.

They are:

not:

research-derived KHDS Principles.

The Foundations are:

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

Research may:

support

challenge

refine

or:

narrow:

these studio beliefs.

Overlap in:

names

does not:

change:

governance status.

Research-Derived KHDS Principles remain:

0

---

# Website Evidence Boundaries

Public digital research may establish:

- published content
- visible interface structure
- published reservation routes
- published walk-in policies
- published operating rules
- visible photography
- public brand story
- location claims
- visible participation options
- published system explanations
- evidence provided by the restaurant

Public digital research cannot establish:

- actual guest satisfaction
- actual guest emotion
- actual conversion
- profitability
- actual service quality
- actual waiting quality
- actual reservation success
- actual operational consistency
- CRM ownership
- data ownership
- payment ownership
- backend architecture
- repeat visitation
- actual perceived authenticity

unless:

additional:

independent evidence

supports:

those claims.

---

# Research Workflow

The current:

Track A:

workflow is:

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
Governance Reconciliation
↓
Registry Mirror
↓
Dashboard Mirror
↓
Research Overview
↓
Validation Overview
```

---

# Restaurant Dossier Workflow

Each:

independent restaurant

normally follows:

```text
README
↓
Arrival
↓
Atmosphere
↓
Photography
↓
Reservation / Participation
↓
Story
↓
Knowledge Extraction
```

Then:

the findings return to:

the comparison layer.

---

# Promotion Workflow

```text
Observed
↓
Independent Support
↓
Candidate
↓
Contradiction Research
↓
Definition Pressure
↓
Boundary Clarification
↓
Emerging
↓
Broader Research
↓
Validated
↓
Research-Derived KHDS Principle
```

Restaurant count:

alone

never:

authorizes:

promotion.

---

# Research Selection Rule

Future restaurant selection should:

prioritize:

contradiction value.

For every:

important:

pattern

or:

architecture hypothesis

ask:

> **What restaurant would make this fail?**

The purpose of:

future research

is not:

to make KHDS look:

correct.

It is:

to make KHDS:

harder to fool.

---

# Current Research Priorities

Following:

Din Tai Fung

future:

Track A:

research should target:

under-tested

or:

contradictory:

hospitality models.

Priority questions include:

1. When does standardisation become impersonal rather than confidence-building?
2. When does local variation meaningfully overpower global brand consistency?
3. When does heritage fail to create present-day meaning?
4. When does a founder or chef add little explanatory value?
5. When does system explanation create unnecessary cognitive load?
6. When does walk-in participation become operational friction rather than hospitality value?
7. When does human interaction itself become indispensable?
8. When does visible production fail to create useful proof?
9. When does narrative language actively damage interface clarity?
10. When does atmosphere emerge without worldview, continuity, escape, or obvious consistency?
11. When does structured self-service materially reduce agency?
12. When does a highly local restaurant resist multi-location abstractions entirely?

---

# Suggested Restaurant #14 Research Bias

Restaurant #14 should not:

simply repeat:

another:

craft-led

standardised

globally recognizable:

restaurant.

High-value contradiction characteristics include:

- low standardisation
- highly local identity
- founder-light brand
- little explicit heritage
- weak signature-product focus
- minimal digital participation
- heavy human service without ritual
- decentralized operation
- community-led hospitality
- location identity stronger than brand identity
- deliberately plain visual evidence
- minimal narrative language
- unusual accessibility complexity
- low-tech participation
- hospitality where atmosphere emerges through everyday use rather than destination framing

Selection should happen:

after:

governance mirror reconciliation

is complete.

---

# Post–Din Tai Fung Research Cycle Status

## Restaurant Dossier

Complete

Restaurant:

Din Tai Fung Covent Garden

Independent Restaurant Number:

13

---

## Five-Dimension Comparison

Complete

Files:

- `comparison/arrival.md`
- `comparison/atmosphere.md`
- `comparison/photography.md`
- `comparison/reservation.md`
- `comparison/story.md`

---

## Canonical Candidate Governance

Complete

File:

`validation/candidate-patterns.md`

---

## Pattern Registry

Complete

File:

`../patterns/registry.md`

---

## Validation Dashboard

Complete

File:

`validation/dashboard.md`

---

## Research Overview

Complete

Current File

---

## Validation Overview

Pending Reconciliation

File:

`validation/README.md`

---

# Official Post–Din Tai Fung State

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

# Post–Din Tai Fung Governance Changes

## Candidate → Emerging

1. Show the System Behind the Plate
2. Biography When It Explains the Experience
3. Photography as Use-Case Evidence
4. Walk-In as First-Class Participation
5. Story Through Hospitality Model

---

# Confidence Increases

Heritage Builds Confidence:

Medium

↓

Medium-High

Hospitality System Proof:

Medium

↓

Medium-High

---

# New Formal Candidates

0

---

# Demotions

0

---

# Renames

0

---

# Validated Promotions

0

---

# Research-Derived Principle Promotions

0

---

# Final Research Position

After:

thirteen:

independent restaurant studies

KHDS has become:

less:

formulaic

rather than:

more.

That is:

the intended outcome.

The evidence now demonstrates:

that:

strong hospitality may emerge through:

- place
- worldview
- heritage
- escape
- belonging
- craft
- social participation
- individual participation
- human service
- reduced interaction
- structured systems
- walk-in access
- high commitment
- low commitment
- visible production
- selective reveal
- global consistency
- local specificity

These:

differences

should remain:

visible.

KHDS should not:

flatten:

them

into:

one:

restaurant experience template.

The strongest current architecture is therefore becoming:

less about:

what every restaurant should contain

and more about:

what this guest

needs to:

understand

believe

feel

and:

do

inside:

this hospitality model.

Restaurant #13 strengthens:

that direction.

It did not:

create:

a new:

formal:

standardisation pattern.

Instead:

it made:

existing patterns

stronger

and:

the framework:

more precise.

That is:

good research governance.

Evidence wins.

---

# Research Overview Status

Post–Din Tai Fung Research Overview Reconciliation:

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

Pending

---

# Next Mirror

`validation/README.md`
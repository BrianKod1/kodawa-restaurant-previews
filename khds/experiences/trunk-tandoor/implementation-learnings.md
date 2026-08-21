# Trunk & Tandoor — Implementation Learnings

## Status

Production Learning Extraction

Source Case:

Trunk & Tandoor

Track:

Track B — Kodawa Labs Validation

Production Status:

Stable

Research Maturity Impact:

None

---

# Purpose

This document extracts:

reusable implementation knowledge

from:

the Trunk & Tandoor Phase 2 production case.

It does not repeat:

everything that happened during production.

That remains in:

`production-validation.md`

This document asks a narrower question:

> **What should KHDS remember when we build the next hospitality experience?**

The objective is to preserve:

- implementation behaviours that proved useful
- architecture decisions that improved production
- tensions that required adaptation
- mistakes that should not be repeated
- questions that should return to independent research

These learnings are:

production-derived.

They are not automatically:

research-derived patterns.

---

# Production Learning Rule

> **Implementation success can strengthen how KHDS builds without changing what KHDS claims to know about hospitality.**

Therefore:

Trunk & Tandoor production evidence may influence:

- implementation guidance
- component behaviour
- responsive strategy
- performance architecture
- design review
- production workflow

It must not independently promote:

Candidate

↓

Emerging

or:

Emerging

↓

Validated.

---

# Learning 1 — Experience Architecture Can Be Compressed

## Production Observation

The initial Phase 2 architecture contained several possible distinct stages:

Arrival

↓

Place

↓

Food + Fire

↓

Atmosphere + Social Use

↓

Evening

↓

Fit

↓

Reservation

↓

Location

In production:

the available evidence did not justify:

every stage becoming:

a separate section.

The final implementation successfully compressed:

related jobs.

## Implementation Learning

> **Information architecture should preserve guest jobs, not document headings.**

Several research concerns may be expressed through:

one production section

when:

- the evidence is shared
- the guest question is shared
- additional separation would create repetition
- the content is not strong enough to justify another stage

## Future KHDS Guidance

Before creating a new section ask:

1. What guest question does this section answer?
2. Is another section already answering it?
3. Does the available evidence justify separation?
4. Would merging reduce repetition without losing meaning?

## Classification

Reusable Implementation Learning

---

# Learning 2 — Evidence Should Have a Job

## Production Observation

The strongest Trunk & Tandoor images were not selected simply because:

they looked attractive.

They served different proof roles:

- rooftop + Nairobi
- dining + skyline
- evening atmosphere
- finished food
- social use
- interior environment

The production experience did not require:

a generic gallery.

## Implementation Learning

> **Image selection should follow evidence need before gallery convention.**

Each major image should answer:

a guest uncertainty

or:

strengthen a meaningful claim.

## Future KHDS Guidance

Before adding an image ask:

- What does this prove?
- What uncertainty does it reduce?
- What new information does it add?
- Is another image already doing the same job?

If the answer is:

nothing distinct

the image may be:

decorative volume.

## Classification

Reusable Implementation Learning

---

# Learning 3 — Minimum Sufficient Proof Requires Claim Discipline

## Production Observation

The Food section uses:

> From the tandoor to the table.

The available photograph primarily demonstrates:

finished food.

It does not demonstrate:

- tandoor process
- fire
- preparation
- technique

## Implementation Learning

> **A stronger claim creates a stronger proof obligation.**

A production experience should not compensate for missing evidence through:

more confident language.

## Future KHDS Guidance

For every major claim:

Claim

↓

Evidence Obligation

↓

Available Evidence

If:

Available Evidence < Evidence Obligation

then:

- soften the claim
- acquire better evidence
- or preserve the gap explicitly

Do not:

invent proof.

## Classification

Reusable Implementation Learning

---

# Learning 4 — Persistent Access Is Not Persistent Duplication

## Production Observation

The first mobile implementation contained:

- header Reserve
- floating Reserve
- contextual reservation CTA

This created:

unnecessary action density.

The floating action was removed.

Reservation remained:

easy to access

through:

the persistent header

and:

earned contextual CTAs.

## Implementation Learning

> **A persistent function does not require multiple persistent controls.**

Accessibility of action should be evaluated separately from:

frequency of repetition.

## Future KHDS Guidance

For high-priority actions:

1. Establish one dependable persistent route.
2. Add contextual actions only when the journey earns them.
3. Avoid adding another persistent control unless it solves a distinct access problem.

## Classification

Reusable Implementation Learning

---

# Learning 5 — Mobile Pacing Must Be Reinterpreted

## Production Observation

Desktop spacing and typography translated too literally into:

the first mobile implementation.

This caused:

- excessive empty vertical space
- over-dominant editorial headings
- slower perceived progression
- unnecessary scrolling

The mobile version improved after:

- compressing Invitation height
- reducing section padding
- modestly reducing display typography
- tightening image transitions
- tightening reservation and location spacing

## Implementation Learning

> **Preserve the pacing intention, not the desktop measurement.**

Responsive design should preserve:

- hierarchy
- emotional rhythm
- proof sequence
- atmosphere

rather than:

identical spatial values.

## Future KHDS Guidance

Mobile adaptation should ask:

- What pause is necessary?
- What volume is necessary?
- What should remain dominant?
- What can be compressed without losing meaning?
- Does the guest still understand the same experience?

## Classification

New Implementation Pattern

---

# Learning 6 — Mobile Is a Translation, Not a Stack

## Production Observation

The stable mobile experience does not behave as:

the desktop page placed vertically.

It preserves:

the same meaning

through:

different spacing

different image relationships

different text scale

and:

different action density.

## Implementation Learning

> **Responsive hospitality design should preserve semantic equivalence rather than visual equivalence.**

Desktop and mobile may use:

different composition

while still expressing:

the same hospitality experience.

## Future KHDS Guidance

Responsive review should compare:

Meaning

Proof

Participation

Atmosphere

rather than:

pixel similarity.

## Classification

Reusable Implementation Learning

---

# Learning 7 — Internal KHDS Tooling Must Remain Separate

## Production Observation

The first production deployment exposed:

the KODAWA FOUNDATION review interface.

It:

- overlapped guest content
- competed with controls
- exposed internal terminology
- weakened restaurant-specific presentation

The tooling was removed from:

the public experience

while remaining available:

inside the project.

## Implementation Learning

> **KHDS may shape the experience without appearing inside the experience.**

Internal:

- governance
- annotation
- diagnostics
- design review
- principle monitoring

must remain separate from:

guest-facing hospitality.

## Future KHDS Guidance

Development tooling should be:

- disabled in production
- loaded conditionally
- isolated behind a deliberate internal mode

Never assume:

internal system visibility

is harmless.

## Classification

Reusable System Learning

---

# Learning 8 — Participation States Must Match Real Capability

## Production Observation

The reservation implementation does not have:

- live availability
- booking API
- real confirmation
- operational restaurant integration

It prepares:

a reservation request

through:

an external email handoff.

The production language was corrected to distinguish:

request

from:

confirmation.

## Implementation Learning

> **The interface must never claim a participation state the system cannot know.**

Prepared

Submitted

Pending

Confirmed

Unavailable

Need Assistance

are:

different states.

## Future KHDS Guidance

Before designing a booking flow define:

1. What does the system know?
2. What can the system guarantee?
3. What state is the guest actually in?
4. What happens next?
5. Where does responsibility move?

UI language should map directly to:

system truth.

## Classification

Reusable Participation Learning

---

# Learning 9 — Structure the Predictable, Escalate the Exceptional

## Production Observation

The reservation prototype benefited from:

a simple structured sequence:

Guest Count

↓

Preferred Date

↓

Preferred Time

↓

Guest Details

↓

Request Preparation

The research architecture already distinguished:

structured self-service

from:

human assistance.

Production reinforced the value of:

keeping the normal path simple

without pretending:

every exception can be automated.

## Implementation Learning

> **Automate the predictable. Escalate the exceptional.**

## Future KHDS Guidance

Structured self-service is strongest when:

- intent is predictable
- inputs are predictable
- conditions are predictable
- outcomes can be represented truthfully

Human assistance should remain available when:

structure becomes insufficient.

## Classification

Reusable Participation Learning

---

# Learning 10 — Source Modularity and Delivery Architecture May Differ

## Production Observation

The CSS architecture was clean and modular.

However:

nested `@import` discovery created:

render-blocking request chains.

Initial Mobile Lighthouse:

- Performance: 90
- FCP: 2.7 s
- LCP: 3.1 s
- Speed Index: 2.7 s

Production delivery was changed so:

required stylesheets

were discoverable directly from:

HTML.

The source files remained:

modular.

Post-change Mobile Lighthouse:

- Performance: 98
- FCP: 1.6 s
- LCP: 2.3 s
- Speed Index: 1.6 s
- TBT: 0 ms
- CLS: 0

## Implementation Learning

> **A clean source architecture and an efficient browser-delivery architecture do not need to be identical.**

## Future KHDS Guidance

Preserve:

modular ownership

while allowing production resources to be:

discovered

as early

and:

in parallel

as practical.

Avoid assuming:

small files

automatically mean:

fast delivery.

## Classification

Reusable Technical Learning

---

# Learning 11 — Performance Optimisation Should Follow Measurement

## Production Observation

Initial assumptions suggested:

images

might be:

the primary performance cost.

Measurement showed:

the six production images totalled only approximately:

417 KB.

Guest-facing JavaScript was approximately:

10 KB.

CSS was also:

small.

Lighthouse instead identified:

render-blocking stylesheet discovery

as the largest actionable problem.

## Implementation Learning

> **Optimise what measurement identifies, not what convention suggests.**

## Future KHDS Guidance

Production performance sequence:

Measure

↓

Identify Bottleneck

↓

Change Smallest Relevant Cause

↓

Re-Test

↓

Keep Only Earned Optimisation

Avoid:

- unnecessary image degradation
- premature JS minification
- architectural complexity
- chasing synthetic scores without guest benefit

## Classification

Reusable Technical Learning

---

# Learning 12 — Restraint Also Applies to Optimisation

## Production Observation

After the CSS-delivery change:

Mobile Lighthouse Performance reached:

98.

LCP reached:

2.3 s.

TBT remained:

0 ms.

CLS remained:

0.

Further optimisation was intentionally stopped.

## Implementation Learning

> **Performance work should stop when additional complexity is unlikely to produce meaningful guest benefit.**

This is:

Restraint Before Complexity

applied to:

engineering.

## Classification

Reusable Technical Learning

---

# Learning 13 — Accessibility Must Survive Real Interaction

## Production Observation

Accessibility review uncovered:

real interaction issues

including:

reservation dialog close behaviour.

The final reservation flow was tested across:

- explicit close
- Escape
- invalid date/time
- invalid guest details
- state reset
- repeated use
- lower-page entry
- mobile rotation
- mobile keyboard constraints

All ten final edge-case tests passed.

## Implementation Learning

> **Accessibility is not complete when the markup looks correct.**

Interactive hospitality flows must be:

tested through:

real states

real devices

and:

failure paths.

## Future KHDS Guidance

Accessibility QA should include:

- keyboard
- focus
- cancellation
- invalid input
- repeated use
- mobile keyboard
- viewport change
- state reset
- reduced motion where relevant

## Classification

Reusable QA Learning

---

# Learning 14 — Real Device Testing Matters

## Production Observation

Several mobile issues became apparent only through:

physical mobile review

including:

- CTA duplication
- spacing
- image centring
- footer alignment
- dialog behaviour
- reduced-motion layout
- mobile keyboard reachability

## Implementation Learning

> **Responsive emulation is necessary but insufficient.**

## Future KHDS Guidance

Every production hospitality experience should include:

at least one:

physical-device mobile validation

before:

stabilisation.

## Classification

Reusable QA Learning

---

# Learning 15 — Evidence Gaps Should Survive Production

## Production Observation

The production process did not resolve every missing fact.

Known gaps remain around:

- real reservation destination
- actual reservation infrastructure
- tandoor/fire process evidence
- richer location/arrival evidence

Rather than inventing answers:

the production experience remained restrained.

## Implementation Learning

> **Production should preserve uncertainty when evidence is missing.**

A polished interface is not justification for:

false certainty.

## Future KHDS Guidance

Unknowns should become:

- documented limitations
- research questions
- operational questions
- future asset requirements

not:

creative assumptions disguised as facts.

## Classification

Reusable Evidence Learning

---

# Learning 16 — Restaurant Identity Must Survive the System

## Production Observation

Trunk & Tandoor successfully consumed:

KHDS structure

without:

presenting itself as:

a KHDS template.

The final experience retained:

- Nairobi
- rooftop
- fire-led culinary language
- social evening character
- restaurant-specific typography
- restaurant-specific photography
- restaurant-specific pacing

## Implementation Learning

> **Reusable structure should increase brand clarity, not visual sameness.**

## Future KHDS Guidance

KHDS should define:

- semantic roles
- interaction logic
- accessibility
- reusable behaviour
- architectural guidance

The restaurant should continue to define:

- identity
- photography
- voice
- colour
- typography
- emotional expression
- content

## Classification

Reusable System Learning

---

# Learning 17 — Production Validation Needs Change Control

## Production Observation

Once the experience had passed:

- responsive QA
- accessibility
- performance
- interaction edge cases
- final visual review

continued aesthetic polishing offered:

diminishing value

and:

increasing risk.

Production Stabilisation introduced:

explicit change control.

## Implementation Learning

> **A stable production experience should not remain permanently open to subjective redesign.**

## Future KHDS Guidance

After stabilisation:

future changes should require:

1. confirmed defect
2. verified restaurant information
3. operational integration
4. new authentic evidence
5. accessibility requirement
6. measurable production issue

Aesthetic preference alone should not:

reopen the design.

## Classification

Reusable Production Learning

---

# Production Patterns Worth Carrying Forward

The Trunk & Tandoor case produced several implementation behaviours that deserve:

future testing.

They should not yet be treated as:

research-derived hospitality patterns.

## 1. Preserve the Pacing Intention, Not the Desktop Measurement

Status:

New Implementation Pattern

## 2. Persistent Access Does Not Require Persistent Duplication

Status:

Implementation Learning

## 3. Preserve Modular Source Architecture While Optimising Production Discovery

Status:

Implementation Learning

## 4. KHDS May Shape the Experience Without Announcing Itself

Status:

Implementation Rule

## 5. Participation Language Must Match System Truth

Status:

Implementation Rule

## 6. Optimise From Measurement

Status:

Engineering Rule

## 7. Stabilisation Requires Change Control

Status:

Production Rule

These should be:

tested

in:

future KHDS production cases

before becoming:

broader implementation doctrine.

---

# Return-to-Research Questions

Production exposed questions that should be tested through:

Track A independent research.

---

## Question 1

When is:

persistent navigation access

sufficient without:

additional floating CTAs?

---

## Question 2

How do materially different hospitality models preserve:

atmosphere

on mobile

without:

preserving desktop volume?

---

## Question 3

When does use-case photography provide:

meaningful participation evidence

rather than:

generic lifestyle imagery?

---

## Question 4

How much proof is:

minimum sufficient proof

across:

different commitment levels?

---

## Question 5

When should process remain:

selectively hidden

and when does:

product difference

require:

visible process evidence?

---

## Question 6

How do different restaurants handle:

Prepared

Pending

Confirmed

Unavailable

and:

Needs Assistance

participation states?

---

## Question 7

Does:

Pacing as Atmospheric Structure

survive outside:

premium experiential restaurants?

---

# What Production Did Not Prove

Trunk & Tandoor production did not establish:

- increased reservations
- increased conversion
- better guest satisfaction
- stronger guest preference
- higher revenue
- restaurant operational effectiveness
- CRM ownership
- booking-platform effectiveness
- real-world restaurant performance

Those claims require:

guest

operational

or:

business evidence.

---

# Research Maturity Impact

None.

Trunk & Tandoor remains:

Track B — Kodawa Labs Validation.

No Candidate or Emerging research pattern changes maturity because of:

this production case.

---

# Current Production Conclusion

Trunk & Tandoor demonstrates that:

KHDS research can be translated into:

a stable

restaurant-specific

responsive

accessible

and:

performant

digital hospitality experience.

The most valuable result is not:

the website itself.

It is:

the implementation knowledge gained by making:

research decisions

concrete.

---

# Next Step

Carry the strongest production questions into:

future independent restaurant research.

Priority should be given to:

contradiction.

The next independent restaurant should help test:

whether these implementation learnings survive:

a materially different hospitality model.
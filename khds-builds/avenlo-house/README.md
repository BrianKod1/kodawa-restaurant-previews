# Avenlo House

**KHDS Synthesis Build 02 — Kodawa Labs**

Avenlo House is a fictional Toronto hospitality technology prototype built to demonstrate how KHDS research can be translated into a working guest and operator system.

## What it demonstrates

Avenlo supports four hospitality relationships:

- Stay
- Dine
- Gather
- Belong

These share one property and brand while retaining different booking logic, capacity, access and service rules.

The prototype demonstrates the Kodawa Labs proposition:

> I build digital systems that help hotels and restaurants attract more guests, own more bookings, and deliver better service.

## Attract more guests

The public experience demonstrates:

- premium hospitality storytelling;
- intent-aware navigation;
- property, room, dining, event and membership presentation;
- differentiated reasons to visit;
- direct calls to action.

## Own more bookings

Conversion paths adapt to guest intent:

- Stay → room availability
- Dine → restaurant capacity
- Gather → qualified event enquiry
- Belong → membership pathway

A room booking does not automatically guarantee restaurant, event or member-space availability.

## Deliver better service

The prototype includes:

- AI guest assistance;
- bounded property knowledge;
- human escalation;
- preserved conversation context;
- guest-context views;
- operational exception management;
- service-specific capacity;
- recommended staff actions.

## Operator Console

The `/ops/` route demonstrates decision support for hospitality operators.

It surfaces:

- arrivals requiring attention;
- safety and service dependencies;
- event handoffs;
- AI-to-human escalations;
- room, dining, event and member capacity;
- direct-revenue opportunities;
- connected guest context.

Its design principle is:

> More data is not the goal. Better decisions are.

## AI Principle

> AI when it knows.
> Human when it matters.
> Context preserved either way.

The prototype deliberately avoids fabricated certainty for unsupported or sensitive requests.

## Research Basis

The verified synthesis population is KHDS Cases #21–30:

1. Fogo Island Inn
2. Sky Lagoon
3. Reffen
4. Time Out Market Lisboa
5. Generator Copenhagen
6. Scarlet Lady
7. Soho House Toronto
8. The Arts Club London
9. Casa Cipriani New York
10. The Social Hub Amsterdam City

See `research-provenance.md` for the full research-to-product mapping.

## Project Structure

- `index.html` — guest-facing hospitality experience
- `styles.css` — guest-facing design system
- `script.js` — booking and concierge prototype logic
- `assets/` — Avenlo property imagery
- `ops/` — operator decision-support console
- `research-provenance.md` — KHDS research-to-product mapping

## Run locally

From the repository root:

`py -m http.server 8000`

Guest experience:

`http://127.0.0.1:8000/khds-builds/avenlo-house/`

Operator console:

`http://127.0.0.1:8000/khds-builds/avenlo-house/ops/`

## Evidence Boundary

Avenlo House is a research synthesis prototype.

It is not:

- a live hospitality property;
- a commissioned client deployment;
- evidence of measured commercial performance;
- a new KHDS validation case;
- a formal KHDS pattern promotion.

Its purpose is to demonstrate research translated into product architecture and working interaction design.

## Built by

**Brian Kodawa**
Founder, Kodawa Labs
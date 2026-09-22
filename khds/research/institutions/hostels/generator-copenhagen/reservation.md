# KHDS Case #25 — Generator Copenhagen — Reservation

## Status

**Case:** KHDS Case #25
**Institution:** Generator Copenhagen
**Location:** Copenhagen, Denmark
**Dimension:** Reservation / Booking / Access
**Dimension status:** Complete at public-evidence scope
**Evidence scope:** Public evidence
**Live booking performed:** No
**Payment submitted:** No
**Operational performance:** Unverified
**Canonical effect:** None

## Purpose

This file studies how Generator Copenhagen converts guest intent into a confirmed accommodation commitment.

The reservation dimension includes:

* date selection;
* guest count;
* bed or room selection;
* shared versus private accommodation;
* rate selection;
* customer and guest identification;
* payment;
* confirmation;
* modification;
* cancellation;
* group routing;
* age eligibility;
* accessibility communication;
* allocation;
* and recovery from failed or incorrect booking states.

This file does not test:

* live availability;
* payment processing;
* booking-engine performance;
* room assignment;
* check-in;
* refund execution;
* staff response;
* or accommodation quality.

```text
Published Booking Route

≠

Verified Booking Performance
```

## Core Reservation Question

> Can Generator Copenhagen convert different accommodation intents into the correct bed, room or group commitment without obscuring privacy, eligibility, allocation or cancellation consequences?

## Reservation Model

Generator Copenhagen does not sell one uniform accommodation object.

Its public reservation system may involve:

* one bed in a shared room;
* one bed in a women-only shared room;
* one private room;
* one private multi-bed room;
* one family room;
* multiple separate beds;
* multiple rooms;
* or a coordinated group arrangement.

The reservation architecture must therefore begin with:

```text
Guest Intent

↓

Correct Inventory Object

↓

Correct Eligibility Conditions

↓

Correct Rate and Consequence

↓

Confirmed Commitment
```

The most important hostel-specific distinction is:

```text
Bed Inventory

≠

Room Inventory
```

A guest purchasing one bed does not purchase control of the entire room.

A guest purchasing a private multi-bed room may receive control of the room even when some beds remain unused.

The physical room may be the same size while the reservation object and guest rights are materially different.

## Reservation Actors

Generator’s booking terms distinguish several actors.

| Actor                        | Reservation role                                                        |
| ---------------------------- | ----------------------------------------------------------------------- |
| Customer                     | Makes the booking and provides booking information                      |
| Guest                        | Stays at the institution and may or may not be the customer             |
| Additional guest             | Included within another person’s booking                                |
| Group organizer              | Coordinates a booking for ten or more people                            |
| Group member                 | Participates through the organized group arrangement                    |
| Parent or legal guardian     | May be required for a minor’s stay                                      |
| Hostel staff                 | May accept bookings, changes or exception requests                      |
| Booking-engine provider      | Supplies the digital reservation infrastructure                         |
| Third-party booking platform | Controls modification or cancellation when the booking originates there |
| Generator operating entity   | Accepts the booking and provides the accommodation                      |

These roles must not be collapsed.

```text
Person Who Pays

≠

Every Person Who Stays
```

```text
Customer Identity

≠

Complete Guest Eligibility
```

A reservation may be financially valid while one or more intended guests remain ineligible under age, identification or room-use rules.

## Reservation Objects

| Object                   | What it represents                                          | Primary consequence                                              |
| ------------------------ | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| Bed                      | One sleeping position within a shared room                  | Other occupants may be unrelated                                 |
| Women-only dormitory bed | One sleeping position within a bounded shared-room category | Eligibility and category integrity matter                        |
| Private room             | Exclusive room use for the booking party                    | Room capacity still applies                                      |
| Private multi-bed room   | Exclusive use of a room containing several beds             | Unused beds do not necessarily become separately sellable        |
| Family room              | Private accommodation configured for a family               | Age, bed and guardian requirements may apply                     |
| Booking                  | Accepted accommodation commitment                           | Creates payment and cancellation consequences                    |
| Booking request          | Request awaiting institutional acceptance                   | Does not itself guarantee accommodation                          |
| Booking confirmation     | Evidence that the request was accepted                      | Must match the intended object and dates                         |
| Group booking            | Coordinated reservation for ten or more guests              | Uses a distinct booking route and terms                          |
| Additional service       | Food, beverages, games, events or other products            | May not be included in accommodation charges                     |
| Accessibility request    | Compatibility information associated with a guest           | Does not guarantee fulfilment until confirmed                    |
| Payment authorization    | Financial instrument supporting the booking                 | Does not independently prove successful accommodation allocation |

## Primary Reservation Routes

### Direct digital booking

Generator’s official website provides a booking route through a third-party booking engine operating on Generator’s behalf.

The direct route may support:

* destination selection;
* arrival and departure dates;
* occupancy;
* accommodation-class selection;
* rate selection;
* customer information;
* payment;
* and confirmation.

A request is not accepted merely because information has been entered.

Generator’s published terms state that acceptance occurs when Generator confirms the booking and issues confirmation.

```text
Booking Request Submitted

≠

Booking Accepted
```

### Direct staff-assisted booking

The booking terms also permit customers to contact hostel staff.

This creates a human-assisted route for situations involving:

* questions;
* amendments;
* group coordination;
* accessibility;
* missing confirmation;
* unusual guest composition;
* or an insufficient self-service path.

Human availability does not establish response speed or successful resolution.

### Third-party booking

A guest may book through an external intermediary.

Generator’s public guidance states that third-party changes and cancellations must generally be handled through the third party.

This creates a responsibility handoff.

```text
Generator Stay

≠

Generator-Controlled Modification Route
```

The institution may remain responsible for the physical stay while the intermediary controls part of the pre-arrival transaction.

### Group booking

Bookings for ten or more guests are treated as group bookings.

Generator directs these customers to a dedicated group route rather than the ordinary individual flow.

The group route may provide:

* a booking coordinator;
* shared or private accommodation options;
* room-distribution support;
* selected social-event arrangements;
* and direct communication.

A group must not be represented as ten unrelated individual transactions when the operating burden involves coordinated allocation and supervision.

## Reservation Sequence

```text
Travel Need

↓

Dates and Guest Count

↓

Individual or Group Route

↓

Private Room or Shared Bed

↓

Accommodation Class

↓

Eligibility Review

↓

Rate and Cancellation Conditions

↓

Guest and Customer Information

↓

Payment or Payment Authorization

↓

Institutional Acceptance

↓

Booking Confirmation

↓

Manageable Pre-Arrival State
```

Each transition introduces a possible failure.

## Bed Versus Room Commitment

Generator Copenhagen publishes both:

* shared dormitory beds;
* and private rooms containing several beds.

A guest selecting accommodation must understand whether the transaction purchases:

* exclusive use;
* one place within shared use;
* several individual places;
* or a coordinated group arrangement.

The price unit must remain legible.

```text
Price Per Bed

≠

Price Per Room
```

The occupancy label must also remain legible.

A room that “sleeps eight” does not tell the guest whether the booking purchases:

* the whole room;
* or one bed among eight.

The product name, price basis and booking summary must carry that distinction together.

## Shared-Room Placement

Generator’s published terms state that when customers book beds in a shared room, the institution will use reasonable efforts to place people from the same booking together but does not guarantee it.

This is a consequential allocation boundary.

```text
Same Booking

≠

Guaranteed Same Room
```

For friends or family members purchasing several beds, the desired outcome may be:

```text
Several Beds

+

Same Dormitory
```

The confirmed outcome may instead be:

```text
Several Beds

+

Distributed Dormitory Allocation
```

That difference can affect:

* supervision;
* safety;
* accessibility;
* social comfort;
* belongings;
* and the perceived value of the booking.

The reservation system should disclose the non-guarantee before commitment rather than relying on later operational explanation.

## Specific-Bed Requests

The FAQ architecture recognizes guest questions about:

* lower bunks;
* upper bunks;
* staying in the same dormitory;
* and changing rooms during the stay.

This indicates that bed position and room continuity are material guest concerns.

A requested lower bunk may relate to:

* mobility;
* age;
* injury;
* comfort;
* or preference.

The public existence of a request route does not establish:

* request acceptance;
* allocation priority;
* guaranteed fulfilment;
* or an appropriate alternative if the request fails.

```text
Preference Recorded

≠

Accommodation Guaranteed
```

When a bunk request is access-related, treating it as an ordinary preference may be insufficient.

## Women-Only Dormitory Reservation

Generator Copenhagen publishes a six-bed women-only dormitory.

The reservation object therefore carries both:

* bed inventory;
* and a participation-category boundary.

The booking system must make the category visible at:

* product selection;
* guest eligibility;
* booking summary;
* confirmation;
* allocation;
* and check-in.

The public evidence does not establish:

* how eligibility is operationally assessed;
* how incorrect bookings are intercepted;
* what happens when a guest is ineligible;
* whether an alternative room is offered;
* or how the institution responds to category-integrity failure.

```text
Category Label

≠

Verified Category Enforcement
```

## Age and Guardian Rules

Generator publishes age restrictions for hostel stays.

The booking terms state that:

* people under 18 generally require a parent or legal guardian;
* accompanied minors must stay in the same private room as the guardian;
* Denmark permits certain unaccompanied guests aged 16–18 to stay in private rooms with required guardian documentation;
* unaccompanied minors are not generally permitted in shared rooms unless part of a group that has booked the complete shared room;
* and non-compliance may result in cancellation without refund or refusal at check-in.

These are consequential eligibility rules.

They affect:

* whether the guest may book;
* which room classes are appropriate;
* which documents are required;
* and whether the reservation can be fulfilled at arrival.

```text
Payment Accepted

≠

Guest Eligible
```

A strong reservation system should prevent an ineligible room selection before financial commitment.

The public terms do not verify whether the booking interface performs that prevention.

## Group Reservation

Generator classifies ten or more guests as a group.

The group route is materially different because it may require:

* direct coordination;
* guest lists;
* room assignment;
* age information;
* group leadership;
* documentation;
* meal or event planning;
* arrival scheduling;
* and behavioural responsibility.

The dedicated coordinator is published as part of the group proposition.

This provides potential human assistance where ordinary self-service may be insufficient.

It does not verify:

* coordinator availability;
* response time;
* allocation quality;
* group placement;
* documentation review;
* or recovery performance.

```text
Dedicated Group Contact

≠

Verified Group Coordination
```

## Rate Architecture

Generator’s public guidance distinguishes at least:

* flexible rates;
* and advance-purchase or prepaid rates.

The flexible rate may permit changes when requested more than 24 hours before check-in, subject to the applicable conditions.

Advance-purchase bookings are publicly described as non-refundable and not amendable.

The rate is therefore not only a price.

It is a bundle of:

```text
Price

+

Payment Timing

+

Modification Rights

+

Cancellation Rights

+

Financial Consequence
```

A lower price may carry greater commitment.

```text
Cheaper Rate

≠

Equivalent Flexibility
```

The reservation system must display the consequence difference before selection is finalized.

## Price and Charges

The booking terms distinguish:

* accommodation charges;
* additional charges;
* taxes where applicable;
* food and beverage;
* other services;
* bank fees;
* and foreign-exchange consequences.

The published property page may display starting prices.

Starting prices are discovery evidence rather than a guaranteed final total.

Final cost may depend on:

* dates;
* demand;
* inventory;
* room type;
* number of beds;
* rate conditions;
* taxes;
* currency;
* additional services;
* and payment timing.

```text
Displayed Starting Price

≠

Final Payable Total
```

The reservation summary should state:

* what is included;
* what is excluded;
* whether the price is per bed or per room;
* the relevant currency;
* payment timing;
* and cancellation consequences.

## Payment

Generator’s terms publish:

* advance payment or valid card requirements;
* possible card presentation at check-in;
* possible pre-authorization;
* and accepted payment-method conditions.

The payment card used for an advance-purchase rate may be required at check-in.

This creates a pre-arrival continuity requirement.

```text
Successful Online Payment

≠

Complete Check-In Readiness
```

The customer, payment-card holder and staying guest may not always be the same person.

The reservation system must make any card-presentation requirement visible before arrival.

The public evidence does not establish:

* live payment acceptance;
* fraud-screening behaviour;
* failed-payment recovery;
* card-preauthorization amounts;
* or resolution when the original card is unavailable.

## Booking Confirmation

The booking becomes accepted when Generator confirms it and provides confirmation.

The confirmation should preserve:

* institution;
* location;
* dates;
* number of nights;
* customer;
* guest count;
* room or bed class;
* quantity;
* price basis;
* payment state;
* cancellation state;
* modification route;
* and arrival requirements.

For shared accommodation, the confirmation should also preserve:

* that the booking concerns a bed rather than the full room;
* dormitory capacity;
* room-category boundary;
* and any non-guaranteed placement condition.

```text
Confirmation Received

≠

Confirmation Correct
```

A confirmation can exist while containing:

* incorrect dates;
* incorrect occupancy;
* incorrect room class;
* an unexpected shared-room condition;
* or an unsuitable rate.

The guest must be able to inspect and challenge the confirmation before arrival.

## Missing Confirmation

Generator provides a FAQ route for customers who have not received confirmation.

This recognizes a distinct reservation state:

```text
Payment or Submission Evidence

+

No Confirmation
```

That state must not be treated automatically as either:

* confirmed;
* or failed.

The required recovery should determine:

1. whether a booking record exists;
2. whether payment was collected or authorized;
3. whether the email address is correct;
4. whether confirmation can be reissued;
5. whether duplicate booking risk exists;
6. and whether the guest should attempt another transaction.

The public evidence establishes the existence of support material.

It does not verify the speed or quality of resolution.

## Modification

Generator’s public FAQ states that flexible-rate bookings may be changed through:

* contact routes;
* or reservation-management tools;

when the change is requested more than 24 hours before check-in.

Third-party bookings must be changed through the third party.

Advance-purchase bookings are described as non-refundable and non-amendable.

Modification may include:

* date change;
* stay-length change;
* guest-count change;
* room-type change;
* or added services.

Published terms state that changes are subject to availability and may require payment of a higher current rate.

If the amended booking costs less, Generator states that it is not obliged to refund the difference.

```text
Change Requested

≠

Change Accepted
```

```text
Lower Revised Price

≠

Automatic Partial Refund
```

## Cancellation

The applicable cancellation policy is presented as rate-dependent.

For eligible direct bookings, cancellation may be available through:

* the booking-confirmation email;
* or the reservation-management interface;

when completed more than 24 hours before check-in.

Third-party reservations must generally be cancelled through the third party.

Generator’s general terms also state that insufficient notice or a no-show may result in charges for the full stay.

```text
Cancellation Route Available

≠

Refund Guaranteed
```

The guest must distinguish:

* cancelling the reservation;
* qualifying for a refund;
* the refund amount;
* and the refund’s completion.

These are separate states.

## Modification and Cancellation Responsibility

| Booking origin        | Primary management route                          |
| --------------------- | ------------------------------------------------- |
| Generator website     | Generator reservation-management or contact route |
| Generator staff       | Generator staff or provided management route      |
| Third-party platform  | The originating third party                       |
| Group booking         | Dedicated group or reservations team              |
| Event or game booking | The relevant product-specific booking route       |

This creates a responsibility rule:

```text
Originating Transaction Route

↓

Primary Change and Cancellation Route
```

The guest should not be forced to discover that rule only after a problem occurs.

## Accessibility During Reservation

The property-specific accessibility page publishes several physical provisions and asks guests to contact the local team for more information about accessible rooms and amenities.

This creates a hybrid reservation route:

```text
Structured Accommodation Search

+

Human Compatibility Confirmation
```

The reservation must distinguish:

* general accessibility;
* a requested accommodation;
* confirmed compatibility;
* accessible-room allocation;
* and fulfilment at arrival.

```text
Accessibility Request Submitted

≠

Accessible Room Confirmed
```

The public evidence does not establish whether accessibility information is:

* attached to the booking;
* visible to relevant staff;
* confirmed in writing;
* preserved through room changes;
* or fulfilled at arrival.

## Reservation Data

The booking process may require:

* name;
* contact number;
* email address;
* dates;
* guest count;
* room or bed selection;
* payment details;
* and special requirements.

Additional data may be required for:

* minors;
* guardians;
* groups;
* accessibility;
* or identity verification.

The system should collect only what is required for the relevant stage and role.

```text
Booking Data

≠

Unlimited Guest Data
```

The person making the booking should not necessarily be required to disclose unnecessary sensitive information about every guest.

Accessibility information should be:

* purpose-bounded;
* access-controlled;
* available to the staff who need it;
* and retained only as justified.

Public policies do not establish the complete internal data architecture.

## Reservation States

A hostel reservation may occupy the following states:

```text
Unsearched

↓

Availability Requested

↓

Options Returned

↓

Bed or Room Selected

↓

Rate Selected

↓

Guest Information Entered

↓

Payment Pending

↓

Payment Authorized or Collected

↓

Acceptance Pending

↓

Confirmed
```

Possible exception states include:

* no availability;
* partial availability;
* incorrect guest count;
* ineligible room type;
* failed payment;
* duplicate booking;
* missing confirmation;
* third-party ownership;
* group-route required;
* accessibility confirmation pending;
* same-room placement unconfirmed;
* modification requested;
* cancellation requested;
* cancelled;
* refunded;
* no-show;
* or institution-initiated cancellation.

```text
Payment State

≠

Reservation State
```

```text
Reservation State

≠

Allocation State
```

```text
Allocation State

≠

Compatibility State
```

## Failure and Recovery Architecture

### No suitable inventory

Recovery may require:

* different dates;
* different room type;
* fewer beds;
* a private-room alternative;
* or another property.

### Friends cannot be guaranteed together

Recovery may require:

* booking a complete private dormitory;
* changing room class;
* group assistance;
* or accepting distributed allocation.

### Incorrect shared-room selection

Recovery depends on:

* availability;
* rate conditions;
* timing;
* and whether the booking is flexible.

### Ineligible minor booking

The strongest recovery occurs before payment through preventive eligibility logic.

Arrival-stage refusal is the most consequential failure state.

### Accessibility compatibility uncertain

Recovery requires human confirmation before commitment or a clearly reversible booking state.

### Failed payment

The system should preserve enough context to retry safely without creating duplicates.

### Missing confirmation

The system must distinguish a delayed message from an absent booking.

### Third-party modification

The guest should be routed back to the originating intermediary with the booking reference and consequence boundary intact.

### Institution cancellation

Published terms permit cancellation in defined circumstances and may provide a refund or rebooking option when accommodation becomes unavailable for reasons outside Generator’s control.

The public terms do not establish how quickly or effectively this recovery occurs.

## Reservation Strengths

Public evidence supports the following strengths:

* clear distinction between several bed and room categories;
* direct booking availability;
* staff-assisted booking;
* a separate group route;
* published booking terms;
* published cancellation and modification guidance;
* clear recognition of third-party responsibility;
* documented age and guardian rules;
* property-specific accessibility contact;
* and a reservation-management route for eligible direct bookings.

## Reservation Gaps

The following remain unresolved:

* whether the interface prevents bed-versus-room confusion;
* whether displayed prices clearly remain per bed or per room throughout checkout;
* whether minor eligibility is checked before payment;
* whether women-only dormitory eligibility is operationally verified;
* whether friends see the non-guaranteed same-room rule before purchase;
* whether accessible-room compatibility can be confirmed before payment;
* whether special requirements remain attached to the booking;
* whether failed payments create duplicate-booking risk;
* whether missing confirmation recovery is timely;
* whether refunds are processed reliably;
* whether third-party handoffs are understandable;
* and whether group coordination works in practice.

## Candidate Pattern Pressure

This analysis provides evidence pressure only.

### Manageable Commitment

The guest must understand the difference among:

* flexible and non-refundable rates;
* bed and room inventory;
* individual and group routes;
* and requested versus guaranteed allocation.

### Participation Rule Consistency

Rules must remain consistent across:

* property pages;
* booking engine;
* confirmation;
* FAQs;
* terms;
* and staff communication.

### Stable Participation / Variable Product

Room and bed availability may vary.

The system may still preserve stable rules governing:

* what is purchased;
* who is eligible;
* cancellation;
* identification;
* and check-in.

### Human Assistance Where Structured Self-Service Is Insufficient

Human help may be necessary for:

* groups;
* accessibility;
* modifications;
* missing confirmations;
* and exception recovery.

### Multi-Intent Hospitality

Accommodation, group travel, events, games and dining use different reservation objects and should not be collapsed into one booking model.

### Own the Guest Relationship

Direct booking creates an observable Generator-controlled route.

Third-party booking creates a different management relationship.

Public evidence does not establish:

* complete customer-data ownership;
* cross-platform history;
* consent propagation;
* or long-term relationship control.

Own the Guest Relationship therefore remains Partially Supported / Medium.

## Reservation Falsification Questions

1. Can a guest complete booking without confusing a bed price with a room price?

2. Is the shared-room condition visible before payment?

3. Is same-room placement uncertainty shown before several beds are purchased?

4. Can a guest reserve an entire dormitory without accidentally purchasing separate shared beds?

5. Are flexible and non-refundable consequences equally legible?

6. Does the system prevent an ineligible minor from purchasing an unsuitable shared-room product?

7. Is women-only dormitory eligibility checked before confirmation?

8. Can an accessibility requirement be confirmed before the booking becomes financially irreversible?

9. Does a failed payment preserve context without creating duplicate reservations?

10. Can a customer recover a missing confirmation without booking again?

11. Does a direct-booking guest retain a clear self-service cancellation route?

12. Does a third-party guest understand which institution controls changes and refunds?

13. Can a group of ten or more enter the correct route before fragmenting the booking?

14. Does a confirmed reservation preserve every consequential condition through arrival?

## Evidence Boundary

This file establishes:

* published accommodation objects;
* published booking actors;
* available direct, staff, third-party and group routes;
* general payment requirements;
* published cancellation and modification rules;
* shared-room placement limitations;
* age and guardian rules;
* and accessibility-contact requirements.

It does not establish:

* live inventory;
* live price;
* booking-engine usability;
* payment success;
* allocation accuracy;
* same-room placement;
* staff response;
* refund completion;
* data handling in operation;
* accessibility fulfilment;
* or recovery performance.

## Sources

Primary sources:

* [Generator Copenhagen](https://staygenerator.com/hostels/copenhagen)
* [Generator booking terms and conditions](https://staygenerator.com/information/booking-terms-and-conditions)
* [Generator booking information](https://staygenerator.com/faq/booking-information)
* [Changing a Generator booking](https://staygenerator.com/faq/booking-information/change-or-cancel-my-stay/can-i-change-my-booking)
* [Cancelling a Generator booking](https://staygenerator.com/faq/booking-information/change-or-cancel-my-stay/how-do-i-cancel-my-booking)
* [Generator group bookings](https://staygenerator.com/group-bookings)
* [Accessibility at Generator Copenhagen](https://staygenerator.com/accessibility/copenhagen)
* [Generator house rules](https://staygenerator.com/information/house-rules)

Source Publication

≠

Transaction Verification

## Reservation Decision

Generator publishes a comparatively structured reservation system with distinct:

* bed;
* room;
* family;
* women-only;
* and group routes.

The strongest architecture is the explicit distinction among accommodation classes and the availability of human assistance for complex cases.

The primary unresolved risk is whether the booking journey preserves these distinctions at the moment of commitment.

The most consequential Case #25 reservation boundary is:

```text
Confirmed Accommodation

≠

Confirmed Compatibility
```

A booking may be valid while failing the guest’s:

* privacy;
* shared-placement;
* accessibility;
* age;
* group;
* or bed-position requirements.

No maturity or confidence change is authorized.

## Dimension Status

`reservation.md` is complete at public-evidence scope.

Case-level review is complete. The Case #25 dossier is administratively closed at public-evidence scope; institution comparison through Cases #21–25 and canonical reconciliation are complete. This dimension caused no formal maturity or confidence movement. Operational performance and outcomes remain unverified. Case #26 is unselected, unstarted and not authorized.

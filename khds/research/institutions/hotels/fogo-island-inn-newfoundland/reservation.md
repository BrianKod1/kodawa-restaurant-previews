KHDS Case #21 — Fogo Island Inn

> Status interpretation: this file preserves the original Case #21 drafting sequence. Case-level in-progress statements, next-file instructions and pre-reconciliation counts below are historical checkpoints, not current instructions. The public-evidence dossier is complete and administratively reconciled; unresolved operational outcomes do not become validated findings. See [the current extraction status](knowledge-extraction.md) and `khds/state/current-case.json`.

Reservation Research

Institution: Fogo Island Inn
Institution type: Boutique-scale luxury hotel / inn
Location: Fogo Island, Newfoundland and Labrador, Canada
Research track: Track A — Independent Hospitality Institution Research
Case role: First hotel-transfer case
Dimension: Reservation
Research status: Complete at public-evidence level
Governance effect: Evidence only; no maturity decision
Canonical authority: khds/research/validation/candidate-patterns.md
Public evidence reviewed: 2026-09-07

1. Purpose of this file

This file studies how Fogo Island Inn converts informed interest into a binding stay commitment.

It examines more than a room-booking interface.

For a destination inn reached through a multi-stage transport chain, reservation includes the guest's attempt to align:

dates,

room or suite,

occupancy,

stay length,

price,

inclusions,

exclusions,

tax,

deposit,

cancellation consequence,

mobility needs,

dietary needs,

child policy,

transport feasibility,

and human itinerary support.

The central problem is not simply:

Can the Guest Reserve a Room?

It is:

Can the Guest Make a Commitment
That the Institution Can Honour
and the Guest Can Operationally Complete?

Restaurant reservations often bind:

a date,

a time,

a party size,

and sometimes a deposit or prepayment.

This hotel reservation additionally binds:

multiple nights,

a room category,

a substantial deposit,

a future balance,

a tax obligation,

a remote-destination journey,

and a multi-day service relationship.

The reservation is therefore both:

a commercial transaction,

and an operational handoff into hospitality.

This file tests whether restaurant-derived KHDS patterns transfer across that expanded commitment.

2. Reservation boundary

Reservation begins when the visitor moves from general evaluation toward date-specific or inventory-specific intent.

That can happen through:

the public Reserve action,

the online booking portal,

a room-page booking action,

a Guest Itinerary Advisor,

a preferred travel advisor,

telephone contact,

email contact,

or a group-sales enquiry.

Reservation does not end merely because a booking record exists.

At Fogo Island Inn, the public evidence creates several possible completion states.

2.1 Inventory-selected state

The guest has chosen:

dates,

occupancy,

and a room or suite.

This does not establish payment.

2.2 Financially-confirmed state

The public terms state that confirmation occurs after payment of a non-refundable 50% deposit.

This does not establish that the guest can reach the island.

2.3 Service-qualified state

Relevant needs have been disclosed and acknowledged, including:

dietary requirements,

mobility requirements,

accessibility requirements,

family requirements,

and room-fit requirements.

This does not necessarily establish transport feasibility.

2.4 Arrival-ready state

The guest has a workable relationship between:

commercial travel,

ground transport,

ferry or charter movement,

arrival timing,

luggage,

room availability,

and the Inn's arrival support.

This is the state that connects reservation to pre-arrival.

The core reservation boundary is therefore:

Confirmed Room
≠
Confirmed Journey

The stronger target is:

Room Commitment
+
Need Acknowledgement
+
Journey Feasibility
=
Arrival-Ready Reservation

This model is an architecture inference.

The public website does not label a formal state called Arrival-Ready Reservation.

3. Primary research question

How should a remote boutique hotel move a guest from interest to binding commitment when room inventory, financial consequence, personal requirements and transport viability must all remain aligned?

4. Secondary research questions

4.1 Booking access

Can guests begin online without losing access to human help?

Can guests begin with a human without receiving different rules?

Does the Reserve action communicate what will happen next?

Does the booking route degrade safely if third-party JavaScript fails?

Can a visitor return to supporting information without losing selected dates?

4.2 Room fit

Can guests compare rooms by functional fit rather than image alone?

Are occupancy limits visible before commitment?

Are bed configurations clear?

Are mobility-relevant differences visible or routed to an Advisor?

Can a solo guest understand the published rate adjustment?

Can a family determine whether its children are eligible?

4.3 Financial commitment

Is the true total-stay commitment visible before payment?

Is the 15% HST shown early enough?

Is the difference between included hospitality and additional-cost services clear?

Is the three-night minimum visible before date selection becomes frustrating?

Is the 50% deposit described consistently?

Is the difference between a refund and a future-stay credit unmistakable?

4.4 Travel feasibility

Does the system test whether the guest can reach the island before accepting a deposit?

Is external transport presented as a cost and dependency?

Can an Advisor help align flights, ground travel and ferry timing?

What happens when room inventory exists but transport does not?

Does weather risk affect commitment comprehension?

4.5 Guest needs

Can dietary requirements be recorded at booking?

Can mobility and accessibility needs be disclosed without unnecessary medical detail?

Do guest requirements persist across the multi-day stay?

Is disclosure acknowledged rather than merely collected?

Can complex needs trigger human review before payment becomes binding?

4.6 Confirmation and continuity

What does a confirmation confirm?

Does it distinguish payment state from itinerary state?

Can the guest identify the next action?

Does information survive movement between the website, booking provider, Advisor and travel advisor?

Can the guest recover after payment failure, browser failure or lost confirmation?

5. Research method

This file separates six evidence classes.

5.1 Published fact

Information explicitly stated on an official Fogo Island Inn page.

Examples include:

29 rooms and suites,

a minimum three-night stay,

a 50% deposit,

a 15% sales tax,

and the availability of Guest Itinerary Advisors.

5.2 Interface-code observation

Information visible in the delivered public homepage markup.

Examples include:

a Reserve control assigned to a booking-widget class,

loading of the Namastay SDK,

and the anchor targets that remain in the markup.

This evidence establishes implementation structure at the time of review.

It does not establish that the widget worked for every visitor.

5.3 Institutional claim

A statement the institution makes about itself, its purpose, economic role or hospitality model.

Examples include:

community reinvestment,

absence of private gain,

local economic contribution,

and the meaning of deposits to the institution.

These remain attributed claims unless independently verified.

5.4 Architecture inference

A KHDS interpretation of how published mechanisms relate.

Examples include:

Arrival-Ready Reservation,

Total-Stay Commitment,

and Booking-to-Itinerary Handoff.

Architecture inference is not a formal pattern.

5.5 Outcome claim

A proposition about what a guest actually understands, feels or successfully completes.

Examples include:

the guest understands the cancellation policy,

the guest can reach the Inn,

the guest trusts the transaction,

or the guest's dietary requirement is honoured.

Public-page review cannot establish these outcomes.

5.6 Governance effect

A formal maturity or confidence decision.

This file makes none.

Evidence is carried forward to knowledge extraction and canonical reconciliation.

6. Verified reservation facts

The official public pages establish the following reservation conditions as reviewed on 2026-09-07.

Reservation fact

Published state

Evidence location

Boundary

Property scale

29 rooms and suites

FAQ; terms

Does not establish live availability

Booking channels

Online portal, Guest Itinerary Advisors, preferred travel advisors

FAQ

Does not prove cross-channel continuity

Minimum stay

Three nights

FAQ; Rates & Inclusions

Four nights are recommended, not required

Rate basis

Per night, per room

Rates & Inclusions

Total depends on nights, room, occupancy, tax and extras

Standard occupancy basis

Two guests per room

Rates & Inclusions

Suites may permit two to five, subject to occupancy

Solo adjustment

CAD $300 reduction per night

Rates & Inclusions

Does not establish final live rate

Child eligibility

Children aged eight and older are welcome

FAQ; Rates & Inclusions

Family programming requires further discussion

Deposit

Non-refundable 50% deposit

Terms; FAQ

Early cancellation may produce credit, not refund

Confirmation

Reservation confirmed after deposit payment

Terms

Does not confirm transport or personal-need readiness

Final balance

Remaining 50% due 30 calendar days before arrival

Terms

Stated as necessary to hold reservation

Tax

15% sales tax / HST

Terms; Rates & Inclusions

Rates are published excluding tax

Early cancellation

Credit for deposit value through 31 days before arrival

Terms

Credit is not cash refund

Credit period

One year from original planned arrival

Terms

Expires after that period

Credit transfer

Transferable

Terms

Use remains governed by terms and availability

Late cancellation

No changes or credit within 30 days

Terms

Paid deposits remain non-refundable

Travel insurance

Strongly recommended

Terms; FAQ

Recommendation does not remove guest consequence

Dietary disclosure

Share requirements at booking

FAQ

Collection does not prove operational fulfilment

Mobility/access route

Contact Advisors directly

FAQ

Contact availability is not accessibility proof

Transport inclusion

Transport to and from Fogo Island costs extra

Rates & Inclusions

On-island shuttle is included

Gander transfer

Published round-trip chauffeured option for 1–4 guests

Getting Here

Price and availability are time-sensitive

Group booking

Enquiry-led; full-Inn and smaller-group options

FAQ

Not part of ordinary self-service flow

These are public policy and service statements.

They do not demonstrate:

booking conversion,

accurate real-time inventory,

successful payment,

successful accommodation of requirements,

successful arrival,

or satisfaction with the stay.

7. Reservation as a distributed system

The public evidence does not present reservation as a single page.

It is distributed across:

homepage actions,

room and suite pages,

Rates & Inclusions,

Reservation Terms and Conditions,

Frequently Asked Questions,

Getting Here,

contact routes,

the third-party booking interface,

Guest Itinerary Advisors,

preferred travel advisors,

and later pre-arrival coordination.

Each surface answers a different question.

Surface

Primary reservation question

Homepage

Should I check dates now?

Rooms & Suites

Which room could fit?

Rates & Inclusions

What does the rate contain?

Terms

What becomes binding and when?

FAQ

What rules and exceptions apply?

Getting Here

Can the journey be made?

Booking portal

Are dates and rooms available?

Advisor contact

What needs human coordination?

Confirmation

What has been secured?

Pre-arrival handoff

What still must be planned?

The system therefore depends on relationship quality between surfaces.

The relevant unit is not:

Booking Page Quality

It is:

Reservation System Coherence

8. Public reservation routes

The FAQ identifies three principal routes.

8.1 Online booking portal

This route supports guests who are ready to:

select dates,

state occupancy,

inspect live room inventory,

and proceed toward payment.

Its likely advantage is immediacy.

Its boundary is that structured fields cannot safely resolve every high-consequence question.

8.2 Guest Itinerary Advisors

This route supports needs involving:

travel planning,

room fit,

family programming,

mobility,

accessibility,

dietary requirements,

charter transport,

and other complexity.

Human assistance is not merely a recovery channel here.

It is part of the published reservation architecture.

8.3 Preferred travel advisor

This route permits the guest's existing advisor to participate in the booking.

It may distribute responsibility across:

guest,

travel advisor,

Inn,

booking system,

and transport provider.

The KHDS test is whether facts and needs remain consistent across those actors.

8.4 Group-sales route

Celebrations, retreats and private stays require enquiry-led planning.

The FAQ states that a private stay can include all 29 rooms and shared spaces and accommodate up to 64 guests, including children of all ages.

That child policy is specifically tied to the private-stay context in the published FAQ.

It should not be generalized to ordinary individual reservations.

8.5 Route principle under pressure

Multiple Booking Channels
≠
Multiple Versions of the Rules

The experience requires channel choice with policy consistency.

9. Booking-widget architecture

The public homepage currently loads a third-party booking SDK from Namastay.

The delivered markup assigns a shared booking-widget class to public booking actions.

The script initializes the booking interface after the page loads.

This creates an observable dependency:

Public CTA
→
Page JavaScript
→
Third-Party SDK
→
Booking Interface

The public HTML review also found that:

the header Reserve anchor carries an ordinary fallback destination pointing to a specific room page,

while a prominent date-selection anchor uses #,

and both are intended to be intercepted by the widget script.

These are code observations.

They do not prove what occurred in a browser session for every user.

They do expose a falsification question:

If the booking SDK does not initialize, does every Reserve action still take the guest to a truthful and useful next step?

The key boundary is:

Visible Reserve Control
≠
Available Reservation Path

9.1 What the public code can establish

It can establish:

an external booking dependency,

an intended widget trigger,

and different anchor fallbacks.

9.2 What the public code cannot establish

It cannot establish:

current provider uptime,

keyboard usability,

screen-reader quality,

mobile completion,

payment security outcome,

live inventory accuracy,

error recovery,

abandonment rate,

or confirmation delivery.

9.3 KHDS transfer implication

Restaurant-derived reservation research often treats the external booking provider as a boundary.

Hotel transfer requires a broader view.

The third-party interface can control the moment of commitment while the institution controls the information that makes that commitment meaningful.

Therefore:

Outsourced Transaction
≠
Outsourced Clarity

10. Reservation-stage model

The public evidence supports the following analytical sequence.

Stage

Guest decision

Required clarity

Principal risk

1. Date intent

When could I stay?

Season and available dates

Desire formed around impossible dates

2. Stay length

How long will I stay?

Three-night minimum; four-night recommendation

Recommendation mistaken for requirement

3. Occupancy

Who is travelling?

Adult count, suite limits, child eligibility

Ineligible or unsuitable party

4. Room fit

Which room works?

Layout, beds, occupancy, features, accessibility route

Image-led misselection

5. Rate interpretation

What is the nightly price?

Room and occupancy basis

Nightly price mistaken for total

6. Inclusion review

What does the price include?

Food, services, activities and amenities

Full-board mistaken for universal inclusion

7. Exclusion review

What costs extra?

Tax, transport, alcohol and select excursions

Commitment understated

8. Policy review

What happens if plans change?

Deposit, balance, credit, expiry, late cancellation

Non-refundable misunderstood

9. Need disclosure

What must the Inn know?

Dietary, mobility, accessibility and family needs

Needs collected too late

10. Payment

What becomes binding now?

Deposit amount and currency

Consent without consequence clarity

11. Confirmation

What has been secured?

Room, dates, occupancy and payment status

Confirmation interpreted too broadly

12. Itinerary handoff

How will I reach the Inn?

Advisor, transport and next steps

Booked stay remains unreachable

This sequence does not claim the current widget visibly follows these stages.

It identifies what the complete reservation system must resolve.

11. Date selection

Date selection is an inventory action and a destination qualification action.

The guest must account for:

operating season,

room availability,

minimum stay,

preferred length,

flight schedule,

ferry schedule,

seasonal transport,

activity season,

and personal availability.

The FAQ describes the Inn as typically open from April 1 through November 1.

The word typically matters.

It indicates a published general operating window rather than a guarantee of availability on every date within it.

11.1 Date inventory is not journey inventory

A room can be available when:

a practical flight is unavailable,

a ground transfer cannot align,

the guest cannot reach the ferry,

or weather disrupts the transport chain.

The system relationship is:

Room Date
∩
Transport Date
∩
Guest Date
=
Viable Stay Date

11.2 Design pressure

Date selection should expose or route the guest toward:

minimum-stay logic,

destination-travel guidance,

Advisor support,

and the distinction between room confirmation and transport planning.

11.3 Evidence boundary

Public review did not test live date inventory.

It does not establish:

availability,

seasonal closure dates,

rate variance,

package restrictions,

or transport availability.

12. Minimum-stay architecture

The public FAQ and Rates & Inclusions page state that a minimum of three nights is required.

The Rates & Inclusions page recommends four nights for a fuller experience.

These statements have different authority.

Statement

Function

Three nights required

Transaction rule

Four nights recommended

Experience guidance

The interface must not collapse them.

The boundary is:

Required Duration
≠
Recommended Duration

The guest should be able to understand:

what the booking system will permit,

why a longer stay may be suggested,

and what additional cost the suggestion creates.

A recommendation becomes coercive if it is presented as though the shorter valid choice is deficient or unavailable.

Public evidence does not establish that this occurs.

It creates a test.

13. Room-selection architecture

Fogo Island Inn presents 29 rooms and suites.

The rooms are described as individually positioned and connected to views of the North Atlantic.

Room pages expose combinations of:

floor area,

occupancy,

bed configuration,

spatial arrangement,

furnishings,

bathing features,

fireplace or wood stove,

view,

and service inclusions.

13.1 Image-led selection risk

Photography can create room desire.

Reservation requires room fit.

The guest may need to distinguish:

visual preference,

functional preference,

and non-negotiable requirement.

Most Desirable Image
≠
Most Suitable Room

13.2 Functional comparison questions

A complete comparison should help the guest answer:

How many people can stay?

Can the bed be configured as required?

Is the layout workable?

Is the bathroom configuration appropriate?

Is mobility support available?

Is the room suitable for a child aged eight or older?

Which benefits are universal and which are room-specific?

Does an Advisor need to confirm fit?

13.3 Shared inclusion versus room difference

Full-board hospitality is common to the stay.

Room pages also list common services and amenities.

If shared benefits dominate room descriptions, category differences can become harder to compare.

Reservation architecture should separate:

what every booking includes,

what this room uniquely provides,

and what requires confirmation.

13.4 Accessibility boundary

The public FAQ directs guests with mobility needs to Advisors.

That is a useful human route.

It is not a substitute for public functional information where such information can be safely and accurately provided.

Contact Us for Accessibility
≠
Accessibility Information

14. Occupancy architecture

The Rates & Inclusions page states that ordinary room rates are based on two guests.

Suite rates may be based on two to five guests, subject to permitted occupancy.

This creates several reservation questions:

Is the displayed price based on the entered party?

Does a suite's maximum occupancy vary by category?

Do additional-person costs apply?

How are children represented?

Does the room configuration meet the party's needs?

Does a solo adjustment appear automatically?

14.1 Solo traveller

The public page states that solo travellers receive a CAD $300 per-night reduction.

This is a material rate rule.

It should be reflected wherever a solo guest interprets price.

The public page does not establish:

whether the adjustment applies to every room or date,

whether it is calculated automatically,

whether it combines with offers,

or how it appears in the final total.

Those remain interface and policy tests.

14.2 Children

Children aged eight and older are welcomed in the ordinary-stay policy.

The age rule is a qualification condition.

It should appear before a family makes a non-refundable commitment.

The FAQ directs families to Advisors for appropriate programming.

This supports a pattern pressure:

Eligibility Rule
+
Human Planning Route

14.3 Private-stay exception

The FAQ states that full-Inn private stays may include children of all ages.

That is context-specific.

It must not silently alter the ordinary individual-stay rule.

Contextual Exception
≠
General Policy

15. Rate architecture

The published rate is described as:

per night,

per room,

based on two guests for rooms,

and based on two to five guests for suites, subject to occupancy.

The nightly room rate is not the guest's complete commitment.

The meaningful price unit is:

(Nightly Rate × Number of Nights)
+
Occupancy Effects
+
15% HST
+
Transport to and from Fogo Island
+
Optional Paid Enhancements
=
Total Stay Commitment

15.1 Why the comparison unit matters

A high-intent visitor may see a nightly rate and compare it with another hotel.

That comparison may be distorted in two directions.

Understatement

It may exclude:

the three-night minimum,

tax,

transport,

alcohol,

and optional excursions.

Overstatement

It may ignore:

three daily meals,

other food service,

non-alcoholic beverages,

on-island transport,

guided activities,

apparel use,

amenities,

and services included in the rate.

The correct KHDS requirement is not simply a lower-looking price.

It is a comparable price.

Price Visibility
≠
Price Comprehension

16. Inclusion architecture

The official Rates & Inclusions page describes a full-board hospitality model.

Published inclusions span four groups.

16.1 Dining

Published dining inclusions include:

breakfast,

lunch,

supper,

welcome snack,

departure lunch pack,

24-hour In-Between menu,

Daybreak service,

Tea Room treats,

food for hikes,

non-alcoholic beverages,

selected special meals,

and meals at restaurants elsewhere on the island.

16.2 Inn services and amenities

Published inclusions include:

Wi-Fi,

24-hour room service,

turndown,

in-room amenities,

access to the Cinema,

access to the Art Gallery,

hot tubs,

and valet service including departure ferry coordination.

16.3 Island experiences

Published inclusions include:

outdoor guides,

personalised itineraries,

Community Host orientation,

on-island shuttle service,

bicycles,

and outdoor apparel or hiking essentials.

16.4 Carbon treatment

The public page lists a carbon offset for the stay, including ground transportation.

This is a published inclusion claim.

This file does not independently verify the accounting method or environmental outcome.

16.5 Reservation implication

Inclusive pricing reduces repeated transactional decisions during the stay.

It increases the need for precise pre-transaction scope.

The guest must understand what full-board means here.

Inclusive Hospitality
≠
Undefined Bundle

17. Exclusion architecture

The public Rates & Inclusions page identifies additional-cost categories.

These include:

alcoholic beverages,

wine pairings,

cocktails,

selected seasonal excursions run by local entrepreneurs,

and transport to and from Fogo Island.

Tax is also excluded from the published rates.

17.1 Strong boundary

Full-Board
≠
All Costs Included

17.2 Why exclusions need equal prominence

The inclusion story is expansive.

That can create a strong sense of completeness.

Material exclusions must remain easy to find before deposit payment.

The most consequential likely exclusion is transport to and from the island.

This is not a marginal enhancement.

It is necessary for almost every guest to use the booking.

17.3 Entrepreneur-led extras

Some optional experiences are supplied by local entrepreneurs and vary seasonally.

Reservation architecture should distinguish:

included Inn activity,

paid third-party or local-enterprise activity,

availability-dependent activity,

and weather-dependent activity.

That distinction matters for both price and expectation.

18. Tax disclosure

The public terms state that a stay is subject to 15% sales tax.

The Rates & Inclusions page describes this as 15% HST excluded from rates.

The terms state that the tax is paid with the final payment 30 calendar days before arrival.

18.1 Reservation consequence

The guest's commitment should be understood inclusive of tax even if the published rate is expressed before tax.

The correct prepayment question is:

What Will the Guest Owe in Total?

not only:

What Is the Base Nightly Rate?

18.2 Evidence boundary

This file did not complete a live booking.

It cannot establish:

when the widget first displays tax,

whether tax appears beside the deposit,

whether the deposit is calculated on pre-tax or post-tax value,

or how foreign-currency visitors see the total.

These are high-priority interface tests.

19. Deposit architecture

The official terms state that a reservation is confirmed when a non-refundable 50% deposit is paid.

This makes the deposit both:

a payment,

and the confirmation threshold.

The remaining 50% is due 30 calendar days before scheduled arrival.

The terms describe that final payment as necessary to hold the reservation.

19.1 Two commitment thresholds

The public policy therefore creates at least two financial moments.

Moment

Financial action

Published consequence

Booking

Pay 50% deposit

Reservation becomes confirmed; deposit is non-refundable

30 days before arrival

Pay remaining 50% plus tax

Reservation continues to be held; late-cancellation restrictions apply

19.2 Language precision

The term non-refundable must coexist with a credit policy.

The clearest interpretation is:

the deposit is not returned as money,

an eligible early cancellation may convert its value into a future-stay credit,

and late cancellation does not produce that credit.

The boundary is:

Credit Eligibility
≠
Refund Eligibility

19.3 Manageable Commitment pressure

The deposit is substantial because it applies to:

a minimum multi-night stay,

a high-value lodging product,

and an experience with additional travel cost.

Manageable Commitment therefore requires more than a short payment form.

It requires:

consequence clarity,

total-cost clarity,

room-fit clarity,

travel-risk clarity,

and recovery clarity.

Low interaction count does not necessarily mean low commitment complexity.

Short Checkout
≠
Small Decision

20. Cancellation architecture

The public terms divide cancellation into two periods.

20.1 Through 31 days before arrival

The Inn states that it will issue a credit for the value of the non-refundable deposit.

The credit:

is not a cash refund,

may be used for a future stay,

remains valid for one year from the original planned arrival date,

and is transferable.

20.2 Within 30 days of arrival

The terms state that:

booking changes are unavailable,

cancellation credit is unavailable,

and deposits paid remain non-refundable.

20.3 Time-bound value

A credit preserves conditional value.

It does not preserve liquidity.

Its usefulness depends on:

expiry date,

future availability,

future rates,

room-category availability,

transport feasibility,

and the guest's ability to return within the period.

Preserved Credit Value
≠
Preserved Booking Equivalence

20.4 Transferability

Transferability increases the possible usefulness of the credit.

It does not remove:

expiry,

rebooking effort,

price difference,

or journey feasibility.

20.5 Change boundary

The public terms use a strict within-30-day boundary for changes and credits.

A reservation interface should make the relevant calendar date explicit for the individual booking.

Policy Window
→
Guest-Specific Deadline

The public policy establishes the rule.

This file does not establish whether confirmations calculate and display the exact deadline.

21. Force-majeure architecture

The public terms address events beyond the reasonable control of the guest or Inn.

They state that affected obligations may be suspended for the period of delay.

The Inn states that it will use reasonable efforts to reschedule a stay, subject to adjustments for:

rate differences,

or room-category price differences.

The terms also state that if the Inn cannot welcome the guest for reasons beyond its control, it will issue a future-stay credit under the stated conditions.

21.1 Remote-destination relevance

Force majeure is not abstract in a journey involving:

commercial flight,

road travel,

ferry or charter access,

coastal weather,

and seasonal operation.

21.2 Boundary

Rescheduling Commitment
≠
Same Stay at Same Cost

21.3 Necessary clarity

Guests need to distinguish:

Inn cancellation,

transport-provider cancellation,

guest inability to travel,

force majeure,

and voluntary cancellation.

These conditions may create different consequences.

The public terms provide a general framework.

They do not enumerate every transport-chain failure.

22. Travel-insurance boundary

The Inn strongly recommends travel insurance.

That recommendation is materially relevant because of:

non-refundable payment,

cancellation restrictions,

remote travel,

and potential disruption.

Travel insurance is an external risk-transfer mechanism.

It is not part of the Inn's service guarantee.

Insurance Recommendation
≠
Cancellation Flexibility

Reservation clarity should not rely on the guest assuming that insurance will cover every event.

Coverage depends on the policy purchased.

The Inn's public pages do not establish:

insurer,

coverage terms,

claim eligibility,

or reimbursement outcome.

23. Mission within financial terms

The Reservation Terms and Conditions do more than state commercial rules.

They explain the Inn's ownership, social-business model, community role and the claimed local consequences of cancellation.

This is unusual reservation architecture.

The institution places policy inside a moral and economic context.

23.1 Potential benefit

The narrative can help a guest understand why a small destination property may use strict terms.

It connects reservation policy to operating model.

This pressures:

Story Through Hospitality Model,

Contribution Orientation,

Contribution Disclosure,

and Relationship Proof.

23.2 Potential risk

Mission language can carry emotional weight during a legal or financial decision.

The guest still requires plain comprehension of:

amount,

timing,

refund status,

credit status,

expiry,

transferability,

and late-cancellation consequence.

The governing boundary is:

Policy Rationale
≠
Policy Consent

23.3 Ethical clarity

Community benefit does not reduce the guest's financial consequence.

Community Benefit Narrative
≠
Reduced Cancellation Cost

Mission can explain.

It must not obscure.

23.4 Institutional claims

The terms make quantitative claims about employment and tourism contribution.

Those claims are official institutional statements.

They are not independently validated in this reservation file.

Their presence in terms is itself observable.

Their accuracy requires separate evidence.

24. Optional donation route

The terms state that a guest who cannot use a credit before expiry may choose to redirect its value as a donation to Shorefast.

The institution describes this as voluntary.

A charitable receipt may be possible subject to government requirements and other conditions.

24.1 Architecture distinction

This is not a refund.

It is not automatic.

It is not the original hospitality transaction.

It is a later optional disposition of unused value.

Voluntary Donation Option
≠
Expected Guest Contribution

24.2 Relationship risk

If the option is communicated with moral pressure, voluntariness can become ambiguous.

Public wording describes choice.

This file does not observe an actual guest interaction.

24.3 Governance relevance

The mechanism pressures Contribution Orientation and Contribution Disclosure.

It does not independently support promotion.

25. Transport feasibility

The public Getting Here page identifies Gander International Airport as the principal gateway.

It describes a journey involving:

ground travel to Farewell ferry terminal,

a ferry crossing to Fogo Island,

or an alternative charter-plane or helicopter route.

The page also offers Advisor support.

25.1 Published ground-transfer option

At review time, the page published a round-trip chauffeured shuttle between Gander and the Inn for CAD $1,150 for one to four people.

This figure is time-sensitive.

It is recorded as a reviewed public rate, not a permanent KHDS fact.

25.2 Necessary but excluded

Transport to and from Fogo Island is an additional cost.

Yet transport is necessary for the stay to be used.

This creates a distinctive inclusion boundary:

Essential to Access
≠
Included in Room Rate

25.3 Feasibility before payment

A guest can theoretically secure lodging before securing transport.

The risk is asymmetrical:

the room deposit may be non-refundable,

while external transport remains uncertain.

A strong reservation system should help the guest recognize that dependency.

25.4 Travel-time discrepancy

The Getting Here page describes the drive from Gander to Farewell as approximately one hour.

The FAQ has described the journey as approximately one and a half hours.

This discrepancy should not be silently reconciled.

Possible explanations could include:

different assumptions,

route variability,

page drift,

or simple inconsistency.

This file does not determine which explanation is correct.

The KHDS implication is:

Distributed Travel Guidance
Requires
Source Consistency

26. Booking-to-itinerary handoff

Fogo Island Inn publicly positions Guest Itinerary Advisors as travel-planning support.

The Advisors can help with:

route choice,

flights,

ground transfer,

ferry connection,

charter possibilities,

and broader itinerary design.

This creates a handoff after or during booking.

26.1 Weak handoff

Booking Confirmed
→
Generic Contact Information

26.2 Strong handoff

Booking Confirmed
→
Outstanding Journey Questions Identified
→
Named Advisor Route
→
Transport Plan Acknowledged

The public pages establish that Advisor support exists.

They do not establish the exact post-payment handoff experience.

26.3 Human assistance interpretation

The Advisor is not merely a fallback for users who cannot complete a form.

The role helps coordinate a system that contains external uncertainty.

Human Assistance
≠
Interface Failure Recovery Only

This is strong transfer pressure for:

Human Assistance Where Structured Self-Service Is Insufficient.

It is still one institution-level case.

27. Dietary disclosure

The FAQ states that dietary restrictions and allergies should be shared at booking.

This timing is significant.

The stay includes multiple food interactions across several days.

The disclosed need may affect:

arrival snack,

breakfast,

lunch,

supper,

room service,

hike lunch,

special meals,

off-property island dining,

and departure lunch pack.

27.1 Restaurant-transfer expansion

In a restaurant, dietary information may be needed for one service.

At the Inn, the same information may need to persist across:

time,

venue,

team,

service mode,

and external partner.

The architecture direction is:

Single Disclosure
→
Cross-Stay Service Memory

27.2 Collection is not acknowledgement

Requirement Entered
≠
Requirement Accepted

High-consequence dietary needs may require:

review,

clarification,

acknowledgement,

limitation disclosure,

and operational propagation.

27.3 Evidence boundary

Public evidence establishes a disclosure request.

It does not establish:

form fields,

data structure,

staff workflow,

cross-venue propagation,

kitchen capability,

contamination controls,

or fulfilment outcome.

28. Accessibility and mobility disclosure

The FAQ states that the Inn can receive guests with mobility needs and asks them to contact Advisors directly to discuss requirements.

This creates a human qualification route.

28.1 Appropriate function

A human conversation can resolve requirements that do not fit a binary accessibility label.

It may help align:

room layout,

bathing configuration,

building circulation,

transport,

ferry boarding,

luggage,

excursions,

and assistance.

28.2 Disclosure dignity

The system should seek operationally relevant information.

It should not require unnecessary medical detail.

Functional Requirement
≠
Diagnostic Disclosure

28.3 Timing risk

If the guest must pay a non-refundable deposit before confirming that needs can be met, the commitment becomes unsafe.

The better sequence is:

Requirement Raised
→
Capability Reviewed
→
Limits Explained
→
Fit Acknowledged
→
Commitment Completed

This is an architecture requirement, not an observed current sequence.

28.4 Contact is not proof

The presence of an Advisor route demonstrates available contact.

It does not demonstrate:

accessible rooms,

accessible transport,

response speed,

successful accommodation,

or guest independence.

29. Service-animal and support-animal boundary

The FAQ states that the Inn is not generally pet-friendly and identifies exceptions for service animals and emotional-support pets with documentation.

This is an eligibility and evidence requirement.

The reservation system should make clear:

when disclosure is needed,

what documentation is required,

how transport rules interact,

and whether an Advisor must confirm arrangements.

Public evidence does not establish the detailed procedure.

The terminology and legal treatment of assistance animals can vary by jurisdiction and transport provider.

This file does not interpret legal entitlement.

It records the institution's published policy only.

30. Preference architecture

A hotel reservation can collect preferences including:

bed configuration,

dietary requirements,

celebration context,

activity interests,

mobility needs,

transport plans,

arrival timing,

and communication preference.

These fields have different status.

Information type

Meaning

Eligibility condition

Must be satisfied for booking to be appropriate

Safety requirement

Must be reviewed and operationalised

Service requirement

Must be acknowledged or bounded

Preference

Desired but may not be guaranteed

Interest

Used for itinerary relevance

Unknown

Requires later follow-up

The reservation system should not present all inputs as equivalent free-text notes.

30.1 Promise boundary

Preference Recorded
≠
Preference Guaranteed

30.2 Requirement boundary

Requirement Recorded
≠
Requirement Operationalised

30.3 Memory boundary

Information Stored
≠
Information Available at the Point of Service

The hotel-transfer case extends restaurant preference research from one meal into a multi-stage relationship.

31. Confirmation architecture

The official terms define deposit payment as the reservation-confirmation threshold.

A complete confirmation should distinguish at least five states.

Confirmation object

Possible state

Room

Held / confirmed

Payment

Deposit paid / balance pending / fully paid

Policy

Accepted / deadline stated

Guest needs

Received / under review / acknowledged

Travel

Unknown / self-managed / Advisor-supported / confirmed externally

31.1 Confirmation should not overclaim

The word confirmed can create a sense that the entire stay is resolved.

For a remote destination, it may confirm only the commercial lodging record.

Reservation Confirmation
≠
Arrival Assurance

31.2 Necessary confirmation content

The most useful confirmation would make visible:

dates,

nights,

room category,

guest count,

child details where relevant,

deposit amount,

tax treatment,

remaining balance,

balance due date,

cancellation deadline,

credit conditions,

disclosed requirements,

Advisor contact,

transport status,

and immediate next action.

This is a KHDS evaluation model.

The public pages do not expose an actual confirmation message for review.

32. Modification architecture

The terms state that within 30 days of arrival the Inn cannot make booking changes or issue a cancellation credit.

Before that boundary, the terms describe credit after cancellation but do not publicly detail every modification pathway.

Possible modification needs include:

date change,

room-category change,

occupancy change,

traveller-name change,

dietary update,

accessibility update,

transport update,

celebration update,

or complete cancellation.

32.1 Modification is not one action

Each change may affect:

availability,

price,

tax,

credit,

room fit,

itinerary,

and service planning.

32.2 Transferability is not modification

The terms describe future-stay credit as transferable.

That does not necessarily mean the active reservation can be freely transferred.

These concepts should remain separate.

32.3 Public evidence boundary

This file does not establish:

whether guests can self-modify,

whether all changes require an Advisor,

whether a fee applies,

how rate differences are handled outside force majeure,

or how quickly changes are confirmed.

33. Failure-state architecture

A high-value reservation system must explain recovery as carefully as the happy path.

33.1 No room availability

Useful responses could include:

alternate dates,

alternate rooms,

Advisor assistance,

or an explicit no-availability state.

It should not imply that contacting an Advisor guarantees hidden inventory.

33.2 Minimum-stay violation

The system should distinguish:

a rule violation,

unavailable dates,

and a technical error.

33.3 Occupancy mismatch

The guest should be routed toward suitable categories or human review.

33.4 Child-policy mismatch

The age rule should appear before payment data is requested.

33.5 Accessibility uncertainty

The system should pause commitment and route to capability review.

33.6 Dietary uncertainty

The system should distinguish:

requirement received,

requirement under review,

and requirement accepted.

33.7 Payment failure

The guest needs to know:

whether inventory remains held,

for how long,

whether a charge occurred,

and how to retry safely.

33.8 Widget failure

Every Reserve action needs a useful fallback that preserves:

institutional identity,

contact access,

and the guest's path toward booking.

33.9 Confirmation-delivery failure

The guest needs an independent way to verify:

payment,

booking record,

and next steps.

33.10 Transport infeasibility

The system should identify whether the guest should:

change travel,

change stay dates,

contact an Advisor,

or reconsider commitment before the applicable deadline.

33.11 External disruption

The guest needs clear ownership boundaries between:

Inn,

airline,

ground carrier,

ferry operator,

charter provider,

travel advisor,

and insurer.

33.12 Lost context across channels

If a guest begins online and continues by telephone, the institution should prevent repeated disclosure and contradictory information where possible.

34. Multi-channel continuity

The Inn offers online, direct-human and travel-advisor booking routes.

This supports access across different guest needs.

It also creates information-governance pressure.

34.1 Shared policy layer

All channels should draw from the same current rules for:

minimum stay,

occupancy,

child eligibility,

deposit,

tax,

cancellation,

inclusions,

and exclusions.

34.2 Shared guest record

Relevant information should survive channel movement where consent and systems permit.

34.3 Human override boundary

A human may resolve exceptions or context.

That should not create invisible arbitrary policy.

34.4 Advisor responsibility boundary

A preferred travel advisor may communicate with the guest.

The Inn remains responsible for the accuracy of its own rules and service commitments.

34.5 Transfer finding

Channel Choice
+
State Continuity
=
Reservation Coherence

This remains an architecture direction.

35. Data and privacy boundary

Reservation can involve sensitive or consequential data.

Possible information includes:

identity,

contact details,

payment information,

travel dates,

room choice,

companion details,

children's ages,

dietary requirements,

mobility requirements,

support-animal documentation,

and celebration context.

35.1 Data minimisation

The system should collect what is necessary for:

booking,

safety,

service,

legal compliance,

and requested personalisation.

35.2 Disclosure purpose

Guests should know why information is requested and who needs it.

35.3 Third-party boundary

The public booking experience uses an external provider.

This creates a data-boundary question between:

the Inn,

booking provider,

payment processor,

travel advisor,

and other service partners.

35.4 Evidence boundary

This file reviewed the public reservation surfaces and official Privacy Policy availability.

It did not perform:

a privacy-law audit,

security testing,

payment testing,

cookie forensics,

data-retention analysis,

or processor-contract review.

No security or compliance conclusion is made.

36. Relationship to discovery

Discovery established that the visitor must qualify:

place,

purpose,

travel,

price,

season,

and fit.

Reservation converts that qualification into a record and commitment.

The handoff fails if discovery creates aspiration while reservation introduces material facts too late.

36.1 Facts that should not first appear at payment

three-night minimum,

child-age rule,

excluded tax,

transport exclusion,

50% deposit,

credit-not-refund policy,

30-day restriction,

and need for remote-destination planning.

36.2 Continuity principle under pressure

Discovery Promise
Must Equal
Reservation Reality

36.3 Story continuity

Community purpose appears in discovery and in reservation terms.

That continuity can demonstrate institutional coherence.

It must remain subordinate to transactional clarity at the moment of consent.

37. Relationship to pre-arrival

Reservation captures commitment.

Pre-arrival operationalises it.

The handoff may need to carry:

guest identity,

party composition,

dates,

room,

payment state,

cancellation deadline,

arrival route,

flight details,

ferry or charter plan,

transfer booking,

dietary requirements,

mobility requirements,

activity interests,

and unresolved questions.

The boundary is:

Booking Data
≠
Pre-Arrival Plan

The plan emerges when information is:

interpreted,

acknowledged,

coordinated,

assigned,

and made actionable.

38. Existing Candidate pattern pressure

This dimension pressures existing KHDS Candidates without changing maturity.

Candidate pattern

Current pressure from Case #21 reservation

Status effect now

Manageable Commitment

High-value, multi-night commitment requires consequence, total-price, room-fit and travel clarity

Evidence only

Layered Arrival

Reservation becomes an early operational arrival stage

Evidence only

Capacity Proof

The Inn must prove it can support needs across rooms, meals, travel and multi-day service

Evidence only

Human Assistance Where Structured Self-Service Is Insufficient

Advisors are part of ordinary planning, not merely error recovery

Evidence only

Stable Participation / Variable Product

Stable booking rules frame variable rooms, seasons, activities and itineraries

Evidence only

Participation Rule Consistency

Minimum stay, age, occupancy and cancellation rules must remain coherent across channels

Evidence only

Multi-Intent Hospitality

Solo, couple, family, group, celebration and retreat intents require different paths

Evidence only

Story Through Hospitality Model

Mission is embedded directly in the terms and economic logic

Evidence only

Relationship Proof

Advisor coordination and cross-stay memory could make relationship operational

Evidence only

Contribution Orientation

Booking is framed as participation in local well-being

Evidence only

Contribution Disclosure

Mission and economic claims occur near payment consequence

Evidence only

Choice Through Consequence Clarity

Room, duration, policy and transport consequences must be understandable

Evidence only

The exact canonical names and confidence values remain controlled by candidate-patterns.md.

This file does not rewrite them.

39. Emerging and below-Candidate pressure

Case #21 also creates pressure around mechanisms that may remain Emerging, Partially Supported or architecture-level.

39.1 Escalating Participation Complexity

The journey includes more choices and dependencies than a restaurant reservation.

The test is whether complexity is made legible rather than simply transferred to the guest.

39.2 Contribution Disclosure

The reservation terms connect cancellation policy to community economics.

The relationship between explanation and pressure must be tested.

39.3 Relationship Proof

Preference and requirement continuity across the stay may provide stronger proof than relational language alone.

39.4 Human-guided participation

The Advisor is positioned to contain travel and stay complexity.

This may be an institution-specific expression rather than a new pattern.

39.5 No status inference

The presence of a mechanism in Fogo Island Inn does not prove:

recurrence,

effectiveness,

transferability,

or sufficient independence for promotion.

40. Contradiction hypotheses tested

Contradiction 1

Online Booking
≠
Self-Sufficient Booking

The online transaction may still require human itinerary planning.

Contradiction 2

Confirmed Reservation
≠
Confirmed Arrival

Room inventory and destination access are different systems.

Contradiction 3

Full-Board
≠
All Costs Included

Tax, transport, alcohol and selected experiences remain additional.

Contradiction 4

Non-Refundable
≠
No Future Value

Eligible early cancellation may preserve value as time-limited credit.

Contradiction 5

Credit
≠
Refund

The guest does not regain cash liquidity.

Contradiction 6

Rate Transparency
≠
Nightly Rate Visibility

The guest needs a total-stay view.

Contradiction 7

Mission Explanation
≠
Informed Financial Consent

Both are necessary and must remain distinct.

Contradiction 8

Human Assistance
≠
Fallback Support

Advisors participate in the core product pathway.

Contradiction 9

Requirement Collected
≠
Requirement Accepted

Dietary and mobility needs require acknowledgement.

Contradiction 10

Room Availability
≠
Journey Availability

External transport can constrain a usable booking.

Contradiction 11

Inclusive Service
≠
Unbounded Service

Inclusions still need precise limits.

Contradiction 12

Multiple Channels
≠
Fragmented Rules

Channel variety should not create policy drift.

Contradiction 13

Preference Memory
≠
Surveillance

Continuity must remain purposeful and consent-aware.

Contradiction 14

Remote Destination
≠
Guest-Owned Complexity

Remoteness does not excuse the institution from helping make the journey legible.

Contradiction 15

Transferable Credit
≠
Transferable Reservation

The public terms support the former, not necessarily the latter.

Contradiction 16

Booking Widget
≠
Reservation System

The complete system includes policies, people, travel and service memory.

41. New architecture directions

The following are architecture directions only.

They are not formal KHDS patterns.

41.1 Arrival-Ready Reservation

A booking state that distinguishes room confirmation from complete journey readiness.

41.2 Total-Stay Commitment

A price and consequence view spanning minimum nights, tax, transport and optional additions.

41.3 Consequence-First Terms

An ordering that makes amount, timing, refund status, credit status and deadlines legible before explanatory narrative.

41.4 Mission-Bounded Policy Explanation

Institutional purpose explains a rule without replacing plain transactional disclosure.

41.5 Booking-to-Itinerary Handoff

A structured transition from inventory confirmation to travel planning.

41.6 External Transport Feasibility Check

A pre-commitment prompt or human review that exposes access dependencies.

41.7 Room-Fit Comparison

Comparison organised around occupancy, layout, beds, accessibility and functional need.

41.8 Inclusive / Excluded Cost Boundary

A paired presentation of bundle value and material additional costs.

41.9 Multi-Day Requirement Memory

A requirement disclosed once and made operational across days, venues and service modes.

41.10 Advisor Escalation Gate

A clear point at which structured self-service transfers to a qualified person.

41.11 Booking Channel Continuity

Shared rules and guest state across direct digital, direct human and travel-advisor channels.

41.12 Guest-Specific Policy Deadline

Translation of a general cancellation window into the exact date relevant to the booking.

41.13 Degraded Booking Fallback

A useful reservation path when the external widget or page script is unavailable.

41.14 Requirement Acknowledgement State

A distinction between received, under review, accepted and unable to fulfil.

41.15 Contextual Exception Boundary

Clear separation between standard-stay policy and group or private-stay exceptions.

41.16 Reschedulable Commitment

A model that preserves value after disruption while making rate, category and expiry differences explicit.

These directions will require recurrence and cross-case comparison before any pattern proposal.

42. Provisional transfer findings

42.1 Manageable Commitment expands

Restaurant research often tested deposit, cancellation and participation requirements.

The hotel case adds:

multiple nights,

deferred balance,

tax,

room fit,

travel cost,

travel feasibility,

and prolonged service dependency.

The pattern transfers provisionally but becomes structurally larger.

42.2 Arrival begins before transport

Reservation choices determine whether the guest can later arrive.

Arrival therefore begins operationally during booking.

42.3 Human assistance can be core infrastructure

The Advisor is necessary where external systems and personal requirements cannot be safely reduced to form fields.

42.4 Relationship proof can be longitudinal

In a restaurant, proof may occur through one service journey.

In a hotel, it can occur through continuity from reservation to departure.

42.5 Story can enter legal space

The Inn embeds its social-business rationale in reservation terms.

This increases worldview coherence and consent risk at the same time.

42.6 Inclusive pricing changes the decision unit

The guest is not purchasing a room alone.

The reservation represents a bundle of accommodation, food, guidance, services and activities.

42.7 No transfer validation yet

One institutional case cannot establish sector transfer.

These findings remain provisional until compared with other hotel and hospitality-institution cases.

43. KHDS design opportunities

These opportunities are derived from the evidence.

They are not claims about current implementation.

43.1 Before date selection

show the three-night minimum,

show the typical operating season,

disclose that transport is additional,

and provide an Advisor route.

43.2 During room selection

compare functional differences,

show occupancy clearly,

distinguish shared from room-specific benefits,

and expose accessibility support before commitment.

43.3 During price interpretation

calculate the stay total,

include HST in the commitment view,

identify the deposit due now,

identify the balance due later,

and keep exclusions adjacent to inclusions.

43.4 Before payment

show the cancellation deadline as a date,

distinguish refund from credit,

show credit expiry,

show transferability,

and explain the 30-day restriction.

43.5 For personal requirements

separate preferences from requirements,

allow early disclosure,

route complex needs to a person,

and require acknowledgement before irreversible commitment where fit is uncertain.

43.6 After payment

distinguish room confirmation from journey readiness,

state the remaining balance,

show the next planning action,

and begin the Advisor handoff.

43.7 During disruption

distinguish Inn, guest and transport-provider responsibility,

explain credit and rescheduling conditions,

and preserve a verified contact route.

44. Falsification programme

The following tests should be conducted before stronger reservation conclusions are made.

F01 — Live availability test

Test multiple date ranges across the published operating season.

Would falsify: the assumption that public date selection reliably reflects usable inventory.

F02 — Minimum-stay error test

Attempt valid and invalid two-, three- and four-night searches.

Would falsify: the assumption that rule and recommendation are clearly distinguished.

F03 — Solo-pricing test

Compare otherwise identical one-guest and two-guest searches.

Would falsify: the assumption that the published CAD $300 nightly adjustment is visible and automatic.

F04 — Tax-timing test

Observe when 15% HST first appears.

Would falsify: the assumption that total financial commitment is visible before payment.

F05 — Deposit-calculation test

Inspect the exact amount due at confirmation.

Would falsify: the assumption that the 50% basis is unambiguous.

F06 — Cancellation-comprehension test

Ask participants to explain refund, credit, expiry and late-cancellation rules in their own words.

Would falsify: the assumption that published policy produces informed consent.

F07 — Room-comparison test

Ask guests with different functional requirements to select a suitable room.

Would falsify: the assumption that room pages support fit rather than image preference alone.

F08 — Child-policy test

Test ordinary family and full-Inn group scenarios.

Would falsify: the assumption that contextual age exceptions remain clear.

F09 — Accessibility-before-payment test

Trace a booking where room or transport fit requires confirmation.

Would falsify: the assumption that irreversible commitment can be safely delayed until capability is known.

F10 — Dietary-acknowledgement test

Submit a material dietary requirement and trace its acknowledgement across pre-arrival and service teams.

Would falsify: the assumption that disclosure becomes cross-stay memory.

F11 — Transport-feasibility test

Compare room dates with practical flight, ground and ferry connections.

Would falsify: the assumption that available lodging dates are operationally usable.

F12 — Advisor-handoff test

Complete an online reservation and inspect the transition into itinerary support.

Would falsify: the assumption that digital and human systems form one journey.

F13 — Cross-channel policy test

Request equivalent information online, by telephone and through a travel advisor.

Would falsify: the assumption that rules remain consistent.

F14 — Widget-disabled test

Open the homepage with the external booking script blocked.

Would falsify: the assumption that Reserve actions degrade to a useful and truthful path.

F15 — Keyboard test

Complete booking stages using only a keyboard.

Would falsify: the assumption that the widget supports non-pointer interaction.

F16 — Screen-reader test

Inspect field labels, validation, room comparison, policy acceptance and payment feedback.

Would falsify: the assumption that reservation is perceivable and operable with assistive technology.

F17 — Mobile interruption test

Interrupt a mobile booking and attempt to resume.

Would falsify: the assumption that high-value commitment survives common interruption.

F18 — Payment-failure test

Use a safe test environment to inspect declined-payment recovery.

Would falsify: the assumption that the guest can determine charge and inventory state.

F19 — Confirmation-content test

Inspect a real confirmation for dates, room, payment, deadline, requirements, travel and next action.

Would falsify: the assumption that confirmation accurately bounds what is secured.

F20 — Modification test

Request a pre-deadline date, room or occupancy change.

Would falsify: the assumption that modification consequences are understandable.

F21 — Force-majeure scenario test

Model disruption caused by Inn closure, ferry interruption and guest travel failure.

Would falsify: the assumption that responsibility and remedy remain distinguishable.

F22 — Credit-use test

Trace how an early-cancellation credit is valued, transferred, rebooked and expired.

Would falsify: the assumption that credit value remains practically usable.

F23 — Mission-and-consent test

Compare comprehension when consequence terms appear before and after mission rationale.

Would falsify: the assumption that narrative does not dilute financial understanding.

F24 — Source-consistency test

Compare travel duration, pricing, season, policies and contacts across all official surfaces.

Would falsify: the assumption that distributed reservation guidance remains synchronised.

F25 — Privacy-boundary test

Map which systems receive payment, dietary, accessibility and travel information.

Would falsify: the assumption that data use is proportionate and transparent.

F26 — Rate-comparison test

Ask participants to compare Fogo Island Inn with a room-only hotel using total included value and total excluded cost.

Would falsify: the assumption that the public rate architecture permits fair comparison.

F27 — Time-to-help test

Measure the time between a complex booking question and qualified human response.

Would falsify: the assumption that human assistance is available at the decision point where it is needed.

F28 — Requirement-change test

Update a material need after booking and trace propagation.

Would falsify: the assumption that multi-day service memory remains current.

45. Evidence gaps

The public evidence does not expose:

complete booking-widget screens,

live room inventory,

rate results for specific dates,

currency-conversion treatment,

exact deposit calculation,

payment methods,

payment-error states,

timeout behaviour,

inventory-hold duration,

abandoned-booking recovery,

booking-confirmation content,

balance reminders,

guest portal functions,

self-service modification,

refund-processing workflow,

credit records,

travel-advisor record exchange,

response times,

accessibility-review workflow,

dietary acknowledgement,

preference propagation,

staff service systems,

or real guest outcomes.

These gaps prevent conclusions about execution quality.

46. Source ledger

R01 — Fogo Island Inn homepage

URL: https://fogoislandinn.ca/
Use: Reserve actions, date-selection action, public booking-script integration, institutional proposition and contact routes
Authority: official institution
Evidence type: published page and delivered HTML
Boundary: code structure does not prove widget performance or guest outcome

R02 — Reservation Terms and Conditions

URL: https://fogoislandinn.ca/reservation-terms-and-conditions/
Effective date stated on page: 2025-12-01
Use: deposit, confirmation, final balance, tax, cancellation, credit, transferability, insurance, donation option and force majeure
Authority: official institution
Evidence type: current published policy
Boundary: policy publication does not prove comprehension, enforcement consistency or legal interpretation

R03 — Rates & Inclusions

URL: https://fogoislandinn.ca/your-stay/rates-and-inclusions/
Use: full-board scope, inclusions, exclusions, tax, rate basis, occupancy, solo adjustment, child age and minimum stay
Authority: official institution
Evidence type: current published commercial information
Boundary: live date-specific price and availability were not tested

R04 — Frequently Asked Questions

URL: https://fogoislandinn.ca/frequently-asked-questions/
Use: booking routes, minimum stay, cancellation summary, family policy, accessibility route, dietary disclosure, group route and property scale
Authority: official institution
Evidence type: current published summary
Boundary: FAQ summaries defer to fuller terms; wording may drift between pages

R05 — Getting Here

URL: https://fogoislandinn.ca/destination/getting-here/
Use: gateway airport, road and ferry sequence, chauffeured transfer, rental-car route, charter route and Advisor support
Authority: official institution
Evidence type: current published travel guidance
Boundary: schedules, prices, duration and transport availability are time-sensitive

R06 — Rooms & Suites

URL: https://fogoislandinn.ca/our-inn/rooms-suites/
Use: room inventory, category comparison and public room-selection routes
Authority: official institution
Evidence type: product information
Boundary: public categories do not establish live inventory

R07 — Fogo Island Loft Suite

URL: https://fogoislandinn.ca/our-inn/rooms-suites/fogo-island-loft-suite/
Use: example room size, occupancy, bed and amenity detail; observed homepage Reserve fallback destination
Authority: official institution
Evidence type: room-product information and HTML observation
Boundary: one room page does not represent every category

R08 — Contact

URL: https://fogoislandinn.ca/contact/
Use: reservations, Advisor and general-enquiry routes
Authority: official institution
Evidence type: contact information
Boundary: contact availability does not establish response or resolution quality

R09 — Travel Advisors

URL: https://fogoislandinn.ca/travel-advisors/
Use: preferred-advisor pathway and trade relationship
Authority: official institution
Evidence type: channel information
Boundary: public page does not expose booking-record continuity

R10 — Celebrations & Retreats

URL: https://fogoislandinn.ca/your-stay/celebrations-retreats/
Use: group, retreat, celebration and private-stay route
Authority: official institution
Evidence type: group proposition
Boundary: enquiry-led availability, price and terms are not public

R11 — Privacy Policy

URL: https://fogoislandinn.ca/privacy-policy/
Use: public privacy route associated with reservation and contact
Authority: official institution
Evidence type: policy availability
Boundary: no privacy, security or legal-compliance audit was performed

47. Evidence conflicts and time-sensitive facts

47.1 Gander-to-ferry duration

The Getting Here page and FAQ have presented different approximate drive durations.

The discrepancy is preserved.

No preferred figure is declared in this file.

47.2 Transfer price

The published chauffeured-transfer price is recorded with its review date.

It must not become a permanent pattern definition or timeless project fact.

47.3 Operating season

The FAQ uses a typical opening window.

Actual dates remain availability-dependent.

47.4 Dynamic rate

No universal room price is recorded.

Live rates vary by date, room, occupancy and potentially offer.

47.5 Current terms

The terms page identifies an effective date of December 1, 2025.

Future research must confirm whether the page has changed.

47.6 Interface implementation

The Namastay integration and anchor behaviour are timestamped code observations.

They may change without a policy change.

48. Explicit non-findings

This file does not find that:

the online booking portal is effective,

the booking portal is accessible,

the widget always loads,

the widget is secure or insecure,

room inventory is accurate,

the lowest or best rate is available online,

the guest understands the total price,

the guest understands the cancellation policy,

the mission narrative improves consent,

the mission narrative coerces the guest,

the deposit policy is legally valid in every guest jurisdiction,

travel insurance will cover cancellation,

the published transfer will be available,

the ferry will operate,

an Advisor will respond within a particular period,

a preferred travel advisor receives the same information,

a mobility requirement can be met,

a dietary requirement can be met,

a disclosed need reaches every service point,

a room confirmation makes travel viable,

a credit can purchase an equivalent future stay,

a guest can self-modify a reservation,

or a public reservation produces a successful stay.

Those conclusions require evidence beyond public-page review.

49. Reservation finding matrix

Research issue

Public mechanism

KHDS interpretation

Confidence at this stage

Booking access

Online, Advisor and travel-advisor routes

Multi-channel reservation

High that routes are published; unknown outcome

Minimum duration

Three-night minimum; four recommended

Rule/guidance separation

High published-fact confidence

Room fit

Category pages plus Advisor contact

Room-Fit Comparison pressure

Medium architecture confidence

Price scope

Full-board inclusions and exclusions

Total-Stay Commitment

High mechanism confidence

Deposit

50% at confirmation

Binding-commitment threshold

High published-fact confidence

Balance

50% plus tax due 30 days before arrival

Deferred second threshold

High published-fact confidence

Cancellation

Early credit; late no credit

Reschedulable but illiquid value

High policy confidence

Mission rationale

Community-economic explanation in terms

Mission-Bounded Policy Explanation

High placement confidence; unknown guest effect

Travel

Advisor support and separate paid access

Arrival-Ready Reservation

High dependency confidence

Dietary needs

Disclosure requested at booking

Multi-Day Requirement Memory

Medium architecture confidence

Mobility needs

Direct Advisor contact

Advisor Escalation Gate

Medium architecture confidence

Confirmation

Defined by deposit payment

Commercial confirmation only

Medium inference confidence

Widget

Third-party SDK

Degraded Booking Fallback pressure

High code-observation confidence

No matrix row is a maturity decision.

50. Governance decision

The Reservation dimension contributes evidence to existing pattern pressure.

It does not justify:

promotion,

demotion,

confidence change,

validation,

Principle promotion,

registry addition,

pattern rename,

pattern merge,

or Candidate-count change.

Historical canonical baseline at this drafting stage — Post–SAME Café:

Measure

State

Completed independent restaurant cases

20

Completed hospitality-institution transfer cases

0

Track B validation cases

1

Candidate patterns

26

Candidate confidence — High

9

Candidate confidence — Medium-High

8

Candidate confidence — Medium

9

Emerging patterns

8

Partially Supported patterns

1

Validated patterns

0

Research-derived KHDS Principles

0

Case #21 remains in progress.

The reservation evidence must proceed through:

remaining institution dimensions,

knowledge extraction,

cross-case comparison,

canonical Candidate reconciliation,

and governance mirror reconciliation.

51. Historical drafting checkpoint — Reservation completion state

Case #21
Fogo Island Inn

README complete
Discovery complete at public-evidence level
Reservation complete at public-evidence level
Pre-arrival pending
Arrival pending
Stay pending
Dining pending
Departure pending
Atmosphere pending
Photography pending
Story pending
Knowledge extraction pending
Comparison pending
Canonical reconciliation pending

Research In Progress

52. Historical drafting checkpoint — Next file

The next file is:

khds/research/institutions/hotels/fogo-island-inn-newfoundland/pre-arrival.md

It will examine how a confirmed commercial reservation becomes an executable journey and prepared stay across:

Advisor contact,

transport selection,

flight alignment,

ground transfer,

ferry coordination,

arrival timing,

weather preparation,

luggage,

clothing,

dietary confirmation,

accessibility confirmation,

activity planning,

expectation-setting,

and disruption readiness.

The primary handoff question will be:

What must become true after payment but before travel for the guest, the Inn and the island-facing service system to be ready for one another?

53. Working conclusion

Fogo Island Inn demonstrates that a hotel reservation is not adequately described as the purchase of room inventory.

The public system asks the guest to commit to:

a remote place,

a minimum duration,

a particular room relationship,

an inclusive service bundle,

a substantial deposit,

a later balance,

a cancellation structure,

and a journey that the room rate does not include.

The public system also offers three forms of help:

structured online booking,

direct Guest Itinerary Advisors,

and preferred travel-advisor participation.

This produces the strongest reservation finding:

The Reservation Is Commercially Complete
When the Room and Deposit Are Confirmed.

The Reservation Is Operationally Complete
Only When the Guest Can Use It.

That distinction expands several restaurant-derived KHDS patterns.

Manageable Commitment becomes a system of:

price,

time,

policy,

suitability,

and route feasibility.

Layered Arrival begins before the guest travels.

Human Assistance becomes part of ordinary product delivery.

Relationship Proof can begin when one disclosure is remembered across a multi-day service system.

Story Through Hospitality Model reaches into the institution's financial terms.

That last transfer creates both coherence and risk.

The Inn's mission can explain why a deposit matters.

It cannot replace a guest's clear understanding of:

what is due,

what is non-refundable,

what becomes credit,

when that credit expires,

and what additional costs remain.

The strongest reservation boundary is therefore:

Meaningful Commitment
Requires More Than Meaningful Story.

It requires operational truth.

For this first hotel-transfer case, the provisional KHDS model is:

Desire
→
Qualification
→
Room Fit
→
Total Commitment
→
Consequence Consent
→
Need Acknowledgement
→
Journey Feasibility
→
Arrival-Ready Reservation

The public evidence strongly supports the need for this model.

It does not establish that every step is currently delivered, understood or effective.

That is why Case #21 remains research in progress and why the next dimension is pre-arrival.
<!-- KHDS {"caseNumber":46,"institutionName":"BC Ferries - Tsawwassen-Swartz Bay","slug":"bc-ferries-tsawwassen-swartz-bay","institutionType":"passenger ferry and terminal hospitality system","sector":"ferry-hospitality","canonicalPath":"khds/research/institutions/ferry-hospitality/bc-ferries-tsawwassen-swartz-bay/"} -->
# Knowledge Extraction

Public-evidence coverage: partial

## Case purpose

Case #46 tests whether a moving hospitality system requires active orchestration across passenger, optional vehicle, booking, terminal, sailing, vessel, capacity, accessibility and service states.

Primary falsification question:

How does a passenger ferry and terminal hospitality system maintain journey continuity when booking status, passenger role, vehicle type, check-in timing, terminal capacity, vessel assignment, deck capacity, accessibility needs, onboard services and sailing disruption can change independently throughout one crossing?

## Core institutional mechanism

The strongest Case #46 mechanism is:

**Sailing-State Continuity Across Passenger, Vehicle, Terminal and Vessel States**

One travel party can contain simultaneous states such as:

- booked passenger;
- booked vehicle;
- drive-up vehicle;
- foot passenger;
- checked-in traveller;
- boarded traveller;
- loading-dock / lane state;
- deck-position state;
- accessibility state;
- onboard service state;
- arrival state;
- post-travel recovery state.

These states do not automatically activate together.

## Primary extracted boundary

The strongest Case #46 boundary is:

Journey State
!=
Every Local Mobility / Service State.

This is supported by:

- scheduled sailing without guaranteed live capacity; [S1][S10]
- booking without check-in; [S4][S5][S6][S7]
- check-in without boarding; [S4]
- boarding without equivalent onboard state; [S5][S11][S12][S15]
- vessel arrival without customer journey closure. [S17][S20]

The public evidence establishes structural separation.

It does not establish the internal system used to coordinate these states.

## Journey-state decomposition

A useful Case #46 decomposition is:

Route Discovery
→ Booking
→ Pre-Arrival Monitoring
→ Terminal Arrival
→ Check-In
→ Queue / Loading
→ Vessel / Deck Assignment
→ Onboard Passage
→ Dining / Amenity State
→ Vessel Arrival
→ Unloading
→ Terminal Exit
→ Post-Travel Recovery if needed.

Therefore:

Booking Held
!=
Journey Operationally Ready.

And:

Vessel Arrived
!=
Customer Journey Fully Closed.

## Passenger / vehicle extraction

Foot passengers and vehicles consume different forms of capacity. [S1][S2][S10]

Therefore:

Passenger Capacity
!=
Vehicle Deck Capacity.

And:

One Travel Party
!=
One Capacity Unit.

## Booking extraction

Bookings are conditional on check-in timing and operating rules. [S5][S6][S7]

Therefore:

Valid Booking
!=
Reserved Priority in Every Arrival State.

Unused reservation capacity can return to the drive-up pool. [S1][S10]

Therefore:

Booked Capacity
!=
Permanently Locked Capacity.

## Time-window extraction

The booking check-in window is part of entitlement.

Therefore:

Booking Validity
+
Time State
=
Boarding Priority State.

This makes time an operational entitlement variable.

## Terminal extraction

Physical presence at the terminal does not equal check-in or boarding. [S3][S4][S5]

Therefore:

Terminal Presence
!=
Sailing Entitlement Activated.

## Capacity extraction

Current Conditions can distinguish reservations not yet checked in, checked-in vehicles and available vehicle deck space. [S1][S10]

Therefore:

Reserved State
!=
Checked-In State
!=
Remaining Capacity State.

This is one of the strongest public state decompositions in Case #46.

## Vessel extraction

The route can use different vessels with different local amenity and hospitality states. [S11][S12][S20]

Therefore:

Same Route
!=
Same Vessel.

And:

Route Entitlement
!=
Every Vessel Amenity Entitlement.

## Deck-position extraction

Vehicle deck placement changes passenger rules and can affect accessibility. [S5][S15]

Therefore:

Vehicle Boarded
!=
Equivalent Passenger Experience.

## Accessibility extraction

Elevator-adjacent parking is limited, and if essential accessible positioning is unavailable, the customer may need a later sailing. [S15]

Therefore:

Accessibility Requirement
Can Change
Sailing Outcome.

And:

Accessible Vessel
!=
Accessible Position Guaranteed.

## Safety-state extraction

Extreme weather or emergencies can change elevator access and ordinary passenger movement rules. [S11][S12][S15]

Therefore:

Normal Hospitality Entitlement
!=
Safety-State Entitlement.

## Stay / onboard extraction

Onboard passage supports multiple local use states:

- work;
- family;
- pet;
- dining;
- lounge;
- retail;
- viewing;
- transit. [S11][S12][S13]

Therefore:

Passenger Onboard
!=
One Uniform Use State.

## Dining extraction

Food and lounge options can depend on vessel and sailing. [S13][S14][S16]

Therefore:

Same Route
!=
Same Dining Product.

And:

Sailing Booked
!=
Every Food Outlet Available.

## Departure extraction

Arrival, unloading, terminal exit and post-travel recovery are separate states. [S15][S17][S18][S19][S20]

Therefore:

Vessel Arrived
!=
Passenger Journey Complete.

And:

Operational Sailing Closure
!=
Customer Journey Closure.

## Recovery-location extraction

Onboard lost property can be routed to the vessel's home terminal. [S17]

Therefore:

Problem Discovery Location
!=
Recovery Owner Location Automatically.

This is strong pressure toward Multi-Owner Recovery / Responsibility Continuity.

## Atmosphere extraction

The journey spans terminals, queues, vehicle decks, passenger spaces, dining areas, changing coastal views and destination terminals. [S5][S6][S7][S11][S12][S13]

Therefore:

Hospitality Place
!=
Fixed Geographic Space.

And:

Atmospheric Continuity
!=
One Physical Space.

## Photography extraction

BC Ferries combines curated media imagery with operational visual sources such as webcams and ferry tracking. [S26][S29][S30]

Therefore:

Public Image
Can Be
Operational Evidence.

But:

Visual Simplicity
!=
Operational Simplicity.

## Story extraction

BC Ferries frames itself around connection, community, lifeline service and end-to-end customer experience. [S21][S23][S27][S31]

Therefore:

BC Ferries Story
!=
Marine Vehicle Transport Story Only.

But:

Seamless Customer Story
!=
Simple Operating Architecture.

## Mobility-Coupled Hospitality Architecture

Case #46 introduces or strengthens the non-canonical direction:

**Mobility-Coupled Hospitality Architecture**

The premise is:

A hospitality journey can depend on synchronized state across a moving transport asset, the passenger, an optional vehicle, terminal locations, capacity, time and service availability.

A possible conceptual structure is:

Journey State
→ Mobility Asset State
→ Capacity State
→ Local Service State

while:

Narrative Journey Unity
!=
Operational State Unity.

This remains non-canonical.

## Journey-State / Service-State Separation

Case #46 provides strong directional pressure because:

- schedule does not equal current state;
- booking does not equal check-in;
- check-in does not equal boarding;
- boarded does not equal equivalent onboard service state;
- vessel arrival does not equal full journey closure.

Therefore:

Journey State
!=
Every Service State.

This remains non-canonical.

## Entitlement-Aware Hospitality

Case #46 materially broadens the concept.

Entitlement may depend on:

booking
+
time window
+
passenger mode
+
vehicle type
+
queue position
+
capacity
+
deck state
+
accessibility need
+
vessel state
+
safety state.

Therefore:

Entitlement-Aware Hospitality
!=
Ticket-Aware Hospitality Only.

## Multi-Owner Recovery / Responsibility Continuity

Case #46 exposes multiple service owners or responsibility domains including:

- booking/customer systems;
- terminal staff;
- vessel crew;
- food/retail;
- customer care;
- independently operated parking;
- onward transport;
- lost-property and claims processes. [S17][S18][S19][S31]

Therefore:

One Ferry Journey
!=
One Recovery Owner Automatically.

The public evidence establishes role separation.

It does not establish recovery performance.

## Nested Hospitality Dependency

Case #46 contains nested relationships such as:

- vehicle inside passenger journey;
- deck position inside vehicle boarding;
- accessibility support inside loading allocation;
- dining state inside vessel assignment;
- post-travel recovery inside journey closure.

Therefore:

Ferry Hospitality
!=
Flat Service Structure.

Nested Hospitality Dependency remains non-canonical.

## Commercial Journey Economics

Case #46 contains multiple commercial states including:

- passenger fare;
- vehicle fare;
- fare/booking product;
- onboard dining;
- retail;
- lounge spend;
- parking;
- cancellation/change rules;
- claims and recovery costs.

Therefore:

One Ferry Journey Revenue
!=
One Transaction.

And:

Capacity / Timing State
Can Create
Commercial State Change.

The public record does not establish:

- traveller-level margin;
- service-state revenue;
- missed-check-in cost;
- accessibility-deferral cost;
- onboard-spend attribution;
- disruption recovery economics;
- post-travel claims economics.

## Cross-case comparison pressure

Case #46 should be compared with:

- Case #38: luxury trains;
- Case #40: airport hospitality;
- Case #41: journey handoff / recovery;
- Case #43: destination orchestration;
- Case #45: event-role orchestration.

The cross-case question becomes:

Does hospitality require an orchestration layer whenever a guest journey is physically mobile and depends on synchronized transport-asset, capacity, location and service states?

Case #46 adds mobility-coupled state dependency to the comparison set.

## Strongest competing explanation

Case #46 can still be explained as ordinary ferry operations with standard booking, check-in, loading and vessel procedures.

A stronger architecture interpretation requires evidence that state mismatches materially affect:

- access;
- timing;
- continuity;
- accessibility;
- recovery;
- revenue;
- passenger experience.

## Falsification requirements

### Mobility-Coupled Hospitality Architecture

Would weaken if transport-asset state rarely affects hospitality access or service experience.

### Journey-State / Service-State Separation

Would weaken if one valid journey state reliably activates all relevant local services.

### Entitlement-Aware Hospitality

Would weaken if a valid ticket or booking is sufficient regardless of check-in timing, vehicle state, capacity, deck state or accessibility need.

### Multi-Owner Responsibility Continuity

Would weaken if one institution consistently owns all customer recovery.

### Nested Hospitality Dependency

Would weaken if passenger, vehicle, deck, accessibility and amenity states do not materially depend on one another.

### Institutional Journey Economics

Would weaken as an architecture concern if state complexity has no meaningful commercial consequences.

No such full operating test has been performed.

## Contradiction record

### Scheduled sailing without stable real-time capacity

Schedule and live capacity are separate states.

### Booking without check-in

Reservation and terminal redemption differ.

### Valid booking without active booking priority

Time-window state can override reservation priority.

### Passenger capacity without vehicle capacity

Capacity is not one-dimensional.

### Boarding without equivalent onboard state

Vessel, deck and accessibility states remain local.

### Accessible vessel without guaranteed accessible position

Facility capability and loading allocation differ.

### Same route without same dining product

Vessel assignment affects amenities.

### Vessel arrival without customer journey closure

Physical asset arrival and guest closure differ.

### One lost-property problem without one obvious location owner

Recovery can cross terminal and vessel boundaries.

### Seamless customer story without simple operating architecture

Narrative continuity compresses complex state transitions.

## Governance decision

Decision at Case #46 extraction stage:

**No formal governance movement.**

Canonical totals remain unchanged:

Candidate: 26
Emerging: 8
Partially Supported: 1
Validated: 0
Principles: 0

Candidate confidence remains unchanged:

High: 9
Medium-High: 8
Medium: 9

Case #46 produces:

- 0 Candidate promotions;
- 0 Emerging promotions;
- 0 confidence increases;
- 0 confidence decreases;
- 0 demotions;
- 0 renames;
- 0 merges;
- 0 Validated promotions;
- 0 research-derived Principle promotions;
- 0 newly counted formal patterns.

## Why there is no formal movement

Case #46 exposes strong mobility, capacity, entitlement and closure-state boundaries.

But the evidence remains:

- public;
- substantially first-party;
- incomplete on internal state architecture;
- incomplete on boarding/load algorithms;
- incomplete on recovery outcomes;
- incomplete on service reliability;
- incomplete on journey-level economics.

Therefore:

State Coupling
!=
Mobility-Coupled Architecture Proven.

And:

Journey Brand Unity
!=
Integrated Operating Architecture Proven.

The maturity threshold remains intact.

## Evidence limitations

Case #46 does not establish:

- unified passenger/vehicle identity architecture;
- real-time check-in reconciliation latency;
- deck-allocation algorithm;
- passenger-space occupancy;
- accessibility deferral frequency;
- amenity uptime by sailing;
- disruption recovery performance;
- unloading performance;
- terminal egress performance;
- lost-property recovery rate;
- traveller-level profitability.

The public record can establish:

- booking/check-in separation;
- capacity separation;
- vessel-local service state;
- accessibility/capacity interaction;
- terminal/vessel journey stages;
- post-travel recovery pathways;
- institutional story and mission.

It cannot establish how reliably those mechanisms operate.

## Source record

Case #46 source evidence is maintained in:

- `sources.json`
- `coverage.json`

Initial source review date:

2026-11-11

Schedules, vessels, services, accessibility procedures and terminal conditions can change.

Current operational use requires a fresh evidence check.

## Case #46 knowledge decision

BC Ferries' Tsawwassen–Swartz Bay route provides meaningful public-evidence pressure around hospitality as a mobile, capacity-coupled operating system rather than a simple transport booking.

Its strongest contribution is:

One guest journey can depend on synchronized booking, passenger, optional vehicle, terminal, vessel, deck, accessibility, service and recovery states.

The strongest extracted boundaries are:

Scheduled Sailing != Current Sailing State.

Passenger Capacity != Vehicle Deck Capacity.

Vehicle Deck Capacity != Advance-Bookable Vehicle Capacity.

Vehicle Booking Held != Boarding Completed.

Valid Booking + Wrong Check-In State != Reserved Boarding Priority.

Passenger Entitlement != Vehicle Entitlement.

Arrival at Terminal != Checked In.

Checked In != Boarded.

Reserved Vehicle State != Checked-In Vehicle State != Available Deck Space.

Boarded != Equivalent Onboard State.

Accessible Vessel != Elevator-Adjacent Vehicle Position Guaranteed.

Valid Booking + Accessibility Requirement != Current Sailing Guaranteed.

Accessible Vessel != Every Accessible Feature Available in Every Operating State.

Same Route != Same Dining Product.

Vessel Arrived != Passenger Journey Complete.

Location Where Problem Is Discovered != Location Owning Recovery Automatically.

Operational Sailing Closure != Customer Journey Closure.

Hospitality Place != Fixed Geographic Space.

Visual Simplicity != Operational Simplicity.

Seamless Customer Story != Simple Operating Architecture.

Case #46 provides directional pressure around Mobility-Coupled Hospitality Architecture, Journey-State / Service-State Separation, Entitlement-Aware Hospitality, Multi-Owner Recovery / Responsibility Continuity and Nested Hospitality Dependency.

It does not justify formal pattern or confidence movement.

## Current status

Case #46 has reached dossier knowledge-extraction stage at public-evidence scope.

Administrative review has not occurred.

Publication has not occurred.

No formal governance movement is authorized by this file.

Case #46 does not trigger a synthesis gate.

The next scheduled synthesis gate remains after Case #50.

<!-- KHDS {"caseNumber":46,"institutionName":"BC Ferries - Tsawwassen-Swartz Bay","slug":"bc-ferries-tsawwassen-swartz-bay","institutionType":"passenger ferry and terminal hospitality system","sector":"ferry-hospitality","canonicalPath":"khds/research/institutions/ferry-hospitality/bc-ferries-tsawwassen-swartz-bay/"} -->
# BC Ferries — Tsawwassen–Swartz Bay — KHDS Case #46

Public-evidence coverage: partial

## Institution

BC Ferries' Tsawwassen–Swartz Bay service is being studied as a passenger ferry and terminal hospitality system in which one crossing can depend on passenger, booking, vehicle, terminal, sailing, vessel, deck-capacity, accessibility, onboard-service and disruption states that do not necessarily change together.

The case includes:

- Tsawwassen terminal;
- Swartz Bay terminal;
- booked and drive-up vehicle travel;
- foot-passenger travel;
- vehicle and passenger check-in;
- live Current Conditions;
- sailing and vessel assignment;
- Spirit-class passenger environments;
- onboard dining and retail;
- accessibility support;
- disembarkation and post-travel recovery. [S1]-[S20]

Case #46 tests whether mobility-linked hospitality requires continuity across several independently changing operating states.

## Research date

Initial public-evidence research: 2026-11-11

## Research question

How does a passenger ferry and terminal hospitality system maintain journey continuity when booking status, passenger role, vehicle type, check-in timing, terminal capacity, vessel assignment, deck capacity, accessibility needs, onboard services and sailing disruption can change independently throughout one crossing?

## Competing explanation

The strongest competing explanation is ordinary ferry operations:

schedule
+ booking
+ check-in
+ vehicle loading
+ passenger boarding
+ sailing
+ onboard service
+ unloading.

Under that explanation, BC Ferries is primarily a transportation operator with normal reservation and terminal procedures.

Case #46 therefore tests whether the coupling among transport asset, passenger, optional vehicle, timing, capacity and service state creates hospitality continuity and recovery problems beyond ordinary transportation administration.

## Evidence base

The current source ledger contains thirty-two public sources. [S1]-[S32]

The source set documents:

- Current Conditions and vehicle-space estimation; [S1][S10][S28]
- capacity allocation between bookings and drive-up traffic; [S2]
- booking, check-in and boarding rules; [S3][S4][S5][S8]
- Tsawwassen and Swartz Bay terminal states; [S6][S7][S18][S19]
- vessel-local amenities and accessibility; [S11][S12][S15]
- onboard food, lounge and retail; [S13][S14][S16]
- post-travel lost-property and claims processes; [S17]
- live sailing and vessel-assignment state; [S20][S29][S30]
- institutional mission, scale, community role and public-service framing; [S21][S22][S23][S25][S27][S32]
- First Nations relationships and place identity; [S24]
- media and visual-story infrastructure; [S26]
- whole-journey Customer Experience framing. [S31]

See [sources.json](sources.json) for the source ledger and [coverage.json](coverage.json) for dimension-level coverage.

## Initial findings

### Schedule and current operating state differ

BC Ferries publishes schedule information separately from live Current Conditions. [S1][S9][S10]

Therefore:

Scheduled Sailing != Current Sailing State.

### Passenger and vehicle capacity are different

Foot passengers are excluded from vehicle deck-space calculations. [S1][S10]

Therefore:

Passenger Capacity != Vehicle Deck Capacity.

### Bookable vehicle capacity is not total vehicle capacity

BC Ferries allocates some deck capacity to advance bookings and some to drive-up traffic. [S2]

Therefore:

Vehicle Deck Capacity != Advance-Bookable Vehicle Capacity.

### Booking does not complete the journey entitlement

Booked travellers must still arrive inside defined check-in windows. [S5][S6][S7]

Therefore:

Vehicle Booking Held != Boarding Completed.

### Time changes booking priority

Arriving outside the booking check-in window can cause reserved treatment to be lost and travel to revert to order-of-arrival logic. [S6][S7]

Therefore:

Valid Booking
+
Wrong Check-In State
!=
Reserved Boarding Priority.

### Booking inventory can return to the drive-up pool

Unused booked vehicle space can be released after check-in closes. [S1][S10]

Therefore:

Booked Capacity
!=
Permanently Locked Capacity Until Departure.

### Passenger and vehicle entitlements differ

A valid passenger booking does not automatically imply a vehicle can be added if vehicle capacity is unavailable. [S8]

Therefore:

Passenger Entitlement != Vehicle Entitlement.

### Terminal arrival and check-in differ

A traveller can be physically present at the terminal without being checked in. [S3][S4][S5]

Therefore:

Arrival at Terminal != Checked In.

### Check-in and boarding differ

Foot passengers can have a boarding pass before actual boarding. [S4]

Therefore:

Checked In != Boarded.

And:

Boarding Pass Issued != Boarded Vessel.

### Reservation state, checked-in state and remaining capacity differ

Current Conditions can separately represent reservations not checked in, checked-in vehicles and remaining vehicle space. [S1]

Therefore:

Reserved Vehicle State
!=
Checked-In Vehicle State
!=
Available Deck Space.

### Boarding does not normalize the onboard experience

Vessel assignment, vehicle-deck position, accessibility state and amenity availability can all differ. [S5][S11][S12][S15]

Therefore:

Boarded != Equivalent Onboard State.

### Accessibility can interact with capacity

Elevator-adjacent vehicle space is limited; if essential accessible positioning is unavailable, a traveller may need a later sailing. [S15]

Therefore:

Valid Booking
+
Accessibility Requirement
!=
Current Sailing Guaranteed.

### Accessible infrastructure can change with operating state

Elevators may be unavailable in extreme weather or emergency conditions. [S11][S12][S15]

Therefore:

Accessible Vessel
!=
Every Accessible Feature Available in Every Operating State.

### Route does not guarantee one dining product

Amenities differ by vessel and select sailing. [S13][S14][S16]

Therefore:

Same Route != Same Dining Product.

### Arrival does not equal journey closure

Vehicle unloading, accessibility sequencing, terminal exit and post-travel recovery can continue after the vessel arrives. [S15][S17][S18][S19][S20]

Therefore:

Vessel Arrived != Passenger Journey Complete.

### Lost-property recovery can cross location boundaries

Onboard lost items can be routed to the vessel's home terminal. [S17]

Therefore:

Location Where Problem Is Discovered
!=
Location Owning Recovery Automatically.

### The journey is publicly framed as connection

BC Ferries describes its mission in terms of connecting customers and communities to important people and places. [S21][S27]

Therefore:

BC Ferries Story != Marine Vehicle Transport Story Only.

### End-to-end customer experience is explicit

BC Ferries publicly describes a smooth and seamless end-to-end customer experience as a strategic objective. [S21]

Therefore:

Customer Experience != Onboard Service Only.

### Visual simplicity can hide operating complexity

Terminal webcams and ferry tracking make some operational state visible, while one coastal image can still visually compress multiple local system states. [S29][S30]

Therefore:

Visual Simplicity != Operational Simplicity.

## Working research mechanism

The strongest Case #46 mechanism is:

**Sailing-State Continuity Across Passenger, Vehicle, Terminal and Vessel States**

A single journey can contain independently changing states for:

- booking;
- passenger mode;
- vehicle type;
- check-in time;
- terminal queue;
- loading;
- deck position;
- vessel assignment;
- accessibility;
- onboard service;
- weather/safety;
- arrival;
- unloading;
- terminal exit;
- post-travel recovery.

This is a research mechanism only.

It is not a canonical KHDS pattern.

## Mobility-coupled hospitality test

Case #46 introduces a specific question:

Can one hospitality journey remain coherent when the guest is coupled to a moving transport asset, an optional vehicle, terminal states, time windows and capacity constraints?

The public evidence shows that:

- booking status and terminal check-in differ; [S4][S5][S6][S7]
- passenger and vehicle capacity differ; [S1][S2][S10]
- vessel assignment changes local hospitality state; [S11][S12][S13][S14]
- accessibility can depend on loading position and capacity; [S15]
- vessel arrival does not equal full customer closure. [S17][S20]

Therefore:

Journey State != Every Local Mobility / Service State.

This generates a non-canonical research direction around Mobility-Coupled Hospitality Architecture.

## Coverage

| Dimension | Current rating |
|---|---|
| [discovery](discovery.md) | partial |
| [reservation](reservation.md) | partial |
| [pre-arrival](pre-arrival.md) | partial |
| [arrival](arrival.md) | partial |
| [stay](stay.md) | partial |
| [dining](dining.md) | partial |
| [departure](departure.md) | partial |
| [atmosphere](atmosphere.md) | partial |
| [photography](photography.md) | partial |
| [story](story.md) | partial |

All ten dimensions remain public-evidence partial.

## Strongest boundaries under test

One Route Pair != One Directional Operating State

Scheduled Sailing != Current Sailing State

Foot-Passenger Booking Inventory != Total Foot-Passenger Capacity

Vehicle Deck Capacity != Advance-Bookable Vehicle Capacity

Passenger Capacity != Vehicle Deck Capacity

One Vehicle != One Identical Capacity Unit

Vehicle Booking Held != Boarding Completed

Valid Booking + Wrong Check-In State != Reserved Boarding Priority

Booked Capacity != Permanently Locked Capacity Until Departure

Foot-Passenger Booking Created != Boarding Pass Issued

Passenger Entitlement != Vehicle Entitlement

Visible Terminal Queue != True Remaining Vehicle Capacity

Capacity at Search Time != Capacity at Terminal Arrival

Arrival at Terminal != Checked In

Checked In != Boarded

Booking Exists != Booking Priority Active

Reserved Vehicle State != Checked-In Vehicle State != Available Deck Space

Passenger / Vehicle Ready != Sailing Ready Automatically

Same Route != Same Vessel

Boarded Sailing != Identical Onboard Hospitality Product

Accessible Vessel != Elevator-Adjacent Vehicle Position Guaranteed

Valid Booking + Accessibility Requirement != Current Sailing Guaranteed

Accessible Vessel != Every Accessible Feature Available in Every Operating State

Boarded != Equivalent Onboard State

Same Route != Same Dining Product

Sailing Booked != Every Food Outlet Available

Vessel Arrived != Passenger Journey Complete

Physical Departure != Guest-Service Relationship Necessarily Closed

Location Where Problem Is Discovered != Location Owning Recovery Automatically

Operational Sailing Closure != Customer Journey Closure

Ferry Journey != Transport Function Only

Atmospheric Continuity != One Physical Space

Visual Simplicity != Operational Simplicity

Customer Experience != Onboard Service Only

Narrative Journey Unity != Operational State Unity

Transport Ticket / Booking != Universal Journey Entitlement

Seamless Customer Story != Simple Operating Architecture

## Architecture pressure

Case #46 provides directional pressure toward:

- Journey-State / Service-State Separation;
- Entitlement-Aware Hospitality;
- Multi-Owner Recovery / Responsibility Continuity;
- Nested Hospitality Dependency;
- Mobility-Coupled Hospitality Architecture.

Mobility-Coupled Hospitality Architecture remains a non-canonical research direction.

No formal pattern movement is authorized by Case #46.

## Cross-case comparison direction

Case #46 should be compared especially with:

- Case #38 — luxury train / moving hospitality;
- Case #40 — airport hospitality;
- Case #41 — journey handoff and recovery;
- Case #43 — destination orchestration;
- Case #45 — event-role orchestration.

The new cross-case question is whether hospitality orchestration becomes more important when the hospitality asset itself moves and guest entitlement depends on synchronized passenger, optional vehicle, timing, capacity and transport-asset state.

Case #46 does not trigger a synthesis gate.

The next scheduled synthesis gate remains after Case #50.

## Commercial Journey Economics

Potential commercial layers include:

- passenger fare;
- vehicle fare;
- booking/fare product;
- onboard food;
- retail;
- differentiated lounge spend;
- parking;
- change/cancellation conditions;
- claims and recovery costs.

Therefore:

One Ferry Journey Revenue != One Transaction.

And:

Capacity / Timing State Can Create Commercial State Change.

The public record does not establish:

- traveller-level margin;
- revenue by service state;
- cost of missed check-in windows;
- cost of accessibility deferral;
- onboard spend attribution;
- disruption recovery cost;
- post-travel claims cost by sailing.

## Governance

Current KHDS governance totals remain unchanged:

Candidate: 26
Emerging: 8
Partially Supported: 1
Validated: 0
Principles: 0

Candidate confidence remains:

High: 9
Medium-High: 8
Medium: 9

Case #46 has not authorized:

- promotion;
- demotion;
- rename;
- merge;
- confidence change;
- validation;
- principle creation.

Case #46 is the sixth institution case in the #41-#50 research block.

The next formal synthesis gate is after Case #50.

## Evidence limitations

The current record does not establish:

- internal passenger/vehicle identity architecture;
- booking-to-terminal reconciliation latency;
- boarding sequence algorithm;
- deck-allocation algorithm;
- real-time passenger-space occupancy;
- accessibility deferral frequency;
- amenity uptime by vessel;
- onboard service-recovery performance;
- unloading performance by deck;
- terminal egress performance;
- lost-property recovery rates;
- disruption recovery economics.

Public evidence establishes state separation, capacity rules, terminal and vessel-local services, and post-travel recovery pathways.

It does not establish operational performance.

## Navigation

- [Discovery](discovery.md)
- [Reservation](reservation.md)
- [Pre-arrival](pre-arrival.md)
- [Arrival / Terminal Check-In & Boarding](arrival.md)
- [Stay / Onboard Passage](stay.md)
- [Dining](dining.md)
- [Departure / Disembarkation](departure.md)
- [Atmosphere](atmosphere.md)
- [Photography](photography.md)
- [Story](story.md)
- [Knowledge extraction](knowledge-extraction.md)
- [Evidence coverage](coverage.json)
- [Source ledger](sources.json)

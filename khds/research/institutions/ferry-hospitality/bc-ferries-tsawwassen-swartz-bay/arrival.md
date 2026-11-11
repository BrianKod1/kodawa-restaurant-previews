<!-- KHDS {"caseNumber":46,"institutionName":"BC Ferries - Tsawwassen-Swartz Bay","slug":"bc-ferries-tsawwassen-swartz-bay","institutionType":"passenger ferry and terminal hospitality system","sector":"ferry-hospitality","canonicalPath":"khds/research/institutions/ferry-hospitality/bc-ferries-tsawwassen-swartz-bay/"} -->
# Arrival / Terminal Check-In & Boarding

Public-evidence coverage: partial

## Research question

What changes operationally when the traveller reaches the terminal, and how are booking, passenger, vehicle, terminal, boarding-pass and vessel states converted into actual boarding?

## Terminal presence does not equal checked-in state

BC Ferries requires passengers and vehicles to check in at the terminal even when travel was booked in advance. [S3][S4][S5]

Therefore:

Arrival at Terminal != Checked In.

## Checked in does not equal boarded

Foot passengers redeem a booking or buy travel at the terminal, receive a boarding pass, proceed to the waiting area and have the pass collected when boarding begins. [S4]

Therefore:

Checked In != Boarded.

And:

Boarding Pass Issued != Boarded Vessel.

## Vehicle check-in uses booking identity

Booked vehicle travellers can check in using booking information such as the booking reference or associated phone number. [S5]

Therefore:

Booking Record Must Be Reconciled With Terminal Arrival State.

The public record does not reveal the internal reconciliation architecture.

## Booking priority can disappear at the terminal

At Tsawwassen and Swartz Bay, a booked traveller arriving outside the defined booking check-in window loses the booking's protected treatment and travel reverts to order-of-arrival logic. [S6][S7]

Therefore:

Booking Exists != Booking Priority Active.

This is a direct state transition triggered by time and terminal arrival.

## Drive-up vehicles join a different queue state

Without a booking, vehicles are processed based on arrival order and remaining capacity. [S5][S6][S7]

Therefore:

Terminal Queue Position Can Become Travel Entitlement Input.

## Current Conditions separates booked-not-checked-in from checked-in vehicles

The live route view can distinguish reservations not checked in, vehicles checked in and remaining available vehicle space. [S1]

Therefore:

Reserved Vehicle State != Checked-In Vehicle State != Available Deck Space.

This is one of the clearest state decompositions in Case #46.

## Foot passengers remain outside vehicle deck-space calculations

BC Ferries explicitly excludes foot passengers from vehicle deck-space estimates. [S1][S10]

Therefore:

Foot-Passenger Arrival != Vehicle Capacity Consumption.

## Boarding can change the passenger's physical-access rules

BC Ferries requires passengers on enclosed lower vehicle decks to leave their vehicles during the sailing. Vehicle placement can vary and upper-deck placement is not guaranteed. [S5]

Therefore:

Vehicle Boarded != Passenger May Remain With Vehicle in Every Deck State.

This couples vehicle placement to passenger experience.

## Terminal infrastructure is part of arrival hospitality

Tsawwassen and Swartz Bay publish waiting areas, washrooms, accessibility supports, food/retail and other terminal amenities. [S6][S7]

Therefore:

Waiting for Boarding != Operationally Empty Time.

The terminal becomes a temporary hospitality environment.

## Terminal parking can have independent ownership

At Swartz Bay, parking is independently operated and managed rather than directly by BC Ferries. [S7]

Therefore:

Terminal Journey != Single Service Owner.

This is early pressure toward Multi-Owner Recovery / Responsibility Continuity.

## Sailing state can remain separate from terminal check-in state

Current Conditions separately reports sailing status and processed vehicle-capacity state. [S1][S10]

Therefore:

Passenger / Vehicle Ready != Sailing Ready Automatically.

## Strongest arrival boundaries

1. terminal presence versus checked in;
2. checked in versus boarded;
3. boarding pass versus boarded vessel;
4. booking record versus terminal arrival state;
5. booking exists versus booking priority active;
6. terminal queue position versus irrelevant waiting order;
7. reserved vehicle versus checked-in vehicle versus available deck space;
8. foot-passenger arrival versus vehicle capacity consumption;
9. vehicle boarded versus passenger access to vehicle in every deck state;
10. waiting for boarding versus operationally empty time;
11. terminal journey versus single service owner;
12. passenger/vehicle ready versus sailing ready.

## Mobility-Coupled Hospitality pressure

Case #46 now exposes a coupled chain:

Booking State
+
Passenger State
+
Vehicle State
+
Terminal State
+
Sailing State
+
Vessel State
+
Capacity State.

For the journey to proceed smoothly, several of these states must align within a limited time window.

Therefore:

One Travel Intention != One Operational State.

This is directional evidence only.

## Competing explanation

A simpler explanation is standard ferry boarding procedure.

That remains plausible.

The stronger KHDS interpretation requires evidence that mismatches among passenger, vehicle, terminal, capacity and sailing states materially affect continuity or recovery.

## Evidence limitations

The public record does not establish:

- boarding sequence algorithms;
- terminal lane assignment logic;
- actual boarding wait times;
- check-in exception handling;
- passenger count reconciliation timing;
- vehicle loading optimization;
- recovery ownership when booking and terminal records disagree;
- frequency of vessel reassignment after check-in.

## Next evidence

Continue into Stay / Onboard Passage, Dining and Departure to determine how hospitality and entitlement change after the traveller and vehicle have successfully boarded.

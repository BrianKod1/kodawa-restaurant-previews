<!-- KHDS {"caseNumber":46,"institutionName":"BC Ferries - Tsawwassen-Swartz Bay","slug":"bc-ferries-tsawwassen-swartz-bay","institutionType":"passenger ferry and terminal hospitality system","sector":"ferry-hospitality","canonicalPath":"khds/research/institutions/ferry-hospitality/bc-ferries-tsawwassen-swartz-bay/"} -->
# Discovery

Public-evidence coverage: partial

## Research question

How does a traveller discover the correct journey when route, direction, sailing time, passenger type, vehicle type, booking availability, terminal conditions and onboard service state are not the same thing?

## Route discovery is directional

BC Ferries presents Vancouver (Tsawwassen) to Victoria (Swartz Bay) and Victoria (Swartz Bay) to Vancouver (Tsawwassen) as directional route states with their own current-conditions pages. [S1][S10]

Therefore:

One Route Pair != One Directional Operating State.

## Schedule discovery is not the same as live operating state

BC Ferries publishes schedules separately from Current Conditions. Current Conditions adds estimated vehicle space, terminal processing information and sailing status. [S1][S9][S10]

Therefore:

Scheduled Sailing != Current Sailing State.

And:

Published Departure Time != Real-Time Capacity State.

## Bookable travel exists for both vehicles and foot passengers

BC Ferries identifies Tsawwassen–Swartz Bay as a route where both vehicle and foot-passenger bookings are available. [S2][S4]

Therefore:

Passenger Journey != Vehicle Journey Automatically.

## Foot-passenger booking availability is not total passenger capacity

BC Ferries states that it limits the number of foot-passenger spaces available for advance booking on this route and that the absence of advance-bookable foot-passenger inventory does not necessarily mean the ferry has no foot-passenger space. [S4]

Therefore:

Foot-Passenger Booking Inventory != Total Foot-Passenger Capacity.

## Vehicle booking inventory is only part of vehicle deck capacity

BC Ferries allocates vehicle deck space between advance bookings and drive-up customers. On the Tsawwassen–Swartz Bay route, the percentage made available for advance booking can vary. [S2]

Therefore:

Vehicle Deck Capacity != Advance-Bookable Vehicle Capacity.

## Current Conditions introduces a near-term capacity view

Current Conditions estimates vehicle deck space after counting bookings and drive-up customers already processed through the terminal. [S1][S10]

Therefore:

Vehicle Capacity != Static Schedule Attribute.

It changes as bookings are redeemed and drive-up traffic is processed.

## Foot passengers do not consume vehicle deck space

BC Ferries explicitly excludes foot passengers from estimated vehicle deck-space calculations. [S1][S10]

Therefore:

Passenger Capacity != Vehicle Deck Capacity.

This is a central Case #46 distinction.

## Vehicle types can consume capacity differently

BC Ferries includes commercial vehicles and buses in mixed vehicle-deck calculations, while its vehicle-travel guidance notes that vehicle placement is affected by reservations and overheight traffic. [S1][S5]

Therefore:

One Vehicle != One Identical Capacity Unit.

## Terminal discovery is part of the journey

Tsawwassen and Swartz Bay have different physical locations, terminal services, transport links and local conditions. [S6][S7]

Therefore:

Route Selected != Correct Terminal Journey Fully Understood.

## Mobile discovery can combine multiple state views

The BC Ferries app allows travellers to view bookings, schedules and current conditions from one interface. [S9]

Therefore:

One Customer Interface Can Aggregate Multiple Operational States.

This establishes public information aggregation, not a unified backend architecture.

## Strongest discovery boundaries

1. one route pair versus one directional operating state;
2. schedule versus current sailing state;
3. published departure time versus real-time capacity;
4. passenger journey versus vehicle journey;
5. advance foot-passenger inventory versus total passenger capacity;
6. vehicle deck capacity versus advance-bookable capacity;
7. passenger capacity versus vehicle deck capacity;
8. one vehicle versus one identical capacity unit;
9. route selected versus terminal journey fully understood;
10. one interface versus one underlying operational state.

## Competing explanation

A simpler explanation is that ferry travel naturally requires separate schedules, vehicle capacity and terminal information.

That remains plausible.

The KHDS relevance becomes stronger if those separate states can diverge while the traveller still expects one continuous journey.

## Evidence limitations

The public record does not establish:

- how travellers choose between sailing times;
- how often customers misinterpret booking inventory as total capacity;
- how passenger and vehicle identities are linked internally;
- real-time occupancy of passenger spaces;
- conversion from route search to booking;
- cross-channel consistency between web, app and terminal systems.

## Next evidence

Inspect Reservation to determine what a booking actually secures and which passenger, vehicle, time and capacity states remain conditional.

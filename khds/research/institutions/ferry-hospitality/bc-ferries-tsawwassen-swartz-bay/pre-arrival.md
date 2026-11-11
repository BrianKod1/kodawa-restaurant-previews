<!-- KHDS {"caseNumber":46,"institutionName":"BC Ferries - Tsawwassen-Swartz Bay","slug":"bc-ferries-tsawwassen-swartz-bay","institutionType":"passenger ferry and terminal hospitality system","sector":"ferry-hospitality","canonicalPath":"khds/research/institutions/ferry-hospitality/bc-ferries-tsawwassen-swartz-bay/"} -->
# Pre-arrival

Public-evidence coverage: partial

## Research question

How does a traveller prepare for the crossing when scheduled departure, check-in window, terminal congestion, vehicle capacity, route direction and sailing status can all affect the eventual boarding outcome?

## Pre-arrival requires more than knowing the sailing time

BC Ferries publishes terminal-specific check-in rules in addition to sailing schedules. [S6][S7]

Therefore:

Sailing Time Known != Arrival Plan Complete.

## A booked traveller has a defined arrival window

For Tsawwassen–Swartz Bay bookings, BC Ferries requires arrival during the terminal booking check-in window. [S6][S7]

Therefore:

Early Arrival != Booking Honoured Automatically.

And:

Late Arrival != Booking Honoured Automatically.

The reservation entitlement is time-window dependent.

## Unbooked travellers face different planning logic

Without a booking, travel is based on order of arrival, subject to ticket-sales and check-in cutoffs and available sailing capacity. [S5][S6][S7]

Therefore:

Preferred Sailing != Expected Sailing for Drive-Up Travel.

## Current Conditions changes the pre-arrival information state

BC Ferries Current Conditions provides estimated vehicle space, bookings not yet checked in, vehicles checked in, terminal cameras and sailing status. [S1][S10]

Therefore:

Pre-Arrival Plan Can Change Without Schedule Change.

A sailing can remain scheduled while its capacity state changes.

## Estimated deck space incorporates booked customers not yet at terminal

BC Ferries explains that a terminal lot can appear empty while estimated space is limited because advance bookings are included in deck-space calculations. [S10]

Therefore:

Visible Terminal Queue != True Remaining Vehicle Capacity.

This is an important information-state boundary.

## Capacity becomes dynamic as check-in progresses

Estimated deck space changes as bookings and drive-up vehicles are processed. [S1][S10]

Therefore:

Capacity at Search Time != Capacity at Terminal Arrival.

## Pending booked capacity can be released

After booking check-in closes, unused reserved vehicle space can become available to drive-up customers. [S1][S10]

Therefore:

Drive-Up Capacity Before Cutoff != Drive-Up Capacity After Reservation Release.

This creates a time transition inside the sailing lifecycle.

## Vehicle characteristics affect pre-arrival planning

BC Ferries warns that vehicle placement depends on reservation and overheight traffic, and upper-deck placement cannot be guaranteed. [S5]

Therefore:

Vehicle Booked != Specific Deck Position Guaranteed.

## App and web tools support pre-arrival monitoring

BC Ferries provides booking, schedule and Current Conditions access through its app and website. [S9][S10]

Therefore:

Booking Confirmation != Final Pre-Arrival Information State.

Travellers are expected to continue checking operational information.

## Terminal conditions are locally distinct

Tsawwassen and Swartz Bay have their own addresses, transport connections, accessibility features, parking and terminal amenities. [S6][S7]

Therefore:

Same Route != Same Terminal Pre-Arrival State.

## Strongest pre-arrival boundaries

1. sailing time known versus arrival plan complete;
2. early arrival versus booking honoured automatically;
3. late arrival versus booking honoured automatically;
4. preferred sailing versus expected drive-up sailing;
5. schedule state versus capacity state;
6. visible terminal queue versus true remaining deck capacity;
7. capacity at search time versus capacity at arrival;
8. drive-up capacity before versus after reservation release;
9. vehicle booked versus specific deck position;
10. booking confirmation versus final information state;
11. same route versus same terminal state.

## Competing explanation

A simpler explanation is that ferry passengers need to monitor traffic and arrive during a check-in window like travellers using other scheduled transport.

That remains plausible.

The KHDS relevance strengthens if capacity and entitlement can reconfigure while the customer still expects a continuous reservation-to-boarding journey.

## Evidence limitations

The public record does not establish:

- how often customers check Current Conditions before travel;
- accuracy distribution of estimated deck-space predictions;
- frequency of reservation-space release changing a customer's sailing outcome;
- terminal road congestion effects;
- notification timing for capacity or vessel changes;
- cross-channel alert delivery success.

## Next evidence

Inspect Arrival / Terminal Check-In & Boarding to determine how a booking or drive-up intention becomes a checked-in passenger/vehicle state and then a boarded state.

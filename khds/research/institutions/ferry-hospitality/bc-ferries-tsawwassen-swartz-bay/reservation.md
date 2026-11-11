<!-- KHDS {"caseNumber":46,"institutionName":"BC Ferries - Tsawwassen-Swartz Bay","slug":"bc-ferries-tsawwassen-swartz-bay","institutionType":"passenger ferry and terminal hospitality system","sector":"ferry-hospitality","canonicalPath":"khds/research/institutions/ferry-hospitality/bc-ferries-tsawwassen-swartz-bay/"} -->
# Reservation

Public-evidence coverage: partial

## Research question

What does a booking secure on the Tsawwassen–Swartz Bay route, and what remains conditional on passenger type, vehicle state, check-in timing, fare rules and available capacity?

## Vehicle booking secures a preferred sailing subject to check-in

BC Ferries states that booking ahead secures a spot for a vehicle on the preferred sailing, but the reservation must still be redeemed within terminal-specific check-in times. [S5][S6][S7]

Therefore:

Vehicle Booking Held != Boarding Completed.

And:

Reservation Valid in System != Reservation Honoured at Any Arrival Time.

## Check-in timing is part of entitlement

At both Tsawwassen and Swartz Bay for this route, booking check-in opens 60 minutes before scheduled departure and closes 30 minutes before scheduled departure for vehicles and applicable booked foot passengers. [S6][S7]

BC Ferries states that arriving before the booking window opens or after it closes causes the booking not to be honoured and travel to be based on order of arrival. [S6][S7]

Therefore:

Valid Booking + Wrong Check-In State != Reserved Boarding Priority.

This is one of the strongest Case #46 boundaries.

## Drive-up travel is a separate capacity relationship

Customers without a vehicle booking are generally loaded according to order of arrival on the next available sailing. [S5][S6][S7]

Therefore:

Drive-Up Vehicle != Reserved Vehicle.

Both can share the same sailing while holding different entitlement states.

## Booked and drive-up capacity coexist

BC Ferries deliberately reserves portions of vehicle deck space for advance bookings while retaining space for drive-up customers. [S2]

Therefore:

Sailing Vehicle Capacity != Reservation Capacity Only.

## Unused reservation capacity can return to the drive-up pool

Current Conditions explains that customers sometimes do not check in for bookings and that, after the booking check-in window closes, those spaces can be freed for drive-up customers. [S1][S10]

Therefore:

Booked Capacity != Permanently Locked Capacity Until Departure.

This creates a time-dependent capacity transition.

## Foot-passenger booking is a different product

Advance foot-passenger booking is available on the route. The booking must be redeemed to obtain a boarding pass before proceeding to the waiting area. [S4]

Therefore:

Foot-Passenger Booking Created != Boarding Pass Issued.

And:

Boarding Pass Issued != Passenger Boarded.

## Foot-passenger advance-booking limits do not equal total space

BC Ferries explicitly states that no advance-bookable foot-passenger inventory does not necessarily mean the ferry has no foot-passenger space. [S4]

Therefore:

Advance Booking Sold Out != Passenger Sailing Sold Out Automatically.

## Changing passenger mode can require a new capacity check

BC Ferries' booking policies permit some foot-passenger bookings to be changed to include a vehicle, but the change is subject to availability and the sailing may already be sold out for vehicle bookings. [S8]

Therefore:

Passenger Entitlement != Vehicle Entitlement.

A traveller can hold a valid passenger booking while the vehicle state remains unavailable.

## Same-day alternate sailing can depend on space

Booking policy allows certain travellers to use the booking on another same-day sailing subject to space availability and fare-product rules. [S8]

Therefore:

Booking Value Preserved != Alternate Sailing Capacity Guaranteed.

## Strongest reservation boundaries

1. vehicle booking versus completed boarding;
2. reservation validity versus honour at any arrival time;
3. valid booking plus wrong check-in state versus reserved priority;
4. drive-up vehicle versus reserved vehicle;
5. vehicle capacity versus reservation-only capacity;
6. booked capacity versus permanently locked capacity;
7. foot-passenger booking versus boarding pass;
8. boarding pass versus boarded passenger;
9. advance foot-passenger booking sold out versus passenger sailing sold out;
10. passenger entitlement versus vehicle entitlement;
11. booking value versus alternate sailing capacity.

## Competing explanation

A simpler explanation is that these are standard transportation reservation rules.

That remains plausible.

The KHDS question is whether the changing relationship among booking, check-in, capacity and vehicle state creates hospitality continuity and recovery problems.

## Evidence limitations

The public record does not establish:

- probability of a reserved vehicle missing its sailing;
- internal booking-to-terminal identity architecture;
- actual no-show rates for this route beyond published allocation ranges;
- frequency of passenger-to-vehicle booking changes;
- financial impact of missed booking windows;
- real-time reconciliation latency between booking and terminal systems.

## Next evidence

Inspect Pre-arrival to determine how travellers prepare for a sailing whose capacity, check-in window, terminal conditions and vessel state can change before arrival.

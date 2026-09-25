<!-- KHDS {"caseNumber":28,"institutionName":"The Arts Club London","slug":"the-arts-club-london","institutionType":"Private members' club with integrated hotel, dining, cultural programming and wellness access","sector":"members-clubs","canonicalPath":"khds/research/institutions/members-clubs/the-arts-club-london/"} -->
# Reservation / Access

## Reservation objects

The Arts Club contains multiple reservation or entitlement objects rather than one universal booking object:

- membership application and renewal;
- dining reservations;
- event RSVPs;
- hotel reservations;
- guest access sponsored by a member;
- hotel-guest wellness access through a separate request.

## Dining

S3 states that dining reservations can be made by email or telephone, and members can use an online reservation system with their membership ID. Online bookings can be modified or cancelled up to 24 hours before the reserved time.

```text
Active Membership
!=
Guaranteed Dining Inventory
```

## Events

Member events use RSVP logic and may specify the number of guests permitted.

```text
Membership Eligibility
!=
Event Capacity
```

## Hotel

S3 and S6 establish a separate hotel booking object with guaranteed-reservation terms, cancellation windows, room availability times and no-show consequences.

```text
Hotel Reservation
!=
Membership Application

Hotel Reservation
!=
Proof of Full Club Entitlement
```

## Wellness

Hotel guests receive complimentary access to Lanserhof gym and facilities, but access must be requested through Reception and requires a health questionnaire.

```text
Included Benefit
!=
Automatically Activated Access
```

## Evidence boundary

Public material does not expose live inventory, waitlists, priority rules or failed-booking recovery.

## Coverage

Rating: **partial**

Sources: S2, S3, S6

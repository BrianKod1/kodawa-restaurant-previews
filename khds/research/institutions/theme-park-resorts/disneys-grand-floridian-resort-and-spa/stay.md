<!-- KHDS {"caseNumber":36,"institutionName":"Disney's Grand Floridian Resort & Spa","slug":"disneys-grand-floridian-resort-and-spa","institutionType":"Deluxe theme-park resort hotel with lodging, resort-guest benefits, separate theme-park admission, dining reservations, transportation and tiered access privileges","sector":"theme-park-resorts","canonicalPath":"khds/research/institutions/theme-park-resorts/disneys-grand-floridian-resort-and-spa/"} -->
# Stay

Public-evidence coverage: partial

## Research question

How do lodging status, accommodation tier, theme-park admission and separately purchased products combine into different guest entitlements during the stay?

## Evidence

The base stay relationship begins with accommodation at Disney's Grand Floridian Resort & Spa, a Disney Deluxe Resort. [S1][S2]

Accommodation tier can then create narrower hotel entitlements.

Club Level rooms and suites include secured access to the Royal Palm Club lounge and Personalized Guest Services that are not presented as universal benefits of every accommodation category. [S2][S3]

Theme-park access remains separately governed.

Eligible Disney Resort hotel guests can receive Early Theme Park Entry, but valid theme-park admission is still required. [S5][S6]

Grand Floridian's Deluxe Resort status can also make registered guests eligible for Extended Evening Theme Park Hours on participating nights and at participating parks. [S7]

This creates a narrower benefit associated with a particular hotel tier inside the larger Disney Resort system.

Lightning Lane introduces another layer.

Eligible Disney Resort hotel guests receive an earlier purchase window, but Lightning Lane passes remain separately purchased products and valid theme-park admission remains required. [S5][S8]

Grand Floridian cabanas create another narrower stay entitlement.

They are separately reservable full-day products restricted to guests of Disney's Grand Floridian Resort & Spa. [S9]

The current public evidence therefore distinguishes several simultaneous guest states.

## Interpretation

The stay contains an entitlement stack rather than one undifferentiated Disney package.

At minimum:

Base Grand Floridian relationship:
- accommodation;
- Resort-guest status;
- Resort amenities;
- complimentary Disney transportation as publicly described. [S1][S3]

Accommodation-tier relationship:
- Club Level lounge access;
- Personalized Guest Services;
- Disney Signature Services for eligible guests. [S2][S3]

Park-related relationships:
- valid theme-park admission;
- Early Theme Park Entry eligibility when hotel and admission requirements are both satisfied; [S5][S6]
- Extended Evening Theme Park Hours eligibility for qualifying Deluxe Resort guests on eligible nights. [S7]

Optional incremental relationships:
- Lightning Lane passes; [S8]
- Grand Floridian cabana reservations; [S9]
- dining reservations. [S4]

This supports several bounded distinctions:

Grand Floridian guest != theme-park admission holder.

Theme-park admission holder != Early Entry eligible guest.

Early Entry eligibility != Extended Evening Hours eligibility.

Standard-room guest != Club Level guest.

Eligible Resort-hotel guest != Lightning Lane pass holder.

Grand Floridian guest != cabana holder.

Dining reservation holder != park-entry entitlement holder.

Shared Disney identity != uniform entitlement.

## Architecture significance

Case #36 is useful because several entitlement layers are publicly explicit and can coexist within one guest journey.

The architecture question is not whether Disney sells multiple products.

The stronger question is whether these statuses create materially different relationships in:

- identity;
- capacity;
- eligibility;
- responsibility;
- recovery;
- persistence;
- operational ownership.

If the different layers are simply conventional hotel tiers, separately ticketed parks and ancillary products, the case does not require a broader architecture explanation.

If the guest's identity and responsibilities materially shift across those layers while still being coordinated through one journey, the case may provide stronger support for the provisional Role-Partitioned / Multi-Relationship Hospitality Architecture.

The current evidence does not yet establish which explanation is better.

## Competing explanation

The strongest competing explanation remains conventional destination-resort segmentation.

Under that explanation:

- the hotel stay is the base accommodation product;
- Club Level is a premium room tier;
- theme parks are separately ticketed attractions;
- Early Entry is a hotel benefit;
- Extended Evening Hours are a Deluxe Resort benefit;
- Lightning Lane is a paid queue-access product;
- cabanas are premium pool products;
- dining reservations are ordinary restaurant commitments.

That explanation remains fully viable.

## Limits

The evidence does not establish:

- whether all entitlements are stored in one guest profile;
- whether hotel, park, dining, Lightning Lane and cabana permissions are recognized through one credential;
- whether different members of one travelling party can hold different permissions;
- how failed entitlements are recovered;
- which team owns recovery when multiple products conflict;
- whether optional products persist independently if the lodging reservation changes;
- whether Club Level service teams can see or modify every other Disney relationship;
- whether Extended Evening Hours eligibility is operationally verified through the same system as Early Entry.

No stay was observed.

No Club Level benefit was tested.

No park admission, Early Entry, Extended Evening Hours, Lightning Lane or cabana entitlement was transaction-tested.

## Next evidence

Map the exact entitlement stack for:

- standard-room Grand Floridian guests;
- Club Level guests;
- theme-park admission holders;
- Early Theme Park Entry users;
- Extended Evening Theme Park Hours users;
- Lightning Lane purchasers;
- cabana renters;
- dining-reservation holders.

Record for each:

- qualifying relationship;
- required status or purchase;
- credential used;
- duration;
- capacity conditions;
- responsible operating team;
- failure-recovery path;
- whether entitlement depends on the lodging reservation;
- whether entitlement persists if another Disney relationship changes.

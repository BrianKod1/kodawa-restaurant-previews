# KHDS Navigation Implementation

## Objective

Implement a navigation system that provides orientation and reservation access while preserving the emotional atmosphere established by the Hero.

Navigation should support the experience, not become the experience.

---

## Responsibilities

The Navigation component must:

- identify the restaurant
- provide access to primary destinations
- keep reservation accessible
- maintain consistency across all pages
- transition cleanly between desktop and mobile

---

## Layout

Desktop

--------------------------------------------------
Logo

Navigation Links

Reservation CTA
--------------------------------------------------

Mobile

--------------------------------

Logo

Menu Button

--------------------------------

↓

Fullscreen or Drawer Menu

↓

Reservation CTA remains visible

---

## Required Elements

- Restaurant Logo
- Menu
- Story / About
- Reservation
- Contact
- Mobile Menu
- Sticky behaviour
- Active page indicator

---

## Behaviour

Navigation should:

- remain visually restrained
- avoid covering important imagery
- become sticky after scrolling
- highlight the current page
- maintain consistent spacing
- animate smoothly

---

## Reservation

Reservation should always remain accessible.

Never hide booking behind multiple interactions.

Desktop:
Persistent CTA.

Mobile:
Visible inside the primary navigation.

---

## Visual Rules

- generous spacing
- restrained typography
- minimal colour palette
- transparent when appropriate
- solid background after scrolling
- subtle motion only

---

## Accessibility

Navigation must:

- support keyboard navigation
- include visible focus states
- provide aria labels
- maintain sufficient colour contrast
- allow Escape to close mobile menu

---

## Anti-patterns

Avoid:

- crowded menus
- multiple CTAs
- distracting animations
- oversized headers
- hidden reservation buttons
- inconsistent navigation between pages

---

## Implementation Checklist

□ Logo visible

□ Navigation hierarchy clear

□ Reservation accessible

□ Mobile menu complete

□ Sticky behaviour implemented

□ Active page indicator

□ Accessibility verified

□ Motion tested

□ Responsive layout complete
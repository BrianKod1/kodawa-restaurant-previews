# KHDS Gallery Implementation

## Objective

Implement a gallery that uses authentic photography to communicate atmosphere, quality, and emotion.

The Gallery should help the guest imagine the experience rather than simply browse a collection of images.

---

## Component Responsibilities

The Gallery component must:

- support the restaurant narrative
- communicate food, people, and place
- maintain photographic consistency
- create visual rhythm
- encourage continued exploration
- preserve performance across devices
- remain accessible to all guests

---

## Required Content

A KHDS Gallery should include a purposeful mix of:

- food photography
- interior or environmental photography
- guest or service moments
- detail photography
- atmosphere or lighting imagery

Every image must contribute to the restaurant's story.

---

## Image Selection Rules

Use images that:

- are authentic to the restaurant
- share a consistent photographic style
- communicate a clear emotional tone
- reveal different parts of the experience
- remain strong when cropped responsively

Avoid including several images that communicate the same thing without adding value.

---

## Sequence

The image order should create a journey.

Recommended sequence:

1. Establish the environment
2. Introduce the food
3. Reveal people or service
4. Show distinctive details
5. End with a strong emotional image

The sequence may change by restaurant, but it should never feel random.

---

## Layout Behaviour

The Gallery may use:

- editorial layouts
- image grids
- masonry layouts
- horizontal sequences
- full-width scenes
- controlled carousels

The layout should support the photography rather than compete with it.

Avoid forcing every image into the same dimensions when varied proportions improve the narrative.

---

## Visual Rules

The Gallery should:

- give important images room to breathe
- maintain consistent spacing
- avoid excessive decorative framing
- preserve the restaurant's emotional tone
- use restrained captions where needed
- maintain clear visual hierarchy

Photography should remain the dominant visual element.

---

## Interaction Rules

Interactions should support exploration.

Allowed interactions include:

- opening an image in a lightbox
- moving between images
- swiping on touch devices
- closing with a visible control
- closing with the Escape key
- subtle hover or focus feedback

Interactions must never make the guest work to view the photography.

---

## Lightbox Behaviour

When a lightbox is used:

- open the selected image directly
- preserve image quality
- provide clear previous and next controls
- provide a visible close control
- allow Escape to close
- trap keyboard focus inside the lightbox
- return focus to the original image after closing
- prevent background scrolling while open

A lightbox is optional when the inline images already provide sufficient impact.

---

## Responsive Behaviour

### Desktop

- Use varied image scale where appropriate
- Preserve generous spacing
- Allow important images to occupy more visual space
- Support keyboard interaction

### Tablet

- Simplify complex layouts
- Preserve image hierarchy
- Maintain comfortable touch targets

### Mobile

- Prioritize image clarity
- Use one or two columns depending on available space
- Support swipe gestures where appropriate
- Avoid tiny thumbnails
- Prevent horizontal overflow
- Keep controls easy to reach

The mobile gallery must feel intentional, not like a compressed desktop grid.

---

## Image Performance

The Gallery must:

- use responsive image sources
- provide appropriate image dimensions
- compress images without obvious quality loss
- lazy-load images outside the first viewport
- reserve image dimensions to prevent layout shift
- avoid loading full-resolution lightbox assets before needed

The first meaningful gallery image may load eagerly when it appears near the top of the page.

---

## Accessibility

Every meaningful image must include useful alternative text.

Alternative text should describe what the image communicates, not simply repeat the filename.

Decorative images should use empty alternative text.

The Gallery must also:

- support keyboard navigation
- provide visible focus states
- use semantic buttons for controls
- label previous, next, and close actions
- maintain sufficient control contrast
- respect reduced-motion preferences
- avoid placing essential information only inside images

Captions should be associated with their corresponding images.

---

## Motion

Motion should clarify interaction and preserve atmosphere.

Allowed:

- subtle image reveal
- lightbox opening and closing
- carousel movement
- hover or focus feedback

Avoid:

- aggressive zoom effects
- constant automatic movement
- excessive parallax
- animations that delay access to images
- movement without narrative purpose

Autoplay should not be used unless the guest can pause it immediately.

---

## Captions

Captions are optional.

Use them only when they add meaningful context, such as:

- dish names
- location details
- cultural or historical significance
- distinctive experiences

Captions should remain concise and visually secondary to the image.

---

## Empty and Limited Content States

When only a few strong images are available:

- use fewer images
- increase their scale
- create a focused editorial sequence

Do not add weak photography merely to fill a grid.

Quality takes priority over quantity.

---

## Anti-patterns

Avoid:

- stock photography
- random sequencing
- inconsistent colour grading
- low-resolution imagery
- overcrowded grids
- tiny thumbnails
- unnecessary autoplay
- inaccessible lightboxes
- images without meaningful alt text
- decorative animation that competes with the photography
- loading every full-resolution image immediately

---

## Implementation Checklist

□ Photography is authentic

□ Every image serves the narrative

□ Image sequence feels intentional

□ Visual style is consistent

□ Layout supports image hierarchy

□ Responsive images are implemented

□ Images are compressed appropriately

□ Lazy loading is configured

□ Layout shift is prevented

□ Alternative text is complete

□ Keyboard controls are supported

□ Focus behaviour is correct

□ Lightbox controls are accessible, when used

□ Reduced-motion preferences are respected

□ Mobile layout has been tested

□ Gallery performance has been verified

---

## Success Criteria

The Gallery succeeds when the guest can imagine:

- the food
- the atmosphere
- the people
- the experience of being there

without the interface competing for attention.
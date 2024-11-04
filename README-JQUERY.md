## Modal Challenge documentation with jQuery

## General Description

This project implements a responsive modal using jQuery, SCSS and good naming convention (BEM).
To render the modal you must enter the cart icon at the top right of the screen, then click on the pay button and the modal will be rendered, jquery was implemented for the modal logic both opening and closing as well as state changes.

## Main Files

1. ChallengeModal.tsx
   The ChallengeModal.tsx file handles all the interactivity logic of the modal using jQuery. Its main functionalities include:

- Modal Opening: Implemented through click and addClass events.
- Button Toggle: Allows changing the visual state using toggleClass
- Modal Closing: Implemented via removeClass
- Event Delegation: Implements an efficient event handling.
- The implementation uses the Modulo pattern to encapsulate the functionality and maintain a clean and organized code.

2. modal.scss
   This file contains all the styles of the modal following the BEM (Block Element Modifier) methodology.
   The basic structure includes:

- Main container (.modal)
- Modal content (.modalcontent)
- Header (.modalheader)
- Body (.modalbody)
- Modal footer (.modalfooter)
- States (.modal--active)
  Naming Conventions (BEM)
  We strictly follow the BEM methodology to keep the code scalable and maintainable:
- Block: Independent component (example: .modal)
  Element: Part of a block (example: .modalheader)
- Modifier: Variation or state (example: .modal--active)

## Responsive Design

Responsive implementation is handled through three main breakpoints:

- Desktop: Larger than 1024px (default layout)
- Tablet: Less than or equal to 768px
- Mobile: Less than or equal to 480px
  Responsive strategies implemented:
- Mobile First as main focus
- Use of Flexbox/Grid for flexible layouts
- Media Queries for specific settings per viewport
- Use of relative units (rem, em, %) for improved scalability

## Best Practices Implemented

jQuery
Caching of selectors for better performance

- Event Delegation for efficient event handling
- Module Pattern implementation
- Event Handling Optimization
  SCSS
- Nesting control (maximum 3 levels)
- Variables for colors and breakpoints
- Mixins for reusable code
  Clear separation of responsibilities
- Responsive
- Standardized and documented breakpoints
- Organized and maintainable media queries
- Consistent mobile-first approach

## File structure

The project maintains a clear and organized structure:

- /organism
  - ChallengeModal.tsx
- /styles
  - modal.scss


# Transition Module

Methods for applying CSS transitions to React components.

```typescript
import { View } from "tile-css";

const AnimatedBox = View('div')
  .size(100)
  .bg('blue')
  .transition({
    speed: 300,
    ease: 'ease-in-out',
    delay: 100,
    props: ['background-color', 'transform']
  })
  .onHover(style().bg('red').scale(1.2))
  .element();

export const MyAnimatedComponent = ({ children }) => (
  <AnimatedBox>{children}</AnimatedBox>
);
```

Methods:

* [transition(speedOrOptions?, props?)](#transitionspeedoroptions-props)

For comprehensive examples, see the [playground](../playground/).

## transition(speedOrOptions?, props?)

The `transition` method supports both legacy and new API formats for backward compatibility:

```typescript
// Legacy API (still supported)
View().transition(300)                    // Simple duration
View().transition('0.5s', ['opacity'])   // Duration + specific properties
View().transition()                       // Uses defaults: 150ms, all common properties

// New enhanced API  
View().transition({
  speed: 300,           // Duration in ms or CSS string
  ease: 'ease-in-out',  // Timing function
  delay: 100,           // Delay before transition starts
  props: ['transform']  // Specific properties to animate
})
```

#### Default Values
When called without arguments, applies these default values:
```typescript
{
  speed: "150ms",       // 150ms duration
  ease: "cubic-bezier(0.4, 0, 0.2, 1)", // Material Design easing
  delay: undefined,     // No delay
  props: [              // All common animatable properties
    'color', 'background-color', 'border-color', 'text-decoration-color',
    'fill', 'stroke', 'opacity', 'box-shadow', 'transform', 
    'filter', 'backdrop-filter'
  ]
}
```

#### Internal Constants
The module uses these constants for consistent defaults:
```typescript
const DEFAULT_TRANSITION_DURATION = "150ms";
const DEFAULT_TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
const DEFAULT_TRANSITION_DELAY = "0ms";
```

## TransitionOptions

Interface for defining transition properties.

```typescript
interface TransitionOptions {
  speed?: number | string; // Transition duration in milliseconds (number) or CSS string (e.g., '0.3s')
  ease?: EaseValue; // CSS transition timing function with TypeScript validation
  delay?: number | string; // Transition delay in milliseconds (number) or CSS string (e.g., '0.1s')
  props?: string[]; // Array of CSS properties as strings for maximum flexibility
}

type EaseValue = 
  | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
  | 'step-start' | 'step-end'
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`
  | `steps(${number})`
  | `steps(${number}, ${'start' | 'end'})`;
```

## Internal Improvements

The module includes several helper functions for robust validation and formatting:

```typescript
// Type guards for safe runtime checks
function isTransitionOptions(value: unknown): value is TransitionOptions
function isValidNumber(value: unknown): value is number

// Formatting functions with validation and fallbacks
function formatDuration(speed: number | string | undefined): string
function formatDelay(delay: number | string | undefined): string | undefined
```

**Key Features:**
- **Validation**: Checks for NaN values and invalid inputs
- **Fallbacks**: Uses sensible defaults when invalid values are provided
- **Optimization**: Only applies delay property when actually needed
- **Type Safety**: Runtime type checking with TypeScript support

## Examples

### Legacy API Examples

**Simple duration:**
```typescript
View().transition(300)
// Generates:
// {
//   transitionProperty: 'color, background-color, border-color, ...',
//   transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//   transitionDuration: '300ms'
// }
```

**Duration with specific properties:**
```typescript
View().transition('0.5s', ['opacity', 'transform'])
// Generates:
// {
//   transitionProperty: 'opacity, transform',
//   transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//   transitionDuration: '0.5s'
// }
```

### New API Examples

**Full options object:**
```typescript
View().transition({
  speed: 300,
  ease: 'ease-in',
  delay: 100,
  props: ['opacity']
})
// Generates:
// {
//   transitionProperty: 'opacity',
//   transitionTimingFunction: 'ease-in',
//   transitionDuration: '300ms',
//   transitionDelay: '100ms'
// }
```

**Using cubic-bezier easing:**
```typescript
View().transition({
  speed: 400,
  ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bounce effect
  props: ['transform', 'opacity']
})
```

**Edge cases handled gracefully:**
```typescript
// Invalid values fall back to defaults
View().transition({ speed: NaN })        // Uses 150ms default
View().transition({ speed: -100 })       // Clamps to 0ms minimum
View().transition({ delay: undefined })  // No delay property added
```

## Common Animatable Properties

The default properties list includes the most commonly animated CSS properties:

```typescript
const defaultTransitionProps = [
  "color",
  "background-color", 
  "border-color",
  "text-decoration-color",
  "fill",
  "stroke",
  "opacity",
  "box-shadow",
  "transform",
  "filter",
  "backdrop-filter",
];
```

You can override this with any valid CSS property names in the `props` array for maximum flexibility.
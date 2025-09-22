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
  speed: 150,           // 150ms duration
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design easing
  delay: undefined,     // No delay
  props: [              // All common animatable properties
    'color', 'background-color', 'border-color', 'text-decoration-color',
    'fill', 'stroke', 'opacity', 'box-shadow', 'transform', 
    'filter', 'backdrop-filter'
  ]
}
```

## TransitionOptions

Interface for defining transition properties.

```typescript
interface TransitionOptions {
  speed?: number | string; // Transition duration in milliseconds (number) or CSS string (e.g., '0.3s')
  ease?: string; // CSS transition timing function (e.g., 'ease-in', 'linear', 'cubic-bezier(0.4, 0, 0.2, 1)')
  delay?: number | string; // Transition delay in milliseconds (number) or CSS string (e.g., '0.1s')
  props?: string[]; // Array of CSS properties to apply the transition to (e.g., ['opacity', 'transform'])
}
```

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
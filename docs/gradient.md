# Gradient Module

Methods for applying gradient backgrounds to React components.

```tsx
import { View } from "tile-css"

const HeroSection = View()
  .gradient('to-right', ['blue, 'purple'])
  .size('100%', 300)
  .center()
  .element();

export const Hero = ({ children }) => (
  <HeroSection>{children}</HeroSection>
);
```

- [Shortcut Methods](#shortcut-methods)
  - [gradient](#gradientdirection-gradientdirection-colors-gradientcolors-options-gradientoptions)

## Shortcut Methods

### gradient(direction: GradientDirection, colors: GradientColors, options?: GradientOptions)

Applies gradient styles to an element. Supports linear, radial, and conic gradients.

#### Linear Gradients

```typescript
// Basic linear gradient
const LinearBox = View()
  .gradient('to-right', ['red', 'blue'])
  .element();

// Custom angle
const AngledBox = View()
  .gradient('45deg', ['green', 'yellow'])
  .element();

// Multiple colors
const RainbowBox = View()
  .gradient('to-bottom', ['red', 'orange', 'yellow', 'green', 'blue'])
  .element();
```

**Linear directions:**
- `'to-top'`, `'to-top-right'`, `'to-right'`, `'to-bottom-right'`
- `'to-bottom'`, `'to-bottom-left'`, `'to-left'`, `'to-top-left'`
- Custom angles: `'45deg'`, `'90deg'`, `'135deg'`, etc.

#### Radial Gradients

```typescript
// Basic radial gradient
const RadialBox = View()
  .gradient('radial', ['white', 'black'])
  .element();

// With options
const CustomRadial = View()
  .gradient('radial', ['blue', 'transparent'], {
    center: 'top left',
    shape: 'circle'
  })
  .element();
```

**Radial options:**
- `center`: Position of gradient center
  - `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`
  - `'top left'`, `'top right'`, `'bottom left'`, `'bottom right'`
  - `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'` (auto-converted)
- `shape`: `'circle'` or `'ellipse'`
- `size`: `'closest-side'`, `'closest-corner'`, `'farthest-side'`, `'farthest-corner'`

#### Conic Gradients

```typescript
// Basic conic gradient
const ConicBox = View()
  .gradient('conic', ['red', 'yellow', 'green', 'blue', 'red'])
  .element();

// With starting angle
const RotatedConic = View()
  .gradient('conic', ['blue', 'transparent'], { from: '90deg' })
  .element();
```

**Conic options:**
- `from`: Starting angle (`'0deg'`, `'90deg'`, `180`, etc.)
- `center`: Position of gradient center

#### Color Stops

Use color stops for precise control over gradient transitions:

```typescript
const PreciseGradient = View()
  .gradient('to-right', [
    { color: 'red', stop: '0%' },
    { color: 'yellow', stop: '30%' },
    { color: 'blue', stop: '100%' }
  ])
  .element();
```

#### Real-world Examples

```typescript
// Hero section background
const HeroBackground = View()
  .gradient('135deg', ['#667eea', '#764ba2'])
  .element();

// Button with gradient
const GradientButton = View('button')
  .gradient('to-right', [red', 'blue])
  .round(8)
  .padding({ x: 20, y: 12 })
  .onHover(View().gradient('to-right', ['red', 'blue']))
  .element();

// Loading spinner
const Spinner = View()
  .gradient('conic', ['transparent', 'blue'], { from: '0deg' })
  .round('50%')
  .size(40, 40)
  .element();

// Glass morphism effect
const GlassCard = View()
  .gradient('135deg', ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)'])
  .backdrop({ blur: 10 })
  .border(1, { color: 'rgba(255,255,255,0.2)' })
  .element();
```

### Types

```typescript
// Direction types
type LinearDirection = "to-top" | "to-top-right" | "to-right" | "to-bottom-right" |
                      "to-bottom" | "to-bottom-left" | "to-left" | "to-top-left" | string;
type RadialDirection = "radial";
type ConicDirection = "conic";
type GradientDirection = LinearDirection | RadialDirection | ConicDirection;

// Color types
type ColorStop = {
  color: string;
  stop?: string; // e.g., "0%", "50%", "100%"
};
type GradientColors = string[] | ColorStop[];

// Options
interface RadialGradientOptions {
  center?: "center" | "top" | "bottom" | "left" | "right" |
           "top-left" | "top-right" | "bottom-left" | "bottom-right" |
           "top left" | "top right" | "bottom left" | "bottom right" | string;
  size?: "closest-side" | "closest-corner" | "farthest-side" | "farthest-corner" | string;
  shape?: "circle" | "ellipse";
}

interface ConicGradientOptions {
  center?: string;
  from?: string | number; // starting angle
}
```

The gradient method automatically generates the correct CSS `background-image` property based on the direction and options provided.

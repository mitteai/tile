---
name: tile
description: Chainable React styling library. Use when writing React components with tile-css.
---

# Tile - Chainable Styling Library

Tile provides chainable methods for styling React components.

**Docs:** [./docs/](./docs/)

## Quick Reference

```tsx
import { View, Frame, HStack, VStack, Grid, style } from 'tile-css'
```

## Factory Functions

| Factory | Purpose | Example |
|---------|---------|---------|
| `View(tag?)` | Basic styled component | `View('button').bg('blue').element()` |
| `style()` | Reusable style chain (for variants, hover) | `style().bg('red')` |
| `Frame(w?, h?, align?)` | Centered flex container | `Frame(200, 200).element()` |
| `HStack(w?, h?)` | Horizontal flex | `HStack().gap(20).element()` |
| `VStack(w?, h?)` | Vertical flex | `VStack().gap(10).element()` |
| `Grid(opts)` | CSS Grid | `Grid({ columns: 3, gap: 10 }).element()` |

## Core Methods

### Size & Layout
```tsx
.size(w, h?)          // .size(100) or .size(200, 100)
.width(w, {max?, min?})
.height(h, {max?, min?})
.aspect(ratio)        // .aspect(16/9)
```

### Flex
```tsx
.flex()               // display: flex
.hstack()             // flex-direction: row
.vstack()             // flex-direction: column
.center()             // centered flex container
.align({ x, y })      // .align({ x: 'center', y: 'end' })
.gap(n)               // gap between items
```

### Grid
```tsx
.grid({ columns, rows, gap })
.columns(3)           // repeat(3, 1fr)
.columns('1fr 2fr')   // custom template
```

### Colors
```tsx
.fg('color')          // text color
.bg('color')          // background color
.bg({ url, size, position })  // background image
.color({ fg, bg, border })
```

### Spacing
```tsx
.padding(n)           // all sides
.padding({ x: 20, y: 10 })
.padding({ left: 10, right: 20 })
.margin(n)
.margin({ x: 'auto' }) // center horizontally
```

### Border & Outline
```tsx
.border(width, { color, style })
.border({ top: 1, color: 'red' })
.round(n)             // border-radius
.round({ topLeft: 5 })
.outline(width, { color, offset })
```

### Text
```tsx
.sans(size, { weight, color, leading, tracking })
.mono(size, opts?)
.serif(size, opts?)
.text({ size, weight, align, case, decoration })
.ellipsis()           // text truncation with ...
```

### Position
```tsx
.absolute(x, y)       // position: absolute
.pin(x, y)           // position: fixed
.relative()
.zIndex(n)
.opacity(n)
```

### Selectors (State Styles)
```tsx
.onHover(style().bg('darkblue'))
.onFocus(style().outline('2px solid blue'))
.onActive(style().scale(0.95))
.before(style().content('"*"'))
.after(style().content('→'))
.select('& > p', style().color('gray'))  // child selector
.attr('disabled', style().opacity(0.5))  // attribute selector
.attr('data-state', { eq: 'active' }, style().bg('blue'))
```

### Variants (Conditional Styles)
```tsx
// Boolean variant
.variant('selected', true, style().bg('blue'))
.variant('compact', true, style().padding(4))

// Value variant
.variant('size', 'large', style().padding(40))
.variant('size', 'small', style().padding(10))

// Usage: <Button selected compact size="large" />
```

### Responsive
```tsx
.mobile(style().width('100%'))
.desktop(style().maxWidth(1200))
.media('(min-width: 768px)', style().padding(40))
```

### Transitions & Transforms
```tsx
.transition(duration?, props?)  // .transition(200, ['opacity'])
.rotate(45)
.scale(1.5)
.translate(x, y)
```

### Scroll
```tsx
.scroll({ x: true, y: false })
.overflow('hidden')
.overflow({ x: 'auto', y: 'scroll' })
```

## Common Patterns

### Basic Component
```tsx
const Button = View('button')
  .padding({ x: 16, y: 8 })
  .bg('rgba(11, 153, 255, 1)')
  .fg('white')
  .sans(14, { weight: 500 })
  .round(6)
  .border(0)
  .cursor('pointer')
  .onHover(style().bg('rgba(43, 166, 255, 1)'))
  .element()
```

### With Variants
```tsx
const TableRow = Grid({ columns: '50px 1fr 100px' })
  .sans(12)
  .cursor('pointer')
  .fg('rgba(221, 235, 241, 0.6)')
  .border({ bottom: 1, color: 'rgba(255, 255, 255, 0.05)' })
  .onHover(style().bg('rgba(225, 231, 241, 0.05)'))
  .variant('selected', true, 
    style()
      .bg('rgba(11, 153, 255, 0.15)')
      .fg('rgba(221, 235, 241, 0.9)')
  )
  .variant('header', true,
    style()
      .sans(11, { weight: 500 })
      .bg('rgba(225, 231, 241, 0.03)')
      .cursor('default')
  )
  .variant('compact', true, style().grid({ columns: '40px 1fr 70px' }))
  .selection(false)
  .element()
```

### Styled Existing Component
```tsx
const StyledInput = View(TextField)
  .width('100%')
  .padding(12)
  .round(8)
  .element()
```

## Key Differences from CSS-in-JS

1. **Chain must end with `.element()`** to create the React component
2. **Use `style()` for nested styles** (hover, variants, selectors)
3. **Numbers are pixels by default** - `.size(100)` = `100px`
4. **`x/y` shorthand** for horizontal/vertical - `.padding({ x: 20 })`
5. **Variants are props** - `.variant('active', true, ...)` → `<Comp active />`

## Common Mistakes

❌ Forgetting `.element()`:
```tsx
const Bad = View().bg('red')  // This is a chain, not a component!
const Good = View().bg('red').element()
```

❌ Using raw CSS in hover:
```tsx
// Wrong
.onHover({ backgroundColor: 'blue' })
// Right
.onHover(style().bg('blue'))
```

❌ Wrong variant syntax:
```tsx
// Wrong - value comes before condition
.variant(true, 'selected', style().bg('blue'))
// Right
.variant('selected', true, style().bg('blue'))
```

## Mobile Styling Patterns

```tsx
const ResponsiveCard = View()
  .padding(20)
  .mobile(style()
    .padding(10)
    .width('100%')
  )
  .element()

// Hide on mobile
const DesktopOnly = View()
  .mobile(style().display('none'))
  .element()
```

## Reference

Full docs in `./docs/`:
- `reference.md` - Complete API reference
- `selectors.md` - Hover, focus, attribute selectors
- `responsive.md` - Media queries and breakpoints
- `grid.md` - CSS Grid layouts
- `flex.md` - Flexbox layouts

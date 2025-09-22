# Selectors Module

Methods for applying styles to various element states, pseudo-elements, and custom selectors in React components.

- [Shortcut Methods](#shortcut-methods)
  - [onHover](#onhoverstyles-chain--css)
  - [onFocus](#onfocusstyles-chain--css)
  - [onActive](#onactivestyles-chain--css)
  - [before](#beforestyles-chain--css)
  - [after](#afterstyles-chain--css)
  - [attr](#attrattributename-string-optionsorchain-attrselectoroptions--chain--css-styles-chain--css)

## Shortcut Methods

### onHover(styles: Chain | CSS)

Applies styles when the element is hovered.

```typescript
const HoverBox = View()
  .bg('blue')
  .onHover(style().bg('darkblue'))
  .element();
```

### onFocus(styles: Chain | CSS)

Applies styles when the element is focused.

```typescript
const FocusInput = View('input')
  .border(1, { color: 'gray' })
  .onFocus(style().outline('2px solid blue'))
  .element();
```

### onActive(styles: Chain | CSS)

Applies styles when the element is active (being clicked or tapped).

```typescript
const ActiveButton = View('button')
  .bg('green')
  .onActive(style().bg('darkgreen'))
  .element();
```

### before(styles: Chain | CSS)

Applies styles to the `::before` pseudo-element.

```typescript
const BeforeElement = View()
  .before(style()
    .content('"→"')
    .margin({ right: 5 })
    .color('red')
  )
  .element();
```

### after(styles: Chain | CSS)

Applies styles to the `::after` pseudo-element.

```typescript
const AfterElement = View()
  .after(style()
    .content('←')
    .margin({ left: 5 })
    .color('blue')
  )
  .element();
```

### attr(attributeName: string, optionsOrChain: AttrSelectorOptions | Chain | CSS, styles?: Chain | CSS)

Applies styles based on attribute selectors.

```typescript
// Simple attribute presence
const TitledElement = View()
  .attr('title', style().color('blue'))
  .element();

// Exact match
const SpecificLink = View()
  .attr('href', { eq: 'https://example.org' }, style().bg('red'))
  .element();

// Substring match
const DataElement = View()
  .attr('data-value', { contains: 'example' }, style().bg('yellow'))
  .element();
```

`AttrSelectorOptions`:
- `eq?: string`: Exact match (=)
- `contains?: string`: Substring match (*)
- `startsWith?: string`: Prefix match (^)
- `endsWith?: string`: Suffix match ($)
- `includes?: string`: Whitespace-separated word match (~=)
- `dashMatch?: string`: Hyphen-separated prefix match (|=)
- `caseSensitive?: boolean`: Specify case sensitivity (defaults to true)

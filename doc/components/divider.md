---
title: Divider
status: draft
---

Separate content with a thin line.

## Example

![Divider example](content/images/divider.png)

## Usage

```tsx
<Divider spacing={2} />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |
| `size` | yes | `string \| number` | `1` | Thickness of the divider line; accepts a numeric pixel value or a CSS string. |
| `spacing` | yes | `string \| number` | `0` | Outer spacing applied above and below the divider; accepts a spacing unit or a CSS string. |
| `flush` | yes | `boolean` | `false` | Flush the divider to the edge of its container, removing surrounding padding. |

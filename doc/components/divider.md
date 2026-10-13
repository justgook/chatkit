---
title: Divider
status: draft
---

Separate content with a thin line.

## Example

![Divider example](content/images/divider.png)

## Usage

```
<Divider spacing={2} />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"neutral"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |
| `size` | yes | `string \| number` | `1` | Thickness of the divider line; accepts a numeric size or an interpreter-defined size expression. |
| `spacing` | yes | `string \| number` | `0` | Outer spacing applied above and below the divider; accepts a numeric spacing value or an interpreter-defined spacing expression. |
| `flush` | yes | `boolean` | `false` | Flush the divider to the edge of its container, removing surrounding padding. |

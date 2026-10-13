---
title: Badge
status: draft
---

Emphasize details with a status indicator.

## Example

![Badge example](content/images/badge.png)

## Usage

```tsx
<Badge label="Success" color="success" size="md" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | no | `string` | `""` | Text to display inside the badge. |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |
| `variant` | yes | `"solid" \| "soft" \| "outline"` | `"soft"` | Visual style of the badge. |
| `size` | yes | `"sm" \| "md" \| "lg"` | `"sm"` | Size of the badge. |
| `pill` | yes | `boolean` | `true` | Determines if the badge should be a fully rounded pill shape. |

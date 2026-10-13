---
title: CardLinkItem
status: draft
---

Card content with an optional destination link and accessible link label.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child content. |
| `padding` | yes | `number \| number[4]` | 4 | Inner spacing; one number applies to all sides, or four numbers specify top, right, bottom, left. |
| `background` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"neutral"` | Semantic intent for the surface; the renderer selects an appropriate background and contrast. |
| `href` | yes | `string` | `""` | Optional navigation destination. |
| `hrefLabel` | yes | `string` | "Go to article" | Accessible label for the destination link. |

With `href`, the card exposes a destination link; without it, no destination link is required. Navigation handling is an interpreter decision.

---
title: CardLinkItem
status: draft
---

Card content with an optional destination link and accessible link label.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child content. |
| `padding` | yes | `number \| string \| `[[types/padding|Padding]] | 4 | Inner spacing. |
| `background` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Semantic intent for the surface; the renderer selects an appropriate background and contrast. |
| `href` | yes | `string` | `""` | Optional destination URL. |
| `hrefLabel` | yes | `string` | "Go to article" | Accessible label for the destination link. |

With `href`, the card exposes a destination link; without it, no destination link is required. Link target policy remains an implementation decision.

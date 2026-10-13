---
title: Card
status: draft
---

Surface container with optional form behavior, status, and confirmation actions.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | no | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child component nodes. |
| `asForm` | yes | `boolean` | `false` | Enable form behavior. |
| `background` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Semantic intent for the surface; the renderer selects an appropriate background and contrast. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "full"` | `"md"` | Size constraint. |
| `padding` | yes | `string \| number \| `[[types/padding|Padding]] | `0` | Inner spacing. |
| `border` | yes | `number` | `0` | Border width in pixels. |
| `status` | yes | [[types/widget-status|WidgetStatus]] | `null` | Container status; shape remains unresolved. |
| `collapsed` | yes | `boolean` | `false` | Collapsed state. |
| `confirm` | yes | `{ label: string; action: `[[types/action-config|ActionConfig]]`; }` | `null` | Confirmation label and action. |
| `cancel` | yes | `{ label: string; action: `[[types/action-config|ActionConfig]]`; }` | `null` | Cancellation label and action. |
| `theme` | yes | `"light" \| "dark"` | `null` | Theme selection. |

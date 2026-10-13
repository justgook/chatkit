---
title: Card
status: draft
---

Surface container with optional form behavior, status, and confirmation actions.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `children` | no | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child component nodes. |
| `asForm` | yes | `boolean` | `false` | Enable form behavior. |
| `background` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"neutral"` | Semantic intent for the surface; the renderer selects an appropriate background and contrast. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "full"` | `"md"` | Size constraint. |
| `padding` | yes | `number \| number[4]` | `0` | Inner spacing; one number applies to all sides, or four numbers specify top, right, bottom, left. |
| `border` | yes | `number` | `0` | Border width in interpreter-defined units. |
| `status` | yes | [[types/widget-status|WidgetStatus]] | `null` | Informational status text with an optional favicon. |
| `collapsed` | yes | `boolean` | `false` | Collapsed state. |
| `confirm` | yes | `{ label: string; action: `[[types/action-config|ActionConfig]]`; }` | `null` | Confirmation label and action. |
| `cancel` | yes | `{ label: string; action: `[[types/action-config|ActionConfig]]`; }` | `null` | Cancellation label and action. |

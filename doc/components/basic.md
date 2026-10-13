---
title: Basic
status: draft
---

Root layout container.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `direction` | yes | `"row" \| "col"` | `"col"` | Layout direction. |
| `align` | yes | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"stretch"` | Cross-axis alignment. |
| `justify` | yes | `"start" \| "center" \| "end" \| "stretch" \| "between" \| "around" \| "evenly"` | `"start"` | Main-axis distribution. |
| `gap` | yes | `string \| number` | `0` | Spacing between direct children. |
| `padding` | yes | `number \| number[4]` | `0` | Inner spacing; one number applies to all sides, or four numbers specify top, right, bottom, left. |
| `children` | no | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child component nodes. |

---
title: Basic
status: draft
---

Root layout container with an optional theme.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `direction` | yes | `"row" \| "col"` | `"col"` | Layout direction. |
| `align` | yes | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"stretch"` | Cross-axis alignment. |
| `justify` | yes | `"start" \| "center" \| "end" \| "stretch" \| "between" \| "around" \| "evenly"` | `"start"` | Main-axis distribution. |
| `gap` | yes | `string \| number` | `0` | Spacing between direct children. |
| `padding` | yes | `string \| number \| `[[types/padding|Padding]] | `0` | Inner spacing. |
| `children` | no | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child component nodes. |
| `theme` | yes | `"light" \| "dark"` | `null` | Theme selection. |

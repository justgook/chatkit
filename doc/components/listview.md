---
title: ListView
status: draft
---

List container with an optional visible-item limit, status, and theme.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | no | [[components/listview#listviewitem-props|ListViewItem]]`[]` | `[]` | Items within this list. |
| `limit` | yes | `number \| "auto"` | `0` | Visible-item limit. |
| `status` | yes | [[types/widget-status|WidgetStatus]] | `null` | Container status; shape remains unresolved. |
| `theme` | yes | `"light" \| "dark"` | `null` | Theme selection. |

## Composition

`ListView` → [[components/listview#listviewitem-props|ListViewItem]] → content. ListView accepts only [[components/listview#listviewitem-props|ListViewItem]] nodes. Each item accepts general [[types/widget-component|WidgetComponent]] content. The item interface is defined here, not as a standalone component.

## ListViewItem Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | no | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child component nodes. |
| `onClickAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched on click. |
| `gap` | yes | `string \| number` | `0` | Spacing between direct children. |
| `align` | yes | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"stretch"` | Cross-axis alignment. |

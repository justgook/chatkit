---
title: CardCarousel
status: draft
---

Horizontal container for cards, with spacing, status, and theme.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `gap` | yes | `number \| string` | 4 | Spacing between direct children. |
| `status` | yes | [[types/widget-status|WidgetStatus]] | `null` | Container status; shape remains unresolved. |
| `theme` | yes | `"light" \| "dark"` | `null` | Theme selection. |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child content. |

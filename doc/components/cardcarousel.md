---
title: CardCarousel
status: draft
---

Horizontal container for cards, with spacing and status.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `gap` | yes | `number \| string` | 4 | Spacing between direct children. |
| `status` | yes | [[types/widget-status|WidgetStatus]] | `null` | Informational status text with an optional favicon. |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child content. |

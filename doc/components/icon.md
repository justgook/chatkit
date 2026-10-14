---
title: Icon
status: draft
---

Visual glyphs for actions and status.

## Example

```chatkit
<Icon name="search" size="md" />
```

## Usage

```
<Icon name="search" size="md" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `name` | no | [[types/widget-icon|WidgetIcon]] | `null` | Name of the icon to display. |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"neutral"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "xs" \| "xl" \| "2xl" \| "3xl"` | `"md"` | Size of the icon; accepts an icon size token. |

Icon-valued props use [[types/widget-icon|the complete icon catalog]].

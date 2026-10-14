---
title: Button
status: draft
---

Trigger actions with configurable style, size, and icons.

## Example

```chatkit
<Button label="Submit" color="accent" />
```

## Usage

```
<Button label="Submit" color="accent" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `submit` | yes | `boolean` | `false` | Configure the button as a submit button for the nearest form. |
| `label` | yes | `string` | `""` | Text to display inside the button. |
| `onClickAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched on click. |
| `iconStart` | yes | [[types/widget-icon|WidgetIcon]] | `null` | Icon shown before the label. Can be used without a label to create an icon-only button. |
| `iconEnd` | yes | [[types/widget-icon|WidgetIcon]] | `null` | Optional icon shown after the label. |
| `style` | yes | `"secondary" \| "primary"` | `"primary"` | Convenience preset for button style. |
| `iconSize` | yes | `"sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | Size of the button icons. |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"accent"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |
| `variant` | yes | `"solid" \| "soft" \| "outline" \| "ghost"` | `"solid"` | Visual variant of the button; accepts a control variant token. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "3xs"` | `"lg"` | Controls the overall size of the button. |
| `pill` | yes | `boolean` | `true` | Determines if the button should be a fully rounded pill shape. |
| `uniform` | yes | `boolean` | `false` | Determines if the button should have matching width and height, based on the `size`. |
| `block` | yes | `boolean` | `false` | Extends the button to 100% of available width. |
| `disabled` | yes | `boolean` | `false` | Disables interactions and applies disabled styles. |

Icon-valued props use [[types/widget-icon|the complete icon catalog]].

---
title: Caption
status: draft
---

Supplemental text for descriptions or hints.

## Example

```chatkit
<Caption value="Helpful hint" size="md" />
```

## Usage

```
<Caption value="Helpful hint" size="md" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `size` | yes | `"sm" \| "md" \| "lg"` | `"md"` | Size of the caption text; accepts a caption size token. |
| `weight` | yes | `"normal" \| "medium" \| "semibold" \| "bold"` | `"normal"` | Font weight; accepts a font weight token. |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"neutral"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |
| `value` | no | `string` | `""` | Text content to display. |
| `textAlign` | yes | `"start" \| "center" \| "end"` | `"start"` | Horizontal text alignment. |
| `truncate` | yes | `boolean` | `false` | Truncate overflow with ellipsis. |
| `maxLines` | yes | `number` | `0` | Limit text to a maximum number of lines (applies a line clamp). |

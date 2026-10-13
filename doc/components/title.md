---
title: Title
status: draft
---

Section headings with scalable sizes and weights.

## Example

![Title example](content/images/title.png)

## Usage

```tsx
<Title value="Section title" size="lg" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | yes | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl"` | `"md"` | Size of the title text; accepts a title size token. |
| `weight` | yes | `"normal" \| "medium" \| "semibold" \| "bold"` | `"medium"` | Font weight; accepts a font weight token. |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |
| `value` | no | `string` | `""` | Text content to display. |
| `textAlign` | yes | `"start" \| "center" \| "end"` | `"start"` | Horizontal text alignment. |
| `truncate` | yes | `boolean` | `false` | Truncate overflow with ellipsis. |
| `maxLines` | yes | `number` | `0` | Limit text to a maximum number of lines (applies a line clamp). |

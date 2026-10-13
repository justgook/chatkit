---
title: Label
status: draft
---

Accessible label for a form field.

## Example

![Label example](content/images/label.png)

## Usage

```
<Label value="Email" fieldName="email" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `value` | no | `string` | `""` | Text content of the label. |
| `fieldName` | no | `string` | `""` | Name of the field this label describes. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "xs" \| "xl"` | `"sm"` | Size of the label text; accepts a text size token. |
| `weight` | yes | `"normal" \| "medium" \| "semibold" \| "bold"` | `"medium"` | Font weight; accepts a font weight token. |
| `textAlign` | yes | `"start" \| "center" \| "end"` | `"start"` | Horizontal text alignment. |
| `color` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"neutral"` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component. |

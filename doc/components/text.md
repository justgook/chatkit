---
title: Text
status: draft
---

Display body text with size, weight, and decoration options.

## Example

![Text example](content/images/text.png)

## Usage

```tsx
<Text value="Hello world" size="md" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | yes | `"sm" \| "md" \| "lg" \| "xs" \| "xl"` | `"md"` | Size of the text; accepts a text size token. |
| `weight` | yes | `"normal" \| "medium" \| "semibold" \| "bold"` | `"normal"` | Font weight; accepts a font weight token. |
| `streaming` | yes | `boolean` | `false` | Enables streaming-friendly transitions for incremental updates.<br> Important: Once incremental updates are complete, this should be set to `false`. |
| `italic` | yes | `boolean` | `false` | Render text in italic style. |
| `lineThrough` | yes | `boolean` | `false` | Render text with a line-through decoration. |
| `width` | yes | `string \| number` | `0` | Constrain the text container width; accepts a numeric pixel value or a CSS string. |
| `minLines` | yes | `number` | `0` | Forces the text container to reserve space for a minimum number of lines. |
| `editable` | yes | `false \| `[[types/editable-config|EditableConfig]] | `false` | Enable inline editing for this text node. |
| `value` | no | `string` | `""` | Text content to display. |
| `textAlign` | yes | `"start" \| "center" \| "end"` | `"start"` | Horizontal text alignment. |
| `truncate` | yes | `boolean` | `false` | Truncate overflow with ellipsis. |
| `maxLines` | yes | `number` | `0` | Limit text to a maximum number of lines (applies a line clamp). |

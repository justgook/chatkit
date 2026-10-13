---
title: Col
status: draft
---

Vertical flex layout container.

## Example

![Col example](content/images/col.png)

## Usage

```tsx
<Col gap={2}>{/* children */}</Col>
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `wrap` | yes | `"nowrap" \| "wrap" \| "wrap-reverse"` | `"nowrap"` | Wrap behavior for flex items. |
| `height` | yes | `string \| number` | `0` | Explicit height; accepts a numeric pixel value or a CSS string. |
| `width` | yes | `string \| number` | `0` | Explicit width; accepts a numeric pixel value or a CSS string. |
| `size` | yes | `string \| number` | `0` | Shorthand to set both width and height; accepts a numeric pixel value or a CSS string. |
| `minSize` | yes | `string \| number` | `0` | Shorthand to set both minWidth and minHeight; accepts a numeric pixel value or a CSS string. |
| `maxSize` | yes | `string \| number` | `0` | Shorthand to set both maxWidth and maxHeight; accepts a numeric pixel value or a CSS string. |
| `maxHeight` | yes | `string \| number` | `0` | Maximum height constraint; accepts a numeric pixel value or a CSS string. |
| `maxWidth` | yes | `string \| number` | `0` | Maximum width constraint; accepts a numeric pixel value or a CSS string. |
| `minHeight` | yes | `string \| number` | `0` | Minimum height constraint; accepts a numeric pixel value or a CSS string. |
| `minWidth` | yes | `string \| number` | `0` | Minimum width constraint; accepts a numeric pixel value or a CSS string. |
| `aspectRatio` | yes | `string \| number` | `0` | Aspect ratio of the box (e.g., 16/9); accepts a numeric value or a CSS string. |
| `radius` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "full" \| "100%" \| "none"` | `"none"` | Border radius; accepts a radius token. |
| `margin` | yes | `string \| number \| `[[types/margin|Margin]] | `0` | Outer margin; accepts a spacing unit, a CSS string, or a margin object. |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child component nodes. |
| `align` | yes | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"stretch"` | Cross-axis alignment of children. |
| `justify` | yes | `"start" \| "center" \| "end" \| "stretch" \| "between" \| "around" \| "evenly"` | `"start"` | Main-axis distribution of children. |
| `flex` | yes | `string \| number` | `0` | Flex growth/shrink factor. |
| `gap` | yes | `string \| number` | `0` | Gap between direct children; accepts a spacing unit or a CSS string. |
| `padding` | yes | `string \| number \| `[[types/padding|Padding]] | `0` | Inner padding; accepts a spacing unit, a CSS string, or a padding object. |
| `border` | yes | `number` | `0` | Border width in pixels. |
| `background` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Semantic intent for the surface; the renderer selects an appropriate background and contrast. |

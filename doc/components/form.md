---
title: Form
status: draft
---

Layout container optimized for form controls and submission.

## Example

```chatkit
<Form gap={2}>
  <Input name="email" placeholder="Email" />
  <Button label="Submit" submit />
</Form>
```

## Usage

```
<Form gap={2}>
  <Input name="email" placeholder="Email" />
  <Button label="Submit" submit />
</Form>
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `height` | yes | `string \| number` | `0` | Explicit height; accepts a numeric size or an interpreter-defined size expression. |
| `width` | yes | `string \| number` | `0` | Explicit width; accepts a numeric size or an interpreter-defined size expression. |
| `size` | yes | `string \| number` | `0` | Shorthand to set both width and height; accepts a numeric size or an interpreter-defined size expression. |
| `minHeight` | yes | `string \| number` | `0` | Minimum height constraint; accepts a numeric size or an interpreter-defined size expression. |
| `minWidth` | yes | `string \| number` | `0` | Minimum width constraint; accepts a numeric size or an interpreter-defined size expression. |
| `minSize` | yes | `string \| number` | `0` | Shorthand to set both minWidth and minHeight; accepts a numeric size or an interpreter-defined size expression. |
| `maxHeight` | yes | `string \| number` | `0` | Maximum height constraint; accepts a numeric size or an interpreter-defined size expression. |
| `maxWidth` | yes | `string \| number` | `0` | Maximum width constraint; accepts a numeric size or an interpreter-defined size expression. |
| `maxSize` | yes | `string \| number` | `0` | Shorthand to set both maxWidth and maxHeight; accepts a numeric size or an interpreter-defined size expression. |
| `aspectRatio` | yes | `string \| number` | `0` | Aspect ratio of the box (e.g., 16/9); accepts a numeric ratio or an interpreter-defined ratio expression. |
| `radius` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "full" \| "100%" \| "none"` | `"none"` | Border radius; accepts a radius token. |
| `margin` | yes | `number \| number[4]` | `0` | Outer spacing; one number applies to all sides, or four numbers specify top, right, bottom, left. |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child component nodes. |
| `direction` | yes | `"row" \| "col"` | `"col"` | Flex direction for laying out form children. |
| `align` | yes | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | `"stretch"` | Cross-axis alignment of children. |
| `justify` | yes | `"start" \| "center" \| "end" \| "stretch" \| "between" \| "around" \| "evenly"` | `"start"` | Main-axis distribution of children. |
| `wrap` | yes | `"nowrap" \| "wrap" \| "wrap-reverse"` | `"nowrap"` | Wrap behavior for flex items. |
| `flex` | yes | `string \| number` | `0` | Flex growth/shrink factor. |
| `gap` | yes | `string \| number` | `0` | Gap between direct children; accepts a numeric spacing value or an interpreter-defined spacing expression. |
| `padding` | yes | `number \| number[4]` | `0` | Inner spacing; one number applies to all sides, or four numbers specify top, right, bottom, left. |
| `border` | yes | `number` | `0` | Border width in interpreter-defined units. |
| `background` | yes | `"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `"neutral"` | Semantic intent for the surface; the renderer selects an appropriate background and contrast. |
| `onSubmitAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched when the form is submitted. |

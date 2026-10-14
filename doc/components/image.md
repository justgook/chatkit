---
title: Image
status: draft
---

Display images with optional framing and fitting.

## Example

```chatkit
<Image src="https://cnd.example.com/blue-chair.png" alt="Blue chair" frame />
```

## Usage

```
<Image src="https://cnd.example.com/blue-chair.png" alt="Blue chair" frame />
```

This is a leaf component: `children` is not accepted. See [[types/widget-component#child-slots|child-slot rules]].

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `src` | no | `string` | `""` | Image resource reference. |
| `alt` | yes | `string` | `""` | Alternate text for accessibility. |
| `frame` | yes | `boolean` | `false` | Draw a subtle frame around the image. |
| `fit` | yes | `"none" \| "cover" \| "contain" \| "fill" \| "scale-down"` | `"cover"` | How the image should fit within the container. |
| `position` | yes | `"center" \| "top" \| "bottom" \| "left" \| "right" \| "top left" \| "top right" \| "bottom left" \| "bottom right"` | `"center"` | Focal position of the image within the container. |
| `flush` | yes | `boolean` | `false` | Flush the image to the edge of its container, removing surrounding padding. |
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
| `onClickAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched on click. |

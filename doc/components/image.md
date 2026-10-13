---
title: Image
status: draft
---

Display remote images with optional framing and object-fit.

## Example

![Image example](content/images/image.png)

## Usage

```tsx
<Image src="https://cnd.example.com/blue-chair.png" alt="Blue chair" frame />
```

This is a leaf component: `children` is not accepted. See [[types/widget-component#child-slots|child-slot rules]].

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `src` | no | `string` | `""` | Image URL source. |
| `alt` | yes | `string` | `""` | Alternate text for accessibility. |
| `frame` | yes | `boolean` | `false` | Draw a subtle frame around the image. |
| `fit` | yes | `"none" \| "cover" \| "contain" \| "fill" \| "scale-down"` | `"cover"` | How the image should fit within the container. |
| `position` | yes | `"center" \| "top" \| "bottom" \| "left" \| "right" \| "top left" \| "top right" \| "bottom left" \| "bottom right"` | `"center"` | Focal position of the image within the container. |
| `flush` | yes | `boolean` | `false` | Flush the image to the edge of its container, removing surrounding padding. |
| `height` | yes | `string \| number` | `0` | Explicit height; accepts a numeric pixel value or a CSS string. |
| `width` | yes | `string \| number` | `0` | Explicit width; accepts a numeric pixel value or a CSS string. |
| `size` | yes | `string \| number` | `0` | Shorthand to set both width and height; accepts a numeric pixel value or a CSS string. |
| `minHeight` | yes | `string \| number` | `0` | Minimum height constraint; accepts a numeric pixel value or a CSS string. |
| `minWidth` | yes | `string \| number` | `0` | Minimum width constraint; accepts a numeric pixel value or a CSS string. |
| `minSize` | yes | `string \| number` | `0` | Shorthand to set both minWidth and minHeight; accepts a numeric pixel value or a CSS string. |
| `maxHeight` | yes | `string \| number` | `0` | Maximum height constraint; accepts a numeric pixel value or a CSS string. |
| `maxWidth` | yes | `string \| number` | `0` | Maximum width constraint; accepts a numeric pixel value or a CSS string. |
| `maxSize` | yes | `string \| number` | `0` | Shorthand to set both maxWidth and maxHeight; accepts a numeric pixel value or a CSS string. |
| `aspectRatio` | yes | `string \| number` | `0` | Aspect ratio of the box (e.g., 16/9); accepts a numeric value or a CSS string. |
| `radius` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "full" \| "100%" \| "none"` | `"none"` | Border radius; accepts a radius token. |
| `margin` | yes | `string \| number \| `[[types/margin|Margin]] | `0` | Outer margin; accepts a spacing unit, a CSS string, or a margin object. |
| `onClickAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched on click. |

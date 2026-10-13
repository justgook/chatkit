---
title: Chart
status: draft
---

Render simple bar, line, and area charts from tabular data.

## Example

![Chart example](content/images/chart.png)

## Usage

```tsx
<Chart
  data={[{ date: "2025-01-01", Desktop: 100, Mobile: 200 }]}
  series={[{ type: "bar", dataKey: "Desktop" }]}
  xAxis="date"
  height={240}
/>
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | no | `Record<string, string \| number>[]` | `[]` | Tabular dataset; each object represents a data row. |
| `series` | no | [[types/series|Series]]`[]` | `[]` | [[types/series|Series]] definitions describing how to read and render `data`; see the variant definitions. |
| `xAxis` | no | [[types/x-axis-config|XAxisConfig]] (`string`) | `""` | Property name in each `data` row whose value supplies the x-axis. |
| `showYAxis` | yes | `boolean` | `false` | Show a left y-axis with tick labels. |
| `showLegend` | yes | `boolean` | `true` | Display a legend describing the series. |
| `barGap` | yes | `number` | `0` | Sets a specific gap size in px between bars in the same category. |
| `barCategoryGap` | yes | `number` | `0` | Gap in pixels between bar categories. |
| `flex` | yes | `string \| number` | `0` | Flex growth/shrink factor. |
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
| `yAxis` | yes | `{domain?: object}` | — | Configuration for the y-axis scale. |
| `showTooltip` | yes | `boolean` | `true` | Display a tooltip when hovering over data points. |
| `showHoverDots` | yes | `boolean` | `true` | Display hover dots for line/area charts. |
| `showDots` | yes | `boolean` | `false` | Display persistent dots for line/area charts. |
| `showGrid` | yes | `boolean` | `true` | Display grid lines for the chart. |
| `tooltipValueFormatter` | yes | `object` (shape unresolved) | — | Custom tooltip value formatting strategy. |
| `showValueLabels` | yes | `boolean` | `false` | Display value labels for each data point. |
| `barRadius` | yes | `number` | `4` | Corner radius for bars in bar charts. |
| `valueLabelInterval` | yes | `number` | `1` | Render value labels at this interval (e.g. 3 = every 3rd point). |
| `valueLabelOffset` | yes | `number` | `0` | Offset to apply when rendering labels at an interval (e.g. 2 means start at index 2). |
| `visiblePointCount` | yes | `number` | `null` | Number of data points to show within the visible viewport when scrollable. |
| `scrollable` | yes | `boolean` | `false` | Enable horizontal scrolling for wide datasets. |
| `disableUserScroll` | yes | `boolean` | `false` | Prevent user-initiated scrolling while allowing programmatic scrolling. |
| `minPointWidth` | yes | `number` | `0` | Minimum width (px) for each data point when scrollable. |
| `scrollToValue` | yes | `string \| number` | `0` | X-axis value to scroll into view when scrollable. |

[[types/series|Series]] variants are defined by [[types/series|Series]].

---
title: Chart
status: draft
---

Render simple bar, line, and area charts from tabular data.

## Example

![Chart example](content/images/chart.png)

## Usage

```
<Chart
  data={[{ date: "2025-01-01", Desktop: 100, Mobile: 200 }]}
  series={[{ type: "bar", dataKey: "Desktop" }]}
  xAxis="date"
  height={240}
/>
```

The object form of `xAxis` supports custom labels:

```
<Chart
  data={[{ date: "2025-01-01", Desktop: 100, Mobile: 200 }]}
  series={[{ type: "bar", dataKey: "Desktop" }]}
  xAxis={{ dataKey: "date", labels: { "2025-01-01": "Jan 1" } }}
  yAxis={{ domain: [0, 250] }}
  showYAxis={true}
  height={240}
/>
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `data` | no | `Record<string, string \| number>[]` | `[]` | Tabular dataset; each object represents a data row. |
| `series` | no | [[types/series|Series]]`[]` | `[]` | [[types/series|Series]] definitions describing how to read and render `data`; see the variant definitions. |
| `xAxis` | no | [[types/x-axis-config|XAxisConfig]] | `""` | Data-key string or an object specifying `dataKey`, label visibility, and custom labels. |
| `showYAxis` | yes | `boolean` | `false` | Show a left y-axis with tick labels. |
| `showLegend` | yes | `boolean` | `true` | Display a legend describing the series. |
| `barGap` | yes | `number` | `0` | Gap between bars in the same category, in interpreter-defined units. |
| `barCategoryGap` | yes | `number` | `0` | Gap between bar categories, in interpreter-defined units. |
| `flex` | yes | `string \| number` | `0` | Flex growth/shrink factor. |
| `height` | yes | `string \| number` | `0` | Explicit height; accepts a numeric size or an interpreter-defined size expression. |
| `width` | yes | `string \| number` | `0` | Explicit width; accepts a numeric size or an interpreter-defined size expression. |
| `size` | yes | `string \| number` | `0` | Shorthand to set both width and height; accepts a numeric size or an interpreter-defined size expression. |
| `minSize` | yes | `string \| number` | `0` | Shorthand to set both minWidth and minHeight; accepts a numeric size or an interpreter-defined size expression. |
| `maxSize` | yes | `string \| number` | `0` | Shorthand to set both maxWidth and maxHeight; accepts a numeric size or an interpreter-defined size expression. |
| `maxHeight` | yes | `string \| number` | `0` | Maximum height constraint; accepts a numeric size or an interpreter-defined size expression. |
| `maxWidth` | yes | `string \| number` | `0` | Maximum width constraint; accepts a numeric size or an interpreter-defined size expression. |
| `minHeight` | yes | `string \| number` | `0` | Minimum height constraint; accepts a numeric size or an interpreter-defined size expression. |
| `minWidth` | yes | `string \| number` | `0` | Minimum width constraint; accepts a numeric size or an interpreter-defined size expression. |
| `aspectRatio` | yes | `string \| number` | `0` | Aspect ratio of the box (e.g., 16/9); accepts a numeric ratio or an interpreter-defined ratio expression. |
| `yAxis` | yes | `{ domain?: number[2] }` | `null` | Optional scale bounds, ordered minimum then maximum; omitted domain means automatic bounds. See [[components/chart#y-axis-bounds|Y-axis bounds]]. |
| `showTooltip` | yes | `boolean` | `true` | Display a tooltip when hovering over data points. |
| `showHoverDots` | yes | `boolean` | `true` | Display hover dots for line/area charts. |
| `showDots` | yes | `boolean` | `false` | Display persistent dots for line/area charts. |
| `showGrid` | yes | `boolean` | `true` | Display grid lines for the chart. |
| `showValueLabels` | yes | `boolean` | `false` | Display value labels for each data point. |
| `barRadius` | yes | `number` | `4` | Corner radius for bars in bar charts. |
| `valueLabelInterval` | yes | `number` | `1` | Render value labels at this interval (e.g. 3 = every 3rd point). |
| `valueLabelOffset` | yes | `number` | `0` | Offset to apply when rendering labels at an interval (e.g. 2 means start at index 2). |
| `visiblePointCount` | yes | `number` | `null` | Number of data points to show within the visible chart region when scrollable. |
| `scrollable` | yes | `boolean` | `false` | Enable horizontal scrolling for wide datasets. |
| `disableUserScroll` | yes | `boolean` | `false` | Prevent user-initiated scrolling while allowing programmatic scrolling. |
| `minPointWidth` | yes | `number` | `0` | Minimum width for each data point when scrollable, in interpreter-defined units. |
| `scrollToValue` | yes | `string \| number` | `0` | X-axis value to scroll into view when scrollable. |

## Y-axis bounds

`yAxis` accepts only an optional `domain` field. `number[2]` means exactly two numbers: `[minimum, maximum]`. Both must be finite, and `minimum` must be less than `maximum`; invalid bounds are an interface error.

Omitted `yAxis` (`null`), an empty object, or omitted `domain` selects automatic bounds based on the plotted values. A missing domain does not default to `[0, 0]`. Exact automatic-range calculation and treatment of values outside explicit bounds are interpreter responsibilities. `showYAxis` controls axis visibility independently of the scale bounds.

`ticks`, `width`, `axisLine`, `orientation`, `min`, `max`, `tickFormatter`, and `hide` are not supported Y-axis fields. X-axis `hide` remains supported as defined by [[types/x-axis-config|XAxisConfig]].

## Tooltips and series

Tooltips display ordinary data values; there is no `tooltipValueFormatter` prop or custom formatting configuration.

[[types/series|Series]] variants are defined by [[types/series|Series]]. Series colors use semantic intent, not literal colors. Area `fillColor` remains supported; omission derives the fill from the resolved series color.

---
title: Grid
status: draft
---

Grid layout with responsive columns and gaps.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | yes | [[components/grid#grid-item-props|GridItem]]`[]` | `[]` | Items within this grid. |
| `columns` | yes | [[types/responsive|Responsive]]`<number \| string[]>` | `0` | Column count or CSS track strings. |
| `gap` | yes | [[types/responsive|Responsive]]`<number \| string>` | `0` | Spacing between direct children. |

## Composition

`Grid` → `Grid.Item` → content. Grid accepts only [[components/grid#grid-item-props|GridItem]] nodes. Each item accepts general [[types/widget-component|WidgetComponent]] content. The item interface is defined here, not as a standalone component.

[[components/grid#grid-item-props|GridItem]] is an alias of `Grid.Item`.

## Grid.Item Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Child content. |
| `span` | yes | [[types/responsive|Responsive]]`<number \| string>` | `0` | Column span. |

Numeric column rounding, breakpoint widths, and spacing scales are not fixed by this interface. See [[types/responsive|Responsive]].

---
title: Table
status: draft
---

Tabular layout for column-aligned data, with support for header rows and cell spans.

## Example

![Table example](content/images/table.png)

## Usage

```tsx
<Table>
  <Table.Row header>
    <Table.Cell><Text value="Item" size="sm" /></Table.Cell>
    <Table.Cell><Text value="Category" size="sm" /></Table.Cell>
    <Table.Cell align="end"><Text value="Qty" size="sm" /></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell><Text value="Notebook" size="sm" /></Table.Cell>
    <Table.Cell><Text value="Office" size="sm" /></Table.Cell>
    <Table.Cell align="end"><Text value="3" size="sm" /></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell><Text value="Pen Set" size="sm" /></Table.Cell>
    <Table.Cell><Text value="Office" size="sm" /></Table.Cell>
    <Table.Cell align="end"><Text value="2" size="sm" /></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell><Text value="Mouse Pad" size="sm" /></Table.Cell>
    <Table.Cell><Text value="Accessories" size="sm" /></Table.Cell>
    <Table.Cell align="end"><Text value="1" size="sm" /></Table.Cell>
  </Table.Row>
</Table>
```

## Table Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | yes | [[components/table#table-row-props|TableRow]]`[]` | `[]` | Rows within this table. |

## Composition

`Table` → `Table.Row` → `Table.Cell` → content. Row and cell interfaces are owned by Table, not standalone components. Table accepts only [[components/table#table-row-props|TableRow]] nodes; each row accepts only [[components/table#table-cell-props|TableCell]] nodes. Cells accept general [[types/widget-component|WidgetComponent]] content. Aliases: [[components/table#table-row-props|TableRow]] = `Table.Row`, [[components/table#table-cell-props|TableCell]] = `Table.Cell`.

## Table.Row Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | yes | [[components/table#table-cell-props|TableCell]]`[]` | `[]` | Cells within this row. |
| `header` | yes | `boolean` | `false` | Render this row using table header cells. |

## Table.Cell Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Component content within this cell. |
| `width` | yes | `string \| number` | `0` | Explicit width for the cell; accepts a numeric pixel value or a CSS string. |
| `padding` | yes | `string \| number \| `[[types/padding|Padding]] | `0` | Inner spacing for cell content; accepts a spacing unit, CSS string, or padding object. |
| `colSpan` | yes | `number` | `0` | Number of columns this cell spans. |
| `rowSpan` | yes | `number` | `0` | Number of rows this cell spans. |
| `align` | yes | `"start" \| "center" \| "end"` | `"start"` | Horizontal alignment for cell content; matches the CSS `text-align` initial value. |
| `vAlign` | yes | `"start" \| "center" \| "end" \| "baseline"` | `"baseline"` | Vertical alignment for cell content; matches the CSS `vertical-align` initial value. `start`, `center`, and `end` correspond to top, middle, and bottom. |
| `colSize` | yes | `"sm" \| "md" \| "lg" \| "xs" \| "xl"` | `"md"` | Size hint used when distributing column widths. |

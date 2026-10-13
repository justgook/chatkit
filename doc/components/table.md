---
title: Table
status: draft
---

Tabular layout for column-aligned data, with support for header rows and cell spans.

## Example

![Table example](content/images/table.png)

## Usage

```
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
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `children` | yes | [[components/table#table-row-props|TableRow]]`[]` | `[]` | Rows within this table. |

## Composition

`Table` → `Table.Row` → `Table.Cell` → content. Row and cell interfaces are owned by Table, not standalone components. Table accepts only [[components/table#table-row-props|TableRow]] nodes; each row accepts only [[components/table#table-cell-props|TableCell]] nodes. Cells accept general [[types/widget-component|WidgetComponent]] content. Aliases: [[components/table#table-row-props|TableRow]] = `Table.Row`, [[components/table#table-cell-props|TableCell]] = `Table.Cell`.

## Table.Row Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `children` | yes | [[components/table#table-cell-props|TableCell]]`[]` | `[]` | Cells within this row. |
| `header` | yes | `boolean` | `false` | Render this row using table header cells. |

## Table.Cell Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `children` | yes | [[types/widget-component|WidgetComponent]]`[]` | `[]` | Component content within this cell. |
| `width` | yes | `string \| number` | `0` | Explicit width for the cell; accepts a numeric size or an interpreter-defined size expression. |
| `padding` | yes | `number \| number[4]` | `0` | Inner spacing; one number applies to all sides, or four numbers specify top, right, bottom, left. |
| `colSpan` | yes | `number` | `0` | Number of columns this cell spans. |
| `rowSpan` | yes | `number` | `0` | Number of rows this cell spans. |
| `align` | yes | `"start" \| "center" \| "end"` | `"start"` | Horizontal alignment for cell content. |
| `vAlign` | yes | `"start" \| "center" \| "end" \| "baseline"` | `"baseline"` | Vertical alignment for cell content. `start`, `center`, and `end` correspond to top, middle, and bottom. |
| `colSize` | yes | `"sm" \| "md" \| "lg" \| "xs" \| "xl"` | `"md"` | Size hint used when distributing column widths. |

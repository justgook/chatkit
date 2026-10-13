---
title: Components
status: draft
---

# Components

chatkit defines public component interfaces for an independent implementation. Component names, props, allowed values, defaults, and composition are documented here; renderer internals and exact appearance are separate design decisions.

These interfaces are drafts. Known definitions are preserved; unresolved contracts are explicitly marked. See [[types|shared types and open definitions]] and [[types/widget-icon|the icon catalog]].

Usage examples show composition notation. Images are static, non-normative visual references; they are not examples of a working chatkit renderer.

## Controls

[[components/button|Button]] · [[components/datepicker|DatePicker]] · [[components/select|Select]] · [[components/checkbox|Checkbox]] · [[components/radiogroup|RadioGroup]] · [[components/input|Input]] · [[components/textarea|Textarea]] · [[components/form|Form]]

## Layout

[[components/box|Box]] · [[components/row|Row]] · [[components/col|Col]] · [[components/spacer|Spacer]] · [[components/divider|Divider]] · [[components/table|Table]] · [[components/grid|Grid]]

## Typography

[[components/text|Text]] · [[components/title|Title]] · [[components/caption|Caption]] · [[components/label|Label]] · [[components/markdown|Markdown]]

## Content

[[components/image|Image]] · [[components/icon|Icon]] · [[components/chart|Chart]] · [[components/badge|Badge]] · [[components/favicon|Favicon]]

## Containers

[[components/basic|Basic]] · [[components/card|Card]] · [[components/listview|ListView]] · [[components/cardcarousel|CardCarousel]] · [[components/cardlinkitem|CardLinkItem]]

## Other

[[components/transition|Transition]] · [[components/iframe|IFrame (reserved interface)]]

## Parent-owned child interfaces

- [[components/table|Table]] owns `Table.Row` and `Table.Cell`, also named [[components/table#table-row-props|TableRow]] and [[components/table#table-cell-props|TableCell]].
- [[components/listview|ListView]] owns [[components/listview#listviewitem-props|ListViewItem]].
- [[components/grid|Grid]] owns `Grid.Item`, also named [[components/grid#grid-item-props|GridItem]].

These child definitions live within their parent pages. Their types express the required relationships: Table takes rows, rows take cells, ListView takes items, and Grid takes grid items. Inner content uses general component nodes.

---
title: WidgetComponent
status: draft
---

# WidgetComponent

`WidgetComponent` is a general component node with the props defined on its component page. It is not an arbitrary renderable value, raw string, interpreter-specific element, or configuration object. Text content is represented by Text, Caption, Title, Label, or Markdown nodes.

The general component union is:

```
type WidgetComponent =
  | Badge | Basic | Box | Button | Caption | Card | CardCarousel
  | CardLinkItem | Chart | Checkbox | Col | DatePicker | Divider
  | Favicon | Form | Grid | Icon | IFrame | Image | Input
  | Label | ListView | Markdown | RadioGroup | Row | Select
  | Spacer | Table | Text | Textarea | Title | Transition;
```

## Member definitions

[[components/badge|Badge]] · [[components/basic|Basic]] · [[components/box|Box]] · [[components/button|Button]] · [[components/caption|Caption]] · [[components/card|Card]] · [[components/cardcarousel|CardCarousel]] · [[components/cardlinkitem|CardLinkItem]] · [[components/chart|Chart]] · [[components/checkbox|Checkbox]] · [[components/col|Col]] · [[components/datepicker|DatePicker]] · [[components/divider|Divider]] · [[components/favicon|Favicon]] · [[components/form|Form]] · [[components/grid|Grid]] · [[components/icon|Icon]] · [[components/iframe|IFrame]] · [[components/image|Image]] · [[components/input|Input]] · [[components/label|Label]] · [[components/listview|ListView]] · [[components/markdown|Markdown]] · [[components/radiogroup|RadioGroup]] · [[components/row|Row]] · [[components/select|Select]] · [[components/spacer|Spacer]] · [[components/table|Table]] · [[components/text|Text]] · [[components/textarea|Textarea]] · [[components/title|Title]] · [[components/transition|Transition]]

These names denote component node types, not renderer classes. This specification defines component interfaces, not a serialization format; no serialized `type` discriminator or envelope is prescribed.

Every component, including parent-owned rows, cells, and items, accepts an optional string `id` for caller-defined tracking. It defaults to `""`, meaning no tracking identifier. Supplying `id` does not change layout, content, or child-slot rules and has no implicit rendering behavior. Callers should choose distinct IDs within the scope they track.

- `WidgetComponent` accepts exactly one general component node, as used by Transition.
- `WidgetComponent[]` accepts an array of general component nodes. Omission depends on the prop's Optional column; an array is not shorthand for a single node.
- [[components/table#table-row-props|TableRow]] is the node type defined by Table.Row; [[components/table#table-cell-props|TableCell]] is the node type defined by Table.Cell. Table takes [[components/table#table-row-props|TableRow]]`[]`; rows take [[components/table#table-cell-props|TableCell]]`[]`; cells take `WidgetComponent[]`.
- [[components/listview#listviewitem-props|ListViewItem]] is defined within ListView. ListView takes [[components/listview#listviewitem-props|ListViewItem]]`[]`; items take `WidgetComponent[]`.
- [[components/grid#grid-item-props|GridItem]] is the node type defined by Grid.Item. Grid takes [[components/grid#grid-item-props|GridItem]]`[]`; items take `WidgetComponent[]`.

Parent-owned types are excluded from the general union: they belong only in their declared parent child slots. The parent pages are the authoritative definitions; aliases do not create additional node types. These are deliberate interface constraints, independent of the renderer. Enforcement and error reporting remain implementation decisions.

## Child slots

`children` is not a universal component prop. It is accepted only by components whose prop table explicitly declares it. Components without that prop do not accept nested component nodes; passing `children` is an interface error, not content to ignore.

- Box, Row, Col, Form, Basic, Card, CardCarousel, and CardLinkItem accept `WidgetComponent[]`.
- Table accepts [[components/table#table-row-props|TableRow]]`[]`; rows accept [[components/table#table-cell-props|TableCell]]`[]`; cells accept `WidgetComponent[]`.
- ListView accepts [[components/listview#listviewitem-props|ListViewItem]]`[]`; items accept `WidgetComponent[]`.
- Grid accepts [[components/grid#grid-item-props|GridItem]]`[]`; items accept `WidgetComponent[]`.
- Transition accepts exactly one `WidgetComponent`, not an array.

All other general component types are leaves: Badge, Button, Caption, Chart, Checkbox, DatePicker, Divider, Favicon, Icon, IFrame, Image, Input, Label, Markdown, RadioGroup, Select, Spacer, Text, Textarea, and Title. They use their declared value, label, source, data, options, or configuration props instead of child nodes. Chart series and control options are data objects, not component children.

Array child slots default to `[]`; required child props must still be supplied, and Transition requires its single child. Precise parent-owned types remain restricted to their declared parent slots.

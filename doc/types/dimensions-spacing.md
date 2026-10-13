---
title: Dimensions and spacing
status: draft
---

# Dimensions and spacing

Numeric dimensions are pixel values; strings describe CSS dimensions. Numeric spacing values denote spacing units rather than necessarily pixels. The spacing scale is not yet fixed. Radius and size token names remain inline; exact pixel mappings are not part of the interface.

## Flex defaults

For flex-layout props, use the effective CSS flexbox defaults expressed in our interface tokens:

- `align: "stretch"` — stretch auto-sized items along the cross axis.
- `justify: "start"` — pack items at the start of the main axis (`flex-start`).
- `wrap: "nowrap"` — keep items on one flex line.

Modern CSS's initial alignment keyword `normal` produces these effective alignment behaviors in flex layout. This convention applies only where the relevant prop is declared. Table.Cell content alignment and DatePicker popover alignment are not flex-layout props and retain their separate defaults.

---
title: WidgetStatus
status: draft
---

# WidgetStatus

`WidgetStatus` is an informational label used by Card, ListView, and CardCarousel.

| Field | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `text` | yes | `string` | `""` | Status text to display. |
| `favicon` | yes | [[types/widget-icon|WidgetIcon]] | `null` | Optional icon displayed with the status text; omission means no icon. |

```
status={{ text: "hello", favicon: "CodeSquareSlash" }}
```

Omitted status (`null`) displays no status. A supplied status displays its text and any supplied favicon; it does not replace children, disable interactions, or imply a loading/error state. Exact placement and styling are implementation choices.

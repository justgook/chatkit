---
title: LineSeries
status: draft
---

# LineSeries

| Name | Description | Default |
| --- | --- | --- |
| `type`* | `"line"` | — |
| `dataKey`* | Key in each data row to read numeric values from.<br>`string` | `""` |
| `label` | Label displayed in legends and tooltips.<br>`string` | `""` |
| `color` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component.<br>`"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info" \| "discovery" \| "primary" \| "secondary"` | `null` |
| `curveType` | Curve interpolation type.<br>`"basis"` `"basisClosed"` `"basisOpen"` `"bumpX"` `"bumpY"` `"bump"` `"linear"` `"linearClosed"` `"natural"` `"monotoneX"` `"monotoneY"` `"monotone"` `"step"` `"stepBefore"` `"stepAfter"` | `"natural"` |

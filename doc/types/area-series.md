---
title: AreaSeries
status: draft
---

# AreaSeries

| Name | Description | Default |
| --- | --- | --- |
| `type`* | `"area"` | — |
| `dataKey`* | Key in each data row to read numeric values from.<br>`string` | `""` |
| `label` | Label displayed in legends and tooltips.<br>`string` | `""` |
| `color` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component.<br>`"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `null` |
| `fillColor` | Semantic intent for the area fill; omitted means derive from the series intent.<br>`"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `null` |
| `curveType` | Curve interpolation type.<br>`"basis"` `"basisClosed"` `"basisOpen"` `"bumpX"` `"bumpY"` `"bump"` `"linear"` `"linearClosed"` `"natural"` `"monotoneX"` `"monotoneY"` `"monotone"` `"step"` `"stepBefore"` `"stepAfter"` | `"natural"` |
| `stack` | Group areas together by the same stack id.<br>`string` | `""` |

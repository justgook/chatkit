---
title: BarSeries
status: draft
---

# BarSeries

| Name | Description | Default |
| --- | --- | --- |
| `type`* | `"bar"` | — |
| `dataKey`* | Key in each data row to read numeric values from.<br>`string` | `""` |
| `label` | Label displayed in legends and tooltips.<br>`string` | `""` |
| `color` | Semantic intent, not a literal color; the renderer selects colors appropriate to this component.<br>`"neutral" \| "accent" \| "success" \| "warning" \| "danger" \| "info"` | `null` |
| `stack` | Group bars together by the same stack id.<br>`string` | `""` |

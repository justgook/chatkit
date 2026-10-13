---
title: XAxisConfig
status: draft
---

# XAxisConfig

`XAxisConfig` accepts a data-key string or an object configuring x-axis labels.

```
type XAxisConfig = string | {
  dataKey: string;
  hide?: boolean;
  labels?: Record<string | number, string>;
};
```

A string is shorthand for an object containing that `dataKey`: `"date"` and `{ dataKey: "date" }` are equivalent. The key identifies the property in each Chart `data` row supplying the x-axis value. Series `dataKey` values identify the properties supplying numeric series values.

## Object fields

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `dataKey` | no | `string` | `""` | Property in each data row supplying the x-axis value. |
| `hide` | yes | `boolean` | `false` | Hide x-axis labels without changing the data mapping. |
| `labels` | yes | `Record<string \| number, string>` | `null` | Map raw x-axis values to display labels. Omission means display raw values; unmapped values also retain their raw display. |

```
xAxis={{
  dataKey: "date",
  labels: {
    "2025-01-01": "Jan 1",
    "2025-01-02": "Jan 2",
  },
}}
```

Chart requires `xAxis`; the object form requires `dataKey`. Handling a key missing from a data row is the interpreter's responsibility.

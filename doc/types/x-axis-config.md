---
title: XAxisConfig
status: draft
---

# XAxisConfig

`XAxisConfig` is a string naming a property in Chart’s `data` rows, not an axis configuration object.

```ts
type XAxisConfig = string;
```

For `data={[{ date: "2025-01-01", Desktop: 100, Mobile: 200 }]}`, `xAxis="date"` reads the `date` value from each row for the x-axis. Series `dataKey` values select the properties containing series values.

Chart requires `xAxis`. Handling a key missing from a data row remains to be specified.

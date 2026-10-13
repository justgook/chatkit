---
title: Spacer
status: draft
---

Flexible space to separate content within a layout.

## Example

![Spacer example](content/images/spacer.png)

## Usage

```
<Row>
  <Badge label="Left" />
  <Spacer minSize={16} />
  <Badge label="Right" />
</Row>
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `minSize` | yes | `string \| number` | `"auto"` | Minimum size the spacer should occupy along the flex direction; accepts a numeric size or an interpreter-defined size expression. |

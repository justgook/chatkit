---
title: Transition
status: draft
---

Animate layout changes for a single child component.

## Example

```chatkit
<Transition>
  <Text value="Content" />
</Transition>
```

## Usage

```
<Transition>
  <Text value="Content" />
</Transition>
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `children` | no | [[types/widget-component|WidgetComponent]] | — | The child component to animate layout changes for. |

---
title: Checkbox
status: draft
---

Binary selection control.

## Example

![Checkbox example](content/images/checkbox.png)

## Usage

```
<Checkbox name="accept" label="I agree" />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `name` | no | `string` | `""` | Form field name; see [[types/action-config|action and form-field semantics]]. |
| `label` | yes | `string` | `""` | Optional label text rendered next to the checkbox. |
| `defaultChecked` | yes | `boolean` | `false` | The initial checked state of the checkbox. |
| `onChangeAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched when the checked state changes. |
| `disabled` | yes | `boolean` | `false` | Disable interactions and apply disabled styles. |
| `required` | yes | `boolean` | `false` | Mark the checkbox as required for form submission. |
| `checked` | yes | `boolean` | `false` | Whether the checkbox is checked. |

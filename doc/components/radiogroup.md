---
title: RadioGroup
status: draft
---

Choose a single option from a set.

## Example

![RadioGroup example](content/images/radiogroup.png)

## Usage

```tsx
<RadioGroup name="size" options={[{ label: "Small", value: "sm" }]} />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | no | `string` | `""` | Form field name; see [[types/action-config|action and form-field semantics]]. |
| `options` | yes | `{ label: string; value: string; disabled?: boolean; }[]` | `[]` | Array of options to render as radio items. |
| `ariaLabel` | yes | `string` | `""` | Accessible label for the radio group; falls back to `name`. |
| `onChangeAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched when the selected value changes. |
| `defaultValue` | yes | `string` | `""` | Initial selected value of the radio group. |
| `direction` | yes | `"row" \| "col"` | `"row"` | Layout direction of the radio items. |
| `disabled` | yes | `boolean` | `false` | Disable interactions and apply disabled styles for the entire group. |
| `required` | yes | `boolean` | `false` | Mark the group as required for form submission. |
| `value` | yes | `string` | `""` | Current selected option value; matches the string type of `options[].value`. |

---
title: Select
status: draft
---

Single-value dropdown select control.

## Example

```chatkit
<Select
  name="flavor"
  placeholder="Choose a flavor…"
  options={[
    { label: "Vanilla", value: "vanilla" },
    { label: "Chocolate", value: "chocolate" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Mint chocolate chip", value: "mint" },
    { label: "Pistachio (sold out)", value: "pistachio", disabled: true }
  ]}
/>
```

## Usage

```
<Select
  name="flavor"
  placeholder="Choose a flavor…"
  options={[
    { label: "Vanilla", value: "vanilla" },
    { label: "Chocolate", value: "chocolate" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Mint chocolate chip", value: "mint" },
    { label: "Pistachio (sold out)", value: "pistachio", disabled: true }
  ]}
/>
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `name` | no | `string` | `""` | Form field name; see [[types/action-config|action and form-field semantics]]. |
| `options` | no | `{ value: string; label: string; disabled?: boolean; description?: string; }[]` | `[]` | List of selectable options. |
| `onChangeAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched when the value changes. |
| `placeholder` | yes | `string` | `"Choose an option…"` | Placeholder text shown when no value is selected. Set to `""` for a blank placeholder. |
| `defaultValue` | yes | `string` | `""` | Initial value of the select. |
| `variant` | yes | `"solid" \| "soft" \| "outline" \| "ghost"` | `"outline"` | Visual style of the select. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "3xs"` | `md` | Controls the size of the control. |
| `pill` | yes | `boolean` | `false` | Determines if the select should be a fully rounded pill shape. |
| `block` | yes | `boolean` | `false` | Extends select to 100% of available width. |
| `clearable` | yes | `boolean` | `false` | Show a clear control to unset the value. |
| `disabled` | yes | `boolean` | `false` | Disable interactions and apply disabled styles. |
| `searchable` | yes | `boolean` | `false` | Enable searching the available options. |
| `required` | yes | `boolean` | `false` | Require a value for form submission. |
| `value` | yes | `string` | `""` | Current selected option value; matches the string type of `options[].value`. |

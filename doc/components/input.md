---
title: Input
status: draft
---

Single-line text input control.

## Example

![Input example](content/images/input.png)

## Usage

```tsx
<Input name="email" placeholder="you@example.com" />
```

This is a leaf component: `children` is not accepted. See [[types/widget-component#child-slots|child-slot rules]].

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | no | `string` | `""` | Form field name; see [[types/action-config|action and form-field semantics]]. |
| `inputType` | yes | `"number" \| "email" \| "text" \| "password" \| "tel" \| "url"` | `"text"` | Native input type. |
| `defaultValue` | yes | `string \| number` | `0` for `"number"`; `""` otherwise | Initial input value; uses the same type as `value` for the selected `inputType`. |
| `variant` | yes | `"soft" \| "outline"` | `"outline"` | Visual style of the input. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "3xs"` | `md` | Controls the size of the input |
| `gutterSize` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl"` | `size` | Controls gutter on the edges of the input, defaults to value from `size`. |
| `required` | yes | `boolean` | `false` | Mark the input as required for form submission. |
| `pattern` | yes | `string` | `""` | Regex pattern for input validation. |
| `placeholder` | yes | `string` | `""` | Placeholder text shown when empty. |
| `allowAutofillExtensions` | yes | `boolean` | `inputType == "password"` | Allow password managers / autofill extensions to appear. |
| `autoSelect` | yes | `boolean` | `false` | Select all contents of the input when it mounts. |
| `autoFocus` | yes | `boolean` | `false` | Autofocus the input when it mounts. |
| `disabled` | yes | `boolean` | `false` | Disable interactions and apply disabled styles. |
| `pill` | yes | `boolean` | `false` | Determines if the input should be a fully rounded pill shape. |
| `value` | yes | `string \| number` | `0` for `"number"`; `""` otherwise | Current input value: number when `inputType="number"`, string for all other input types. |
| `onChangeAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched when the value changes. |

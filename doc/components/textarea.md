---
title: Textarea
status: draft
---

Multi-line text input control.

## Example

![Textarea example](content/images/textarea.png)

## Usage

```tsx
<Textarea name="message" rows={4} />
```

This is a leaf component: `children` is not accepted. See [[types/widget-component#child-slots|child-slot rules]].

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | no | `string` | `""` | Form field name; see [[types/action-config|action and form-field semantics]]. |
| `defaultValue` | yes | `string` | `""` | Initial value of the textarea. |
| `required` | yes | `boolean` | `false` | Mark the textarea as required for form submission. |
| `placeholder` | yes | `string` | `""` | Placeholder text shown when empty. |
| `autoSelect` | yes | `boolean` | `false` | Select all contents of the textarea when it mounts. |
| `autoFocus` | yes | `boolean` | `false` | Autofocus the textarea when it mounts. |
| `disabled` | yes | `boolean` | `false` | Disable interactions and apply disabled styles. |
| `variant` | yes | `"soft" \| "outline"` | `"outline"` | Visual style of the textarea. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "3xs"` | `md` | Controls the size of the textarea |
| `gutterSize` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl"` | `size` | Controls gutter on the edges of the textarea, defaults to value from `size`. |
| `rows` | yes | `number` | `3` | Initial number of visible rows. |
| `autoResize` | yes | `boolean` | `false` | Automatically grow/shrink to fit content. |
| `maxRows` | yes | `number` | `Math.max(rows, 10)` | Maximum number of rows when auto-resizing. |
| `allowAutofillExtensions` | yes | `boolean` | `false` | Allow password managers / autofill extensions to appear. |
| `value` | yes | `string` | `""` | Current text value. |
| `onChangeAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched when the value changes. |

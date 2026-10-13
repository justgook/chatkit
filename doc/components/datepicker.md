---
title: DatePicker
status: draft
---

Select a date from a calendar popover.

## Example

![DatePicker example](content/images/datepicker.png)

## Usage

```tsx
<DatePicker name="birthday" placeholder="YYYY-MM-DD" />
```

This is a leaf component: `children` is not accepted. See [[types/widget-component#child-slots|child-slot rules]].

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | no | `string` | `""` | Form field name; see [[types/action-config|action and form-field semantics]]. |
| `onChangeAction` | yes | [[types/action-config|ActionConfig]] | `null` | Action dispatched when the date value changes. |
| `placeholder` | yes | `string` | `""` | Placeholder text shown when no date is selected. |
| `defaultValue` | yes | `string` | `""` | Initial ISO date string (e.g., 2024-01-31). |
| `min` | yes | `string` | `""` | Earliest selectable ISO date (inclusive). |
| `max` | yes | `string` | `""` | Latest selectable ISO date (inclusive). |
| `variant` | yes | `"solid" \| "soft" \| "outline" \| "ghost"` | `"outline"` | Visual variant of the datepicker control. |
| `size` | yes | `"sm" \| "md" \| "lg" \| "2xs" \| "xs" \| "xl" \| "2xl" \| "3xl" \| "3xs"` | `md` | Controls the size of the control. |
| `side` | yes | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Preferred side to render the calendar. |
| `align` | yes | `"start" \| "center" \| "end"` | `center` | Preferred alignment of the calendar relative to the datepicker control. |
| `pill` | yes | `boolean` | `false` | Determines if the datepicker should be a fully rounded pill shape. |
| `block` | yes | `boolean` | `false` | Extends datepicker to 100% of available width. |
| `clearable` | yes | `boolean` | `false` | Show a clear control to unset the value. |
| `disabled` | yes | `boolean` | `false` | Disable interactions and apply disabled styles. |
| `required` | yes | `boolean` | `false` | Require a value for form submission. |
| `value` | yes | `string` | `""` | Current ISO date string (for example, 2024-01-31). |

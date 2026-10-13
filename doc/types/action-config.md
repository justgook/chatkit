---
title: ActionConfig
status: draft
---

# ActionConfig

`ActionConfig` has the currently documented shape:

```
{ type: string; payload?: unknown }
```

An action-valued prop defaults to `null`, meaning no configured action. `null` is distinct from an action object with an empty `type`.

All widget action props use this same shape, including `onChangeAction`, `onClickAction`, and `onSubmitAction`. Consistency is a design decision for this implementation, not an unresolved type inference.

Action transport and dispatch timing are interpreter responsibilities, outside this data interface. No additional configuration fields are defined.

Form-control `name` identifies the value included in the form's `onSubmitAction` payload. Dot-separated names describe nested fields: `myData.myFieldName` → `payload.myData.myFieldName`. The interpreter determines how form values merge with an action's configured payload.

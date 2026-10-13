---
title: EditableConfig
status: draft
---

# EditableConfig

Used by Text's `editable` prop, alongside `false`:

```ts
{
  name: string;
  placeholder?: string;
  autoFocus?: boolean;
  autoSelect?: boolean;
  autoComplete?: string;
  allowAutofillExtensions?: boolean;
  pattern?: string;
  required?: boolean;
}
```

Fields without explicit defaults use their Go-style [[types#zero-values|zero values]]. Requiredness remains unchanged.

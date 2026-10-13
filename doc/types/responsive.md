---
title: Responsive
status: draft
---

# Responsive

`Responsive<T>` accepts a scalar `T` or a responsive object with a required `default` value and breakpoint overrides. Breakpoint names: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`.

Breakpoint names express ordered layout intent, not fixed physical widths. The host supplies a consistent threshold set; widgets cannot redefine it. Grid uses this shape for columns, gaps, and item spans.

## Resolution contract

- Measure the Grid's available container width. Resolve its item spans against the same width.
- Thresholds are minimum widths, ordered `xs < sm < md < lg < xl < 2xl`, and are inclusive at their boundary.
- A scalar value applies at every width.
- For an object, start with the required `default` value. Apply each defined override whose threshold is at or below the available width; the largest applicable defined override wins.
- Missing overrides retain the previous applicable value; they do not reset to `default`.
- The host chooses numeric thresholds and sizing units. No framework's breakpoint constants are implied.

For `{ default: 1, sm: 2, lg: 4 }`, use `1` below `sm` (including `xs`), `2` from `sm` up to `lg` (including `md`), and `4` at `lg` and above (including `xl` and `2xl`).

These are the resolution rules of this specification. Invalid-value handling, numeric coercion, and column rounding remain interpreter responsibilities.

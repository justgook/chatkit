---
title: Shared Types
status: draft
---

# Shared Types

Component pages define accepted props, requiredness, and defaults. Named types have one dedicated definition below; short value lists remain inline. A shared shape does not add props to any component.

`unknown` means the contract still needs a decision, not permission to accept arbitrary values. `Optional: unknown` means requiredness is unresolved. No implementation or visual-parity guarantees are implied by these draft interfaces.

## Omission and null

`null` means omit the prop. A documented `null` default does not add `null` to its accepted value type. Explicit `null` is treated as omission. Required props must still be supplied with a valid value; a `null` default does not make them optional.

## Zero values

Zero-value conventions used when specifying defaults:

| Type / representation | Zero value |
| --- | --- |
| Boolean | `false` |
| Number | `0` |
| String, including string-backed tokens and enums | `""` |
| Slice / component array | `[]` (empty array) |
| Map, pointer, or interface | `nil` |
| Struct | Each field recursively takes its zero value |

Arrays deliberately default to an empty array rather than Go's nil slice; other types retain the Go-style zero-value convention. Explicit defaults in prop tables override zero values. Missing optional props use the documented default or zero value; this does not make required props optional. Validation constraints still apply: a zero value does not automatically become a valid enum member or satisfy a required field.

For a union without an explicit default, prefer the number zero value `0` when `number` is an accepted member; otherwise prefer the string zero value `""` when `string` is an accepted member. This rule also applies to the scalar branch of [[types/responsive|Responsive]]. It does not choose defaults from fields nested inside object or array types, and it does not override Input's type-dependent value defaults.

Named shapes, unions without either primitive member, and `unknown` types whose concrete representation is unresolved still need that decision before their exact zero value can be determined. The zero-value rule does not invent a representation or resolve an unknown contract.

## Type definitions

- [[types/widget-component|WidgetComponent]] — general component nodes and parent-owned child types.
- [[types/widget-icon|WidgetIcon]] — complete icon catalog and naming conventions.
- [[types/action-config|ActionConfig]] — actions and form-field payload semantics.
- [[types/responsive|Responsive]] — values with breakpoint overrides.
- [[types/editable-config|EditableConfig]] — Text editing configuration.
- [[types/widget-status|WidgetStatus]] — container status.
- [[types/x-axis-config|XAxisConfig]] — Chart x-axis configuration.
- [[types/series|Series]] — Chart series union.
- [[types/bar-series|BarSeries]] · [[types/line-series|LineSeries]] · [[types/area-series|AreaSeries]] — series variant definitions.

## Conventions

Numeric dimension and spacing values use interpreter-defined units. Unit scales and exact radius and size token mappings are interpreter choices.

Parent-owned row, cell, and item interfaces remain within their component pages, not duplicated here. Only declared [[types/widget-component#child-slots|child slots]] accept nested components; leaf components do not accept `children`.

## Color intents

Color, background, and area-fill props accept semantic intent rather than literal colors:

`"neutral" | "accent" | "success" | "warning" | "danger" | "info" | "discovery" | "primary" | "secondary"`

| Intent | Meaning |
| --- | --- |
| `neutral` | Ordinary content or surfaces without semantic emphasis |
| `accent` | Primary emphasis or an important action |
| `success` | A successful or positive outcome |
| `warning` | Caution or a condition requiring attention |
| `danger` | Error, destructive action, or critical condition |
| `info` | Informational content |
| `discovery` | New features, exploration, or discovery |
| `primary` | Primary content or action |
| `secondary` | Secondary content or action |

The renderer resolves each intent according to the component role, style, interaction state, and active theme. The same intent can produce a filled button, soft surface, readable text, border, or chart mark; it does not specify a fixed color. Foreground/background combinations must maintain readable contrast. Exact palettes, rendering tokens, and color formulas are implementation choices.

Literal colors, palette names, previous color tokens, and theme names are not accepted as color intents. Prop names (`color`, `background`, `fillColor`) remain unchanged. Their enums are written inline in their authoritative tables.

Ordinary text, icons, borders, surfaces, and Badge default to `neutral`; Button defaults to `accent`. Existing size and style props remain unchanged. Chart series color defaults to omission (`null`), allowing automatic palette assignment; omitted area `fillColor` derives from its series color. Explicit series intents use intent-resolved colors. Automatic palette assignment is independent of semantic intent; exact colors and ordering are implementation choices.

Theme selection belongs to the host application, outside the widget interface. Components do not accept a `theme` prop or select a light/dark mode. All components in a rendered widget tree use the same host-selected theme; mixed per-element themes are not supported. Color intents remain semantic and resolve within that single theme. The widget specification defines no theme enum or default.

## Control value conventions

A control's `value` matches its data type, and `defaultValue` uses the same type. Both are optional:

- [[components/input|Input]] uses a number for `inputType="number"` and a string for every other input type. Defaults are `0` and `""`, respectively; the union does not permit either type indiscriminately.
- [[components/textarea|Textarea]] uses a string.
- [[components/datepicker|DatePicker]] uses an ISO date string.
- [[components/select|Select]] and [[components/radiogroup|RadioGroup]] use the string value of the selected option.
- [[components/checkbox|Checkbox]] represents its boolean value through `checked` and `defaultChecked`, both defaulting to `false`.

Action props consistently use [[types/action-config|ActionConfig]]. These shapes are adopted interface decisions. Control state ownership, precedence between `value` and `defaultValue`, and invalid-value handling belong to the interpreter, not the data interface.

## Interpreter responsibilities

Chart missing-key handling, automatic-range calculation, and treatment of out-of-range values belong to the interpreter. Action transport, dispatch timing, and merging form values with configured payload also belong to the interpreter. These are not unresolved data shapes.

Icon alias resolution and unknown-name handling are deferred interpreter work.

## Responsive layout intent

[[types/responsive|Responsive]] values use cascading minimum-width overrides based on the Grid's available container width. The host defines a consistent threshold set; the data interface defines breakpoint names and resolution order, not physical widths. Numeric coercion and column rounding are interpreter responsibilities.

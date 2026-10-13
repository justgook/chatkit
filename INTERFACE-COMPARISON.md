# Interface comparison

One-time migration review: existing component pages compared against the Studio inventory. Explicit inventory types, requiredness, and defaults took precedence during the initial merge. The framework-neutral child-type decision below supersedes the broad child declarations. Unspecified defaults, unknown types, and omitted props are gaps, not contradictions. This report stays outside the published wiki; active interfaces do not depend on the removed inventories. Historical `doc/icons.md` references below now correspond to `doc/types/widget-icon.md`; named definitions have moved from `doc/types.md` into `doc/types/`.

## Subsequent decision: precise framework-neutral children

The comparison table records the initial merge, not the final child contracts. Broad framework-specific declarations and `any` are intentionally replaced:

- Box, Col, Row, Form, Basic, Card, and Table.Cell: `WidgetComponent[]`.
- Transition: one `WidgetComponent`.
- Table: `TableRow[]`; Table.Row: `TableCell[]`.
- ListView: `ListViewItem[]`; ListViewItem: `WidgetComponent[]`.
- Grid: `GridItem[]`; Grid.Item: `WidgetComponent[]`.
- Parent-owned row, cell, and item nodes are excluded from the general component union.
- Unresolved control/Image child props remain explicitly unknown; no support is invented.

This is an intentional interface refinement for the independent target, overriding inventory precedence for children. Optionality and defaults are unchanged.

## Initial comparison summary

- Six form-control `name` props changed from optional to required: Checkbox, DatePicker, Input, RadioGroup, Select, Textarea.
- Chart `barCategoryGap` changed from string to number; `data` gained an explicit record-array shape.
- Box, Col, Row, Form, Table, Table.Row, and Table.Cell children use the broader `React.ReactNode` declaration. Transition children use `any` rather than WidgetComponent.
- Structured option and editable types replace broad object placeholders. Named aliases with known short enums remain inline.
- No conflicting explicit defaults were found. Existing defaults were retained wherever the inventory left them unspecified.
- Sixteen prop contracts remain unresolved; they are retained rather than silently dropped or guessed.
- The full icon registries and public spellings were moved to doc/icons.md, referenced by every icon prop.
- Exact visual size mappings, coercion details, providers, and minified implementation identifiers were deliberately excluded from the independent interface contract.

## Detailed differences

Equivalent enum ordering and expanded aliases are not conflicts. “Refinement” distinguishes a named or structured definition from an incompatible concrete value type.

| Component | Prop | Classification | Resolution |
| --- | --- | --- | --- |
| Box | `margin` | Refinement | `string \| number \| object` → `string \| number \| Margin`; inventory definition retained. |
| Box | `children` | Conflict | `WidgetComponent[]` → `React.ReactNode`; inventory wins. |
| Box | `padding` | Refinement | `string \| number \| object` → `string \| number \| Padding`; inventory definition retained. |
| Box | `border` | Refinement | `number \| object \| object` → `number \| Border \| Borders`; inventory definition retained. |
| Box | `background` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| Button | `onClickAction` | Refinement | `{type: string, payload?: unknown}` → `ActionConfig`; inventory definition retained. |
| Button | `iconStart` | Consolidation | Inline public-name enum → WidgetIcon; complete catalog centralized in doc/icons.md. |
| Button | `iconEnd` | Consolidation | Inline public-name enum → WidgetIcon; complete catalog centralized in doc/icons.md. |
| Caption | `color` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| Chart | `data` | Refinement | `Array<unknown>` → `Record<string, string \| number>[]`; inventory wins. |
| Chart | `series` | Refinement | `Array<BarSeries \| LineSeries \| AreaSeries>` → `Series[]`; inventory wins. |
| Chart | `xAxis` | Refinement | `string \| object` → `XAxisConfig`; inventory definition retained. |
| Chart | `barCategoryGap` | Conflict | `string` → `number`; inventory wins. |
| Chart | `yAxis` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `showTooltip` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `showHoverDots` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `showDots` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `showGrid` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `tooltipValueFormatter` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `showValueLabels` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `barRadius` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `valueLabelInterval` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `valueLabelOffset` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `visiblePointCount` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `scrollable` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `disableUserScroll` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `minPointWidth` | Gap | Page type retained; inventory supplied no concrete type. |
| Chart | `scrollToValue` | Gap | Page type retained; inventory supplied no concrete type. |
| Checkbox | `name` | Conflict | Optional → required; inventory wins. |
| Checkbox | `onChangeAction` | Refinement | `{type: string, payload?: unknown}` → `ActionConfig`; inventory definition retained. |
| Checkbox | `checked` | Gap | Unresolved prop retained. |
| Col | `margin` | Refinement | `string \| number \| object` → `string \| number \| Margin`; inventory definition retained. |
| Col | `children` | Conflict | `WidgetComponent[]` → `React.ReactNode`; inventory wins. |
| Col | `padding` | Refinement | `string \| number \| object` → `string \| number \| Padding`; inventory definition retained. |
| Col | `border` | Refinement | `number \| object \| object` → `number \| Border \| Borders`; inventory definition retained. |
| Col | `background` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| DatePicker | `name` | Conflict | Optional → required; inventory wins. |
| DatePicker | `onChangeAction` | Refinement | `{type: string, payload?: unknown}` → `ActionConfig`; inventory definition retained. |
| DatePicker | `required` | Gap | Unresolved prop retained. |
| DatePicker | `children` | Gap | Unresolved prop retained. |
| DatePicker | `value` | Gap | Unresolved prop retained. |
| Divider | `color` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| Form | `margin` | Refinement | `string \| number \| object` → `string \| number \| Margin`; inventory definition retained. |
| Form | `children` | Conflict | `WidgetComponent[]` → `React.ReactNode`; inventory wins. |
| Form | `padding` | Refinement | `string \| number \| object` → `string \| number \| Padding`; inventory definition retained. |
| Form | `border` | Refinement | `number \| object \| object` → `number \| Border \| Borders`; inventory definition retained. |
| Form | `background` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| Form | `onSubmitAction` | Refinement | `{type: string, payload?: unknown}` → `ActionConfig`; inventory definition retained. |
| Icon | `name` | Consolidation | Inline public-name enum → WidgetIcon; complete catalog centralized in doc/icons.md. |
| Icon | `color` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| Image | `margin` | Refinement | `string \| number \| object` → `string \| number \| Margin`; inventory definition retained. |
| Image | `onClickAction` | Gap | Unresolved prop retained. |
| Image | `children` | Gap | Unresolved prop retained. |
| Input | `name` | Conflict | Optional → required; inventory wins. |
| Input | `value` | Gap | Unresolved prop retained. |
| Input | `onChangeAction` | Gap | Unresolved prop retained. |
| Input | `children` | Gap | Unresolved prop retained. |
| Label | `color` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| RadioGroup | `name` | Conflict | Optional → required; inventory wins. |
| RadioGroup | `options` | Refinement | `Array<object>` → `{ label: string; value: string; disabled?: boolean; }[]`; inventory definition retained. |
| RadioGroup | `onChangeAction` | Refinement | `{type: string, payload?: unknown}` → `ActionConfig`; inventory definition retained. |
| RadioGroup | `value` | Gap | Unresolved prop retained. |
| Row | `margin` | Refinement | `string \| number \| object` → `string \| number \| Margin`; inventory definition retained. |
| Row | `children` | Conflict | `WidgetComponent[]` → `React.ReactNode`; inventory wins. |
| Row | `padding` | Refinement | `string \| number \| object` → `string \| number \| Padding`; inventory definition retained. |
| Row | `border` | Refinement | `number \| object \| object` → `number \| Border \| Borders`; inventory definition retained. |
| Row | `background` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| Select | `name` | Conflict | Optional → required; inventory wins. |
| Select | `options` | Refinement | `Array<object>` → `{ value: string; label: string; disabled?: boolean; description?: string; }[]`; inventory definition retained. |
| Select | `onChangeAction` | Refinement | `{type: string, payload?: unknown}` → `ActionConfig`; inventory definition retained. |
| Select | `searchable` | Gap | Unresolved prop retained. |
| Select | `required` | Gap | Unresolved prop retained. |
| Select | `value` | Gap | Unresolved prop retained. |
| Table | `children` | Conflict | `TableRow[]` → `React.ReactNode`; inventory wins. |
| TableCell | `children` | Conflict | `WidgetComponent[]` → `React.ReactNode`; inventory wins. |
| TableCell | `padding` | Refinement | `string \| number \| object` → `string \| number \| Padding`; inventory definition retained. |
| TableRow | `children` | Conflict | `TableCell[]` → `React.ReactNode`; inventory wins. |
| Text | `editable` | Refinement | `false \| object` → `false \| { name: string; placeholder?: string; autoFocus?: boolean; autoSelect?: boolean; autoComplete?: string; allowAutofillExtensions?: boolean; pattern?: string; required?: boolean; }`; inventory definition retained. |
| Textarea | `name` | Conflict | Optional → required; inventory wins. |
| Textarea | `children` | Gap | Unresolved prop retained. |
| Textarea | `value` | Gap | Unresolved prop retained. |
| Textarea | `onChangeAction` | Gap | Unresolved prop retained. |
| Title | `color` | Refinement | `string \| object` → `string \| ThemeColor`; inventory definition retained. |
| Transition | `children` | Conflict | `WidgetComponent` → `any`; inventory wins. |

## Aliases and ownership

- GridItem = Grid.Item; identical definitions are consolidated inside Grid.
- TableRow = Table.Row and TableCell = Table.Cell; identical definitions remain inside Table.
- ListViewItem is documented inside ListView.
- Final parent/child constraints are now precise and deliberately narrower than the initial inventory declarations; see the subsequent decision above.

## Open definitions

See doc/types.md for the unresolved control props, named shape gaps, action dispatch semantics, rendering-neutral children, responsive thresholds, and nullable Chart.visiblePointCount default.

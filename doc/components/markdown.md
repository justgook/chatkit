---
title: Markdown
status: draft
---

Render rich formatted content from a markdown source string.

## Example

```chatkit
<Markdown value={"**Bold** and _italic_."} />
```

## Usage

```
<Markdown value={"**Bold** and _italic_."} />
```

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `value` | no | `string` | `""` | Markdown source string to render. |
| `streaming` | yes | `boolean` | `false` | Applies streaming-friendly transitions for incremental updates.<br> Important: Once incremental updates are complete, this should be set to `false`. |

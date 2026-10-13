---
title: Favicon
status: draft
---

Icon associated with a resource reference. Loading, caching, and provider selection are interpreter decisions.

## Props

| Name | Optional | Type / values | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | yes | `string` | `""` | Optional identifier for caller-defined tracking. |
| `url` | yes | `string` | `""` | Resource reference used to locate an associated icon. |
| `alt` | yes | `string` | `""` | Accessible alternative text. |
| `frame` | yes | `boolean` | false | Whether to show a frame. |
| `size` | yes | `number \| string` | 12 | Size constraint. |

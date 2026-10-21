# chatkit

Documentation-first specification for an independent component implementation.
The wiki defines public interfaces; renderer internals, framework choice, and exact visual output are separate decisions. No renderer or application is implemented yet.

## Local wiki

Requires Make, Bash, curl, and tar. Build and validation require Node.js 22 or newer; preview supports Bun, Node.js, or Python 3.

```sh
make serve              # http://localhost:8080
make serve PORT=8082    # alternative port
make build              # validate and assemble static site in .wiki-dist/
make validate           # engine-provided content validation
make validate VALIDATE_FLAGS=--strict  # also fail on warnings
make clean              # remove downloaded engine and build output
```

Edit Markdown and assets in `doc/`, then refresh the preview.
The wiki engine is downloaded on first use, pinned to `v1.5.0` in the root Makefile.
The engine and generated site are ignored by Git.
`doc/custom.js` registers the `draft` status used by the interface pages.
Build runs the engine's fast validation automatically; `VALIDATE_FLAGS` controls standalone `make validate`.

Theme: [ENDESGA 32](https://lospec.com/palette-list/endesga-32), configured in `doc/custom.css`.
Component Example blocks use the registered `chatkit` view in `doc/custom.js`; it currently displays a placeholder and escaped composition source. Usage blocks remain plain source.
`doc/custom.js` also exports `parseJSX(source)` (available as `window.parseJSX` for browser-console debugging). It returns `{ type, props, children }` for a single root element. This is a static subset, not a full JavaScript/JSX parser: props accept strings and brace-wrapped literal values (including nested arrays/objects with identifier or quoted keys); boolean attributes, dotted component names, text children and JSX comments are supported. Strings use JSON-style escapes plus single quotes; text children are trimmed. Expressions, spreads and fragments are unsupported and never evaluated. The placeholder renderer does not call the parser yet.

Run parser and code-block regression tests with `node --test`.

Edit interfaces in `doc/components/` and shared definitions in `doc/types/`.
`doc/types.md` indexes the shared types; `doc/types/widget-icon.md` contains the complete icon catalog.
Parent-owned child interfaces live in the Table, Grid, and ListView pages. Unresolved contracts are explicitly marked.

## GitHub Pages

Create a GitHub repository and push this project to its `release` branch.
In **Settings → Pages → Build and deployment**, select **GitHub Actions**.

The workflow in `.github/workflows/pages.yml` runs `make build` on pushes to `release`
(or manually) and publishes the result to GitHub Pages.
No npm installation or implementation build is required.

The one-time interface reconciliation is recorded in `INTERFACE-COMPARISON.md`, outside the published wiki.

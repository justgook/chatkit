// Interface pages remain drafts until their open contracts are resolved.
export default function configure({ registerStatus, registerCodeBlock }) {
    registerStatus("draft")
    registerCodeBlock({
        name: "chatkit",
        render({ source }) {
            return {
                className: "chatkit-preview",
                html: renderNode(parseJSX(source)),
            }
        },
    })
}
if (typeof window !== "undefined") window.parseJSX = parseJSX

// Dispatch only; each element owns its props, HTML and child rendering.
export function renderNode(node) {
    if (typeof node === "string") return escapeHTML(node)

    switch (node.type) {
        case "Badge":
            return renderBadge(node)
        case "Basic":
            return renderBasic(node)
        case "Box":
            return renderBox(node)
        case "Button":
            return renderButton(node)
        case "Caption":
            return renderCaption(node)
        case "Card":
            return renderCard(node)
        case "CardCarousel":
            return renderCardCarousel(node)
        case "CardLinkItem":
            return renderCardLinkItem(node)
        case "Chart":
            return renderChart(node)
        case "Checkbox":
            return renderCheckbox(node)
        case "Col":
            return renderCol(node)
        case "DatePicker":
            return renderDatePicker(node)
        case "Divider":
            return renderDivider(node)
        case "Favicon":
            return renderFavicon(node)
        case "Form":
            return renderForm(node)
        case "Grid":
            return renderGrid(node)
        case "Grid.Item":
            return renderGridItem(node)
        case "IFrame":
            return renderIFrame(node)
        case "Icon":
            return renderIcon(node)
        case "Image":
            return renderImage(node)
        case "Input":
            return renderInput(node)
        case "Label":
            return renderLabel(node)
        case "ListView":
            return renderListView(node)
        case "ListViewItem":
            return renderListViewItem(node)
        case "Markdown":
            return renderMarkdown(node)
        case "RadioGroup":
            return renderRadioGroup(node)
        case "Row":
            return renderRow(node)
        case "Select":
            return renderSelect(node)
        case "Spacer":
            return renderSpacer(node)
        case "Table":
            return renderTable(node)
        case "Table.Cell":
            return renderTableCell(node)
        case "Table.Row":
            return renderTableRow(node)
        case "Text":
            return renderText(node)
        case "Textarea":
            return renderTextarea(node)
        case "Title":
            return renderTitle(node)
        case "Transition":
            return renderTransition(node)
        default:
            return renderUnsupported(node)
    }
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;")
}

// IDs are tracking metadata, not DOM IDs (see WidgetComponent).
function trackingId(props) {
    return props.id ? ` data-chatkit-id="${escapeHTML(props.id)}"` : ""
}

function renderBasic({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderBox({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderCard({ props, children }) {
    return `<article${trackingId(props)}>${children.map(renderNode).join("")}</article>`
}

function renderCardCarousel({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderCardLinkItem({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderCol({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderForm({ props, children }) {
    return `<form${trackingId(props)}>${children.map(renderNode).join("")}</form>`
}

function renderGrid({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderGridItem({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderListView({ props, children }) {
    return `<ul${trackingId(props)}>${children.map(renderNode).join("")}</ul>`
}

function renderListViewItem({ props, children }) {
    return `<li${trackingId(props)}>${children.map(renderNode).join("")}</li>`
}

function renderRow({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderTable({ props, children }) {
    return `<table${trackingId(props)}>${children.map(renderNode).join("")}</table>`
}

function renderTableRow({ props, children }) {
    return `<tr${trackingId(props)}>${children.map(renderNode).join("")}</tr>`
}

function renderTableCell({ props, children }) {
    return `<td${trackingId(props)}>${children.map(renderNode).join("")}</td>`
}

function renderTransition({ props, children }) {
    return `<div${trackingId(props)}>${children.map(renderNode).join("")}</div>`
}

function renderBadge({ props }) {
    return `<span${trackingId(props)}>${escapeHTML(props.label ?? "")}</span>`
}

function renderButton({ props }) {
    return `<button${trackingId(props)} type="button">${escapeHTML(props.label ?? "")}</button>`
}

function renderCaption({ props }) {
    return `<small${trackingId(props)}>${escapeHTML(props.value ?? "")}</small>`
}

function renderChart({ props }) {
    return `<div${trackingId(props)}></div>`
}

function renderCheckbox({ props }) {
    const checked = props.checked ?? props.defaultChecked ?? false
    return `<label${trackingId(props)}><input type="checkbox" name="${escapeHTML(props.name ?? "")}"${checked ? " checked" : ""}>${escapeHTML(props.label ?? "")}</label>`
}

function renderDatePicker({ props }) {
    return `<input${trackingId(props)} type="date" name="${escapeHTML(props.name ?? "")}" value="${escapeHTML(props.value ?? props.defaultValue ?? "")}">`
}

function renderDivider({ props }) {
    return `<hr${trackingId(props)}>`
}

function renderFavicon({ props }) {
    return `<span${trackingId(props)}></span>`
}

function renderIcon({ props }) {
    // Text fallback until icon glyph rendering is implemented.
    return `<span${trackingId(props)}>${escapeHTML(props.name ?? "")}</span>`
}

function renderIFrame({ props }) {
    return `<iframe${trackingId(props)} title="ChatKit embed"></iframe>`
}

function renderImage({ props }) {
    return `<img${trackingId(props)} alt="">`
}

function renderInput({ props }) {
    return `<input${trackingId(props)} name="${escapeHTML(props.name ?? "")}" value="${escapeHTML(props.value ?? props.defaultValue ?? "")}">`
}

function renderLabel({ props }) {
    return `<label${trackingId(props)}>${escapeHTML(props.value ?? "")}</label>`
}

function renderMarkdown({ props }) {
    // Plain text for now; never insert Markdown source as raw HTML.
    return `<div${trackingId(props)}>${escapeHTML(props.value ?? "")}</div>`
}

function renderRadioGroup({ props }) {
    const value = props.value ?? props.defaultValue ?? ""
    const options = (props.options ?? []).map((option) =>
        `<label><input type="radio" name="${escapeHTML(props.name ?? "")}" value="${escapeHTML(option.value)}"${option.value === value ? " checked" : ""}${option.disabled ? " disabled" : ""}>${escapeHTML(option.label)}</label>`
    ).join("")
    return `<div${trackingId(props)} role="radiogroup" aria-label="${escapeHTML(props.name ?? "")}">${options}</div>`
}

function renderSelect({ props }) {
    const value = props.value ?? props.defaultValue ?? ""
    const options = (props.options ?? []).map((option) =>
        `<option value="${escapeHTML(option.value)}"${option.value === value ? " selected" : ""}${option.disabled ? " disabled" : ""}>${escapeHTML(option.label)}</option>`
    ).join("")
    // A native single-select otherwise silently selects the first real option.
    const empty = (props.options ?? []).some((option) => option.value === value)
        ? "" : '<option value="" selected hidden></option>'
    return `<select${trackingId(props)} name="${escapeHTML(props.name ?? "")}">${empty}${options}</select>`
}

function renderSpacer({ props }) {
    return `<div${trackingId(props)}></div>`
}

function renderText({ props }) {
    return `<span${trackingId(props)}>${escapeHTML(props.value ?? "")}</span>`
}

function renderTextarea({ props }) {
    return `<textarea${trackingId(props)} name="${escapeHTML(props.name ?? "")}">${escapeHTML(props.value ?? props.defaultValue ?? "")}</textarea>`
}

function renderTitle({ props }) {
    return `<h3${trackingId(props)}>${escapeHTML(props.value ?? "")}</h3>`
}

function renderUnsupported({ type }) {
    return `<span>Unsupported ChatKit type: ${escapeHTML(type)}</span>`
}

// Static JSX subset: one root, literal props, element/text children and JSX comments.
// No evaluation, spreads, fragments or dynamic child expressions.
export function parseJSX(source) {
    let pos = 0

    function fail(message) {
        throw new SyntaxError(`${message} at position ${pos}`)
    }

    function peek() {
        return source[pos]
    }

    function skipWhitespace() {
        while (/\s/.test(peek() ?? "")) pos++
    }

    function consume(expected) {
        if (!source.startsWith(expected, pos)) {
            fail(`Expected ${JSON.stringify(expected)}`)
        }
        pos += expected.length
    }

    function name(pattern = /^[A-Za-z_$][\w$.:+-]*/) {
        const match = pattern.exec(source.slice(pos))
        if (!match) fail("Expected a name")
        pos += match[0].length
        return match[0]
    }

    function string() {
        const quote = peek()
        if (quote !== '"' && quote !== "'") fail("Expected string")
        pos++

        let result = ""

        while (pos < source.length) {
            const ch = source[pos++]

            if (ch === quote) return result

            if (ch === "\\") {
                if (pos >= source.length) fail("Unterminated escape")
                const escaped = source[pos++]
                const escapes = {
                    n: "\n",
                    r: "\r",
                    t: "\t",
                    b: "\b",
                    f: "\f",
                    "\\": "\\",
                    '"': '"',
                    "'": "'",
                    "/": "/",
                }

                if (escaped === "u") {
                    const hex = source.slice(pos, pos + 4)
                    if (!/^[0-9a-fA-F]{4}$/.test(hex)) {
                        fail("Invalid unicode escape")
                    }
                    result += String.fromCharCode(parseInt(hex, 16))
                    pos += 4
                } else if (Object.hasOwn(escapes, escaped)) {
                    result += escapes[escaped]
                } else {
                    fail("Invalid string escape")
                }
            } else {
                result += ch
            }
        }

        fail("Unterminated string")
    }

    function value() {
        skipWhitespace()

        if (peek() === '"' || peek() === "'") return string()

        if (peek() === "[") {
            pos++
            const items = []
            skipWhitespace()

            while (peek() !== "]") {
                if (pos >= source.length) fail("Unclosed array")
                items.push(value())
                skipWhitespace()

                if (peek() === "]") break
                consume(",")
                skipWhitespace()
            }

            consume("]")
            return items
        }

        if (peek() === "{") {
            pos++
            const object = {}
            skipWhitespace()

            while (peek() !== "}") {
                if (pos >= source.length) fail("Unclosed object")

                // JSX names may contain ':' or '-', but unquoted object keys may not.
                const key = peek() === '"' || peek() === "'" ? string() : name(/^[A-Za-z_$][\w$]*/)

                skipWhitespace()
                consume(":")
                const val = value()

                Object.defineProperty(object, key, {
                    value: val,
                    enumerable: true,
                    writable: true,
                    configurable: true,
                })

                skipWhitespace()
                if (peek() === "}") break
                consume(",")
                skipWhitespace()
            }

            consume("}")
            return object
        }

        const rest = source.slice(pos)
        const number = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(rest)

        if (number) {
            pos += number[0].length
            const result = Number(number[0])
            if (!Number.isFinite(result)) fail("Invalid JSON number")
            return result
        }

        for (const [word, result] of [
            ["true", true],
            ["false", false],
            ["null", null],
        ]) {
            if (rest.startsWith(word) && !/[\w$]/.test(rest[word.length] ?? "")) {
                pos += word.length
                return result
            }
        }

        fail("Unsupported value")
    }

    function attributeValue() {
        skipWhitespace()

        if (peek() === '"' || peek() === "'") return string()

        if (peek() === "{") {
            consume("{")
            const result = value()
            skipWhitespace()
            consume("}")
            return result
        }

        fail("Expected attribute value")
    }

    function element() {
        consume("<")
        const type = name()
        const props = {}

        skipWhitespace()

        while (peek() !== ">" && !source.startsWith("/>", pos)) {
            if (pos >= source.length) fail("Unclosed opening tag")

            const key = name()
            skipWhitespace()

            const val = peek() === "=" ? (pos++, attributeValue()) : true

            Object.defineProperty(props, key, {
                value: val,
                enumerable: true,
                writable: true,
                configurable: true,
            })

            skipWhitespace()
        }

        if (source.startsWith("/>", pos)) {
            consume("/>")
            return { type, props, children: [] }
        }

        consume(">")

        const children = []

        while (!source.startsWith("</", pos)) {
            if (pos >= source.length) fail(`Unclosed <${type}>`)

            if (peek() === "<") {
                children.push(element())
                continue
            }

            if (peek() === "{") {
                pos++
                skipWhitespace()
                if (!source.startsWith("/*", pos)) {
                    fail("Dynamic children are not supported")
                }
                pos += 2
                const end = source.indexOf("*/", pos)
                if (end === -1) fail("Unclosed JSX comment")
                pos = end + 2
                skipWhitespace()
                consume("}")
                continue
            }

            const start = pos
            while (pos < source.length && peek() !== "<" && peek() !== "{") {
                pos++
            }

            const text = source.slice(start, pos).trim()
            if (text) children.push(text)
        }

        consume("</")
        const closingType = name()
        if (closingType !== type) {
            fail(`Expected </${type}>, got </${closingType}>`)
        }
        skipWhitespace()
        consume(">")

        return { type, props, children }
    }

    skipWhitespace()
    const ast = element()
    skipWhitespace()

    if (pos !== source.length) fail("Unexpected trailing input")

    return ast
}

// Interface pages remain drafts until their open contracts are resolved.
export default function configure({ registerStatus, registerCodeBlock }) {
    registerStatus("draft")
    registerCodeBlock({
        name: "chatkit",
        render({ source, helpers }) {
            return {
                className: "chatkit-preview",
                html: `<div class="chatkit-preview-label">ChatKit preview</div>
<p>Preview renderer coming soon.</p>
<pre><code>${helpers.escapeHTML(JSON.stringify(parseJSX(source), null, 2))}</code></pre>`,
            }
        },
    })
}
if (typeof window !== "undefined") window.parseJSX = parseJSX

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

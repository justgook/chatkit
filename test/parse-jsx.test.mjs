import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import vm from "node:vm"
import test from "node:test"
import { parseJSX } from "../doc/custom.js"

// Verify that the browser debug entry point remains available.
const script = (await readFile(new URL("../doc/custom.js", import.meta.url), "utf8"))
    .replace("export default ", "")
    .replace("export function parseJSX", "function parseJSX")
const context = vm.createContext({ window: {} })
vm.runInContext(script, context)
const node = (type, props = {}, children = []) => ({ type, props, children })
const syntaxError = (error) => error.name === "SyntaxError" && /at position \d+/.test(error.message)

test("exposes the parser for browser console debugging", () => {
    assert.equal(typeof context.window.parseJSX, "function")
    const source = '<Row data={{foo:1}} />'
    assert.deepEqual(JSON.parse(JSON.stringify(context.window.parseJSX(source))), parseJSX(source))
})

test("parses the supplied nested composition", () => {
    const source = `
      <Row gap={2} enabled data={{javascript:{object:["as","json"]}}}>
        {/* children */}
        <Text value={"Hello"} size="sm" />
        <Table.Row header>
          <Table.Cell align="end">
            <Text value="3" />
          </Table.Cell>
        </Table.Row>
      </Row>
    `
    assert.deepEqual(parseJSX(source), node("Row", {
        gap: 2, enabled: true, data: { javascript: { object: ["as", "json"] } },
    }, [
        node("Text", { value: "Hello", size: "sm" }),
        node("Table.Row", { header: true }, [
            node("Table.Cell", { align: "end" }, [node("Text", { value: "3" })]),
        ]),
    ]))
})

test("separates object identifiers from JSX names", () => {
    assert.deepEqual(parseJSX(`<custom-row data-id="x" xml:lang="en" data={{foo:1, $bar_2:false, "a.b":null, 'a-b':[]}} />`),
        node("custom-row", {
            "data-id": "x", "xml:lang": "en",
            data: { foo: 1, $bar_2: false, "a.b": null, "a-b": [] },
        }))
    for (const key of ["a.b", "a-b", "a+b"]) {
        assert.throws(() => parseJSX(`<Row data={{${key}:1}} />`), syntaxError)
    }
})

test("handles nested literal values, escapes and trailing commas", () => {
    assert.deepEqual(parseJSX(String.raw`<Row data={{"values": [true, false, null, -2.5e2, {"empty": {}},],}} label={'a\n\u0042\t\"'} />`),
        node("Row", { data: { values: [true, false, null, -250, { empty: {} }] }, label: 'a\nB\t"' }))
})

test("ignores JSX comments with optional surrounding whitespace", () => {
    for (const comment of ["{/* children */}", "{ /* children */ }", "{\n/* <Row /> { } */\n}"]) {
        assert.deepEqual(parseJSX(`<Row>${comment}<Text /></Row>`), node("Row", {}, [node("Text")]))
    }
    assert.throws(() => parseJSX("<Row>{/* unfinished</Row>"), syntaxError)
    assert.throws(() => parseJSX("<Row>{/* done */ unexpected}</Row>"), syntaxError)
})

test("rejects malformed input and unsupported executable expressions", () => {
    for (const source of [
        "", "<Row>", "<Row></Col>", "<Row", "<Row /> trailing", "<Row /><Text />",
        '<Row value="unfinished />', '<Row value={"\\uZZZZ"} />',
        "<Row data={[1 2]} />", "<Row data={{foo:}} />", "<Row data={[1,} />",
        "<Row value={01} />", "<Row value={1e999} />", "<Row value={trueish} />",
        "<Row value={globalThis} />", "<Row value={alert('bad')} />",
        "<Row {...props} />", "<Row>{value}</Row>",
    ]) {
        assert.throws(() => parseJSX(source), syntaxError, source)
    }
})

test("special object keys remain own data properties without prototype mutation", () => {
    const ast = parseJSX('<Row __proto__={{polluted:true}} data={{__proto__:{polluted:true},constructor:null}} />')
    assert.equal(Object.hasOwn(ast.props, "__proto__"), true)
    assert.equal(Object.hasOwn(ast.props.data, "__proto__"), true)
    assert.equal(ast.props.polluted, undefined)
    assert.equal(ast.props.data.polluted, undefined)
})

test("all published chatkit examples parse", async () => {
    const directory = new URL("../doc/components/", import.meta.url)
    let count = 0
    for (const name of await readdir(directory)) {
        if (!name.endsWith(".md")) continue
        const markdown = await readFile(new URL(name, directory), "utf8")
        for (const [, source] of markdown.matchAll(/```chatkit\n([\s\S]*?)\n```/g)) {
            assert.doesNotThrow(() => parseJSX(source), name)
            count++
        }
    }
    assert.equal(count, 24)
})

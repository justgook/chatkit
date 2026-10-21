import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"
import { parseJSX, renderNode as renderStyledNode } from "../doc/custom.js"

// Structural/prop assertions ignore layout classes, which are tested separately.
const renderNode = (node) => renderStyledNode(node).replaceAll(/ class="chatkit-[^"]*"/g, "")

const render = (type, props = {}) => renderNode({ type, props, children: [] })

test("all component and parent-owned IDs are escaped tracking metadata", async () => {
    const markdown = await readFile(new URL("../doc/types/widget-component.md", import.meta.url), "utf8")
    const union = /type WidgetComponent =([\s\S]*?)```/.exec(markdown)[1]
    const types = [...union.match(/[A-Z]\w*/g), "Table.Row", "Table.Cell", "Grid.Item", "ListViewItem"]
    for (const type of types) {
        assert.ok(render(type, { id: 'item"<&' }).includes(' data-chatkit-id="item&quot;&lt;&amp;"'), type)
        assert.ok(!render(type).includes("data-chatkit-id"), type)
        assert.ok(!render(type, { id: "" }).includes("data-chatkit-id"), type)
    }
})

test("text components display escaped values, not children", () => {
    for (const [type, tag] of [["Text", "span"], ["Caption", "small"], ["Title", "h3"], ["Label", "label"], ["Markdown", "div"]]) {
        assert.equal(render(type, { value: '<script> & "text"' }),
            `<${tag}>&lt;script&gt; &amp; &quot;text&quot;</${tag}>`, type)
        assert.equal(render(type), `<${tag}></${tag}>`, type)
    }
    assert.equal(render("Markdown", { value: "**Bold**" }), "<div>**Bold**</div>")
    assert.equal(renderNode(parseJSX('<Text value="Value"><Unknown /></Text>')), "<span>Value</span>")
})

test("badges, buttons and checkboxes display labels", () => {
    assert.equal(render("Badge", { label: "Ready & waiting" }), "<span>Ready &amp; waiting</span>")
    assert.equal(render("Button", { label: "Go <now>" }), '<button type="button">Go &lt;now&gt;</button>')
    assert.equal(render("Checkbox", { name: "agree", label: "I agree", checked: true }),
        '<label><input type="checkbox" name="agree" checked>I agree</label>')
    assert.equal(render("Checkbox", { defaultChecked: true, checked: false }),
        '<label><input type="checkbox" name=""></label>')
})

test("checkboxes preserve native disabled, required and checked behavior without extra markup", () => {
    assert.equal(render("Checkbox", { name: "accept", label: "I agree", defaultChecked: true, disabled: true, required: true }),
        '<label><input type="checkbox" name="accept" checked disabled required>I agree</label>')
    assert.equal(render("Checkbox", { disabled: false, required: false, label: '<script> & "label"' }),
        '<label><input type="checkbox" name="">&lt;script&gt; &amp; &quot;label&quot;</label>')
})

test("form controls render escaped names and values in native HTML slots", () => {
    assert.equal(render("Input", { name: 'email"<&', value: 'a"<&' }),
        '<input autocomplete="off" name="email&quot;&lt;&amp;" value="a&quot;&lt;&amp;">')
    assert.equal(render("Input", { name: "count", value: 0 }), '<input autocomplete="off" name="count" value="0">')
    assert.equal(render("Input", { value: 42 }), '<input autocomplete="off" name="" value="42">')
    assert.equal(render("DatePicker", { name: "birthday", value: "2024-01-31" }),
        '<input type="date" name="birthday" value="2024-01-31">')
    assert.equal(render("Textarea", { name: "message", value: '</textarea><script>bad()</script>\nNext' }),
        '<textarea name="message">&lt;/textarea&gt;&lt;script&gt;bad()&lt;/script&gt;\nNext</textarea>')
})

test("current values take precedence over defaults, including empty strings and zero", () => {
    for (const type of ["Input", "DatePicker", "Textarea"]) {
        assert.equal(render(type, { defaultValue: "initial" }), render(type, { value: "initial" }), type)
        assert.equal(render(type, { value: "", defaultValue: "initial" }), render(type, { value: "" }), type)
    }
    assert.equal(render("Input", { value: 0, defaultValue: 5 }), '<input autocomplete="off" name="" value="0">')
})

test("Select renders option labels, values, selected state and disabled options", () => {
    const options = [{ label: "A & B", value: 'a"<' }, { label: "Second", value: "b", disabled: true }]
    assert.equal(render("Select", { name: "choice", options, value: "b" }),
        '<select name="choice"><option value="a&quot;&lt;">A &amp; B</option><option value="b" selected disabled>Second</option></select>')
    assert.equal(render("Select", { options, defaultValue: "b" }), render("Select", { options, value: "b" }))
    assert.match(render("Select", { options, value: "", defaultValue: "b" }), /<option value="" selected disabled hidden>Choose an option…<\/option>/)
    assert.equal(render("Select"), '<select name=""><option value="" selected disabled hidden>Choose an option…</option></select>')
    assert.equal(render("Select", { options: [{ label: "None", value: "" }] }),
        '<select name=""><option value="" selected>None</option></select>')
    assert.match(render("Select", { options, value: "missing" }), /<option value="" selected disabled hidden>Choose an option…<\/option>/)
})

test("Select supports custom or blank placeholders, native validation and disabled state", () => {
    const options = [{ label: "A", value: "a" }]
    assert.equal(render("Select", { name: "choice", options, placeholder: 'Choose <one> & "only"', required: true, disabled: true }),
        '<select name="choice" disabled required><option value="" selected disabled hidden>Choose &lt;one&gt; &amp; &quot;only&quot;</option><option value="a">A</option></select>')
    assert.match(render("Select", { placeholder: "" }), /<option value="" selected disabled hidden><\/option>/)
    assert.ok(!render("Select", { options, value: "a", placeholder: "Pick one" }).includes("Pick one"))
    assert.ok(!render("Select", { options, defaultValue: "a" }).includes("Choose an option…"))
    assert.ok(!render("Select", { disabled: false, required: false }).includes('name="" disabled'))
    assert.ok(!render("Select", { required: false }).includes(" required"))
})

test("RadioGroup renders named, labelled options with checked and disabled states", () => {
    const options = [{ label: "Small < S", value: 's"' }, { label: "Large", value: "l", disabled: true }]
    assert.equal(render("RadioGroup", { name: 'size"', options, value: "l" }),
        '<div role="radiogroup" aria-label="size&quot;"><label><input type="radio" name="size&quot;" value="s&quot;">Small &lt; S</label><label><input type="radio" name="size&quot;" value="l" checked disabled>Large</label></div>')
    assert.equal(render("RadioGroup", { options, defaultValue: "l" }), render("RadioGroup", { options, value: "l" }))
    assert.ok(!render("RadioGroup", { options, value: "", defaultValue: "l" }).includes(" checked"))
    assert.equal(render("RadioGroup"), '<div role="radiogroup" aria-label=""></div>')
})

test("RadioGroup applies group disabled/required props and an accessible group label", () => {
    const options = [{ label: "Small", value: "sm" }, { label: "Large", value: "lg", disabled: true }]
    const html = render("RadioGroup", { name: "size", ariaLabel: 'Choose <size> "now"', options, value: "sm", disabled: true, required: true })
    assert.equal(html,
        '<div role="radiogroup" aria-label="Choose &lt;size&gt; &quot;now&quot;"><label><input type="radio" name="size" value="sm" checked disabled required>Small</label><label><input type="radio" name="size" value="lg" disabled required>Large</label></div>')
    const enabled = render("RadioGroup", { name: "size", options, disabled: false, required: false })
    assert.equal((enabled.match(/ disabled/g) ?? []).length, 1)
    assert.ok(!enabled.includes(" required"))
    assert.ok(render("RadioGroup", { name: "size", ariaLabel: "" }).includes('aria-label="size"'))
})

test("Icon renders its escaped name as a text fallback", () => {
    assert.equal(render("Icon", { name: "search<&" }), "<span>search&lt;&amp;</span>")
    assert.equal(render("Icon"), "<span></span>")
})

import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import test from "node:test"
import { parseJSX, renderNode } from "../doc/custom.js"

test("element functions recursively render their own children in order", () => {
    assert.equal(renderNode(parseJSX("<Box><Row>First<Col>Second</Col>Third</Row></Box>")),
        "<div><div>First<div>Second</div>Third</div></div>")
})

test("renders parent-owned element types", () => {
    assert.equal(renderNode(parseJSX("<Table><Table.Row><Table.Cell>Cell</Table.Cell></Table.Row></Table>")),
        "<table><tr><td>Cell</td></tr></table>")
    assert.equal(renderNode(parseJSX("<Grid><Grid.Item>Item</Grid.Item></Grid>")),
        "<div><div>Item</div></div>")
    assert.equal(renderNode(parseJSX("<ListView><ListViewItem>Item</ListViewItem></ListView>")),
        "<ul><li>Item</li></ul>")
})

test("leaf functions do not automatically render children or forward props", () => {
    assert.equal(renderNode(parseJSX('<Button label="Later" onclick="bad()"><Unknown /></Button>')),
        '<button type="button">Later</button>')
    assert.equal(renderNode(parseJSX('<Image src="javascript:bad()" />')), '<img alt="">')
})

test("escapes text nodes and unsupported type names", () => {
    assert.equal(renderNode('<script>"bad" & \'text\'</script>'),
        '&lt;script&gt;&quot;bad&quot; &amp; &#39;text&#39;&lt;/script&gt;')
    assert.equal(renderNode({ type: '<script>', props: {}, children: [] }),
        '<span>Unsupported ChatKit type: &lt;script&gt;</span>')
})

test("every documented component has an element renderer", async () => {
    const markdown = await readFile(new URL("../doc/types/widget-component.md", import.meta.url), "utf8")
    const union = /type WidgetComponent =([\s\S]*?)```/.exec(markdown)[1]
    for (const type of union.match(/[A-Z]\w*/g)) {
        const html = renderNode({ type, props: {}, children: [] })
        assert.ok(html.startsWith("<"), type)
        assert.ok(!html.includes("Unsupported ChatKit type"), type)
    }
})

test("all published chatkit examples render", async () => {
    const directory = new URL("../doc/components/", import.meta.url)
    let count = 0
    for (const name of await readdir(directory)) {
        if (!name.endsWith(".md")) continue
        const markdown = await readFile(new URL(name, directory), "utf8")
        for (const [, source] of markdown.matchAll(/```chatkit\n([\s\S]*?)\n```/g)) {
            assert.ok(!renderNode(parseJSX(source)).includes("Unsupported ChatKit type"), name)
            count++
        }
    }
    assert.equal(count, 24)
})

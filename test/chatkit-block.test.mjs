import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import test from "node:test"
import configure from "../doc/custom.js"

const escapeHTML = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")

test("registers draft status and renders chatkit HTML", () => {
    const statuses = [], blocks = []
    configure({ registerStatus: (value) => statuses.push(value), registerCodeBlock: (value) => blocks.push(value) })
    assert.deepEqual(statuses, ["draft"])
    assert.equal(blocks.length, 1)
    assert.equal(blocks[0].name, "chatkit")
    const source = '<Box><Row>Content & more</Row></Box>'
    const result = blocks[0].render({ source, helpers: { escapeHTML } })
    assert.equal(result.className, "chatkit-preview")
    assert.ok(!result.html.includes("ChatKit preview"))
    assert.ok(result.html.includes("<div><div>Content &amp; more</div></div>"))
    assert.ok(!result.html.includes("Preview renderer coming soon"))
    assert.ok(!result.html.includes("<pre>"))
})

test("every component Example uses the same source as its first Usage block", async () => {
    const directory = new URL("../doc/components/", import.meta.url)
    let examples = 0
    for (const name of await readdir(directory)) {
        if (!name.endsWith(".md")) continue
        const source = await readFile(new URL(name, directory), "utf8")
        if (!source.includes("## Example\n")) continue
        const example = /## Example\n\n```chatkit\n([\s\S]*?)\n```/.exec(source)
        const usage = /## Usage\n\n```\n([\s\S]*?)\n```/.exec(source)
        assert.ok(example, `${name}: Example must be a chatkit fence`)
        assert.ok(usage, `${name}: Usage must remain plain source`)
        assert.equal(example[1], usage[1], name)
        examples++
    }
    assert.equal(examples, 24)
})

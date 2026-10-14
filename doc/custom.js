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
<pre><code>${helpers.escapeHTML(source)}</code></pre>`,
            }
        },
    })
}

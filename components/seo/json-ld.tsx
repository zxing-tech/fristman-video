/**
 * Renders a JSON-LD structured-data block. Server component — the script is in the
 * static HTML (no client JS), so crawlers and the Rich Results Test see it directly.
 */
export function JsonLd({ data }: { data: object }) {
  // Data is our own (SITE constants + static content), but we still escape `<`
  // so a stray "</script>" in any string can never break out of the tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

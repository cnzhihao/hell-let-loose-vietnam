# Metadata and Crawl Contract

## Page metadata

For every intended indexable page:

- title names the actual game/topic and page purpose;
- description answers the player’s likely question without keyword stuffing;
- exactly one canonical URL matches the intended path;
- og:title, og:description, og:url and image describe the same page;
- language and alternate links are real and fully translated when present;
- JSON-LD is valid, minimal and does not claim unsupported facts;
- page has one H1 and useful visible content.

For pending or thin content, use noindex, follow or keep it out of the public sitemap. noindex is not a substitute for fixing an empty page.

## Template mode

The safe template state is:

~~~text
websiteConfig.isTemplate = true
robots = User-agent: * / Disallow: /
sitemap = zero <url> entries
pages = noindex, nofollow
~~~

The local request origin can be used to preview absolute URLs, but it is not a production canonical.

## Ready mode

The launch candidate state is:

~~~text
websiteConfig.url = verified production origin
websiteConfig.isTemplate = false
indexable entries = source-backed and useful
robots = allow crawl + verified sitemap URL
sitemap = only intended canonical routes
~~~

Check that no route emits the old template repository, game name, domain or placeholder source.

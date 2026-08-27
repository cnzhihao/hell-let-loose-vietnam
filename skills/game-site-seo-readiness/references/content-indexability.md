# Content and Indexability

## Approve a page only when

- the page maps to a distinct keyword or player question;
- the answer is materially useful, not a renamed copy of another page;
- the title, summary, H1 and path agree;
- important facts have a source and evidence state;
- dynamic claims include a check date or version boundary;
- the page links to a parent, a next useful page and relevant official source;
- the page is not an accidental placeholder, thin category or unresolved community lead.

## Keep pending when

- the only evidence is a search snippet, partial transcript or player guess;
- a platform, price, release, recipe, code, multiplayer or version claim is unresolved;
- the page needs a screenshot or source that has not been registered;
- the page has a route but no complete player task;
- a custom path creates a duplicate URL without a redirect/canonical decision.

## Decision table

| Content state | Local directory | Public sitemap | Robots/meta |
|---|---:|---:|---|
| verified and useful | yes | yes | index, follow |
| single official source with recheck date | yes | usually yes | index, follow |
| community lead | yes, labeled | no | noindex, follow |
| pending placeholder | yes, optional | no | noindex, follow |

“Usually” still requires the project’s human review; a single official source may be enough for a simple fact but not for a high-risk or dynamic claim.

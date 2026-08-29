import { useMemo, useState } from 'react';
import {
  getWikiCategoryHref,
  getWikiEntryHref,
  homepageSearchShortcuts,
  searchWikiEntries,
  wikiCategories,
} from '@/content/site';

type SearchResult = {
  href: string;
  kind: string;
  summary: string;
  title: string;
};

export function WikiSearch({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const results = useMemo<SearchResult[]>(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return [];

    const categoryResults = wikiCategories
      .filter((category) =>
        [category.title, category.description, category.slug]
          .join(' ')
          .toLocaleLowerCase()
          .includes(normalized)
      )
      .map((category) => ({
        href: getWikiCategoryHref(category),
        kind: 'Category',
        summary: category.description,
        title: category.title,
      }));

    const entryResults = searchWikiEntries({ query: normalized }).map(
      (entry) => ({
        href: getWikiEntryHref(entry),
        kind: entry.pageType,
        summary: entry.summary,
        title: entry.title,
      })
    );

    return [...categoryResults, ...entryResults].slice(0, 8);
  }, [query]);

  return (
    <div className="relative w-full max-w-3xl">
      <label className="sr-only" htmlFor="wiki-search">
        Search guides and topics
      </label>
      <form
        aria-label="Search guides and topics"
        action="/wiki"
        className="field-search flex items-center gap-3 p-2"
        method="get"
        onSubmit={() => setOpen(false)}
      >
        <span aria-hidden="true" className="field-code px-2 text-xl">
          /
        </span>
        <input
          id="wiki-search"
          aria-controls="wiki-search-results"
          className="min-w-0 flex-1 bg-transparent px-1 py-3 font-bold outline-none placeholder:text-muted-foreground"
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpen(false);
              setQuery('');
            }
          }}
          name="q"
          placeholder="Search “beginner guide”, “maps”, “PC requirements” or “crossplay”"
          type="search"
          value={query}
        />
        <button
          aria-label="Submit Wiki search"
          className="field-search-submit px-2 py-1 text-xs font-black uppercase tracking-[0.1em]"
          type="submit"
        >
          {compact ? 'Search' : 'Enter'}
        </button>
      </form>

      {open && (
        <div
          className="field-search-results absolute left-0 right-0 top-[calc(100%+0.75rem)] z-20 overflow-hidden p-2"
          id="wiki-search-results"
        >
          {query.trim() ? (
            results.length > 0 ? (
              <div className="grid gap-1">
                {results.map((result) => (
                  <a
                    className="field-search-result block p-3 no-underline"
                    href={result.href}
                    key={`${result.kind}-${result.href}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="block text-xs font-black uppercase tracking-[0.12em] text-muted-foreground">
                      {result.kind}
                    </span>
                    <strong className="block text-base">{result.title}</strong>
                    <span className="block text-sm text-muted-foreground">
                      {result.summary}
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="p-3 text-sm font-bold text-muted-foreground">
                No matching page yet. Press Enter to open the filtered
                directory.
              </p>
            )
          ) : (
            <div className="p-2">
              <span className="field-label px-1">Popular questions</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {homepageSearchShortcuts.map((shortcut) => (
                  <a
                    className="field-tag no-underline hover:border-orange hover:text-foreground"
                    href={`/wiki?q=${encodeURIComponent(shortcut.query)}`}
                    key={shortcut.query}
                    onClick={() => setOpen(false)}
                  >
                    {shortcut.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

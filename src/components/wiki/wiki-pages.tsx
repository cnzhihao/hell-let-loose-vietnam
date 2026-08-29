import { Container } from '@/components/layout/container';
import { gameConfig } from '@/config/game';
import { websiteConfig } from '@/config/website';
import {
  findWikiEntry,
  getCategoryEntries,
  getWikiCategoryHref,
  getWikiEntryHref,
  wikiCategories,
  wikiEntries,
} from '@/content/site';
import type { WikiCategory, WikiEntry } from '@/content/types';
import { WikiSearch } from './wiki-search';

function TemplateNotice() {
  if (!websiteConfig.isTemplate) return null;

  return (
    <aside className="mt-8 rounded-[12px] border-2 border-ink bg-lavender p-5 text-ink shadow-brutal">
      <strong className="block text-lg">Research preview · noindex</strong>
      <p className="mt-1 max-w-[70ch] text-sm leading-6">
        The HLL: Vietnam facts on this local build are source-backed, but the
        production origin is not configured yet. Crawling is blocked and every
        entry stays out of the public index until the launch audit and explicit
        deployment approval are complete.
      </p>
    </aside>
  );
}

function pageTypeLabel(entry: WikiEntry) {
  const labels = {
    access: 'Access',
    entry: 'Wiki',
    guide: 'Guide',
    update: 'Update',
  } as const;
  return labels[entry.pageType];
}

function evidenceLabel(entry: WikiEntry) {
  const labels = {
    'community-lead': 'Community lead',
    pending: 'Pending verification',
    'single-official-source': 'Single official source',
    verified: 'Verified across official sources',
  } as const;
  return labels[entry.evidenceState];
}

function EntryCard({ entry }: { entry: WikiEntry }) {
  return (
    <a
      className="group rounded-[12px] border-2 border-ink bg-surface p-5 no-underline shadow-brutal transition-transform hover:-translate-y-1"
      href={getWikiEntryHref(entry)}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-black uppercase tracking-[0.12em] text-muted-foreground">
          {pageTypeLabel(entry)}
        </span>
        <span aria-hidden="true" className="text-xl font-black">
          →
        </span>
      </div>
      <h3 className="mt-3 text-2xl font-black tracking-[-0.02em] group-hover:text-orange-strong">
        {entry.title}
      </h3>
      <p className="mt-2 leading-7 text-muted-foreground">{entry.summary}</p>
    </a>
  );
}

function CategoryCard({ category }: { category: WikiCategory }) {
  return (
    <a
      className="rounded-[12px] border-2 border-ink bg-yellow p-5 text-ink no-underline shadow-brutal transition-transform hover:-translate-y-1"
      href={getWikiCategoryHref(category)}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-black">{category.title}</h3>
        <span aria-hidden="true" className="text-xl font-black">
          →
        </span>
      </div>
      <p className="mt-2 leading-7 text-ink/75">{category.description}</p>
      <span className="mt-5 inline-block text-sm font-black">
        {category.entrySlugs.length}{' '}
        {category.entrySlugs.length === 1 ? 'page' : 'pages'}
      </span>
    </a>
  );
}

export function WikiHomePage() {
  const featured = wikiEntries.slice(0, 4);

  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b-2 border-ink bg-yellow py-20 text-ink sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border-2 border-ink bg-cyan px-4 py-1 text-sm font-black uppercase tracking-[0.12em] shadow-brutal-xs">
              Verified facts · player-first routes
            </span>
            <h1 className="mt-7 text-balance text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.98] tracking-[-0.05em]">
              Read the battlefield.
              <span className="block text-orange-strong">
                Take the next step.
              </span>
            </h1>
            <p className="mt-7 max-w-[68ch] text-lg leading-8 text-ink/75 sm:text-xl">
              A compact {gameConfig.name} field manual for the questions that
              matter before and during a match: what is confirmed, where to
              start, how modes work, and which facts need a fresh recheck.
            </p>
            <div className="mt-9">
              <WikiSearch />
            </div>
            <TemplateNotice />
          </div>
        </Container>
      </section>

      <section className="py-18 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.14em] text-orange-strong">
                Start here
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Browse the knowledge base
              </h2>
            </div>
            <a
              className="font-black underline decoration-2 underline-offset-4"
              href="/wiki"
            >
              Open full Wiki →
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wikiCategories.map((category) => (
              <CategoryCard category={category} key={category.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y-2 border-ink bg-green py-18 text-ink sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.14em]">
              Field manual contract
            </span>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              One player question. One evidence boundary. One next step.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              Every page separates confirmed facts from things that still need a
              build or patch check. The result is deliberately smaller than a
              scraped database, but easier to trust when the match is live.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featured.map((entry) => (
              <EntryCard entry={entry} key={entry.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-18 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.14em] text-orange-strong">
                How this manual is organized
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Find the right layer quickly
              </h2>
              <ol className="mt-8 grid gap-4">
                {[
                  [
                    '01',
                    'Start',
                    'Use the Beginner Guide if this is your first public match.',
                  ],
                  [
                    '02',
                    'Compare',
                    'Use Game Modes and Launch Maps to understand the battlefield.',
                  ],
                  [
                    '03',
                    'Check',
                    'Use Access pages for platforms, crossplay and PC requirements.',
                  ],
                  [
                    '04',
                    'Recheck',
                    'Read the latest official patch notes for version-sensitive facts.',
                  ],
                ].map(([number, title, description]) => (
                  <li
                    className="flex gap-4 rounded-[12px] border-2 border-ink bg-surface p-4 shadow-brutal-xs"
                    key={number}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-lavender font-black">
                      {number}
                    </span>
                    <span>
                      <strong className="block text-lg">{title}</strong>
                      <span className="block text-muted-foreground">
                        {description}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="rounded-[12px] border-2 border-ink bg-lavender p-6 text-ink shadow-brutal lg:self-start">
              <h2 className="text-2xl font-black">Official sources</h2>
              <p className="mt-3 leading-7 text-ink/75">
                These links are the primary fact boundary for the local research
                preview. Use the source date on each page when a patch or
                platform policy changes.
              </p>
              <div className="mt-5 grid gap-2">
                {gameConfig.officialLinks.map((link) => (
                  <a
                    className="font-black underline decoration-2 underline-offset-4"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

export function WikiIndexPage() {
  const entries = wikiEntries.filter(
    (entry) => entry.indexable || websiteConfig.isTemplate
  );

  return (
    <main className="py-16 sm:py-24" id="main-content">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-[0.14em] text-orange-strong">
            Directory
          </span>
          <h1 className="mt-2 text-5xl font-black tracking-[-0.04em]">Wiki</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Browse by category, then open the exact page that answers the
            player’s question.
          </p>
          <div className="mt-8">
            <WikiSearch compact />
          </div>
        </div>

        <section className="mt-14" aria-labelledby="categories-heading">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black" id="categories-heading">
              Categories
            </h2>
            <span className="text-sm font-bold text-muted-foreground">
              {wikiCategories.length} categories
            </span>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wikiCategories.map((category) => (
              <CategoryCard category={category} key={category.slug} />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="entries-heading">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black" id="entries-heading">
              Wiki entries
            </h2>
            <span className="text-sm font-bold text-muted-foreground">
              {entries.length} pages
            </span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {entries.map((entry) => (
              <EntryCard entry={entry} key={entry.slug} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export function WikiCategoryPage({ category }: { category: WikiCategory }) {
  const entries = getCategoryEntries(category.slug);

  return (
    <main className="py-16 sm:py-24" id="main-content">
      <Container>
        <nav
          className="text-sm font-bold text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <a className="underline underline-offset-4" href="/">
            Home
          </a>{' '}
          /{' '}
          <a className="underline underline-offset-4" href="/wiki">
            Wiki
          </a>{' '}
          / {category.title}
        </nav>
        <div className="mt-8 max-w-3xl">
          <span className="text-sm font-black uppercase tracking-[0.14em] text-orange-strong">
            Category
          </span>
          <h1 className="mt-2 text-5xl font-black tracking-[-0.04em]">
            {category.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {category.description}
          </p>
          <div className="mt-8">
            <WikiSearch compact />
          </div>
        </div>

        <section className="mt-14" aria-labelledby="category-entries-heading">
          <h2 className="text-3xl font-black" id="category-entries-heading">
            Pages in this category
          </h2>
          {entries.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {entries.map((entry) => (
                <EntryCard entry={entry} key={entry.slug} />
              ))}
            </div>
          ) : (
            <p className="mt-6 rounded-[12px] border-2 border-dashed border-ink/40 p-6 text-muted-foreground">
              No verified entries yet. Use this category as a research target,
              not as a reason to publish placeholder pages.
            </p>
          )}
        </section>
      </Container>
    </main>
  );
}

export function WikiEntryPage({
  category,
  entry,
}: {
  category: WikiCategory;
  entry: WikiEntry;
}) {
  const relatedEntries = entry.relatedSlugs
    .map((slug) => findWikiEntry(slug))
    .filter((related): related is WikiEntry => Boolean(related));

  return (
    <main className="py-14 sm:py-20" id="main-content">
      <Container>
        <nav
          className="text-sm font-bold text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <a className="underline underline-offset-4" href="/">
            Home
          </a>{' '}
          /{' '}
          <a className="underline underline-offset-4" href="/wiki">
            Wiki
          </a>{' '}
          /{' '}
          <a
            className="underline underline-offset-4"
            href={getWikiCategoryHref(category)}
          >
            {category.title}
          </a>{' '}
          / {entry.title}
        </nav>

        <article className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.14em] text-orange-strong">
              {pageTypeLabel(entry)} · {evidenceLabel(entry)}
            </span>
            <h1 className="mt-3 text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              {entry.title}
            </h1>
            <p className="mt-5 max-w-[70ch] text-xl leading-8 text-muted-foreground">
              {entry.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-muted-foreground">
              <span>{entry.status}</span>
              <time dateTime={entry.updated}>Updated {entry.updated}</time>
            </div>

            <div className="mt-10 rounded-[12px] border-2 border-ink bg-yellow p-6 text-ink shadow-brutal">
              <span className="text-sm font-black uppercase tracking-[0.12em]">
                Short answer
              </span>
              <p className="mt-3 text-lg leading-8">{entry.lead}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {entry.facts.map((fact) => (
                <div
                  className="rounded-[10px] border-2 border-ink bg-surface p-4 shadow-brutal-xs"
                  key={fact.label}
                >
                  <dt className="text-sm font-black uppercase tracking-[0.1em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-bold">{fact.value}</dd>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-10">
              {entry.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-3xl font-black tracking-[-0.02em]">
                    {section.heading}
                  </h2>
                  <div className="mt-4 grid gap-4 text-lg leading-8 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 grid gap-2 pl-6 text-lg leading-8 text-muted-foreground">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>

          <aside className="grid content-start gap-5">
            <div className="rounded-[12px] border-2 border-ink bg-lavender p-5 text-ink shadow-brutal">
              <span className="text-sm font-black uppercase tracking-[0.12em]">
                Evidence and freshness
              </span>
              <p className="mt-3 leading-7 text-ink/75">
                {evidenceLabel(entry)}. Checked on {entry.updated}; update this
                page when an official patch, platform policy or launch detail
                changes.
              </p>
            </div>
            <div className="rounded-[12px] border-2 border-ink bg-surface p-5 shadow-brutal">
              <h2 className="text-xl font-black">Sources</h2>
              <div className="mt-4 grid gap-3">
                {entry.sources.length > 0 ? (
                  entry.sources.map((source) => (
                    <a
                      className="font-bold underline decoration-2 underline-offset-4"
                      href={source.href}
                      key={source.href}
                    >
                      {source.label} ↗
                      {source.note && (
                        <small className="mt-1 block font-normal text-muted-foreground">
                          {source.note}
                        </small>
                      )}
                    </a>
                  ))
                ) : (
                  <p className="text-sm leading-6 text-muted-foreground">
                    No verified source has been added yet. Keep this page out of
                    the public index until the research pass is complete.
                  </p>
                )}
              </div>
            </div>
            {relatedEntries.length > 0 && (
              <div className="rounded-[12px] border-2 border-ink bg-surface p-5 shadow-brutal">
                <h2 className="text-xl font-black">Related pages</h2>
                <div className="mt-4 grid gap-2">
                  {relatedEntries.map((related) => (
                    <a
                      className="font-bold underline decoration-2 underline-offset-4"
                      href={getWikiEntryHref(related)}
                      key={related.slug}
                    >
                      {related.title} →
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </article>
      </Container>
    </main>
  );
}

export function GuidesIndexPage() {
  const guides = wikiEntries.filter((entry) => entry.pageType === 'guide');

  return (
    <main className="py-16 sm:py-24" id="main-content">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-[0.14em] text-orange-strong">
            Player help
          </span>
          <h1 className="mt-2 text-5xl font-black tracking-[-0.04em]">
            Guides
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Task-first pages for players who need to complete a first-match
            action, not only look up a term.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {guides.map((entry) => (
            <EntryCard entry={entry} key={entry.slug} />
          ))}
        </div>
      </Container>
    </main>
  );
}

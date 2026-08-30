import { Container } from '@/components/layout/container';
import { ButtonLink } from '@/components/ui/button-link';
import { gameConfig } from '@/config/game';
import { websiteConfig } from '@/config/website';
import {
  findWikiEntry,
  getCategoryEntries,
  getLatestEntries,
  getWikiCategoryHref,
  getWikiEntryHref,
  homepageQuickAnswers,
  searchWikiEntries,
  wikiCategories,
} from '@/content/site';
import type {
  WikiCategory,
  WikiEntry,
  WikiStep,
  WikiTable,
  WikiVisual,
} from '@/content/types';
import { fieldEvidenceVisuals } from '@/content/visuals';
import {
  pageTypeLabels,
  topicLabels,
  useWikiDirectoryFilters,
  WikiDirectoryFilters,
} from './wiki-filters';
import { WikiSearch } from './wiki-search';

function TemplateNotice() {
  if (!websiteConfig.isTemplate) return null;

  return (
    <aside className="field-notice mt-8 p-5">
      <strong className="block text-lg">Research preview · noindex</strong>
      <p className="field-muted mt-1 max-w-[70ch] text-sm leading-6">
        The HLL: Vietnam facts on this local build are source-backed, but the
        production origin is not configured yet. Crawling is blocked and every
        entry stays out of the public index until the launch audit and explicit
        deployment approval are complete.
      </p>
    </aside>
  );
}

function pageTypeLabel(entry: WikiEntry) {
  return entry.pageType === 'entry' ? 'Wiki' : pageTypeLabels[entry.pageType];
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

function sourceTypeLabel(type: WikiEntry['sources'][number]['type']) {
  return type === 'official'
    ? 'Official'
    : type === 'community'
      ? 'Community example'
      : 'Reference';
}

function WikiVisualFigure({ visual }: { visual: WikiVisual }) {
  return (
    <figure className="field-visual">
      <div className="field-visual-frame">
        <img alt={visual.alt} loading="lazy" src={visual.src} />
        {visual.annotations?.map((annotation) => (
          <span
            className="field-visual-annotation"
            key={`${annotation.label}-${annotation.x}-${annotation.y}`}
            style={{
              height: annotation.height ? `${annotation.height}%` : undefined,
              left: `${annotation.x}%`,
              top: `${annotation.y}%`,
              width: annotation.width ? `${annotation.width}%` : undefined,
            }}
          >
            {annotation.label}
          </span>
        ))}
      </div>
      <figcaption className="field-visual-caption">
        <span>{visual.caption}</span>
        <span className="field-visual-meta">
          <span className="field-source-type">
            {visual.evidenceRole === 'official-demonstration'
              ? 'Official demonstration'
              : 'YouTube community gameplay'}
          </span>
          {visual.build && <span>Build: {visual.build}</span>}
          {visual.timestamp && <span>{visual.timestamp}</span>}
          <span>{visual.credit}</span>
          <a href={visual.sourceHref} rel="noreferrer" target="_blank">
            {visual.sourceLabel} ↗
          </a>
        </span>
      </figcaption>
    </figure>
  );
}

function WikiStepList({ steps }: { steps: readonly WikiStep[] }) {
  return (
    <section className="mt-12" aria-labelledby="action-chain-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="field-label">Action chain</span>
          <h2 className="mt-2 text-3xl font-black" id="action-chain-heading">
            Do this in order
          </h2>
        </div>
        <span className="field-code text-muted-foreground">
          {steps.length} steps
        </span>
      </div>
      <ol className="field-steps mt-6 grid gap-4">
        {steps.map((step, index) => (
          <li className="field-step p-5" key={step.title}>
            <div className="flex gap-4">
              <span aria-hidden="true" className="field-step-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-black">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {step.action}
                </p>
                <p className="mt-3 text-sm leading-6">
                  <strong>Success signal:</strong> {step.successSignal}
                </p>
                {step.failureCheck && (
                  <p className="mt-2 text-sm leading-6 text-orange-strong">
                    <strong>Failure check:</strong> {step.failureCheck}
                  </p>
                )}
              </div>
            </div>
            {step.visual && (
              <div className="mt-5 pl-0 sm:pl-14">
                <WikiVisualFigure visual={step.visual} />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function WikiTableView({ table }: { table: WikiTable }) {
  return (
    <div className="field-table-wrap">
      <table className="field-table">
        {table.caption && <caption>{table.caption}</caption>}
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join('|')}>
              {row.map((cell) => (
                <td key={`${cell}-${row.join('|')}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FieldMapGraphic() {
  return (
    <svg
      aria-hidden="true"
      className="field-map-art"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 720 620"
    >
      <g opacity="0.72">
        <line className="field-grid-line" x1="72" x2="72" y1="0" y2="620" />
        <line className="field-grid-line" x1="184" x2="184" y1="0" y2="620" />
        <line className="field-grid-line" x1="296" x2="296" y1="0" y2="620" />
        <line className="field-grid-line" x1="408" x2="408" y1="0" y2="620" />
        <line className="field-grid-line" x1="520" x2="520" y1="0" y2="620" />
        <line className="field-grid-line" x1="632" x2="632" y1="0" y2="620" />
        <line className="field-grid-line" x1="0" x2="720" y1="92" y2="92" />
        <line className="field-grid-line" x1="0" x2="720" y1="204" y2="204" />
        <line className="field-grid-line" x1="0" x2="720" y1="316" y2="316" />
        <line className="field-grid-line" x1="0" x2="720" y1="428" y2="428" />
        <line className="field-grid-line" x1="0" x2="720" y1="540" y2="540" />
      </g>
      <g className="field-contour" opacity="0.84">
        <path d="M-30 104c76-79 165-78 221-24 62 59 77 132 157 122 94-12 115-125 211-128 70-2 108 42 176 84" />
        <path d="M-20 144c69-62 147-62 202-13 70 62 98 142 171 132 93-13 118-127 213-135 62-6 111 30 169 70" />
        <path d="M-14 189c67-50 129-49 189-5 77 57 106 144 176 139 95-7 119-129 217-143 56-8 105 19 164 58" />
        <path d="M-2 237c66-38 121-36 178 0 85 53 113 143 188 145 94 1 125-125 218-146 53-12 98 6 153 42" />
        <path d="M10 288c62-27 116-21 167 9 87 51 124 139 193 147 91 10 132-118 221-149 48-17 93-11 138 19" />
        <path d="M18 340c68-17 116-7 166 20 86 47 123 127 199 143 84 18 143-105 223-145 44-22 83-25 126-5" />
        <path d="M34 398c67-10 113 5 163 31 83 44 131 116 202 141 84 29 150-84 221-136 42-31 74-40 119-30" />
        <path d="M56 458c62-4 104 11 153 36 83 43 136 101 207 128 82 31 150-60 218-122 37-34 69-53 104-54" />
        <path d="M90 518c53 1 91 14 142 41 80 42 139 75 204 89 81 17 147-38 207-99 35-35 65-56 103-67" />
      </g>
      <g>
        <circle className="field-marker" cx="498" cy="178" r="6" />
        <circle className="field-marker" cx="571" cy="382" r="6" />
        <circle className="field-marker" cx="346" cy="463" r="6" />
        <path
          d="M498 178 571 382 346 463"
          fill="none"
          className="field-route-line"
          strokeDasharray="5 9"
          strokeWidth="1.5"
        />
      </g>
      <g>
        <text x="92" y="74">
          16°04'N / 108°12'E
        </text>
        <text x="544" y="298">
          SECTOR 04
        </text>
        <text x="422" y="502">
          CAM RANH / GRID 09
        </text>
      </g>
    </svg>
  );
}

function EntryCard({ entry }: { entry: WikiEntry }) {
  return (
    <a
      className="field-card group p-5 no-underline"
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
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.tags.slice(0, 4).map((tag) => (
          <span className="field-tag" key={tag}>
            {topicLabels[tag]}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-ink/15 pt-3 text-xs">
        <span className="font-bold uppercase tracking-[0.1em] text-orange-strong">
          {evidenceLabel(entry)}
        </span>
        <time
          className="font-mono text-muted-foreground"
          dateTime={entry.updated}
        >
          Checked {entry.updated}
        </time>
      </div>
    </a>
  );
}

function CategoryCard({ category }: { category: WikiCategory }) {
  return (
    <a
      className="field-category-card group p-5 no-underline"
      href={getWikiCategoryHref(category)}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-black">{category.title}</h3>
        <span aria-hidden="true" className="text-xl font-black">
          →
        </span>
      </div>
      <p className="field-muted mt-2 leading-7">{category.description}</p>
      <span className="field-code field-muted mt-5 inline-block">
        {category.entrySlugs.length}{' '}
        {category.entrySlugs.length === 1 ? 'page' : 'pages'}
      </span>
    </a>
  );
}

function TaskCard({
  description,
  href,
  index,
  title,
}: {
  description: string;
  href: string;
  index: string;
  title: string;
}) {
  return (
    <a className="field-task-card group p-5 no-underline" href={href}>
      <div className="flex items-start justify-between gap-4">
        <span className="field-code">{index}</span>
        <span aria-hidden="true" className="text-xl font-black">
          ↗
        </span>
      </div>
      <h3 className="mt-8 text-2xl font-black tracking-[-0.02em] group-hover:text-orange-strong">
        {title}
      </h3>
      <p className="mt-2 leading-7 text-muted-foreground">{description}</p>
    </a>
  );
}

function QuickAnswerCard({
  description,
  href,
  label,
}: (typeof homepageQuickAnswers)[number]) {
  return (
    <a className="field-card group p-4 no-underline" href={href}>
      <div className="flex items-start justify-between gap-3">
        <span className="field-label">Quick answer</span>
        <span aria-hidden="true" className="text-lg font-black">
          →
        </span>
      </div>
      <h3 className="mt-4 text-xl font-black group-hover:text-orange-strong">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </a>
  );
}

export function WikiHomePage() {
  const latest = getLatestEntries(4);

  return (
    <main id="main-content">
      <section className="field-hero relative overflow-hidden py-20 sm:py-28">
        <FieldMapGraphic />
        <Container className="relative z-10">
          <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_21rem]">
            <div className="max-w-4xl">
              <span className="field-label field-hero-kicker inline-flex px-3 py-2">
                HELL LET LOOSE VIETNAM / RESEARCH PREVIEW
              </span>
              <h1 className="mt-7 max-w-4xl text-balance text-[clamp(3.7rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]">
                Hell Let Loose{' '}
                <span className="block text-orange">Vietnam Guide</span>
              </h1>
              <p className="field-muted mt-7 max-w-[58ch] text-lg leading-8 sm:text-xl">
                Find the first-match route, maps, modes, roles, PC requirements,
                crossplay and current patch notes for Hell Let Loose: Vietnam.
                Every fact is dated and linked to its source.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink
                  className="text-xs uppercase tracking-[0.08em]"
                  href="/guides/beginner"
                >
                  Start first match
                </ButtonLink>
                <ButtonLink
                  className="text-xs uppercase tracking-[0.08em]"
                  href="/wiki/access/crossplay-and-platforms"
                  variant="secondary"
                >
                  Check platforms & crossplay
                </ButtonLink>
              </div>
              <div className="mt-7">
                <WikiSearch />
              </div>
              <TemplateNotice />
            </div>

            <aside className="field-brief p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="field-code">{'HLLV // GUIDE BRIEF'}</span>
                <span className="field-label field-muted">
                  {websiteConfig.isTemplate
                    ? 'RESEARCH PREVIEW / 01'
                    : 'LIVE / 01'}
                </span>
              </div>
              <div className="mt-6 grid gap-4">
                {gameConfig.heroStats.map((stat) => (
                  <div className="field-brief-line pt-4" key={stat.label}>
                    <strong className="block font-display text-4xl font-black tracking-tight">
                      {stat.value}
                    </strong>
                    <span className="field-code field-muted mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
                <p className="field-muted text-xs leading-5">
                  * The official game page lists 19 roles; Steam About currently
                  lists 17. The full roster stays pending until reconciled.
                </p>
              </div>
              <div className="field-brief-line mt-5 flex items-center justify-between gap-3 pt-4 text-xs">
                <span className="field-code field-muted">SOURCE STATUS</span>
                <span className="flex items-center gap-2 font-bold text-yellow-soft">
                  <span className="size-2 rounded-full bg-yellow-soft" />
                  CHECKED 30 AUG 2026
                </span>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="quick-answers-heading"
        className="bg-background py-12 sm:py-16"
      >
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="field-label">Quick answers</span>
              <h2
                className="mt-2 text-3xl font-black tracking-[-0.03em] sm:text-4xl"
                id="quick-answers-heading"
              >
                Check the facts before you queue
              </h2>
            </div>
            <span className="field-code text-muted-foreground">
              4 P0 routes
            </span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepageQuickAnswers.map((answer) => (
              <QuickAnswerCard key={answer.href} {...answer} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-18 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="field-label">Start with the question</span>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Choose your next move
              </h2>
            </div>
            <span className="field-code text-muted-foreground">4 routes</span>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <TaskCard
              description="Follow the beginner guide: complete the tutorial, join a squad and read the active objective."
              href="/guides/beginner"
              index="01"
              title="First-match guide"
            />
            <TaskCard
              description="See the six launch maps and learn how Warfare, Offensive, Conquest and Domination work."
              href="/wiki/battlefield"
              index="02"
              title="Maps & game modes"
            />
            <TaskCard
              description="Understand the confirmed role families before exploring weapons, vehicles and aircraft."
              href="/wiki/roles"
              index="03"
              title="Roles, weapons & vehicles"
            />
            <TaskCard
              description="Start with settings, voice chat and reversible crash checks for the current build."
              href="/guides/best-settings"
              index="04"
              title="Settings, controls & fixes"
            />
          </div>
        </Container>
      </section>

      <section className="bg-background py-18 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="field-label">Browse by topic</span>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Browse six topic areas
              </h2>
            </div>
            <a
              className="font-black underline decoration-2 underline-offset-4"
              href="/wiki"
            >
              Open full directory →
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wikiCategories.map((category) => (
              <CategoryCard category={category} key={category.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="field-band py-18 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="field-label text-yellow-soft">
              Latest verified
            </span>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Guides and updates worth opening first
            </h2>
            <p className="field-muted mt-5 text-lg leading-8">
              These entries are ordered by checked date, with current updates
              and high-intent starting points first when several checks share a
              date. Official sources carry mechanism facts; community material,
              when present, is shown only as a player example.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {latest.map((entry) => (
              <EntryCard entry={entry} key={entry.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section
        className="bg-background py-18 sm:py-24"
        aria-labelledby="field-evidence-heading"
      >
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-3xl">
              <span className="field-label">Field evidence</span>
              <h2
                className="mt-2 text-4xl font-black tracking-[-0.03em] sm:text-5xl"
                id="field-evidence-heading"
              >
                See the systems before you read the claims.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Official battlefield media gives visual context for the
                questions these guides and reference pages answer. It
                demonstrates a scene, not a universal route, control or balance
                rule.
              </p>
            </div>
            <span className="field-code text-muted-foreground">
              {fieldEvidenceVisuals.length} official visuals
            </span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {fieldEvidenceVisuals.map((visual) => (
              <WikiVisualFigure key={visual.src} visual={visual} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-18 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
            <div>
              <span className="field-label">How to use the site</span>
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
                  <li className="field-card flex gap-4 p-4" key={number}>
                    <span className="flex size-10 shrink-0 items-center justify-center border border-ink bg-orange font-display font-black text-paper">
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
            <aside className="field-brief p-6 lg:self-start">
              <h2 className="text-2xl font-black">Official sources</h2>
              <p className="field-muted mt-3 leading-7">
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
  const { clear, filters, ready, update } = useWikiDirectoryFilters();
  const entries = searchWikiEntries(filters).filter(
    (entry) => entry.indexable || websiteConfig.isTemplate
  );

  return (
    <main className="py-16 sm:py-24" id="main-content">
      <Container>
        <div className="max-w-3xl">
          <span className="field-label">Directory</span>
          <h1 className="mt-2 text-5xl font-black tracking-[-0.04em]">Wiki</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Browse by category, then open the exact page that answers the
            player’s question.
          </p>
          <div className="mt-8">
            <WikiSearch compact />
          </div>
        </div>

        <div className="mt-10">
          <WikiDirectoryFilters
            filters={filters}
            onChange={update}
            onClear={clear}
            ready={ready}
            showPageType
          />
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
              {entries.length} matching pages
            </span>
          </div>
          {entries.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {entries.map((entry) => (
                <EntryCard entry={entry} key={entry.slug} />
              ))}
            </div>
          ) : (
            <div className="field-empty mt-6 p-6">
              <p className="font-bold">No matching Wiki pages.</p>
              <p className="mt-2 text-muted-foreground">
                Clear the filters or browse a category to find the closest
                verified research target.
              </p>
              <a
                className="mt-4 inline-block font-black underline decoration-2 underline-offset-4"
                href="/wiki/battlefield"
              >
                Browse Battlefield pages →
              </a>
            </div>
          )}
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
          <span className="field-label">Category</span>
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
            <p className="field-empty mt-6 p-6 text-muted-foreground">
              No verified entries yet. Use this category as a research target,
              not as a reason to publish placeholder pages.
            </p>
          )}
        </section>
      </Container>
    </main>
  );
}

function OnThisPage({ entry }: { entry: WikiEntry }) {
  return (
    <nav aria-label="On this page" className="field-on-this-page p-5">
      <span className="field-label">On this page</span>
      <div className="mt-3 grid gap-2 text-sm font-bold">
        <a href="#short-answer">Answer</a>
        <a href="#quick-facts">Quick facts</a>
        {entry.steps && entry.steps.length > 0 && (
          <a href="#action-chain-heading">Action chain</a>
        )}
        {entry.sections.map((section, index) => (
          <a href={`#section-${index + 1}`} key={section.heading}>
            {section.heading}
          </a>
        ))}
        <a href="#sources">Sources & attribution</a>
        {entry.relatedSlugs.length > 0 && (
          <a href="#related-pages">Related pages</a>
        )}
      </div>
    </nav>
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
            <span className="field-label">
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

            <div className="field-answer mt-10 p-6" id="short-answer">
              <span className="text-sm font-black uppercase tracking-[0.12em]">
                Short answer
              </span>
              <p className="mt-3 text-lg leading-8">{entry.lead}</p>
            </div>

            <section className="mt-10" id="quick-facts">
              <div className="flex items-end justify-between gap-3">
                <h2 className="text-3xl font-black">Quick facts</h2>
                <div className="flex flex-wrap justify-end gap-2">
                  {entry.tags.map((tag) => (
                    <span className="field-tag" key={tag}>
                      {topicLabels[tag]}
                    </span>
                  ))}
                </div>
              </div>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {entry.facts.map((fact) => (
                  <div className="field-card p-4" key={fact.label}>
                    <dt className="text-sm font-black uppercase tracking-[0.1em] text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-bold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {entry.steps && entry.steps.length > 0 && (
              <WikiStepList steps={entry.steps} />
            )}

            <div className="mt-12 grid gap-10">
              {entry.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.heading}>
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
                  {section.tables && section.tables.length > 0 && (
                    <div className="mt-6 grid gap-4">
                      {section.tables.map((table) => (
                        <WikiTableView
                          key={table.caption ?? table.headers.join('|')}
                          table={table}
                        />
                      ))}
                    </div>
                  )}
                  {section.visuals && section.visuals.length > 0 && (
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      {section.visuals.map((visual) => (
                        <WikiVisualFigure
                          key={`${visual.src}-${visual.caption}`}
                          visual={visual}
                        />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>

          <aside className="grid content-start gap-5">
            <OnThisPage entry={entry} />
            <div className="field-notice p-5">
              <span className="text-sm font-black uppercase tracking-[0.12em]">
                Evidence and freshness
              </span>
              <p className="field-muted mt-3 leading-7">
                {evidenceLabel(entry)}. Checked on {entry.updated}; update this
                page when an official patch, platform policy or launch detail
                changes.
              </p>
            </div>
            <div className="field-card p-5" id="sources">
              <h2 className="text-xl font-black">Sources</h2>
              <div className="mt-4 grid gap-3">
                {entry.sources.length > 0 ? (
                  entry.sources.map((source) => (
                    <a
                      className="font-bold underline decoration-2 underline-offset-4"
                      href={source.href}
                      key={source.href}
                    >
                      <span className="field-source-type mr-2">
                        {sourceTypeLabel(source.type)}
                      </span>
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
              <div className="field-card p-5" id="related-pages">
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
  const { clear, filters, ready, update } = useWikiDirectoryFilters('guide');
  const guides = searchWikiEntries({ ...filters, pageType: 'guide' });

  return (
    <main className="py-16 sm:py-24" id="main-content">
      <Container>
        <div className="max-w-3xl">
          <span className="field-label">Player help</span>
          <h1 className="mt-2 text-5xl font-black tracking-[-0.04em]">
            Guides
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Task-first pages for players who need to complete a first-match
            action, not only look up a term.
          </p>
        </div>
        <div className="mt-10">
          <WikiDirectoryFilters
            filters={filters}
            onChange={update}
            onClear={clear}
            ready={ready}
          />
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-muted-foreground">
            {guides.length} matching guides
          </span>
        </div>
        {guides.length > 0 ? (
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {guides.map((entry) => (
              <EntryCard entry={entry} key={entry.slug} />
            ))}
          </div>
        ) : (
          <div className="field-empty mt-6 p-6">
            <p className="font-bold">No matching guides.</p>
            <p className="mt-2 text-muted-foreground">
              Clear the filters or search the full Wiki for a related system.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}

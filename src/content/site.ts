import { gameConfig } from '@/config/game';
import type { WikiCategory, WikiEntry } from './types';

export const wikiCategories: readonly WikiCategory[] = [
  {
    slug: 'basics',
    title: 'Basics',
    description: 'Core terms and first checks for a new player.',
    indexable: true,
    entrySlugs: ['starter-resource', 'starter-machine', 'starter-guide'],
  },
  {
    slug: 'exploration',
    title: 'Exploration',
    description: 'Maps, locations and exploration workflows.',
    indexable: true,
    entrySlugs: ['starter-map'],
  },
  {
    slug: 'access',
    title: 'Access & status',
    description: 'Store, platform, release and version information.',
    indexable: true,
    entrySlugs: ['starter-access', 'starter-updates'],
  },
  {
    slug: 'community',
    title: 'Community',
    description: 'Community examples and leads that still need checking.',
    indexable: false,
    entrySlugs: [],
  },
] as const;

export const wikiEntries: readonly WikiEntry[] = [
  {
    slug: 'starter-resource',
    categorySlug: 'basics',
    title: 'Example Resource',
    pageType: 'entry',
    summary:
      'A placeholder resource page showing the reusable Wiki entry shape.',
    lead: 'Replace this lead with a source-backed answer to one concrete player question, such as where to find the resource and what to do with it first.',
    status: gameConfig.status,
    evidenceState: 'pending',
    updated: '2026-01-01',
    keywords: ['example game resource'],
    indexable: false,
    facts: [
      { label: 'First question', value: 'Where does the player find it?' },
      {
        label: 'Next action',
        value: 'What should the player do after finding it?',
      },
    ],
    sections: [
      {
        heading: 'What to verify',
        paragraphs: [
          'Use official game materials to confirm the resource name, location, inputs, outputs and version boundaries.',
        ],
        bullets: [
          'Record the exact player intent and target keyword.',
          'Keep unsupported recipes or values out of the published page.',
        ],
      },
    ],
    sources: [],
    relatedSlugs: ['starter-machine', 'starter-guide'],
  },
  {
    slug: 'starter-machine',
    categorySlug: 'basics',
    title: 'Example Machine',
    pageType: 'entry',
    summary:
      'A placeholder machine page for inputs, outputs and troubleshooting.',
    lead: 'Replace this paragraph with the shortest reliable explanation of what the machine accepts, what it produces and how a new player can confirm that it works.',
    status: gameConfig.status,
    evidenceState: 'pending',
    updated: '2026-01-01',
    keywords: ['example game machine'],
    indexable: false,
    facts: [
      { label: 'Input', value: 'Verify from the official source.' },
      { label: 'Output', value: 'Verify from the official source.' },
    ],
    sections: [
      {
        heading: 'Player checklist',
        paragraphs: [
          'Explain the minimum setup, the visible success signal and the first troubleshooting check.',
        ],
      },
    ],
    sources: [],
    relatedSlugs: ['starter-resource', 'starter-guide'],
  },
  {
    slug: 'starter-map',
    categorySlug: 'exploration',
    path: '/guides/map',
    title: 'Example Map Guide',
    pageType: 'guide',
    summary: 'A placeholder exploration guide with a task-first action chain.',
    lead: 'Replace this with a concrete route: what the player should open first, what they should look for, how they know they succeeded and what to do next.',
    status: gameConfig.status,
    evidenceState: 'pending',
    updated: '2026-01-01',
    keywords: ['example game map', 'example game guide'],
    indexable: false,
    facts: [
      { label: 'Start state', value: 'Describe what the player already has.' },
      {
        label: 'Success signal',
        value: 'Describe what the player should see.',
      },
    ],
    sections: [
      {
        heading: '1. Start from the player task',
        paragraphs: [
          'A guide should tell the player what to click or inspect, not only describe a feature.',
        ],
      },
      {
        heading: '2. Add evidence beside the action',
        paragraphs: [
          'Use an official screenshot or a clearly labeled community example only when it explains the step.',
        ],
      },
    ],
    sources: [],
    relatedSlugs: ['starter-resource', 'starter-access'],
  },
  {
    slug: 'starter-access',
    categorySlug: 'access',
    title: 'Example Store & Platform Page',
    pageType: 'access',
    summary: 'A placeholder page for official store, demo and platform links.',
    lead: 'Replace this page with dated, source-backed platform information. Keep each platform claim separate and link directly to the official destination.',
    status: gameConfig.status,
    evidenceState: 'pending',
    updated: '2026-01-01',
    keywords: ['example game store', 'example game platform'],
    indexable: false,
    facts: [
      {
        label: 'Official destination',
        value: 'Replace the placeholder URL in game.ts.',
      },
      {
        label: 'Recheck',
        value:
          'Record the date when price, platform or release status was checked.',
      },
    ],
    sections: [
      {
        heading: 'Keep access facts current',
        paragraphs: [
          'Prices, release status, platform availability and subscription access are dynamic facts. Attach a collection date and a recheck item.',
        ],
      },
    ],
    sources: [],
    relatedSlugs: ['starter-updates', 'starter-map'],
  },
  {
    slug: 'starter-updates',
    categorySlug: 'access',
    title: 'Example Updates Page',
    pageType: 'update',
    summary: 'A placeholder update page for version-sensitive facts.',
    lead: 'Replace this with a concise update record. Separate confirmed changes from community reports and link to the official announcement when available.',
    status: gameConfig.status,
    evidenceState: 'pending',
    updated: '2026-01-01',
    keywords: ['example game update'],
    indexable: false,
    facts: [
      {
        label: 'Version',
        value: 'Replace with the verified version identifier.',
      },
      { label: 'Checked', value: 'Replace with the source collection date.' },
    ],
    sections: [
      {
        heading: 'Version boundary',
        paragraphs: [
          'Do not present a community observation or an old build as a current universal mechanic.',
        ],
      },
    ],
    sources: [],
    relatedSlugs: ['starter-access'],
  },
  {
    slug: 'starter-guide',
    categorySlug: 'basics',
    path: '/guides/beginner',
    title: 'Beginner Guide',
    pageType: 'guide',
    summary: 'A reusable beginner-guide outline for the first successful loop.',
    lead: 'Replace each placeholder with verified steps for the selected game: starting state, first action, expected result, failure check and next step.',
    status: gameConfig.status,
    evidenceState: 'pending',
    updated: '2026-01-01',
    keywords: ['example game beginner guide'],
    indexable: false,
    facts: [
      { label: 'Start', value: 'What does a new player see first?' },
      {
        label: 'First loop',
        value: 'What is the smallest successful action chain?',
      },
    ],
    sections: [
      {
        heading: '1. State the player task',
        paragraphs: [
          'Start each section with a player action and a visible success signal.',
        ],
      },
      {
        heading: '2. Link the next useful page',
        paragraphs: [
          'Once the first loop works, link to the next relevant resource, machine or exploration page.',
        ],
      },
    ],
    sources: [],
    relatedSlugs: ['starter-resource', 'starter-map'],
  },
] as const;

export function findWikiCategory(slug: string) {
  return wikiCategories.find((category) => category.slug === slug);
}

export function findWikiEntry(slug: string) {
  return wikiEntries.find((entry) => entry.slug === slug);
}

export function getWikiCategoryHref(category: WikiCategory) {
  return `/wiki/${category.slug}`;
}

export function getWikiEntryHref(entry: WikiEntry) {
  return entry.path ?? `/wiki/${entry.categorySlug}/${entry.slug}`;
}

export function getCategoryEntries(categorySlug: string) {
  const category = findWikiCategory(categorySlug);
  if (!category) return [];
  return category.entrySlugs
    .map((slug) => findWikiEntry(slug))
    .filter((entry): entry is WikiEntry => Boolean(entry));
}

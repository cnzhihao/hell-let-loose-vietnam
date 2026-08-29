import { useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import type { TopicTag, WikiEntry } from '@/content/types';

export const topicLabels: Record<TopicTag, string> = {
  beginner: 'Beginner',
  buying: 'Buying',
  community: 'Community',
  gameplay: 'Gameplay',
  maps: 'Maps',
  platforms: 'Platforms',
  roles: 'Roles',
  systems: 'Systems',
  technical: 'Technical',
  updates: 'Updates',
  vehicles: 'Vehicles',
  weapons: 'Weapons',
};

export const pageTypeLabels: Record<WikiEntry['pageType'], string> = {
  access: 'Access',
  entry: 'Wiki entry',
  guide: 'Guide',
  update: 'Update',
};

export type WikiDirectoryFiltersState = {
  query: string;
  topic: TopicTag | '';
  pageType: WikiEntry['pageType'] | '';
};

function readFilters(
  defaultPageType: WikiEntry['pageType'] | ''
): WikiDirectoryFiltersState {
  if (typeof window === 'undefined') {
    return { query: '', topic: '', pageType: defaultPageType };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    query: params.get('q') ?? '',
    topic: (params.get('topic') as TopicTag | '') || '',
    pageType:
      (params.get('pageType') as WikiEntry['pageType'] | '') || defaultPageType,
  };
}

function writeFilters(
  filters: WikiDirectoryFiltersState,
  defaultPageType: WikiEntry['pageType'] | '',
  push: (path: string) => void
) {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  if (filters.query) params.set('q', filters.query);
  else params.delete('q');
  if (filters.topic) params.set('topic', filters.topic);
  else params.delete('topic');
  if (filters.pageType && filters.pageType !== defaultPageType) {
    params.set('pageType', filters.pageType);
  } else params.delete('pageType');

  const search = params.toString();
  const nextUrl = `${window.location.pathname}${search ? `?${search}` : ''}`;
  push(nextUrl);
  window.dispatchEvent(new Event('wiki-search-change'));
}

export function useWikiDirectoryFilters(
  defaultPageType: WikiEntry['pageType'] | '' = ''
) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [filters, setFilters] = useState<WikiDirectoryFiltersState>({
    query: '',
    topic: '',
    pageType: defaultPageType,
  });

  useEffect(() => {
    const sync = () => setFilters(readFilters(defaultPageType));
    window.addEventListener('popstate', sync);
    window.addEventListener('wiki-search-change', sync);
    sync();
    setReady(true);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('wiki-search-change', sync);
    };
  }, [defaultPageType]);

  const update = (next: Partial<WikiDirectoryFiltersState>) => {
    const nextFilters = { ...filters, ...next };
    writeFilters(nextFilters, defaultPageType, (path) =>
      router.history.push(path)
    );
    setFilters(nextFilters);
  };

  const clear = () =>
    update({ query: '', topic: '', pageType: defaultPageType });

  return { clear, filters, ready, update };
}

export function WikiDirectoryFilters({
  filters,
  ready = true,
  onClear,
  onChange,
  showPageType = false,
}: {
  filters: WikiDirectoryFiltersState;
  ready?: boolean;
  onClear?: () => void;
  onChange: (next: Partial<WikiDirectoryFiltersState>) => void;
  showPageType?: boolean;
}) {
  const hasFilters = Boolean(
    filters.query || filters.topic || (showPageType && filters.pageType)
  );

  return (
    <div className="field-filters flex flex-wrap items-end gap-3 p-3">
      <label className="grid min-w-48 flex-1 gap-1 text-xs font-black uppercase tracking-[0.1em]">
        <span>Search directory</span>
        <input
          aria-label="Search directory"
          className="field-filter-control min-w-0 px-3 py-2 text-sm font-bold normal-case tracking-normal outline-none"
          disabled={!ready}
          onChange={(event) => onChange({ query: event.target.value })}
          placeholder="Try maps, voice chat or roles"
          type="search"
          value={filters.query}
        />
      </label>
      <label className="grid min-w-44 gap-1 text-xs font-black uppercase tracking-[0.1em]">
        <span>Topic</span>
        <select
          aria-label="Filter by topic"
          className="field-filter-control px-3 py-2 text-sm font-bold normal-case tracking-normal outline-none"
          disabled={!ready}
          onChange={(event) =>
            onChange({ topic: event.target.value as TopicTag | '' })
          }
          value={filters.topic}
        >
          <option value="">All topics</option>
          {Object.entries(topicLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      {showPageType && (
        <label className="grid min-w-40 gap-1 text-xs font-black uppercase tracking-[0.1em]">
          <span>Page type</span>
          <select
            aria-label="Filter by page type"
            className="field-filter-control px-3 py-2 text-sm font-bold normal-case tracking-normal outline-none"
            disabled={!ready}
            onChange={(event) =>
              onChange({
                pageType: event.target.value as WikiEntry['pageType'] | '',
              })
            }
            value={filters.pageType}
          >
            <option value="">All page types</option>
            {Object.entries(pageTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      )}
      {hasFilters && (
        <button
          className="field-filter-clear px-3 py-2 text-xs font-black uppercase tracking-[0.1em]"
          onClick={() =>
            onClear?.() ?? onChange({ query: '', topic: '', pageType: '' })
          }
          type="button"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { websiteConfig } from '@/config/website';
import {
  findWikiCategory,
  findWikiEntry,
  getLatestEntries,
  getWikiEntryHref,
  wikiEntries,
} from '@/content/site';
import { homeHead, siteOrigin, wikiHead } from '@/lib/seo';
import { cn } from '@/lib/utils';

describe('Hell Let Loose Vietnam Wiki contracts', () => {
  it('keeps the researched site in a source-backed launch-candidate state', () => {
    expect(websiteConfig.name).toBe('Hell Let Loose Vietnam Wiki');
    expect(websiteConfig.repository).toBe(
      'https://github.com/cnzhihao/hell-let-loose-vietnam'
    );
    expect(websiteConfig.url).toBe('https://hellletloosevietnamguide.site');
    expect(websiteConfig.isTemplate).toBe(false);
    expect(wikiEntries.filter((entry) => entry.indexable)).toHaveLength(17);
    expect(
      wikiEntries
        .filter((entry) => entry.evidenceState === 'community-lead')
        .every((entry) => !entry.indexable)
    ).toBe(true);
    expect(findWikiEntry('vehicles')?.indexable).toBe(false);
    expect(
      wikiEntries.some((entry) => entry.evidenceState === 'verified')
    ).toBe(true);
  });

  it('keeps content paths unique and supports custom Guide paths', () => {
    const paths = wikiEntries.map(getWikiEntryHref);
    expect(new Set(paths).size).toBe(paths.length);
    const guide = findWikiEntry('beginner-guide');
    if (!guide) throw new Error('beginner guide fixture is missing');
    expect(getWikiEntryHref(guide)).toBe('/guides/beginner');
  });

  it('prioritizes current and high-intent entries when checked dates tie', () => {
    expect(getLatestEntries(4).map((entry) => entry.slug)).toEqual([
      'patch-1-3',
      'release-and-platforms',
      'pc-requirements',
      'crossplay-and-platforms',
    ]);
  });

  it('builds local and configured absolute metadata safely', () => {
    expect(siteOrigin('https://example.com/')).toBe(
      'https://hellletloosevietnamguide.site'
    );
    expect(homeHead('en', 'https://example.com').meta).toContainEqual({
      name: 'robots',
      content: 'index, follow',
    });
    expect(homeHead('en', 'https://example.com').links).toContainEqual({
      rel: 'canonical',
      href: 'https://hellletloosevietnamguide.site/',
    });

    const entry = findWikiEntry('game-overview');
    const category = findWikiCategory('basics');
    if (!entry || !category) throw new Error('overview fixture is missing');
    expect(
      wikiHead(entry, category, 'https://example.com').links
    ).toContainEqual({
      rel: 'canonical',
      href: 'https://hellletloosevietnamguide.site/wiki/basics/game-overview',
    });
  });

  it('keeps public theme tokens aligned with the CSS', () => {
    const styles = readFileSync('src/styles.css', 'utf8');
    expect(styles).toContain(
      `--background: ${websiteConfig.colors.background};`
    );
    expect(styles).toContain(`--orange: ${websiteConfig.colors.theme};`);
  });

  it('joins optional class names without false values', () => {
    expect(cn('base', false, null, 'active', undefined)).toBe('base active');
  });
});

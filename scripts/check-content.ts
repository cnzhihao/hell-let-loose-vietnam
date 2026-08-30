import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { websiteConfig } from '@/config/website';
import { getWikiEntryHref, wikiCategories, wikiEntries } from '@/content/site';

const errors: string[] = [];
const entrySlugs = new Set<string>();
const entryPaths = new Set<string>();

if (websiteConfig.isTemplate && wikiEntries.some((entry) => entry.indexable)) {
  errors.push('template mode cannot contain indexable Wiki entries');
}
if (!websiteConfig.isTemplate && !websiteConfig.url) {
  errors.push('ready mode requires websiteConfig.url');
}
if (websiteConfig.url && !websiteConfig.url.startsWith('https://')) {
  errors.push('websiteConfig.url must use https://');
}

for (const entry of wikiEntries) {
  if (entrySlugs.has(entry.slug)) {
    errors.push(`duplicate entry slug: ${entry.slug}`);
  }
  entrySlugs.add(entry.slug);

  const category = wikiCategories.find(
    (candidate) => candidate.slug === entry.categorySlug
  );
  if (!category) {
    errors.push(
      `${entry.slug} references missing category ${entry.categorySlug}`
    );
  } else if (!category.entrySlugs.includes(entry.slug)) {
    errors.push(`${entry.slug} is missing from category ${category.slug}`);
  }

  const path = getWikiEntryHref(entry);
  if (!path.startsWith('/')) {
    errors.push(`entry path must be root-relative: ${path}`);
  }
  if (entryPaths.has(path)) {
    errors.push(`duplicate entry path: ${path}`);
  }
  entryPaths.add(path);

  if (entry.tags.length === 0) {
    errors.push(`entry has no topic tags: ${entry.slug}`);
  }
  if (new Set(entry.tags).size !== entry.tags.length) {
    errors.push(`entry has duplicate topic tags: ${entry.slug}`);
  }
  if (!entry.steps || entry.steps.length < 4 || entry.steps.length > 6) {
    errors.push(`entry must have 4–6 actionable steps: ${entry.slug}`);
  }
  for (const step of entry.steps ?? []) {
    if (
      !step.title.trim() ||
      !step.action.trim() ||
      !step.successSignal.trim()
    ) {
      errors.push(`entry has an incomplete action step: ${entry.slug}`);
    }
  }

  const visuals = [
    ...entry.sections.flatMap((section) => section.visuals ?? []),
    ...(entry.steps ?? []).flatMap((step) =>
      step.visual ? [step.visual] : []
    ),
  ];
  for (const visual of visuals) {
    if (visual.src.startsWith('/')) {
      const assetPath = resolve('public', visual.src.slice(1));
      if (!existsSync(assetPath)) {
        errors.push(
          `${entry.slug} references missing visual asset: ${visual.src}`
        );
      }
    } else {
      try {
        const url = new URL(visual.src);
        if (!['http:', 'https:'].includes(url.protocol)) {
          errors.push(
            `${entry.slug} has a non-web visual source: ${visual.src}`
          );
        }
      } catch {
        errors.push(
          `${entry.slug} has an invalid visual source: ${visual.src}`
        );
      }
    }
    try {
      const sourceUrl = new URL(visual.sourceHref);
      if (!['http:', 'https:'].includes(sourceUrl.protocol)) {
        errors.push(`${entry.slug} has a non-web visual attribution URL`);
      }
    } catch {
      errors.push(`${entry.slug} has an invalid visual attribution URL`);
    }
    for (const annotation of visual.annotations ?? []) {
      if (
        annotation.x < 0 ||
        annotation.x > 100 ||
        annotation.y < 0 ||
        annotation.y > 100
      ) {
        errors.push(`${entry.slug} has an out-of-bounds visual annotation`);
      }
    }
  }

  for (const relatedSlug of entry.relatedSlugs) {
    if (
      !entrySlugs.has(relatedSlug) &&
      !wikiEntries.some((item) => item.slug === relatedSlug)
    ) {
      errors.push(
        `${entry.slug} references missing related entry ${relatedSlug}`
      );
    }
  }

  for (const source of entry.sources) {
    try {
      const url = new URL(source.href);
      if (!['http:', 'https:'].includes(url.protocol)) {
        errors.push(`${entry.slug} has a non-web source URL: ${source.href}`);
      }
    } catch {
      errors.push(`${entry.slug} has an invalid source URL: ${source.href}`);
    }
  }

  if (entry.indexable && entry.sources.length === 0) {
    errors.push(`indexable entry has no sources: ${entry.slug}`);
  }
  if (
    entry.indexable &&
    !['verified', 'single-official-source'].includes(entry.evidenceState)
  ) {
    errors.push(`indexable entry has non-publishable evidence: ${entry.slug}`);
  }
}

for (const category of wikiCategories) {
  if (new Set(category.entrySlugs).size !== category.entrySlugs.length) {
    errors.push(`duplicate entry in category: ${category.slug}`);
  }
  for (const entrySlug of category.entrySlugs) {
    if (!entrySlugs.has(entrySlug)) {
      errors.push(`${category.slug} references missing entry ${entrySlug}`);
    }
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    'Content validation passed: ' +
      wikiCategories.length +
      ' categories, ' +
      wikiEntries.length +
      ' entries.'
  );
}

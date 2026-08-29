import { readFileSync } from 'node:fs';
import { getWikiEntryHref, wikiEntries } from '@/content/site';

type ResearchKeyword = {
  keyword: string;
  slug: string;
  categorySlug: string;
  path: string;
  pageType: string;
  evidenceState: string;
  indexable: boolean;
};

const errors: string[] = [];
const research = JSON.parse(readFileSync('Docs/keywords.json', 'utf8')) as {
  keywords?: ResearchKeyword[];
};
const keywords = research.keywords ?? [];
const keywordSlugs = new Set<string>();
const keywordPaths = new Set<string>();
const keywordNames = new Set<string>();

for (const record of keywords) {
  if (keywordSlugs.has(record.slug)) {
    errors.push(`duplicate research slug: ${record.slug}`);
  }
  keywordSlugs.add(record.slug);

  if (keywordPaths.has(record.path)) {
    errors.push(`duplicate research path: ${record.path}`);
  }
  keywordPaths.add(record.path);

  if (keywordNames.has(record.keyword)) {
    errors.push(`duplicate research keyword: ${record.keyword}`);
  }
  keywordNames.add(record.keyword);
}

for (const entry of wikiEntries) {
  const record = keywords.find((candidate) => candidate.slug === entry.slug);
  if (!record) {
    errors.push(`missing research record for entry: ${entry.slug}`);
    continue;
  }

  if (record.categorySlug !== entry.categorySlug) {
    errors.push(`category mismatch for ${entry.slug}`);
  }
  if (record.path !== getWikiEntryHref(entry)) {
    errors.push(`path mismatch for ${entry.slug}`);
  }
  if (record.pageType !== entry.pageType) {
    errors.push(`page type mismatch for ${entry.slug}`);
  }
  if (record.evidenceState !== entry.evidenceState) {
    errors.push(`evidence state mismatch for ${entry.slug}`);
  }
  if (record.indexable !== entry.indexable) {
    errors.push(`indexability mismatch for ${entry.slug}`);
  }
}

if (keywords.length !== wikiEntries.length) {
  errors.push(
    `keyword/content count mismatch: ${keywords.length} research records vs ${wikiEntries.length} entries`
  );
}

const material = readFileSync('Docs/keyword-materials.md', 'utf8');
const keywordBriefCount = (material.match(/^### /gm) ?? []).length;
if (keywordBriefCount !== keywords.length) {
  errors.push(
    `keyword/material brief count mismatch: ${keywordBriefCount} briefs vs ${keywords.length} records`
  );
}

const matrix = readFileSync('Docs/page-matrix.md', 'utf8');
for (const record of keywords) {
  if (!matrix.includes(`| \`${record.path}\` |`)) {
    errors.push(`research path missing from page matrix: ${record.path}`);
  }
}

if (errors.length > 0) {
  console.error('Research validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Research validation passed: ${keywords.length} keyword records, ${keywordBriefCount} keyword briefs, ${keywords.length} matrix routes.`
  );
}

import { createFileRoute, notFound } from '@tanstack/react-router';
import { WikiEntryPage } from '@/components/wiki/wiki-pages';
import { findWikiCategory, findWikiEntryByPath } from '@/content/site';
import { getRequestOrigin, wikiHead } from '@/lib/seo';

export const Route = createFileRoute('/guides/$slug')({
  loader: ({ params }) => {
    const entry = findWikiEntryByPath(`/guides/${params.slug}`);
    const category = entry ? findWikiCategory(entry.categorySlug) : undefined;

    if (!entry || entry.pageType !== 'guide' || !category) throw notFound();

    return { category, entry };
  },
  head: ({ loaderData }) =>
    loaderData
      ? wikiHead(loaderData.entry, loaderData.category, getRequestOrigin())
      : {},
  component: GuideEntryRoute,
});

function GuideEntryRoute() {
  const { category, entry } = Route.useLoaderData();
  return <WikiEntryPage category={category} entry={entry} />;
}

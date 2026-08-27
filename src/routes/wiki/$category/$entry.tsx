import { createFileRoute, notFound, redirect } from '@tanstack/react-router';
import { WikiEntryPage } from '@/components/wiki/wiki-pages';
import { findWikiCategory, findWikiEntry } from '@/content/site';
import { getRequestOrigin, wikiHead } from '@/lib/seo';

export const Route = createFileRoute('/wiki/$category/$entry')({
  loader: ({ params }) => {
    const category = findWikiCategory(params.category);
    const entry = findWikiEntry(params.entry);
    if (!category || !entry || entry.categorySlug !== category.slug) {
      throw notFound();
    }
    if (entry.path) {
      throw redirect({ href: entry.path, statusCode: 301 });
    }
    return { category, entry };
  },
  head: ({ loaderData }) =>
    loaderData
      ? wikiHead(loaderData.entry, loaderData.category, getRequestOrigin())
      : {},
  component: EntryRoute,
});

function EntryRoute() {
  const { category, entry } = Route.useLoaderData();
  return <WikiEntryPage category={category} entry={entry} />;
}

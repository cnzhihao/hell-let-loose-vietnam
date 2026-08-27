import { createFileRoute, notFound } from '@tanstack/react-router';
import { WikiCategoryPage } from '@/components/wiki/wiki-pages';
import { findWikiCategory } from '@/content/site';
import { categoryHead, getRequestOrigin } from '@/lib/seo';

export const Route = createFileRoute('/wiki/$category/')({
  loader: ({ params }) => {
    const category = findWikiCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) =>
    loaderData ? categoryHead(loaderData.category, getRequestOrigin()) : {},
  component: CategoryRoute,
});

function CategoryRoute() {
  const { category } = Route.useLoaderData();
  return <WikiCategoryPage category={category} />;
}

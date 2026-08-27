import { createFileRoute } from '@tanstack/react-router';
import { WikiIndexPage } from '@/components/wiki/wiki-pages';
import { getRequestOrigin, wikiIndexHead } from '@/lib/seo';

export const Route = createFileRoute('/wiki/')({
  head: () => wikiIndexHead(getRequestOrigin()),
  component: WikiIndexPage,
});

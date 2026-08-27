import { createFileRoute } from '@tanstack/react-router';
import { GuidesIndexPage } from '@/components/wiki/wiki-pages';
import { getRequestOrigin, guidesHead } from '@/lib/seo';

export const Route = createFileRoute('/guides/')({
  head: () => guidesHead(getRequestOrigin()),
  component: GuidesIndexPage,
});

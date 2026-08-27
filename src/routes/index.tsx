import { createFileRoute } from '@tanstack/react-router';
import { WikiHomePage } from '@/components/wiki/wiki-pages';
import { getRequestOrigin, homeHead } from '@/lib/seo';

export const Route = createFileRoute('/')({
  head: () => homeHead('en', getRequestOrigin()),
  component: WikiHomePage,
});

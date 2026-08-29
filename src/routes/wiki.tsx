import { createFileRoute, Outlet } from '@tanstack/react-router';
import { validateWikiSearch } from '@/lib/wiki-search';

export const Route = createFileRoute('/wiki')({
  validateSearch: validateWikiSearch,
  component: WikiLayout,
});

function WikiLayout() {
  return <Outlet />;
}

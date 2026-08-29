import { createFileRoute, Outlet } from '@tanstack/react-router';
import { validateWikiSearch } from '@/lib/wiki-search';

export const Route = createFileRoute('/guides')({
  validateSearch: validateWikiSearch,
  component: GuidesLayout,
});

function GuidesLayout() {
  return <Outlet />;
}

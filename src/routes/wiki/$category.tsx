import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/wiki/$category')({
  component: CategoryLayout,
});

function CategoryLayout() {
  return <Outlet />;
}

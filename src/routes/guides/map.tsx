import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/guides/map')({
  loader: () => {
    throw redirect({ href: '/wiki/battlefield/launch-maps', statusCode: 301 });
  },
});

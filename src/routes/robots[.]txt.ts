import { createFileRoute } from '@tanstack/react-router';
import { websiteConfig } from '@/config/website';
import { siteOrigin } from '@/lib/seo';

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = siteOrigin(new URL(request.url).origin);
        const body = websiteConfig.isTemplate
          ? ['User-agent: *', 'Disallow: /', ''].join(String.fromCharCode(10))
          : [
              'User-agent: *',
              'Allow: /',
              '',
              `Sitemap: ${origin}/sitemap.xml`,
              '',
            ].join(String.fromCharCode(10));

        return new Response(body, {
          headers: {
            'cache-control': 'public, max-age=3600',
            'content-type': 'text/plain; charset=utf-8',
          },
        });
      },
    },
  },
});

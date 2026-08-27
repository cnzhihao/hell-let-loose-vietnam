import { createFileRoute } from '@tanstack/react-router';
import { websiteConfig } from '@/config/website';
import {
  getWikiCategoryHref,
  getWikiEntryHref,
  wikiCategories,
  wikiEntries,
} from '@/content/site';
import { siteOrigin } from '@/lib/seo';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = siteOrigin(new URL(request.url).origin);
        const paths = websiteConfig.isTemplate
          ? []
          : [
              '/',
              '/guides',
              '/wiki',
              ...wikiCategories
                .filter((category) => category.indexable)
                .map(getWikiCategoryHref),
              ...wikiEntries
                .filter((entry) => entry.indexable)
                .map(getWikiEntryHref),
            ];
        const uniquePaths = [...new Set(paths)];
        const urls = uniquePaths
          .map((path) => `<url><loc>${escapeXml(origin + path)}</loc></url>`)
          .join(String.fromCharCode(10));
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urls,
          '</urlset>',
          '',
        ].join(String.fromCharCode(10));

        return new Response(xml, {
          headers: {
            'cache-control': 'public, max-age=3600',
            'content-type': 'application/xml; charset=utf-8',
          },
        });
      },
    },
  },
});

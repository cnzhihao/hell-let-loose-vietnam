import { createIsomorphicFn } from '@tanstack/react-start';
import { getRequestUrl } from '@tanstack/react-start/server';
import { gameConfig } from '@/config/game';
import { websiteConfig } from '@/config/website';
import { findWikiEntry, getWikiEntryHref, wikiEntries } from '@/content/site';
import type { WikiCategory, WikiEntry } from '@/content/types';
import { type AppLocale, localeMeta, message } from '@/lib/locale';

function withoutTrailingSlash(value: string) {
  return value.replace(/\/$/, '');
}

export const getRequestOrigin = createIsomorphicFn()
  .server(() => getRequestUrl().origin)
  .client(() => window.location.origin);

export function siteOrigin(requestOrigin?: string) {
  return withoutTrailingSlash(
    websiteConfig.url ?? requestOrigin ?? 'http://localhost:3000'
  );
}

export function absoluteSiteUrl(path: string, requestOrigin?: string) {
  return new URL(path, `${siteOrigin(requestOrigin)}/`).toString();
}

function socialMeta({
  description,
  imageUrl,
  pageUrl,
  title,
  type,
}: {
  description: string;
  imageUrl: string;
  pageUrl: string;
  title: string;
  type: 'article' | 'website';
}) {
  const imageAlt = 'Hell Let Loose Vietnam Wiki map and guide cover';

  return [
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: websiteConfig.name },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:image:alt', content: imageAlt },
  ];
}

export function homeHead(locale: AppLocale, requestOrigin?: string) {
  const path = '/';
  const title = message('site_title', locale);
  const description = message('site_description', locale);
  const pageUrl = absoluteSiteUrl(path, requestOrigin);
  const imageUrl = absoluteSiteUrl('/og.png', requestOrigin);
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      {
        name: 'robots',
        content: websiteConfig.isTemplate
          ? 'noindex, nofollow'
          : 'index, follow',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: websiteConfig.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: pageUrl },
      {
        property: 'og:locale',
        content: localeMeta[locale].hreflang.replace('-', '_'),
      },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: message('social_image_alt', locale),
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      {
        name: 'twitter:image:alt',
        content: message('social_image_alt', locale),
      },
    ],
    links: [
      { rel: 'canonical', href: pageUrl },
      {
        rel: 'alternate',
        hrefLang: 'en',
        href: absoluteSiteUrl('/', requestOrigin),
      },
      {
        rel: 'alternate',
        hrefLang: 'x-default',
        href: absoluteSiteUrl('/', requestOrigin),
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: websiteConfig.name,
          url: pageUrl,
          description,
          inLanguage: localeMeta[locale].hreflang,
        }),
      },
    ],
  };
}

function pageRobots(indexable: boolean) {
  if (websiteConfig.isTemplate) return 'noindex, nofollow';
  return indexable ? 'index, follow' : 'noindex, follow';
}

function jsonLdScript(value: unknown) {
  return [
    {
      type: 'application/ld+json',
      children: JSON.stringify(value),
    },
  ];
}

export function wikiHead(
  entry: WikiEntry,
  category: WikiCategory,
  requestOrigin?: string
) {
  const pathname = entry.path ?? `/wiki/${category.slug}/${entry.slug}`;
  const parentName = entry.pageType === 'guide' ? 'Guides' : 'Wiki';
  const parentPath = entry.pageType === 'guide' ? '/guides' : '/wiki';
  const title = entry.metaTitle ?? `${entry.title} — ${gameConfig.name} Wiki`;
  const description = entry.metaDescription ?? entry.summary;
  const pageUrl = absoluteSiteUrl(pathname, requestOrigin);
  const imageUrl = absoluteSiteUrl('/og.png', requestOrigin);

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: pageRobots(entry.indexable) },
      ...socialMeta({
        description,
        imageUrl,
        pageUrl,
        title,
        type: 'article',
      }),
    ],
    links: [{ rel: 'canonical', href: pageUrl }],
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: 'Home', pathname: '/' },
          { name: parentName, pathname: parentPath },
          { name: category.title, pathname: `/wiki/${category.slug}` },
          { name: entry.title, pathname },
        ])
      )[0],
      jsonLdScript(
        articleJsonLd({
          pathname,
          headline: entry.title,
          description,
          dateModified: entry.updated,
          articleSection: category.title,
          requestOrigin,
        })
      )[0],
    ],
  };
}

export function categoryHead(category: WikiCategory, requestOrigin?: string) {
  const pathname = `/wiki/${category.slug}`;
  const title =
    category.metaTitle ?? `${category.title} — ${gameConfig.name} Wiki`;
  const description = category.metaDescription ?? category.description;
  const pageUrl = absoluteSiteUrl(pathname, requestOrigin);
  const imageUrl = absoluteSiteUrl('/og.png', requestOrigin);

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: pageRobots(category.indexable) },
      ...socialMeta({
        description,
        imageUrl,
        pageUrl,
        title,
        type: 'website',
      }),
    ],
    links: [{ rel: 'canonical', href: pageUrl }],
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: 'Home', pathname: '/' },
          { name: 'Wiki', pathname: '/wiki' },
          { name: category.title, pathname },
        ])
      )[0],
      jsonLdScript(
        collectionJsonLd({
          pathname,
          headline: title,
          description,
          items: category.entrySlugs.map((slug) => {
            const entry = findWikiEntry(slug);
            return entry
              ? { name: entry.title, pathname: getWikiEntryHref(entry) }
              : { name: slug, pathname: `/wiki/${category.slug}/${slug}` };
          }),
          requestOrigin,
        })
      )[0],
    ],
  };
}

export function wikiIndexHead(requestOrigin?: string) {
  const pathname = '/wiki';
  const title = 'Hell Let Loose Vietnam Wiki | Guides & Systems';
  const description =
    'Browse the Hell Let Loose Vietnam Wiki for beginner guides, maps, modes, roles, platforms and dated updates.';
  const pageUrl = absoluteSiteUrl(pathname, requestOrigin);
  const imageUrl = absoluteSiteUrl('/og.png', requestOrigin);

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: pageRobots(true) },
      ...socialMeta({
        description,
        imageUrl,
        pageUrl,
        title,
        type: 'website',
      }),
    ],
    links: [{ rel: 'canonical', href: pageUrl }],
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: 'Home', pathname: '/' },
          { name: 'Wiki', pathname },
        ])
      )[0],
    ],
  };
}

export function guidesHead(requestOrigin?: string) {
  const pathname = '/guides';
  const title = 'Hell Let Loose Vietnam Guides | First-Match Help';
  const description =
    'Find Hell Let Loose Vietnam guides for first matches, squads, voice chat, settings and crash troubleshooting.';
  const pageUrl = absoluteSiteUrl(pathname, requestOrigin);
  const imageUrl = absoluteSiteUrl('/og.png', requestOrigin);

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: pageRobots(true) },
      ...socialMeta({
        description,
        imageUrl,
        pageUrl,
        title,
        type: 'website',
      }),
    ],
    links: [{ rel: 'canonical', href: pageUrl }],
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: 'Home', pathname: '/' },
          { name: 'Guides', pathname },
        ])
      )[0],
      jsonLdScript(
        collectionJsonLd({
          pathname,
          headline: title,
          description,
          items: wikiEntries
            .filter((entry) => entry.pageType === 'guide')
            .map((entry) => ({
              name: entry.title,
              pathname: getWikiEntryHref(entry),
            })),
          requestOrigin,
        })
      )[0],
    ],
  };
}

export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; pathname: string }>,
  requestOrigin?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.pathname, requestOrigin),
    })),
  };
}

export function articleJsonLd({
  pathname,
  headline,
  description,
  dateModified,
  articleSection,
  requestOrigin,
}: {
  pathname: string;
  headline: string;
  description: string;
  dateModified: string;
  articleSection: string;
  requestOrigin?: string;
}) {
  const url = absoluteSiteUrl(pathname, requestOrigin);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    dateModified,
    articleSection,
    inLanguage: gameConfig.defaultLocale,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': `${siteOrigin(requestOrigin)}/#website` },
  };
}

export function collectionJsonLd({
  pathname,
  headline,
  description,
  items,
  requestOrigin,
}: {
  pathname: string;
  headline: string;
  description: string;
  items: ReadonlyArray<{ name: string; pathname: string }>;
  requestOrigin?: string;
}) {
  const url = absoluteSiteUrl(pathname, requestOrigin);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: headline,
    description,
    inLanguage: gameConfig.defaultLocale,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteSiteUrl(item.pathname, requestOrigin),
      })),
    },
    isPartOf: { '@id': `${siteOrigin(requestOrigin)}/#website` },
  };
}

export const websiteConfig = {
  name: 'HLL Vietnam Field Manual',
  description:
    'A source-backed, player-first field manual for Hell Let Loose: Vietnam.',
  /** Production origin is intentionally unset until the user authorizes launch setup. */
  url: null as string | null,
  repository: 'https://github.com/cnzhihao/hell-let-loose-vietnam',
  /** Keep true until a real origin is configured and launch is explicitly authorized. */
  isTemplate: true,
  defaultTheme: 'system' as const,
  themeStorageKey: 'hll-vietnam-field-manual-theme',
  colors: {
    background: '#fff8e8',
    theme: '#ffd84a',
  },
  manifest: {
    id: '/',
    startUrl: '/',
    scope: '/',
  },
  navigation: [
    { href: '/wiki', labelKey: 'nav_wiki' },
    { href: '/guides', labelKey: 'nav_guides' },
    { href: '/wiki/access', labelKey: 'nav_access' },
  ],
} as const;

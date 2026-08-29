export const websiteConfig = {
  name: 'Hell Let Loose Vietnam Wiki',
  shortName: 'HLL Vietnam Wiki',
  description:
    'The unofficial Hell Let Loose Vietnam Wiki with first-match guides, maps, roles, PC requirements, crossplay and current updates.',
  /** Production origin is intentionally unset until the user authorizes launch setup. */
  url: null as string | null,
  repository: 'https://github.com/cnzhihao/hell-let-loose-vietnam',
  /** Keep true until a real origin is configured and launch is explicitly authorized. */
  isTemplate: true,
  defaultTheme: 'dark' as const,
  themeStorageKey: 'hll-vietnam-wiki-theme',
  colors: {
    background: '#181819',
    theme: '#cc4d25',
  },
  manifest: {
    id: '/',
    startUrl: '/',
    scope: '/',
  },
  navigation: [
    { href: '/guides', labelKey: 'nav_guides' },
    { href: '/wiki', labelKey: 'nav_wiki' },
    { href: '/wiki/battlefield', labelKey: 'nav_maps' },
    { href: '/wiki/roles', labelKey: 'nav_roles' },
    { href: '/wiki/access', labelKey: 'nav_access' },
    { href: '/wiki/updates', labelKey: 'nav_updates' },
  ],
} as const;

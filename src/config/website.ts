export const websiteConfig = {
  name: 'Game Wiki Starter',
  description:
    'A player-first game Wiki starter built with TanStack Start and Cloudflare Workers.',
  /** Set this to the production origin before a real site is launched. */
  url: null as string | null,
  repository: 'https://github.com/cnzhihao/game-site-agents-template',
  /** Keep true until the placeholder content and site identity are replaced. */
  isTemplate: true,
  defaultTheme: 'system' as const,
  themeStorageKey: 'game-wiki-starter-theme',
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

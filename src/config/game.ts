export const gameConfig = {
  name: 'Hell Let Loose: Vietnam',
  shortName: 'HLL: Vietnam',
  description:
    'A source-backed, player-first Wiki for Hell Let Loose: Vietnam, covering launch systems, modes, platforms and version-sensitive updates.',
  status: 'Live — facts checked 2026-08-30',
  defaultLocale: 'en' as const,
  heroStats: [
    { value: '50v50', label: 'battle scale' },
    { value: '06', label: 'launch maps' },
    { value: '19*', label: 'roles reported' },
  ] as const,
  officialLinks: [
    {
      label: 'Official game page',
      href: 'https://www.hellletloose.com/game/hll-vietnam',
    },
    {
      label: 'Official news',
      href: 'https://www.hellletloose.com/blog',
    },
    {
      label: 'Steam store',
      href: 'https://store.steampowered.com/app/3079210/Hell_Let_Loose_Vietnam/',
    },
    {
      label: 'PC requirements',
      href: 'https://www.hellletloose.com/pc-requirements',
    },
  ] as const,
} as const;

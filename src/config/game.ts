export const gameConfig = {
  /** Replace the demo identity before publishing a real game site. */
  name: 'Example Game',
  shortName: 'Example Game',
  description:
    'A placeholder game identity for the reusable Wiki starter. Replace this configuration with verified game information.',
  status: 'Template content — replace before launch',
  defaultLocale: 'en' as const,
  /** Add verified destinations for the selected game before publishing. */
  officialLinks: [] as readonly { label: string; href: string }[],
} as const;

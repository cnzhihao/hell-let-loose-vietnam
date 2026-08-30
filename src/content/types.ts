export type EvidenceState =
  | 'verified'
  | 'single-official-source'
  | 'community-lead'
  | 'pending';

export type TopicTag =
  | 'beginner'
  | 'gameplay'
  | 'maps'
  | 'roles'
  | 'weapons'
  | 'vehicles'
  | 'systems'
  | 'platforms'
  | 'technical'
  | 'buying'
  | 'updates'
  | 'community';

export type WikiSource = {
  label: string;
  href: string;
  type: 'official' | 'community' | 'reference';
  note?: string;
};

export type WikiFact = {
  label: string;
  value: string;
};

export type WikiVisualAnnotation = {
  label: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
};

export type WikiVisual = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceHref: string;
  sourceLabel: string;
  evidenceRole: 'official-demonstration' | 'community-example';
  timestamp?: string;
  build?: string;
  annotations?: readonly WikiVisualAnnotation[];
};

export type WikiStep = {
  title: string;
  action: string;
  successSignal: string;
  failureCheck?: string;
  visual?: WikiVisual;
};

export type WikiTable = {
  caption?: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

export type WikiSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  tables?: readonly WikiTable[];
  visuals?: readonly WikiVisual[];
};

export type WikiEntry = {
  slug: string;
  categorySlug: string;
  /** Use this for a guide or special page that has a non-Wiki canonical path. */
  path?: string;
  title: string;
  pageType: 'entry' | 'guide' | 'access' | 'update';
  summary: string;
  lead: string;
  metaTitle?: string;
  metaDescription?: string;
  status: string;
  evidenceState: EvidenceState;
  updated: string;
  keywords: readonly string[];
  tags: readonly TopicTag[];
  indexable: boolean;
  facts: readonly WikiFact[];
  steps?: readonly WikiStep[];
  sections: readonly WikiSection[];
  sources: readonly WikiSource[];
  relatedSlugs: readonly string[];
};

export type WikiCategory = {
  slug: string;
  title: string;
  description: string;
  indexable: boolean;
  entrySlugs: readonly string[];
};

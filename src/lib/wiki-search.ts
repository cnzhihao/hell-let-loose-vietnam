export type WikiSearchParams = {
  pageType?: string;
  q?: string;
  topic?: string;
};

export function validateWikiSearch(
  search: Record<string, unknown>
): WikiSearchParams {
  return {
    pageType: typeof search.pageType === 'string' ? search.pageType : undefined,
    q: typeof search.q === 'string' ? search.q : undefined,
    topic: typeof search.topic === 'string' ? search.topic : undefined,
  };
}

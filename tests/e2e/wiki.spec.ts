import { expect, type Page, test } from '@playwright/test';

type ThemeSnapshot = Record<
  string,
  {
    backgroundColor: string;
    borderBottomColor: string;
    borderTopColor: string;
    color: string;
  }
>;

async function readThemeSnapshot(
  page: Page,
  selectors: string[]
): Promise<ThemeSnapshot> {
  return page.evaluate((surfaceSelectors) => {
    return Object.fromEntries(
      surfaceSelectors.map((selector) => {
        const element = document.querySelector(selector);
        if (!element) throw new Error(`Missing theme surface: ${selector}`);
        const style = getComputedStyle(element);
        return [
          selector,
          {
            backgroundColor: style.backgroundColor,
            borderBottomColor: style.borderBottomColor,
            borderTopColor: style.borderTopColor,
            color: style.color,
          },
        ];
      })
    );
  }, selectors);
}

async function selectTheme(page: Page, theme: 'dark' | 'light') {
  await page.locator('[data-slot="theme-switcher-trigger"]').click();
  await page.locator(`[data-theme-option="${theme}"]`).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
  await page.waitForFunction(() =>
    document
      .getAnimations()
      .every((animation) => animation.playState === 'finished')
  );
  await page.waitForTimeout(32);
}

test.describe('Hell Let Loose Vietnam Wiki', () => {
  test('renders the player-first home in template mode', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('header nav')).toBeVisible();
    const brandLink = page.locator('header nav > a').first();
    await expect(brandLink.locator('img')).toHaveCount(1);
    await expect(brandLink.getByText('Wiki', { exact: true })).toHaveCount(0);
    await expect(page.locator('main h1')).toHaveText(
      'Hell Let Loose Vietnam Guide'
    );
    await expect(page).toHaveTitle(
      'Hell Let Loose Vietnam Guide | Beginner Guides, Maps & Updates'
    );
    await expect(
      page.getByRole('link', { name: 'Start first match' })
    ).toHaveAttribute('href', '/guides/beginner');
    await expect(
      page.getByRole('link', { name: /Release date & platforms/ })
    ).toHaveAttribute('href', '/wiki/access/release-and-platforms');
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      'href',
      '/assets/hllv-wiki-favicon.png'
    );
    await expect(page.locator('a[href="/wiki"]')).toHaveCount(2);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow'
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new URL('/', page.url()).toString()
    );
    await expect(page.locator('link[hreflang="zh-CN"]')).toHaveCount(0);
    await expect(page.locator('footer')).toBeVisible();

    await page.locator('#wiki-search').click();
    await expect(
      page.getByText('Popular questions', { exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Beginner guide', exact: true })
    ).toBeVisible();
    await page.locator('#wiki-search').press('Escape');
    await expect(
      page.getByText('Popular questions', { exact: true })
    ).toBeHidden();
  });

  test('serves the redesigned favicon asset', async ({ request }) => {
    const response = await request.get('/assets/hllv-wiki-favicon.png');
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('image/png');
    expect((await response.body()).byteLength).toBeGreaterThan(1000);
  });

  test('browses Wiki categories and a source-aware entry', async ({ page }) => {
    await page.goto('/wiki');
    await expect(page.locator('main h1')).toHaveText('Wiki');
    await expect(page.locator('h2#categories-heading')).toBeVisible();
    await expect(page.locator('a[href="/wiki/basics"]')).toBeVisible();
    await page.locator('a[href="/wiki/basics"]').first().click();
    await expect(page).toHaveURL(/\/wiki\/basics$/);
    await expect(page.locator('main h1')).toHaveText('Basics');
    await page.locator('a[href="/wiki/basics/game-overview"]').click();
    await expect(page).toHaveURL(/\/wiki\/basics\/game-overview$/);
    await expect(page.locator('main h1')).toHaveText(
      'Hell Let Loose: Vietnam Overview'
    );
    await expect(page.getByText('Short answer', { exact: true })).toBeVisible();
    await expect(
      page.getByRole('heading', {
        name: 'What the official game page confirms',
      })
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow'
    );
  });

  test('uses a custom Guide path and keeps unknown data paths out', async ({
    page,
  }) => {
    await page.goto('/guides');
    await expect(page.locator('main h1')).toHaveText('Guides');
    await page.locator('main a[href="/guides/beginner"]').click();
    await expect(page).toHaveURL(/\/guides\/beginner$/);
    await expect(page.locator('main h1')).toHaveText(
      'First Match Beginner Guide'
    );

    const response = await page.goto('/wiki/basics/not-a-real-entry');
    expect(response?.status()).toBe(404);
  });

  test('renders the expanded guide, map, role and buying routes', async ({
    page,
  }) => {
    const paths = [
      '/guides/join-a-squad',
      '/guides/voice-chat',
      '/guides/helicopter-controls',
      '/guides/best-settings',
      '/guides/crashing-fixes',
      '/wiki/battlefield/thanh-hoa-bridge',
      '/wiki/battlefield/hue-outskirts',
      '/wiki/battlefield/van-tuong',
      '/wiki/battlefield/quang-ngai',
      '/wiki/battlefield/dak-to-airfield',
      '/wiki/battlefield/cam-ranh-port',
      '/wiki/roles/weapons',
      '/wiki/roles/vehicles',
      '/wiki/access/editions-and-buying',
    ];

    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator('main h1'), path).toBeVisible();
      await expect(page.locator('main h1'), path).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]'), path).toHaveAttribute(
        'content',
        'noindex, nofollow'
      );
    }
  });

  test('search Enter and directory filters preserve player intent', async ({
    page,
  }) => {
    await page.goto('/');
    await page.locator('#wiki-search').fill('helicopter controls');
    await page.locator('#wiki-search').press('Enter');
    await expect(page).toHaveURL(/\/wiki\?q=helicopter(?:%20|\+)controls$/);
    await expect(
      page.getByText('3 matching pages', { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText('Helicopter Controls: Safe First Flight')
    ).toBeVisible();

    await page.goto('/guides');
    await page.getByLabel('Filter by topic').selectOption('technical');
    await expect(page).toHaveURL(/\/guides\?topic=technical$/);
    await expect(
      page.getByText('Best Settings: A Repeatable Starting Point')
    ).toBeVisible();
    await expect(
      page.getByText('Crashing and Connection Checks')
    ).toBeVisible();
    await page.getByRole('button', { name: 'Clear filters' }).click();
    await expect(page).toHaveURL(/\/guides$/);
    await expect(
      page.getByText('6 matching guides', { exact: true })
    ).toBeVisible();
  });

  test('keeps the legacy map route as a permanent redirect', async ({
    page,
  }) => {
    const response = await page.goto('/guides/map');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveURL(/\/wiki\/battlefield\/launch-maps$/);
  });

  test('loads every homepage evidence image with a source link', async ({
    page,
  }) => {
    await page.goto('/');
    const images = page.locator('.field-visual img');
    await expect(images).toHaveCount(4);
    for (let index = 0; index < 4; index += 1) {
      await images.nth(index).scrollIntoViewIfNeeded();
    }
    await expect
      .poll(() =>
        images.evaluateAll((items) =>
          items.every((item) => (item as HTMLImageElement).naturalWidth > 0)
        )
      )
      .toBe(true);
    await expect(page.locator('.field-visual-meta a')).toHaveCount(4);
  });

  test('returns 404 for an unknown Wiki page', async ({ page }) => {
    const response = await page.goto('/wiki/missing/no-such-page');
    expect(response?.status()).toBe(404);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow'
    );
  });

  test('keeps template machine endpoints closed', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBe(true);
    expect(await robots.text()).toContain('Disallow: /');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBe(true);
    const sitemapXml = await sitemap.text();
    expect(sitemapXml).toContain('<urlset');
    expect(sitemapXml).not.toContain('<loc>');

    const manifest = await request.get('/manifest.webmanifest');
    expect(manifest.ok()).toBe(true);
    expect(manifest.headers()['content-type']).toContain(
      'application/manifest+json'
    );
    const manifestJson = await manifest.json();
    expect(manifestJson.name).toBe('Hell Let Loose Vietnam Wiki');
    expect(manifestJson.short_name).toBe('HLL Vietnam Wiki');
    expect(manifestJson.start_url).toBe('/');
  });

  test('switches and persists theme', async ({ page }) => {
    await page.goto('/');
    const surfaces = [
      '.field-hero',
      '.field-brief',
      '.field-band',
      'footer',
      '.field-card',
      '.field-search',
    ];
    const darkSnapshot = await readThemeSnapshot(page, surfaces);
    await expect(page.locator('#wiki-search')).toHaveCSS(
      'color-scheme',
      'dark'
    );

    await selectTheme(page, 'light');
    const lightSnapshot = await readThemeSnapshot(page, surfaces);
    await expect(page.locator('#wiki-search')).toHaveCSS(
      'color-scheme',
      'light'
    );
    for (const selector of surfaces) {
      expect(
        lightSnapshot[selector].backgroundColor,
        `${selector} background`
      ).not.toBe(darkSnapshot[selector].backgroundColor);
    }

    await selectTheme(page, 'dark');
    const restoredSnapshot = await readThemeSnapshot(page, surfaces);
    expect(restoredSnapshot).toEqual(darkSnapshot);
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('switches entry panels and media framing with the theme', async ({
    page,
  }) => {
    await page.goto('/wiki/roles/vehicles');
    const surfaces = [
      '.field-step',
      '.field-visual-frame',
      '.field-notice',
      '.field-on-this-page',
    ];
    const darkSnapshot = await readThemeSnapshot(page, surfaces);
    await selectTheme(page, 'light');
    const lightSnapshot = await readThemeSnapshot(page, surfaces);

    for (const selector of surfaces) {
      expect(
        lightSnapshot[selector].backgroundColor,
        `${selector} background`
      ).not.toBe(darkSnapshot[selector].backgroundColor);
    }
  });

  test('keeps the Wiki usable at a narrow mobile width', async ({ page }) => {
    test.skip(test.info().project.name !== 'mobile', 'mobile project only');
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto('/wiki');
    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth
        )
      )
      .toBe(true);

    for (const theme of ['light', 'dark'] as const) {
      await page.evaluate((nextTheme) => {
        const dark = nextTheme === 'dark';
        document.documentElement.classList.toggle('dark', dark);
        document.documentElement.dataset.theme = nextTheme;
        document.documentElement.style.colorScheme = nextTheme;
      }, theme);
      await page.waitForTimeout(400);
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth
          )
        )
        .toBe(true);
    }

    const menuButton = page.locator(
      'button[aria-controls="mobile-navigation"]'
    );
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.locator('#mobile-navigation')).toBeVisible();
  });
});

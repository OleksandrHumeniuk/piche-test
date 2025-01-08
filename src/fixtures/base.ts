import { expect as baseExpect, test as baseTest } from '@playwright/test';

import { initPages } from '@/pages';
import { initAPI } from '@/api';

type BaseFixture = {
  pages: ReturnType<typeof initPages>;
  api: ReturnType<typeof initAPI>;
};

/**
 * Extends the base test fixture with custom properties.
 * It also initializes the pages and api for each test.
 *
 */
const test = baseTest.extend<BaseFixture>({
  pages: async ({ page }, use) => {
    return await use(initPages(page));
  },
  api: async ({ request }, use) => {
    return await use(initAPI(request));
  },
});

export { test, baseExpect as expect };

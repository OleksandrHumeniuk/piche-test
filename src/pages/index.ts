import ExamplePage from '@/pages/example/ExamplePage';

import type { Page } from '@playwright/test';

/**
 * Initialize all page objects
 *
 * @param page - Playwright page object
 * @returns Object containing all page objects
 */
export const initPages = (page: Page) => {
  return {
    example: new ExamplePage(page),
  };
};

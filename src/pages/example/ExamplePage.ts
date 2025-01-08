import { Locator, Page } from '@playwright/test';

class ExamplePage {
  title: Locator;

  constructor(protected page: Page) {
    this.title = page.locator('h1');
  }

  /**
   * Visit the example page
   */
  visit = async () => {
    await this.page.goto(' example.com');
  };
}

export default ExamplePage;

import { test, expect } from '@/fixtures/base';

test('should display correct title on example page', async ({ pages }) => {
  await pages.example.visit();

  await expect(pages.example.title).toHaveText('Example Domain');
});

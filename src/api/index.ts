import PostAPI from './post/PostAPI';

import type { APIRequestContext } from '@playwright/test';

/**
 * Initialize all API classes
 *
 * @param request - Playwright request context
 * @returns Object containing all API classes
 */
export const initAPI = (request: APIRequestContext) => {
  return {
    post: new PostAPI(request),
  };
};

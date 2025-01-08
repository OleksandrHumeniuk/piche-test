import type { APIResponse } from '@playwright/test';

export type ParsedResponse<T> = {
  data: T;
  statusCode: number;
};

const parseResponse = async <T>(response: APIResponse): Promise<ParsedResponse<T>> => {
  const jsonResponse = (await response.json()) as T;

  return {
    data: jsonResponse,
    statusCode: response.status(),
  };
};

export default parseResponse;

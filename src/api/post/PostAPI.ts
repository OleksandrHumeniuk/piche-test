import parseResponse from '@/utils/parseResponse';

import type { APIRequestContext } from '@playwright/test';
import type { Post } from '@/types/post';

class PostAPI {
  constructor(private request: APIRequestContext) {}

  public getPost = async (id: number) => {
    const response = await this.request.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return await parseResponse<Post>(response);
  };

  public createPost = async (post: Omit<Post, 'id'>) => {
    const response = await this.request.post('https://jsonplaceholder.typicode.com/posts', {
      data: post,
    });

    return await parseResponse<Post>(response);
  };
}

export default PostAPI;

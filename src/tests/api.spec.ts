import { test, expect } from '@/fixtures/base';

test('should successfully fetch a post by ID', async ({ api }) => {
  const response = await api.post.getPost(1);

  expect(response.statusCode).toEqual(200);
  expect(response.data).toHaveProperty('title');
});

test('should successfully create a new post', async ({ api }) => {
  const response = await api.post.createPost({
    title: 'foo',
    body: 'bar',
    userId: 1,
  });

  expect(response.statusCode).toEqual(201);
});

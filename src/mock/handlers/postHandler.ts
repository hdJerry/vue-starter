import { http, HttpResponse } from 'msw';

const posts = [
  {
    title: 'title a',
    body: 'body a',
  },
];

const postHandler = http.get('https://jsonplaceholder.typicode.com/posts', () => {
  return HttpResponse.json(posts);
});

export default postHandler;

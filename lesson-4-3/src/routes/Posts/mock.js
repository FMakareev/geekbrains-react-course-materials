import chance from 'chance';

export const createComment = () => ({
  id: chance().fbid(),
  createAt: chance().date({string: true, american: false}),
  author: chance().name(),
  authorEmail: chance().email(),
  comment: chance().paragraph(),
})

export const createPost = () => ({
  id: chance().fbid(),
  createAt: chance().date({string: true, american: false}),
  author: chance().name(),
  title: chance().sentence(),
  content: chance().paragraph({ sentences: 20 }),
  // comments: Array.from({
  //   length: 5,
  // }).map(createComment)
})

export const createPosts = (count) => Array.from({
  length: count,
}).map(createPost)


export const MOCK_POSTS = createPosts(20);


export const getPostByIdLink = (postId = ':postId') => `/posts/${postId}`;
export const getPostCommentsLink = (postId) => [
  getPostByIdLink(postId),
  '/comments'
].join('')



const composePath = (...args) => args.map((item) => (typeof item === 'function' ? item() : item.toString())).join('/');

export const getHomePath = () => '';

export const getPostsPath = () => composePath(getHomePath(), 'articles');

export const getPostsByIdPath = (postId = ':postId') => composePath(getPostsPath(), postId);

export const getPostCommentsByIdPath = (postId = ':postId') => composePath(getPostsPath(), postId, 'comments');

export const getPostComments404Path = (postId = ':postId') => composePath(getPostsPath(), postId, '404');


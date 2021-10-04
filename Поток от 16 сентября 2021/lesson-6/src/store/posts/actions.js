
export const POSTS_ADD_ITEM = 'POSTS_ADD_ITEM';

export const POSTS_ADD_LIST = 'POSTS_ADD_LIST';

export const POSTS_REMOVE = 'POSTS_REMOVE';

export const POSTS_CHANGE = 'POSTS_CHANGE';


export const postsAddItem = (post) => ({
  type: POSTS_ADD_ITEM,
  payload: post,
})

export const postsAddList = (posts) => ({
  type: POSTS_ADD_LIST,
  payload: posts,
})

export const postsRemove = (postId) => ({
  type: POSTS_REMOVE,
  payload: postId,
})

export const postsChange = (post) => ({
  type: POSTS_CHANGE,
  payload: post,
})

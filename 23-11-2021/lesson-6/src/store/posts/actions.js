export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const CHANGE_POST = 'CHANGE_POST'

/**
 * @param {Object} post
 * @param {string} post.id
 * @param {string} post.title
 * @param {string} post.content
 * */
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post
})

/**
 * @param {string} postId
 * */
export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId
})

/**
 * @param {Object} post
 * @param {string} post.id
 * @param {string} post.title
 * @param {string} post.content
 * */
export const changePost = (post) => ({
  type: CHANGE_POST,
  payload: post
})

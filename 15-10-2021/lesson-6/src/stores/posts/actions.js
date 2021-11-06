export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const CHANGE_POST = 'CHANGE_POST'


export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
})

export const changePost = (post) => ({
  type: CHANGE_POST,
  payload: post,
})

export const deletePost = (postID) => ({
  type: DELETE_POST,
  payload: postID,
})

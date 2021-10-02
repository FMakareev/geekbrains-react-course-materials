import {postsApi} from "../../api";


export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const CHANGE_POST = 'CHANGE_POST';

export const createAddPosts = (posts) => ({
  type: ADD_POSTS,
  payload: posts,
})

export const createAddPost = (post) => ({
  type: ADD_POST,
  payload: post,
})

export const createUpdatePost = (post) => ({
  type: CHANGE_POST,
  payload: post,
})

export const initPostsTracking = (dispatch) => {
  postsApi.getList((posts) => {
    debugger
    dispatch(createAddPosts(posts));
  })
  // postsApi.getAdded((post) => {
  //   dispatch(createAddPost(post));
  // })
  // postsApi.getChanged((post) => {
  //   dispatch(createUpdatePost(post));
  // })
}
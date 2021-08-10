import {postsRef} from "../../api";

export const ADD_POST = 'ADD_POST';

export const createAddPost = (post) => ({
  type: ADD_POST,
  payload: post
})


export const getPayload = (snapshot) => {
  const posts = []
  snapshot.forEach((value) => {
    posts.push({id: value.key, ...value.val()});
  })
  return posts;
}

export const initPostsTracking = () => (dispatch) => {
  postsRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot, snapshot.exists(), snapshot.val());
    dispatch(createAddPost({id: snapshot.key, ...snapshot.val()}));
  })
}
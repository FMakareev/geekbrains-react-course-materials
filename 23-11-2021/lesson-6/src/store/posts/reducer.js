import {CREATE_POST, CHANGE_POST, DELETE_POST} from './actions';

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST: {
      const targetIndex = state
        .posts
        .findIndex((post) => post.id === action.payload.id);

      if (targetIndex === -1) {
        return state;
      }

      const newPosts = [...state.posts];
      newPosts[targetIndex] = {
        ...newPosts[targetIndex],
        ...action.payload,
      }

      return {
        ...state,
        posts: newPosts
      }
    }
    case CREATE_POST: {

      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload,
        ]
      }
    }
    case DELETE_POST: {
      const newPosts = state.posts.filter((post) => post.id !== action.payload);

      return {
        ...state,
        posts: newPosts
      }
    }
    default: {
      return state;
    }
  }

}

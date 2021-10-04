import {POSTS_ADD_ITEM, POSTS_ADD_LIST, POSTS_CHANGE, POSTS_REMOVE} from "./actions";


const initialState = {
  posts: [],
  tags: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action?.type) {
    case POSTS_ADD_ITEM: {
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload,
        ]
      }
    }
    case POSTS_ADD_LIST: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case POSTS_CHANGE: {
      const newPosts = [...state.posts];
      const foundIndex = newPosts.findIndex((item) => item.id === action.payload.id);

      if (foundIndex !== -1) {
        newPosts[foundIndex] = action.payload;
      }

      return {
        ...state,
        posts: newPosts,
      }
    }
    case POSTS_REMOVE: {
      const newPosts = state.posts.filter((item) => item.id !== action.payload);

      return {
        ...state,
        posts: newPosts,
      }
    }
    default: {
      return state;
    }
  }

}

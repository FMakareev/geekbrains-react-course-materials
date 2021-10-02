import {ADD_POST, CHANGE_POST, ADD_POSTS} from "./action";


const initialState = {
  posts: []
}

export const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_POST:{
      const posts = [...state.posts];

      const index = posts.findIndex(({id}) => id === action.payload.id);

      if (index !== -1) {
        posts[index] = action.payload;
      }

      return {
        posts: posts,
      }
    }
    case ADD_POST:{
      return {
        posts: [
          ...state.posts,
          action.payload
        ],
      }
    }
    case ADD_POSTS:{
      return {
        posts: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}
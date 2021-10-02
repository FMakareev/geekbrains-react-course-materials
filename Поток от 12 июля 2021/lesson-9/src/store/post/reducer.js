import {ADD_POST} from "./action";


const initialState = {
  posts: []
}

export const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:{
      return {
        posts: [
          ...state.posts,
          action.payload
        ],
      }
    }
    default: {
      return state;
    }
  }
}
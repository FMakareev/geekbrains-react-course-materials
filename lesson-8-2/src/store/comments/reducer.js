import {CHANGE_COMMENTS_LOADING, CHANGE_COMMENTS_ERROR, CHANGE_COMMENTS_DATA} from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  data: null
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMMENTS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case CHANGE_COMMENTS_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case CHANGE_COMMENTS_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}
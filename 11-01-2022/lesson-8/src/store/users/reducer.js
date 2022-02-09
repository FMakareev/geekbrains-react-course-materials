import { SET_ERROR, SET_DATA, SET_LOADING } from "./action";

const initialState = {
  isError: false,
  isLoading: false,
  data: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case SET_ERROR: {
      return { ...state, isError: action.payload };
    }

    case SET_DATA: {
      return { ...state, data: action.payload };
    }

    default: {
      return state;
    }
  }
};

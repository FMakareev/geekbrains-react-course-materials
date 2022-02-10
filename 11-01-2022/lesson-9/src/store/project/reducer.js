import {ADD_PROJECT_SUCCESS, ADD_PROJECT_LOADING, REMOVE_PROJECT, RESET_PROJECT} from "./actions";


const initialState = {
  projects: [],
  isLoading: false,
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case ADD_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: [
          ...state.projects,
          action.payload,
        ]
      }
    }
    case REMOVE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter((item) => item.id !== action.payload),
      }
    }
    case RESET_PROJECT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

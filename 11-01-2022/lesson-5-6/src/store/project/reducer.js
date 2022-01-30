import {ADD_PROJECT, REMOVE_PROJECT} from "./actions";


const initialState = {
  projects: [],
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT: {
      return {
        projects: [
          ...state.projects,
          action.payload,
        ]
      }
    }
    case REMOVE_PROJECT: {
      return {
        projects: state.projects.filter((item) => item.id !== action.payload),
      }
    }
    default: {
      return state;
    }
  }
}

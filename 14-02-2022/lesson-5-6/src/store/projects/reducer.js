import {CREATE_PROJECT, SET_ERROR_PROJECT, SET_LOADING_PROJECT, SET_PROJECTS} from "./actions";


const initialState = {
  list: [],
  isLoading: false,
  error: null,
}

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case(CREATE_PROJECT): {
      return {
        ...state,
        list: [
          ...state.list,
          action.payload,
        ]
      }
    }
    case SET_LOADING_PROJECT: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case SET_ERROR_PROJECT: {
      return {
        ...state,
        error: action.payload
      }
    }
    case SET_PROJECTS: {
      return {
        ...state,
        list: action.payload
      }
    }
    default: {
      return state;
    }
  }

}

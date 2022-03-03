import {CREATE_PROJECT} from "./actions";


const initialState = {
  list: [],
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
    default: {
      return state;
    }
  }

}

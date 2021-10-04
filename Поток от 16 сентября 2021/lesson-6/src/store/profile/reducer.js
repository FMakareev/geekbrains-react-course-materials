import {PROFILE_TOGGLE_ACTIVE} from "./actions";


const initialState = {
  active: false,
}

export const profileReducer = (state = initialState, action) => {
  switch (action?.type) {
    case PROFILE_TOGGLE_ACTIVE: {
      return {
        active: !state.active,
      }
    }
    default: {
      return state;
    }
  }
}

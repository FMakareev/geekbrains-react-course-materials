import {COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_SET_COUNT} from "./actionTypes";


const initialState = {
  count: 0,
}

export const counterReducer = (state = initialState, action) => {
  switch (action?.type) {
    case COUNTER_INCREMENT: {
      return {
        count: state.count + 1
      }
    }
    case COUNTER_DECREMENT: {
      return {
        count: state.count - 1
      }
    }
    case COUNTER_SET_COUNT: {
      return {
        count: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

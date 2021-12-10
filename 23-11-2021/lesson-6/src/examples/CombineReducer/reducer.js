

export const INC_TYPE = 'INC_TYPE';
export const DEC_TYPE = 'DEC_TYPE';

export const counterReducer = (state = {
  counter: 0,
}, action) => {
  switch (action?.type){
    case INC_TYPE: {
      return {
        counter: state.counter + 1
      }
    }
    case DEC_TYPE: {
      return {
        counter: state.counter - 1
      }
    }
    default: {
      return state;
    }
  }
}

export const TOGGLE_PROFILE_TYPE = 'TOGGLE_PROFILE_TYPE'

export const profileReducer = (state = {isActive: false}, action) => {
  switch (action?.type){
    case TOGGLE_PROFILE_TYPE: {
      return {
        isActive: !state.isActive
      }
    }
    default: {
      return state;
    }
  }
}

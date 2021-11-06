
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const TOGGLE_SHOW_PROFILE = "TOGGLE_SHOW_PROFILE";

export const counterReducers = (state = {count: 0}, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + 1
      };
    }
    case DECREMENT: {
      return {
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
};



export const profileReducer = (state = {
  isShow: false,
}, action) => {

  switch(action.type) {
    case TOGGLE_SHOW_PROFILE: {

      return {
        isShow: !state.isShow,
      }
    }
    default: {
      return state;
    }
  }

}

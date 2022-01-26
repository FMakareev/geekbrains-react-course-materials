import {ADD_TODO, CHANGE_TODO_STATUS, REMOVE_TODO} from "./actions";


const initialState = {
  list: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_TODO: {
      return {
        ...state,
        list: [
          action.payload,
          ...state.list,
        ]
      }
    }
    case REMOVE_TODO: {
      return {
        ...state,
        list: state.list.filter((item) =>item.id !== action.payload),
      }
    }
    case CHANGE_TODO_STATUS: {
      const copyList = [...state.list];
      const targetTodoIndex = copyList.findIndex(({id}) => action.payload.id === id);
      if(targetTodoIndex === -1) {
        return state;
      }

      copyList[targetTodoIndex] = {
        ...copyList[targetTodoIndex],
        status: action.payload.status,
      }

      return {
        ...state,
        list: copyList,
      }
    }
    default: {
      return state;
    }
  }
}

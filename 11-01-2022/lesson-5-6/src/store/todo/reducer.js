import {ADD_TODO, CHANGE_TODO_STATUS, REMOVE_TODO, SET_FILTER_BY_STATUS} from "./actions";


const initialState = {
  tasks: {

  },
  filter: {
    status: undefined,
    search: '',
    sortBy: undefined,
  }
}

export const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_FILTER_BY_STATUS: {
      return {
        ...state,
        filter: {
          ...state.filter,
          status: action.payload,
        }
      }
    }
    case ADD_TODO: {
      const copyTasks = {...state.tasks};

      copyTasks[action.payload.projectID] = [
        action.payload.task,
        ...(copyTasks[action.payload.projectID] || []),
      ]

      return {
        ...state,
        tasks: copyTasks
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

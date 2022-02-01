import {ADD_TODO, CHANGE_TODO_STATUS, REMOVE_TODO, SET_FILTER_BY_STATUS} from "./actions";
import {TASK_STATUS_FILTER} from "../../constants";


const initialState = {
  tasks: {

  },
  filter: {
    status: TASK_STATUS_FILTER.all,
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

      const targetTaskIndex = state.tasks[action.payload.projectID].findIndex(({id}) => id === action.payload.id);
      if(targetTaskIndex === -1){
        return state;
      }

      const copyTasks = {...state.tasks};
      const targetTask = {
        ...copyTasks[action.payload.projectID][targetTaskIndex],
        status: action.payload.status,
      }
      copyTasks[action.payload.projectID] = [...copyTasks[action.payload.projectID]];
      copyTasks[action.payload.projectID][targetTaskIndex] = targetTask

      return {
        ...state,
        tasks: {...copyTasks}
      }
    }
    default: {
      return state;
    }
  }
}

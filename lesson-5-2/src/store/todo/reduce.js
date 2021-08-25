import {CHANGE_TODO, CREATE_TODO, REMOVE_TODO} from "./actions";

/**
 *
 * */
const initialState = {
  todoList: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_TODO: {
      return  {
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
    }

    case CHANGE_TODO: {
      const todoList = [...state.todoList]
      const currentTodoIndex = todoList.findIndex((todo) => todo.id === action.payload.id);

      todoList[currentTodoIndex] = {
        ...todoList[currentTodoIndex],
        status: action.payload.status
      }

      return {
        todoList
      };
    }
    case REMOVE_TODO: {

      const todoList = [...state.todoList]
        .filter((todo) => todo.id !== action.payload)

      return {
        todoList
      };
    }

    default: {
      return state;
    }
  }
}
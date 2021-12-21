import {ADD_TODO, ADD_TODOS, CHANGE_TODO, DELETE_TODO} from "./actions";


const initialState = {
  todos: [],
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ]
      }
    }
    case ADD_TODOS: {
      return {
        ...state,
        todos: action.payload
      }
    }
    case CHANGE_TODO: {
      const prevTodos = state.todos;

      const targetIndex = prevTodos.findIndex((item) => item.id === action.payload.todoId)
      if (targetIndex === -1) {
        return state;
      }

      const copyTodos = [...state.todos]
      copyTodos[targetIndex] = {
        ...copyTodos[targetIndex],
        ...action.payload.todo,
      }

      return {
        ...state,
        todos: copyTodos,
      }

    }
    case DELETE_TODO: {
      const prevTodos = state.todos;

      const targetIndex = prevTodos.findIndex((item) => item.id === action.payload)
      if (targetIndex === -1) {
        return state;
      }

      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      }
    }
    default: {
      return state;
    }
  }
}

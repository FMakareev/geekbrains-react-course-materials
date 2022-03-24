import {CREATE_TODO, CHANGE_TODO_STATUS, DELETE_TODO, SET_LOADING_TODO, SET_ERROR_TODO} from './actions';

const initialState = {
  todos: {},
  isLoading: false,
  error: undefined,
}

export const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case(CREATE_TODO): {
      const {projectId, todo} = action.payload;
      return {
        ...state,
        todos: {
          ...state.todos,
          [projectId]: [
            ...(state.todos[projectId] || []),
            todo
          ]
        }
      }
    }
    case(DELETE_TODO): {
      const {projectId, todoId} = action.payload;
      return {
        ...state,
        todos: {
          ...state.todos,
          [projectId]: state.todos[projectId]?.filter((item) => item.id !== todoId),
        },
      }
    }
    case(CHANGE_TODO_STATUS): {
      const {projectId, todoId, status} = action.payload;
      const targetIndex = state.todos[projectId]?.findIndex((item) => item.id === todoId);

      if (targetIndex === -1 || targetIndex === undefined) {
        return state;
      }
      const copyTodos = {...state.todos}

      copyTodos[projectId] = [...copyTodos[projectId]];

      copyTodos[projectId][targetIndex] = {
        ...copyTodos[projectId][targetIndex],
        status
      }

      return {
        ...state,
        todos: copyTodos,
      }
    }

    case (SET_LOADING_TODO): {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case (SET_ERROR_TODO): {
      return {
        ...state,
        error: action.payload,
      }
    }


    default:
      return state;
  }
}

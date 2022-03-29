import {tasksApi} from "../../api/endpoints/tasks";

export const CREATE_TODO = 'CREATE_TODO';

export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

export const DELETE_TODO = 'DELETE_TODO';

export const SET_LOADING_TODO = 'SET_LOADING_TODO'
export const SET_ERROR_TODO = 'SET_ERROR_TODO'
export const SET_TODOS = 'SET_TODOS'


export const setLoadingTodo = (isLoading) => ({
  type : SET_LOADING_TODO,
  payload: isLoading,
})

export const setErrorTodo = (error) => ({
  type : SET_ERROR_TODO,
  payload: error,
})

export const setTodos = (projectId,todos) => ({
  type : SET_TODOS,
  payload: {
    projectId,
    todos
  },
})

export const createTodo = (projectId, todo) => ({
  type: CREATE_TODO,
  payload: {
    projectId,
    todo
  }
})

export const getTodosThunk = (projectId) =>async (dispatch) => {
  dispatch(setLoadingTodo(true))

  try {
    const result = await tasksApi.get(projectId);

    dispatch(setTodos(projectId, result));

  } catch (e) {
    dispatch(setErrorTodo(e))
  }
  dispatch(setLoadingTodo(false))
}


export const deleteTodo = (projectId, todoId) => ({
  type: DELETE_TODO,
  payload: {
    projectId,
    todoId
  }
})

export const changeTodo = (projectId, todoId, status) => ({
  type: CHANGE_TODO_STATUS,
  payload: {
    projectId, todoId, status
  }
})


export const createTodoThunk = (projectId, todo) => async (dispatch) => {
  dispatch(setLoadingTodo(true))

  try {
    const data = await tasksApi.create({
      ...todo,
      "project":projectId,
    })
    dispatch(createTodo(projectId, data))
  } catch (e) {
    dispatch(setErrorTodo(e));
  }
  dispatch(setLoadingTodo(false))
}

export const deleteTodoThunk = (projectId, todoId) => async (dispatch) => {

  dispatch(setLoadingTodo(true))

  try {
    await tasksApi.delete(todoId);
    dispatch(deleteTodo(projectId, todoId))
  } catch (e) {
    dispatch(setErrorTodo(e));
  }
  dispatch(setLoadingTodo(false))
}

export const changeTodoThunk = (projectId, todoId, status) => (dispatch) => {
  dispatch(changeTodo(projectId, todoId, status))
}

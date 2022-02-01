
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS'

export const SET_FILTER_BY_STATUS = 'SET_FILTER_BY_STATUS'

export const setFilterByStatusAction = (filterBy) => ({
  type: SET_FILTER_BY_STATUS,
  payload: filterBy,
})

export const addTodoAction = (projectID, task) => ({
  type: ADD_TODO,
  payload: {
    task,
    projectID
  },
})

export const removeTodoAction = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId
})

export const changeTodoStatus = (projectID,todoId, status) => ({
  type: CHANGE_TODO_STATUS,
  payload: {
    projectID,
    id: todoId,
    status
  }
})

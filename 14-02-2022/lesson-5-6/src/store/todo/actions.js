
export const CREATE_TODO = 'CREATE_TODO';

export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

export const DELETE_TODO = 'DELETE_TODO';

export const createTodo = (projectId, todo) => ({
  type: CREATE_TODO,
  payload: {
    projectId,
    todo
  }
})

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

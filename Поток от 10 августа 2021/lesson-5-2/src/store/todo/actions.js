

export const CREATE_TODO = 'CREATE_TODO';

export const REMOVE_TODO = 'REMOVE_TODO';

export const CHANGE_TODO = 'CHANGE_TODO';


export const createActionCreateTodo = (payload) => ({
  type: CREATE_TODO,
  payload
})

export const createActionRemoveTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
})

export const createActionChangeTodo = (id, status) => ({
  type: CHANGE_TODO,
  payload: {id, status}
})
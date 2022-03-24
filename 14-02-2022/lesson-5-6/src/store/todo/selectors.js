
export const getTodosFromState = (state) => state.todo;

export const getTodos = (state) => getTodosFromState(state).todos;

export const getIsLoadingTodo = (state) => getTodosFromState(state).isLoading

export const getErrorTodo = (state) => getTodosFromState(state).error

export const getTodoListByProject = (projectId) => (state) => getTodos(state)[projectId]

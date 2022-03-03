
export const getTodosFromState = (state) => state.todo;

export const getTodos = (state) => getTodosFromState(state).todos;

export const getTodoListByProject = (projectId) => (state) => getTodos(state)[projectId]

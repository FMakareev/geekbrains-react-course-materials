export const getTodosFromStore = (state) => state.todos;
export const getTodos = (state) => getTodosFromStore(state).data;
export const getLoading = (state) => getTodosFromStore(state).isLoading;
export const getError = (state) => getTodosFromStore(state).isError;

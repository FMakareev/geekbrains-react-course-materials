export const getUsersFromStore = (state) => state.users;
export const getUsers = (state) => getUsersFromStore(state).data;
export const getLoading = (state) => getUsersFromStore(state).isLoading;
export const getError = (state) => getUsersFromStore(state).isError;

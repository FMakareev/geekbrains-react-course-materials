
export const getPostReducer = (state) => state.posts;

export const getPosts = (state) => getPostReducer(state).posts;
export const getPostLoading = (state) => getPostReducer(state).isLoading;
export const getPostError = (state) => getPostReducer(state).error;

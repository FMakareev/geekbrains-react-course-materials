export const getRootPosts = (state) => state.posts;
export const getPosts = (state) => getRootPosts(state).posts;
export const getPostsError = (state) => getRootPosts(state).error;
export const getPostsIsLoading = (state) => getRootPosts(state).isLoading;
export const getPostsTags = (state) => getRootPosts(state).tags;

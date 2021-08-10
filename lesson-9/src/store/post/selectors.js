
export const getPosts = (state) => state.posts.posts || [];
export const getPostById = (id) => (state) => state.posts.posts.find((post) => post.id === id);
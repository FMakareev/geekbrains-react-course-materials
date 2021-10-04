

/**
 * @param state
 * @param state.posts
 * @param state.profile
 * @return
 * {
 *   posts: [],
 *   tags: [],
 * }
 * */
export const postsSelector = (state) => state.posts || {};

/**
 * @param state
 * @param state.posts
 * @param state.profile
 * @return []
 * */
export const postsListSelector = (state) => postsSelector(state).posts;

/**
 * @param state
 * @param state.posts
 * @param state.profile
 * @return []
 * */
export const tagsSelector = (state) => postsSelector(state).tags;

import {createApiReducer} from "../../helpers/createApiReducer";

export const POSTS_REDUCER = 'POSTS_REDUCER'

export const postsReducer = createApiReducer(POSTS_REDUCER, 'https://jsonplaceholder.typicode.com/posts');

import {attempt} from "../lib/attempt";
import {endpoints} from "../endpoints";


export const postsApi = {
  getPosts: async () => attempt(endpoints.posts),
  getPost: async (id) => attempt(endpoints.post.replace(':id', id)),
  getComments: async (id) => attempt(endpoints.comments.replace(':id', id)),
}
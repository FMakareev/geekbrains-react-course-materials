import {db} from '../firebase';


export const postsRef = db.ref('posts');


export const postsApi = {

  createPost: (title, content) => {
    return postsRef.push({title, content})
  }

}
import {db} from '../firebase';

export const postsApi = {
  create: (title, content) => {
    return db.ref('posts').push({
      title,
      content
    })
      .then((ref) => ref.get())
      .then((snapshot) => ({
        id: snapshot.key,
        ...snapshot.val(),
      }))
  },
  update: (id, title, content) => {
    return db.ref(`posts`).child(id).set({
      title,
      content
    })
  },
  delete: (id) => db.ref('posts').child(id).remove(),
  getList: (callback) => {
    db
      .ref('posts')
      .on('value', (snapshot) => {
        const posts = []
        snapshot.forEach((snap) => {
          posts.push({
            id: snap.key,
            ...snap.val(),
          })
        })
        callback(posts)
      })
  },
  getAdded: (callback) => {
    db
      .ref('posts')
      .on('child_added', (snapshot) => {
        callback({
          id: snapshot.key,
          ...snapshot.val(),
        })
      })
  },
  getChanged: (callback) => {
    db
      .ref('posts')
      .on('child_changed', (snapshot) => {
        callback({
          id: snapshot.key,
          ...snapshot.val(),
        })
      })

  }
}
import {auth} from "../firebase";


export const userApi = {
  login: (email, password) => auth.signInWithEmailAndPassword(email, password),
  logout: () => auth.signOut(),
  registration: (email, password) => auth.createUserWithEmailAndPassword(email, password),
  initAuth: (onAuth) => {
    auth.onAuthStateChanged(onAuth);
  }
}
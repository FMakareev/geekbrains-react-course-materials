import {Home} from "./Home";
import {Posts} from "./Posts";
import {Profile} from "./Profile";

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/posts',
    component: Posts,
  },
  {
    path: '/profile',
    component: Profile,
  }
]
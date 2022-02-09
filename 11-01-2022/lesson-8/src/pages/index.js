import { Switch, Route } from "react-router-dom";

import {MiddlewareExample} from "./middleware";
import {FetchExample} from "./fetch";
import {Todos} from "./todos";

export const navigation = [
  {
    path: "/fetch",
    component: FetchExample,
    title: "Fetch Example"
  },
  {
    path: "/middleware",
    component: MiddlewareExample,
    title: "Middleware Example"
  },
  {
    path: "/todos",
    component: Todos,
    title: "Todos"
  }
];

export const ExercisesRoute = () => {
  return (
    <Switch>
      {navigation.map(({ path, component }) => (
        <Route component={component} path={path} />
      ))}
    </Switch>
  );
};

import { Switch, Route } from "react-router-dom";
import { StudentExercises1 } from "./todos/exercises1";
import { StudentExercises2 } from "./todos/exercises2";

export const navigation = [
  {
    path: "/fetch",
    component: StudentExercises1,
    title: "Fetch"
  },
  {
    path: "/middleware",
    component: StudentExercises2,
    title: "Middleware"
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

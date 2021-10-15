import { Switch, Route } from "react-router-dom";
import { StudentExercises1 } from "./todos/exercises1";
import { StudentExercises2 } from "./todos/exercises2";
import { Homework } from "./homework";

export const navigation = [
  {
    path: "/homework",
    component: Homework,
    title: "homework"
  },
  {
    path: "/student/fetch",
    component: StudentExercises1,
    title: "Student/Fetch"
  },
  {
    path: "/student/middleware",
    component: StudentExercises2,
    title: "Student/Middleware"
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

import {Projects} from "./components/Projects";
import {Tasks} from "./components/Tasks/tasks";
import {Route} from "react-router";


export const Todo = () => {
  return <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '16px'
    }}
  >
    <Route path={'/projects'}>
      <Projects />
    </Route>
    <Route path={'/projects/:projectID'}>
      <Tasks />
    </Route>
  </div>
}
